import React, { useState } from 'react';
import { Sparkles, ExternalLink, Info, ShieldCheck } from 'lucide-react';

interface AdBannerProps {
  slotType: 'leaderboard' | 'in_test' | 'sidebar' | 'in_article';
  className?: string;
  adId?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slotType,
  className = '',
  adId = 'ijtiaz_ad_unit',
}) => {
  const [adDismissed, setAdDismissed] = useState(false);

  if (adDismissed) return null;

  // Exact sizes to strictly prevent Cumulative Layout Shift (CLS)
  if (slotType === 'leaderboard') {
    return (
      <aside
        id={adId}
        aria-label="إعلان تجاري"
        className={`w-full max-w-[728px] mx-auto my-4 overflow-hidden rounded-xl border border-slate-700/60 bg-[#1E293B] shadow-md text-center transition-all ${className}`}
        style={{ minHeight: '80px' }}
      >
        <div className="flex items-center justify-between px-3 py-1 bg-slate-800/80 border-b border-slate-700/50 text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <Info className="w-3 h-3 text-blue-400" />
            <span>إعلان مدعوم • مساحة إعلانية معتمدة AdSense</span>
          </span>
          <span className="bg-slate-700 px-1.5 py-0.5 rounded text-[9px] text-slate-300 font-mono">728 x 90</span>
        </div>
        <div className="p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-black text-lg shadow-sm shrink-0">
              🚗
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                <span>تأمين السيارات الشامل وضد الغير - قارن واشترِ في 3 دقائق</span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] px-1.5 py-0.5 rounded-full font-bold">خصم 20%</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                احصل على أفضل عروض شركات التأمين المعتمدة فور اجتيازك للاختبار النظري.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.open('https://google.com', '_blank', 'noopener,noreferrer')}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>استعراض العروض</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    );
  }

  if (slotType === 'in_test') {
    return (
      <aside
        id={adId}
        aria-label="إعلان تجاري"
        className={`w-full my-4 rounded-2xl border border-slate-700/60 bg-[#1E293B]/80 p-3.5 shadow-md ${className}`}
        style={{ minHeight: '100px' }}
      >
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 border-b border-slate-700/50 pb-1">
          <span className="flex items-center gap-1 text-slate-400 font-medium">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>شريك تعليم القيادة المعتمد</span>
          </span>
          <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">إعلان</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
              🏅
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100">احجز موعد التدريب العملي في أفضل المدارس المعتمدة</h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">تدريب مكثف على الميدان وركن السيارات والمواقف مع مدربين معتمدين.</p>
            </div>
          </div>
          <button
            type="button"
            className="text-[11px] font-bold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            احجز الآن
          </button>
        </div>
      </aside>
    );
  }

  if (slotType === 'sidebar') {
    return (
      <aside
        id={adId}
        aria-label="إعلان تجاري"
        className={`w-full rounded-2xl border border-slate-700/60 bg-[#1E293B] p-4 shadow-md ${className}`}
        style={{ minHeight: '250px' }}
      >
        <div className="text-[10px] text-slate-400 font-medium flex items-center justify-between mb-3 border-b border-slate-700/50 pb-1.5">
          <span>إعلان مميز</span>
          <span className="bg-slate-800 border border-slate-700 text-slate-300 px-1.5 rounded text-[9px]">Sponsored</span>
        </div>
        <div className="flex flex-col items-center text-center p-2">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-3xl mb-3 shadow-inner">
            🛡️
          </div>
          <h4 className="text-sm font-bold text-slate-100 mb-1">خدمات تجديد وتوثيق رخص القيادة إلكترونياً</h4>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            استفد من خدمات الفحص الطبي المعتمد وتسديد الرسوم الحكومية وتوصيل الرخصة لباب منزلك.
          </p>
          <button
            type="button"
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            معرفة التفاصيل
          </button>
        </div>
      </aside>
    );
  }

  // in_article fallback
  return (
    <aside
      id={adId}
      aria-label="إعلان تجاري"
      className={`w-full my-4 rounded-xl border border-slate-700/60 bg-[#1E293B]/70 p-3 text-right ${className}`}
      style={{ minHeight: '80px' }}
    >
      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
        <span>إعلان Google AdSense</span>
        <span className="text-[9px] bg-slate-800 border border-slate-700 px-1 rounded text-slate-300">Ad</span>
      </div>
      <div className="text-xs font-semibold text-slate-300">دليلك الكامل لشراء سيارتك الأولى بعد الحصول على الرخصة</div>
    </aside>
  );
};
