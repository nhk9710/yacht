<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../../stores/gameStore'
import { useSocket } from '../../composables/useSocket'
import {
  UPPER_CATEGORIES, LOWER_CATEGORIES,
  CATEGORY_LABELS,
  type ScoreCategory,
} from '../../types/game'

const store = useGameStore()
const socket = useSocket()

const upperSum = computed(() => {
  let sum = 0
  for (const cat of UPPER_CATEGORIES) {
    const v = store.myScores[cat]
    if (v !== null) sum += v
  }
  return sum
})

function canSelect(category: ScoreCategory): boolean {
  return store.canSelectScore && store.myScores[category] === null
}

function getPossible(category: ScoreCategory): number | null {
  if (store.myScores[category] !== null) return null
  if (!store.canSelectScore) return null
  return store.possibleScores[category] ?? null
}

function selectCategory(category: ScoreCategory) {
  if (!canSelect(category)) return
  socket.selectCategory(category)
}
</script>

<template>
  <div class="score-card">
    <h3 class="card-title">MY SCORE</h3>

    <!-- Upper Section -->
    <div class="section">
      <div class="section-header">UPPER</div>
      <div
        v-for="cat in UPPER_CATEGORIES"
        :key="cat"
        class="score-row"
        :class="{
          filled: store.myScores[cat] !== null,
          selectable: canSelect(cat),
          'has-preview': getPossible(cat) !== null,
        }"
        @click="selectCategory(cat)"
      >
        <span class="cat-label">{{ CATEGORY_LABELS[cat] }}</span>
        <span class="cat-score">
          <template v-if="store.myScores[cat] !== null">
            {{ store.myScores[cat] }}
          </template>
          <template v-else-if="getPossible(cat) !== null">
            <span class="preview">{{ getPossible(cat) }}</span>
          </template>
          <template v-else>
            -
          </template>
        </span>
      </div>
      <div class="score-row subtotal">
        <span class="cat-label">
          Subtotal
          <span v-if="upperSum >= 63" class="bonus-achieved">+35</span>
        </span>
        <span class="cat-score">{{ upperSum }} / 63</span>
      </div>
      <div class="score-row bonus">
        <span class="cat-label">Bonus</span>
        <span class="cat-score">{{ store.myBonus }}</span>
      </div>
    </div>

    <!-- Lower Section -->
    <div class="section">
      <div class="section-header">LOWER</div>
      <div
        v-for="cat in LOWER_CATEGORIES"
        :key="cat"
        class="score-row"
        :class="{
          filled: store.myScores[cat] !== null,
          selectable: canSelect(cat),
          'has-preview': getPossible(cat) !== null,
          yacht: cat === 'yacht' && getPossible(cat) === 50,
        }"
        @click="selectCategory(cat)"
      >
        <span class="cat-label">{{ CATEGORY_LABELS[cat] }}</span>
        <span class="cat-score">
          <template v-if="store.myScores[cat] !== null">
            {{ store.myScores[cat] }}
          </template>
          <template v-else-if="getPossible(cat) !== null">
            <span class="preview">{{ getPossible(cat) }}</span>
          </template>
          <template v-else>
            -
          </template>
        </span>
      </div>
    </div>

    <!-- Total -->
    <div class="total-row">
      <span>TOTAL</span>
      <span class="total-score">{{ store.myTotal }}</span>
    </div>
  </div>
</template>

<style scoped>
.score-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  overflow-y: auto;
}

.card-title {
  text-align: center;
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.section-header {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--text-muted);
  padding: 6px 8px 2px;
  font-weight: 600;
}

.score-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s;
  cursor: default;
}

.score-row.filled {
  color: var(--text-secondary);
}
.score-row.filled .cat-score {
  color: var(--text-primary);
  font-weight: 600;
}

.score-row.selectable {
  cursor: pointer;
  background: rgba(99, 102, 241, 0.06);
  border: 1px solid transparent;
}
.score-row.selectable:hover {
  background: rgba(99, 102, 241, 0.15);
  border-color: var(--accent);
}

.score-row.yacht {
  background: rgba(234, 179, 8, 0.15) !important;
  border-color: var(--gold) !important;
  animation: yacht-glow 1s ease-in-out infinite alternate;
}

@keyframes yacht-glow {
  from { box-shadow: 0 0 4px rgba(234, 179, 8, 0.2); }
  to { box-shadow: 0 0 12px rgba(234, 179, 8, 0.5); }
}

.cat-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cat-score {
  font-variant-numeric: tabular-nums;
  min-width: 32px;
  text-align: right;
}

.preview {
  color: var(--accent);
  opacity: 0.7;
  font-weight: 500;
}

.subtotal {
  border-top: 1px solid var(--border-color);
  margin-top: 4px;
  padding-top: 8px;
  font-size: 12px;
  color: var(--text-secondary);
}

.bonus-achieved {
  font-size: 10px;
  color: var(--gold);
  font-weight: 700;
}

.bonus {
  font-size: 12px;
  color: var(--text-muted);
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border-top: 2px solid var(--accent);
  margin-top: 8px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
}

.total-score {
  color: var(--accent);
  font-size: 20px;
}
</style>
