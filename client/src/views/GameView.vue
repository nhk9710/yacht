<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { useSocket } from '../composables/useSocket'
import GameScene from '../components/three/GameScene.vue'
import ScoreCard from '../components/ui/ScoreCard.vue'

const store = useGameStore()
const socket = useSocket()

const turnInfo = computed(() => {
  const player = store.currentPlayer
  if (!player) return ''
  const name = player.id === store.mySocketId ? '나' : player.name
  return `${name}의 차례`
})

const rollButtonText = computed(() => {
  if (store.isRolling) return '굴리는 중...'
  if (store.turnState.rollCount === 0) return '주사위 굴리기'
  if (store.turnState.rollCount >= 3) return '점수를 선택하세요'
  return `다시 굴리기 (${store.turnState.rollCount}/3)`
})

function handleRoll() {
  // 먼저 현재 kept 상태 서버에 전송
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

const diceDisplay = computed(() => {
  const faces = ['', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685']
  return store.turnState.dice.map((v, i) => ({
    value: v,
    face: v > 0 ? faces[v] : '?',
    kept: store.turnState.kept[i],
  }))
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
      <div class="round-info">
        <span class="label">라운드</span>
        <span class="value">{{ store.currentRound }} / 12</span>
      </div>
      <div class="roll-info">
        <span class="label">굴림</span>
        <span class="value">{{ store.turnState.rollCount }} / 3</span>
      </div>
      <div class="players-mini">
        <span
          v-for="player in store.players"
          :key="player.id"
          class="mini-dot"
          :class="{ active: player.id === store.currentPlayer?.id }"
          :style="{ background: player.color }"
          :title="player.name"
        />
      </div>
    </div>

    <!-- 메인 영역 -->
    <div class="main-area">
      <!-- 3D 씬 -->
      <div class="scene-container">
        <GameScene />
      </div>

      <!-- 점수 카드 -->
      <div class="side-panel">
        <ScoreCard />
      </div>
    </div>

    <!-- 하단 컨트롤 바 -->
    <div class="bottom-bar">
      <!-- 주사위 선택기 -->
      <div class="dice-selector" v-if="store.turnState.rollCount > 0">
        <div
          v-for="(d, i) in diceDisplay"
          :key="i"
          class="dice-btn"
          :class="{
            kept: d.kept,
            clickable: store.isMyTurn && store.turnState.rollCount > 0 && store.turnState.rollCount < 3 && !store.isRolling,
          }"
          @click="toggleKeep(i)"
        >
          <span class="dice-face">{{ d.face }}</span>
          <span v-if="d.kept" class="kept-label">KEEP</span>
        </div>
      </div>

      <!-- 굴리기 버튼 -->
      <div class="roll-section">
        <button
          class="btn btn-primary btn-lg roll-btn"
          :disabled="!store.canRoll"
          @click="handleRoll"
        >
          {{ rollButtonText }}
        </button>
      </div>

      <!-- 플레이어 목록 -->
      <div class="player-bar">
        <div
          v-for="player in store.players"
          :key="player.id"
          class="player-chip"
          :class="{ 'is-current': player.id === store.currentPlayer?.id }"
        >
          <span class="chip-dot" :style="{ background: player.color }" />
          <span class="chip-name">
            {{ player.name }}
            <template v-if="player.id === store.mySocketId">(나)</template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 상단 바 */
.top-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 10px 20px;
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
  font-size: 15px;
}

.turn-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.round-info, .roll-info {
  display: flex;
  gap: 6px;
  font-size: 13px;
}
.label { color: var(--text-muted); }
.value { color: var(--text-primary); font-weight: 600; }

.players-mini {
  display: flex;
  gap: 6px;
  margin-left: auto;
}
.mini-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.4;
  transition: all 0.3s;
}
.mini-dot.active {
  opacity: 1;
  transform: scale(1.4);
  box-shadow: 0 0 6px currentColor;
}

/* 메인 영역 */
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

.side-panel {
  width: 260px;
  flex-shrink: 0;
  padding: 12px;
  border-left: 1px solid var(--border-color);
  background: var(--bg-primary);
  overflow-y: auto;
}

/* 하단 바 */
.bottom-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  flex-shrink: 0;
  z-index: 10;
}

/* 주사위 선택기 */
.dice-selector {
  display: flex;
  gap: 8px;
}

.dice-btn {
  width: 52px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  border-radius: 10px;
  transition: all 0.2s;
  user-select: none;
}

.dice-btn.clickable {
  cursor: pointer;
}
.dice-btn.clickable:hover {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.1);
}

.dice-btn.kept {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.15);
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.2);
}

.dice-face {
  font-size: 28px;
  line-height: 1;
}

.kept-label {
  font-size: 8px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 1px;
  margin-top: 2px;
}

/* 굴리기 버튼 */
.roll-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.roll-btn {
  min-width: 200px;
}

/* 플레이어 바 */
.player-bar {
  display: flex;
  gap: 8px;
}

.player-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 20px;
  font-size: 12px;
  transition: all 0.3s;
}

.player-chip.is-current {
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid var(--accent);
}

.chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.chip-name {
  white-space: nowrap;
}

/* 반응형 */
@media (max-width: 768px) {
  .side-panel {
    display: none;
  }
  .bottom-bar {
    flex-wrap: wrap;
    gap: 8px;
  }
  .player-bar {
    width: 100%;
    justify-content: center;
  }
}
</style>
