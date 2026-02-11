# Yacht Dice Game - 설계 문서

## 1. 프로젝트 개요

### 1.1 목적
Three.js와 Vue를 사용하여 최대 5인이 함께 즐길 수 있는 멀티플레이어 Yacht 주사위 게임을 구현한다.

### 1.2 핵심 요구사항
| 항목 | 설명 |
|------|------|
| 프론트엔드 | Vue 3 + Three.js |
| 물리 엔진 | Cannon-es (Three.js 물리 시뮬레이션) |
| 백엔드 | Node.js + Express + Socket.IO |
| 접속 방식 | 호스트 IP 입력만으로 브라우저 접속 |
| 최대 플레이어 | 5명 |
| 물리 효과 | 주사위, 통(컵), 테이블에 적용 |
| 점수 표시 | 개인 화면에서만 본인 점수 확인 |
| 게임 종료 | 전체 순위만 공개 |

---

## 2. 기술 스택

```
┌─────────────────────────────────────────────┐
│                  Frontend                    │
│  Vue 3 (Composition API + TypeScript)        │
│  Three.js (3D 렌더링)                        │
│  Cannon-es (물리 엔진)                        │
│  Socket.IO Client (실시간 통신)               │
│  Pinia (상태 관리)                            │
└─────────────┬───────────────────────────────┘
              │ WebSocket (Socket.IO)
┌─────────────▼───────────────────────────────┐
│                  Backend                     │
│  Node.js + Express                           │
│  Socket.IO Server                            │
│  Game State Manager (인메모리)                │
└─────────────────────────────────────────────┘
```

### 2.1 의존성 목록

**Backend (`server/`)**
- `express` - HTTP 서버
- `socket.io` - 실시간 양방향 통신
- `uuid` - 고유 ID 생성

**Frontend (`client/`)**
- `vue@3` - UI 프레임워크
- `three` - 3D 렌더링
- `cannon-es` - 물리 시뮬레이션
- `socket.io-client` - 소켓 클라이언트
- `pinia` - 상태 관리
- `vite` - 빌드 도구

---

## 3. 디렉토리 구조

```
yacht/
├── DESIGN.md
├── package.json                  # 루트 (모노레포 스크립트)
│
├── server/                       # 백엔드
│   ├── package.json
│   ├── src/
│   │   ├── index.ts              # Express + Socket.IO 서버 진입점
│   │   ├── game/
│   │   │   ├── GameRoom.ts       # 게임 방 관리
│   │   │   ├── GameState.ts      # 게임 상태 머신
│   │   │   ├── Player.ts         # 플레이어 모델
│   │   │   ├── ScoreBoard.ts     # 점수판 로직
│   │   │   ├── DiceLogic.ts      # 주사위 결과 계산
│   │   │   └── YachtRules.ts     # Yacht 규칙 & 카테고리 점수 계산
│   │   └── socket/
│   │       ├── handlers.ts       # 소켓 이벤트 핸들러
│   │       └── events.ts         # 이벤트 상수 정의
│   └── tsconfig.json
│
├── client/                       # 프론트엔드
│   ├── package.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts               # Vue 앱 진입점
│       ├── App.vue               # 루트 컴포넌트
│       │
│       ├── views/
│       │   ├── LobbyView.vue     # 로비 (접속 & 대기)
│       │   ├── GameView.vue      # 게임 메인 뷰
│       │   └── ResultView.vue    # 결과 화면
│       │
│       ├── components/
│       │   ├── ui/
│       │   │   ├── PlayerList.vue      # 플레이어 목록
│       │   │   ├── ScoreCard.vue       # 개인 점수표
│       │   │   ├── TurnIndicator.vue   # 턴 표시기
│       │   │   ├── DiceSelector.vue    # 주사위 선택 UI
│       │   │   ├── CategoryPicker.vue  # 점수 카테고리 선택
│       │   │   └── GameTimer.vue       # 턴 타이머
│       │   └── three/
│       │       ├── SceneManager.vue    # Three.js 씬 래퍼
│       │       ├── DiceRenderer.ts     # 주사위 3D 모델 + 물리
│       │       ├── CupRenderer.ts      # 통(컵) 3D 모델 + 물리
│       │       ├── TableRenderer.ts    # 테이블 3D 모델 + 물리
│       │       └── PhysicsWorld.ts     # Cannon-es 물리 월드 관리
│       │
│       ├── composables/
│       │   ├── useSocket.ts       # Socket.IO 연결 관리
│       │   ├── useGame.ts         # 게임 로직 훅
│       │   ├── usePhysics.ts      # 물리 시뮬레이션 훅
│       │   └── useThreeScene.ts   # Three.js 씬 관리 훅
│       │
│       ├── stores/
│       │   ├── gameStore.ts       # 게임 상태 (Pinia)
│       │   └── playerStore.ts     # 플레이어 상태 (Pinia)
│       │
│       ├── types/
│       │   ├── game.ts            # 게임 관련 타입 정의
│       │   ├── dice.ts            # 주사위 관련 타입
│       │   ├── score.ts           # 점수 관련 타입
│       │   └── socket.ts          # 소켓 이벤트 타입
│       │
│       └── utils/
│           ├── scoreCalculator.ts # 점수 계산 유틸리티
│           └── constants.ts       # 상수 정의
│
└── shared/                        # 프론트/백 공유 타입
    ├── types.ts
    └── constants.ts
```

---

## 4. 게임 규칙 (Yacht)

### 4.1 기본 규칙
- 5개의 주사위를 사용
- 각 턴에 최대 3번 굴릴 수 있음
- 1차 굴림 후, 유지할 주사위를 선택하고 나머지를 다시 굴림
- 3번째 굴림 후 (또는 원할 때) 점수 카테고리 하나를 선택
- 12개 카테고리를 모두 채우면 게임 종료

### 4.2 점수 카테고리

#### Upper Section (상단)
| 카테고리 | 설명 | 최대 점수 |
|----------|------|-----------|
| Ones (1) | 1의 합계 | 5 |
| Twos (2) | 2의 합계 | 10 |
| Threes (3) | 3의 합계 | 15 |
| Fours (4) | 4의 합계 | 20 |
| Fives (5) | 5의 합계 | 25 |
| Sixes (6) | 6의 합계 | 30 |
| **보너스** | 상단 합계 ≥ 63이면 +35점 | 35 |

#### Lower Section (하단)
| 카테고리 | 설명 | 점수 |
|----------|------|------|
| Choice | 주사위 전체 합 | 합계 |
| Four of a Kind | 같은 눈 4개 이상 | 합계 |
| Full House | 3개 + 2개 (같은 눈) | 합계 |
| Small Straight | 연속 4개 (1-2-3-4, 2-3-4-5, 3-4-5-6) | 15 |
| Large Straight | 연속 5개 (1-2-3-4-5, 2-3-4-5-6) | 30 |
| Yacht | 5개 모두 같은 눈 | 50 |

### 4.3 턴 흐름
```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────────┐
│ 1차 굴림  │───▶│ 2차 굴림  │───▶│ 3차 굴림  │───▶│ 카테고리 선택 │
│ (필수)    │    │ (선택)    │    │ (선택)    │    │   (필수)      │
└──────────┘    └──────────┘    └──────────┘    └──────────────┘
       │               │               │
       └───────────────┴───────────────┘
            언제든 카테고리 선택 가능
```

---

## 5. 게임 상태 머신

### 5.1 전체 게임 상태

```
                     ┌──────────────┐
                     │   WAITING    │  (로비: 플레이어 입장 대기)
                     │  (1~5명)     │
                     └──────┬───────┘
                            │ 호스트가 시작 버튼
                     ┌──────▼───────┐
              ┌─────▶│   PLAYING    │  (게임 진행 중)
              │      └──────┬───────┘
              │             │ 모든 플레이어 12라운드 완료
              │      ┌──────▼───────┐
              │      │   FINISHED   │  (결과 표시)
              │      └──────┬───────┘
              │             │ 다시하기
              └─────────────┘
```

### 5.2 턴 상태

```typescript
enum TurnPhase {
  ROLLING     = 'rolling',     // 주사위 굴리는 중 (물리 시뮬레이션)
  SELECTING   = 'selecting',   // 유지할 주사위 선택 중
  SCORING     = 'scoring',     // 카테고리 선택 중
  WAITING     = 'waiting',     // 다른 플레이어 턴 대기
}
```

### 5.3 서버 게임 상태 구조

```typescript
interface GameState {
  roomId: string;
  phase: 'waiting' | 'playing' | 'finished';
  players: Player[];
  currentPlayerIndex: number;
  currentRound: number;        // 1 ~ 12
  totalRounds: 12;
  turnState: {
    rollCount: number;         // 0, 1, 2, 3
    dice: number[];            // [1-6, 1-6, 1-6, 1-6, 1-6]
    kept: boolean[];           // [false, false, false, false, false]
  };
}

interface Player {
  id: string;                  // socket ID
  name: string;
  color: string;               // 플레이어 구분 색상
  scores: ScoreCard;
  isHost: boolean;
  isConnected: boolean;
}

interface ScoreCard {
  ones: number | null;
  twos: number | null;
  threes: number | null;
  fours: number | null;
  fives: number | null;
  sixes: number | null;
  choice: number | null;
  fourOfAKind: number | null;
  fullHouse: number | null;
  smallStraight: number | null;
  largeStraight: number | null;
  yacht: number | null;
}
```

---

## 6. 네트워크 아키텍처

### 6.1 접속 방식
- 서버는 `0.0.0.0:3000`에서 리슨
- 같은 네트워크의 플레이어는 `http://{호스트IP}:3000`으로 접속
- 별도 방 코드 없이 **단일 방** 운영 (간단한 파티 게임 용도)

### 6.2 Socket.IO 이벤트 설계

#### Client → Server

| 이벤트 | 페이로드 | 설명 |
|--------|----------|------|
| `player:join` | `{ name: string }` | 게임 참가 |
| `player:ready` | `{}` | 준비 완료 |
| `game:start` | `{}` | 게임 시작 (호스트만) |
| `dice:roll` | `{}` | 주사위 굴리기 시작 |
| `dice:result` | `{ values: number[] }` | 물리 시뮬레이션 결과 전송 (Roller만) |
| `dice:physics-stream` | `PhysicsStreamFrame` | Roller의 물리 상태 프레임 (30Hz, volatile) |
| `dice:keep` | `{ kept: boolean[] }` | 유지할 주사위 선택 |
| `score:select` | `{ category: string }` | 점수 카테고리 선택 |
| `game:restart` | `{}` | 게임 재시작 (호스트만) |

#### Server → Client

| 이벤트 | 페이로드 | 설명 |
|--------|----------|------|
| `room:state` | `RoomState` | 전체 방 상태 동기화 |
| `player:joined` | `{ player: Player }` | 새 플레이어 입장 알림 |
| `player:left` | `{ playerId: string }` | 플레이어 퇴장 알림 |
| `game:started` | `{ gameState }` | 게임 시작됨 |
| `turn:begin` | `{ playerId, round }` | 턴 시작 |
| `dice:rolling` | `{ playerId, rollCount, kept }` | 굴림 시작 알림 (모든 클라이언트 시뮬레이션 시작) |
| `dice:physics-stream` | `PhysicsStreamFrame` | Roller의 물리 상태 릴레이 (Observer에게 전달) |
| `dice:rolled` | `{ dice: number[], rollCount, kept }` | 주사위 최종 결과 (Roller 물리 결과) |
| `dice:kept` | `{ kept: boolean[] }` | 유지 상태 동기화 |
| `score:updated` | `{ playerId, category, score }` | 점수 업데이트 |
| `score:card` | `{ scores: ScoreCard }` | 본인 점수표 (개인 전송) |
| `turn:end` | `{ nextPlayerId }` | 턴 종료 |
| `game:finished` | `{ rankings: Ranking[] }` | 게임 종료 & 순위 |
| `error` | `{ message: string }` | 에러 메시지 |

### 6.3 동기화 전략 (물리 상태 스트리밍 방식)

```
주사위 굴리기 흐름:
1. Roller → 'dice:roll' → Server
2. Server: rollCount 증가, 값은 생성하지 않음
3. Server → ALL: 'dice:rolling' { playerId, rollCount, kept }
4. ALL Clients: 동시에 시뮬레이션 시작
   - Roller: 자유 물리 시뮬레이션 실행 + 30Hz 물리 상태 스트리밍 시작
   - Observer: 스트림 수신 모드 진입 (로컬 물리 비활성화)
5. Roller → Server → ALL Observers: 'dice:physics-stream' (주사위+컵 위치/회전, 30Hz)
   - Observer: 수신한 스트림 프레임을 직접 메시에 적용 → Roller와 동일한 화면
6. Roller: 주사위 정지 → 면 감지 → 'dice:result' { values } → Server
7. Server: 값 저장 → ALL: 'dice:rolled' { dice, rollCount, kept }
8. ALL: isRolling 해제, 스트리밍 종료
   - Observer: 최종 면 보정 안전장치 실행 (필요 시)
```

> **핵심**: Roller의 물리 시뮬레이션 상태(주사위 5개 + 컵의 위치/회전)를 **30Hz로 실시간 스트리밍**하여 모든 Observer가 Roller와 **동일한 3D 장면**을 본다. Observer는 로컬 물리 엔진을 사용하지 않고, 수신된 프레임 데이터를 직접 Three.js 메시에 적용한다. LAN 환경에서 ~12KB/s 대역폭으로 사실상 무시 가능한 부하이며, 네트워크 지연도 1~5ms 수준이다. `volatile` emit으로 프레임 드롭을 허용하여 백프레셔를 방지한다.

### 6.4 점수 비공개 전략

```
점수 관련 이벤트 흐름:
- score:updated → 브로드캐스트 (카테고리 사용 여부만 전달, 점수 값 비공개)
- score:card → 개인에게만 전송 (본인 전체 점수표)
- game:finished → 브로드캐스트 (최종 순위 + 전체 점수 공개)
```

---

## 7. 3D 씬 & 물리 설계

### 7.1 씬 구성

```
카메라 (PerspectiveCamera)
  │
  ├── 조명
  │   ├── AmbientLight (부드러운 전역 조명)
  │   ├── DirectionalLight (메인 그림자 생성 조명)
  │   └── PointLight (테이블 위 보조 조명)
  │
  ├── 테이블 (Table)
  │   ├── 상판 (Box geometry, 나무 텍스처)
  │   ├── 다리 4개 (Cylinder geometry)
  │   └── 펠트 표면 (녹색 천 텍스처)
  │
  ├── 통/컵 (Cup)
  │   ├── Cylinder geometry (열린 윗면)
  │   ├── 가죽 텍스처
  │   └── 물리: 정적 → 동적 (흔들 때)
  │
  └── 주사위 5개 (Dice)
      ├── RoundedBox geometry
      ├── 흰색 + 검정 점 텍스처
      └── 물리: 동적 RigidBody
```

### 7.2 물리 엔진 설정 (Cannon-es)

```typescript
// 물리 월드 설정
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});
world.broadphase = new CANNON.SAPBroadphase(world);
world.solver.iterations = 10;

// 재질 정의
const diceMaterial = new CANNON.Material('dice');
const tableMaterial = new CANNON.Material('table');
const cupMaterial = new CANNON.Material('cup');

// 접촉 설정
const diceTableContact = new CANNON.ContactMaterial(
  diceMaterial, tableMaterial, {
    friction: 0.4,
    restitution: 0.3,   // 적당한 반발력
  }
);

const diceCupContact = new CANNON.ContactMaterial(
  diceMaterial, cupMaterial, {
    friction: 0.6,
    restitution: 0.2,
  }
);
```

### 7.3 주사위 물리 시뮬레이션

```
굴림 애니메이션 흐름:
1. 컵 안에 주사위 5개 배치
2. 컵 기울이기 애니메이션 (Tween)
3. 주사위에 랜덤 힘 + 토크 적용
4. 물리 시뮬레이션 실행 (자연스러운 낙하 & 구름)
5. 주사위 정지 감지 (velocity < threshold)
6. 최종 면 보정: 서버에서 결정한 값으로 부드럽게 회전 보정
   - 현재 가장 가까운 면 계산 → 목표 면으로 미세 회전
   - Quaternion SLERP로 부드러운 전환
```

### 7.4 주사위 면 감지 로직

```typescript
// 각 면의 법선 방향 (로컬 좌표)
const FACE_NORMALS = {
  1: new THREE.Vector3(0, 1, 0),   // 위
  6: new THREE.Vector3(0, -1, 0),  // 아래
  2: new THREE.Vector3(0, 0, 1),   // 앞
  5: new THREE.Vector3(0, 0, -1),  // 뒤
  3: new THREE.Vector3(1, 0, 0),   // 오른쪽
  4: new THREE.Vector3(-1, 0, 0),  // 왼쪽
};

function getTopFace(diceQuaternion: THREE.Quaternion): number {
  const up = new THREE.Vector3(0, 1, 0);
  let maxDot = -1;
  let topFace = 1;
  
  for (const [face, normal] of Object.entries(FACE_NORMALS)) {
    const worldNormal = normal.clone().applyQuaternion(diceQuaternion);
    const dot = worldNormal.dot(up);
    if (dot > maxDot) {
      maxDot = dot;
      topFace = parseInt(face);
    }
  }
  return topFace;
}
```

### 7.5 유지 주사위 시각 효과

```
유지된 주사위:
- 테이블 한쪽에 정렬 배치
- 반투명 하이라이트 글로우 효과
- 물리 비활성화 (정적 상태)

미유지 주사위:
- 다시 컵에 넣기 애니메이션
- 다음 굴림 시 다시 물리 활성화
```

---

## 8. UI/UX 설계

### 8.1 화면 구성

```
┌─────────────────────────────────────────────────┐
│  [턴 표시: Player1의 차례] [라운드: 3/12] [굴림: 1/3]  │
├──────────────────────────┬──────────────────────┤
│                          │                      │
│                          │   ┌──────────────┐   │
│                          │   │  점수 카드     │   │
│    3D 게임 영역            │   │  (본인만 보임)  │   │
│    (Three.js Canvas)     │   │              │   │
│                          │   │ Ones:  [  3] │   │
│                          │   │ Twos:  [  -] │   │
│                          │   │ ...          │   │
│                          │   │              │   │
│                          │   │ Yacht: [  -] │   │
│                          │   └──────────────┘   │
│                          │                      │
├──────────────────────────┴──────────────────────┤
│  [🎲 굴리기]  [주사위 선택: ⬜⬜⬜⬜⬜]  [점수 선택]  │
│                                                 │
│  플레이어: 🔴P1(나) 🔵P2 🟢P3 🟡P4 🟣P5        │
└─────────────────────────────────────────────────┘
```

### 8.2 뷰별 상세

#### 로비 뷰 (LobbyView)
- 닉네임 입력 필드
- 참가 버튼
- 현재 접속자 목록 (최대 5명, 컬러 할당)
- 호스트: 게임 시작 버튼 (2명 이상일 때 활성화)
- 접속 정보 표시 (IP:Port)

#### 게임 뷰 (GameView)
- **3D 영역 (왼쪽 ~70%)**
  - 테이블 + 주사위 + 컵 렌더링
  - 카메라 고정 (약간의 마우스 따라가기 효과)
- **점수 카드 (오른쪽 ~30%)**
  - 본인 점수표만 표시
  - 선택 가능한 카테고리 하이라이트
  - 예상 점수 미리보기 (반투명)
- **하단 컨트롤 바**
  - 굴리기 버튼 (본인 턴일 때만 활성)
  - 주사위 클릭으로 유지/해제 토글
  - 점수 카테고리 선택 확인

#### 결과 뷰 (ResultView)
- 최종 순위표 (1위~5위)
- 각 플레이어 총점
- 상세 점수 카테고리별 점수
- 다시하기 버튼 (호스트)
- 축하 애니메이션 (1위 confetti 효과)

### 8.3 반응형 대응
- 데스크톱 우선, 모바일 최소 대응
- 3D 영역은 `ResizeObserver`로 동적 리사이즈
- 모바일: 점수 카드가 하단 드로어로 전환

---

## 9. 게임 플로우 시퀀스

### 9.1 접속 ~ 게임 시작

```
Player A (호스트)           Server              Player B
    │                        │                     │
    │── player:join ────────▶│                     │
    │◀── room:state ─────────│                     │
    │   (isHost: true)       │                     │
    │                        │                     │
    │                        │◀── player:join ─────│
    │◀── player:joined ─────│──▶ room:state ──────│
    │                        │                     │
    │── game:start ─────────▶│                     │
    │◀── game:started ──────│──▶ game:started ────│
    │◀── turn:begin ────────│──▶ turn:begin ──────│
    │   (Player A's turn)    │                     │
```

### 9.2 턴 진행

```
Current Player (Roller)     Server              Other Players (Observer)
    │                        │                     │
    │── dice:roll ──────────▶│                     │
    │                        │ (rollCount 증가)     │
    │◀── dice:rolling ──────│──▶ dice:rolling ────│
    │   (물리+스트리밍 시작)   │   (스트림 수신 시작)  │
    │                        │                     │
    │─ dice:physics-stream ─▶│                     │
    │  (30Hz, 컵+주사위 상태)  │──▶ physics-stream ─│
    │   ...반복...            │   (메시에 직접 적용)  │
    │   ...물리 시뮬레이션...  │                     │
    │   (주사위 정지, 면 감지)  │                     │
    │── dice:result ────────▶│                     │
    │  {values:[3,5,2,6,1]}  │ (결과 저장)          │
    │◀── dice:rolled ───────│──▶ dice:rolled ─────│
    │  (스트리밍 종료)        │  (스트림 종료+면 보정) │
    │                        │                     │
    │── dice:keep ──────────▶│                     │
    │  {kept:[T,F,T,F,F]}   │                     │
    │◀── dice:kept ─────────│──▶ dice:kept ───────│
    │                        │                     │
    │── dice:roll ──────────▶│  (2차 굴림)         │
    │◀── dice:rolling ──────│──▶ dice:rolling ────│
    │   (물리+스트리밍 시작)   │   (스트림 수신 시작)  │
    │─ dice:physics-stream ─▶│──▶ physics-stream ─│
    │   ...반복...            │                     │
    │── dice:result ────────▶│                     │
    │◀── dice:rolled ───────│──▶ dice:rolled ─────│
    │                        │                     │
    │── score:select ───────▶│                     │
    │  {category:'yacht'}    │ (점수 계산)          │
    │◀── score:card ────────│                     │
    │  (본인 전체 점수)       │                     │
    │◀── score:updated ─────│──▶ score:updated ───│
    │  (카테고리 사용 여부만)  │  (카테고리 사용 여부) │
    │                        │                     │
    │◀── turn:end ──────────│──▶ turn:begin ──────│
    │                        │  (Next player turn)  │
```

### 9.3 게임 종료

```
Last Player                Server              All Players
    │                        │                     │
    │── score:select ───────▶│                     │
    │                        │ (마지막 카테고리)     │
    │                        │ (순위 계산)          │
    │◀── game:finished ─────│──▶ game:finished ───│
    │  { rankings: [         │                     │
    │    {name, total, rank}, │                    │
    │    ...                  │                    │
    │  ]}                    │                     │
```

---

## 10. 핵심 알고리즘

### 10.1 점수 계산 (YachtRules)

```typescript
class YachtRules {
  static calculate(dice: number[], category: string): number {
    const sorted = [...dice].sort();
    const counts = new Array(7).fill(0);
    dice.forEach(d => counts[d]++);
    const sum = dice.reduce((a, b) => a + b, 0);
    
    switch (category) {
      // Upper section
      case 'ones':   return counts[1] * 1;
      case 'twos':   return counts[2] * 2;
      case 'threes': return counts[3] * 3;
      case 'fours':  return counts[4] * 4;
      case 'fives':  return counts[5] * 5;
      case 'sixes':  return counts[6] * 6;
      
      // Lower section
      case 'choice':        return sum;
      case 'fourOfAKind':   return counts.some(c => c >= 4) ? sum : 0;
      case 'fullHouse':     return (counts.includes(3) && counts.includes(2)) ? sum : 0;
      case 'smallStraight': return this.hasConsecutive(sorted, 4) ? 15 : 0;
      case 'largeStraight': return this.hasConsecutive(sorted, 5) ? 30 : 0;
      case 'yacht':         return counts.some(c => c === 5) ? 50 : 0;
      default: return 0;
    }
  }
  
  static hasConsecutive(sorted: number[], length: number): boolean {
    const unique = [...new Set(sorted)];
    if (unique.length < length) return false;
    for (let i = 0; i <= unique.length - length; i++) {
      if (unique[i + length - 1] - unique[i] === length - 1) return true;
    }
    return false;
  }
  
  static calculateBonus(scores: ScoreCard): number {
    const upperSum = (scores.ones ?? 0) + (scores.twos ?? 0) +
                     (scores.threes ?? 0) + (scores.fours ?? 0) +
                     (scores.fives ?? 0) + (scores.sixes ?? 0);
    return upperSum >= 63 ? 35 : 0;
  }
}
```

### 10.2 순위 계산

```typescript
function calculateRankings(players: Player[]): Ranking[] {
  return players
    .map(p => ({
      playerId: p.id,
      name: p.name,
      color: p.color,
      totalScore: calculateTotal(p.scores),
      upperBonus: YachtRules.calculateBonus(p.scores),
      scores: p.scores,
    }))
    .sort((a, b) => b.totalScore - a.totalScore)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}
```

---

## 11. 물리 시뮬레이션 상세

### 11.1 컵 흔들기 애니메이션

```typescript
async function shakeCup(cup: CupObject): Promise<void> {
  // 1. 컵 닫기 (주사위를 덮음)
  await animateTo(cup, { y: TABLE_Y + CUP_HEIGHT }, 300);
  
  // 2. 흔들기 (좌우 회전 반복)
  for (let i = 0; i < 3; i++) {
    await animateTo(cup, { rotZ: 0.3 }, 100);
    await animateTo(cup, { rotZ: -0.3 }, 100);
  }
  
  // 3. 컵 열기 (기울여서 주사위 방출)
  await animateTo(cup, { rotX: -1.2, y: TABLE_Y + 5 }, 500);
  
  // 4. 컵 치우기
  await animateTo(cup, { x: -10, y: TABLE_Y + 3 }, 400);
}
```

### 11.2 주사위 결과 처리 (물리 스트리밍 방식)

```typescript
// ===== Roller 모드: 물리 실행 + 상태 스트리밍 =====
// 30Hz로 주사위+컵 위치/회전을 모든 Observer에게 전송
function emitPhysicsStream(): void {
  const frame = {
    dice: diceMeshes.map(mesh => ({
      p: [mesh.position.x, mesh.position.y, mesh.position.z],
      q: [mesh.quaternion.x, mesh.quaternion.y, mesh.quaternion.z, mesh.quaternion.w],
      v: mesh.visible,
    })),
    cup: {
      p: [cupGroup.position.x, cupGroup.position.y, cupGroup.position.z],
      r: [cupGroup.rotation.x, cupGroup.rotation.y, cupGroup.rotation.z],
      v: cupGroup.visible,
    },
  };
  socket.sendPhysicsStream(frame); // volatile emit
}

// ===== Observer 모드: 스트림 데이터 직접 적용 =====
// 로컬 물리 엔진 비활성화, 수신한 프레임을 메시에 바로 적용
function applyLatestStreamData(): void {
  const frame = store.physicsStreamData;
  if (!frame) return;
  frame.dice.forEach((d, i) => {
    if (d.v) {
      diceMeshes[i].visible = true;
      diceMeshes[i].position.set(d.p[0], d.p[1], d.p[2]);
      diceMeshes[i].quaternion.set(d.q[0], d.q[1], d.q[2], d.q[3]);
    }
  });
  // 컵도 동일하게 적용
  if (frame.cup?.v) {
    cupGroup.position.set(frame.cup.p[0], frame.cup.p[1], frame.cup.p[2]);
    cupGroup.rotation.set(frame.cup.r[0], frame.cup.r[1], frame.cup.r[2]);
  }
}

// ===== Observer: 스트리밍 종료 시 최종 면 보정 =====
function ensureFinalFaces(): void {
  // 스트림 마지막 프레임의 주사위 면이 서버 결과와 일치하는지 확인
  // 미세 오차가 있으면 200ms 보간으로 부드럽게 보정
}
```

---

## 12. 보안 & 유효성 검증

### 12.1 서버측 검증
- 모든 게임 로직은 서버에서 실행
- 주사위 결과는 서버에서 생성 (클라이언트 조작 불가)
- 턴 순서 검증 (본인 턴이 아닐 때 행동 차단)
- 점수 카테고리 중복 선택 방지
- 최대 3회 굴림 제한 검증
- 최대 5명 접속 제한

### 12.2 연결 끊김 처리
- 플레이어 연결 끊김 시 30초 대기
- 30초 내 재접속: 세션 복구
- 30초 초과: 해당 플레이어 남은 카테고리 0점 처리, 턴 스킵
- 게임 중 전원 이탈 시 게임 자동 종료

---

## 13. 성능 최적화

### 13.1 렌더링
- `requestAnimationFrame` 기반 렌더 루프
- 물리 시뮬레이션은 고정 타임스텝 (60Hz)
- 주사위 정지 시 물리 Sleep 모드
- 그림자는 `DirectionalLight`에서만 (성능)
- Anti-aliasing, tone mapping 적용

### 13.2 네트워크
- Roller만 물리 시뮬레이션 실행, 상태를 30Hz로 Observer에 스트리밍
- Observer는 물리 엔진 비활성화 → CPU 절약
- `volatile` emit으로 스트리밍 → 프레임 드롭 허용, 네트워크 백프레셔 방지
- 스트림 데이터 소수점 3자리 반올림 → JSON 페이로드 크기 최소화
- 주사위 5개 + 컵 1개: ~300바이트/프레임 × 30Hz ≈ **~9KB/s** (LAN에서 무시 가능)
- 불필요한 상태 브로드캐스트 최소화

---

## 14. 실행 방법 (예상)

```bash
# 의존성 설치
npm install

# 개발 모드 실행 (서버 + 클라이언트 동시)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
# → http://0.0.0.0:3000 에서 서비스

# 다른 플레이어 접속
# 브라우저에서 http://{호스트IP}:3000 입력
```

---

## 15. 구현 우선순위 (단계별)

### Phase 1: 기반 구축
1. 프로젝트 스캐폴딩 (모노레포 구조)
2. Express + Socket.IO 서버 기본 설정
3. Vue 3 + Vite 클라이언트 기본 설정
4. Socket.IO 연결 테스트

### Phase 2: 게임 로직
5. Yacht 점수 계산 로직 구현 (shared)
6. 서버 게임 상태 관리 구현
7. 소켓 이벤트 핸들러 구현
8. 턴 관리 시스템 구현

### Phase 3: 3D 씬 & 물리
9. Three.js 기본 씬 구성 (테이블, 조명)
10. 주사위 3D 모델 생성
11. Cannon-es 물리 월드 설정
12. 주사위 굴리기 물리 시뮬레이션
13. 컵 모델 + 애니메이션
14. 주사위 결과 보정 시스템

### Phase 4: UI 연동
15. 로비 뷰 구현
16. 게임 뷰 (점수 카드 + 컨트롤)
17. 3D 씬과 게임 로직 연동
18. 결과 뷰 구현

### Phase 5: 완성도
19. 연결 끊김 처리
20. UI 폴리시 & 애니메이션
21. 사운드 효과 (선택)
22. 테스트 & 버그 수정

---

## 16. 주요 설계 결정 & 이유

| 결정 | 이유 |
|------|------|
| 주사위 결과는 Roller 클라이언트 물리에서 결정 | Roller 화면에서 보정 없는 자연스러운 결과, 파티 게임 특성상 치팅 위험 낮음 |
| Roller 물리 상태를 30Hz로 Observer에 스트리밍 | 모든 플레이어가 동일한 3D 장면 공유, LAN 환경에서 대역폭 무시 가능 (~12KB/s) |
| Observer는 로컬 물리 비활성화 + 스트림 데이터 직접 적용 | 물리 엔진 이중 실행 방지, 완벽한 시각적 동기화 |
| volatile emit으로 스트리밍 | 프레임 드롭 허용하여 백프레셔 방지, 위치 기반 데이터라 유실돼도 다음 프레임에서 보정 |
| 단일 방 운영 | 파티 게임 특성상 방 관리 불필요, UX 단순화 |
| Cannon-es 사용 | Three.js와 호환성 우수, 순수 JS, 번들 크기 작음 |
| Pinia 상태 관리 | Vue 3 공식 권장, Composition API와 자연스러운 통합 |
| 점수 비공개 → 결과에서만 공개 | Yacht 게임 전략적 재미 요소 극대화 |
| 모노레포 구조 | 공유 타입 관리 용이, 단일 커맨드로 실행 |
