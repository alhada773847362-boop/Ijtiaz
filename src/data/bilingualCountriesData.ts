import { BilingualCountry, BilingualQuestion } from './bilingual/types';
import { GULF_COUNTRIES } from './bilingual/countries/gulf';
import { NORTH_AFRICA_COUNTRIES } from './bilingual/countries/northAfrica';
import { LEVANT_COUNTRIES } from './bilingual/countries/levant';
import { INTERNATIONAL_COUNTRIES } from './bilingual/countries/international';
import { NETHERLANDS_COUNTRY } from './bilingual/countries/netherlands';
import { GLOBAL_BILINGUAL_QUESTIONS } from './bilingual/globalQuestions';

export type { BilingualCountry, BilingualQuestion };
export { GLOBAL_BILINGUAL_QUESTIONS };

/**
 * SOURCE OF TRUTH: BILINGUAL COUNTRIES DATA
 * Covers all supported countries including Netherlands CBR 2026 with questions in Arabic, English, and Dutch.
 */
export const BILINGUAL_COUNTRIES_DATA: Record<string, BilingualCountry> = {
  ...GULF_COUNTRIES,
  ...NORTH_AFRICA_COUNTRIES,
  ...LEVANT_COUNTRIES,
  ...INTERNATIONAL_COUNTRIES,
  nl: NETHERLANDS_COUNTRY,
};

