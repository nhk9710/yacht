// ========== Score 관련 ==========

export type ScoreCategory =
  | 'ones' | 'twos' | 'threes' | 'fours' | 'fives' | 'sixes'
  | 'choice' | 'fourOfAKind' | 'fullHouse'
  | 'smallStraight' | 'largeStraight' | 'yacht';

export const UPPER_CATEGORIES: ScoreCategory[] = [
  'ones', 'twos', 'threes', 'fours', 'fives', 'sixes',
];

export const LOWER_CATEGORIES: ScoreCategory[] = [
  'choice', 'fourOfAKind', 'fullHouse',
  'smallStraight', 'largeStraight', 'yacht',
];

export const ALL_CATEGORIES: ScoreCategory[] = [...UPPER_CATEGORIES, ...LOWER_CATEGORIES];

export const CATEGORY_LABELS: Record<ScoreCategory, string> = {
  ones: 'Ones (1)',
  twos: 'Twos (2)',
  threes: 'Threes (3)',
  fours: 'Fours (4)',
  fives: 'Fives (5)',
  sixes: 'Sixes (6)',
  choice: 'Choice',
  fourOfAKind: 'Four of a Kind',
  fullHouse: 'Full House',
  smallStraight: 'Small Straight',
  largeStraight: 'Large Straight',
  yacht: 'Yacht!',
};

export type ScoreCard = Record<ScoreCategory, number | null>;

// ========== Player 관련 ==========

export interface PlayerInfo {
  id: string;
  name: string;
  color: string;
  isHost: boolean;
  isConnected: boolean;
  usedCategories: Record<string, boolean>;
}

// ========== Game State ==========

export type GamePhase = 'waiting' | 'playing' | 'finished';

export interface TurnState {
  rollCount: number;
  dice: number[];
  kept: boolean[];
}

export interface RoomState {
  phase: GamePhase;
  players: PlayerInfo[];
  currentPlayerIndex: number;
  currentRound: number;
  turnState: TurnState;
}

export interface ScoreCardData {
  scores: ScoreCard;
  bonus: number;
  total: number;
}

export interface Ranking {
  rank: number;
  playerId: string;
  name: string;
  color: string;
  scores: ScoreCard;
  upperBonus: number;
  totalScore: number;
}
