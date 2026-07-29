import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { io as ioc } from 'socket.io-client';
import { createGameServer } from '../src/app.js';
import { CATEGORIES } from '../src/YachtRules.js';

let httpServer, io, port;
let clients = [];

function connect() {
  return new Promise((resolve, reject) => {
    const socket = ioc(`http://localhost:${port}`, { transports: ['websocket'] });
    clients.push(socket);
    socket.on('connect', () => resolve(socket));
    socket.on('connect_error', reject);
  });
}

// 이벤트 1회 대기 (미도착 시 명확한 메시지로 실패)
function waitFor(socket, event, ms = 1500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`'${event}' 이벤트가 ${ms}ms 내에 도착하지 않음`)),
      ms
    );
    socket.once(event, (data) => {
      clearTimeout(timer);
      resolve(data);
    });
  });
}

// 한 턴 진행: 굴림 → 물리 결과 제출 → 점수 선택
async function playTurn(socket, category, dice = [1, 2, 3, 4, 5]) {
  socket.emit('dice:roll');
  await waitFor(socket, 'dice:rolling');
  socket.emit('dice:result', { values: dice });
  await waitFor(socket, 'dice:rolled');
  socket.emit('score:select', { category });
  await waitFor(socket, 'score:updated');
}

// 방 생성(A) + 참가(B) + 게임 시작까지 진행
async function setupTwoPlayerGame() {
  const cA = await connect();
  cA.emit('room:create', { name: 'A' });
  const { code } = await waitFor(cA, 'room:created');

  const cB = await connect();
  cB.emit('room:join', { name: 'B', code });
  await waitFor(cB, 'room:created');

  cA.emit('game:start');
  await waitFor(cA, 'game:started');
  return { cA, cB, code };
}

beforeEach(async () => {
  ({ httpServer, io } = createGameServer({ emptyRoomGraceMs: 400 }));
  await new Promise(resolve => httpServer.listen(0, resolve));
  port = httpServer.address().port;
});

afterEach(async () => {
  clients.forEach(c => c.connected && c.disconnect());
  clients = [];
  io.close();
  await new Promise(resolve => httpServer.close(resolve));
});

describe('재접속 프로토콜 (Critical 2)', () => {
  test('게임 중 이탈한 플레이어가 이전 id로 재접속하면 상태가 복원된다', async () => {
    const { cA, cB, code } = await setupTwoPlayerGame();
    const oldId = cA.id;

    cA.disconnect();
    await waitFor(cB, 'player:disconnected');

    const cNew = await connect();
    const rejoined = waitFor(cNew, 'room:rejoined');
    const scoreCard = waitFor(cNew, 'score:card'); // 개인 점수표 재전송 (rejoined 직후 도착하므로 미리 대기)
    cNew.emit('room:rejoin', { code, playerId: oldId });
    const { code: rejoinedCode, state } = await rejoined;

    assert.equal(rejoinedCode, code);
    const me = state.players.find(p => p.id === cNew.id);
    assert.ok(me, '재접속한 소켓 id로 플레이어가 존재해야 함');
    assert.equal(me.name, 'A');
    assert.equal(me.isConnected, true);
    await scoreCard;
  });

  test('존재하지 않는 플레이어 id로 재접속하면 에러를 받는다', async () => {
    const { code } = await setupTwoPlayerGame();

    const cNew = await connect();
    cNew.emit('room:rejoin', { code, playerId: 'no-such-id' });
    const { message } = await waitFor(cNew, 'room:rejoin:error');

    assert.ok(message);
  });
});

describe('빈 방 유예 (일시적 전원 이탈 시 방 유지)', () => {
  test('게임 중 전원이 끊겨도 유예 시간 내 재접속하면 방이 유지된다', async () => {
    const { cA, cB, code } = await setupTwoPlayerGame();
    const oldIdA = cA.id;

    cA.disconnect();
    cB.disconnect();
    await new Promise(r => setTimeout(r, 100)); // 서버가 끊김 처리할 시간 (유예 400ms 내)

    const cNew = await connect();
    const rejoined = waitFor(cNew, 'room:rejoined');
    cNew.emit('room:rejoin', { code, playerId: oldIdA });
    const { state } = await rejoined;

    assert.equal(state.phase, 'playing');
    assert.equal(state.players.find(p => p.id === cNew.id)?.name, 'A');
    // 끊겨 있는 B의 턴이었다면 재접속한 A에게 턴이 넘어와야 함 (교착 방지)
    assert.equal(state.players[state.currentPlayerIndex].id, cNew.id);
  });

  test('유예 시간이 지나면 빈 방이 삭제되어 재접속할 수 없다', async () => {
    const { cA, cB, code } = await setupTwoPlayerGame();
    const oldIdA = cA.id;

    cA.disconnect();
    cB.disconnect();
    await new Promise(r => setTimeout(r, 700)); // 유예(400ms) 경과

    const cNew = await connect();
    const failed = waitFor(cNew, 'room:rejoin:error');
    cNew.emit('room:rejoin', { code, playerId: oldIdA });
    await failed;
  });
});

describe('이탈로 인한 게임 종료 (Critical 1 소켓 연동)', () => {
  test('마지막 미완료 플레이어가 자기 턴에 이탈하면 남은 플레이어에게 game:finished가 온다', async () => {
    const { cA, cB } = await setupTwoPlayerGame();

    // 두 명이 11개 카테고리씩 교대로 채운 뒤 A가 12번째 완료 → B의 턴
    for (const cat of CATEGORIES.slice(0, 11)) {
      await playTurn(cA, cat);
      await playTurn(cB, cat);
    }
    await playTurn(cA, CATEGORIES[11]);

    cB.disconnect(); // 현재 턴인 B가 이탈 → B 0점 처리 → 전원 완료

    const { rankings } = await waitFor(cA, 'game:finished');
    assert.equal(rankings.length, 2);
    const rankB = rankings.find(r => r.name === 'B');
    assert.equal(rankB.scores[CATEGORIES[11]], 0, 'B의 남은 카테고리는 0점 처리');
  });
});
