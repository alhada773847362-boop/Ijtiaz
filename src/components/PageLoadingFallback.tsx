import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { CountryInfo } from '../types';

interface PageLoadingFallbackProps {
  country?: CountryInfo;
  locale?: 'ar' | 'en';
  message?: string;
}

export const PageLoadingFallback: React.FC<PageLoadingFallbackProps> = ({
  country,
  locale = 'ar',
  message
}) => {
  const isAr = locale === 'ar';

  return (
    <div 
      className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 text-center"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="relative mb-6">
        {/* Animated Glow Rings */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-teal-500/30 rounded-full blur-xl animate-pulse" />
        
        <div className="relative w-20 h-20 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl flex items-center justify-center">
          {country?.flag ? (
            <span className="text-3xl animate-bounce" role="img" aria-label={country.name}>
              {country.flag}
            </span>
          ) : (
            <Compass className="w-9 h-9 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
          )}
        </div>

        {/* Small badge */}
        <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-1.5 shadow-lg border border-slate-800 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="space-y-2 max-w-sm">
        <h3 className="text-base sm:text-lg font-black text-slate-100 flex items-center justify-center gap-2">
          <span>{message || (isAr ? 'جاري تحميل الصفحة...' : 'Loading page...')}</span>
        </h3>
        
        {country && (
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            {isAr ? `تجهيز محتوى ونماذج اختبارات ${country.name}` : `Preparing test questions for ${country.name}`}
          </p>
        )}

        {/* Animated Loading Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full mx-auto mt-4 overflow-hidden border border-slate-700/40">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full animate-indeterminate" />
        </div>
      </div>
    </div>
  );
};
