<script setup lang="ts">
import { useGameStore } from './stores/gameStore'
import LobbyView from './views/LobbyView.vue'
import GameView from './views/GameView.vue'
import ResultView from './views/ResultView.vue'

const store = useGameStore()
</script>

<template>
  <div class="app">
    <LobbyView v-if="store.phase === 'waiting'" />
    <GameView v-else-if="store.phase === 'playing'" />
    <ResultView v-else-if="store.phase === 'finished'" />
  </div>
</template>

<style>
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #13131a;
  --bg-tertiary: #1c1c28;
  --bg-card: #1a1a2e;
  --border-color: #2a2a3e;
  --text-primary: #e8e8f0;
  --text-secondary: #8888a0;
  --text-muted: #555570;
  --accent: #6366f1;
  --accent-hover: #818cf8;
  --success: #22c55e;
  --warning: #eab308;
  --danger: #ef4444;
  --gold: #fbbf24;
  --silver: #9ca3af;
  --bronze: #d97706;
}

.app {
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
}

/* 공통 버튼 */
.btn {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--accent);
  color: white;
}
.btn-primary:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.btn-success {
  background: var(--success);
  color: white;
}
.btn-success:hover:not(:disabled) {
  background: #16a34a;
  transform: translateY(-1px);
}

.btn-danger {
  background: var(--danger);
  color: white;
}
.btn-danger:hover:not(:disabled) {
  background: #dc2626;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}
.btn-outline:hover:not(:disabled) {
  background: var(--bg-tertiary);
  border-color: var(--accent);
}

.btn-lg {
  padding: 14px 36px;
  font-size: 16px;
  border-radius: 12px;
}
</style>
