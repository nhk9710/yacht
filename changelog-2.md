# Changelog #2: 물리 시뮬레이션 화면 동기화 (State Streaming)

## 날짜
2026-02-11

## 변경 사유
Changelog #1에서 클라이언트 물리 권위 방식으로 전환하여 Roller 화면의 보정 문제는 해결되었으나,
**Observer(다른 플레이어)는 여전히 별도의 물리 시뮬레이션 + 보정 애니메이션**을 보고 있어서
**모든 사용자가 동일한 물리 시뮬레이션 화면을 보지 못하는 문제**가 있었다.

### 기존 방식의 한계
- Roller: 자유 물리 → 자연스러운 주사위 움직임
- Observer: 독립 물리 + 타겟 값 보정 → **Roller와 다른 움직임**, 보정 시 부자연스러운 스냅
- 같은 게임을 하면서 각자 다른 3D 장면을 보는 상태

## 변경 방향
**Roller 물리 상태 스트리밍(State Streaming)** 방식 도입.
- Roller: 물리 시뮬레이션 실행 + 30Hz로 주사위/컵 상태를 서버를 통해 스트리밍
- Observer: 로컬 물리 엔진 비활성화, 수신한 스트림 데이터를 Three.js 메시에 직접 적용
- 결과: **모든 플레이어가 Roller와 동일한 3D 장면**을 실시간으로 공유

---

## 변경 전 흐름

```
Roller → dice:roll → Server
Server → ALL: dice:rolling { playerId, rollCount, kept }

Roller: 자유 물리 시뮬레이션
Observer: 결과 대기 (아무것도 안 보임)

Roller: 정지 → 면 감지 → dice:result → Server
Server → ALL: dice:rolled { dice }

Roller: isRolling 해제
Observer: 이제서야 독립 물리 시뮬레이션 + 보정 시작 (Roller와 다른 화면)
```

**문제**: Observer는 Roller의 물리 장면을 볼 수 없고, 별도의 물리+보정으로 완전히 다른 시각적 경험

## 변경 후 흐름

```
Roller → dice:roll → Server
Server → ALL: dice:rolling { playerId, rollCount, kept }

Roller: 물리 시뮬레이션 시작 + 스트리밍 시작 (30Hz)
Observer: 스트림 수신 모드 진입 (로컬 물리 비활성화)

Roller → Server → Observers: dice:physics-stream (매 33ms)
  { dice: [{p, q, v}, ...5개], cup: {p, r, v} }
Observer: 수신한 프레임을 메시에 직접 적용 → Roller와 동일한 화면

Roller: 정지 → 면 감지 → dice:result → Server
Server → ALL: dice:rolled { dice }

ALL: isRolling 해제, 스트리밍 종료
Observer: 최종 면 보정 안전장치 (필요 시 200ms 보간)
```

---

## 수정 파일 목록 (5개)

### 1. `server/src/index.js`
- `dice:physics-stream` 이벤트 핸들러 추가: Roller → Server → Observer 릴레이
- 현재 턴 플레이어 검증 후 `socket.broadcast.emit()`으로 송신자 제외 브로드캐스트
- 서버는 스트림 데이터를 저장/처리하지 않고 순수 릴레이만 수행

### 2. `client/src/stores/gameStore.ts`
- `physicsStreamData` (shallowRef) 추가: Observer가 수신한 최신 스트림 프레임 저장
- `startRolling()` 변경: **모든 플레이어** 즉시 `isRolling = true` (기존: Roller만)
  - Observer도 즉시 스트림 수신 모드 진입
- `updateDiceRolled()` 변경: **모든 플레이어** `isRolling = false` (기존: Observer는 true)
  - Observer의 독립 애니메이션 시작 로직 제거
- `updatePhysicsStream()` 액션 추가: 스트림 프레임 데이터 저장
- `reset()`에서 `physicsStreamData` 초기화

### 3. `client/src/composables/useSocket.ts`
- `dice:physics-stream` 이벤트 리스너 추가 → `store.updatePhysicsStream(data)` 호출
- `sendPhysicsStream(data)` 함수 추가: `socket.volatile.emit()` 사용
  - `volatile`: 프레임 드롭 허용, 네트워크 백프레셔 방지

### 4. `client/src/components/three/GameScene.vue` (핵심 변경)

#### 새로 추가된 함수
- `emitPhysicsStream()`: Roller의 렌더 루프에서 30Hz로 주사위+컵 상태 전송
  - 소수점 3자리 반올림으로 페이로드 최소화
  - 33ms 스로틀링 (~30fps)
- `applyLatestStreamData()`: Observer의 렌더 루프에서 수신한 프레임을 메시에 적용
  - 주사위 5개: position + quaternion + visible
  - 컵 1개: position + rotation + visible
  - 물리 바디도 동기화 (다른 시스템에서 참조할 수 있으므로)
- `ensureFinalFaces()`: 스트리밍 종료 시 최종 면 보정 안전장치
  - 스트림 마지막 프레임의 주사위 면이 서버 결과와 다르면 200ms 보간으로 부드럽게 보정
- `animateRollStreamMode()`: Observer 전용 시작 함수
  - 상태 초기화만 수행 (물리 바디 정적 전환, 스트림 데이터 리셋)
  - 컵 애니메이션/주사위 위치는 모두 스트림에서 결정

#### 삭제된 함수
- `correctDiceFaces()`: Observer의 독립 물리 + 보정 로직 전체 삭제
  - 스트림 방식으로 대체되어 불필요

#### 수정된 렌더 루프
- 물리 시뮬레이션: Observer 스트림 모드에서는 `world.step()` 비활성화
- 메시 동기화: Observer는 스트림 데이터에서 직접 적용 (물리 바디 → 메시 경로 사용 안 함)
- Roller 스트리밍: 매 프레임 `emitPhysicsStream()` 호출 (내부 스로틀링)
- Observer 수신: 매 프레임 `applyLatestStreamData()` 호출
- 정지 감지: Roller만 실행 (Observer는 불필요)

#### 수정된 Watch
- `isRolling` watch: Roller는 `animateRoll()`, Observer는 `animateRollStreamMode()` 호출
- 종료 시: Observer에서 `ensureFinalFaces()` 실행

#### 정리된 코드
- `diceTargetValues` 변수 삭제 (Observer 타겟 기반 보정이 없어져 불필요)
- `animateRoll()` 시그니처에서 `targetValues` 파라미터 제거 (Roller 전용으로 변경)

### 5. `DESIGN.md`
- 6.2 Socket 이벤트 테이블에 `dice:physics-stream` (C→S, S→C) 추가
- 6.3 동기화 전략 전면 재작성 (물리 상태 스트리밍 방식)
- 9.2 턴 진행 시퀀스 다이어그램에 스트리밍 흐름 추가
- 11.2 주사위 결과 처리 섹션: 스트리밍 코드 예시로 교체
- 13.2 네트워크 섹션: 스트리밍 대역폭/최적화 설명 추가
- 16. 설계 결정 테이블: 스트리밍 관련 결정 추가

---

## 새/변경 Socket 이벤트

| 방향 | 이벤트 | 페이로드 | 설명 |
|------|--------|----------|------|
| C→S | `dice:physics-stream` | `PhysicsStreamFrame` | Roller의 물리 상태 프레임 (30Hz, volatile) |
| S→C | `dice:physics-stream` | `PhysicsStreamFrame` | Roller → Observer 릴레이 (서버는 순수 패스스루) |

### PhysicsStreamFrame 구조

```typescript
{
  dice: [
    { p: [x, y, z], q: [x, y, z, w], v: boolean },  // 주사위 0
    { p: [x, y, z], q: [x, y, z, w], v: boolean },  // 주사위 1
    { p: [x, y, z], q: [x, y, z, w], v: boolean },  // 주사위 2
    { p: [x, y, z], q: [x, y, z, w], v: boolean },  // 주사위 3
    { p: [x, y, z], q: [x, y, z, w], v: boolean },  // 주사위 4
  ],
  cup: {
    p: [x, y, z],       // 위치
    r: [x, y, z],       // 회전 (Euler)
    v: boolean,          // 가시성
  }
}
```

- `p`: position (소수점 3자리 반올림)
- `q`: quaternion (소수점 3자리 반올림)
- `r`: rotation Euler (소수점 3자리 반올림)
- `v`: visible
- 프레임 크기: ~300 bytes (JSON)

---

## 안전장치

| 안전장치 | 위치 | 설명 |
|----------|------|------|
| 서버 타임아웃 (15초) | `index.js` | 물리 결과 미도착 시 서버에서 랜덤 생성 |
| 클라이언트 강제 정지 (10초) | `GameScene.vue` | Roller 물리가 안 멈출 경우 강제 정지 후 면 감지 |
| 최종 면 보정 | `GameScene.vue` | Observer: 스트림 종료 후 서버 결과와 면 불일치 시 200ms 보정 |
| 값 검증 | `GameRoom.js` | `setDiceResult`에서 1~6 정수 5개 검증 |
| volatile emit | `useSocket.ts` | 프레임 드롭 허용으로 네트워크 백프레셔 방지 |
| 스트림 스로틀링 (33ms) | `GameScene.vue` | 30Hz로 제한하여 과도한 이벤트 방지 |

---

## Roller vs Observer 비교

| 구분 | Roller (현재 턴) | Observer (다른 플레이어) |
|------|-----------------|----------------------|
| 물리 시뮬레이션 | Cannon-es 로컬 실행 | **비활성화** (world.step 미실행) |
| 메시 업데이트 소스 | 물리 바디 → 메시 | **스트림 데이터 → 메시** |
| 컵 애니메이션 | 로컬 tween 실행 + 스트리밍 | **스트림 데이터에서 직접 적용** |
| 보정(스냅) | 없음 | 종료 시 최종 면 보정 (필요 시만) |
| 시각적 경험 | 자연스러운 물리 | **Roller와 동일한 화면** |
| 타이밍 | 즉시 시작 | ~1-5ms 지연 (LAN, 체감 불가) |
| CPU 부하 | 물리 엔진 + 렌더링 | **렌더링만** (물리 엔진 OFF) |

---

## 네트워크 대역폭 분석 (LAN 환경)

| 항목 | 값 |
|------|-----|
| 프레임 크기 (JSON) | ~300 bytes |
| 전송 빈도 | 30 Hz |
| Roller → Server | ~9 KB/s |
| Server → Observer (1명) | ~9 KB/s |
| Server → Observer (4명, 최대) | ~36 KB/s |
| 시뮬레이션 시간 (평균) | ~3-5초 |
| 1회 굴림당 총 데이터 | ~27-45 KB |

> LAN 환경(100Mbps+)에서 사실상 무시 가능한 대역폭.
> volatile emit으로 네트워크 혼잡 시 프레임 자동 드롭.

---

## 변경 전후 비교 요약

### 변경 전 (Changelog #1)
```
Roller: 자유 물리 → 결과 전송 → [자연스러운 화면]
Observer: 결과 수신 → 독립 물리 + 보정 → [다른 화면]
```

### 변경 후 (Changelog #2)
```
Roller: 자유 물리 + 스트리밍 → 결과 전송 → [자연스러운 화면]
Observer: 스트림 수신 → 직접 적용 → [Roller와 동일한 화면]
```
