import React, { useState, useEffect } from 'react';
import { CountryInfo, TestMode, Question, TestHistoryItem, CountryId } from './types';
import { COUNTRIES_DATA } from './data/countriesData';
import { getQuestionsForTest, QUESTIONS_BANK } from './data/questionsData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingView } from './components/LandingView';
import { TestSimulator } from './components/TestSimulator';
import { TestResults } from './components/TestResults';
import { TrafficSignsGuide } from './components/TrafficSignsGuide';
import { ViolationsGuide } from './components/ViolationsGuide';
import { PastTestsHistory } from './components/PastTestsHistory';
import { HilltopAdsLoader } from './components/HilltopAdsLoader';
import { AdBanner } from './components/AdBanner';

export default function App() {
  // Navigation View
  const [currentView, setCurrentView] = useState<
    'home' | 'test' | 'results' | 'signs' | 'violations' | 'history'
  >('home');

  // Selected Country (default Saudi Arabia, with localStorage persistence)
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(() => {
    const savedCountryId = localStorage.getItem('ijtiaz_selected_country') as CountryId;
    if (savedCountryId && COUNTRIES_DATA[savedCountryId]) {
      return COUNTRIES_DATA[savedCountryId];
    }
    return COUNTRIES_DATA.sa;
  });

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

  // Sync selected country to storage
  const handleSelectCountry = (country: CountryInfo) => {
    setSelectedCountry(country);
    localStorage.setItem('ijtiaz_selected_country', country.id);
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

    const questions = getQuestionsForTest(selectedCountry.id, mode, questionsCount);
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

    const modeLabels: Record<TestMode, string> = {
      exam: 'اختبار رسمي كامل',
      practice: 'تدريب تفاعلي',
      signs_only: 'إشارات المرور',
      priority_only: 'أولويات السير',
      quick_10: 'اختبار سريع (10)',
      hard_questions: 'الأسئلة الصعبة',
    };

    // Save to history
    const historyItem: TestHistoryItem = {
      id: 'test_' + Date.now(),
      date: new Date().toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      countryId: selectedCountry.id,
      countryName: selectedCountry.name,
      modeTitle: modeLabels[activeMode] || 'اختبار تجريبي',
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
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* HilltopAds Global Script & Direct Link Engine */}
      <HilltopAdsLoader />

      {/* Top Navigation */}
      <Navbar
        currentView={currentView === 'results' ? 'test' : currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
        isAudioEnabled={isAudioEnabled}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Responsive Leaderboard banner on EVERY page */}
        <AdBanner slotType="leaderboard" adId="global-top-leaderboard" className="max-w-5xl my-3" />
        
        {currentView === 'home' && (
          <LandingView
            selectedCountry={selectedCountry}
            onSelectCountry={handleSelectCountry}
            onStartTest={handleStartTest}
            onNavigateToSigns={() => {
              setCurrentView('signs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToViolations={() => {
              setCurrentView('violations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'test' && (
          <TestSimulator
            country={selectedCountry}
            mode={activeMode}
            questions={
              activeQuestions.length > 0
                ? activeQuestions
                : getQuestionsForTest(selectedCountry.id, 'exam', selectedCountry.totalOfficialQuestions)
            }
            isAudioEnabled={isAudioEnabled}
            onFinishTest={handleFinishTest}
            onCancelTest={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'results' && completedResult && (
          <TestResults
            country={completedResult.country}
            mode={completedResult.mode}
            questions={completedResult.questions}
            userAnswers={completedResult.userAnswers}
            flaggedQuestionIds={completedResult.flaggedQuestionIds}
            timeSpentSeconds={completedResult.timeSpentSeconds}
            onRetakeFullTest={handleRetakeFullTest}
            onRetakeWrongOnly={handleRetakeWrongOnly}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'signs' && (
          <TrafficSignsGuide
            onStartSignQuiz={() => {
              handleStartTest('signs_only', 15);
            }}
          />
        )}

        {currentView === 'violations' && (
          <ViolationsGuide selectedCountry={selectedCountry} />
        )}

        {currentView === 'history' && (
          <PastTestsHistory
            history={testHistory}
            onClearHistory={handleClearHistory}
            onStartNewTest={() => handleStartTest('exam')}
          />
        )}

        {/* Responsive Rectangle banner on EVERY page */}
        <AdBanner slotType="rectangle" adId="global-bottom-rectangle" className="max-w-5xl my-4" />

      </main>

      {/* Global Footer */}
      <Footer
        selectedCountry={selectedCountry}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Premium Dynamic Interstitial Ad Modal */}
      {showInterstitial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          dir="rtl"
        >
          <div className="max-w-md w-full bg-[#1E293B] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-center animate-in zoom-in-95 duration-200">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                💎 إعلان مدعوم • مساحة شريك رسمي
              </span>
              <h3 className="text-lg font-black text-white pt-2">
                جاري توليد نموذج الاختبار لعام 2026...
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                يرجى الانتظار بضع ثوانٍ لتجهيز الأسئلة الرسمية لـ {selectedCountry.name}.
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
                  <span>بدء الاختبار تلقائياً بعد ({interstitialCountdown}) ثوانٍ...</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={proceedToTest}
                  className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs sm:text-sm font-black shadow-lg shadow-blue-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <span>تخطي وبدء الاختبار الفوري الآن 🚀</span>
                </button>
              )}
              <p className="text-[10px] text-slate-500 select-none">
                تدعم هذه المساحة استمرار تقديم شروحات واختبارات القيادة مجاناً.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
