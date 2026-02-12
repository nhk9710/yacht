import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GameRoom } from './GameRoom.js';
import { calculateAllPossible } from './YachtRules.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// 프로덕션: 빌드된 클라이언트 정적 파일 서빙
app.use(express.static(join(__dirname, '..', 'public')));

// Player count API for portal
app.get('/api/player-count', (_req, res) => {
  res.json({ count: room.players.filter(p => p.isConnected).length });
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'));
});

// 단일 게임 방
const room = new GameRoom();

io.on('connection', (socket) => {
  console.log(`[연결] ${socket.id}`);

  // ========== 플레이어 참가 ==========
  socket.on('player:join', ({ name }) => {
    const result = room.addPlayer(socket.id, name);

    if (result.error) {
      socket.emit('error', { message: result.error });
      return;
    }

    console.log(`[참가] ${result.player.name} (${socket.id})`);

    // 전체 방 상태 동기화
    io.emit('room:state', room.getRoomState());

    // 본인에게 개인 점수표 전송
    const scoreCard = room.getPlayerScoreCard(socket.id);
    if (scoreCard) {
      socket.emit('score:card', scoreCard);
    }
  });

  // ========== 게임 시작 ==========
  socket.on('game:start', () => {
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

    console.log('[게임 시작]');

    io.emit('game:started', room.getRoomState());

    // 모든 플레이어에게 개인 점수표 전송
    room.players.forEach(p => {
      const sc = room.getPlayerScoreCard(p.id);
      if (sc) io.to(p.id).emit('score:card', sc);
    });

    // 첫 턴 알림
    const currentPlayer = room.getCurrentPlayer();
    io.emit('turn:begin', {
      playerId: currentPlayer.id,
      playerName: currentPlayer.name,
      round: room.currentRound,
    });
  });

  // ========== 주사위 굴리기 (1단계: 굴림 시작) ==========
  socket.on('dice:roll', () => {
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

    console.log(`[굴림 시작] (${result.rollCount}/3) — 물리 결과 대기 중...`);

    // 모든 플레이어에게 굴림 시작 알림 (값 없이)
    io.emit('dice:rolling', {
      playerId: socket.id,
      rollCount: result.rollCount,
      kept: result.kept,
    });

    // 안전장치: 15초 내 결과 미도착 시 서버에서 랜덤 생성
    room.rollResultTimeout = setTimeout(() => {
      if (!room.waitingForResult) return;
      console.log('[타임아웃] 물리 결과 미도착 — 서버 랜덤 생성');
      const fallbackValues = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 6) + 1
      );
      const fallbackResult = room.setDiceResult(fallbackValues);
      if (!fallbackResult.error) {
        io.emit('dice:rolled', {
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
    if (room.phase !== 'playing') {
      socket.emit('error', { message: '게임이 진행 중이 아닙니다.' });
      return;
    }
    if (!room.isCurrentPlayer(socket.id)) {
      socket.emit('error', { message: '당신의 차례가 아닙니다.' });
      return;
    }

    // 타임아웃 취소
    if (room.rollResultTimeout) {
      clearTimeout(room.rollResultTimeout);
      room.rollResultTimeout = null;
    }

    const result = room.setDiceResult(values);
    if (result.error) {
      socket.emit('error', { message: result.error });
      return;
    }

    console.log(`[굴림 결과] ${result.dice} (${result.rollCount}/3)`);

    // 모든 플레이어에게 최종 주사위 결과 전송
    io.emit('dice:rolled', {
      dice: result.dice,
      rollCount: result.rollCount,
      kept: result.kept,
    });

    // 현재 플레이어에게 가능한 점수 계산해서 전송
    const player = room.getPlayer(socket.id);
    if (player) {
      const possible = calculateAllPossible(result.dice, player.scores);
      socket.emit('score:possible', { possible });
    }
  });

  // ========== 물리 스트리밍 릴레이 (Roller → Observer) ==========
  socket.on('dice:physics-stream', (data) => {
    // 현재 턴 플레이어만 스트리밍 가능
    if (!room.isCurrentPlayer(socket.id)) return;
    // 다른 모든 클라이언트에게 릴레이 (송신자 제외)
    socket.broadcast.emit('dice:physics-stream', data);
  });

  // ========== 주사위 유지 선택 ==========
  socket.on('dice:keep', ({ kept }) => {
    if (!room.isCurrentPlayer(socket.id)) {
      socket.emit('error', { message: '당신의 차례가 아닙니다.' });
      return;
    }

    const result = room.setKept(kept);
    if (result.error) {
      socket.emit('error', { message: result.error });
      return;
    }

    // 모든 플레이어에게 유지 상태 동기화
    io.emit('dice:kept', { kept: result.kept });
  });

  // ========== 점수 카테고리 선택 ==========
  socket.on('score:select', ({ category }) => {
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

    console.log(`[점수] ${room.getPlayer(socket.id)?.name}: ${category} = ${result.score}`);

    // 본인에게 업데이트된 점수표 전송
    const scoreCard = room.getPlayerScoreCard(socket.id);
    if (scoreCard) {
      socket.emit('score:card', scoreCard);
    }

    // 모든 플레이어에게 카테고리 사용 알림 (점수는 비공개)
    io.emit('score:updated', {
      playerId: result.playerId,
      category: result.category,
    });

    if (result.gameFinished) {
      console.log('[게임 종료]', result.rankings.map(r => `${r.rank}. ${r.name}: ${r.totalScore}`));
      io.emit('game:finished', { rankings: result.rankings });
    } else {
      // 다음 턴
      const nextPlayer = room.getCurrentPlayer();
      io.emit('turn:begin', {
        playerId: nextPlayer.id,
        playerName: nextPlayer.name,
        round: result.currentRound,
      });

      // 방 상태 동기화
      io.emit('room:state', room.getRoomState());
    }
  });

  // ========== 다른 플레이어 점수 조회 ==========
  socket.on('score:request', ({ playerId }) => {
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
    const player = room.getPlayer(socket.id);
    if (!player || !player.isHost) {
      socket.emit('error', { message: '호스트만 재시작할 수 있습니다.' });
      return;
    }

    console.log('[게임 재시작]');
    room.restart();
    io.emit('room:state', room.getRoomState());
  });

  // ========== 연결 끊김 ==========
  socket.on('disconnect', () => {
    console.log(`[연결 끊김] ${socket.id}`);
    const player = room.removePlayer(socket.id);
    if (player) {
      io.emit('room:state', room.getRoomState());

      if (room.phase === 'playing') {
        io.emit('player:disconnected', {
          playerId: player.id,
          playerName: player.name,
        });

        // 현재 턴인 플레이어가 나갔으면 턴 넘기기
        if (room.isCurrentPlayer(socket.id)) {
          room.advanceTurn();
          const nextPlayer = room.getCurrentPlayer();
          if (nextPlayer) {
            io.emit('turn:begin', {
              playerId: nextPlayer.id,
              playerName: nextPlayer.name,
              round: room.currentRound,
            });
            io.emit('room:state', room.getRoomState());
          }
        }
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', async () => {
  console.log('');
  console.log('='.repeat(50));
  console.log('  Yacht Dice Game Server');
  console.log(`  http://0.0.0.0:${PORT}`);
  console.log('='.repeat(50));
  console.log('');

  // 네트워크 IP 출력
  try {
    const os = await import('os');
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          console.log(`  다른 플레이어 접속: http://${iface.address}:${PORT}`);
        }
      }
    }
  } catch (e) {
    console.log('  (네트워크 IP를 가져올 수 없습니다)');
  }
  console.log('');
});
