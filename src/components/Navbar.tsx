import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Award, 
  BookOpen, 
  History, 
  AlertTriangle, 
  ChevronDown, 
  CheckCircle2, 
  Volume2, 
  VolumeX,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { CountryId, CountryInfo } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';
import { TRANSLATIONS, COUNTRY_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentView: 'home' | 'test' | 'signs' | 'violations' | 'history';
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
  selectedCountry: CountryInfo;
  onSelectCountry: (country: CountryInfo) => void;
  isAudioEnabled: boolean;
  onToggleAudio: () => void;
  locale?: 'ar' | 'en';
  onToggleLocale: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  selectedCountry,
  onSelectCountry,
  isAudioEnabled,
  onToggleAudio,
  locale = 'ar',
  onToggleLocale,
}) => {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const currentLocale = locale || 'ar';
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.ar;

  const getCountryName = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].name;
    }
    return COUNTRIES_LIST.find(c => c.id === cId)?.name || '';
  };

  const getCountrySchool = (cId: string) => {
    if (locale === 'en' && COUNTRY_TRANSLATIONS[cId]) {
      return COUNTRY_TRANSLATIONS[cId].popularSchool;
    }
    return COUNTRIES_LIST.find(c => c.id === cId)?.popularSchool || '';
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E293B]/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Authority Badge */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 cursor-pointer group select-none"
              id="brand-logo-btn"
            >
              <div className="flex items-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/70 px-3 py-1.5 rounded-2xl shadow-lg shadow-black/20 transition-all">
                <img 
                  src="/icon.png" 
                  alt="Ijtiaz Logo" 
                  className="w-7 h-7 rounded-xl object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
                  referrerPolicy="no-referrer"
                />
                <span className="font-black text-lg tracking-wide text-white">{t.appName}</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-700 mx-1" />

            {/* Country Selector Pill */}
            <div className="relative">
              <button
                id="country-selector-dropdown-btn"
                type="button"
                onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 transition-all border border-slate-700 cursor-pointer shadow-xs"
              >
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span className="max-w-[90px] sm:max-w-[130px] truncate">
                  {locale === 'en' ? getCountryName(selectedCountry.id) : getCountryName(selectedCountry.id).split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isCountryMenuOpen && (
                  <motion.div 
                    id="country-selector-menu"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 w-64 rounded-2xl bg-[#1E293B] border border-slate-700 shadow-2xl py-2 z-50 text-slate-100"
                  >
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-700/60">
                      {t.selectCountryPrompt}
                    </div>
                    <div className="max-h-60 overflow-y-auto py-1">
                      {COUNTRIES_LIST.map((country) => (
                        <a
                          key={country.id}
                          href={`/${country.id}`}
                          id={`country-option-${country.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onSelectCountry(country);
                            setIsCountryMenuOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 text-right flex items-center justify-between text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer decoration-none ${
                            selectedCountry.id === country.id ? 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-500' : 'text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{country.flag}</span>
                            <div>
                              <div className="leading-snug text-slate-100">{getCountryName(country.id)}</div>
                              <div className="text-[10px] text-slate-400 font-normal">{getCountrySchool(country.id)}</div>
                            </div>
                          </div>
                          {selectedCountry.id === country.id && (
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          )}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <a
              id="nav-home-btn"
              href={`/${selectedCountry.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer decoration-none ${
                currentView === 'home'
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
                currentView === 'test'
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
                currentView === 'signs'
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
                currentView === 'violations'
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
                currentView === 'history'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <History className="w-4 h-4" />
              <span>{t.myResults}</span>
            </a>
          </nav>

          {/* Right Status / Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* System Status Pulse */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
              <span className="text-slate-300">{t.systemConnected}</span>
            </div>

            {/* Language Toggle */}
            <button
              id="toggle-lang-btn"
              type="button"
              onClick={onToggleLocale}
              title={locale === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="hidden xl:inline text-[11px] font-black">
                {locale === 'ar' ? 'English' : 'العربية'}
              </span>
            </button>

            {/* Audio Toggle */}
            <button
              id="toggle-audio-btn"
              type="button"
              onClick={onToggleAudio}
              title={isAudioEnabled ? (locale === 'ar' ? 'تعطيل القارئ الصوتي للأسئلة' : 'Disable Question Voice Reader') : (locale === 'ar' ? 'تفعيل القارئ الصوتي للأسئلة' : 'Enable Question Voice Reader')}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
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
              className="p-2 md:hidden rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
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
              className="md:hidden py-3 border-t border-slate-700/60 space-y-1 overflow-hidden"
            >
              <a
                href={`/${selectedCountry.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'home' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <span>{t.home}</span>
              </a>

              <a
                href={`/${selectedCountry.id}/test`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('test');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 decoration-none ${
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
                className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 decoration-none ${
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
                className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 decoration-none ${
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
                className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 decoration-none ${
                  currentView === 'history' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
                }`}
              >
                <History className="w-4 h-4" />
                <span>{t.myResults}</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

