import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Share2, 
  Home, 
  Clock, 
  Target, 
  AlertTriangle, 
  Sparkles, 
  BookOpen, 
  Bookmark, 
  Copy, 
  Check, 
  Info,
  Printer,
  Download,
  PieChart as PieChartIcon,
  BarChart3
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import confetti from 'canvas-confetti';
import { Question, CountryInfo, TestMode, AppLocale } from '../types';
import { TrafficSignSvg } from './TrafficSignSvg';
import { AdBanner } from './AdBanner';
import { TRANSLATIONS, getTranslation } from '../data/translations';
import { soundEffects } from '../utils/audioEffects';

interface TestResultsProps {
  country: CountryInfo;
  mode: TestMode;
  questions: Question[];
  userAnswers: Record<string, string>;
  flaggedQuestionIds: string[];
  timeSpentSeconds: number;
  locale?: AppLocale;
  onRetakeFullTest: () => void;
  onRetakeWrongOnly: (wrongQuestions: Question[]) => void;
  onBackToHome: () => void;
}

export const TestResults: React.FC<TestResultsProps> = ({
  country,
  mode,
  questions,
  userAnswers,
  flaggedQuestionIds,
  timeSpentSeconds,
  locale = 'ar',
  onRetakeFullTest,
  onRetakeWrongOnly,
  onBackToHome,
}) => {
  const currentLocale = locale || 'ar';
  const t = getTranslation(currentLocale);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'flagged'>('all');
  const [chartType, setChartType] = useState<'pie' | 'bar'>('pie');
  const [showShareModal, setShowShareModal] = useState(false);
  const [userName, setUserName] = useState(t.futureDriver || (currentLocale === 'en' ? 'Future Driver' : 'سائق المستقبل'));
  const [copiedLink, setCopiedLink] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  // Compute stats
  let correctCount = 0;
  const wrongQuestions: Question[] = [];

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans === q.correctOptionId) {
      correctCount++;
    } else {
      wrongQuestions.push(q);
    }
  });

  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = scorePercentage >= country.passingScorePercentage;

  // Trigger celebration confetti & victory fanfare on mount if passed
  useEffect(() => {
    if (passed) {
      soundEffects.playVictory();
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#22c55e', '#60a5fa', '#34d399', '#fbbf24'],
      });
    } else {
      soundEffects.playWrong();
    }
  }, [passed]);

  // Category breakdown calculation
  const categoryStats: Record<string, { total: number; correct: number; name: string }> = {};
  questions.forEach((q) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0, name: q.categoryName };
    }
    categoryStats[q.category].total++;
    if (userAnswers[q.id] === q.correctOptionId) {
      categoryStats[q.category].correct++;
    }
  });

  const CHART_COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#ec4899'];

  const categoryChartData = Object.entries(categoryStats).map(([catKey, data], idx) => {
    const percentage = Math.round((data.correct / data.total) * 100);
    return {
      name: data.name,
      correct: data.correct,
      wrong: data.total - data.correct,
      total: data.total,
      percentage,
      fill: CHART_COLORS[idx % CHART_COLORS.length],
    };
  });

  // Filtered review list
  const filteredQuestions = questions.filter((q) => {
    const isCorrect = userAnswers[q.id] === q.correctOptionId;
    if (reviewFilter === 'wrong') return !isCorrect;
    if (reviewFilter === 'flagged') return flaggedQuestionIds.includes(q.id);
    return true;
  });

  // Format time MM:SS
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return t.minutesAndSeconds.replace('%mins%', String(mins)).replace('%secs%', String(secs));
  };

  const avgSecondsPerQuestion = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  // Social Share
  const handleShareWhatsApp = () => {
    const passedLabel = passed ? (locale === 'ar' ? 'ناجح ✅' : 'Passed ✅') : (locale === 'ar' ? 'تدريب 🚗' : 'Practice 🚗');
    const text = locale === 'ar' 
      ? `🎉 حققت نتيجة ${scorePercentage}% (${passedLabel}) في محاكي اختبار القيادة النظري المعتمد لـ ${country.name} على منصة اجتياز!\nجرب اختبارك الآن مجاناً: ${window.location.href}`
      : `🎉 I scored ${scorePercentage}% (${passedLabel}) on the ${country.name} Driving Theory Simulator at Ijtiaz!\nTry it yourself: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyShareLink = () => {
    const text = locale === 'ar'
      ? `حصلت على ${scorePercentage}% في اختبار قيادة ${country.name} على منصة اجتياز: ${window.location.href}`
      : `I scored ${scorePercentage}% on the ${country.name} Driving Test at Ijtiaz: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  // Download high-resolution certificate as PNG image
  const handleDownloadCertificateImage = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 760;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Dark Luxury Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 760);
      bgGrad.addColorStop(0, '#0B1120');
      bgGrad.addColorStop(0.5, '#1E293B');
      bgGrad.addColorStop(1, '#0F172A');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 760);

      // Gold / Blue Outer Border
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 8;
      ctx.strokeRect(30, 30, 1140, 700);

      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2;
      ctx.strokeRect(42, 42, 1116, 676);

      // Certificate Header
      ctx.textAlign = 'center';
      ctx.fillStyle = '#60A5FA';
      ctx.font = 'bold 22px Tajawal, sans-serif';
      ctx.fillText(locale === 'en' ? 'OFFICIAL CERTIFICATE OF ACHIEVEMENT' : 'شهادة اجتياز اختبار القيادة النظري المعتمدة', 600, 110);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px Tajawal, sans-serif';
      ctx.fillText(locale === 'en' ? 'IJTIAS DRIVING SIMULATION PLATFORM' : 'منصة اجتياز لاختبارات رخص القيادة 2026', 600, 170);

      // Gold Decorative Divider
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(350, 210);
      ctx.lineTo(850, 210);
      ctx.stroke();

      // Student Name Label
      ctx.fillStyle = '#94A3B8';
      ctx.font = '20px Tajawal, sans-serif';
      ctx.fillText(locale === 'en' ? 'This is proudly presented to:' : 'تشهد المنصة بأن المتدرب(ـة):', 600, 265);

      // Student Name
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 44px Tajawal, sans-serif';
      ctx.fillText(userName || (locale === 'en' ? 'Future Driver' : 'سائق المستقبل'), 600, 330);

      // Country and Exam Text
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '22px Tajawal, sans-serif';
      const examText = locale === 'en'
        ? `Successfully completed the theory driving exam for ${country.name} (${country.popularSchool})`
        : `قد أتم بنجاح اختبار محاكاة رخصة القيادة النظري لـ ${country.name} (${country.popularSchool})`;
      ctx.fillText(examText, 600, 395);

      // Score Badge Box
      ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(430, 445, 340, 120, 20);
      ctx.fill();
      ctx.stroke();

      // Score inside box
      ctx.fillStyle = '#22C55E';
      ctx.font = 'bold 46px monospace';
      ctx.fillText(`${scorePercentage}%`, 600, 505);

      ctx.fillStyle = '#E2E8F0';
      ctx.font = 'bold 20px Tajawal, sans-serif';
      ctx.fillText(passed ? (locale === 'en' ? 'RESULT: PASSED ★★★' : 'النتيجة: اجتياز بتفوق ★★★') : (locale === 'en' ? 'RESULT: COMPLETED' : 'النتيجة: تم التدريب بنجاح'), 600, 545);

      // Footer Meta
      ctx.fillStyle = '#64748B';
      ctx.font = '16px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`SERIAL: IJT-${Math.floor(100000 + Math.random() * 900000)}`, 70, 675);

      ctx.textAlign = 'right';
      const dateStr = new Date().toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US');
      ctx.fillText(`DATE: ${dateStr} | ijtiaz.vercel.app`, 1130, 675);

      // Trigger download
      const link = document.createElement('a');
      link.download = `ijtiaz-certificate-${country.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('Error generating certificate image:', e);
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Evaluation Console Card */}
      <div
        className={`rounded-3xl border p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl ${
          passed
            ? 'bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0B1120] text-white border-green-500/40'
            : 'bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0B1120] text-white border-red-500/40'
        }`}
      >
        {/* Background glow */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none ${
            passed ? 'bg-green-500' : 'bg-red-500'
          }`}
        />

        <div className="relative z-10 space-y-6 max-w-xl mx-auto">
          
          {/* Animated Badge & Verdict */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800 border border-slate-700">
            <span>{country.flag}</span>
            <span className="text-slate-200">{country.name} - {country.popularSchool}</span>
          </div>

          <div className="space-y-2">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-2xl border-2 border-slate-700 bg-slate-800">
              {passed ? '🏆' : '📚'}
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black">
              {passed ? t.passTitle : t.failTitle}
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300">
              {passed
                ? t.passDesc.replace('%score%', String(country.passingScorePercentage))
                : t.failDesc.replace('%score%', String(country.passingScorePercentage))}
            </p>
          </div>

          {/* Score Gauge */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-inner grid grid-cols-3 gap-3 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-mono text-blue-400">
                {scorePercentage}%
              </div>
              <div className="text-[11px] text-slate-400 font-bold">{t.scoreLabel}</div>
            </div>

            <div className="space-y-1 border-x border-slate-700">
              <div className="text-3xl sm:text-4xl font-black font-mono text-green-400">
                {correctCount}/{totalQuestions}
              </div>
              <div className="text-[11px] text-slate-400 font-bold">{t.correctLabel}</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-mono text-red-400">
                {totalQuestions - correctCount}
              </div>
              <div className="text-[11px] text-slate-400 font-bold">{t.wrongLabel}</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            
            <button
              id="share-results-modal-btn"
              onClick={() => setShowShareModal(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-black px-6 py-3 rounded-2xl shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.shareResults}</span>
            </button>

            <button
              id="retake-full-test-btn"
              onClick={onRetakeFullTest}
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.retakeFull}</span>
            </button>

            {wrongQuestions.length > 0 && (
              <button
                id="retake-wrong-only-btn"
                onClick={() => onRetakeWrongOnly(wrongQuestions)}
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>{t.retakeWrong.replace('%count%', String(wrongQuestions.length))}</span>
              </button>
            )}

            <button
              onClick={onBackToHome}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{t.home}</span>
            </button>

          </div>

        </div>
      </div>

      {/* Strategic Result Leaderboard Ad Placement */}
      <AdBanner slotType="leaderboard" adId="ad-results-page" />

      {/* Analytics & Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Time & Speed Metrics */}
        <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 shadow-xl space-y-4">
          <h3 className="text-base font-black text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <span>{t.timeAnalysis}</span>
          </h3>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="text-xs font-semibold text-slate-400">{t.totalTime}</div>
              <div className="text-base font-black text-slate-100">{formatTime(timeSpentSeconds)}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="text-xs font-semibold text-slate-400">{t.avgTimePerQuestion}</div>
              <div className="text-base font-black text-slate-100">{avgSecondsPerQuestion} {t.seconds}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 leading-relaxed font-medium">
            {avgSecondsPerQuestion < 35
              ? t.fastTimeFeedback
              : t.slowTimeFeedback}
          </div>
        </div>

        {/* Categories Performance Chart & Breakdown */}
        <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
            <h3 className="text-base font-black text-slate-100 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span>{t.performanceTitle}</span>
            </h3>

            {/* Chart Type Toggle Tabs */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setChartType('pie')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  chartType === 'pie'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <PieChartIcon className="w-3.5 h-3.5" />
                <span>{t.chartPie}</span>
              </button>

              <button
                type="button"
                onClick={() => setChartType('bar')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  chartType === 'bar'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{t.chartBar}</span>
              </button>
            </div>
          </div>

          {/* Recharts Chart View */}
          <div className="w-full h-52 sm:h-60 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'pie' ? (
                <PieChart>
                  <Pie
                    data={categoryChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="percentage"
                    nameKey="name"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke="#1E293B" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#F8FAFC',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                    }}
                    formatter={(value: any, name: any, item: any) => [
                      t.chartTooltip.replace('%value%', String(value)).replace('%correct%', String(item.payload.correct)).replace('%total%', String(item.payload.total)),
                      t.chartTarget,
                    ]}
                  />
                </PieChart>
              ) : (
                <BarChart data={categoryChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                    unit="%"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#F8FAFC',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                    formatter={(value: any) => [`${value}%`, t.chartTarget]}
                  />
                  <Bar dataKey="percentage" radius={[8, 8, 0, 0]}>
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`bar-cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Detailed Progress Bars */}
          <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
            {categoryChartData.map((data) => (
              <div key={data.name} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: data.fill }} />
                    <span>{data.name}</span>
                  </span>
                  <span className="font-mono text-slate-400">
                    {data.correct} {locale === 'ar' ? 'من' : 'of'} {data.total} ({data.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${data.percentage}%`, backgroundColor: data.fill }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Strategic Medium Rectangle banner on Results page */}
      <AdBanner slotType="rectangle" adId="results-review-rectangle-ad" />

      {/* Detailed Question Review Section */}
      <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>{t.reviewTitle}</span>
            </h2>
            <p className="text-xs text-slate-400">
              {t.reviewDesc}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.filterAll} ({totalQuestions})
            </button>

            <button
              onClick={() => setReviewFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'wrong'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.filterWrong} ({wrongQuestions.length})
            </button>

            <button
              onClick={() => setReviewFilter('flagged')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'flagged'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.filterFlagged} ({flaggedQuestionIds.length})
            </button>
          </div>
        </div>

        {/* Review Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              {t.noQuestionsFound}
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const userChoiceId = userAnswers[q.id];
              const isCorrect = userChoiceId === q.correctOptionId;
              const isFlagged = flaggedQuestionIds.includes(q.id);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all space-y-4 ${
                    isCorrect
                      ? 'border-slate-700 bg-slate-800/40'
                      : 'border-red-500/40 bg-red-950/20 ring-1 ring-red-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center text-white ${
                          isCorrect ? 'bg-green-600' : 'bg-red-600'
                        }`}
                      >
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {t.questionLabel} {questions.findIndex((item) => item.id === q.id) + 1}
                      </span>
                      <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-medium border border-slate-700">
                        {q.categoryName}
                      </span>
                    </div>

                    {isFlagged && (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-500/30">
                        <Bookmark className="w-3 h-3 fill-amber-400" />
                        {t.filterFlagged}
                      </span>
                    )}
                  </div>

                  {/* Visual Sign if attached */}
                  {q.signId && (
                    <div className="p-3 bg-white rounded-xl shadow-lg w-fit border border-slate-700">
                      <TrafficSignSvg signId={q.signId} size={70} />
                    </div>
                  )}

                  <h4 className="text-sm font-bold text-slate-100 leading-relaxed">
                    {q.questionText}
                  </h4>

                  {/* Options Review */}
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isUserChoice = userChoiceId === opt.id;
                      const isTheRightAnswer = opt.id === q.correctOptionId;

                      let optClass = 'border-slate-700 bg-slate-800/60 text-slate-300';

                      if (isTheRightAnswer) {
                        optClass = 'border-green-500 bg-green-900/30 text-green-200 font-bold';
                      } else if (isUserChoice && !isCorrect) {
                        optClass = 'border-red-500 bg-red-900/30 text-red-200 line-through';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${optClass}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-slate-700 border border-slate-600 text-slate-200 font-bold text-[10px] flex items-center justify-center shrink-0">
                              {opt.id}
                            </span>
                            <span>{opt.text}</span>
                          </div>

                          <div className="shrink-0 text-[10px] font-bold">
                            {isTheRightAnswer && (
                              <span className="text-green-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {t.correctAnswer}
                              </span>
                            )}
                            {isUserChoice && !isCorrect && (
                              <span className="text-red-400 flex items-center gap-1">
                                <XCircle className="w-3.5 h-3.5" />
                                {t.yourWrongAnswer}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Callout */}
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                    <div className="font-bold text-blue-400 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-blue-400" />
                      <span>{t.explanationLabel}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{q.explanation}</p>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Share Result & Certificate Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1E293B] border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-slate-100">
            
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>{t.certificateTitle}</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Custom Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">{t.nameOnCertificate}</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={t.fullNamePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Printable / Shareable Certificate Card */}
            <div
              ref={certificateRef}
              id="printable-certificate"
              className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white border-4 border-blue-500/40 shadow-2xl space-y-5 text-center relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 text-blue-400 text-xs font-mono opacity-50">★ IJTIAS-CERT ★</div>
              
              <div className="space-y-1 pt-2">
                <div className="text-xs text-blue-400 font-bold tracking-widest uppercase">
                  {t.certHeading}
                </div>
                <h4 className="text-xl font-black text-white">{t.certSubheading}</h4>
              </div>

              <div className="py-2 space-y-1 border-y border-white/10">
                <div className="text-xs text-slate-300">{t.certStudentLabel}</div>
                <div className="text-lg font-black text-blue-300">{userName || t.futureDriver}</div>
                <div className="text-xs text-slate-300">
                  {t.certSuccessDesc} <strong>{country.name}</strong>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <div>
                  <div className="text-xs text-slate-400">{t.certResult}</div>
                  <div className="text-base font-black text-blue-400">{scorePercentage}%</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-xs text-slate-400">{t.certStatus}</div>
                  <div className="text-xs font-bold text-white mt-1">
                    {passed ? t.certPassed : t.certCompleted}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">{t.certDate}</div>
                  <div className="text-xs font-bold text-slate-200 mt-1">
                    {new Date().toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>{t.certCode} IJT-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span>ijtiaz.app</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl text-xs font-black shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.shareWhatsApp}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleDownloadCertificateImage}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{locale === 'en' ? 'Download Image (PNG)' : 'تحميل كصورة (PNG)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintCertificate}
                  className="py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.printPDF}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyShareLink}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedLink ? t.linkCopied : t.copyResultLink}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
