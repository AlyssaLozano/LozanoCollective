import type { PracticeExam } from './lccaExams';
import { lcpaaExamsPartA } from './lcpaaExamsA';
import { lcpaaExamsPartB } from './lcpaaExamsB';

// LCPAA practice exams — built from 26 TAC Chapter 749 (Child-Placing Agencies).
export const lcpaaPracticeExams: PracticeExam[] = [...lcpaaExamsPartA, ...lcpaaExamsPartB].sort((a, b) => a.number - b.number);
