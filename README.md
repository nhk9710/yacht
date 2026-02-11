# Yacht Dice Game

같은 네트워크에서 최대 5명이 함께 즐기는 **3D 물리 시뮬레이션 기반 멀티플레이어 Yacht 주사위 게임**입니다.

Three.js로 렌더링된 주사위가 Cannon-es 물리 엔진 위에서 실제처럼 굴러가며, Roller의 물리 시뮬레이션이 **실시간 스트리밍**되어 모든 플레이어가 동일한 3D 장면을 공유합니다.

## 주요 기능

- **3D 물리 시뮬레이션**: 주사위 5개 + 컵 애니메이션, 실제 물리 법칙 기반
- **실시간 멀티플레이어**: Socket.IO 기반, 최대 5명 동시 접속
- **물리 화면 동기화**: Roller의 물리 상태를 30Hz로 스트리밍하여 모든 플레이어가 동일한 장면을 봄
- **점수 비공개**: 게임 중에는 본인 점수만 확인 가능, 종료 시 전체 순위 공개
- **간편한 접속**: 호스트 IP만 입력하면 브라우저에서 바로 플레이

## 기술 스택

| 영역 | 기술 |
|------|------|
| **프론트엔드** | Vue 3 (Composition API) + TypeScript |
| **3D 렌더링** | Three.js |
| **물리 엔진** | Cannon-es |
| **상태 관리** | Pinia |
| **백엔드** | Node.js + Express |
| **실시간 통신** | Socket.IO |
| **빌드** | Vite |

## 프로젝트 구조

```
yacht/
├── server/                     # 백엔드
│   └── src/
│       ├── index.js            # Express + Socket.IO 서버
│       ├── GameRoom.js         # 게임 방/턴 관리
│       └── YachtRules.js       # Yacht 점수 계산 규칙
│
├── client/                     # 프론트엔드
│   └── src/
│       ├── main.ts             # Vue 앱 진입점
│       ├── App.vue             # 루트 컴포넌트
│       ├── views/
│       │   ├── LobbyView.vue   # 로비 (닉네임 입력, 대기)
│       │   ├── GameView.vue    # 게임 메인 뷰
│       │   └── ResultView.vue  # 결과 화면
│       ├── components/
│       │   ├── three/
│       │   │   └── GameScene.vue   # Three.js + Cannon-es 3D 씬
│       │   └── ui/
│       │       └── ScoreCard.vue   # 개인 점수표
│       ├── composables/
│       │   └── useSocket.ts    # Socket.IO 연결 관리
│       ├── stores/
│       │   └── gameStore.ts    # 게임 상태 (Pinia)
│       └── types/
│           └── game.ts         # 타입 정의
│
├── DESIGN.md                   # 상세 설계 문서
├── changelog-1.md              # 변경 이력 #1: 클라이언트 물리 권위 방식
└── changelog-2.md              # 변경 이력 #2: 물리 스트리밍 동기화
```

## 시작하기

### 요구 사항

- Node.js 18+
- npm

### 설치

```bash
# 모든 의존성 한 번에 설치
npm run install:all
```

### 개발 모드 실행

```bash
# 서버 + 클라이언트 동시 실행 (hot reload)
npm run dev
```

- 클라이언트: `http://localhost:5173`
- 서버: `http://localhost:3000`

### 프로덕션 빌드 및 실행

```bash
# 클라이언트 빌드
npm run build

# 서버 실행 (빌드된 클라이언트를 정적 파일로 서빙)
npm start
```

`http://0.0.0.0:3000`에서 서비스가 시작되며, 서버 로그에 네트워크 IP가 출력됩니다.

### 다른 플레이어 접속

같은 네트워크(Wi-Fi 등)에서 브라우저로 접속:

```
http://{호스트 IP}:3000
```

## 게임 규칙

### 기본 규칙

1. 5개의 주사위를 사용
2. 각 턴에 최대 **3번** 굴릴 수 있음
3. 1차 굴림 후, **유지할 주사위를 선택**하고 나머지를 다시 굴림
4. 3번째 굴림 후 (또는 원할 때) **점수 카테고리 하나를 선택**
5. 12개 카테고리를 모두 채우면 게임 종료

### 점수 카테고리

#### 상단 (Upper Section)

| 카테고리 | 설명 | 최대 |
|----------|------|------|
| Ones ~ Sixes | 해당 눈의 합계 | 5~30 |
| **보너스** | 상단 합계 63 이상이면 +35 | 35 |

#### 하단 (Lower Section)

| 카테고리 | 설명 | 점수 |
|----------|------|------|
| Choice | 전체 합 | 합계 |
| Four of a Kind | 같은 눈 4개+ | 합계 |
| Full House | 3개 + 2개 | 합계 |
| Small Straight | 연속 4개 | 15 |
| Large Straight | 연속 5개 | 30 |
| **Yacht** | 5개 모두 같은 눈 | **50** |

## 동기화 방식

이 게임은 **물리 상태 스트리밍** 방식으로 모든 플레이어의 3D 화면을 동기화합니다.

```
Roller (현재 턴 플레이어)
  │  물리 시뮬레이션 실행
  │  주사위 + 컵 상태를 30Hz로 스트리밍
  │
  ├──▶ Server (순수 릴레이)
  │       │
  │       ├──▶ Observer A: 스트림 → 메시에 직접 적용
  │       ├──▶ Observer B: 스트림 → 메시에 직접 적용
  │       └──▶ Observer C: 스트림 → 메시에 직접 적용
  │
  └──▶ 주사위 정지 → 결과 확정 → 서버에 전송
```

- **Roller**: 로컬 물리 엔진 실행 + 상태 스트리밍
- **Observer**: 로컬 물리 비활성화, 수신한 프레임을 Three.js 메시에 직접 적용
- **대역폭**: ~9KB/s per Observer (LAN 환경에서 무시 가능)

## 문서

- [`DESIGN.md`](./DESIGN.md) — 상세 설계 문서 (아키텍처, 물리 설정, 이벤트 설계 등)
- [`changelog-1.md`](./changelog-1.md) — 클라이언트 물리 권위 방식으로 전환
- [`changelog-2.md`](./changelog-2.md) — 물리 스트리밍 동기화 도입

## 라이선스

Private
