import { lccaPracticeExams, type PracticeExam } from '@/mocks/lccaExams';
import { lccaDomains } from '@/mocks/lccaContent';
import { lcpaaPracticeExams } from '@/mocks/lcpaaExams';
import { lcpaaDomains } from '@/mocks/lcpaaContent';
import type { StudyDomain } from '@/mocks/studyTypes';
import { lccaGameData } from '@/mocks/lccaGames';
import { lcpaaGameData } from '@/mocks/lcpaaGames';
import type { GameData } from '@/mocks/gameTypes';

export type TrackId = 'lcca' | 'lcpaa';

export type GameQuestion = {
  id: string;
  domain: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Track = {
  id: TrackId;
  /** Short credential name, e.g. "LCCA" */
  short: string;
  /** Full credential name */
  name: string;
  /** Standards chapter label, e.g. "Chapter 748" */
  chapterLabel: string;
  /** What the standards govern, e.g. "General Residential Operations" */
  governs: string;
  /** Role used in the admin simulation, e.g. "GRO administrator" */
  role: string;
  basePath: string;
  exams: PracticeExam[];
  /** Pool of questions used by Compliance Sprint */
  pool: GameQuestion[];
  /** Matches questions that are specifically about this chapter */
  chapterRegex: RegExp;
  gameData: GameData;
};

// Built from the same banks as the practice exams and domain quizzes so games
// stay in sync whenever those are updated. Duplicate questions are dropped.
function buildPool(exams: PracticeExam[], domains: StudyDomain[]): GameQuestion[] {
  const seen = new Set<string>();
  const out: GameQuestion[] = [];
  const add = (q: GameQuestion, fallbackDomain: string) => {
    const key = q.question.trim().toLowerCase();
    if (seen.has(key) || q.options.length < 2) return;
    seen.add(key);
    out.push({ ...q, domain: q.domain || fallbackDomain });
  };
  exams.forEach(exam => exam.questions.forEach(q => add(q, 'General')));
  domains.forEach(d => d.quiz.forEach(q => add({ ...q, domain: d.title }, d.title)));
  return out;
}

export const tracks: Record<TrackId, Track> = {
  lcca: {
    id: 'lcca',
    short: 'LCCA',
    name: 'Licensed Child Care Administrator',
    chapterLabel: 'Chapter 748',
    governs: 'General Residential Operations',
    role: 'GRO administrator',
    basePath: '/lcca',
    exams: lccaPracticeExams,
    pool: buildPool(lccaPracticeExams, lccaDomains),
    chapterRegex: /748|general residential|GRO\b/i,
    gameData: lccaGameData,
  },
  lcpaa: {
    id: 'lcpaa',
    short: 'LCPAA',
    name: 'Licensed Child-Placing Agency Administrator',
    chapterLabel: 'Chapter 749',
    governs: 'Child-Placing Agencies',
    role: 'CPA administrator',
    basePath: '/lcpaa',
    exams: lcpaaPracticeExams,
    pool: buildPool(lcpaaPracticeExams, lcpaaDomains),
    chapterRegex: /749|child-placing|foster/i,
    gameData: lcpaaGameData,
  },
};

export function isTrackId(v: string | undefined): v is TrackId {
  return v === 'lcca' || v === 'lcpaa';
}

// ── Shared helpers for games ────────────────────────────────────────────────
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function readBest(key: string): number {
  try {
    return parseInt(localStorage.getItem(key) || '0', 10) || 0;
  } catch {
    return 0;
  }
}

export function writeBest(key: string, n: number) {
  try {
    localStorage.setItem(key, String(n));
  } catch {
    /* storage unavailable — games still work */
  }
}

export type GameId = 'admin-shift' | 'sprint' | 'deadline-dash' | 'citation-court';

export const bestKey = (track: TrackId, game: GameId) => `${track}-${game}-best`;
