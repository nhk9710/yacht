// Yacht 게임 점수 계산 규칙

const CATEGORIES = [
  'ones', 'twos', 'threes', 'fours', 'fives', 'sixes',
  'choice', 'fourOfAKind', 'fullHouse', 'smallStraight', 'largeStraight', 'yacht'
];

const UPPER_CATEGORIES = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
const LOWER_CATEGORIES = ['choice', 'fourOfAKind', 'fullHouse', 'smallStraight', 'largeStraight', 'yacht'];
const BONUS_THRESHOLD = 63;
const BONUS_SCORE = 35;

function getCounts(dice) {
  const counts = new Array(7).fill(0);
  dice.forEach(d => counts[d]++);
  return counts;
}

function getSum(dice) {
  return dice.reduce((a, b) => a + b, 0);
}

function hasConsecutive(dice, length) {
  const unique = [...new Set(dice)].sort((a, b) => a - b);
  if (unique.length < length) return false;
  for (let i = 0; i <= unique.length - length; i++) {
    if (unique[i + length - 1] - unique[i] === length - 1) return true;
  }
  return false;
}

/**
 * 주어진 주사위와 카테고리에 대한 점수를 계산
 * @param {number[]} dice - 5개의 주사위 값 [1-6]
 * @param {string} category - 점수 카테고리
 * @returns {number} 점수
 */
function calculate(dice, category) {
  const counts = getCounts(dice);
  const sum = getSum(dice);

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
    case 'fullHouse':     return (counts.some(c => c === 3) && counts.some(c => c === 2)) ? sum : 0;
    case 'smallStraight': return hasConsecutive(dice, 4) ? 15 : 0;
    case 'largeStraight': return hasConsecutive(dice, 5) ? 30 : 0;
    case 'yacht':         return counts.some(c => c === 5) ? 50 : 0;
    default: return 0;
  }
}

/**
 * 상단 섹션 보너스 계산
 * @param {Object} scores - ScoreCard 객체
 * @returns {number} 보너스 점수 (0 또는 35)
 */
function calculateBonus(scores) {
  const upperSum = UPPER_CATEGORIES.reduce((sum, cat) => sum + (scores[cat] ?? 0), 0);
  return upperSum >= BONUS_THRESHOLD ? BONUS_SCORE : 0;
}

/**
 * 전체 총점 계산 (보너스 포함)
 * @param {Object} scores - ScoreCard 객체
 * @returns {number} 총점
 */
function calculateTotal(scores) {
  const categorySum = CATEGORIES.reduce((sum, cat) => sum + (scores[cat] ?? 0), 0);
  return categorySum + calculateBonus(scores);
}

/**
 * 모든 카테고리에 대한 예상 점수 계산
 * @param {number[]} dice - 5개의 주사위 값
 * @param {Object} scores - 현재 ScoreCard
 * @returns {Object} 카테고리별 예상 점수 { category: score }
 */
function calculateAllPossible(dice, scores) {
  const possible = {};
  for (const cat of CATEGORIES) {
    if (scores[cat] === null || scores[cat] === undefined) {
      possible[cat] = calculate(dice, cat);
    }
  }
  return possible;
}

/**
 * 빈 ScoreCard 생성
 * @returns {Object} 모든 카테고리가 null인 ScoreCard
 */
function createEmptyScoreCard() {
  const card = {};
  for (const cat of CATEGORIES) {
    card[cat] = null;
  }
  return card;
}

/**
 * 모든 카테고리가 채워졌는지 확인
 * @param {Object} scores - ScoreCard
 * @returns {boolean}
 */
function isScoreCardComplete(scores) {
  return CATEGORIES.every(cat => scores[cat] !== null && scores[cat] !== undefined);
}

export {
  CATEGORIES,
  UPPER_CATEGORIES,
  LOWER_CATEGORIES,
  calculate,
  calculateBonus,
  calculateTotal,
  calculateAllPossible,
  createEmptyScoreCard,
  isScoreCardComplete,
};
