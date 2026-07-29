import { io, Socket } from 'socket.io-client'
import { useGameStore } from '../stores/gameStore'
import type { ScoreCategory } from '../types/game'

let socket: Socket | null = null

const SESSION_KEY = 'yacht:session'

// 새로고침/재연결 복귀용 세션 (탭 단위)
function saveSession(code: string, playerId: string) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ code, playerId }))
}

export function loadSession(): { code: string; playerId: string } | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function clearSession() {
  sessionStorage.removeItem(SESSION_KEY)
}

export function useSocket() {
  const store = useGameStore()

  function connect() {
    if (socket) return // 이미 생성됨 (연결 중이면 socket.io가 이어서 처리)

    socket = io(window.location.origin, {
      transports: ['websocket', 'polling'],
    })

    socket.on('connect', () => {
      store.mySocketId = socket!.id!
      store.connected = true
      console.log('[Socket] 연결됨:', socket!.id)

      // 세션이 남아 있고 소켓 id가 바뀌었으면 재접속 시도 (새로고침·자동 재연결)
      const session = loadSession()
      if (session && session.playerId !== socket!.id) {
        socket!.emit('room:rejoin', { code: session.code, playerId: session.playerId })
      }
    })

    socket.on('disconnect', () => {
      store.connected = false
      console.log('[Socket] 연결 끊김')
    })

    // 방 생성 또는 참가 성공
    socket.on('room:created', ({ code, state }) => {
      store.roomCode = code
      store.updateRoomState(state)
      saveSession(code, socket!.id!)
    })

    // 재접속 성공
    socket.on('room:rejoined', ({ code, state }) => {
      store.roomCode = code
      store.updateRoomState(state)
      saveSession(code, socket!.id!)
      console.log('[Socket] 재접속 완료:', code)
    })

    // 재접속 실패 (방 소멸·대기실 이탈 등) → 세션 폐기하고 로비로
    socket.on('room:rejoin:error', ({ message }) => {
      console.warn('[Socket] 재접속 실패:', message)
      clearSession()
      store.reset()
    })

    // 방 상태 동기화
    socket.on('room:state', (state) => {
      store.updateRoomState(state)
    })

    // 게임 시작
    socket.on('game:started', (state) => {
      store.updateRoomState(state)
    })

    // 턴 시작
    socket.on('turn:begin', (_data) => {
      store.turnState.rollCount = 0
      store.turnState.dice = [0, 0, 0, 0, 0]
      store.turnState.kept = [false, false, false, false, false]
      store.possibleScores = {}
    })

    // 주사위 굴림 시작 (값 없이, 물리 시뮬레이션 트리거)
    socket.on('dice:rolling', (data) => {
      store.startRolling(data.playerId, data.rollCount, data.kept)
    })

    // 주사위 최종 결과 (클라이언트 물리 결과 확정)
    socket.on('dice:rolled', (data) => {
      store.updateDiceRolled(data)
    })

    // 물리 스트리밍 데이터 수신 (Observer용)
    socket.on('dice:physics-stream', (data) => {
      store.updatePhysicsStream(data)
    })

    // 유지 상태 동기화
    socket.on('dice:kept', ({ kept }) => {
      store.updateKept(kept)
    })

    // 본인 점수표 업데이트
    socket.on('score:card', (data) => {
      store.updateScoreCard(data)
    })

    // 가능한 점수 계산 결과
    socket.on('score:possible', ({ possible }) => {
      store.updatePossibleScores(possible)
    })

    // 점수 업데이트 (카테고리 사용 여부만)
    socket.on('score:updated', ({ playerId, category }) => {
      const player = store.players.find(p => p.id === playerId)
      if (player) {
        player.usedCategories[category] = true
      }
    })

    // 게임 종료
    socket.on('game:finished', ({ rankings }) => {
      store.setRankings(rankings)
    })

    // 다른 플레이어 점수표 수신
    socket.on('score:player', (data) => {
      store.setViewingPlayerScore(data)
    })

    // 에러
    socket.on('error', ({ message }) => {
      console.error('[Server Error]', message)
    })
  }

  function createRoom(name: string) {
    if (!socket?.connected) connect()
    setTimeout(() => {
      socket?.emit('room:create', { name })
    }, 300)
  }

  function joinRoom(name: string, code: string, onError: (msg: string) => void) {
    if (!socket?.connected) connect()
    setTimeout(() => {
      socket?.emit('room:join', { name, code })
      socket?.once('room:join:error', ({ message }) => {
        onError(message)
      })
    }, 300)
  }

  function startGame() {
    socket?.emit('game:start')
  }

  function rollDice() {
    socket?.emit('dice:roll')
  }

  function submitDiceResult(values: number[]) {
    socket?.emit('dice:result', { values })
  }

  function sendPhysicsStream(data: any) {
    socket?.volatile.emit('dice:physics-stream', data)
  }

  function setKept(kept: boolean[]) {
    socket?.emit('dice:keep', { kept })
  }

  function selectCategory(category: ScoreCategory) {
    socket?.emit('score:select', { category })
  }

  function requestPlayerScore(playerId: string) {
    socket?.emit('score:request', { playerId })
  }

  function restartGame() {
    socket?.emit('game:restart')
  }

  function disconnect() {
    socket?.disconnect()
    socket = null
  }

  return {
    connect,
    createRoom,
    joinRoom,
    startGame,
    rollDice,
    submitDiceResult,
    sendPhysicsStream,
    setKept,
    selectCategory,
    requestPlayerScore,
    restartGame,
    disconnect,
  }
}
