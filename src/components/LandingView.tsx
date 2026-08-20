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

  // Dynamic Design Theme based on Country
  const getCountryTheme = (cId: string) => {
    switch (cId) {
      case 'sa':
        return { 
          gradient: 'from-emerald-900/40 via-slate-900 to-slate-950', 
          accent: 'emerald', 
          primary: 'text-emerald-400', 
          bg: 'bg-emerald-500/10', 
          border: 'border-emerald-500/30',
          btn: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30'
        };
      case 'ae':
        return { 
          gradient: 'from-blue-900/40 via-slate-900 to-slate-950', 
          accent: 'blue', 
          primary: 'text-blue-400', 
          bg: 'bg-blue-500/10', 
          border: 'border-blue-500/30',
          btn: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'
        };
      case 'eg':
        return { 
          gradient: 'from-red-900/40 via-slate-900 to-slate-950', 
          accent: 'red', 
          primary: 'text-red-400', 
          bg: 'bg-red-500/10', 
          border: 'border-red-500/30',
          btn: 'bg-red-600 hover:bg-red-500 shadow-red-500/30'
        };
      case 'kw':
        return { 
          gradient: 'from-cyan-900/40 via-slate-900 to-slate-950', 
          accent: 'cyan', 
          primary: 'text-cyan-400', 
          bg: 'bg-cyan-500/10', 
          border: 'border-cyan-500/30',
          btn: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30'
        };
      case 'qa':
        return { 
          gradient: 'from-rose-900/40 via-slate-900 to-slate-950', 
          accent: 'rose', 
          primary: 'text-rose-400', 
          bg: 'bg-rose-500/10', 
          border: 'border-rose-500/30',
          btn: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30'
        };
      case 'jo':
      case 'ma':
      case 'dz':
        return { 
          gradient: 'from-green-900/40 via-slate-900 to-slate-950', 
          accent: 'green', 
          primary: 'text-green-400', 
          bg: 'bg-green-500/10', 
          border: 'border-green-500/30',
          btn: 'bg-green-600 hover:bg-green-500 shadow-green-500/30'
        };
      default:
        return { 
          gradient: 'from-blue-950/40 via-slate-900 to-slate-950', 
          accent: 'blue', 
          primary: 'text-blue-400', 
          bg: 'bg-blue-500/10', 
          border: 'border-blue-500/30',
          btn: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'
        };
    }
  };

  const theme = getCountryTheme(selectedCountry.id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  // Dynamic Country-Specific Search Trend FAQs
  const getCountryFaqs = (cId: string) => {
    const common = [
      {
        qAr: `كم عدد أسئلة اختبار القيادة النظري في ${getCountryName(cId)} لعام 2026؟`,
        qEn: `How many questions are in the 2026 ${getCountryName(cId)} driving theory test?`,
        aAr: `يتكون الاختبار الرسمي في ${getCountryName(cId)} من ${selectedCountry.totalOfficialQuestions} سؤالاً، تغطي إشارات المرور وقواعد الأولوية. يجب عليك الإجابة على ${Math.ceil((selectedCountry.totalOfficialQuestions * selectedCountry.passingScorePercentage) / 100)} سؤالاً بشكل صحيح للنجاح.`,
        aEn: `The official exam in ${getCountryName(cId)} consists of ${selectedCountry.totalOfficialQuestions} questions. You must answer ${Math.ceil((selectedCountry.totalOfficialQuestions * selectedCountry.passingScorePercentage) / 100)} correctly to pass.`
      },
      {
        qAr: `هل يمكنني مراجعة إجابات الخبراء والشروحات القانونية؟`,
        qEn: `Can I review expert explanations and legal justifications?`,
        aAr: `بالتأكيد، عند استخدام "وضع التدريب الفوري"، ستظهر لك الإجابة الصحيحة فوراً مع شرح قانوني مفصل مستمد من المنهج الرسمي لـ ${getCountryName(cId)}، مما يساعدك على فهم القاعدة بدلاً من مجرد حفظ السؤال.`,
        aEn: `Absolutely, when using "Instant Practice Mode", the correct answer is shown immediately with a detailed legal explanation derived from ${getCountryName(cId)}'s official curriculum.`
      }
    ];

    const countrySpecific: Record<string, { qAr: string; qEn: string; aAr: string; aEn: string }[]> = {
      sa: [
        {
          qAr: 'كيف أحجز موعد اختبار القيادة في مدرسة دله؟',
          qEn: 'How to book a driving test appointment at Dallah School?',
          aAr: 'يتم الحجز عبر منصة "أبشر" أو تطبيق "توكلنا" من خلال خدمة حجز مواعد تدريب القيادة. ننصحك بإتمام كافة الاختبارات التجريبية هنا أولاً لضمان جاهزيتك لموعد دله الرسمي.',
          aEn: 'Booking is done via "Absher" or "Tawakkalna" apps. We recommend completing all mock tests here first to ensure you are ready for your official Dallah appointment.'
        },
        {
          qAr: 'ما هو "التقييم" قبل بدء التدريب في السعودية؟',
          qEn: 'What is the "Assessment" before training in Saudi Arabia?',
          aAr: 'هو فحص مهارة أولي يحدد عدد ساعات التدريب التي تحتاجها (6 أو 15 أو 30 ساعة). دراستك لإشارات المرور وقواعد الأولوية هنا ستساعدك في الحصول على أقل عدد ساعات تدريب ممكن.',
          aEn: 'It\'s an initial skill test that determines your training hours (6, 15, or 30). Studying signs and rules here helps you qualify for the minimum training hours.'
        }
      ],
      ae: [
        {
          qAr: 'ما هي أسئلة اختبار المعرفة من هيئة الطرق والمواصلات (RTA)؟',
          qEn: 'What are the RTA Knowledge Test questions?',
          aAr: 'يغطي اختبار RTA في دبي والإمارات الأخرى مفاهيم السلامة، إشارات المرور، وإدارة المخاطر. بنك أسئلتنا محدث ليشمل أحدث سيناريوهات RTA الخاصة بحوادث الطرق والتقاطعات الذكية.',
          aEn: 'RTA test in Dubai covers safety concepts, signs, and hazard management. Our bank is updated with latest RTA scenarios for road accidents and smart intersections.'
        },
        {
          qAr: 'هل يمكنني إجراء اختبار القيادة باللغة العربية في الإمارات؟',
          qEn: 'Can I take the driving test in Arabic in UAE?',
          aAr: 'نعم، اختبار RTA متوفر بلغات متعددة منها العربية والإنجليزية والأوردو. محاكي الاختبارات لدينا يدعم العربية والإنجليزية بشكل كامل لمساعدتك في التدرب على المصطلحات القانونية المستخدمة.',
          aEn: 'Yes, RTA tests are available in multiple languages. Our simulator fully supports Arabic and English to help you practice the legal terminology used in exams.'
        }
      ],
      eg: [
        {
          qAr: 'ما هي الأوراق المطلوبة لاستخراج رخصة قيادة خاصة في مصر؟',
          qEn: 'What documents are required for a private driving license in Egypt?',
          aAr: 'تحتاج إلى بطاقة الرقم القومي، 4 صور شخصية، شهادة طبية (نظر وباطنة)، وشهادة محو الأمية أو مؤهل دراسي. بعد استيفاء الأوراق، ستمتحن "إشارات المرور" أولاً على الكمبيوتر، وهي نفس الأسئلة المتوفرة في محاكي موقعنا.',
          aEn: 'You need ID card, 4 photos, medical certificate, and education degree. You will first take the "Traffic Signs" computer test, which uses the same questions found in our simulator.'
        },
        {
          qAr: 'هل هناك أسئلة عن "الميكانيكا" في اختبار المرور المصري؟',
          qEn: 'Are there mechanics questions in Egypt traffic test?',
          aAr: 'نعم، يشمل الاختبار بعض الأسئلة الأساسية عن صيانة السيارة والإسعافات الأولية. لقد قمنا بتضمين هذه الأسئلة في بنك أسئلة جمهورية مصر العربية لضمان تغطية شاملة بنسبة 100%.',
          aEn: 'Yes, the test includes basic car maintenance and first aid questions. We included these in Egypt\'s question bank for 100% coverage.'
        }
      ],
      kw: [
        {
          qAr: 'كيف أحجز موعد فحص فني وقيادة في الكويت؟',
          qEn: 'How to book a driving test in Kuwait?',
          aAr: 'يتم الحجز عبر الموقع الرسمي لوزارة الداخلية (MOI). اختبار الإشارات في الكويت يتميز بالدقة، لذا ننصحك بالتركيز على قسم "إشارات المرور الكويتية" المتوفر في منصتنا.',
          aEn: 'Booking is via the MOI official website. Kuwait\'s signs test is very precise, so we recommend focusing on the "Kuwait Traffic Signs" section on our platform.'
        }
      ]
    };

    return [...(countrySpecific[cId] || []), ...common];
  };

  const currentFaqs = getCountryFaqs(selectedCountry.id);
  const [contentSearchQuery, setContentSearchQuery] = useState('');
  const [contentCategory, setContentCategory] = useState<CountryContentCategory>('all');

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

      {/* 1. Hero Section (Immersive Dark Command Center with Country Theme) */}
      <section className={`relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800/60`}>
        
        {/* Ambient background glows based on theme */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-60 pointer-events-none`} />
        <div className={`absolute top-0 left-0 w-96 h-96 ${theme.bg} rounded-full blur-[100px] pointer-events-none`} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6 text-right ltr:text-left">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.bg} border ${theme.border} ${theme.primary} text-xs font-bold backdrop-blur-md`}>
            <Sparkles className={`w-3.5 h-3.5 ${theme.primary}`} />
            <span>{t.heroBadge.replace('%year%', new Date().getFullYear().toString())}</span>
          </div>

          {/* Visual Localization Block */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-700/40 rounded-2xl px-4 py-2.5 shadow-lg backdrop-blur-sm">
              <span className="text-2xl leading-none" role="img" aria-label={getCountryName(selectedCountry.id)}>{selectedCountry.flag}</span>
              <span className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                <span>{t.heroSimulatorIn}</span>
                <span className={theme.primary}>{getCountryName(selectedCountry.id)}</span>
              </span>
            </div>

            {onNavigateGlobalHome && (
              <button
                onClick={onNavigateGlobalHome}
                id="change-country-hero-btn"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/50 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-md group backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
                <span>{isAr ? 'تغيير الدولة' : 'Change Country'}</span>
              </button>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            {t.heroPassTitle}<br className="hidden sm:inline" />
            <span className={`bg-gradient-to-l ${theme.primary.replace('text-', 'from-')} via-slate-100 to-white bg-clip-text text-transparent`}>
              {t.heroPassSub}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
            {t.heroDesc
              .replace('%country%', getCountryName(selectedCountry.id))
              .replace('%school%', getCountrySchool(selectedCountry.id))}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-start-full-test-btn"
              onClick={() => onStartTest('exam')}
              className={`${theme.btn} text-slate-950 text-sm sm:text-base font-black px-8 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-2.5 cursor-pointer group scale-100 hover:scale-105 active:scale-95`}
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
      <section className={`bg-gradient-to-b from-slate-900 to-slate-950 rounded-[2.5rem] border border-slate-800 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} rounded-full blur-[80px] opacity-20 pointer-events-none`} />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.bg} ${theme.primary} border ${theme.border} text-xs font-bold`}>
              <Compass className="w-3.5 h-3.5" />
              <span>{isAr ? `مستكشف محتوى دولة ${getCountryName(selectedCountry.id)}` : `${getCountryName(selectedCountry.id)} Content Explorer`}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              {isAr ? 'ابحث عن ما تريده في اختبارات وأنظمة القيادة' : 'Search Tests, Road Signs, Violations & Rules'}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {isAr
                ? 'ابحث فوراً بالاسم عن أي نموذج اختبار، إشارة مرورية، غرامة أو مخالفة، أو قاعدة أولوية'
                : 'Instantly search by keyword for any test simulator, road sign, violation fine, or driving rule'}
            </p>
          </div>

          <div className={`flex items-center gap-2 self-start md:self-auto text-xs font-black text-slate-100 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-700 shadow-lg`}>
            <span className="text-lg">{selectedCountry.flag}</span>
            <span>{getCountryName(selectedCountry.id)}</span>
            <span className="text-slate-600">|</span>
            <span className={theme.primary}>{selectedCountry.totalOfficialQuestions} {isAr ? 'سؤال' : 'Q'}</span>
          </div>
        </div>

        {/* Search Bar with Theme Accent */}
        <div className="relative group max-w-4xl">
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-2xl blur-md opacity-40 group-focus-within:opacity-100 transition-opacity`} />
          <div className={`relative flex items-center bg-slate-950 border border-slate-800 focus-within:${theme.border.replace('border-', 'border-')} focus-within:ring-1 focus-within:ring-${theme.accent}-500/30 rounded-2xl px-5 py-4 shadow-2xl transition-all`}>
            <Search className={`w-5 h-5 ${theme.primary} shrink-0 mx-2`} />
            <input
              type="text"
              value={contentSearchQuery}
              onChange={(e) => setContentSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? `🔍 اكتب ما تبحث عنه (مثال: اختبار شامل، قف، دوار، حزام الأمان، قطع الإشارة، سرعة، مطب...)`
                  : `🔍 Search (e.g. Full exam, Stop sign, Roundabout, Seatbelt, Red light, Speeding...)`
              }
              className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none font-bold"
              aria-label="Search country content"
            />
            {contentSearchQuery && (
              <button
                onClick={() => setContentSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white bg-slate-800 px-4 py-2 rounded-xl transition-colors font-black"
              >
                {isAr ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills with Theme */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-slate-500 font-bold ml-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isAr ? 'تصفية:' : 'Filter:'}</span>
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
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? `${theme.btn} text-slate-950 border-transparent shadow-lg`
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800'
                }`}
              >
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
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

          {/* Mode 1: Full Official Simulation (Themed) */}
          <div className={`p-6 rounded-2xl border-2 ${theme.border.replace('border-', 'border-')} ${theme.bg.replace('/10', '/20')} bg-gradient-to-br ${theme.gradient} shadow-lg ${theme.btn.split(' ')[2]} flex flex-col justify-between space-y-4 relative overflow-hidden group`}>
            <div className={`absolute -top-3 left-4 ${theme.btn.split(' ')[0]} text-slate-950 text-[10px] font-black px-3 py-1 rounded-full shadow-lg z-20`}>
              {t.modeOfficialBadge}
            </div>
            
            {/* Background design element */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${theme.bg} rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700`} />

            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl ${theme.btn.split(' ')[0]} text-slate-950 flex items-center justify-center shadow-xl mb-4 transform group-hover:rotate-6 transition-transform`}>
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-100 mb-2">
                {t.modeOfficialTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {t.modeOfficialDesc.replace('%count%', selectedCountry.totalOfficialQuestions.toString()).replace('%time%', selectedCountry.timeLimitMinutes.toString())}
              </p>
              <div className="flex items-center gap-4 text-xs font-black">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400">{selectedCountry.timeLimitMinutes} {t.minutesUnit}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Target className={`w-4 h-4 ${theme.primary}`} />
                  <span className={theme.primary}>{t.passingScoreLabel} {selectedCountry.passingScorePercentage}%</span>
                </span>
              </div>
            </div>
            <button
              id="start-official-mode-btn"
              onClick={() => onStartTest('exam')}
              className={`relative z-10 w-full py-3.5 px-4 ${theme.btn} text-slate-950 rounded-xl text-xs font-black shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:translate-y-[-2px]`}
            >
              <span>{t.modeOfficialBtn}</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
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

      {/* 5. How to guarantee passing (Themed Steps) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-100">
          {t.stepsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 1, title: t.step1Title, desc: t.step1Desc },
            { id: 2, title: t.step2Title, desc: t.step2Desc },
            { id: 3, title: t.step3Title, desc: t.step3Desc },
            { id: 4, title: t.step4Title, desc: t.step4Desc },
          ].map((step) => (
            <div key={step.id} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md space-y-3 hover:border-slate-700 transition-all group">
              <div className={`w-10 h-10 rounded-xl ${theme.bg} ${theme.primary} font-black text-sm flex items-center justify-center border ${theme.border} group-hover:scale-110 transition-transform shadow-lg`}>
                {step.id}
              </div>
              <h3 className="text-sm font-bold text-slate-100">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
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

      {/* 6. Frequently Asked Questions (Customized to Country Trends) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center ${theme.primary}`}>
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              {t.faqTitle}
            </h2>
            <p className="text-xs text-slate-400">
              {isAr ? `أكثر ما يبحث عنه المتقدمون لاختبارات القيادة في ${getCountryName(selectedCountry.id)} لعام 2026` : `Top search queries for driving tests in ${getCountryName(selectedCountry.id)} 2026`}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {currentFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? `bg-slate-900/80 ${theme.border} shadow-xl shadow-black/20` 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-right ltr:text-left focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? theme.primary : 'text-slate-200 group-hover:text-white'}`}>
                    {isAr ? faq.qAr : faq.qEn}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? `rotate-180 ${theme.primary}` : 'text-slate-500'}`} />
                </button>
                <div 
                  className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-80 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                    <p className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/40">
                      {isAr ? faq.aAr : faq.aEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
