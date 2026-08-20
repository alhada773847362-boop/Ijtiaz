import React, { useState, useEffect, createContext, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CountryInfo, TestMode, Question, TestHistoryItem, CountryId, AppLocale } from './types';
import { COUNTRIES_DATA } from './data/countriesData';
import { getQuestionsForTest } from './data/questionsData';
import { TRANSLATIONS, COUNTRY_TRANSLATIONS, getTranslation } from './data/translations';
import { updatePageSeo } from './utils/seoManager';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageLoadingFallback } from './components/PageLoadingFallback';
import { HilltopAdsLoader } from './components/HilltopAdsLoader';
import { AdBanner } from './components/AdBanner';
import { LegalModalType, CookieConsentBanner } from './components/LegalModals';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy load each individual page separately for fast initial load & modular chunk isolation
const GlobalHomeView = lazy(() =>
  import('./components/GlobalHomeView').then((m) => ({ default: m.GlobalHomeView }))
);
const LandingView = lazy(() =>
  import('./components/LandingView').then((m) => ({ default: m.LandingView }))
);
const TestSimulator = lazy(() =>
  import('./components/TestSimulator').then((m) => ({ default: m.TestSimulator }))
);
const TestResults = lazy(() =>
  import('./components/TestResults').then((m) => ({ default: m.TestResults }))
);
const TrafficSignsGuide = lazy(() =>
  import('./components/TrafficSignsGuide').then((m) => ({ default: m.TrafficSignsGuide }))
);
const ViolationsGuide = lazy(() =>
  import('./components/ViolationsGuide').then((m) => ({ default: m.ViolationsGuide }))
);
const PastTestsHistory = lazy(() =>
  import('./components/PastTestsHistory').then((m) => ({ default: m.PastTestsHistory }))
);
const LegalModals = lazy(() =>
  import('./components/LegalModals').then((m) => ({ default: m.LegalModals }))
);

export const LanguageContext = createContext<{
  t: any;
  locale: AppLocale;
  setLocale: React.Dispatch<React.SetStateAction<AppLocale>>;
} | null>(null);

export default function App() {
  // Helper to parse country code and sub-view from URL path with full alias & legacy route normalization
  const getRouteFromPath = () => {
    if (typeof window === 'undefined') {
      return { country: COUNTRIES_DATA.sa, view: 'home' as const, legalModal: null as LegalModalType };
    }

    const COUNTRY_ALIASES: Record<string, CountryId> = {
      ksa: 'sa',
      saudi: 'sa',
      saudia: 'sa',
      uae: 'ae',
      dubai: 'ae',
      emirates: 'ae',
      egypt: 'eg',
      misr: 'eg',
      kuwait: 'kw',
      qatar: 'qa',
      jordan: 'jo',
      morocco: 'ma',
      algeria: 'dz',
      tunisia: 'tn',
      oman: 'om',
      bahrain: 'bh',
      iraq: 'iq',
      lebanon: 'lb',
      palestine: 'ps',
      syria: 'sy',
      yemen: 'ye',
      sudan: 'sd',
      libya: 'ly',
      mauritania: 'mr',
      somalia: 'so',
      djibouti: 'dj',
      comoros: 'km',
      usa: 'us',
      america: 'us',
      uk: 'gb',
      britain: 'gb',
      canada: 'ca',
      australia: 'au',
      netherlands: 'nl',
      holland: 'nl',
      nederland: 'nl',
      nl: 'nl'
    };

    const VIEW_ALIASES: Record<string, 'home' | 'test' | 'signs' | 'violations' | 'history' | 'global_home'> = {
      test: 'test',
      exam: 'test',
      quiz: 'test',
      practice: 'test',
      dallah: 'test',
      moror: 'test',
      signs: 'signs',
      traffic: 'signs',
      'traffic-signs': 'signs',
      signals: 'signs',
      violations: 'violations',
      fines: 'violations',
      penalties: 'violations',
      points: 'violations',
      history: 'history',
      scores: 'history',
      progress: 'history',
      stats: 'history',
      home: 'home',
      main: 'home',
      index: 'home',
      global: 'global_home'
    };

    // Clean pathname: remove .html, query parameters, leading/trailing slashes
    let pathname = window.location.pathname.replace(/\.html$/i, '').trim();
    const pathParts = pathname.split('/').filter(Boolean).map((p) => p.toLowerCase());
    
    let legalModal: LegalModalType = null;
    if (pathParts.includes('privacy')) legalModal = 'privacy';
    else if (pathParts.includes('terms')) legalModal = 'terms';
    else if (pathParts.includes('disclaimer')) legalModal = 'disclaimer';
    else if (pathParts.includes('contact')) legalModal = 'contact';
    else if (pathParts.includes('brand')) legalModal = 'brand';

    // Root path "/" is the dedicated Global Portal Homepage
    if (pathParts.length === 0) {
      const savedCountryId = localStorage.getItem('ijtiaz_selected_country') as CountryId;
      const defaultCountry = (savedCountryId && COUNTRIES_DATA[savedCountryId]) ? COUNTRIES_DATA[savedCountryId] : COUNTRIES_DATA.sa;
      return {
        country: defaultCountry,
        view: 'global_home' as const,
        legalModal
      };
    }

    // Saved country fallback
    const savedCountryId = localStorage.getItem('ijtiaz_selected_country') as CountryId;
    let fallbackCountry = (savedCountryId && COUNTRIES_DATA[savedCountryId]) ? COUNTRIES_DATA[savedCountryId] : COUNTRIES_DATA.sa;

    // Check if first part is a view directly (e.g. /test, /signs, /violations, /history)
    const firstPart = pathParts[0] || '';
    if (VIEW_ALIASES[firstPart]) {
      return {
        country: fallbackCountry,
        view: VIEW_ALIASES[firstPart],
        legalModal
      };
    }

    // Check if first part is country slug or alias
    let country = fallbackCountry;
    if (COUNTRIES_DATA[firstPart as CountryId]) {
      country = COUNTRIES_DATA[firstPart as CountryId];
    } else if (COUNTRY_ALIASES[firstPart]) {
      country = COUNTRIES_DATA[COUNTRY_ALIASES[firstPart]];
    }

    // Check subview
    const secondPart = pathParts[1] || '';
    let view: 'home' | 'test' | 'results' | 'signs' | 'violations' | 'history' | 'global_home' = 'home';
    if (VIEW_ALIASES[secondPart]) {
      view = VIEW_ALIASES[secondPart];
    }

    return { country, view, legalModal };
  };

  const initialRoute = getRouteFromPath();

  // Navigation View
  const [currentView, setCurrentView] = useState<
    'home' | 'test' | 'results' | 'signs' | 'violations' | 'history' | 'global_home'
  >(initialRoute.view);

  // Selected Country (default Saudi Arabia, with localStorage persistence)
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(initialRoute.country);

  // Locale (default 'ar')
  const [locale, setLocale] = useState<AppLocale>(() => {
    return (localStorage.getItem('ijtiaz_selected_locale') as AppLocale) || 'ar';
  });

  const t = getTranslation(locale);

  useEffect(() => {
    document.documentElement.dir = (locale === 'ar' || locale === 'ur') ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    localStorage.setItem('ijtiaz_selected_locale', locale);

    // Call comprehensive Dynamic SEO Manager
    updatePageSeo({
      country: selectedCountry,
      view: currentView,
      locale: locale
    });
  }, [locale, selectedCountry, currentView]);

  const handleToggleLocale = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Audio Voice Reader setting
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(() => {
    return localStorage.getItem('ijtiaz_audio_enabled') === 'true';
  });

  // Past Tests History
  const [testHistory, setTestHistory] = useState<TestHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('ijtiaz_test_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active Test Session State
  const [activeMode, setActiveMode] = useState<TestMode>('exam');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);

  // Interstitial Ad Modal States
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [interstitialCountdown, setInterstitialCountdown] = useState(5);
  const [pendingTestConfig, setPendingTestConfig] = useState<{ mode: TestMode; customCount?: number } | null>(null);

  // Completed Results State
  const [completedResult, setCompletedResult] = useState<{
    country: CountryInfo;
    mode: TestMode;
    questions: Question[];
    userAnswers: Record<string, string>;
    flaggedQuestionIds: string[];
    timeSpentSeconds: number;
  } | null>(null);

  // Legal Modals State (Privacy, Terms, Disclaimer, Contact)
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(initialRoute.legalModal);

  // Synchronize state with browser URL changes (for perfect back/forward navigation support)
  useEffect(() => {
    const handleUrlSync = () => {
      const { country, view, legalModal } = getRouteFromPath();
      setSelectedCountry(country);
      setCurrentView(view);
      if (legalModal) {
        setActiveLegalModal(legalModal);
      }
    };

    window.addEventListener('popstate', handleUrlSync);
    return () => {
      window.removeEventListener('popstate', handleUrlSync);
    };
  }, []);

  // Navigate directly to Global Portal Homepage
  const handleNavigateGlobalHome = () => {
    setCurrentView('global_home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select country from global directory or search -> always opens country landing page
  const handleSelectCountryFromGlobal = (country: CountryInfo) => {
    setSelectedCountry(country);
    localStorage.setItem('ijtiaz_selected_country', country.id);
    setCurrentView('home');
    window.history.pushState(null, '', `/${country.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync selected country to storage and push new URL path
  const handleSelectCountry = (country: CountryInfo) => {
    setSelectedCountry(country);
    localStorage.setItem('ijtiaz_selected_country', country.id);

    // Keep the current subview in URL if applicable
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const subView = pathParts[1] ? `/${pathParts[1]}` : '';
    const newPath = `/${country.id}${subView}`;

    window.history.pushState(null, '', newPath);
    // Dispatch a popstate event to let all components know the URL has updated
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Navigate with complete URL path synchronization for SEO indexability
  const handleNavigate = (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => {
    setCurrentView(view);
    const subPath = view === 'home' ? '' : `/${view}`;
    window.history.pushState(null, '', `/${selectedCountry.id}${subPath}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Audio
  const handleToggleAudio = () => {
    setIsAudioEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('ijtiaz_audio_enabled', String(next));
      return next;
    });
  };

  // Interstitial Countdown Timer effect
  useEffect(() => {
    let timer: any;
    if (showInterstitial && interstitialCountdown > 0) {
      timer = setTimeout(() => {
        setInterstitialCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showInterstitial, interstitialCountdown]);

  // Start a new test (triggers premium compliant internal interstitial ad)
  const handleStartTest = (mode: TestMode = 'exam', customCount?: number) => {
    setPendingTestConfig({ mode, customCount });
    setInterstitialCountdown(5);
    setShowInterstitial(true);
  };

  // Proceed past interstitial
  const proceedToTest = () => {
    if (!pendingTestConfig) return;
    const { mode, customCount } = pendingTestConfig;
    const questionsCount =
      customCount ||
      (mode === 'quick_10'
        ? 10
        : mode === 'signs_only'
        ? 15
        : mode === 'priority_only'
        ? 10
        : selectedCountry.totalOfficialQuestions);

    const questions = getQuestionsForTest(selectedCountry.id, mode, locale, questionsCount);
    setActiveMode(mode);
    setActiveQuestions(questions);
    setCurrentView('test');
    setShowInterstitial(false);
    setPendingTestConfig(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finish a test session
  const handleFinishTest = (data: {
    questions: Question[];
    userAnswers: Record<string, string>;
    flaggedQuestionIds: string[];
    timeSpentSeconds: number;
  }) => {
    let correctCount = 0;
    data.questions.forEach((q) => {
      if (data.userAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    const total = data.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= selectedCountry.passingScorePercentage;

    const modeLabels = TRANSLATIONS[locale].modeLabels;

    // Save to history
    const historyItem: TestHistoryItem = {
      id: 'test_' + Date.now(),
      date: new Date().toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      countryId: selectedCountry.id,
      countryName: locale === 'en' && COUNTRY_TRANSLATIONS[selectedCountry.id] ? COUNTRY_TRANSLATIONS[selectedCountry.id].name : selectedCountry.name,
      modeTitle: modeLabels[activeMode] || 'Test',
      score: correctCount,
      totalQuestions: total,
      percentage,
      passed,
      timeSpentSeconds: data.timeSpentSeconds,
    };

    const updatedHistory = [historyItem, ...testHistory];
    setTestHistory(updatedHistory);
    try {
      localStorage.setItem('ijtiaz_test_history', JSON.stringify(updatedHistory));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }

    setCompletedResult({
      country: selectedCountry,
      mode: activeMode,
      questions: data.questions,
      userAnswers: data.userAnswers,
      flaggedQuestionIds: data.flaggedQuestionIds,
      timeSpentSeconds: data.timeSpentSeconds,
    });

    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake full test with new random seed
  const handleRetakeFullTest = () => {
    handleStartTest(activeMode);
  };

  // Retake only incorrect questions
  const handleRetakeWrongOnly = (wrongQuestions: Question[]) => {
    if (wrongQuestions.length === 0) return;
    setActiveMode('practice');
    setActiveQuestions(wrongQuestions);
    setCurrentView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clear History
  const handleClearHistory = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في مسح كافة الاختبارات السابقة؟')) {
      setTestHistory([]);
      localStorage.removeItem('ijtiaz_test_history');
    }
  };

  return (
    <LanguageContext.Provider value={{ t, locale, setLocale }}>
      <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
        
        {/* HilltopAds Global Script & Direct Link Engine */}
        <HilltopAdsLoader />

      {/* Top Navigation */}
      <Navbar
        currentView={currentView === 'results' ? 'test' : currentView}
        onNavigate={handleNavigate}
        onNavigateGlobalHome={handleNavigateGlobalHome}
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
        isAudioEnabled={isAudioEnabled}
        onToggleAudio={handleToggleAudio}
        locale={locale}
        onSelectLocale={setLocale}
        onToggleLocale={handleToggleLocale}
        isGlobalHome={currentView === 'global_home'}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Responsive Leaderboard banner on EVERY page */}
        <AdBanner slotType="leaderboard" adId="global-top-leaderboard" className="max-w-5xl my-3" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView === 'global_home' ? 'global_home' : `${selectedCountry.id}-${currentView}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <Suspense fallback={<PageLoadingFallback country={currentView === 'global_home' ? undefined : selectedCountry} locale={locale} />}>
              {currentView === 'global_home' && (
                <GlobalHomeView
                  onSelectCountry={handleSelectCountryFromGlobal}
                  locale={locale}
                />
              )}

              {currentView === 'home' && (
                <LandingView
                  selectedCountry={selectedCountry}
                  onSelectCountry={handleSelectCountry}
                  onStartTest={handleStartTest}
                  onNavigateToSigns={() => handleNavigate('signs')}
                  onNavigateToViolations={() => handleNavigate('violations')}
                  onNavigateToHistory={() => handleNavigate('history')}
                  onNavigateGlobalHome={handleNavigateGlobalHome}
                  locale={locale}
                />
              )}

              {currentView === 'test' && (
                <TestSimulator
                  country={selectedCountry}
                  mode={activeMode}
                  questions={
                    activeQuestions.length > 0
                      ? activeQuestions
                      : getQuestionsForTest(selectedCountry.id, 'exam', locale, selectedCountry.totalOfficialQuestions)
                  }
                  isAudioEnabled={isAudioEnabled}
                  locale={locale}
                  onFinishTest={handleFinishTest}
                  onCancelTest={() => handleNavigate('home')}
                />
              )}

              {currentView === 'results' && (
                completedResult ? (
                  <TestResults
                    country={completedResult.country}
                    mode={completedResult.mode}
                    questions={completedResult.questions}
                    userAnswers={completedResult.userAnswers}
                    flaggedQuestionIds={completedResult.flaggedQuestionIds}
                    timeSpentSeconds={completedResult.timeSpentSeconds}
                    locale={locale}
                    onRetakeFullTest={handleRetakeFullTest}
                    onRetakeWrongOnly={handleRetakeWrongOnly}
                    onBackToHome={() => handleNavigate('home')}
                  />
                ) : (
                  <div className="p-8 text-center bg-[#1E293B] rounded-3xl border border-slate-700 space-y-4 max-w-lg mx-auto">
                    <p className="text-slate-300 text-sm font-medium">
                      {locale === 'ar' ? 'لا توجد نتيجة اختبار نشطة حالياً. يرجى بدء اختبار جديد.' : 'No active test result found. Please start a new test.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleNavigate('home')}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
                    >
                      {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                    </button>
                  </div>
                )
              )}

              {currentView === 'signs' && (
                <TrafficSignsGuide
                  locale={locale}
                  onStartSignQuiz={() => {
                    handleStartTest('signs_only', 15);
                  }}
                />
              )}

              {currentView === 'violations' && (
                <ViolationsGuide selectedCountry={selectedCountry} locale={locale} />
              )}

              {currentView === 'history' && (
                <PastTestsHistory
                  history={testHistory}
                  locale={locale}
                  onClearHistory={handleClearHistory}
                  onStartNewTest={() => handleStartTest('exam')}
                />
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>

        {/* Responsive Rectangle banner on EVERY page */}
        <AdBanner slotType="rectangle" adId="global-bottom-rectangle" className="max-w-5xl my-4" />

      </main>

      {/* Global Footer */}
      <Footer
        selectedCountry={selectedCountry}
        onNavigate={handleNavigate}
        onNavigateGlobalHome={handleNavigateGlobalHome}
        onOpenLegal={(type) => setActiveLegalModal(type)}
        locale={locale}
      />

      {/* Legal Modals (Privacy Policy, Terms, Disclaimer, Contact) */}
      <Suspense fallback={null}>
        {activeLegalModal && (
          <LegalModals
            activeModal={activeLegalModal}
            onClose={() => setActiveLegalModal(null)}
            locale={locale}
          />
        )}
      </Suspense>

      {/* GDPR / Cookie Consent Banner */}
      <CookieConsentBanner locale={locale} />

      {/* Premium Dynamic Interstitial Ad Modal */}
      {showInterstitial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="max-w-md w-full bg-[#1E293B] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-center animate-in zoom-in-95 duration-200">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                {t.interstitialBadge}
              </span>
              <h3 className="text-lg font-black text-white pt-2">
                {t.interstitialTitle.replace('%year%', '2026')}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.interstitialSub.replace('%country%', locale === 'en' && COUNTRY_TRANSLATIONS[selectedCountry.id] ? COUNTRY_TRANSLATIONS[selectedCountry.id].name : selectedCountry.name)}
              </p>
            </div>

            {/* Embed real working AdBanner right inside the Interstitial Modal for maximum revenue! */}
            <div className="bg-slate-950/30 p-2 rounded-2xl border border-slate-750">
              <AdBanner slotType="rectangle" adId="interstitial-modal-inner-ad" />
            </div>

            <div className="space-y-2 pt-2">
              {interstitialCountdown > 0 ? (
                <button
                  type="button"
                  disabled
                  className="w-full py-3.5 px-4 bg-slate-800 text-slate-400 rounded-2xl text-xs sm:text-sm font-bold border border-slate-700 flex items-center justify-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full border-2 border-slate-600 border-t-blue-400 animate-spin shrink-0" />
                  <span>{t.interstitialWaiting.replace('%count%', String(interstitialCountdown))}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={proceedToTest}
                  className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs sm:text-sm font-black shadow-lg shadow-blue-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <span>{t.interstitialSkip}</span>
                </button>
              )}
              <p className="text-[10px] text-slate-500 select-none">
                {t.interstitialFooter}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
    <Analytics />
    <SpeedInsights />
    </LanguageContext.Provider>
  );
}
