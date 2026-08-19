export type CountryId = 'sa' | 'ae' | 'eg' | 'kw' | 'qa' | 'jo' | 'ma' | 'dz' | 'om' | 'tn' | 'iq' | 'bh' | 'lb' | 'ps' | 'sy' | 'ye' | 'sd' | 'ly' | 'mr' | 'so' | 'dj' | 'km' | 'us' | 'gb' | 'ca' | 'au';

export interface CountryInfo {
  id: CountryId;
  name: string;
  authority: string;
  code: string;
  flag: string;
  totalOfficialQuestions: number;
  passingScorePercentage: number;
  timeLimitMinutes: number;
  description: string;
  popularSchool: string;
  seo?: {
    en: { keywords: string; description: string };
    ar: { keywords: string; description: string };
  };
}

export type QuestionCategory = 'signs' | 'priority' | 'safety' | 'violations' | 'general';

export interface QuestionOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface Question {
  id: string;
  countryId?: CountryId | 'all';
  category: QuestionCategory;
  categoryName: string;
  categoryNameEn?: string;
  questionText: string;
  questionTextEn?: string;
  options: QuestionOption[];
  optionsEn?: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  explanationEn?: string;
  signId?: string; // Links to SVG sign if applicable
  diagramType?: 'intersection_1' | 'roundabout_1' | 'overtaking_1' | 'parking_1';
  difficulty: 'easy' | 'medium' | 'hard';
  ruleReference?: string;
  ruleReferenceEn?: string;
}

export type SignCategory = 'warning' | 'prohibitory' | 'mandatory' | 'guide' | 'priority' | 'ground';

export interface TrafficSign {
  id: string;
  code: string;
  name: string;
  nameEn?: string;
  category: SignCategory;
  categoryName: string;
  categoryNameEn?: string;
  description: string;
  descriptionEn?: string;
  meaning: string;
  meaningEn?: string;
  actionRequired: string;
  actionRequiredEn?: string;
  penaltyNote?: string;
  penaltyNoteEn?: string;
  shape: 'triangle' | 'circle' | 'rectangle' | 'octagon' | 'diamond' | 'inverted_triangle';
  colorTheme: 'red_white' | 'blue_white' | 'yellow_black' | 'green_white' | 'blue_yellow';
}

export type TestMode = 'exam' | 'practice' | 'signs_only' | 'priority_only' | 'quick_10' | 'hard_questions';

export interface TestSession {
  id: string;
  country: CountryInfo;
  mode: TestMode;
  modeTitle: string;
  totalQuestions: number;
  timeLimitSeconds: number;
  timeSpentSeconds: number;
  startedAt: number;
  completedAt?: number;
  questions: Question[];
  userAnswers: Record<string, string>; // questionId -> optionId
  flaggedQuestionIds: string[];
  score: number;
  percentage: number;
  passed: boolean;
}

export interface TestHistoryItem {
  id: string;
  date: string;
  countryId: CountryId;
  countryName: string;
  modeTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
}

export interface ViolationRule {
  id: string;
  countryId: CountryId | 'all';
  violation: string;
  violationEn?: string;
  category: string;
  categoryEn?: string;
  fineRange: string;
  fineRangeEn?: string;
  points: number;
  consequences: string;
  consequencesEn?: string;
}
