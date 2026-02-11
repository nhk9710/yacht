# Changelog #1: 주사위 동기화 방식 변경

## 날짜
2026-02-11

## 변경 사유
기존 방식에서는 서버가 주사위 결과를 먼저 결정하고, 클라이언트는 물리 시뮬레이션 후 해당 값으로 **회전 보정(스냅)**을 수행했다.
이로 인해 굴리기를 실행한 본인 화면에서 주사위가 멈춘 뒤 값이 갑자기 바뀌는 현상이 발생하여, 사용자가 결과 조작으로 오해할 수 있었다.

## 변경 방향
**클라이언트 물리 권위(Client-Authoritative Physics)** 방식으로 전환.
- Roller(현재 턴 플레이어): 자유 물리 시뮬레이션 → 결과를 서버에 전송 → **보정 없음**
- Observer(다른 플레이어): 서버에서 받은 결과값 기반 물리 + 보정 (기존 방식 유지, 본인 차례가 아니므로 인지 어려움)

---

## 변경 전 흐름

```
Client → dice:roll → Server
Server: 난수 생성 [3,5,2,6,1]
Server → ALL: dice:rolled { dice: [3,5,2,6,1] }
모든 Client: 물리 시뮬레이션 → 정지 → 서버 값과 다르면 회전 보정(스냅)
```

**문제**: Roller 화면에서 주사위가 4로 멈췄는데 갑자기 3으로 바뀌는 등의 시각적 불일치 발생

## 변경 후 흐름

```
Roller → dice:roll → Server
Server: rollCount 증가만, 값 생성 안 함
Server → ALL: dice:rolling { playerId, rollCount, kept }

Roller: 자유 물리 시뮬레이션 실행
Observer: 결과 대기

Roller: 주사위 정지 → 면 감지 [3,5,2,6,1]
Roller → dice:result { values: [3,5,2,6,1] } → Server
Server: 값 저장
Server → ALL: dice:rolled { dice: [3,5,2,6,1], rollCount, kept }

Roller: isRolling 해제 (보정 없음, 물리 결과 = 최종 결과)
Observer: 결과값으로 물리 애니메이션 + 보정 시작
```

---

## 수정 파일 목록 (6개)

### 1. `server/src/GameRoom.js`
- `rollDice()` 함수를 `startRoll()` + `setDiceResult(values)` 2단계로 분리
- `startRoll()`: rollCount 증가만 수행, 주사위 값 생성하지 않음
- `setDiceResult(values)`: 클라이언트 물리 결과를 검증 후 저장 (1~6 정수, 5개)
- `waitingForResult` 플래그 추가 (굴림 시작~결과 도착 사이 상태 관리)
- `resetTurn()`에서 타임아웃/플래그 초기화

### 2. `server/src/index.js`
- `dice:roll` 핸들러: `room.startRoll()` 호출 → `dice:rolling` 브로드캐스트 (값 없이)
- `dice:result` 핸들러 신규 추가: `room.setDiceResult()` 호출 → `dice:rolled` 브로드캐스트
- 15초 타임아웃 안전장치: 물리 결과 미도착 시 서버에서 랜덤 값 생성하여 대체

### 3. `client/src/stores/gameStore.ts`
- `rollingPlayerId` ref 추가 (현재 굴리기를 시작한 플레이어 ID)
- `isMyRolling` computed 추가 (내가 Roller인지 여부)
- `startRolling()` 액션 추가: Roller만 즉시 `isRolling = true` 설정
- `updateDiceRolled()` 수정: Roller → `isRolling = false`, Observer → `isRolling = true`
- `reset()`에서 `rollingPlayerId` 초기화

### 4. `client/src/composables/useSocket.ts`
- `dice:rolling` 이벤트 핸들러 추가 → `store.startRolling()` 호출
- `submitDiceResult(values)` 함수 추가 → `dice:result` 이벤트 emit

### 5. `client/src/components/three/GameScene.vue`
- `resultSent`, `isRollerMode` 플래그 추가
- `animateRoll(targetValues: number[] | null)` 시그니처 변경
  - `null`: Roller 모드 (자유 물리, 타겟 없음)
  - `number[]`: Observer 모드 (타겟 기반 + 보정)
- `onRollerDiceSettled()` 함수 추가: 면 감지 → `socket.submitDiceResult()` 호출
- 렌더 루프 분기 처리:
  - Roller: 정지 감지 → `onRollerDiceSettled()` (10초 강제 타임아웃)
  - Observer: 정지 감지 → `correctDiceFaces()` (5초 강제 타임아웃, 기존 로직)
- `watch(isRolling)` 수정: `isMyRolling`에 따라 `animateRoll(null)` vs `animateRoll(dice)`

### 6. `DESIGN.md`
- 6.3 동기화 전략 섹션 전면 재작성 (클라이언트 물리 권위 방식)
- Socket 이벤트 테이블에 `dice:result`(C→S), `dice:rolling`(S→C) 추가
- 9.2 턴 진행 시퀀스 다이어그램 업데이트
- 11.2 주사위 결과 처리 섹션: Roller/Observer 이중 모드 설명
- 16. 설계 결정 테이블 업데이트

---

## 새 Socket 이벤트

| 방향 | 이벤트 | 페이로드 | 설명 |
|------|--------|----------|------|
| C→S | `dice:result` | `{ values: number[] }` | Roller의 물리 시뮬레이션 결과 전송 |
| S→C | `dice:rolling` | `{ playerId, rollCount, kept }` | 굴림 시작 알림 (값 없음) |

## 안전장치

| 안전장치 | 위치 | 설명 |
|----------|------|------|
| 서버 타임아웃 (15초) | `index.js` | 물리 결과 미도착 시 서버에서 랜덤 생성 |
| 클라이언트 강제 정지 (10초) | `GameScene.vue` | Roller 물리가 안 멈출 경우 강제 정지 후 면 감지 |
| Observer 강제 보정 (5초) | `GameScene.vue` | Observer 물리가 안 멈출 경우 강제 보정 |
| 값 검증 | `GameRoom.js` | `setDiceResult`에서 1~6 정수 5개 검증 |

---

## Roller vs Observer 비교

| 구분 | Roller (현재 턴) | Observer (다른 플레이어) |
|------|-----------------|----------------------|
| 물리 시뮬레이션 | 자유 물리 (타겟 없음) | 타겟 기반 물리 |
| 보정(스냅) | **없음** | 있음 (기존과 동일) |
| 시각적 경험 | 주사위가 자연스럽게 멈추고 그 값이 결과 | 다른 사람 차례라 보정이 눈에 안 띔 |
| 타이밍 | 즉시 시작 (dice:rolling 수신 시) | dice:rolled 수신 시 시작 (~3초 지연) |
