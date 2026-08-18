import React from 'react';
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
  X
} from 'lucide-react';
import { CountryId, CountryInfo } from '../types';
import { COUNTRIES_LIST } from '../data/countriesData';

interface NavbarProps {
  currentView: 'home' | 'test' | 'signs' | 'violations' | 'history';
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
  selectedCountry: CountryInfo;
  onSelectCountry: (country: CountryInfo) => void;
  isAudioEnabled: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  selectedCountry,
  onSelectCountry,
  isAudioEnabled,
  onToggleAudio,
}) => {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
              <div className="bg-blue-600 px-3.5 py-1.5 rounded-xl font-black text-lg tracking-wide shadow-lg shadow-blue-500/30 group-hover:bg-blue-500 transition-all flex items-center gap-1.5 text-white">
                <Car className="w-5 h-5 text-white" />
                <span>اجتياز</span>
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
                <span className="max-w-[90px] sm:max-w-[130px] truncate">{selectedCountry.name.split(' ')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              {isCountryMenuOpen && (
                <div 
                  id="country-selector-menu"
                  className="absolute left-0 sm:right-auto mt-2 w-64 rounded-2xl bg-[#1E293B] border border-slate-700 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-100"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-700/60">
                    اختر الدولة لتخصيص نماذج الاختبار:
                  </div>
                  <div className="max-h-60 overflow-y-auto py-1">
                    {COUNTRIES_LIST.map((country) => (
                      <button
                        key={country.id}
                        id={`country-option-${country.id}`}
                        onClick={() => {
                          onSelectCountry(country);
                          setIsCountryMenuOpen(false);
                        }}
                        className={`w-full px-3.5 py-2.5 text-right flex items-center justify-between text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer ${
                          selectedCountry.id === country.id ? 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-500' : 'text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{country.flag}</span>
                          <div>
                            <div className="leading-snug text-slate-100">{country.name}</div>
                            <div className="text-[10px] text-slate-400 font-normal">{country.popularSchool}</div>
                          </div>
                        </div>
                        {selectedCountry.id === country.id && (
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <button
              id="nav-home-btn"
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'home'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>الرئيسية</span>
            </button>

            <button
              id="nav-test-btn"
              onClick={() => onNavigate('test')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'test'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>بدء الاختبار</span>
            </button>

            <button
              id="nav-signs-btn"
              onClick={() => onNavigate('signs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'signs'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>دليل الإشارات</span>
            </button>

            <button
              id="nav-violations-btn"
              onClick={() => onNavigate('violations')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'violations'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>المخالفات والنقاط</span>
            </button>

            <button
              id="nav-history-btn"
              onClick={() => onNavigate('history')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'history'
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <History className="w-4 h-4" />
              <span>نتائجي</span>
            </button>
          </nav>

          {/* Right Status / Controls */}
          <div className="flex items-center gap-3">
            
            {/* System Status Pulse */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
              <span className="text-slate-300">النظام متصل</span>
            </div>

            {/* Audio Toggle */}
            <button
              id="toggle-audio-btn"
              type="button"
              onClick={onToggleAudio}
              title={isAudioEnabled ? 'تعطيل القارئ الصوتي للأسئلة' : 'تفعيل القارئ الصوتي للأسئلة (عربي)'}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                isAudioEnabled
                  ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                  : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4 text-blue-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span className="hidden xl:inline text-[11px] font-bold">
                {isAudioEnabled ? 'القارئ مفعل' : 'صوت'}
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
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-700/60 space-y-1 animate-in fade-in duration-150">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 ${
                currentView === 'home' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
              }`}
            >
              <span>الرئيسية</span>
            </button>

            <button
              onClick={() => {
                onNavigate('test');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 ${
                currentView === 'test' ? 'bg-blue-600 text-white' : 'text-slate-300'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>بدء الاختبار التجريبي</span>
            </button>

            <button
              onClick={() => {
                onNavigate('signs');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 ${
                currentView === 'signs' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>دليل الإشارات المرورية</span>
            </button>

            <button
              onClick={() => {
                onNavigate('violations');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 ${
                currentView === 'violations' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>قوانين المرور والمخالفات</span>
            </button>

            <button
              onClick={() => {
                onNavigate('history');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-2.5 rounded-lg text-right text-xs font-bold flex items-center gap-2 ${
                currentView === 'history' ? 'bg-slate-800 text-blue-400' : 'text-slate-300'
              }`}
            >
              <History className="w-4 h-4" />
              <span>نتائجي السابقة</span>
            </button>
          </div>
        )}

      </div>
    </header>
  );
};

