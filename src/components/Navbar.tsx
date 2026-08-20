import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  History, 
  AlertTriangle, 
  ChevronDown, 
  Volume2, 
  VolumeX,
  Menu,
  X,
  Globe,
  Check
} from 'lucide-react';
import { CountryId, CountryInfo, AppLocale } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { TRANSLATIONS, COUNTRY_TRANSLATIONS, SUPPORTED_LANGUAGES } from '../data/translations';
import { AppLogo } from './AppLogo';

interface NavbarProps {
  currentView: 'home' | 'test' | 'signs' | 'violations' | 'history' | 'global_home';
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
  onNavigateGlobalHome: () => void;
  selectedCountry: CountryInfo;
  onSelectCountry?: (country: CountryInfo) => void;
  isAudioEnabled: boolean;
  onToggleAudio: () => void;
  locale?: AppLocale;
  onSelectLocale?: (locale: AppLocale) => void;
  onToggleLocale?: () => void;
  isGlobalHome?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onNavigateGlobalHome,
  selectedCountry,
  isAudioEnabled,
  onToggleAudio,
  locale = 'ar',
  onSelectLocale,
  onToggleLocale,
  isGlobalHome = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locale || 'ar';
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.en || TRANSLATIONS.ar;

  // Handle clicking outside of language menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLocale) || SUPPORTED_LANGUAGES[0];

  const handleLanguageChange = (code: AppLocale) => {
    if (onSelectLocale) {
      onSelectLocale(code);
    } else if (onToggleLocale) {
      onToggleLocale();
    }
    setIsLangDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getCountryName = (cId: string) => {
    if (locale !== 'ar' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].name;
    }
    return COUNTRIES_LIST.find(c => c.id === cId)?.name || '';
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E293B]/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Authority Badge */}
          <div className="flex items-center gap-3">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateGlobalHome();
              }} 
              className="flex items-center gap-2 cursor-pointer group select-none decoration-none"
              id="brand-logo-btn"
              title={locale === 'ar' ? 'العودة إلى البوابة الرئيسية لجميع الدول' : 'Return to Global Portal'}
            >
              <div className="flex items-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/70 px-3 py-1.5 rounded-2xl shadow-lg shadow-black/20 transition-all">
                <AppLogo size="sm" className="group-hover:scale-105 transition-transform" />
                <span className="font-black text-lg tracking-wide text-white">{t.appName || 'Ijtiaz'}</span>
              </div>
            </a>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-700 mx-1" />

            {/* Country Indicator / Return to Global Home to switch countries */}
            <div className="relative">
              {isGlobalHome ? (
                <div
                  id="country-selector-dropdown-btn"
                  className="flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/40 px-3 py-1.5 rounded-xl text-xs font-black text-cyan-300 shadow-xs"
                >
                  <span className="text-base leading-none">🌍</span>
                  <span className="font-bold">
                    {locale === 'ar' ? 'جميع الدول (27)' : 'All Countries (27)'}
                  </span>
                </div>
              ) : (
                <button
                  id="country-selector-dropdown-btn"
                  type="button"
                  onClick={onNavigateGlobalHome}
                  title={locale === 'ar' ? 'تغيير الدولة من الصفحة الرئيسية' : 'Change country from Home page'}
                  className="flex items-center gap-2 bg-slate-800/90 hover:bg-cyan-950/70 hover:border-cyan-500/60 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-cyan-300 transition-all border border-slate-700 cursor-pointer shadow-xs group"
                >
                  <span className="text-base leading-none group-hover:scale-110 transition-transform">{selectedCountry.flag}</span>
                  <span className="max-w-[90px] sm:max-w-[130px] truncate font-bold">
                    {locale !== 'ar' ? getCountryName(selectedCountry.id) : getCountryName(selectedCountry.id).split(' ')[0]}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 rounded font-normal">
                    {locale === 'ar' ? 'تغيير' : 'Change'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <a
              id="nav-global-btn"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateGlobalHome();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                isGlobalHome
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>{locale === 'ar' ? 'جميع الدول' : 'All Countries'}</span>
            </a>

            <a
              id="nav-home-btn"
              href={`/${selectedCountry.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                !isGlobalHome && currentView === 'home'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>{t.home}</span>
            </a>

            <a
              id="nav-test-btn"
              href={`/${selectedCountry.id}/test`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('test');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                !isGlobalHome && currentView === 'test'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{t.startTest}</span>
            </a>

            <a
              id="nav-signs-btn"
              href={`/${selectedCountry.id}/signs`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('signs');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                !isGlobalHome && currentView === 'signs'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.signsGuide}</span>
            </a>

            <a
              id="nav-violations-btn"
              href={`/${selectedCountry.id}/violations`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('violations');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                !isGlobalHome && currentView === 'violations'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{t.violations}</span>
            </a>

            <a
              id="nav-history-btn"
              href={`/${selectedCountry.id}/history`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('history');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                !isGlobalHome && currentView === 'history'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <History className="w-4 h-4" />
              <span>{t.myResults}</span>
            </a>
          </nav>

          {/* Right Status / Multi-language / Audio Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* System Status Pulse */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
              <span className="text-slate-300">{t.systemConnected}</span>
            </div>

            {/* Multi-Language Dropdown Selector */}
            <div className="relative" ref={langDropdownRef}>
              <button
                id="toggle-lang-btn"
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-600 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Change Language / تغيير اللغة"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="hidden sm:inline text-xs font-bold">{currentLangObj.nativeName}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Selection Menu */}
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute mt-2 w-52 bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl p-1.5 z-50 overflow-hidden ${
                      locale === 'ar' || locale === 'ur' ? 'left-0' : 'right-0'
                    }`}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-800 mb-1 flex items-center justify-between">
                      <span>🌍 Select Language</span>
                      <span className="text-[10px] text-blue-400 font-normal">{SUPPORTED_LANGUAGES.length} Languages</span>
                    </div>

                    <div className="max-h-64 overflow-y-auto space-y-0.5 custom-scrollbar">
                      {SUPPORTED_LANGUAGES.map((lang) => {
                        const isSelected = currentLocale === lang.code;
                        return (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left cursor-pointer ${
                              isSelected 
                                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-base leading-none">{lang.flag}</span>
                              <div className="flex flex-col text-left">
                                <span className="font-bold text-slate-200">{lang.nativeName}</span>
                                <span className="text-[10px] text-slate-400">{lang.name}</span>
                              </div>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Audio Toggle */}
            <button
              id="toggle-audio-btn"
              type="button"
              onClick={onToggleAudio}
              title={isAudioEnabled ? (locale === 'ar' ? 'تعطيل القارئ الصوتي للأسئلة' : 'Disable Question Voice Reader') : (locale === 'ar' ? 'تفعيل القارئ الصوتي للأسئلة' : 'Enable Question Voice Reader')}
              className={`p-2 rounded-xl border text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                isAudioEnabled
                  ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                  : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4 text-blue-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span className="hidden xl:inline text-[11px] font-bold">
                {isAudioEnabled ? t.audioOn : t.audioOff}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden py-3 border-t border-slate-700/60 space-y-1.5 overflow-hidden"
            >
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateGlobalHome();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  isGlobalHome ? 'bg-cyan-500/20 text-cyan-400 font-black' : 'text-cyan-300'
                }`}
              >
                <span>🌍</span>
                <span>{locale === 'ar' ? 'جميع الدول (البوابة العالمية)' : 'All Countries (Global Portal)'}</span>
              </a>

              <a
                href={`/${selectedCountry.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  !isGlobalHome && currentView === 'home' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <span>{selectedCountry.flag}</span>
                <span>{t.home} ({getCountryName(selectedCountry.id)})</span>
              </a>

              <a
                href={`/${selectedCountry.id}/test`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('test');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'test' ? 'bg-blue-600 text-white' : 'text-slate-300'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>{t.startTest}</span>
              </a>

              <a
                href={`/${selectedCountry.id}/signs`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('signs');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'signs' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.signsGuide}</span>
              </a>

              <a
                href={`/${selectedCountry.id}/violations`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('violations');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'violations' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>{t.violations}</span>
              </a>

              <a
                href={`/${selectedCountry.id}/history`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('history');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'history' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <History className="w-4 h-4" />
                <span>{t.myResults}</span>
              </a>

              {/* Mobile Language Grid */}
              <div className="pt-2 border-t border-slate-700/60">
                <p className="text-[11px] font-bold text-slate-400 px-3 mb-1.5">🌐 {locale === 'ar' ? 'اختر لغة المنصة:' : 'Choose Language:'}</p>
                <div className="grid grid-cols-2 gap-1.5 px-2">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        currentLocale === lang.code
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
