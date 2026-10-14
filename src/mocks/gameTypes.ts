// Shared data shapes for the study games. Each track (LCCA / LCPAA) supplies one GameData.

// Deadline Dash — "how long / how many?" rapid-fire facts.
export type DeadlineItem = {
  id: string;
  /** Prompt ending in a blank-style question, e.g. "A preliminary service plan is due within:" */
  prompt: string;
  /** The correct short answer chip, e.g. "72 hours" */
  answer: string;
  /** Exactly 3 plausible wrong chips, same format as the answer */
  distractors: string[];
  /** Section citation, e.g. "§748.1331" */
  cite: string;
};

// Citation Court — judge how serious a deficiency is.
export type Weight = 'High' | 'Medium-High' | 'Medium' | 'Medium-Low' | 'Low';
export type CitationItem = {
  id: string;
  /** A short situation an inspector finds, written as a violation scenario */
  scenario: string;
  /** The weight the minimum standard assigns to the governing rule */
  weight: Weight;
  /** One sentence on why / what the rule requires */
  why: string;
  cite: string;
};

// Admin Shift — a day-in-the-life decision simulation.
export type Meter = 'safety' | 'compliance' | 'morale' | 'budget';
export type ShiftChoice = {
  text: string;
  /** What happens as a result (1–2 sentences) */
  outcome: string;
  /** Meter changes, each an integer from -3 to +2 */
  effects: Record<Meter, number>;
  /** Exactly one choice per scenario is the one the standards support */
  best?: boolean;
};
export type ShiftScenario = {
  id: string;
  /** Clock label, e.g. "7:15 AM" */
  time: string;
  title: string;
  situation: string;
  /** Exactly 3 choices */
  choices: ShiftChoice[];
  /** The takeaway rule in plain language */
  lesson: string;
  cite: string;
};

export type GameData = {
  deadlines: DeadlineItem[];
  citations: CitationItem[];
  shift: ShiftScenario[];
};
