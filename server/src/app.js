import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GameRoom } from './GameRoom.js';
import { calculateAllPossible } from './YachtRules.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * 게임 서버 생성 (listen은 호출자 몫 — 테스트에서 임의 포트 사용)
 * @param {{ emptyRoomGraceMs?: number }} options
 *   emptyRoomGraceMs: 게임 중 전원이 끊긴 방을 삭제하기까지의 유예 시간.
 *   브라우저 백그라운드 탭 스로틀링 등으로 일시에 전원이 끊겨도 재접속 여지를 준다.
 */
export function createGameServer(options = {}) {
  const emptyRoomGraceMs = options.emptyRoomGraceMs ?? 10 * 60 * 1000; // 기본 10분

  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
    // 백그라운드 탭 스로틀링으로 pong이 늦어도 버티도록 여유 있게 (기본 20초)
    pingTimeout: 60000,
  });

  // ========== 멀티 게임 방 관리 ==========
  const rooms = new Map();       // roomCode → GameRoom
  const socketToRoom = new Map(); // socketId → roomCode

  // 프로덕션: 빌드된 클라이언트 정적 파일 서빙
  app.use(express.static(join(__dirname, '..', 'public')));

  // Player count API for portal
  app.get('/api/player-count', (_req, res) => {
    let count = 0;
    for (const room of rooms.values()) {
      count += room.players.filter(p => p.isConnected).length;
    }
    res.json({ count });
  });

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  // 혼동하기 쉬운 문자(I, O) 제외한 4자리 코드 생성
  function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code;
    do {
      code = Array.from({ length: 4 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join('');
    } while (rooms.has(code));
    return code;
  }

  function getRoom(socketId) {
    const code = socketToRoom.get(socketId);
    return code ? rooms.get(code) : null;
  }

  function cleanupRoomIfEmpty(room) {
    if (room.players.filter(p => p.isConnected).length > 0) return;

    // 대기실은 재접속 대상이 없으므로 즉시 삭제
    if (room.phase === 'waiting') {
      rooms.delete(room.roomId);
      console.log(`[방 삭제] ${room.roomId}`);
      return;
    }

    // 게임 중/종료 방은 유예 후 삭제 — 그 사이 재접속하면 유지
    clearTimeout(room.emptyRoomTimer);
    room.emptyRoomTimer = setTimeout(() => {
      if (room.players.filter(p => p.isConnected).length === 0) {
        rooms.delete(room.roomId);
        console.log(`[방 삭제] ${room.roomId} (빈 방 유예 만료)`);
      }
    }, emptyRoomGraceMs);
    room.emptyRoomTimer.unref?.();
    console.log(`[빈 방 유예] ${room.roomId} — ${Math.round(emptyRoomGraceMs / 1000)}초 후 삭제 예정`);
  }

  io.on('connection', (socket) => {
    console.log(`[연결] ${socket.id}`);

    // ========== 방 만들기 ==========
    socket.on('room:create', ({ name }) => {
      const code = generateRoomCode();
      const room = new GameRoom(code);
      rooms.set(code, room);

      const result = room.addPlayer(socket.id, name);
      if (result.error) {
        rooms.delete(code);
        socket.emit('error', { message: result.error });
        return;
      }

      socketToRoom.set(socket.id, code);
      socket.join(code);

      console.log(`[방 생성] ${code} — ${result.player.name}`);
      socket.emit('room:created', { code, state: room.getRoomState() });

      const scoreCard = room.getPlayerScoreCard(socket.id);
      if (scoreCard) socket.emit('score:card', scoreCard);
    });

    // ========== 방 코드로 참가 ==========
    socket.on('room:join', ({ name, code }) => {
      const upperCode = (code || '').trim().toUpperCase();
      const room = rooms.get(upperCode);

      if (!room) {
        socket.emit('room:join:error', { message: `방 코드 "${upperCode}"를 찾을 수 없습니다.` });
        return;
      }

      const result = room.addPlayer(socket.id, name);
      if (result.error) {
        socket.emit('room:join:error', { message: result.error });
        return;
      }

      socketToRoom.set(socket.id, upperCode);
      socket.join(upperCode);

      console.log(`[참가] ${upperCode} — ${result.player.name}`);
      socket.emit('room:created', { code: upperCode, state: room.getRoomState() });
      io.to(upperCode).emit('room:state', room.getRoomState());

      const scoreCard = room.getPlayerScoreCard(socket.id);
      if (scoreCard) socket.emit('score:card', scoreCard);
    });

    // ========== 재접속 (새로고침 복귀) ==========
    socket.on('room:rejoin', ({ code, playerId }) => {
      const upperCode = (code || '').trim().toUpperCase();
      const room = rooms.get(upperCode);

      if (!room) {
        socket.emit('room:rejoin:error', { message: `방 "${upperCode}"이 존재하지 않습니다.` });
        return;
      }

      const player = room.reconnectPlayer(socket.id, playerId);
      if (!player) {
        socket.emit('room:rejoin:error', { message: '재접속할 수 없습니다.' });
        return;
      }

      socketToRoom.set(socket.id, upperCode);
      socket.join(upperCode);
      clearTimeout(room.emptyRoomTimer); // 빈 방 유예 취소

      // 동결됐던 게임 재개: 현재 턴 주인이 아직 끊겨 있으면 턴을 넘긴다
      let advancedOnRejoin = false;
      let finishedOnRejoin = false;
      if (room.phase === 'playing' && !room.getCurrentPlayer().isConnected) {
        advancedOnRejoin = true;
        finishedOnRejoin = room.advanceTurn();
      }

      console.log(`[재접속] ${upperCode} — ${player.name}`);
      socket.emit('room:rejoined', { code: upperCode, state: room.getRoomState() });
      io.to(upperCode).emit('room:state', room.getRoomState());

      const scoreCard = room.getPlayerScoreCard(socket.id);
      if (scoreCard) socket.emit('score:card', scoreCard);

      if (finishedOnRejoin) {
        io.to(upperCode).emit('game:finished', { rankings: room.calculateRankings() });
      } else if (advancedOnRejoin) {
        // 턴이 실제로 넘어간 경우에만 알림 (진행 중이던 턴은 건드리지 않음)
        const currentPlayer = room.getCurrentPlayer();
        io.to(upperCode).emit('turn:begin', {
          playerId: currentPlayer.id,
          playerName: currentPlayer.name,
          round: room.currentRound,
        });
      } else if (room.phase === 'finished') {
        socket.emit('game:finished', { rankings: room.calculateRankings() });
      }
    });

    // ========== 게임 시작 ==========
    socket.on('game:start', () => {
      const room = getRoom(socket.id);
      if (!room) return;

      const player = room.getPlayer(socket.id);
      if (!player || !player.isHost) {
        socket.emit('error', { message: '호스트만 게임을 시작할 수 있습니다.' });
        return;
      }

      const result = room.startGame();
      if (result.error) {
        socket.emit('error', { message: result.error });
        return;
      }

      console.log(`[게임 시작] ${room.roomId}`);
      io.to(room.roomId).emit('game:started', room.getRoomState());

      room.players.forEach(p => {
        const sc = room.getPlayerScoreCard(p.id);
        if (sc) io.to(p.id).emit('score:card', sc);
      });

      const currentPlayer = room.getCurrentPlayer();
      io.to(room.roomId).emit('turn:begin', {
        playerId: currentPlayer.id,
        playerName: currentPlayer.name,
        round: room.currentRound,
      });
    });

    // ========== 주사위 굴리기 (1단계: 굴림 시작) ==========
    socket.on('dice:roll', () => {
      const room = getRoom(socket.id);
      if (!room) return;

      if (room.phase !== 'playing') {
        socket.emit('error', { message: '게임이 진행 중이 아닙니다.' });
        return;
      }
      if (!room.isCurrentPlayer(socket.id)) {
        socket.emit('error', { message: '당신의 차례가 아닙니다.' });
        return;
      }

      const result = room.startRoll();
      if (result.error) {
        socket.emit('error', { message: result.error });
        return;
      }

      console.log(`[굴림 시작] ${room.roomId} (${result.rollCount}/3) — 물리 결과 대기 중...`);
      io.to(room.roomId).emit('dice:rolling', {
        playerId: socket.id,
        rollCount: result.rollCount,
        kept: result.kept,
      });

      // 안전장치: 15초 내 결과 미도착 시 서버에서 랜덤 생성
      room.rollResultTimeout = setTimeout(() => {
        if (!room.waitingForResult) return;
        console.log(`[타임아웃] ${room.roomId} — 서버 랜덤 생성`);
        const fallbackValues = Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * 6) + 1
        );
        const fallbackResult = room.setDiceResult(fallbackValues);
        if (!fallbackResult.error) {
          io.to(room.roomId).emit('dice:rolled', {
            dice: fallbackResult.dice,
            rollCount: fallbackResult.rollCount,
            kept: fallbackResult.kept,
          });
          const player = room.getPlayer(socket.id);
          if (player) {
            const possible = calculateAllPossible(fallbackResult.dice, player.scores);
            io.to(socket.id).emit('score:possible', { possible });
          }
        }
      }, 15000);
    });

    // ========== 주사위 결과 수신 (2단계: 클라이언트 물리 결과) ==========
    socket.on('dice:result', ({ values }) => {
      const room = getRoom(socket.id);
      if (!room) return;

      if (room.phase !== 'playing') {
        socket.emit('error', { message: '게임이 진행 중이 아닙니다.' });
        return;
      }
      if (!room.isCurrentPlayer(socket.id)) {
        socket.emit('error', { message: '당신의 차례가 아닙니다.' });
        return;
      }

      if (room.rollResultTimeout) {
        clearTimeout(room.rollResultTimeout);
        room.rollResultTimeout = null;
      }

      const result = room.setDiceResult(values);
      if (result.error) {
        socket.emit('error', { message: result.error });
        return;
      }

      console.log(`[굴림 결과] ${room.roomId} ${result.dice} (${result.rollCount}/3)`);
      io.to(room.roomId).emit('dice:rolled', {
        dice: result.dice,
        rollCount: result.rollCount,
        kept: result.kept,
      });

      const player = room.getPlayer(socket.id);
      if (player) {
        const possible = calculateAllPossible(result.dice, player.scores);
        socket.emit('score:possible', { possible });
      }
    });

    // ========== 물리 스트리밍 릴레이 (Roller → Observer) ==========
    socket.on('dice:physics-stream', (data) => {
      const room = getRoom(socket.id);
      if (!room || !room.isCurrentPlayer(socket.id)) return;
      socket.to(room.roomId).emit('dice:physics-stream', data);
    });

    // ========== 주사위 유지 선택 ==========
    socket.on('dice:keep', ({ kept }) => {
      const room = getRoom(socket.id);
      if (!room) return;

      if (!room.isCurrentPlayer(socket.id)) {
        socket.emit('error', { message: '당신의 차례가 아닙니다.' });
        return;
      }

      const result = room.setKept(kept);
      if (result.error) {
        socket.emit('error', { message: result.error });
        return;
      }

      io.to(room.roomId).emit('dice:kept', { kept: result.kept });
    });

    // ========== 점수 카테고리 선택 ==========
    socket.on('score:select', ({ category }) => {
      const room = getRoom(socket.id);
      if (!room) return;

      if (room.phase !== 'playing') {
        socket.emit('error', { message: '게임이 진행 중이 아닙니다.' });
        return;
      }
      if (!room.isCurrentPlayer(socket.id)) {
        socket.emit('error', { message: '당신의 차례가 아닙니다.' });
        return;
      }

      const result = room.selectCategory(socket.id, category);
      if (result.error) {
        socket.emit('error', { message: result.error });
        return;
      }

      console.log(`[점수] ${room.roomId} ${room.getPlayer(socket.id)?.name}: ${category} = ${result.score}`);

      const scoreCard = room.getPlayerScoreCard(socket.id);
      if (scoreCard) socket.emit('score:card', scoreCard);

      io.to(room.roomId).emit('score:updated', {
        playerId: result.playerId,
        category: result.category,
      });

      if (result.gameFinished) {
        console.log(`[게임 종료] ${room.roomId}`, result.rankings.map(r => `${r.rank}. ${r.name}: ${r.totalScore}`));
        io.to(room.roomId).emit('game:finished', { rankings: result.rankings });
      } else {
        const nextPlayer = room.getCurrentPlayer();
        io.to(room.roomId).emit('turn:begin', {
          playerId: nextPlayer.id,
          playerName: nextPlayer.name,
          round: result.currentRound,
        });
        io.to(room.roomId).emit('room:state', room.getRoomState());
      }
    });

    // ========== 다른 플레이어 점수 조회 ==========
    socket.on('score:request', ({ playerId }) => {
      const room = getRoom(socket.id);
      if (!room) return;

      if (room.phase !== 'playing' && room.phase !== 'finished') {
        socket.emit('error', { message: '게임이 진행 중이 아닙니다.' });
        return;
      }
      const scoreData = room.getPlayerScoreCardById(playerId);
      if (!scoreData) {
        socket.emit('error', { message: '플레이어를 찾을 수 없습니다.' });
        return;
      }
      socket.emit('score:player', scoreData);
    });

    // ========== 게임 재시작 ==========
    socket.on('game:restart', () => {
      const room = getRoom(socket.id);
      if (!room) return;

      const player = room.getPlayer(socket.id);
      if (!player || !player.isHost) {
        socket.emit('error', { message: '호스트만 재시작할 수 있습니다.' });
        return;
      }

      console.log(`[게임 재시작] ${room.roomId}`);
      room.restart();
      io.to(room.roomId).emit('room:state', room.getRoomState());
    });

    // ========== 연결 끊김 ==========
    socket.on('disconnect', () => {
      console.log(`[연결 끊김] ${socket.id}`);
      const room = getRoom(socket.id);
      socketToRoom.delete(socket.id);

      if (!room) return;

      const wasCurrentPlayer = room.isCurrentPlayer(socket.id);
      const player = room.removePlayer(socket.id);

      if (player) {
        io.to(room.roomId).emit('room:state', room.getRoomState());

        if (room.phase === 'playing') {
          io.to(room.roomId).emit('player:disconnected', {
            playerId: player.id,
            playerName: player.name,
          });

          // 전원 이탈 시엔 턴을 넘기지 않고 상태 동결 (빈 방 유예 동안 재접속 대기).
          // 턴을 넘기면 advanceTurn이 끊긴 전원을 0점 처리해 게임을 끝내버린다.
          const hasConnected = room.players.some(p => p.isConnected);
          if (wasCurrentPlayer && hasConnected) {
            const finished = room.advanceTurn();
            if (finished) {
              console.log(`[게임 종료] ${room.roomId} — 이탈 플레이어 0점 처리로 전원 완료`);
              io.to(room.roomId).emit('game:finished', { rankings: room.calculateRankings() });
            } else {
              const nextPlayer = room.getCurrentPlayer();
              io.to(room.roomId).emit('turn:begin', {
                playerId: nextPlayer.id,
                playerName: nextPlayer.name,
                round: room.currentRound,
              });
              io.to(room.roomId).emit('room:state', room.getRoomState());
            }
          }
        }
      }

      cleanupRoomIfEmpty(room);
    });
  });

  return { app, httpServer, io, rooms };
}
