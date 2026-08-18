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
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, CountryInfo, TestMode } from '../types';
import { TrafficSignSvg } from './TrafficSignSvg';
import { AdBanner } from './AdBanner';

interface TestResultsProps {
  country: CountryInfo;
  mode: TestMode;
  questions: Question[];
  userAnswers: Record<string, string>;
  flaggedQuestionIds: string[];
  timeSpentSeconds: number;
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
  onRetakeFullTest,
  onRetakeWrongOnly,
  onBackToHome,
}) => {
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'flagged'>('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [userName, setUserName] = useState('سائق المستقبل');
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

  // Trigger celebration confetti on mount if passed
  useEffect(() => {
    if (passed) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#22c55e', '#60a5fa', '#34d399', '#fbbf24'],
      });
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
    return `${mins} دقيقة و ${secs} ثانية`;
  };

  const avgSecondsPerQuestion = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  // Social Share
  const handleShareWhatsApp = () => {
    const text = `🎉 حققت نتيجة ${scorePercentage}% (${passed ? 'ناجح ✅' : 'تدريب 🚗'}) في محاكي اختبار القيادة النظري المعتمد لـ ${country.name} على منصة اجتياز!\nجرب اختبارك الآن مجاناً: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(
      `حصلت على ${scorePercentage}% في اختبار قيادة ${country.name} على منصة اجتياز: ${window.location.href}`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrintCertificate = () => {
    window.print();
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
              {passed ? 'مبروك! لقد اجتزت الاختبار بنجاح' : 'تحتاج لمزيد من التدريب لاجتياز الاختبار'}
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300">
              {passed
                ? `أداؤك متميز وتجاوزت نسبة النجاح المطلوبة (${country.passingScorePercentage}%) المعتمدة رسمياً.`
                : `نسبة النجاح المطلوبة هي ${country.passingScorePercentage}%. راجع الأسئلة الخاطئة وأعد المحاولة.`}
            </p>
          </div>

          {/* Score Gauge */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-inner grid grid-cols-3 gap-3 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-mono text-blue-400">
                {scorePercentage}%
              </div>
              <div className="text-[11px] text-slate-400 font-bold">النسبة المئوية</div>
            </div>

            <div className="space-y-1 border-x border-slate-700">
              <div className="text-3xl sm:text-4xl font-black font-mono text-green-400">
                {correctCount}/{totalQuestions}
              </div>
              <div className="text-[11px] text-slate-400 font-bold">الإجابات الصحيحة</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-mono text-red-400">
                {totalQuestions - correctCount}
              </div>
              <div className="text-[11px] text-slate-400 font-bold">الإجابات الخاطئة</div>
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
              <span>مشاركة النتيجة وإصدار الشهادة</span>
            </button>

            <button
              id="retake-full-test-btn"
              onClick={onRetakeFullTest}
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار بنموذج جديد</span>
            </button>

            {wrongQuestions.length > 0 && (
              <button
                id="retake-wrong-only-btn"
                onClick={() => onRetakeWrongOnly(wrongQuestions)}
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>إعادة حل الأسئلة الخاطئة فقط ({wrongQuestions.length})</span>
              </button>
            )}

            <button
              onClick={onBackToHome}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>الرئيسية</span>
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
            <span>تحليل الوقت وسرعة الاستجابة</span>
          </h3>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="text-xs font-semibold text-slate-400">إجمالي الوقت المستغرق</div>
              <div className="text-base font-black text-slate-100">{formatTime(timeSpentSeconds)}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="text-xs font-semibold text-slate-400">متوسط الوقت لكل سؤال</div>
              <div className="text-base font-black text-slate-100">{avgSecondsPerQuestion} ثانية</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 leading-relaxed font-medium">
            {avgSecondsPerQuestion < 35
              ? '⚡ سرعة إجابتك ممتازة جداً وتمنحك وقتاً كافياً لمراجعة الأسئلة في قاعة الفحص.'
              : '💡 يُفضل التدريب على سرعة قراءة السؤال لتفادي انتهاء وقت الامتحان الرسمي.'}
          </div>
        </div>

        {/* Categories Performance Breakdown */}
        <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 shadow-xl space-y-4">
          <h3 className="text-base font-black text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span>أداؤك حسب الأقسام والمواضيع</span>
          </h3>

          <div className="space-y-3 pt-1">
            {Object.entries(categoryStats).map(([catKey, data]) => {
              const catPercent = Math.round((data.correct / data.total) * 100);
              return (
                <div key={catKey} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>{data.name}</span>
                    <span className="font-mono text-slate-400">
                      {data.correct} من {data.total} ({catPercent}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        catPercent >= 80
                          ? 'bg-green-500 shadow-sm shadow-green-500/50'
                          : catPercent >= 60
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Detailed Question Review Section */}
      <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>مراجعة الأسئلة وتوضيح الإجابات</span>
            </h2>
            <p className="text-xs text-slate-400">
              استعرض إجاباتك مع التفسير الكامل وتبرير كل قاعدة مرورية
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
              الكل ({totalQuestions})
            </button>

            <button
              onClick={() => setReviewFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'wrong'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              الخاطئة فقط ({wrongQuestions.length})
            </button>

            <button
              onClick={() => setReviewFilter('flagged')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                reviewFilter === 'flagged'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              المميزة ({flaggedQuestionIds.length})
            </button>
          </div>
        </div>

        {/* Review Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              لا توجد أسئلة تطابق هذا التصنيف.
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
                        السؤال {questions.findIndex((item) => item.id === q.id) + 1}
                      </span>
                      <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-medium border border-slate-700">
                        {q.categoryName}
                      </span>
                    </div>

                    {isFlagged && (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-500/30">
                        <Bookmark className="w-3 h-3 fill-amber-400" />
                        مميز بنجمة
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
                                الإجابة الصحيحة
                              </span>
                            )}
                            {isUserChoice && !isCorrect && (
                              <span className="text-red-400 flex items-center gap-1">
                                <XCircle className="w-3.5 h-3.5" />
                                اختيارك الخاطئ
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
                      <span>التفسير والشرح:</span>
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
                <span>شهادة وبطاقة نتيجة الاختبار (قابلة للمشاركة)</span>
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
              <label className="text-xs font-bold text-slate-300">اكتب اسمك ليظهر على الشهادة:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="اسمك الكامل"
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
                  شهادة إنجاز محاكاة اختبار القيادة
                </div>
                <h4 className="text-xl font-black text-white">منصة اجتياز الذكية</h4>
              </div>

              <div className="py-2 space-y-1 border-y border-white/10">
                <div className="text-xs text-slate-300">تشهد المنصة بأن المتدرب:</div>
                <div className="text-lg font-black text-blue-300">{userName || 'سائق المستقبل'}</div>
                <div className="text-xs text-slate-300">
                  قد أتم بنجاح محاكاة اختبار القيادة النظري لـ <strong>{country.name}</strong>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <div>
                  <div className="text-xs text-slate-400">النتيجة</div>
                  <div className="text-base font-black text-blue-400">{scorePercentage}%</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-xs text-slate-400">الحالة</div>
                  <div className="text-xs font-bold text-white mt-1">
                    {passed ? 'ناجح معتمد ✅' : 'مكتمل 🚗'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">التاريخ</div>
                  <div className="text-xs font-bold text-slate-200 mt-1">
                    {new Date().toLocaleDateString('ar-SA')}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>كود التحقق: IJT-{Math.floor(100000 + Math.random() * 900000)}</span>
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
                <span>مشاركة فورية عبر واتساب (WhatsApp)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'تم نسخ الرابط!' : 'نسخ رابط النتيجة'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintCertificate}
                  className="py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة أو حفظ PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
