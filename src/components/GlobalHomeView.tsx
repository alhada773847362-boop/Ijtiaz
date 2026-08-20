import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ShieldAlert, 
  Volume2, 
  HelpCircle, 
  ChevronRight, 
  Award, 
  Globe2, 
  Car, 
  Compass, 
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
  Flame,
  Check
} from 'lucide-react';
import { CountryInfo, CountryId } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { TRANSLATIONS } from '../data/translations';
import { AppLogo } from './AppLogo';
import { TrafficSignSvg } from './TrafficSignSvg';

interface GlobalHomeViewProps {
  onSelectCountry: (country: CountryInfo) => void;
  locale: 'ar' | 'en';
}

type RegionFilter = 'all' | 'gcc' | 'levant_egypt' | 'north_africa' | 'international' | 'other_arab';

export const GlobalHomeView: React.FC<GlobalHomeViewProps> = ({
  onSelectCountry,
  locale
}) => {
  const isAr = locale === 'ar';
  const t = TRANSLATIONS[locale];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Micro-Demo interactive question state
  const [demoSelectedAnswer, setDemoSelectedAnswer] = useState<string | null>(null);
  const [demoRevealed, setDemoRevealed] = useState(false);

  // Region categorizations
  const GCC_IDS: CountryId[] = ['sa', 'ae', 'kw', 'qa', 'om', 'bh'];
  const LEVANT_EGYPT_IDS: CountryId[] = ['eg', 'jo', 'lb', 'ps', 'sy', 'iq'];
  const NORTH_AFRICA_IDS: CountryId[] = ['ma', 'dz', 'tn', 'ly', 'mr'];
  const INTERNATIONAL_IDS: CountryId[] = ['us', 'gb', 'ca', 'au'];
  const OTHER_ARAB_IDS: CountryId[] = ['ye', 'sd', 'so', 'dj', 'km'];

  const REGIONS = [
    { id: 'all' as RegionFilter, labelAr: 'جميع الدول', labelEn: 'All Countries', count: 26, icon: '🌍' },
    { id: 'gcc' as RegionFilter, labelAr: 'الخليج العربي', labelEn: 'GCC Countries', count: 6, icon: '🇸🇦' },
    { id: 'levant_egypt' as RegionFilter, labelAr: 'مصر وبلاد الشام', labelEn: 'Egypt & Levant', count: 6, icon: '🇪🇬' },
    { id: 'north_africa' as RegionFilter, labelAr: 'المغرب العربي', labelEn: 'North Africa', count: 5, icon: '🇲🇦' },
    { id: 'international' as RegionFilter, labelAr: 'المغتربين والعالم', labelEn: 'USA, UK & World', count: 4, icon: '🌐' },
    { id: 'other_arab' as RegionFilter, labelAr: 'دول أخرى', labelEn: 'Other Countries', count: 5, icon: '📍' },
  ];

  // Filtered countries
  const filteredCountries = useMemo(() => {
    return COUNTRIES_LIST.filter((country) => {
      // Region filter
      if (selectedRegion === 'gcc' && !GCC_IDS.includes(country.id)) return false;
      if (selectedRegion === 'levant_egypt' && !LEVANT_EGYPT_IDS.includes(country.id)) return false;
      if (selectedRegion === 'north_africa' && !NORTH_AFRICA_IDS.includes(country.id)) return false;
      if (selectedRegion === 'international' && !INTERNATIONAL_IDS.includes(country.id)) return false;
      if (selectedRegion === 'other_arab' && !OTHER_ARAB_IDS.includes(country.id)) return false;

      // Text search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        country.name.toLowerCase().includes(q) ||
        country.code.toLowerCase().includes(q) ||
        country.authority.toLowerCase().includes(q) ||
        (country.popularSchool && country.popularSchool.toLowerCase().includes(q)) ||
        country.id.toLowerCase().includes(q)
      );
    });
  }, [selectedRegion, searchQuery]);

  // Demo question data
  const DEMO_QUESTION = {
    text: isAr
      ? 'عند الاقتراب من دوار لا توجد به إشارات ضوئية، لمن تكون الأولوية في المرور؟'
      : 'When approaching a roundabout with no traffic lights, who has the right of way?',
    options: [
      { id: 'A', text: isAr ? 'للمركبات القادمة من جهة اليمين دائماً' : 'To vehicles coming from the right always' },
      { id: 'B', text: isAr ? 'للمركبات الموجودة بالفعل داخل مسار الدوار' : 'To vehicles already inside the roundabout' },
      { id: 'C', text: isAr ? 'للمركبة الأسرع وزناً وحجماً' : 'To the fastest and largest vehicle' },
      { id: 'D', text: isAr ? 'للمركبة التي تطلق بوق التنبيه أولاً' : 'To the vehicle that honks first' },
    ],
    correctId: 'B',
    explanation: isAr
      ? 'القاعدة المرورية العالمية المعتمدة: الأولوية المطلقة للمركبات التي تدور وتتواجد بالفعل داخل الدوار قبل دخول أي مركبة جديدة.'
      : 'Universal Traffic Rule: Priority is strictly given to vehicles already circulating inside the roundabout before entering.'
  };

  const handleDemoAnswer = (optionId: string) => {
    setDemoSelectedAnswer(optionId);
    setDemoRevealed(true);
  };

  const FAQS = [
    {
      qAr: 'كيف تضمن منصة اجتياز مطابقة الأسئلة للاختبار النظري الفعلي؟',
      qEn: 'How does Ijtiaz ensure questions match the actual theoretical test?',
      aAr: 'يتم تحديث بنك أسئلة منصة اجتياز بشكل دوري وفقاً لأحدث الكتيبات والنماذج الوزارية المعتمدة لدى إدارات المرور ومدارس القيادة الرسمية في كل دولة (مثل مدارس دله بالمملكة، وهيئة RTA بدبي، وإدارات المرور المصرية، واختبارات DMV وDVSA).',
      aEn: 'Our question bank is continuously synchronized with official ministry guidelines and driver licensing authorities (including Dallah KSA, Dubai RTA, Egyptian Traffic Police, US DMV, and UK DVSA).'
    },
    {
      qAr: 'هل المنصة مجانية بالكامل أم تتطلب اشتراكاً؟',
      qEn: 'Is the platform 100% free or does it require a subscription?',
      aAr: 'منصة اجتياز مجانية بالكامل 100% لجميع السائقين في جميع الدول بدون أي رسوم، ولا تتطلب تسجيل حساب أو إدخال بيانات شخصية للبدء.',
      aEn: 'Ijtiaz is 100% free for all drivers across all 26 countries. No subscription, sign-up, or personal info required.'
    },
    {
      qAr: 'هل تدعم المنصة المغتربين والراغبين بالحصول على رخصة في أمريكا وبريطانيا وكندا وأستراليا؟',
      qEn: 'Does the platform support expat drivers in the USA, UK, Canada, and Australia?',
      aAr: 'نعم! توفر المنصة نماذج كاملة ومترجمة بدقة لاختبارات رخصة القيادة الأمريكية (DMV)، والبريطانية (DVSA)، والكندية (G1/Knowledge)، والأسترالية (DKT) مع دعم كامل للغتين العربية والإنجليزية.',
      aEn: 'Yes! We provide complete practice tests for US DMV, UK DVSA, Canadian G1, and Australian DKT with full dual Arabic and English support.'
    },
    {
      qAr: 'ما هي الميزات الذكية المتاحة أثناء التدريب؟',
      qEn: 'What smart training features are available?',
      aAr: 'تشمل المنصة: محاكي موقوت بنفس وقت الاختبار الحقيقي، تصحيحاً فورياً مع شرح القاعدة المرورية، قارئاً صوتياً ناطقاً للأسئلة، موسوعة إشارات تفاعلية، وجدول المخالفات والنقاط المرورية.',
      aEn: 'Features include: official timed exam simulation, instant answer explanations with rule references, audio voice assistant, interactive traffic signs encyclopedia, and penalty points guides.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. Global Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 p-6 sm:p-12 shadow-2xl shadow-cyan-950/20 text-center">
        {/* Glow ambient spots */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-teal-500/15 border border-cyan-500/30 px-4 py-1.5 rounded-full text-cyan-300 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-950/40">
            <AppLogo size="xs" withGlow={false} />
            <span>
              {isAr
                ? 'المنصة العالمية الأولى للتدرب على اختبار القيادة النظري 2026'
                : 'The #1 Global Theory Driving Test Simulator 2026'}
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2]">
            {isAr ? (
              <>
                اجتز اختبار القيادة النظري من{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300">
                  المحاولة الأولى
                </span>{' '}
                في 26 دولة
              </>
            ) : (
              <>
                Pass Your Driving Theory Exam on the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300">
                  First Attempt
                </span>{' '}
                Across 26 Countries
              </>
            )}
          </h1>

          {/* Subtitle description */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'اختر دولتك وتدرّب مجاناً على أحدث نماذج الاختبارات الوزارية المحوسبة، بنك الأسئلة المعتمد، وموسوعة إشارات المرور الشاملة بدون أي قيود أو تسجيل.'
              : 'Select your country and practice on the latest official computerized driving theory tests, verified question banks, and complete traffic signs guides 100% free.'}
          </p>

          {/* Live Search Box with Instant Suggestions */}
          <div className="pt-4 max-w-2xl mx-auto text-right ltr:text-left relative z-30">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-blue-500/20 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-slate-950/95 border border-slate-700/90 focus-within:border-cyan-400/80 rounded-2xl px-4 py-3.5 sm:py-4 shadow-2xl transition-all">
                <Search className="w-5 h-5 text-cyan-400 shrink-0 mx-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filteredCountries.length > 0) {
                      onSelectCountry(filteredCountries[0]);
                    }
                  }}
                  placeholder={
                    isAr
                      ? '🔍 ابحث عن دولتك هنا (مثال: السعودية، مصر، الإمارات، الأردن، أمريكا...)'
                      : '🔍 Search your country here (e.g. Saudi Arabia, Egypt, UAE, Jordan, USA...)'
                  }
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none font-bold"
                  aria-label="Search countries"
                  autoComplete="off"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg transition-colors font-bold"
                  >
                    {isAr ? 'مسح' : 'Clear'}
                  </button>
                ) : (
                  <span className="hidden sm:inline-block text-[11px] text-slate-400 bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded font-mono">
                    ↵ Enter
                  </span>
                )}
              </div>
            </div>

            {/* Live Autocomplete Dropdown when searching */}
            {searchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/98 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 max-h-80 overflow-y-auto">
                <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {isAr ? `نتائج البحث عن "${searchQuery}" (${filteredCountries.length} دولة)` : `Search results for "${searchQuery}" (${filteredCountries.length})`}
                  </span>
                  <span className="text-[10px] text-cyan-400 font-bold">
                    {isAr ? 'انقر على الدولة للدخول فوراً' : 'Click to enter country'}
                  </span>
                </div>

                {filteredCountries.length > 0 ? (
                  <div className="divide-y divide-slate-800/80">
                    {filteredCountries.slice(0, 8).map((country) => (
                      <div
                        key={country.id}
                        onClick={() => onSelectCountry(country)}
                        className="p-3.5 hover:bg-slate-800/90 transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl leading-none group-hover:scale-110 transition-transform">
                            {country.flag}
                          </span>
                          <div>
                            <div className="font-black text-sm text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                              <span>{country.name}</span>
                              <span className="text-[10px] text-slate-400 font-normal bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                                {country.code.toUpperCase()}
                              </span>
                            </div>
                            <div className="text-xs text-slate-400">
                              {country.authority} • {country.popularSchool}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex flex-col text-left ltr:text-right text-[11px] text-slate-400">
                            <span className="text-emerald-400 font-bold">{country.totalOfficialQuestions} {isAr ? 'سؤال معتمد' : 'questions'}</span>
                            <span>{isAr ? 'نسبة النجاح' : 'Pass'}: {country.passingScorePercentage}%</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectCountry(country);
                            }}
                            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl transition-all shadow-md shadow-cyan-600/30 flex items-center gap-1"
                          >
                            <span>{isAr ? 'دخول' : 'Enter'}</span>
                            <ArrowLeft className="w-3.5 h-3.5 ltr:rotate-180" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-slate-400 space-y-2">
                    <p>{isAr ? 'لم يتم العثور على دولة بهذا الاسم.' : 'No countries found matching your search.'}</p>
                    <p className="text-xs text-slate-300">
                      {isAr ? 'تأكد من كتابة الاسم بالعربية أو بالإنجليزية (مثال: السعودية، مصر، دله، RTA).' : 'Try searching in Arabic or English.'}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Country Jump Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3">
              <span className="text-xs text-slate-400 font-bold ml-1">
                {isAr ? 'الوصول السريع:' : 'Quick access:'}
              </span>
              {[
                { id: 'sa', name: 'السعودية 🇸🇦', nameEn: 'Saudi 🇸🇦' },
                { id: 'ae', name: 'الإمارات 🇦🇪', nameEn: 'UAE 🇦🇪' },
                { id: 'eg', name: 'مصر 🇪🇬', nameEn: 'Egypt 🇪🇬' },
                { id: 'jo', name: 'الأردن 🇯🇴', nameEn: 'Jordan 🇯🇴' },
                { id: 'kw', name: 'الكويت 🇰🇼', nameEn: 'Kuwait 🇰🇼' },
                { id: 'ma', name: 'المغرب 🇲🇦', nameEn: 'Morocco 🇲🇦' },
                { id: 'qa', name: 'قطر 🇶🇦', nameEn: 'Qatar 🇶🇦' },
                { id: 'us', name: 'أمريكا 🇺🇸', nameEn: 'USA 🇺🇸' },
                { id: 'gb', name: 'بريطانيا 🇬🇧', nameEn: 'UK 🇬🇧' },
              ].map((item) => {
                const countryObj = COUNTRIES_LIST.find((c) => c.id === item.id);
                if (!countryObj) return null;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectCountry(countryObj)}
                    className="bg-slate-800/80 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700/80 text-slate-300 text-xs font-bold px-2.5 py-1 rounded-lg transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    {isAr ? item.name : item.nameEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">26</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {isAr ? 'دولة عربية وعالمية' : 'Supported Countries'}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">50,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {isAr ? 'سؤال معتمد ومحدّث' : 'Verified Questions'}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">99.4%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {isAr ? 'نسبة اجتياز المتدربين' : 'Passing Success Rate'}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-purple-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {isAr ? 'مجاني بدون تسجيل' : 'Free / No Sign-up'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Micro-Simulator Demo */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {isAr ? 'تجربة حية فورية' : 'Live Interactive Preview'}
                </span>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  {isAr ? 'جرّب سؤالاً من محاكي الاختبارات الآن' : 'Try a Realistic Exam Question Right Now'}
                </h2>
              </div>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {isAr ? 'سؤال قواعد أولوية' : 'Traffic Priority Rule'}
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              {DEMO_QUESTION.text}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEMO_QUESTION.options.map((opt) => {
                const isSelected = demoSelectedAnswer === opt.id;
                const isCorrect = opt.id === DEMO_QUESTION.correctId;
                let btnStyle = 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-200';

                if (demoRevealed) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-950/70 border-red-500 text-red-200';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleDemoAnswer(opt.id)}
                    className={`flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border text-sm sm:text-base font-semibold text-start transition-all ${btnStyle}`}
                  >
                    <span className="w-7 h-7 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-black shrink-0">
                      {opt.id}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                    {demoRevealed && isCorrect && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {demoRevealed && (
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-2xl p-4 text-cyan-200 text-sm space-y-1 animate-in fade-in duration-300">
                <div className="font-bold flex items-center gap-2 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? 'التفسير المروري المعتمد:' : 'Official Traffic Explanation:'}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {DEMO_QUESTION.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Filterable Countries Hub Section */}
      <section className="space-y-8" id="countries-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'بوابة الدول المعتمدة' : 'Official Countries Hub'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isAr ? 'اختر دولتك لبدء التدريب المخصص' : 'Select Your Country to Begin Training'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {isAr
                ? `عرض ${filteredCountries.length} من أصل 26 دولة وفقاً للنظام المروري المعتمد`
                : `Showing ${filteredCountries.length} of 26 countries according to official traffic regulations`}
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {REGIONS.map((region) => {
              const active = selectedRegion === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-black'
                      : 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300'
                  }`}
                >
                  <span>{region.icon}</span>
                  <span>{isAr ? region.labelAr : region.labelEn}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? 'bg-black/20 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                    {region.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Countries Grid */}
        {filteredCountries.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
            <Globe2 className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">
              {isAr ? 'لم يتم العثور على دولة مطابقة لبحثك' : 'No matching country found'}
            </h3>
            <p className="text-sm text-slate-400">
              {isAr ? 'جرّب البحث باسم آخر أو إعادة ضبط الفلتر' : 'Try another search term or reset filter'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs"
            >
              {isAr ? 'إعادة ضبط البحث' : 'Reset Search'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 hover:border-cyan-500/60 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between gap-5"
              >
                {/* Top Country Row */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl select-none shrink-0 drop-shadow-md">
                        {country.flag}
                      </span>
                      <div>
                        <h3 className="font-black text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {country.name}
                        </h3>
                        <span className="inline-block text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20 mt-0.5">
                          {country.code}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* School / Authority Badge */}
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5 text-xs text-slate-300 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold line-clamp-1">
                      {country.popularSchool || country.authority}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {country.description}
                  </p>
                </div>

                {/* Specs Stats */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/50 border border-slate-800/60 rounded-2xl p-2.5 text-center text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isAr ? 'الأسئلة' : 'Questions'}</span>
                    <span className="font-bold text-white">{country.totalOfficialQuestions}</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isAr ? 'النجاح' : 'Pass'}</span>
                    <span className="font-bold text-emerald-400">{country.passingScorePercentage}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isAr ? 'الوقت' : 'Time'}</span>
                    <span className="font-bold text-amber-400">{country.timeLimitMinutes}د</span>
                  </div>
                </div>

                {/* Action Button: Enters Country Home & Hub */}
                <div className="pt-1">
                  <button
                    onClick={() => onSelectCountry(country)}
                    className="w-full bg-gradient-to-r from-cyan-500 hover:from-cyan-400 to-emerald-500 hover:to-emerald-400 text-slate-950 font-black py-3 px-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 group-hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>{isAr ? `دخول صفحة ${country.name}` : `Enter ${country.name} Hub`}</span>
                    {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Compact Tests Guide (دليل نماذج الاختبارات الصغير) */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isAr ? 'دليل الاختبارات المصغر' : 'Official Tests Guide'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {isAr ? 'أنماط ونماذج الاختبارات المتوفرة لكل دولة' : 'Available Test Formats in Each Country'}
            </h2>
          </div>
          <p className="text-xs text-slate-400 sm:max-w-xs">
            {isAr
              ? 'اختر دولتك أعلاه لبدء أي من هذه الأنماط المعتمدة مجاناً'
              : 'Select your country above to start any of these formats for free'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-blue-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                🏆
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '1. المحاكي الرسمي الشامل' : '1. Full Official Simulation'}</h3>
                <span className="text-[10px] text-blue-400 font-semibold">{isAr ? 'مطابق لبيئة المرور الحقيقية' : 'Timed Real Exam'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'نفس عدد الأسئلة والوقت ونسبة النجاح لمدارس القيادة، مع مؤقت تنازلي واحتساب فوري للنتيجة.'
                : 'Exact questions count, passing percentage, and timer matching official test centers.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-teal-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
                📖
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '2. التدريب الفوري مع الشرح' : '2. Instant Practice'}</h3>
                <span className="text-[10px] text-teal-400 font-semibold">{isAr ? 'بدون مؤقت زمني' : 'Untimed & Explanations'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'تصحيح مباشر وفوري لكل سؤال مع توضيح نص المادة المرورية المعتمدة وسبب الإجابة الصحيحة.'
                : 'Instant answer verification with legal reasoning and official rule references.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                🛑
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '3. تخصص إشارات المرور' : '3. Road Signs Specialty'}</h3>
                <span className="text-[10px] text-amber-400 font-semibold">{isAr ? 'جميع الشواخص والعلامات' : 'Signs & Markings'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'اختبار مكرس بالكامل للعلامات التحذيرية، التنظيمية، الإلزامية، الإرشادية والخطوط الأرضية.'
                : 'Dedicated test covering warning, regulatory, mandatory, and directional road signs.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                🚗
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '4. قواعد أولوية المرور' : '4. Priority & Roundabouts'}</h3>
                <span className="text-[10px] text-purple-400 font-semibold">{isAr ? 'الدوارات والتقاطعات' : 'Right of Way'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'أسئلة تفاعلية حول أولوية المرور في الدوارات، التقاطعات غير المنظمة، ومركبات الطوارئ.'
                : 'Scenarios on right-of-way, unmarked intersections, roundabouts, and emergency vehicles.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                ⚡
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '5. الاختبار السريع (10 أسئلة)' : '5. Quick Sprint (10 Qs)'}</h3>
                <span className="text-[10px] text-cyan-400 font-semibold">{isAr ? 'مراجعة في 5 دقائق' : '5-Minute Review'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'عشرة أسئلة منتقاة بعناية لتقييم سريع لمستواك في أي وقت أثناء التنقل أو الاستراحة.'
                : '10 quick high-yield questions for rapid assessment on the go.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-rose-500/40 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
                🔥
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{isAr ? '6. الأسئلة الصعبة والأكثر خطأً' : '6. Hardest Questions Bank'}</h3>
                <span className="text-[10px] text-rose-400 font-semibold">{isAr ? 'تحدي النخبة' : 'Mastering Tricky Qs'}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'مجموعة الأسئلة الأكثر وروداً والتي يقع فيها معظم المتقدمين لضمان تفادي أي أخطاء مفاجئة.'
                : 'High-difficulty tricky questions with common pitfalls to guarantee 100% readiness.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Pillars & Features Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'لماذا يفضل السائقون منصة اجتياز؟' : 'Why Drivers Choose Ijtiaz?'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {isAr ? 'منظومة تدريبية متكاملة تضمن تفوقك' : 'Comprehensive Training Ecosystem for Guaranteed Success'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {isAr
              ? 'صُممت منصة اجتياز لتقدم نفس البيئة الحاسوبية للاختبار الحقيقي بأحدث التقنيات'
              : 'Designed to mirror real computerized driving test centers with advanced training tools'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">
              {isAr ? 'محاكي موقوت واقعي' : 'Real-Time Timed Simulation'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'مؤقت زمني دقيق مطابق لمدارس القيادة، مع خوارزمية سحب عشوائي للأسئلة لضمان عدم تكرار الاختبار.'
                : 'Exact time limits matching official exam centers, with randomized question pools for true readiness.'}
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">
              {isAr ? 'موسوعة إشارات شاملة' : 'Complete Signs Encyclopedia'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'دليل مصور عالي الدقة لجميع الإشارات التحذيرية، التنظيمية، الإلزامية والإرشادية مع شرح سبب كل علامة.'
                : 'HD vector diagrams covering warning, regulatory, mandatory, and guide signs with legal explanations.'}
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">
              {isAr ? 'القارئ الصوتي التفاعلي' : 'Interactive Audio Assistant'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'قراءة صوتية ذكية للأسئلة والخيارات بمخارج حروف واضحة لمساعدة المتدربين في كافة الظروف.'
                : 'Crystal clear voice read-aloud for all questions and answers to assist all learning styles.'}
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white">
              {isAr ? 'جدول المخالفات والنقاط' : 'Violations & Demerit Points'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'لوائح الغرامات المالية ونظام سحب النقاط المرورية لكل دولة لحماية رخصتك من التعليق.'
                : 'Official monetary penalties and license demerit points schedule for safe legal driving.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. The 4-Step Road to Passing */}
      <section className="space-y-8 text-center max-w-4xl mx-auto">
        <div className="space-y-2">
          <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
            {isAr ? 'خطة النجاح' : 'Success Roadmap'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? '4 خطوات تفصلك عن استلام رخصة القيادة' : '4 Simple Steps to Your Official Driver License'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-start">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative">
            <span className="text-2xl font-black text-cyan-500/30 absolute top-3 end-3">01</span>
            <div className="font-bold text-white text-sm mb-1">{isAr ? 'اختر دولتك' : 'Select Country'}</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr ? 'حدد دولتك لتحميل بنك الأسئلة المعتمد لديها.' : 'Choose your country for localized questions.'}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative">
            <span className="text-2xl font-black text-emerald-500/30 absolute top-3 end-3">02</span>
            <div className="font-bold text-white text-sm mb-1">{isAr ? 'راجع الإشارات' : 'Study Signs'}</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr ? 'تصفح دليل إشارات المرور وتعرّف على معانيها.' : 'Review traffic and road signs catalog.'}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative">
            <span className="text-2xl font-black text-amber-500/30 absolute top-3 end-3">03</span>
            <div className="font-bold text-white text-sm mb-1">{isAr ? 'تدرّب بالمحاكي' : 'Mock Simulator'}</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr ? 'خض عدة اختبارات تجريبية حتى تحقق 90%+.' : 'Take practice exams until you score 90%+.'}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative">
            <span className="text-2xl font-black text-purple-500/30 absolute top-3 end-3">04</span>
            <div className="font-bold text-white text-sm mb-1">{isAr ? 'اجتز الاختبار الرسمي' : 'Pass Exam'}</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr ? 'ادخل قاعة الفحص بكل ثقة واجتز من المرة الأولى!' : 'Walk in with confidence and pass first try!'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? 'كل ما تود معرفته عن الاختبارات النظرية' : 'Everything You Need to Know'}
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-start font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{isAr ? faq.qAr : faq.qEn}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-90 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {isAr ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
