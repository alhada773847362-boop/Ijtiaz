import React from 'react';
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
  Navigation
} from 'lucide-react';
import { CountryInfo, TestMode } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { AdBanner } from './AdBanner';
import { TrafficSignSvg } from './TrafficSignSvg';

interface LandingViewProps {
  selectedCountry: CountryInfo;
  onSelectCountry: (country: CountryInfo) => void;
  onStartTest: (mode: TestMode, customQuestionsCount?: number) => void;
  onNavigateToSigns: () => void;
  onNavigateToViolations: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  selectedCountry,
  onSelectCountry,
  onStartTest,
  onNavigateToSigns,
  onNavigateToViolations,
}) => {
  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Strategic Ad Placement (CLS-safe) */}
      <AdBanner slotType="leaderboard" adId="ad-top-hero" className="max-w-5xl" />

      {/* 1. Hero Section (Immersive Dark Command Center) */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1E293B] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-700/60">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6 text-right">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>المنصة المعتمدة لمحاكاة اختبار القيادة النظري لعام {new Date().getFullYear()}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
            اجتياز اختبار رخصة القيادة <br className="hidden sm:inline" />
            <span className="bg-gradient-to-l from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              من المحاولة الأولى بكل ثقة
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
            تدرّب الآن على أحدث نماذج اختبارات الحاسب الآلي الرسمية المعتمدة في <strong className="text-white underline decoration-blue-500 underline-offset-4">{selectedCountry.name}</strong> ({selectedCountry.popularSchool}) مع مؤقت حقيقي وتصحيح فوري وشرح تفصيلي لكافة الإشارات وقواعد السير.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-start-full-test-btn"
              onClick={() => onStartTest('exam')}
              className="bg-blue-600 hover:bg-blue-500 active:scale-98 text-white text-sm sm:text-base font-black px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>ابدأ الاختبار التجريبي الكامل الآن ({selectedCountry.totalOfficialQuestions} سؤال)</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-signs-guide-btn"
              onClick={onNavigateToSigns}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs sm:text-sm font-bold px-5 py-3.5 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>استعراض دليل الإشارات</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-700/60 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
              <span>نسبة اجتياز تصل إلى 96.8%</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>مؤقت زمني يماثل قاعة الفحص</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>مطابق لأنظمة المرور الرسمية</span>
            </div>
          </div>

        </div>

        {/* Floating Visual Traffic Signs */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 p-4 rounded-3xl bg-[#0F172A]/80 border border-slate-700 shadow-2xl backdrop-blur-md">
          <div className="text-[11px] font-bold text-slate-400 mb-1">نماذج الإشارات</div>
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

      {/* 2. Country Selector Grid (Hyper-Localized) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
              <span>اختر دولتك لتخصيص أسئلة ونظام الفحص</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              يتم ضبط عدد الأسئلة ونسبة النجاح واللوحات حسب نظام الفحص المعتمد في الدولة المحددة.
            </p>
          </div>
          <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/20 self-start">
            الدولة المختارة: {selectedCountry.name} {selectedCountry.flag}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {COUNTRIES_LIST.map((country) => {
            const isSelected = selectedCountry.id === country.id;
            return (
              <div
                key={country.id}
                id={`country-card-${country.id}`}
                onClick={() => onSelectCountry(country)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'border-blue-500 bg-blue-600/15 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/30'
                    : 'border-slate-700/80 bg-[#1E293B] hover:border-slate-600 hover:bg-slate-800/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">
                  {country.flag}
                </div>
                <h3 className="text-sm font-bold text-slate-100 leading-tight mb-1">
                  {country.name}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 mb-2">
                  {country.popularSchool}
                </p>
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 border-t border-slate-700/60 pt-2">
                  <span>{country.totalOfficialQuestions} سؤالاً</span>
                  <span className="text-blue-300 bg-blue-500/20 border border-blue-500/30 px-1.5 py-0.5 rounded">نجاح {country.passingScorePercentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Mid-Landing AdBanner */}
      <AdBanner slotType="rectangle" adId="mid-landing-rectangle-ad" />

      {/* 3. Interactive Test Modes (The Test Launcher) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100">
              أوضاع التدريب والاختبارات المتاحة
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              اختر الوضع الأنسب لاحتياجاتك التدريبية اليوم
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
              المحاكاة الرسمية
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-100 mb-1">
                الاختبار الرسمي الكامل (محاكاة رسمية)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                محاكاة مطابقة 100% لاختبار الحاسب الآلي في مدارس المرور، تتضمن {selectedCountry.totalOfficialQuestions} سؤالاً شاملاً مع مؤقت {selectedCountry.timeLimitMinutes} دقيقة.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold">{selectedCountry.timeLimitMinutes} دقيقة</span>
                </span>
                <span className="flex items-center gap-1">
                  <Target className="w-3.5 h-3.5 text-blue-400" />
                  <span>نسبة النجاح {selectedCountry.passingScorePercentage}%</span>
                </span>
              </div>
            </div>
            <button
              id="start-official-mode-btn"
              onClick={() => onStartTest('exam')}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>بدء الاختبار الرسمي</span>
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
                وضع التدريب التفاعلي (تصحيح فوري)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                تدرّب بدون ضغط الوقت واكتشف الإجابة الصحيحة مع شرح مفصل وتبرير القاعدة المرورية فور اختيارك لكل إجابة.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-teal-300 bg-teal-500/20 border border-teal-500/30 px-2 py-0.5 rounded">
                  موصى به للمبتدئين
                </span>
              </div>
            </div>
            <button
              id="start-practice-mode-btn"
              onClick={() => onStartTest('practice')}
              className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>بدء وضع التدريب الفوري</span>
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
                اختبار إشارات المرور فقط
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                جلسة مكثفة تركز بنسبة 100% على اللوحات التحذيرية والمنعية والإلزامية والإرشادية لتثبيت حفظها وإتقانها.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                  جميع الإشارات
                </span>
              </div>
            </div>
            <button
              id="start-signs-only-mode-btn"
              onClick={() => onStartTest('signs_only')}
              className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 active:scale-98 text-slate-950 font-black rounded-xl text-xs shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>بدء اختبار الإشارات</span>
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
                أولويات المرور والتقاطعات والدوارات
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                أسئلة مواقف ومخططات مرورية واقعية لتحديد حق الأسبقية والمركبة الأولى بالعبور في التقاطعات المعقدة.
              </p>
            </div>
            <button
              id="start-priority-mode-btn"
              onClick={() => onStartTest('priority_only')}
              className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>بدء اختبار الأولويات</span>
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
                اختبار سريع (10 أسئلة خاطفة)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                مثالي للتدريب في أوقات الفراغ أو المواصلات، اختبار خفيف مكون من 10 أسئلة لتقييم مستواك في 5 دقائق.
              </p>
            </div>
            <button
              id="start-quick-10-mode-btn"
              onClick={() => onStartTest('quick_10', 10)}
              className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>بدء الاختبار السريع</span>
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
                أصعب الأسئلة (الأكثر تكراراً بالرسوب)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                مجموعة منتقاة من الأسئلة الدقيقة والمخادعة التي يخطئ فيها معظم المتقدمين لاختبارات القيادة الرسمية.
              </p>
            </div>
            <button
              id="start-hard-mode-btn"
              onClick={() => onStartTest('hard_questions')}
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 active:scale-98 text-white rounded-xl text-xs font-black shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>تحدي الأسئلة الصعبة</span>
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
            أرقام وإحصائيات منصة اجتياز
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            ساعدنا آلاف السائقين الجدد في تحقيق النجاح والحصول على رخصة القيادة من أول محاولة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">
              +185,000
            </div>
            <div className="text-xs font-bold text-slate-300">اختبار تجريبي تم إنجازه</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-green-400 mb-1">
              96.8%
            </div>
            <div className="text-xs font-bold text-slate-300">نسبة نجاح مستخدمي المنصة</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">
              +1,400
            </div>
            <div className="text-xs font-bold text-slate-300">سؤال وإشارة مرورية محدثة</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mb-1">
              7 دول
            </div>
            <div className="text-xs font-bold text-slate-300">نماذج فحص رسمية معتمدة</div>
          </div>
        </div>
      </section>

      {/* 5. How to guarantee passing (4 Steps) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-100">
          خطة 4 خطوات لضمان النجاح من المرة الأولى
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              1
            </div>
            <h3 className="text-sm font-bold text-slate-100">مراجعة دليل الإشارات</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              اطّلع على دليل الإشارات وصنفها حسب اللون والشكل (المثلث للتحذير، الدائرة الحمراء للمنع، الدائرة الزرقاء للإلزام).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              2
            </div>
            <h3 className="text-sm font-bold text-slate-100">التدريب بوضع التصحيح الفوري</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              ابدأ بالوضع التفاعلي لفهم أسباب الإجابات الخاطئة وقراءة التبرير القانوني لكل سؤال.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              3
            </div>
            <h3 className="text-sm font-bold text-slate-100">خوض المحاكاة الرسمية</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              أجرِ 3 اختبارات محاكاة متتالية مع المؤقت الزمني حتى تحقق نسبة أعلى من 90% باستمرار.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E293B] border border-slate-700/80 shadow-md space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-black text-sm flex items-center justify-center border border-blue-500/30">
              4
            </div>
            <h3 className="text-sm font-bold text-slate-100">الذهاب للاختبار بثقة</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              ستجد في قاعة الفحص نفس الأسئلة والإشارات التي تدربت عليها هنا تماماً، مما يضمن اجتيازك بكل سهولة.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
