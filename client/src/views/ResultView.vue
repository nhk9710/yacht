<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { useSocket } from '../composables/useSocket'
import {
  UPPER_CATEGORIES, LOWER_CATEGORIES,
  CATEGORY_LABELS,
  type ScoreCategory,
} from '../types/game'

const store = useGameStore()
const socket = useSocket()

const showConfetti = ref(false)

const winner = computed(() => store.rankings[0])
const isWinner = computed(() => winner.value?.playerId === store.mySocketId)

function handleRestart() {
  socket.restartGame()
}

// 축하 confetti 효과
onMounted(() => {
  showConfetti.value = true
  setTimeout(() => { showConfetti.value = false }, 5000)
})

function getMedalEmoji(rank: number) {
  if (rank === 1) return '1st'
  if (rank === 2) return '2nd'
  if (rank === 3) return '3rd'
  return `${rank}th`
}

function getMedalColor(rank: number) {
  if (rank === 1) return 'var(--gold)'
  if (rank === 2) return 'var(--silver)'
  if (rank === 3) return 'var(--bronze)'
  return 'var(--text-muted)'
}
</script>

<template>
  <div class="result-view">
    <!-- Confetti -->
    <div v-if="showConfetti" class="confetti-container">
      <div v-for="i in 60" :key="i" class="confetti-piece" :style="{
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 3 + 's',
        animationDuration: (2 + Math.random() * 3) + 's',
        background: ['#ef4444','#3b82f6','#22c55e','#eab308','#a855f7','#ec4899'][i % 6],
      }"/>
    </div>

    <div class="result-container">
      <h1 class="result-title">GAME OVER</h1>

      <!-- 우승자 하이라이트 -->
      <div v-if="winner" class="winner-card">
        <div class="crown">&#9812;</div>
        <div class="winner-name" :style="{ color: winner.color }">
          {{ winner.name }}
        </div>
        <div class="winner-score">{{ winner.totalScore }} pts</div>
      </div>

      <!-- 순위표 -->
      <div class="rankings-table">
        <div
          v-for="entry in store.rankings"
          :key="entry.playerId"
          class="rank-row"
          :class="{
            'is-me': entry.playerId === store.mySocketId,
            'is-winner': entry.rank === 1,
          }"
        >
          <div class="rank-medal" :style="{ color: getMedalColor(entry.rank) }">
            {{ getMedalEmoji(entry.rank) }}
          </div>
          <div class="rank-player">
            <span class="rank-dot" :style="{ background: entry.color }" />
            <span class="rank-name">
              {{ entry.name }}
              <span v-if="entry.playerId === store.mySocketId" class="me-tag">(나)</span>
            </span>
          </div>
          <div class="rank-total">{{ entry.totalScore }}</div>
        </div>
      </div>

      <!-- 상세 점수 테이블 -->
      <div class="detail-table-wrap">
        <table class="detail-table">
          <thead>
            <tr>
              <th>카테고리</th>
              <th
                v-for="entry in store.rankings"
                :key="entry.playerId"
                :style="{ color: entry.color }"
              >
                {{ entry.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="section-label"><td :colspan="store.rankings.length + 1">Upper Section</td></tr>
            <tr v-for="cat in UPPER_CATEGORIES" :key="cat">
              <td>{{ CATEGORY_LABELS[cat] }}</td>
              <td v-for="entry in store.rankings" :key="entry.playerId">
                {{ entry.scores[cat] ?? '-' }}
              </td>
            </tr>
            <tr class="bonus-row">
              <td>Bonus (+35)</td>
              <td v-for="entry in store.rankings" :key="entry.playerId">
                {{ entry.upperBonus }}
              </td>
            </tr>
            <tr class="section-label"><td :colspan="store.rankings.length + 1">Lower Section</td></tr>
            <tr v-for="cat in LOWER_CATEGORIES" :key="cat">
              <td>{{ CATEGORY_LABELS[cat] }}</td>
              <td v-for="entry in store.rankings" :key="entry.playerId">
                {{ entry.scores[cat] ?? '-' }}
              </td>
            </tr>
            <tr class="total-row">
              <td>TOTAL</td>
              <td
                v-for="entry in store.rankings"
                :key="entry.playerId"
                :style="{ color: entry.color }"
              >
                <strong>{{ entry.totalScore }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 버튼 -->
      <div class="result-actions">
        <button
          v-if="store.isHost"
          class="btn btn-primary btn-lg"
          @click="handleRestart"
        >
          다시 하기
        </button>
        <p v-else class="wait-text">호스트가 다시 시작할 때까지 대기 중...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  background: radial-gradient(ellipse at center top, #1a1a35 0%, #0a0a0f 60%);
}

.result-container {
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 1;
}

.result-title {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 8px;
  color: var(--text-primary);
  text-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
}

/* 우승자 카드 */
.winner-card {
  text-align: center;
  padding: 24px 48px;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05));
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 20px;
}

.crown {
  font-size: 48px;
  margin-bottom: 8px;
}

.winner-name {
  font-size: 28px;
  font-weight: 700;
}

.winner-score {
  font-size: 20px;
  color: var(--gold);
  font-weight: 600;
  margin-top: 4px;
}

/* 순위표 */
.rankings-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rank-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.2s;
}

.rank-row.is-me {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.08);
}

.rank-row.is-winner {
  border-color: var(--gold);
  background: rgba(251, 191, 36, 0.06);
}

.rank-medal {
  font-size: 16px;
  font-weight: 800;
  min-width: 40px;
}

.rank-player {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.rank-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.rank-name {
  font-weight: 600;
  font-size: 15px;
}

.me-tag {
  color: var(--accent);
  font-size: 12px;
}

.rank-total {
  font-size: 22px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

/* 상세 점수 테이블 */
.detail-table-wrap {
  width: 100%;
  overflow-x: auto;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 12px;
}

.detail-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.detail-table th, .detail-table td {
  padding: 6px 10px;
  text-align: center;
}

.detail-table th:first-child, .detail-table td:first-child {
  text-align: left;
}

.detail-table th {
  font-weight: 700;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
}

.detail-table td {
  border-bottom: 1px solid rgba(42, 42, 62, 0.5);
}

.section-label td {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 12px;
  border-bottom: none;
}

.bonus-row td {
  color: var(--gold);
  font-weight: 600;
  border-bottom: 2px solid var(--border-color);
}

.total-row td {
  border-top: 2px solid var(--accent);
  border-bottom: none;
  font-size: 15px;
  padding-top: 10px;
}

/* 버튼 */
.result-actions {
  margin-top: 16px;
}

.wait-text {
  color: var(--text-secondary);
  font-size: 14px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Confetti */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
}

.confetti-piece {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  animation: confetti-fall linear forwards;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
