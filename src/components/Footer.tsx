import React from 'react';
import { ShieldCheck, Globe2, BookOpen, Award, Navigation, AlertTriangle, History } from 'lucide-react';
import { CountryInfo } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { TRANSLATIONS, COUNTRY_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  selectedCountry: CountryInfo;
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
  onSelectCountry?: (country: CountryInfo) => void;
  onOpenLegal?: (type: 'privacy' | 'terms' | 'disclaimer' | 'contact' | 'brand') => void;
  locale?: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ 
  selectedCountry, 
  onNavigate, 
  onSelectCountry,
  onOpenLegal,
  locale = 'ar' 
}) => {
  const currentLocale = locale || 'ar';
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.ar;
  const isAr = currentLocale === 'ar';

  const getCountryName = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].name;
    }
    return COUNTRIES_LIST.find((c) => c.id === cId)?.name || '';
  };

  const handleLinkClick = (e: React.MouseEvent, view: 'home' | 'test' | 'signs' | 'violations' | 'history') => {
    e.preventDefault();
    onNavigate(view);
  };

  const handleCountryClick = (e: React.MouseEvent, country: CountryInfo) => {
    e.preventDefault();
    if (onSelectCountry) {
      onSelectCountry(country);
    } else {
      window.history.pushState(null, '', `/${country.id}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
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
              {t.footerDesc} {getCountryName(selectedCountry.id)}. {t.welcomeSub}
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{t.footerAuthorityNote} {selectedCountry.authority}</span>
            </div>
          </div>

          {/* Quick Links (Crawlable Semantic Links) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">{t.quickLinks}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={`/${selectedCountry.id}`} 
                  onClick={(e) => handleLinkClick(e, 'home')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.footerLinks.home}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`/${selectedCountry.id}/test`} 
                  onClick={(e) => handleLinkClick(e, 'test')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.footerLinks.test}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`/${selectedCountry.id}/signs`} 
                  onClick={(e) => handleLinkClick(e, 'signs')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.footerLinks.signs}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`/${selectedCountry.id}/violations`} 
                  onClick={(e) => handleLinkClick(e, 'violations')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  <span>{t.footerLinks.violations}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`/${selectedCountry.id}/history`} 
                  onClick={(e) => handleLinkClick(e, 'history')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <History className="w-3.5 h-3.5 text-teal-400" />
                  <span>{t.footerLinks.history}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policy Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">
              {isAr ? 'السياسات والشفافية' : 'Legal & Policies'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onOpenLegal?.('privacy')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  id="footer-privacy-btn"
                >
                  <span>{isAr ? 'سياسة الخصوصية والكوكيز' : 'Privacy Policy & Cookies'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal?.('terms')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  id="footer-terms-btn"
                >
                  <span>{isAr ? 'شروط الاستخدام والخدمة' : 'Terms of Service'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal?.('disclaimer')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  id="footer-disclaimer-btn"
                >
                  <span>{isAr ? 'إخلاء المسؤولية الرسمي' : 'Official Disclaimer'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal?.('contact')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  id="footer-contact-btn"
                >
                  <span>{isAr ? 'تواصل معنا والدعم' : 'Contact & Support'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal?.('brand')} 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5 font-semibold"
                  id="footer-brand-btn"
                >
                  <span>{isAr ? '🎨 تحميل الأيقونة والهوية (HD)' : '🎨 Download Brand Kit & HD Icons'}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Multi-Country Silo Directory (Crawling graph booster for 26 countries) */}
        <div className="py-8 border-b border-slate-800/80 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span>{isAr ? 'دليل اختبارات القيادة النظري لجميع الدول (26 دولة):' : 'Regional Driving Theory Test Simulations Directory (26 Countries):'}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-[11px]">
            {COUNTRIES_LIST.map((country) => {
              const isCurrent = country.id === selectedCountry.id;
              return (
                <a
                  key={country.id}
                  href={`/${country.id}`}
                  onClick={(e) => handleCountryClick(e, country)}
                  className={`p-2 rounded-xl border flex items-center gap-2 transition-colors ${
                    isCurrent
                      ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 font-bold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                  title={`${isAr ? 'اختبار القيادة في' : 'Driving test in'} ${getCountryName(country.id)}`}
                >
                  <span className="text-base leading-none">{country.flag}</span>
                  <span className="truncate">{getCountryName(country.id)}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{t.footerCopyright.replace('%year%', String(new Date().getFullYear()))}</span>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => onOpenLegal?.('privacy')} className="hover:underline cursor-pointer">
              {isAr ? 'الخصوصية' : 'Privacy'}
            </button>
            <button onClick={() => onOpenLegal?.('terms')} className="hover:underline cursor-pointer">
              {isAr ? 'الشروط' : 'Terms'}
            </button>
            <button onClick={() => onOpenLegal?.('contact')} className="hover:underline cursor-pointer">
              {isAr ? 'الدعم' : 'Contact'}
            </button>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>{t.footerCrafted}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
