<script setup lang="ts">
import {
  UPPER_CATEGORIES, LOWER_CATEGORIES,
  CATEGORY_LABELS,
  type ScoreCategory, type ScoreCard,
} from '../../types/game'

const props = defineProps<{
  data: {
    playerId: string
    name: string
    color: string
    scores: ScoreCard
    bonus: number
    total: number
  } | null
}>()

const emit = defineEmits<{
  close: []
}>()

function upperSum(): number {
  if (!props.data) return 0
  let sum = 0
  for (const cat of UPPER_CATEGORIES) {
    const v = props.data.scores[cat]
    if (v !== null) sum += v
  }
  return sum
}

function onOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('popup-overlay')) {
    emit('close')
  }
}
</script>

<template>
  <div class="popup-overlay" @click="onOverlayClick">
    <div class="popup-card">
      <!-- 로딩 상태 -->
      <div v-if="!data" class="loading">
        <span class="loading-spinner" />
        <span>불러오는 중...</span>
      </div>

      <!-- 점수 표시 -->
      <template v-else>
        <!-- 헤더 -->
        <div class="popup-header">
          <div class="player-info">
            <span class="player-dot" :style="{ background: data.color }" />
            <span class="player-name">{{ data.name }}</span>
          </div>
          <button class="close-btn" @click="emit('close')">✕</button>
        </div>

        <!-- 점수 내용 -->
        <div class="popup-body">
          <!-- Upper Section -->
          <div class="section">
            <div class="section-header">UPPER</div>
            <div
              v-for="cat in UPPER_CATEGORIES"
              :key="cat"
              class="score-row"
              :class="{ filled: data.scores[cat] !== null }"
            >
              <span class="cat-label">{{ CATEGORY_LABELS[cat] }}</span>
              <span class="cat-score">
                {{ data.scores[cat] !== null ? data.scores[cat] : '-' }}
              </span>
            </div>
            <div class="score-row subtotal">
              <span class="cat-label">
                Subtotal
                <span v-if="upperSum() >= 63" class="bonus-tag">+35</span>
              </span>
              <span class="cat-score">{{ upperSum() }} / 63</span>
            </div>
            <div class="score-row bonus-row">
              <span class="cat-label">Bonus</span>
              <span class="cat-score">{{ data.bonus }}</span>
            </div>
          </div>

          <!-- Lower Section -->
          <div class="section">
            <div class="section-header">LOWER</div>
            <div
              v-for="cat in LOWER_CATEGORIES"
              :key="cat"
              class="score-row"
              :class="{ filled: data.scores[cat] !== null }"
            >
              <span class="cat-label">{{ CATEGORY_LABELS[cat] }}</span>
              <span class="cat-score">
                {{ data.scores[cat] !== null ? data.scores[cat] : '-' }}
              </span>
            </div>
          </div>

          <!-- Total -->
          <div class="total-row">
            <span>TOTAL</span>
            <span class="total-score">{{ data.total }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fade-in 0.15s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.popup-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  width: 300px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  animation: slide-up 0.2s ease;
  overflow: hidden;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 로딩 */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 20px;
  color: var(--text-secondary);
  font-size: 14px;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border-color);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 헤더 */
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px 10px;
  border-bottom: 1px solid var(--border-color);
}

.player-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.player-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.player-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s;
  line-height: 1;
}

.close-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

/* 점수 본문 */
.popup-body {
  padding: 8px 16px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.section-header {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--text-muted);
  padding: 6px 4px 2px;
  font-weight: 600;
}

.score-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 6px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--text-muted);
}

.score-row.filled {
  color: var(--text-secondary);
}

.score-row.filled .cat-score {
  color: var(--text-primary);
  font-weight: 600;
}

.cat-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cat-score {
  font-variant-numeric: tabular-nums;
  min-width: 28px;
  text-align: right;
}

.subtotal {
  border-top: 1px solid var(--border-color);
  margin-top: 4px;
  padding-top: 6px;
  font-size: 12px;
  color: var(--text-secondary);
}

.bonus-tag {
  font-size: 10px;
  color: var(--gold);
  font-weight: 700;
}

.bonus-row {
  font-size: 12px;
  color: var(--text-muted);
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6px;
  border-top: 2px solid var(--accent);
  margin-top: 6px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
}

.total-score {
  color: var(--accent);
  font-size: 18px;
}
</style>
