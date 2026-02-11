import { defineStore } from 'pinia'
import { ref, computed, shallowRef } from 'vue'
import type {
  GamePhase, PlayerInfo, TurnState, ScoreCard,
  ScoreCardData, Ranking, ScoreCategory,
} from '../types/game'

export const useGameStore = defineStore('game', () => {
  // ========== 연결 상태 ==========
  const mySocketId = ref<string>('')
  const connected = ref(false)

  // ========== 방 상태 ==========
  const phase = ref<GamePhase>('waiting')
  const players = ref<PlayerInfo[]>([])
  const currentPlayerIndex = ref(0)
  const currentRound = ref(1)

  // ========== 턴 상태 ==========
  const turnState = ref<TurnState>({
    rollCount: 0,
    dice: [0, 0, 0, 0, 0],
    kept: [false, false, false, false, false],
  })

  // ========== 개인 점수 ==========
  const myScores = ref<ScoreCard>({
    ones: null, twos: null, threes: null,
    fours: null, fives: null, sixes: null,
    choice: null, fourOfAKind: null, fullHouse: null,
    smallStraight: null, largeStraight: null, yacht: null,
  })
  const myBonus = ref(0)
  const myTotal = ref(0)

  // ========== 가능한 점수 ==========
  const possibleScores = ref<Record<string, number>>({})

  // ========== 결과 ==========
  const rankings = ref<Ranking[]>([])

  // ========== 3D 시뮬레이션 상태 ==========
  const isRolling = ref(false) // 물리 시뮬레이션 진행 중
  const rollingPlayerId = ref('') // 현재 굴리기를 시작한 플레이어 ID

  // ========== 물리 스트리밍 상태 ==========
  const physicsStreamData = shallowRef<any>(null) // Observer가 수신한 최신 스트림 프레임

  // ========== Computed ==========
  const myPlayer = computed(() =>
    players.value.find(p => p.id === mySocketId.value)
  )

  const isMyTurn = computed(() => {
    const current = players.value[currentPlayerIndex.value]
    return current?.id === mySocketId.value
  })

  const currentPlayer = computed(() =>
    players.value[currentPlayerIndex.value]
  )

  const canRoll = computed(() =>
    isMyTurn.value &&
    turnState.value.rollCount < 3 &&
    !isRolling.value &&
    phase.value === 'playing'
  )

  const canSelectScore = computed(() =>
    isMyTurn.value &&
    turnState.value.rollCount > 0 &&
    !isRolling.value &&
    phase.value === 'playing'
  )

  const isHost = computed(() => myPlayer.value?.isHost ?? false)

  const isMyRolling = computed(() => rollingPlayerId.value === mySocketId.value)

  // ========== Actions ==========
  function updateRoomState(state: any) {
    phase.value = state.phase
    players.value = state.players
    currentPlayerIndex.value = state.currentPlayerIndex
    currentRound.value = state.currentRound
    if (state.turnState) {
      turnState.value = state.turnState
    }
  }

  function updateScoreCard(data: ScoreCardData) {
    myScores.value = data.scores
    myBonus.value = data.bonus
    myTotal.value = data.total
  }

  function updatePossibleScores(possible: Record<string, number>) {
    possibleScores.value = possible
  }

  /**
   * dice:rolling 이벤트 — 굴리기 시작 (값 없음)
   * Roller: 자유 물리 시뮬레이션 시작 + 스트리밍 시작
   * Observer: 스트림 수신 모드 진입 (컵 애니메이션 + 스트림 데이터로 주사위 렌더링)
   */
  function startRolling(playerId: string, rollCount: number, kept: boolean[]) {
    rollingPlayerId.value = playerId
    turnState.value.rollCount = rollCount
    turnState.value.kept = kept
    turnState.value.dice = [0, 0, 0, 0, 0] // 아직 결과 없음
    physicsStreamData.value = null // 이전 스트림 데이터 초기화

    // 모든 플레이어 즉시 시뮬레이션 시작
    // Roller: 물리 시뮬레이션 + 스트리밍
    // Observer: 스트림 데이터 수신 + 적용
    isRolling.value = true
  }

  /**
   * dice:rolled 이벤트 — 최종 결과 도착
   * 모든 플레이어: 물리 시뮬레이션/스트리밍 종료
   */
  function updateDiceRolled(data: { dice: number[], rollCount: number, kept: boolean[] }) {
    turnState.value.dice = data.dice
    turnState.value.rollCount = data.rollCount
    turnState.value.kept = data.kept

    // 모든 플레이어: 시뮬레이션 종료
    isRolling.value = false
    physicsStreamData.value = null
  }

  /**
   * dice:physics-stream 이벤트 — Roller의 물리 상태 프레임 수신 (Observer만)
   */
  function updatePhysicsStream(data: any) {
    physicsStreamData.value = data
  }

  function onPhysicsComplete() {
    isRolling.value = false
  }

  function updateKept(kept: boolean[]) {
    turnState.value.kept = kept
  }

  function setRankings(data: Ranking[]) {
    rankings.value = data
    phase.value = 'finished'
  }

  function toggleKeep(index: number) {
    if (!isMyTurn.value || turnState.value.rollCount === 0 || turnState.value.rollCount >= 3) return
    turnState.value.kept[index] = !turnState.value.kept[index]
  }

  function reset() {
    phase.value = 'waiting'
    players.value = []
    currentPlayerIndex.value = 0
    currentRound.value = 1
    turnState.value = { rollCount: 0, dice: [0, 0, 0, 0, 0], kept: [false, false, false, false, false] }
    rollingPlayerId.value = ''
    physicsStreamData.value = null
    myScores.value = {
      ones: null, twos: null, threes: null,
      fours: null, fives: null, sixes: null,
      choice: null, fourOfAKind: null, fullHouse: null,
      smallStraight: null, largeStraight: null, yacht: null,
    }
    myBonus.value = 0
    myTotal.value = 0
    possibleScores.value = {}
    rankings.value = []
  }

  return {
    // State
    mySocketId, connected, phase, players,
    currentPlayerIndex, currentRound, turnState,
    myScores, myBonus, myTotal, possibleScores,
    rankings, isRolling, rollingPlayerId, physicsStreamData,
    // Computed
    myPlayer, isMyTurn, currentPlayer, canRoll, canSelectScore, isHost, isMyRolling,
    // Actions
    updateRoomState, updateScoreCard, updatePossibleScores,
    startRolling, updateDiceRolled, updatePhysicsStream,
    onPhysicsComplete, updateKept,
    setRankings, toggleKeep, reset,
  }
})
