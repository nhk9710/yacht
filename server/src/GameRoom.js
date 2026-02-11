import {
  CATEGORIES,
  calculate,
  calculateTotal,
  calculateBonus,
  createEmptyScoreCard,
  isScoreCardComplete,
} from './YachtRules.js';

const PLAYER_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7'];
const MAX_PLAYERS = 5;
const MAX_ROLLS = 3;
const TOTAL_ROUNDS = 12;
const DISCONNECT_TIMEOUT = 30000; // 30초

export class GameRoom {
  constructor() {
    this.players = [];
    this.phase = 'waiting'; // waiting | playing | finished
    this.currentPlayerIndex = 0;
    this.currentRound = 1;
    this.turnState = {
      rollCount: 0,
      dice: [0, 0, 0, 0, 0],
      kept: [false, false, false, false, false],
    };
    this.disconnectTimers = new Map();
    this.waitingForResult = false;
    this.rollResultTimeout = null;
  }

  // ========== 플레이어 관리 ==========

  addPlayer(socketId, name) {
    if (this.players.length >= MAX_PLAYERS) {
      return { error: '최대 인원(5명)에 도달했습니다.' };
    }
    if (this.phase === 'playing') {
      return { error: '게임이 진행 중입니다.' };
    }

    const player = {
      id: socketId,
      name: name.trim().substring(0, 12) || `Player${this.players.length + 1}`,
      color: PLAYER_COLORS[this.players.length],
      scores: createEmptyScoreCard(),
      isHost: this.players.length === 0,
      isConnected: true,
      usedCategories: {}, // 다른 플레이어에게 보이는 사용된 카테고리 맵
    };

    this.players.push(player);
    return { player };
  }

  removePlayer(socketId) {
    const index = this.players.findIndex(p => p.id === socketId);
    if (index === -1) return null;

    if (this.phase === 'waiting') {
      const removed = this.players.splice(index, 1)[0];
      // 호스트 이전
      if (removed.isHost && this.players.length > 0) {
        this.players[0].isHost = true;
      }
      return removed;
    }

    // 게임 중이면 연결 끊김 처리
    const player = this.players[index];
    player.isConnected = false;
    return player;
  }

  reconnectPlayer(socketId, oldPlayerId) {
    const player = this.players.find(p => p.id === oldPlayerId);
    if (!player) return null;
    player.id = socketId;
    player.isConnected = true;
    if (this.disconnectTimers.has(oldPlayerId)) {
      clearTimeout(this.disconnectTimers.get(oldPlayerId));
      this.disconnectTimers.delete(oldPlayerId);
    }
    return player;
  }

  getPlayer(socketId) {
    return this.players.find(p => p.id === socketId);
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  isCurrentPlayer(socketId) {
    const current = this.getCurrentPlayer();
    return current && current.id === socketId;
  }

  // ========== 게임 진행 ==========

  startGame() {
    if (this.players.length < 1) {
      return { error: '최소 1명이 필요합니다.' };
    }
    if (this.phase !== 'waiting') {
      return { error: '이미 게임이 진행 중입니다.' };
    }

    this.phase = 'playing';
    this.currentPlayerIndex = 0;
    this.currentRound = 1;
    this.resetTurn();

    // 모든 플레이어 점수 초기화
    this.players.forEach(p => {
      p.scores = createEmptyScoreCard();
      p.usedCategories = {};
    });

    return { success: true };
  }

  resetTurn() {
    this.turnState = {
      rollCount: 0,
      dice: [0, 0, 0, 0, 0],
      kept: [false, false, false, false, false],
    };
    this.waitingForResult = false;
    if (this.rollResultTimeout) {
      clearTimeout(this.rollResultTimeout);
      this.rollResultTimeout = null;
    }
  }

  /**
   * 1단계: 굴리기 시작 (rollCount 증가만, 값은 클라이언트 물리 결과를 기다림)
   */
  startRoll() {
    if (this.turnState.rollCount >= MAX_ROLLS) {
      return { error: '더 이상 굴릴 수 없습니다. (최대 3회)' };
    }

    this.turnState.rollCount++;

    // 첫 번째 굴림 시 kept 초기화 (모두 false)
    if (this.turnState.rollCount === 1) {
      this.turnState.kept = [false, false, false, false, false];
    }

    this.waitingForResult = true;

    return {
      rollCount: this.turnState.rollCount,
      kept: [...this.turnState.kept],
    };
  }

  /**
   * 2단계: 클라이언트 물리 시뮬레이션 결과 수용
   */
  setDiceResult(values) {
    if (!this.waitingForResult) {
      return { error: '굴리기가 시작되지 않았습니다.' };
    }
    if (!Array.isArray(values) || values.length !== 5) {
      return { error: '잘못된 주사위 값입니다.' };
    }
    if (values.some(v => !Number.isInteger(v) || v < 1 || v > 6)) {
      return { error: '주사위 값은 1~6 정수여야 합니다.' };
    }

    // kept 주사위는 기존 값 유지, 나머지만 클라이언트 결과 수용
    const newDice = [...this.turnState.dice];
    for (let i = 0; i < 5; i++) {
      if (!this.turnState.kept[i]) {
        newDice[i] = values[i];
      }
    }

    this.turnState.dice = newDice;
    this.waitingForResult = false;

    return {
      dice: [...newDice],
      rollCount: this.turnState.rollCount,
      kept: [...this.turnState.kept],
    };
  }

  setKept(kept) {
    if (this.turnState.rollCount === 0) {
      return { error: '먼저 주사위를 굴려주세요.' };
    }
    if (this.turnState.rollCount >= MAX_ROLLS) {
      return { error: '이미 3번 굴렸습니다. 점수를 선택하세요.' };
    }
    if (!Array.isArray(kept) || kept.length !== 5) {
      return { error: '잘못된 유지 정보입니다.' };
    }

    this.turnState.kept = kept.map(Boolean);
    return { kept: [...this.turnState.kept] };
  }

  selectCategory(socketId, category) {
    if (!CATEGORIES.includes(category)) {
      return { error: '잘못된 카테고리입니다.' };
    }
    if (this.turnState.rollCount === 0) {
      return { error: '먼저 주사위를 굴려주세요.' };
    }

    const player = this.getPlayer(socketId);
    if (!player) {
      return { error: '플레이어를 찾을 수 없습니다.' };
    }
    if (player.scores[category] !== null) {
      return { error: '이미 사용한 카테고리입니다.' };
    }

    // 점수 계산 및 기록
    const score = calculate(this.turnState.dice, category);
    player.scores[category] = score;
    player.usedCategories[category] = true;

    // 게임 종료 확인
    const allComplete = this.players.every(p => isScoreCardComplete(p.scores));

    if (allComplete) {
      this.phase = 'finished';
      return {
        score,
        category,
        playerId: socketId,
        gameFinished: true,
        rankings: this.calculateRankings(),
      };
    }

    // 다음 턴으로
    this.advanceTurn();

    return {
      score,
      category,
      playerId: socketId,
      gameFinished: false,
      nextPlayerIndex: this.currentPlayerIndex,
      nextPlayerId: this.getCurrentPlayer().id,
      currentRound: this.currentRound,
    };
  }

  advanceTurn() {
    this.resetTurn();

    // 다음 플레이어 찾기 (점수판이 다 찬 플레이어는 건너뜀)
    let attempts = 0;
    do {
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
      if (this.currentPlayerIndex === 0) {
        this.currentRound++;
      }
      attempts++;
    } while (
      isScoreCardComplete(this.players[this.currentPlayerIndex].scores) &&
      attempts < this.players.length * 2
    );

    // 연결 끊긴 플레이어 턴이면 스킵
    const current = this.getCurrentPlayer();
    if (!current.isConnected) {
      this.handleDisconnectedPlayerTurn(current);
    }
  }

  handleDisconnectedPlayerTurn(player) {
    // 연결 끊긴 플레이어의 남은 카테고리를 0점 처리
    for (const cat of CATEGORIES) {
      if (player.scores[cat] === null) {
        player.scores[cat] = 0;
        player.usedCategories[cat] = true;
      }
    }
  }

  calculateRankings() {
    return this.players
      .map(p => ({
        playerId: p.id,
        name: p.name,
        color: p.color,
        scores: { ...p.scores },
        upperBonus: calculateBonus(p.scores),
        totalScore: calculateTotal(p.scores),
      }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));
  }

  restart() {
    this.phase = 'waiting';
    this.currentPlayerIndex = 0;
    this.currentRound = 1;
    this.resetTurn();
    this.players.forEach(p => {
      p.scores = createEmptyScoreCard();
      p.usedCategories = {};
    });
  }

  // ========== 상태 조회 ==========

  /**
   * 전체 방 상태 (로비용)
   */
  getRoomState() {
    return {
      phase: this.phase,
      players: this.players.map(p => ({
        id: p.id,
        name: p.name,
        color: p.color,
        isHost: p.isHost,
        isConnected: p.isConnected,
        usedCategories: p.usedCategories,
      })),
      currentPlayerIndex: this.currentPlayerIndex,
      currentRound: this.currentRound,
      turnState: {
        rollCount: this.turnState.rollCount,
        dice: [...this.turnState.dice],
        kept: [...this.turnState.kept],
      },
    };
  }

  /**
   * 특정 플레이어의 개인 점수표
   */
  getPlayerScoreCard(socketId) {
    const player = this.getPlayer(socketId);
    if (!player) return null;
    return {
      scores: { ...player.scores },
      bonus: calculateBonus(player.scores),
      total: calculateTotal(player.scores),
    };
  }

  /**
   * 다른 플레이어의 점수표 조회 (playerId 기준)
   */
  getPlayerScoreCardById(playerId) {
    const player = this.players.find(p => p.id === playerId);
    if (!player) return null;
    return {
      playerId: player.id,
      name: player.name,
      color: player.color,
      scores: { ...player.scores },
      bonus: calculateBonus(player.scores),
      total: calculateTotal(player.scores),
    };
  }
}
