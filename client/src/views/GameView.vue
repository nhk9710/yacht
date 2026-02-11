<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { useSocket } from '../composables/useSocket'
import GameScene from '../components/three/GameScene.vue'
import ScoreCard from '../components/ui/ScoreCard.vue'
import PlayerScorePopup from '../components/ui/PlayerScorePopup.vue'

const store = useGameStore()
const socket = useSocket()

// ========== 팝업 상태 ==========
const showScorePopup = ref(false)

function openPlayerScore(playerId: string) {
  // 내 점수는 이미 사이드 패널에 표시되므로 다른 플레이어만
  if (playerId === store.mySocketId) return
  socket.requestPlayerScore(playerId)
  showScorePopup.value = true
}

function closeScorePopup() {
  showScorePopup.value = false
  store.clearViewingPlayerScore()
}

// ========== 턴 정보 ==========
const turnInfo = computed(() => {
  const player = store.currentPlayer
  if (!player) return ''
  const name = player.id === store.mySocketId ? '나' : player.name
  return `${name}의 차례`
})

// ========== 주사위 굴리기 ==========
const rollButtonText = computed(() => {
  if (store.isRolling) return '굴리는 중...'
  if (store.turnState.rollCount === 0) return '주사위 굴리기'
  if (store.turnState.rollCount >= 3) return '점수를 선택하세요'
  return `다시 굴리기 (${store.turnState.rollCount}/3)`
})

function handleRoll() {
  if (store.turnState.rollCount > 0) {
    socket.setKept(store.turnState.kept)
  }
  setTimeout(() => {
    socket.rollDice()
  }, store.turnState.rollCount > 0 ? 50 : 0)
}

function toggleKeep(index: number) {
  if (!store.isMyTurn || store.turnState.rollCount === 0 || store.turnState.rollCount >= 3) return
  if (store.isRolling) return
  store.toggleKeep(index)
  socket.setKept(store.turnState.kept)
}

// ========== 주사위 표시 ==========
const diceDisplay = computed(() => {
  return store.turnState.dice.map((v, i) => ({
    value: v,
    kept: store.turnState.kept[i],
  }))
})

const diceSum = computed(() => {
  return store.turnState.dice.reduce((a, b) => a + b, 0)
})
</script>

<template>
  <div class="game-view">
    <!-- 상단 바 -->
    <div class="top-bar">
      <div class="turn-info">
        <span
          class="turn-dot"
          :style="{ background: store.currentPlayer?.color || '#666' }"
        />
        <span class="turn-text">{{ turnInfo }}</span>
      </div>
      <div class="game-info">
        <div class="info-item">
          <span class="label">라운드</span>
          <span class="value">{{ store.currentRound }} / 12</span>
        </div>
        <div class="info-item">
          <span class="label">굴림</span>
          <span class="value">{{ store.turnState.rollCount }} / 3</span>
        </div>
      </div>
      <!-- 플레이어 이름 뱃지 (우측) -->
      <div class="player-badges">
        <div
          v-for="player in store.players"
          :key="player.id"
          class="player-badge"
          :class="{
            'is-current': player.id === store.currentPlayer?.id,
            'is-me': player.id === store.mySocketId,
            'clickable': player.id !== store.mySocketId,
          }"
          @click="openPlayerScore(player.id)"
        >
          <span class="badge-dot" :style="{ background: player.color }" />
          <span class="badge-name">
            {{ player.name }}
            <template v-if="player.id === store.mySocketId">(나)</template>
          </span>
        </div>
      </div>
    </div>

    <!-- 메인 영역 -->
    <div class="main-area">
      <!-- 3D 씬 -->
      <div class="scene-container">
        <GameScene />
      </div>

      <!-- 우측 패널: 컨트롤 + 점수표 -->
      <div class="side-panel">
        <!-- 주사위 결과 + 굴리기 버튼 영역 -->
        <div class="controls-area">
          <!-- 주사위 결과 숫자 표시 -->
          <div class="dice-results" v-if="store.turnState.rollCount > 0">
            <div
              v-for="(d, i) in diceDisplay"
              :key="i"
              class="dice-chip"
              :class="{
                kept: d.kept,
                clickable: store.isMyTurn && store.turnState.rollCount > 0 && store.turnState.rollCount < 3 && !store.isRolling,
              }"
              @click="toggleKeep(i)"
            >
              <span class="dice-number">{{ d.value > 0 ? d.value : '?' }}</span>
              <span v-if="d.kept" class="kept-dot" />
            </div>
            <div class="dice-sum">
              <span class="sum-label">합계</span>
              <span class="sum-value">{{ diceSum }}</span>
            </div>
          </div>

          <!-- 굴리기 버튼 -->
          <button
            class="btn btn-primary roll-btn"
            :disabled="!store.canRoll"
            @click="handleRoll"
          >
            {{ rollButtonText }}
          </button>
        </div>

        <!-- 점수 카드 -->
        <div class="scorecard-wrapper">
          <ScoreCard />
        </div>
      </div>
    </div>

    <!-- 플레이어 점수 팝업 -->
    <PlayerScorePopup
      v-if="showScorePopup"
      :data="store.viewingPlayerScore"
      @close="closeScorePopup"
    />
  </div>
</template>

<style scoped>
.game-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* ========== 상단 바 ========== */
.top-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
  flex-shrink: 0;
}

.turn-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
}

.turn-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.game-info {
  display: flex;
  gap: 16px;
}

.info-item {
  display: flex;
  gap: 5px;
  font-size: 13px;
  white-space: nowrap;
}
.label { color: var(--text-muted); }
.value { color: var(--text-primary); font-weight: 600; }

/* ========== 플레이어 뱃지 ========== */
.player-badges {
  display: flex;
  gap: 6px;
  margin-left: auto;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.player-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: var(--bg-tertiary);
  border-radius: 16px;
  font-size: 12px;
  border: 1px solid transparent;
  transition: all 0.2s;
  white-space: nowrap;
}

.player-badge.is-current {
  background: rgba(99, 102, 241, 0.15);
  border-color: var(--accent);
}

.player-badge.clickable {
  cursor: pointer;
}

.player-badge.clickable:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--accent-hover);
  transform: translateY(-1px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.badge-name {
  color: var(--text-primary);
  font-weight: 500;
}

/* ========== 메인 영역 ========== */
.main-area {
  flex: 1;
  display: flex;
  min-height: 0;
}

.scene-container {
  flex: 1;
  position: relative;
  min-width: 0;
}

/* ========== 우측 패널 ========== */
.side-panel {
  width: 260px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--border-color);
  background: var(--bg-primary);
}

/* ========== 컨트롤 영역 (주사위 결과 + 굴리기 버튼) ========== */
.controls-area {
  flex-shrink: 0;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
}

/* 주사위 결과 숫자 표시 */
.dice-results {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dice-chip {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  position: relative;
  transition: all 0.2s;
  user-select: none;
}

.dice-chip.clickable {
  cursor: pointer;
}
.dice-chip.clickable:hover {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.1);
}

.dice-chip.kept {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.15);
}

.dice-number {
  font-size: 16px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
}

.kept-dot {
  position: absolute;
  bottom: 2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.dice-sum {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  padding-left: 6px;
  border-left: 1px solid var(--border-color);
}

.sum-label {
  font-size: 9px;
  color: var(--text-muted);
  letter-spacing: 0.5px;
}

.sum-value {
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

/* 굴리기 버튼 */
.roll-btn {
  width: 100%;
  padding: 8px 12px;
  font-size: 13px;
}

/* ========== 점수카드 래퍼 ========== */
.scorecard-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 8px 12px 12px;
  min-height: 0;
}

/* ========== 반응형 ========== */
@media (max-width: 768px) {
  .side-panel {
    display: none;
  }
  .game-info {
    display: none;
  }
}
</style>
