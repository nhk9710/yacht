<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { useGameStore } from '../../stores/gameStore'
import { useSocket } from '../../composables/useSocket'

const store = useGameStore()
const socket = useSocket()
const canvasRef = ref<HTMLCanvasElement | null>(null)

// ========== Three.js & Cannon-es 변수 ==========
let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let world: CANNON.World
let animFrameId: number

// 주사위
const diceMeshes: THREE.Mesh[] = []
const diceBodies: CANNON.Body[] = []
let physicsSettled = false
let correctingDice = false
let rollingStartTime = 0
let resultSent = false // Roller 모드: 결과 전송 완료 여부
let isRollerMode = false // 현재 애니메이션이 Roller 모드인지

// 물리 스트리밍 (Roller → Observer)
let lastStreamEmitTime = 0
const STREAM_INTERVAL = 33 // ~30fps 스로틀

// 컵
let cupGroup: THREE.Group
let cupAnimating = false

// 테이블
let tableBody: CANNON.Body

// 벽 (주사위가 테이블 밖으로 떨어지지 않도록)
const wallBodies: CANNON.Body[] = []

// 재질
let diceMaterial: CANNON.Material
let tableMaterial: CANNON.Material

// ========== 주사위 텍스처 생성 (캔버스 기반) ==========
function createDiceFaceTexture(value: number): THREE.CanvasTexture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // 배경 (흰색, 둥근 모서리)
  ctx.fillStyle = '#f8f8f8'
  ctx.fillRect(0, 0, size, size)

  // 점 위치 정의
  const dotRadius = size * 0.07
  const positions: Record<number, [number, number][]> = {
    1: [[0.5, 0.5]],
    2: [[0.28, 0.28], [0.72, 0.72]],
    3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
    4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
    5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
    6: [[0.28, 0.25], [0.72, 0.25], [0.28, 0.5], [0.72, 0.5], [0.28, 0.75], [0.72, 0.75]],
  }

  ctx.fillStyle = '#1a1a2e'
  for (const [px, py] of positions[value]) {
    ctx.beginPath()
    ctx.arc(px * size, py * size, dotRadius, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// ========== 주사위 면 매핑 ==========
// Three.js BoxGeometry 면 순서: +x, -x, +y, -y, +z, -z
// 표준 주사위: 1 위, 6 아래, 2 앞(+z), 5 뒤(-z), 3 오른(+x), 4 왼(-x)
// Three.js 면 인덱스: 0=+x(3), 1=-x(4), 2=+y(1), 3=-y(6), 4=+z(2), 5=-z(5)
const FACE_MAP = [3, 4, 1, 6, 2, 5] // Three.js 면 인덱스 → 주사위 값

function createDiceMaterials(): THREE.MeshStandardMaterial[] {
  return FACE_MAP.map(value => {
    const texture = createDiceFaceTexture(value)
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.3,
      metalness: 0.0,
    })
  })
}

// ========== 면 법선 방향 (로컬 좌표) ==========
const FACE_NORMALS: Record<number, THREE.Vector3> = {
  1: new THREE.Vector3(0, 1, 0),    // +y
  6: new THREE.Vector3(0, -1, 0),   // -y
  2: new THREE.Vector3(0, 0, 1),    // +z
  5: new THREE.Vector3(0, 0, -1),   // -z
  3: new THREE.Vector3(1, 0, 0),    // +x
  4: new THREE.Vector3(-1, 0, 0),   // -x
}

function getTopFace(quaternion: THREE.Quaternion): number {
  const up = new THREE.Vector3(0, 1, 0)
  let maxDot = -Infinity
  let topFace = 1

  for (const [face, normal] of Object.entries(FACE_NORMALS)) {
    const worldNormal = normal.clone().applyQuaternion(quaternion)
    const dot = worldNormal.dot(up)
    if (dot > maxDot) {
      maxDot = dot
      topFace = parseInt(face)
    }
  }
  return topFace
}

function getQuaternionForFace(targetFace: number): THREE.Quaternion {
  // 목표 면이 위(+Y)를 향하는 쿼터니언 계산
  const quat = new THREE.Quaternion()
  switch (targetFace) {
    case 1: quat.setFromEuler(new THREE.Euler(0, 0, 0)); break           // 기본 (1 위)
    case 6: quat.setFromEuler(new THREE.Euler(Math.PI, 0, 0)); break     // 뒤집기
    case 2: quat.setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)); break  // 앞면 위로
    case 5: quat.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)); break // 뒷면 위로
    case 3: quat.setFromEuler(new THREE.Euler(0, 0, -Math.PI / 2)); break // 오른면 위로
    case 4: quat.setFromEuler(new THREE.Euler(0, 0, Math.PI / 2)); break  // 왼면 위로
  }
  return quat
}

// ========== 씬 초기화 ==========
function initScene() {
  if (!canvasRef.value) return

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: false,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  updateRendererSize()

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#0d0d14')
  scene.fog = new THREE.Fog('#0d0d14', 15, 30)

  // Camera
  camera = new THREE.PerspectiveCamera(45, getAspect(), 0.1, 100)
  camera.position.set(0, 8, 8)
  camera.lookAt(0, 0, 0)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
  dirLight.position.set(5, 10, 5)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 2048
  dirLight.shadow.mapSize.height = 2048
  dirLight.shadow.camera.near = 0.5
  dirLight.shadow.camera.far = 30
  dirLight.shadow.camera.left = -8
  dirLight.shadow.camera.right = 8
  dirLight.shadow.camera.top = 8
  dirLight.shadow.camera.bottom = -8
  scene.add(dirLight)

  const pointLight = new THREE.PointLight(0xffd699, 0.6, 20)
  pointLight.position.set(0, 6, 0)
  scene.add(pointLight)

  // Physics World
  world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -15, 0),
  })
  world.broadphase = new CANNON.SAPBroadphase(world)
  world.solver.iterations = 10
  world.allowSleep = true

  diceMaterial = new CANNON.Material('dice')
  tableMaterial = new CANNON.Material('table')

  world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, tableMaterial, {
    friction: 0.4,
    restitution: 0.3,
  }))
  world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, diceMaterial, {
    friction: 0.3,
    restitution: 0.4,
  }))

  createTable()
  createWalls()
  createDice()
  createCup()
}

// ========== 테이블 생성 ==========
function createTable() {
  // 상판
  const tableGeo = new THREE.BoxGeometry(8, 0.3, 6)
  const tableMat = new THREE.MeshStandardMaterial({
    color: '#1a5c2a',
    roughness: 0.8,
    metalness: 0.0,
  })
  const tableMesh = new THREE.Mesh(tableGeo, tableMat)
  tableMesh.position.y = -0.15
  tableMesh.receiveShadow = true
  scene.add(tableMesh)

  // 테이블 가장자리 (나무 프레임)
  const frameMat = new THREE.MeshStandardMaterial({
    color: '#4a3020',
    roughness: 0.6,
    metalness: 0.1,
  })

  const edgeH = new THREE.BoxGeometry(8.4, 0.4, 0.2)
  const edgeV = new THREE.BoxGeometry(0.2, 0.4, 6.4)

  const edgeFront = new THREE.Mesh(edgeH, frameMat)
  edgeFront.position.set(0, 0, 3.1)
  edgeFront.castShadow = true
  scene.add(edgeFront)

  const edgeBack = new THREE.Mesh(edgeH, frameMat)
  edgeBack.position.set(0, 0, -3.1)
  edgeBack.castShadow = true
  scene.add(edgeBack)

  const edgeLeft = new THREE.Mesh(edgeV, frameMat)
  edgeLeft.position.set(-4.1, 0, 0)
  edgeLeft.castShadow = true
  scene.add(edgeLeft)

  const edgeRight = new THREE.Mesh(edgeV, frameMat)
  edgeRight.position.set(4.1, 0, 0)
  edgeRight.castShadow = true
  scene.add(edgeRight)

  // 물리: 테이블 바디
  tableBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    material: tableMaterial,
  })
  tableBody.addShape(
    new CANNON.Box(new CANNON.Vec3(4, 0.15, 3)),
    new CANNON.Vec3(0, -0.15, 0)
  )
  world.addBody(tableBody)
}

// ========== 벽 생성 (보이지 않는 물리 벽) ==========
function createWalls() {
  const wallShape = new CANNON.Box(new CANNON.Vec3(4, 2, 0.1))
  const wallMat = tableMaterial

  const positions = [
    new CANNON.Vec3(0, 1, 3),    // 앞
    new CANNON.Vec3(0, 1, -3),   // 뒤
  ]
  const wallShapeSide = new CANNON.Box(new CANNON.Vec3(0.1, 2, 3))
  const sidePositions = [
    new CANNON.Vec3(4, 1, 0),    // 오른쪽
    new CANNON.Vec3(-4, 1, 0),   // 왼쪽
  ]

  for (const pos of positions) {
    const body = new CANNON.Body({ type: CANNON.Body.STATIC, material: wallMat })
    body.addShape(wallShape)
    body.position.copy(pos)
    world.addBody(body)
    wallBodies.push(body)
  }
  for (const pos of sidePositions) {
    const body = new CANNON.Body({ type: CANNON.Body.STATIC, material: wallMat })
    body.addShape(wallShapeSide)
    body.position.copy(pos)
    world.addBody(body)
    wallBodies.push(body)
  }
}

// ========== 주사위 생성 ==========
const DICE_SIZE = 0.5
const DICE_HALF = DICE_SIZE / 2

function createDice() {
  for (let i = 0; i < 5; i++) {
    // Three.js 메시
    const geo = new THREE.BoxGeometry(DICE_SIZE, DICE_SIZE, DICE_SIZE)
    // 모서리 깎기 효과를 위한 bevel은 BoxGeometry로 직접 안 됨 → 대신 살짝 작게
    const materials = createDiceMaterials()
    const mesh = new THREE.Mesh(geo, materials)
    mesh.castShadow = true
    mesh.receiveShadow = true
    // 초기 위치: 화면 밖
    mesh.position.set(-10, -10, -10)
    mesh.visible = false
    scene.add(mesh)
    diceMeshes.push(mesh)

    // Cannon-es 바디
    const body = new CANNON.Body({
      mass: 0.3,
      material: diceMaterial,
      shape: new CANNON.Box(new CANNON.Vec3(DICE_HALF, DICE_HALF, DICE_HALF)),
      allowSleep: true,
      sleepSpeedLimit: 0.1,
      sleepTimeLimit: 1.0,
    })
    body.position.set(-10, -10, -10)
    world.addBody(body)
    diceBodies.push(body)
  }
}

// ========== 컵 생성 ==========
function createCup() {
  cupGroup = new THREE.Group()

  const cupRadius = 1.0
  const cupHeight = 1.8
  const cupThickness = 0.08

  // 컵 외벽 (원통)
  const outerGeo = new THREE.CylinderGeometry(cupRadius, cupRadius * 0.9, cupHeight, 32, 1, true)
  const cupMat = new THREE.MeshStandardMaterial({
    color: '#8B4513',
    roughness: 0.7,
    metalness: 0.1,
    side: THREE.DoubleSide,
  })
  const outer = new THREE.Mesh(outerGeo, cupMat)
  outer.castShadow = true
  cupGroup.add(outer)

  // 컵 바닥
  const bottomGeo = new THREE.CircleGeometry(cupRadius * 0.9, 32)
  const bottom = new THREE.Mesh(bottomGeo, cupMat)
  bottom.rotation.x = -Math.PI / 2
  bottom.position.y = -cupHeight / 2
  cupGroup.add(bottom)

  // 컵 내벽 (어두운 색)
  const innerGeo = new THREE.CylinderGeometry(
    cupRadius - cupThickness, cupRadius * 0.9 - cupThickness,
    cupHeight - 0.05, 32, 1, true
  )
  const innerMat = new THREE.MeshStandardMaterial({
    color: '#3a1f0d',
    roughness: 0.9,
    side: THREE.BackSide,
  })
  const inner = new THREE.Mesh(innerGeo, innerMat)
  cupGroup.add(inner)

  // 테이블 위 오른쪽에 배치
  cupGroup.position.set(3, cupHeight / 2 + 0.01, 0)
  cupGroup.visible = false
  scene.add(cupGroup)
}

// ========== 주사위 굴리기 애니메이션 (Roller 전용) ==========
// Roller: 자유 물리 시뮬레이션 + 상태 스트리밍
// Observer는 animateRollStreamMode()를 대신 사용
async function animateRoll() {
  if (cupAnimating) return

  cupAnimating = true
  physicsSettled = false
  correctingDice = false
  resultSent = false
  isRollerMode = true
  rollingStartTime = performance.now()
  lastStreamEmitTime = 0 // 스트리밍 타이머 리셋

  // kept된 주사위는 옆으로 정렬
  const keptIndices: number[] = []
  const rollingIndices: number[] = []

  for (let i = 0; i < 5; i++) {
    if (store.turnState.kept[i]) {
      keptIndices.push(i)
    } else {
      rollingIndices.push(i)
    }
  }

  // kept 주사위를 테이블 앞쪽에 정렬
  keptIndices.forEach((idx, i) => {
    const x = -2 + i * 0.8
    const mesh = diceMeshes[idx]
    const body = diceBodies[idx]

    body.type = CANNON.Body.STATIC
    body.position.set(x, DICE_HALF + 0.01, 2.0)
    body.velocity.setZero()
    body.angularVelocity.setZero()

    mesh.visible = true
    mesh.position.set(x, DICE_HALF + 0.01, 2.0)

    // kept 주사위: 기존 값이 위로 향하도록
    const keptValue = store.turnState.dice[idx]
    if (keptValue > 0) {
      const targetQuat = getQuaternionForFace(keptValue)
      mesh.quaternion.copy(targetQuat)
      body.quaternion.set(targetQuat.x, targetQuat.y, targetQuat.z, targetQuat.w)
    }
  })

  // 컵 애니메이션 + 주사위 던지기
  cupGroup.visible = true
  cupGroup.position.set(0, 1.5, -1)
  cupGroup.rotation.set(0, 0, 0)

  // 컵 흔들기
  await animateCupShake()

  // 컵 기울이기
  await animateCupTilt()

  // 주사위 발사
  for (let i = 0; i < rollingIndices.length; i++) {
    const idx = rollingIndices[i]
    const body = diceBodies[idx]
    const mesh = diceMeshes[idx]

    body.type = CANNON.Body.DYNAMIC
    body.wakeUp()

    // 컵 위치 근처에서 시작
    const spreadX = (Math.random() - 0.5) * 1.5
    const spreadZ = (Math.random() - 0.5) * 0.5
    body.position.set(spreadX, 3 + Math.random() * 1, -0.5 + spreadZ)

    // 랜덤 초기 회전
    body.quaternion.setFromEuler(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    )

    // 랜덤 힘
    body.velocity.set(
      (Math.random() - 0.5) * 5,
      -2 + Math.random() * 2,
      (Math.random() - 0.5) * 4
    )
    body.angularVelocity.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    )

    mesh.visible = true
  }

  // 컵 치우기
  await animateCupHide()
  cupAnimating = false
}

function animateCupShake(): Promise<void> {
  return new Promise(resolve => {
    const start = performance.now()
    const duration = 500

    function shake() {
      const elapsed = performance.now() - start
      const t = Math.min(elapsed / duration, 1)

      // 좌우 흔들기
      const shakeAngle = Math.sin(t * Math.PI * 6) * 0.15 * (1 - t)
      cupGroup.rotation.z = shakeAngle
      cupGroup.position.y = 1.5 + Math.abs(Math.sin(t * Math.PI * 3)) * 0.2

      if (t < 1) {
        requestAnimationFrame(shake)
      } else {
        resolve()
      }
    }
    shake()
  })
}

function animateCupTilt(): Promise<void> {
  return new Promise(resolve => {
    const start = performance.now()
    const duration = 400

    function tilt() {
      const elapsed = performance.now() - start
      const t = Math.min(elapsed / duration, 1)
      const ease = t * t * (3 - 2 * t) // smoothstep

      cupGroup.rotation.x = -ease * 1.8
      cupGroup.position.y = 1.5 + ease * 2
      cupGroup.position.z = -1 + ease * 1

      if (t < 1) {
        requestAnimationFrame(tilt)
      } else {
        resolve()
      }
    }
    tilt()
  })
}

function animateCupHide(): Promise<void> {
  return new Promise(resolve => {
    const start = performance.now()
    const duration = 300

    function hide() {
      const elapsed = performance.now() - start
      const t = Math.min(elapsed / duration, 1)

      cupGroup.position.x = 5 * t
      cupGroup.position.y = 3.5 - t * 2

      if (t < 1) {
        requestAnimationFrame(hide)
      } else {
        cupGroup.visible = false
        resolve()
      }
    }
    hide()
  })
}

// ========== 주사위 정지 감지 ==========
function checkDiceSettled(): boolean {
  const threshold = 0.05
  for (let i = 0; i < 5; i++) {
    if (store.turnState.kept[i]) continue
    const body = diceBodies[i]
    if (body.type === CANNON.Body.STATIC) continue
    const v = body.velocity
    const w = body.angularVelocity
    if (v.length() > threshold || w.length() > threshold) return false
  }
  return true
}

// ========== Roller 모드: 물리 상태 스트리밍 ==========
function emitPhysicsStream() {
  const now = performance.now()
  if (now - lastStreamEmitTime < STREAM_INTERVAL) return
  lastStreamEmitTime = now

  const frame = {
    dice: diceMeshes.map((mesh) => ({
      p: [
        Math.round(mesh.position.x * 1000) / 1000,
        Math.round(mesh.position.y * 1000) / 1000,
        Math.round(mesh.position.z * 1000) / 1000,
      ],
      q: [
        Math.round(mesh.quaternion.x * 1000) / 1000,
        Math.round(mesh.quaternion.y * 1000) / 1000,
        Math.round(mesh.quaternion.z * 1000) / 1000,
        Math.round(mesh.quaternion.w * 1000) / 1000,
      ],
      v: mesh.visible,
    })),
    cup: {
      p: [
        Math.round(cupGroup.position.x * 1000) / 1000,
        Math.round(cupGroup.position.y * 1000) / 1000,
        Math.round(cupGroup.position.z * 1000) / 1000,
      ],
      r: [
        Math.round(cupGroup.rotation.x * 1000) / 1000,
        Math.round(cupGroup.rotation.y * 1000) / 1000,
        Math.round(cupGroup.rotation.z * 1000) / 1000,
      ],
      v: cupGroup.visible,
    },
  }

  socket.sendPhysicsStream(frame)
}

// ========== Observer 모드: 스트림 데이터 적용 ==========
function applyLatestStreamData() {
  const frame = store.physicsStreamData
  if (!frame) return

  // 주사위 위치/회전 적용
  if (frame.dice) {
    for (let i = 0; i < 5; i++) {
      const d = frame.dice[i]
      if (!d) continue

      if (d.v) {
        diceMeshes[i].visible = true
        diceMeshes[i].position.set(d.p[0], d.p[1], d.p[2])
        diceMeshes[i].quaternion.set(d.q[0], d.q[1], d.q[2], d.q[3])
        // 물리 바디도 동기화 (다른 시스템에서 참조할 수 있으므로)
        diceBodies[i].position.set(d.p[0], d.p[1], d.p[2])
        diceBodies[i].quaternion.set(d.q[0], d.q[1], d.q[2], d.q[3])
      }
    }
  }

  // 컵 위치/회전 적용
  if (frame.cup) {
    cupGroup.visible = frame.cup.v
    if (frame.cup.v) {
      cupGroup.position.set(frame.cup.p[0], frame.cup.p[1], frame.cup.p[2])
      cupGroup.rotation.set(frame.cup.r[0], frame.cup.r[1], frame.cup.r[2])
    }
  }
}

// ========== Observer 모드: 스트리밍 종료 시 최종 면 보정 ==========
function ensureFinalFaces() {
  const finalDice = store.turnState.dice
  for (let i = 0; i < 5; i++) {
    if (finalDice[i] <= 0) continue
    const mesh = diceMeshes[i]
    if (!mesh.visible) continue

    const currentFace = getTopFace(mesh.quaternion)
    if (currentFace !== finalDice[i]) {
      // 최종 값으로 부드럽게 보정
      const targetQuat = getQuaternionForFace(finalDice[i])
      const startQuat = mesh.quaternion.clone()
      const startTime = performance.now()
      const correctionDuration = 200

      function correctStep() {
        const elapsed = performance.now() - startTime
        const t = Math.min(elapsed / correctionDuration, 1)
        const ease = t * t * (3 - 2 * t)

        mesh.quaternion.slerpQuaternions(startQuat, targetQuat, ease)
        diceBodies[i].quaternion.set(
          mesh.quaternion.x, mesh.quaternion.y,
          mesh.quaternion.z, mesh.quaternion.w
        )

        if (t < 1) {
          requestAnimationFrame(correctStep)
        }
      }
      correctStep()
    }

    // 물리 바디 정지
    diceBodies[i].type = CANNON.Body.STATIC
    diceBodies[i].velocity.setZero()
    diceBodies[i].angularVelocity.setZero()
  }
}

// ========== Observer 모드: 스트림 모드 애니메이션 시작 ==========
function animateRollStreamMode() {
  // 스트림 모드: 컵 + 주사위 위치는 모두 Roller의 스트림 데이터로 결정
  // 로컬에서는 상태 초기화만 수행
  physicsSettled = false
  correctingDice = false
  resultSent = false
  isRollerMode = false
  rollingStartTime = performance.now()

  // 이전 스트림 데이터 초기화
  store.physicsStreamData = null
  // 주사위 물리 바디 정적으로 전환 (Observer는 물리 시뮬레이션 불필요)
  for (let i = 0; i < 5; i++) {
    diceBodies[i].type = CANNON.Body.STATIC
    diceBodies[i].velocity.setZero()
    diceBodies[i].angularVelocity.setZero()
  }
}

// ========== Roller 모드: 물리 결과 감지 & 서버 전송 ==========
function onRollerDiceSettled() {
  if (resultSent) return
  resultSent = true

  // 각 주사위의 윗면 값 읽기
  const values: number[] = []
  for (let i = 0; i < 5; i++) {
    if (store.turnState.kept[i]) {
      // kept 주사위는 이전 값 유지 (서버에서도 무시하지만 일관성 위해)
      values.push(store.turnState.dice[i] || getTopFace(diceMeshes[i].quaternion))
    } else {
      values.push(getTopFace(diceMeshes[i].quaternion))
    }
  }

  // 주사위 물리 정지
  for (let i = 0; i < 5; i++) {
    if (!store.turnState.kept[i]) {
      diceBodies[i].type = CANNON.Body.STATIC
      diceBodies[i].velocity.setZero()
      diceBodies[i].angularVelocity.setZero()
    }
  }

  console.log('[Roller] 물리 결과 전송:', values)

  // 서버로 물리 시뮬레이션 결과 전송
  socket.submitDiceResult(values)
  // isRolling은 dice:rolled 수신 시 store에서 해제됨
}

// ========== 유지된 주사위 하이라이트 ==========
function updateKeptVisuals() {
  for (let i = 0; i < 5; i++) {
    const mesh = diceMeshes[i]
    if (!mesh.visible) continue

    const materials = mesh.material as THREE.MeshStandardMaterial[]
    const isKept = store.turnState.kept[i]

    materials.forEach(mat => {
      mat.emissive = isKept
        ? new THREE.Color('#2244aa')
        : new THREE.Color('#000000')
      mat.emissiveIntensity = isKept ? 0.3 : 0
    })
  }
}

// ========== 렌더 루프 ==========
function animate() {
  animFrameId = requestAnimationFrame(animate)

  const isObserverStreaming = store.isRolling && !store.isMyRolling

  // ===== 물리 시뮬레이션 (Observer 스트림 모드에서는 비활성화) =====
  if (world && !isObserverStreaming) {
    world.step(1 / 60)
  }

  // ===== Roller/Idle: 물리 바디 → 메시 동기화 =====
  if (!isObserverStreaming) {
    for (let i = 0; i < 5; i++) {
      if (!diceMeshes[i].visible) continue
      if (diceBodies[i].type === CANNON.Body.DYNAMIC) {
        diceMeshes[i].position.copy(diceBodies[i].position as any)
        diceMeshes[i].quaternion.copy(diceBodies[i].quaternion as any)
      }
    }
  }

  // ===== Roller: 물리 상태 스트리밍 (컵 애니메이션 포함) =====
  if (store.isRolling && store.isMyRolling) {
    emitPhysicsStream()
  }

  // ===== Observer: 스트림 데이터 적용 =====
  if (isObserverStreaming) {
    applyLatestStreamData()
  }

  // ===== Roller: 주사위 정지 감지 & 결과 전송 =====
  if (store.isRolling && store.isMyRolling && !cupAnimating && !resultSent) {
    const elapsed = performance.now() - rollingStartTime

    if (elapsed > 1500 && checkDiceSettled()) {
      onRollerDiceSettled()
    }
    // 안전장치: 10초 후 강제 정지 & 결과 전송
    if (elapsed > 10000) {
      for (let i = 0; i < 5; i++) {
        if (!store.turnState.kept[i]) {
          diceBodies[i].velocity.setZero()
          diceBodies[i].angularVelocity.setZero()
        }
      }
      onRollerDiceSettled()
    }
  }

  // 유지 하이라이트 업데이트
  updateKeptVisuals()

  // 카메라 살짝 흔들림 (생동감)
  if (camera) {
    const time = performance.now() * 0.0001
    camera.position.x = Math.sin(time) * 0.1
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// ========== 리사이즈 ==========
function getAspect() {
  return canvasRef.value
    ? canvasRef.value.clientWidth / canvasRef.value.clientHeight
    : 16 / 9
}

function updateRendererSize() {
  if (!canvasRef.value || !renderer) return
  const w = canvasRef.value.clientWidth
  const h = canvasRef.value.clientHeight
  renderer.setSize(w, h, false)
  if (camera) {
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
}

let resizeObserver: ResizeObserver | null = null

// ========== 주사위 클릭 (유지 토글) ==========
function onCanvasClick(event: MouseEvent) {
  if (!canvasRef.value || !camera || !store.isMyTurn) return
  if (store.turnState.rollCount === 0 || store.turnState.rollCount >= 3) return
  if (store.isRolling) return

  const rect = canvasRef.value.getBoundingClientRect()
  const mouse = new THREE.Vector2(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  )

  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(mouse, camera)

  const intersects = raycaster.intersectObjects(diceMeshes)
  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object
    const index = diceMeshes.indexOf(clickedMesh as THREE.Mesh)
    if (index >= 0) {
      store.toggleKeep(index)
    }
  }
}

// ========== Watch: 주사위 굴림 이벤트 ==========
watch(
  () => store.isRolling,
  (rolling, prevRolling) => {
    if (rolling && !prevRolling) {
      // ===== 시작 =====
      if (store.isMyRolling) {
        // Roller: 자유 물리 시뮬레이션 + 스트리밍
        animateRoll()
      } else {
        // Observer: 스트림 수신 모드 (Roller의 물리 상태를 그대로 재생)
        animateRollStreamMode()
      }
    } else if (!rolling && prevRolling) {
      // ===== 종료 =====
      if (!store.isMyRolling) {
        // Observer: 최종 면 보정 (스트림 마지막 프레임이 정확하지 않을 경우 안전장치)
        ensureFinalFaces()
      }
    }
  }
)

// ========== 첫 굴림 시 주사위 보이기 ==========
watch(
  () => store.turnState.rollCount,
  (count) => {
    if (count === 0) {
      // 새 턴: 주사위 숨기기
      diceMeshes.forEach(m => { m.visible = false })
    }
  }
)

// ========== Lifecycle ==========
onMounted(() => {
  initScene()
  animate()

  resizeObserver = new ResizeObserver(() => {
    updateRendererSize()
  })
  if (canvasRef.value) {
    resizeObserver.observe(canvasRef.value.parentElement!)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animFrameId)
  resizeObserver?.disconnect()
  renderer?.dispose()
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="game-canvas"
    @click="onCanvasClick"
  />
</template>

<style scoped>
.game-canvas {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
}
</style>
