import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { GameRoom } from '../src/GameRoom.js';
import { CATEGORIES } from '../src/YachtRules.js';

// n명이 참가하고 게임이 시작된 방 생성 (socketId: s1, s2, ...)
function makePlayingRoom(count) {
  const room = new GameRoom('TEST');
  for (let i = 1; i <= count; i++) {
    room.addPlayer(`s${i}`, `P${i}`);
  }
  room.startGame();
  return room;
}

// 현재 플레이어가 한 턴을 진행 (굴림 → 결과 → 점수 선택)
function playTurn(room, category, dice = [1, 2, 3, 4, 5]) {
  const current = room.getCurrentPlayer();
  room.startRoll();
  room.setDiceResult(dice);
  return room.selectCategory(current.id, category);
}

describe('턴 교착 (Critical 1)', () => {
  test('끊긴 플레이어의 턴은 0점 처리 후 다음 접속 중인 플레이어로 넘어간다', () => {
    const room = makePlayingRoom(3); // 현재 턴: s1
    room.removePlayer('s2'); // s2가 남의 턴에 이탈

    playTurn(room, 'ones'); // s1이 점수 선택 → 턴이 s2를 건너뛰어야 함

    assert.equal(room.getCurrentPlayer().id, 's3');
    assert.equal(room.phase, 'playing');
    const ghost = room.players.find(p => p.id === 's2');
    for (const cat of CATEGORIES) {
      assert.equal(ghost.scores[cat], 0, `${cat}는 0점 처리되어야 함`);
    }
  });

  test('끊긴 플레이어 0점 처리로 전원 완료되면 게임이 종료된다', () => {
    const room = makePlayingRoom(2);
    // 두 플레이어 모두 11개 카테고리 채움 (교대 진행)
    for (const cat of CATEGORIES.slice(0, 11)) {
      playTurn(room, cat); // s1
      playTurn(room, cat); // s2
    }
    playTurn(room, CATEGORIES[11]); // s1이 12번째 완료 → 턴이 s2로

    room.removePlayer('s2'); // 현재 턴인 s2가 이탈
    const finished = room.advanceTurn(); // index.js의 disconnect 흐름

    assert.equal(finished, true);
    assert.equal(room.phase, 'finished');
  });
});

describe('호스트 유실 (Critical 3)', () => {
  test('게임 중 호스트가 이탈하면 접속 중인 플레이어에게 호스트가 넘어간다', () => {
    const room = makePlayingRoom(2);
    room.removePlayer('s1'); // 호스트 이탈

    assert.equal(room.players.find(p => p.id === 's1').isHost, false);
    assert.equal(room.players.find(p => p.id === 's2').isHost, true);
  });

  test('재시작 시 끊긴 플레이어가 정리되고 호스트가 유지된다', () => {
    const room = makePlayingRoom(3);
    room.removePlayer('s2');
    room.restart();

    assert.deepEqual(room.players.map(p => p.id), ['s1', 's3']);
    assert.ok(room.players.every(p => p.isConnected));
    assert.equal(room.players.filter(p => p.isHost).length, 1);
  });

  test('호스트 이탈 후 재시작해도 접속 중인 플레이어 중 호스트가 정확히 1명이다', () => {
    const room = makePlayingRoom(3);
    room.removePlayer('s1'); // 호스트 이탈 → 이양
    room.restart();

    assert.deepEqual(room.players.map(p => p.id), ['s2', 's3']);
    assert.equal(room.players.filter(p => p.isHost).length, 1);
  });
});

describe('재접속 (Critical 2)', () => {
  test('접속이 끊긴 플레이어는 새 소켓 id로 재접속할 수 있다', () => {
    const room = makePlayingRoom(2);
    room.removePlayer('s1');

    const player = room.reconnectPlayer('s1-new', 's1');

    assert.ok(player);
    assert.equal(player.id, 's1-new');
    assert.equal(player.isConnected, true);
  });

  test('접속 중인 플레이어의 id로는 재접속(탈취)할 수 없다', () => {
    const room = makePlayingRoom(2);

    const player = room.reconnectPlayer('hijack', 's1');

    assert.equal(player, null);
    assert.equal(room.getPlayer('s1').isConnected, true);
  });
});
