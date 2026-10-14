// Shape of one study-guide domain (same shape the LCCA study guide uses).
export type StudySection = { heading: string; body: string };

export type StudyScenario = {
  id: string;
  title: string;
  situation: string;
  question: string;
  discussion: string;
  keyTakeaway: string;
};

export type StudyQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type StudyDomain = {
  id: string;
  number: number;
  title: string;
  /** Remix Icon class, e.g. 'ri-book-open-line' */
  icon: string;
  summary: string;
  sections: StudySection[];
  scenarios: StudyScenario[];
  quiz: StudyQuizQuestion[];
};
