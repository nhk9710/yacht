<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { useSocket } from '../composables/useSocket'

const store = useGameStore()
const socket = useSocket()

// 화면 모드: '' | 'create' | 'join'
const mode = ref<'' | 'create' | 'join'>('')
const playerName = ref('')
const roomCodeInput = ref('')
const joinError = ref('')
const joined = ref(false)

const maxPlayers = 5

const canStart = computed(() =>
  store.isHost && store.players.length >= 1
)

function handleCreate() {
  if (!playerName.value.trim()) return
  socket.connect()
  socket.createRoom(playerName.value.trim())
  joined.value = true
}

function handleJoin() {
  if (!playerName.value.trim() || !roomCodeInput.value.trim()) return
  joinError.value = ''
  socket.connect()
  socket.joinRoom(playerName.value.trim(), roomCodeInput.value.trim(), (msg) => {
    joinError.value = msg
    joined.value = false
  })
  joined.value = true
}

function handleStart() {
  socket.startGame()
}

function copyCode() {
  navigator.clipboard.writeText(store.roomCode).catch(() => {})
}

onMounted(() => {
  if (store.connected && store.roomCode) {
    joined.value = true
  }
})
</script>

<template>
  <div class="lobby">
    <div class="lobby-container">
      <!-- 헤더 -->
      <div class="lobby-header">
        <h1 class="title">YACHT</h1>
        <p class="subtitle">Dice Game</p>
      </div>

      <!-- 1단계: 모드 선택 -->
      <div v-if="!joined && mode === ''" class="mode-section">
        <button class="btn btn-primary btn-lg" @click="mode = 'create'">
          방 만들기
        </button>
        <button class="btn btn-secondary btn-lg" @click="mode = 'join'">
          방 코드로 참가
        </button>
      </div>

      <!-- 2단계-A: 방 만들기 -->
      <div v-else-if="!joined && mode === 'create'" class="join-section">
        <div class="input-group">
          <input
            v-model="playerName"
            class="name-input"
            placeholder="닉네임을 입력하세요"
            maxlength="12"
            @keyup.enter="handleCreate"
            autofocus
          />
          <button
            class="btn btn-primary btn-lg"
            :disabled="!playerName.trim()"
            @click="handleCreate"
          >
            방 만들기
          </button>
          <button class="btn btn-ghost" @click="mode = ''">← 뒤로</button>
        </div>
      </div>

      <!-- 2단계-B: 코드로 참가 -->
      <div v-else-if="!joined && mode === 'join'" class="join-section">
        <div class="input-group">
          <input
            v-model="playerName"
            class="name-input"
            placeholder="닉네임을 입력하세요"
            maxlength="12"
            autofocus
          />
          <input
            v-model="roomCodeInput"
            class="name-input code-input"
            placeholder="방 코드 (예: ABCD)"
            maxlength="4"
            @keyup.enter="handleJoin"
          />
          <p v-if="joinError" class="error-text">{{ joinError }}</p>
          <button
            class="btn btn-primary btn-lg"
            :disabled="!playerName.trim() || !roomCodeInput.trim()"
            @click="handleJoin"
          >
            참가하기
          </button>
          <button class="btn btn-ghost" @click="mode = ''">← 뒤로</button>
        </div>
      </div>

      <!-- 3단계: 대기실 -->
      <div v-else class="waiting-section">
        <!-- 방 코드 표시 -->
        <div class="room-code-panel" @click="copyCode" title="클릭해서 복사">
          <span class="room-code-label">방 코드</span>
          <span class="room-code">{{ store.roomCode }}</span>
          <span class="copy-hint">클릭해서 복사</span>
        </div>

        <div class="players-panel">
          <h3 class="panel-title">
            대기실
            <span class="player-count">{{ store.players.length }} / {{ maxPlayers }}</span>
          </h3>
          <div class="player-list">
            <div
              v-for="player in store.players"
              :key="player.id"
              class="player-card"
            >
              <span class="player-dot" :style="{ background: player.color }" />
              <span class="player-name">
                {{ player.name }}
                <span v-if="player.isHost" class="host-badge">HOST</span>
                <span v-if="player.id === store.mySocketId" class="me-badge">ME</span>
              </span>
            </div>

            <!-- 빈 슬롯 -->
            <div
              v-for="i in (maxPlayers - store.players.length)"
              :key="'empty-' + i"
              class="player-card empty"
            >
              <span class="player-dot empty-dot" />
              <span class="player-name empty-name">대기 중...</span>
            </div>
          </div>
        </div>

        <div class="actions">
          <button
            v-if="store.isHost"
            class="btn btn-success btn-lg start-btn"
            :disabled="!canStart"
            @click="handleStart"
          >
            게임 시작
          </button>
          <p v-else class="waiting-text">
            호스트가 게임을 시작할 때까지 대기 중...
          </p>
        </div>

        <div class="connection-info">
          <p>이 주소로 접속한 뒤 방 코드 <strong>{{ store.roomCode }}</strong>를 입력하세요</p>
          <code class="address">{{ window.location.origin }}</code>
        </div>
      </div>
    </div>

    <!-- 배경 장식 -->
    <div class="bg-dice dice-1">&#9856;</div>
    <div class="bg-dice dice-2">&#9861;</div>
    <div class="bg-dice dice-3">&#9859;</div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    window() { return window }
  }
}
</script>

<style scoped>
.lobby {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #141428 0%, #0a0a0f 70%);
}

.lobby-container {
  max-width: 480px;
  width: 90%;
  z-index: 1;
}

.lobby-header {
  text-align: center;
  margin-bottom: 48px;
}

.title {
  font-size: 72px;
  font-weight: 800;
  letter-spacing: 12px;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
  margin-bottom: 4px;
}

.subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  letter-spacing: 6px;
  text-transform: uppercase;
}

/* 모드 선택 */
.mode-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 입력 섹션 */
.join-section {
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.name-input {
  padding: 16px 20px;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
}
.name-input:focus {
  border-color: var(--accent);
}
.name-input::placeholder {
  color: var(--text-muted);
}
.code-input {
  letter-spacing: 6px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
}

.error-text {
  color: #ef4444;
  font-size: 13px;
  margin: 0;
}

/* 대기실 */
.waiting-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 방 코드 패널 */
.room-code-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background: var(--bg-secondary);
  border: 2px solid var(--accent);
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.room-code-panel:hover {
  background: rgba(99, 102, 241, 0.1);
}
.room-code-label {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-muted);
}
.room-code {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 10px;
  color: var(--accent);
}
.copy-hint {
  font-size: 11px;
  color: var(--text-muted);
}

.players-panel {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 20px;
}

.panel-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-secondary);
}

.player-count {
  color: var(--accent);
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  transition: all 0.2s;
}
.player-card.empty {
  opacity: 0.3;
}

.player-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}
.empty-dot {
  background: var(--text-muted) !important;
}

.player-name {
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}
.empty-name {
  color: var(--text-muted);
  font-weight: 400;
}

.host-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: var(--gold);
  color: #000;
  border-radius: 4px;
  font-weight: 700;
}

.me-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: var(--accent);
  color: white;
  border-radius: 4px;
  font-weight: 700;
}

.actions {
  text-align: center;
}

.start-btn {
  width: 100%;
  font-size: 18px;
  padding: 16px;
}

.waiting-text {
  color: var(--text-secondary);
  font-size: 14px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.connection-info {
  text-align: center;
  padding: 16px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  border: 1px dashed var(--border-color);
}
.connection-info p {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.connection-info strong {
  color: var(--accent);
}
.address {
  font-size: 14px;
  color: var(--accent);
  font-weight: 600;
}

/* 버튼 추가 스타일 */
.btn-secondary {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}
.btn-secondary:hover {
  border-color: var(--accent);
}
.btn-ghost {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 14px;
  cursor: pointer;
  padding: 8px;
}
.btn-ghost:hover {
  color: var(--text-primary);
}

/* 배경 장식 주사위 */
.bg-dice {
  position: absolute;
  font-size: 120px;
  color: rgba(99, 102, 241, 0.04);
  user-select: none;
  z-index: 0;
}
.dice-1 { top: 10%; left: 5%; transform: rotate(-15deg); }
.dice-2 { bottom: 15%; right: 8%; transform: rotate(25deg); }
.dice-3 { top: 40%; right: 15%; transform: rotate(-30deg); font-size: 80px; }
</style>
