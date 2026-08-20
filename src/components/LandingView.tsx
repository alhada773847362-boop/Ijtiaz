import React, { useState, useMemo } from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  ArrowLeft, 
  Target,
  FileCheck2,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  Navigation,
  Search,
  Scale,
  Filter,
  FileText,
  Compass,
  Check,
  AlertTriangle
} from 'lucide-react';
import { CountryInfo, TestMode } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { TRANSLATIONS, COUNTRY_TRANSLATIONS } from '../data/translations';
import { TRAFFIC_SIGNS_DATA } from '../data/trafficSignsData';
import { VIOLATIONS_DATA } from '../data/violationsData';
import { AdBanner } from './AdBanner';
import { TrafficSignSvg } from './TrafficSignSvg';

interface LandingViewProps {
  selectedCountry: CountryInfo;
  onSelectCountry: (country: CountryInfo) => void;
  onStartTest: (mode: TestMode, customQuestionsCount?: number) => void;
  onNavigateToSigns: () => void;
  onNavigateToViolations: () => void;
  onNavigateToHistory?: () => void;
  onNavigateGlobalHome?: () => void;
  locale?: 'ar' | 'en';
}

type CountryContentCategory = 'all' | 'tests' | 'signs' | 'violations' | 'rules';

export const LandingView: React.FC<LandingViewProps> = ({
  selectedCountry,
  onSelectCountry,
  onStartTest,
  onNavigateToSigns,
  onNavigateToViolations,
  onNavigateToHistory,
  onNavigateGlobalHome,
  locale = 'ar',
}) => {
  const currentLocale = locale || 'ar';
  const isAr = currentLocale === 'ar';
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.ar;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contentSearchQuery, setContentSearchQuery] = useState('');
  const [contentCategory, setContentCategory] = useState<CountryContentCategory>('all');

  const getCountryName = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].name;
    }
    return COUNTRIES_LIST.find((c) => c.id === cId)?.name || '';
  };

  const getCountrySchool = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].popularSchool;
    }
    return COUNTRIES_LIST.find((c) => c.id === cId)?.popularSchool || '';
  };

  const getCountryAuthority = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].authority;
    }
    return COUNTRIES_LIST.find((c) => c.id === cId)?.authority || '';
  };

  // Test modes definition for country search
  const AVAILABLE_TEST_MODES = useMemo(() => [
    {
      id: 'exam' as TestMode,
      title: isAr ? 'الاختبار الوزاري الشامل المعتمد' : 'Full Official Simulation Exam',
      desc: isAr ? `محاكاة رسمية مطابقة للاختبار الفعلي (${selectedCountry.totalOfficialQuestions} سؤال، ${selectedCountry.timeLimitMinutes} دقيقة)` : `Official simulation matching real test (${selectedCountry.totalOfficialQuestions} questions, ${selectedCountry.timeLimitMinutes} mins)`,
      badge: isAr ? 'الموصى به' : 'Recommended',
      badgeColor: 'bg-blue-600',
      icon: Award,
      color: 'text-blue-400',
      keywords: 'رسمي شامل معتمد دله مرور كامل exam full official'
    },
    {
      id: 'practice' as TestMode,
      title: isAr ? 'التدريب الفوري مع توضيح الإجابات' : 'Practice Mode with Instant Explanations',
      desc: isAr ? 'تدرب بدون وقت مع ظهور التصحيح الفوري والشرح التفصيلي لكل سؤال وقاعدة' : 'Untimed practice with instant feedback and rule explanations',
      badge: isAr ? 'بدون توقيت' : 'Untimed',
      badgeColor: 'bg-teal-600',
      icon: BookOpen,
      color: 'text-teal-400',
      keywords: 'تدريب شرح فوري توضيح تصحيح practice learn explanation'
    },
    {
      id: 'signs_only' as TestMode,
      title: isAr ? 'اختبار إشارات وعلامات المرور المتخصص' : 'Traffic Signs Mastery Quiz',
      desc: isAr ? 'تركيز حصري ومكثف على كافة الإشارات التحذيرية والتنظيمية والإرشادية' : 'Dedicated focus on warning, regulatory, and informational road signs',
      badge: isAr ? 'إشارات فقط' : 'Signs Only',
      badgeColor: 'bg-amber-600',
      icon: Navigation,
      color: 'text-amber-400',
      keywords: 'اشارات علامات تحذيرية تنظيمية ارشادية signs warning regulatory'
    },
    {
      id: 'priority_only' as TestMode,
      title: isAr ? 'اختبار التقاطعات وحق الأولوية والدوار' : 'Intersections & Priority Rules Quiz',
      desc: isAr ? 'أسئلة وسيناريوهات حق الأسبقية، الدوارات، التقاطعات، والمسارات' : 'Right of way scenarios, roundabouts, junctions and road lane rules',
      badge: isAr ? 'قواعد الأولوية' : 'Priority Rules',
      badgeColor: 'bg-purple-600',
      icon: FileCheck2,
      color: 'text-purple-400',
      keywords: 'تقاطعات دوار اولوية اسبقية حق المرور priority intersections roundabout'
    },
    {
      id: 'quick_10' as TestMode,
      title: isAr ? 'تحدي الـ 10 أسئلة السريع (Sprint)' : '10-Question Quick Sprint Challenge',
      desc: isAr ? 'تدريب سريع ومكثف لاختبار معلوماتك في أقل من 5 دقائق' : 'Fast 10-question sprint to test your knowledge in under 5 minutes',
      badge: isAr ? 'سريع 5 دقائق' : '5 Min Sprint',
      badgeColor: 'bg-cyan-600',
      icon: Zap,
      color: 'text-cyan-400',
      keywords: 'سريع عشر اسئلة سريع 10 quick sprint fast challenge'
    },
    {
      id: 'hard_questions' as TestMode,
      title: isAr ? 'بنك أصعب الأسئلة وأكثرها خطأً' : 'Hardest & Most Failed Questions Bank',
      desc: isAr ? 'تجميعة الأسئلة الدقيقة التي يقع فيها غالبية المتقدمين في قاعات الاختبار' : 'Curated collection of tricky questions with the highest fail rates',
      badge: isAr ? 'مستوى متقدم' : 'Hard Level',
      badgeColor: 'bg-red-600',
      icon: Flame,
      color: 'text-red-400',
      keywords: 'صعب اصعب اسئلة اخطاء معقد hard difficult tricky failed'
    }
  ], [isAr, selectedCountry]);

  // Filtered country content items
  const searchResults = useMemo(() => {
    const q = contentSearchQuery.toLowerCase().trim();
    const results = {
      tests: [] as typeof AVAILABLE_TEST_MODES,
      signs: [] as typeof TRAFFIC_SIGNS_DATA,
      violations: [] as typeof VIOLATIONS_DATA,
    };

    // Filter Tests
    if (contentCategory === 'all' || contentCategory === 'tests') {
      results.tests = AVAILABLE_TEST_MODES.filter((m) => {
        if (!q) return true;
        return (
          m.title.toLowerCase().includes(q) ||
          m.desc.toLowerCase().includes(q) ||
          m.keywords.toLowerCase().includes(q)
        );
      });
    }

    // Filter Signs
    if (contentCategory === 'all' || contentCategory === 'signs') {
      results.signs = TRAFFIC_SIGNS_DATA.filter((s) => {
        if (!q) return true;
        return (
          s.name.toLowerCase().includes(q) ||
          (s.nameEn && s.nameEn.toLowerCase().includes(q)) ||
          s.meaning.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.categoryName.toLowerCase().includes(q) ||
          s.code.toLowerCase().includes(q)
        );
      }).slice(0, q ? 12 : 8);
    }

    // Filter Violations
    if (contentCategory === 'all' || contentCategory === 'violations') {
      results.violations = VIOLATIONS_DATA.filter((v) => {
        const countryMatch = v.countryId === 'all' || v.countryId === selectedCountry.id;
        if (!countryMatch) return false;
        if (!q) return true;
        return (
          v.violation.toLowerCase().includes(q) ||
          (v.violationEn && v.violationEn.toLowerCase().includes(q)) ||
          v.category.toLowerCase().includes(q) ||
          v.fineRange.toLowerCase().includes(q) ||
          v.consequences.toLowerCase().includes(q)
        );
      }).slice(0, q ? 8 : 4);
    }

    return results;
  }, [contentSearchQuery, contentCategory, AVAILABLE_TEST_MODES, selectedCountry]);

  const totalResultsCount = 
    searchResults.tests.length + 
    searchResults.signs.length + 
    searchResults.violations.length;

  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Strategic Ad Placement (CLS-safe) */}
      <AdBanner slotType="leaderboard" adId="ad-top-hero" className="max-w-5xl" />

      {/* 1. Hero Section (Immersive Dark Command Center) */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1E293B] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-700/60">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6 text-right ltr:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.heroBadge.replace('%year%', new Date().getFullYear().toString())}</span>
          </div>

          {/* Visual Localization Block for Selected Country & Change Country Button */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 rounded-2xl px-4 py-2.5 shadow-lg shadow-black/10">
              <span className="text-2xl leading-none" role="img" aria-label={getCountryName(selectedCountry.id)}>{selectedCountry.flag}</span>
              <span className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                <span>{t.heroSimulatorIn}</span>
                <span className="text-blue-400">{getCountryName(selectedCountry.id)}</span>
              </span>
            </div>

            {onNavigateGlobalHome && (
              <button
                onClick={onNavigateGlobalHome}
                id="change-country-hero-btn"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-md group"
                title={isAr ? 'العودة للصفحة الرئيسية لاختيار دولة أخرى' : 'Return to home page to choose another country'}
              >
                <Compass className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
                <span>{isAr ? 'تغيير الدولة (العودة للرئيسية)' : 'Change Country (Home)'}</span>
              </button>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
            {t.heroPassTitle}<br className="hidden sm:inline" />
            <span className="bg-gradient-to-l from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t.heroPassSub}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
            {t.heroDesc
              .replace('%country%', getCountryName(selectedCountry.id))
              .replace('%school%', getCountrySchool(selectedCountry.id))}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-start-full-test-btn"
              onClick={() => onStartTest('exam')}
              className="bg-blue-600 hover:bg-blue-500 active:scale-98 text-white text-sm sm:text-base font-black px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>{t.heroStartFullTest.replace('%count%', selectedCountry.totalOfficialQuestions.toString())}</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
            </button>

            <button
              id="hero-signs-guide-btn"
              onClick={onNavigateToSigns}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs sm:text-sm font-bold px-5 py-3.5 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>{t.heroBrowseSigns}</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-700/60 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
              <span>{t.trustSuccessRate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.trustTimer}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{t.trustOfficialSystem}</span>
            </div>
          </div>

        </div>

        {/* Floating Visual Traffic Signs */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 p-4 rounded-3xl bg-[#0F172A]/80 border border-slate-700 shadow-2xl backdrop-blur-md">
          <div className="text-[11px] font-bold text-slate-400 mb-1">{t.sampleSigns}</div>
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-black/50 transform -rotate-3 hover:rotate-0 transition-transform">
            <TrafficSignSvg signId="reg_stop" size={72} />
          </div>
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-black/50 transform rotate-3 hover:rotate-0 transition-transform">
            <TrafficSignSvg signId="warn_pedestrian" size={72} />
          </div>
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-black/50 transform -rotate-2 hover:rotate-0 transition-transform">
            <TrafficSignSvg signId="man_roundabout" size={72} />
          </div>
        </div>

      </section>

      {/* 2. Country Smart Search & Discovery Hub (مركز البحث السريع والمستكشف الشامل) */}
      <section className="bg-gradient-to-b from-[#1E293B] to-slate-900 rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>{isAr ? `مستكشف محتوى دولة ${getCountryName(selectedCountry.id)}` : `${getCountryName(selectedCountry.id)} Content Explorer`}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              {isAr ? 'ابحث عن ما تريده في اختبارات وأنظمة القيادة' : 'Search Tests, Road Signs, Violations & Rules'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isAr
                ? 'ابحث فوراً بالاسم عن أي نموذج اختبار، إشارة مرورية، غرامة أو مخالفة، أو قاعدة أولوية'
                : 'Instantly search by keyword for any test simulator, road sign, violation fine, or driving rule'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-bold text-slate-300 bg-slate-800 px-3.5 py-2 rounded-2xl border border-slate-700">
            <span>{selectedCountry.flag}</span>
            <span>{getCountryName(selectedCountry.id)}</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">{selectedCountry.totalOfficialQuestions} {isAr ? 'سؤال' : 'Q'}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-60 group-focus-within:opacity-100 transition-opacity" />
          <div className="relative flex items-center bg-slate-950/90 border border-slate-700 focus-within:border-cyan-400 rounded-2xl px-4 py-3.5 shadow-xl transition-all">
            <Search className="w-5 h-5 text-cyan-400 shrink-0 mx-2" />
            <input
              type="text"
              value={contentSearchQuery}
              onChange={(e) => setContentSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? `🔍 اكتب ما تبحث عنه (مثال: اختبار شامل، قف، دوار، حزام الأمان، قطع الإشارة، سرعة، مطب...)`
                  : `🔍 Search (e.g. Full exam, Stop sign, Roundabout, Seatbelt, Red light, Speeding...)`
              }
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none font-bold"
              aria-label="Search country content"
            />
            {contentSearchQuery && (
              <button
                onClick={() => setContentSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg transition-colors font-bold"
              >
                {isAr ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-slate-800 pb-4">
          <span className="text-xs text-slate-400 font-bold ml-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isAr ? 'تصفية حسب:' : 'Filter by:'}</span>
          </span>

          {[
            { id: 'all' as CountryContentCategory, labelAr: 'الكل 🌟', labelEn: 'All 🌟', count: totalResultsCount },
            { id: 'tests' as CountryContentCategory, labelAr: 'نماذج الاختبارات 🎯', labelEn: 'Test Modes 🎯', count: searchResults.tests.length },
            { id: 'signs' as CountryContentCategory, labelAr: 'إشارات المرور 🛑', labelEn: 'Traffic Signs 🛑', count: searchResults.signs.length },
            { id: 'violations' as CountryContentCategory, labelAr: 'المخالفات والغرامات ⚖️', labelEn: 'Violations & Fines ⚖️', count: searchResults.violations.length },
          ].map((tab) => {
            const isActive = contentCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setContentCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
                }`}
              >
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-700 text-slate-300'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Instant Dynamic Search Results Section */}
        {(contentSearchQuery.trim().length > 0 || contentCategory !== 'all') && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Header info */}
            <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800">
              <span>
                {isAr
                  ? `تم العثور على (${totalResultsCount}) نتيجة مطابقة`
                  : `Found (${totalResultsCount}) matching results`}
              </span>
              <button
                onClick={() => {
                  setContentSearchQuery('');
                  setContentCategory('all');
                }}
                className="text-cyan-400 hover:underline font-bold"
              >
                {isAr ? 'إعادة ضبط البحث' : 'Reset search'}
              </button>
            </div>

            {/* 1. Matched Tests */}
            {searchResults.tests.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-black text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{isAr ? 'نماذج الاختبارات المعتمدة' : 'Practice Test Simulators'} ({searchResults.tests.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {searchResults.tests.map((mode) => {
                    const IconComp = mode.icon;
                    return (
                      <div
                        key={mode.id}
                        onClick={() => onStartTest(mode.id)}
                        className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-blue-500/80 hover:bg-slate-800 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-700 ${mode.color}`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${mode.badgeColor}`}>
                            {mode.badge}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {mode.title}
                          </h4>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                            {mode.desc}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartTest(mode.id);
                          }}
                          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>{isAr ? 'بدء الاختبار فوراً' : 'Start Test Now'}</span>
                          <ArrowLeft className="w-3.5 h-3.5 ltr:rotate-180" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Matched Traffic Signs */}
            {searchResults.signs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-4 h-4" />
                    <span>{isAr ? 'إشارات وعلامات المرور المطابقة' : 'Matching Road Signs'} ({searchResults.signs.length})</span>
                  </h3>
                  <button
                    onClick={onNavigateToSigns}
                    className="text-xs text-cyan-400 hover:underline font-bold"
                  >
                    {isAr ? 'عرض موسوعة الإشارات كاملة ←' : 'View full signs guide →'}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {searchResults.signs.map((sign) => (
                    <div
                      key={sign.id}
                      onClick={onNavigateToSigns}
                      className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-amber-500/60 transition-all flex flex-col justify-between space-y-2 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-xl shadow-sm shrink-0 flex items-center justify-center">
                          <TrafficSignSvg signId={sign.id} size={42} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                            {isAr ? sign.name : (sign.nameEn || sign.name)}
                          </div>
                          <div className="text-[10px] text-amber-400 font-medium">
                            {sign.categoryName}
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {isAr ? sign.meaning : (sign.meaningEn || sign.meaning)}
                      </p>
                      <div className="text-[10px] text-cyan-400 font-bold flex items-center gap-1 pt-1 border-t border-slate-700/60">
                        <span>{isAr ? 'استعراض في الدليل' : 'View in guide'}</span>
                        <ArrowLeft className="w-3 h-3 ltr:rotate-180" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Matched Violations */}
            {searchResults.violations.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Scale className="w-4 h-4" />
                    <span>{isAr ? 'المخالفات والغرامات المرورية' : 'Traffic Fines & Penalties'} ({searchResults.violations.length})</span>
                  </h3>
                  <button
                    onClick={onNavigateToViolations}
                    className="text-xs text-cyan-400 hover:underline font-bold"
                  >
                    {isAr ? 'جدول المخالفات الكامل ←' : 'View all violations →'}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {searchResults.violations.map((v) => (
                    <div
                      key={v.id}
                      onClick={onNavigateToViolations}
                      className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-red-500/60 transition-all flex flex-col justify-between space-y-2 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-100 group-hover:text-red-300 transition-colors">
                          {isAr ? v.violation : (v.violationEn || v.violation)}
                        </h4>
                        {v.points > 0 && (
                          <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-bold shrink-0">
                            {v.points} {isAr ? 'نقاط' : 'pts'}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-black text-amber-400">
                        {isAr ? v.fineRange : (v.fineRangeEn || v.fineRange)}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {isAr ? v.consequences : (v.consequencesEn || v.consequences)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results Fallback */}
            {totalResultsCount === 0 && (
              <div className="p-8 text-center bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
                <h4 className="text-sm font-bold text-slate-200">
                  {isAr ? `لم نجد نتائج مطابقة لـ "${contentSearchQuery}"` : `No results matching "${contentSearchQuery}"`}
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  {isAr
                    ? 'جرب البحث بكلمات عامة مثل: اختبار، إشارة، سرعة، دوار، حزام، أو اختر أحد تصنيفات التصفية أعلاه.'
                    : 'Try broader keywords such as: test, sign, speed, roundabout, seatbelt.'}
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Strategic Mid-Landing AdBanner */}
      <AdBanner slotType="rectangle" adId="mid-landing-rectangle-ad" />

      {/* 3. Interactive Test Modes (The Test Launcher) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              {t.practiceModesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.practiceModesSub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* AdBanner spanning full width of the modes grid on large screens */}
          <div className="col-span-full">
            <AdBanner slotType="in_article" adId="landing-grid-inarticle-ad" />
          </div>

          {/* Mode 1: Full Official Simulation */}
          <div className="p-6 rounded-2xl border-2 border-blue-500/80 bg-gradient-to-br from-blue-950/40 via-[#1E293B] to-slate-900 shadow-lg shadow-blue-500/10 flex flex-col justify-between space-y-4 relative">
            <div className="absolute -top-3 left-4 bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md shadow-blue-500/30">
              {t.modeOfficialBadge}
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modeOfficialTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modeOfficialDesc.replace('%count%', selectedCountry.totalOfficialQuestions.toString()).replace('%time%', selectedCountry.timeLimitMinutes.toString())}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold">{selectedCountry.timeLimitMinutes} {t.minutesUnit}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.passingScoreLabel} {selectedCountry.passingScorePercentage}%</span>
                </span>
              </div>
            </div>
            <button
              id="start-official-mode-btn"
              onClick={() => onStartTest('exam')}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modeOfficialBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 2: Instant Practice with Explanations */}
          <div className="p-6 rounded-2xl border border-slate-700/80 bg-[#1E293B] shadow-md flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modePracticeTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modePracticeDesc}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-teal-300 bg-teal-500/20 border border-teal-500/30 px-2 py-0.5 rounded">
                  {t.modePracticeBadge}
                </span>
              </div>
            </div>
            <button
              id="start-practice-mode-btn"
              onClick={() => onStartTest('practice')}
              className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modePracticeBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 3: Signs Master Specialty Test */}
          <div className="p-6 rounded-2xl border border-slate-700/80 bg-[#1E293B] shadow-md flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold mb-3">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modeSignsTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modeSignsDesc}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                  {t.modeSignsBadge}
                </span>
              </div>
            </div>
            <button
              id="start-signs-only-mode-btn"
              onClick={() => onStartTest('signs_only')}
              className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 active:scale-98 text-slate-950 font-black rounded-xl text-xs shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modeSignsBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 4: Priority & Intersections */}
          <div className="p-6 rounded-2xl border border-slate-700/80 bg-[#1E293B] shadow-md flex flex-col justify-between space-y-4 hover:border-purple-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold mb-3">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modePriorityTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modePriorityDesc}
              </p>
            </div>
            <button
              id="start-priority-mode-btn"
              onClick={() => onStartTest('priority_only')}
              className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modePriorityBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 5: 10-Question Quick Sprint */}
          <div className="p-6 rounded-2xl border border-slate-700/80 bg-[#1E293B] shadow-md flex flex-col justify-between space-y-4 hover:border-cyan-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modeQuickTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modeQuickDesc}
              </p>
            </div>
            <button
              id="start-quick-10-mode-btn"
              onClick={() => onStartTest('quick_10', 10)}
              className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modeQuickBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 6: Hardest Questions */}
          <div className="p-6 rounded-2xl border border-red-500/40 bg-red-950/20 shadow-md flex flex-col justify-between space-y-4 hover:border-red-500/70 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center font-bold mb-3">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                {t.modeHardTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {t.modeHardDesc}
              </p>
            </div>
            <button
              id="start-hard-mode-btn"
              onClick={() => onStartTest('hard_questions')}
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.modeHardBtn}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Middle In-Article Ad Placement */}
      <AdBanner slotType="in_test" adId="ad-mid-content" />

      {/* 4. Statistics & Community Proof */}
      <section className="bg-[#1E293B] rounded-3xl border border-slate-700/60 p-8 shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-100 mb-1">
            {t.statsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {t.statsSub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">
              +185,000
            </div>
            <div className="text-xs font-bold text-slate-300">{t.statTestsDone}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-green-400 mb-1">
              96.8%
            </div>
            <div className="text-xs font-bold text-slate-300">{t.statSuccessRate}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">
              +1,400
            </div>
            <div className="text-xs font-bold text-slate-300">{t.statQuestionsUp}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mb-1">
              {COUNTRIES_LIST.length}
            </div>
            <div className="text-xs font-bold text-slate-300">{t.statCountries}</div>
          </div>
        </div>
      </section>

      {/* 5. How to guarantee passing (4 Steps) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-100">
          {t.stepsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              1
            </div>
            <h3 className="text-sm font-bold text-slate-100">{t.step1Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.step1Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              2
            </div>
            <h3 className="text-sm font-bold text-slate-100">{t.step2Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.step2Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              3
            </div>
            <h3 className="text-sm font-bold text-slate-100">{t.step3Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.step3Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              4
            </div>
            <h3 className="text-sm font-bold text-slate-100">{t.step4Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.step4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Regional Licensing & Exam SEO Guide */}
      <section className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
              <span>{locale === 'en' ? 'Official Syllabus Guide 2026' : 'دليل المنهج الرسمي المعتمد 2026'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              {locale === 'en'
                ? `Complete Guide to ${getCountryName(selectedCountry.id)} Driving Theory Test`
                : `الدليل الشامل لاجتياز اختبار القيادة النظري في ${getCountryName(selectedCountry.id)}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {locale === 'en'
                ? `Everything you need to master the test under ${getCountryAuthority(selectedCountry.id)} & ${getCountrySchool(selectedCountry.id)}`
                : `كل ما يلزمك للتفوق واجتياز الاختبار لدى (${getCountryAuthority(selectedCountry.id)}) و (${getCountrySchool(selectedCountry.id)})`}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateToSigns}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{locale === 'en' ? 'Traffic Signs' : 'كتالوج الإشارات'}</span>
            </button>
            <button
              onClick={onNavigateToViolations}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{locale === 'en' ? 'Fines & Rules' : 'لائحة المخالفات'}</span>
            </button>
          </div>
        </div>

        {/* 3 Key Pillars of the Test */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{locale === 'en' ? '1. Traffic Signs & Signals' : '١. إشارات وعلامات المرور'}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {locale === 'en'
                ? 'Covers all triangular warning signs, circular regulatory/prohibitory signs, blue mandatory signs, and informative signs with exact real exam definitions.'
                : 'يشمل جميع الإشارات التحذيرية المثلثة، والتنظيمية المانعة الدائرية، والإلزامية الزرقاء، والإرشادية مع التركيز على أولويات الدوار والتقاطعات.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{locale === 'en' ? '2. Right of Way & Safety' : '٢. قواعد الأسبقية والمسافة الآمنة'}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {locale === 'en'
                ? 'Master the 2-second rule, emergency braking distances, roundabout lane discipline, overtaking regulations, and severe weather driving techniques.'
                : 'قاعدة الثانيتين للمسافة الآمنة، مسافات الفرملة والتوقف، مسارات الدوار، التجاوز الصحيح، والقيادة الآمنة في الضباب والأمطار.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{locale === 'en' ? '3. Points & Penalties System' : '٣. نظام النقاط والمخالفات'}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {locale === 'en'
                ? 'Understanding the demerit point thresholds, mobile phone while driving penalties, seatbelt laws, and license suspension criteria.'
                : 'التعرف على سقف النقاط التراكمية، مخالفات استخدام الجوال، ربط حزام الأمان، السرعات المقررة، وتجنب تعليق رخصة القيادة.'}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Comprehensive SEO & User FAQ Section */}
      <section className="space-y-5 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              {locale === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة حول اختبار القيادة'}
            </h2>
            <p className="text-xs text-slate-400">
              {locale === 'en' 
                ? 'Everything you need to know to pass the driving theory exam from the first attempt' 
                : `كل ما تود معرفته عن اختبار رخصة القيادة النظري في ${getCountryName(selectedCountry.id)}`}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              qAr: `كم درجة ونسبة النجاح في اختبار القيادة النظري بـ ${getCountryName(selectedCountry.id)}؟`,
              qEn: `What is the passing score for the driving theory test in ${getCountryName(selectedCountry.id)}?`,
              aAr: `نسبة النجاح المعتمدة في ${getCountryName(selectedCountry.id)} لدى (${getCountryAuthority(selectedCountry.id)}) هي ${selectedCountry.passingScorePercentage}%، أي ما يعادل الإجابة الصحيحة على ما لا يقل عن ${Math.ceil((selectedCountry.questionsPerExam * selectedCountry.passingScorePercentage) / 100)} سؤالاً من أصل ${selectedCountry.questionsPerExam} سؤالاً خلال ${selectedCountry.timeLimitMinutes} دقيقة.`,
              aEn: `The official passing score in ${getCountryName(selectedCountry.id)} under ${getCountryAuthority(selectedCountry.id)} is ${selectedCountry.passingScorePercentage}%. You need at least ${Math.ceil((selectedCountry.questionsPerExam * selectedCountry.passingScorePercentage) / 100)} correct answers out of ${selectedCountry.questionsPerExam} questions within ${selectedCountry.timeLimitMinutes} minutes.`
            },
            {
              qAr: 'هل الأسئلة وإشارات المرور في المنصة مطابقة للمناهج الرسمية لعام 2026؟',
              qEn: 'Are the questions and traffic signs updated and compliant with official 2026 guidelines?',
              aAr: 'نعم، تم تدقيق وتحديث بنك الأسئلة بالكامل ومطابقته مع أحدث لوائح المرور ومدارس تعليم القيادة المعتمدة، مع شروحات تفصيلية فورية لكل سؤال وإشارة مرورية.',
              aEn: 'Yes, our entire question bank is rigorously calibrated and updated to match the latest official guidelines from regional driving schools and traffic licensing authorities.'
            },
            {
              qAr: 'هل محاكي اختبار القيادة مجاني بالكامل؟',
              qEn: 'Is this driving test simulator completely free?',
              aAr: 'نعم، منصة اجتياز مجانية بنسبة 100% لجميع المتدربين بدون أي رسوم خفية وبدون اشتراك، ويمكنك إجراء اختبارات تجريبية غير محدودة في أي وقت.',
              aEn: 'Yes, Ijtiaz is 100% free with unlimited mock test sessions, traffic signs review, and penalty guide access without registration.'
            },
            {
              qAr: 'كيف أضمن اجتياز الاختبار النظري من المحاولة الأولى؟',
              qEn: 'How can I ensure passing the theory test on my first attempt?',
              aAr: 'ننصحك باتباع 3 خطوات: 1) مراجعة دليل إشارات المرور والمخالفات، 2) إجراء 3 إلى 5 اختبارات تجريبية بوضع الامتحان الرسمي، 3) استخدام ميزة "مراجعة الأسئلة الخاطئة فقط" حتى تحقق درجة 95% فما فوق.',
              aEn: 'We recommend: 1) Studying the traffic signs guide, 2) Practicing 3 to 5 full mock exams under timed conditions, and 3) Retaking your mistake questions until you consistently score above 95%.'
            }
          ].map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#1E293B] border border-slate-700/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-right ltr:text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-100 hover:text-blue-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-item-toggle-${idx}`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{locale === 'en' ? item.qEn : item.qAr}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    <p className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                      {locale === 'en' ? item.aEn : item.aAr}
                    </p>
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
