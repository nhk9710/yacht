# Changelog #5: Critical 버그 수정 — 턴 교착, 재접속, 호스트 유실 + 테스트 인프라 도입

## 날짜
2026-07-29

## 변경 사유
코드 리뷰에서 발견된 Critical 버그 3건 수정:

1. **턴 교착** — 끊긴 플레이어에게 턴이 넘어가면 0점 처리만 되고 턴이 멈춰 게임이 영구 정지
2. **재접속 불가** — `reconnectPlayer` 등 재접속 코드가 소켓 이벤트에 연결돼 있지 않아 새로고침 = 영구 탈락
3. **호스트 유실** — 게임 중 호스트 이탈 시 호스트 이양이 없어 게임 종료 후 아무도 재시작 불가

TDD로 진행: 실패 테스트 작성 → 수정 → 통과 확인. 테스트 인프라(`node --test`) 신규 도입.

---

## 수정 파일

### 1. `server/src/GameRoom.js` — 게임 로직 수정

- **`advanceTurn()` 재작성**: 끊긴 플레이어를 만나면 0점 처리 후 **계속 다음 플레이어를 탐색**.
  스킵 과정에서 전원 점수판이 완료되면 `phase = 'finished'`로 전환하고 `true` 반환.
- **`selectCategory()`**: `advanceTurn()`이 게임 종료를 반환하면 `gameFinished: true` + 순위 반환.
- **`removePlayer()`**: 게임 중 호스트가 이탈하면 접속 중인 첫 플레이어에게 호스트 이양.
- **`reconnectPlayer()`**: 접속 중인 플레이어 id로는 재접속 불가(탈취 방지). 미사용 `disconnectTimers` 제거.
- **`restart()`**: 끊긴 유령 플레이어 정리 + 호스트 부재 시 재지정.
- 미사용 상수 `DISCONNECT_TIMEOUT`, `TOTAL_ROUNDS` 제거.

### 2. `server/src/app.js` (신규) + `server/src/index.js` — 서버 구조 분리

- 테스트에서 임의 포트로 서버를 띄울 수 있도록 `createGameServer()`를 `app.js`로 분리.
  `index.js`는 listen + 부팅 배너만 담당하는 엔트리로 축소. 동작 변화 없음.
- **`room:rejoin` 이벤트 신규**: 방 코드 + 이전 플레이어 id로 재접속.
  성공 시 `room:rejoined`(방 상태) + `score:card` 재전송, 종료된 게임이면 `game:finished`도 전송.
  실패 시 `room:rejoin:error`.
- **disconnect 핸들러**: `advanceTurn()`이 게임 종료를 반환하면 `turn:begin` 대신
  `game:finished`를 브로드캐스트 (마지막 미완료 플레이어가 이탈한 경우).

### 3. `client/src/composables/useSocket.ts` — 세션 저장 + 자동 재접속

- 방 생성/참가 성공 시 `sessionStorage`(탭 단위)에 `{code, playerId}` 저장.
- `connect` 시 세션이 있고 소켓 id가 바뀌었으면 자동으로 `room:rejoin` 전송
  → **새로고침과 네트워크 순단(자동 재연결) 모두 같은 경로로 복귀**.
- `room:rejoined` 수신 시 상태 복원 + 세션 갱신, `room:rejoin:error` 시 세션 폐기 + 로비로.
- `connect()` 가드를 `socket?.connected` → `socket` 존재 여부로 변경 (연결 중 중복 소켓 생성 방지).

### 4. `client/src/App.vue` — 부팅 시 자동 연결

- 마운트 시 세션이 남아 있으면 `socket.connect()` 호출 (connect 핸들러가 rejoin 처리).

### 5. 테스트 (신규)

- `server/test/GameRoom.test.js` — 유닛 7건: 턴 스킵/게임 종료, 호스트 이양/재시작 정리, 재접속 성공/탈취 방지
- `server/test/socket.test.js` — 통합 3건 (실제 socket.io 클라이언트): 재접속 상태 복원, 재접속 에러, 이탈로 인한 game:finished 브로드캐스트
- `server/package.json`에 `npm test` 스크립트(`node --test test/`), devDependency `socket.io-client` 추가

---

## 알려진 한계 (의도적 스코프 제외)

- 턴이 도착하는 순간 끊겨 있으면 즉시 0점 처리됨 — 유예 시간(grace period) 없음.
  재접속은 자기 턴이 오기 전에 해야 점수 보존. 유예 타이머는 추후 업데이트 후보.
- 대기실(waiting)에서의 새로고침은 재접속 대상 아님 (방 코드로 다시 참가하면 됨).

## 검증
- `npm test` (server): **10/10 통과**
- 서버 기동 스모크: 정적 서빙 200, `/api/player-count` 정상 응답
- 클라이언트 `vite build` 성공 (vue-tsc 기존 GameScene 타이핑 이슈 1건 외 클린)
