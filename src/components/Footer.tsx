import React from 'react';
import { Car, ShieldCheck } from 'lucide-react';
import { CountryInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  selectedCountry: CountryInfo;
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
  locale?: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ selectedCountry, onNavigate, locale = 'ar' }) => {
  const currentLocale = locale || 'ar';
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.ar;

  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/icon.png" 
                alt="Ijtiaz Logo" 
                className="w-9 h-9 rounded-2xl object-contain drop-shadow-md shadow-blue-500/20" 
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-black text-slate-100 tracking-tight">
                {t.appName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {t.footerDesc} {selectedCountry.name}. {t.welcomeSub}
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{t.footerAuthorityNote} {selectedCountry.authority}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">{t.quickLinks}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.footerLinks.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('test')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.footerLinks.test}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('signs')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.footerLinks.signs}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('violations')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.footerLinks.violations}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.footerLinks.history}
                </button>
              </li>
            </ul>
          </div>

          {/* Tips / Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">{t.footerTipsTitle}</h4>
            <ul className="space-y-2 text-xs text-slate-400 leading-normal">
              {t.footerTips.map((tip, idx) => (
                <li key={idx}>• {tip.replace('%country%', selectedCountry.name).replace('%score%', String(selectedCountry.passingScorePercentage))}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {t.footerCopyright.replace('%year%', String(new Date().getFullYear()))}
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>{t.footerCrafted}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
