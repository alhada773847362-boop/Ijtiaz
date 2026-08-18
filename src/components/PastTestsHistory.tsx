import React from 'react';
import { History, Award, Trash2, RotateCcw, CheckCircle2, XCircle, ArrowLeft, Clock } from 'lucide-react';
import { TestHistoryItem } from '../types';
import { AdBanner } from './AdBanner';

interface PastTestsHistoryProps {
  history: TestHistoryItem[];
  onClearHistory: () => void;
  onStartNewTest: () => void;
}

export const PastTestsHistory: React.FC<PastTestsHistoryProps> = ({
  history,
  onClearHistory,
  onStartNewTest,
}) => {
  const totalTaken = history.length;
  const passedCount = history.filter((h) => h.passed).length;
  const avgScore = totalTaken > 0 ? Math.round(history.reduce((acc, cur) => acc + cur.percentage, 0) / totalTaken) : 0;
  const bestScore = totalTaken > 0 ? Math.max(...history.map((h) => h.percentage)) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Header */}
      <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
            <History className="w-3.5 h-3.5" />
            <span>سجل الأداء الشخصي</span>
          </div>

          {totalTaken > 0 && (
            <button
              type="button"
              onClick={onClearHistory}
              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer p-1.5 rounded-lg hover:bg-red-950/30 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>مسح السجل</span>
            </button>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
          سجل اختباراتي ونتائج التدريب السابقة
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          تتبع منحنى تقدمك ومعدل درجاتك مع كل جلسة تدريبية للتأكد من جاهزيتك التامة للاختبار الفعلي.
        </p>

        {/* Aggregate Stats Cards */}
        {totalTaken > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
              <div className="text-2xl font-black text-slate-100 font-mono">{totalTaken}</div>
              <div className="text-[11px] font-bold text-slate-400">إجمالي الاختبارات</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
              <div className="text-2xl font-black text-green-400 font-mono">{passedCount}</div>
              <div className="text-[11px] font-bold text-slate-400">الاختبارات المجتازة</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
              <div className="text-2xl font-black text-blue-400 font-mono">{avgScore}%</div>
              <div className="text-[11px] font-bold text-slate-400">متوسط الدرجات</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
              <div className="text-2xl font-black text-amber-400 font-mono">{bestScore}%</div>
              <div className="text-[11px] font-bold text-slate-400">أعلى نتيجة محققة</div>
            </div>
          </div>
        )}
      </div>

      {/* History Items List */}
      <div className="space-y-3">
        {totalTaken === 0 ? (
          <div className="bg-[#1E293B] rounded-3xl border border-slate-700 p-12 text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center mx-auto text-3xl">
              📋
            </div>
            <h3 className="text-base font-bold text-slate-100">لا توجد اختبارات مسجلة بعد</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              ابدأ أول اختبار تجريبي الآن لتسجيل نتائجك ومتابعة مستواك بمرور الوقت.
            </p>
            <button
              type="button"
              onClick={onStartNewTest}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>بدء أول اختبار تجريبي</span>
            </button>
          </div>
        ) : (
          history.map((item) => (
            <div
              key={item.id}
              className="bg-[#1E293B] rounded-2xl border border-slate-700/80 p-4 sm:p-5 shadow-md flex items-center justify-between gap-4 hover:border-slate-600 transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center shrink-0 ${
                    item.passed ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {item.passed ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-100">{item.countryName}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded">
                      {item.modeTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{Math.round(item.timeSpentSeconds / 60)} دقيقة</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-left">
                  <div
                    className={`text-lg font-black font-mono ${
                      item.passed ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {item.percentage}%
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {item.score} من {item.totalQuestions}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Strategic Ad Banner */}
      <AdBanner slotType="in_test" adId="ad-history-bottom" />

    </div>
  );
};
