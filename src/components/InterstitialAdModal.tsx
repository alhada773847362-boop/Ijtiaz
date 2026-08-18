import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { AdBanner } from './AdBanner';

interface InterstitialAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryName: string;
}

export const InterstitialAdModal: React.FC<InterstitialAdModalProps> = ({
  isOpen,
  onClose,
  countryName,
}) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (!isOpen) return;
    
    setCountdown(4);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark background overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          if (countdown === 0) onClose();
        }}
      />

      {/* Main Interstitial Box */}
      <div 
        className="relative bg-[#1E293B] border-2 border-blue-500/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-black/80 animate-in zoom-in-95 duration-200 text-right text-slate-100 space-y-6"
        dir="rtl"
      >
        {/* Header decoration */}
        <div className="flex items-center justify-between border-b border-slate-750 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">إعلان الراعي الرسمي للمنصة</h3>
              <p className="text-[10px] text-slate-400">إعلان آمن ومدعوم ومطابق للشروط المعيارية</p>
            </div>
          </div>
          
          {countdown === 0 ? (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="إغلاق الإعلان"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-md font-mono">
              انتظر {countdown}ث
            </span>
          )}
        </div>

        {/* Content & Warning */}
        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong>شكرًا لدعمك منصة اجتياز:</strong> الإعلانات تدعم الاستمرار الفوري للتطوير المجاني للاختبارات النظرية لـ <span className="text-blue-400 font-bold">{countryName}</span>.
            </div>
          </div>

          {/* Active HilltopAds Banner Inside Interstitial */}
          <div className="w-full bg-slate-900/40 rounded-2xl p-2 border border-slate-750 flex items-center justify-center">
            <AdBanner slotType="rectangle" adId="interstitial-modal-banner" className="my-0 w-full" />
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            disabled={countdown > 0}
            onClick={onClose}
            className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 shadow-lg ${
              countdown === 0
                ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-blue-500/20'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
            }`}
          >
            <span>{countdown > 0 ? `تخطي الإعلان بعد (${countdown})` : 'تخطي الإعلان وبدء الاختبار الآن'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
