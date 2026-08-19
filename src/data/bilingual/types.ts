export interface BilingualQuestion {
  id: string;
  category: {
    ar: string;
    en: string;
  };
  ar: {
    questionText: string;
    options: string[];
    explanation: string;
  };
  en: {
    questionText: string;
    options: string[];
    explanation: string;
  };
  correctAnswerIndex: number;
}

export interface BilingualCountry {
  code: string;
  questionsCount: number;
  passingScore: string;
  ar: {
    name: string;
    authority: string;
    seoTitle: string;
    seoDescription: string;
    h1Heading: string;
  };
  en: {
    name: string;
    authority: string;
    seoTitle: string;
    seoDescription: string;
    h1Heading: string;
  };
  questions: BilingualQuestion[];
}
