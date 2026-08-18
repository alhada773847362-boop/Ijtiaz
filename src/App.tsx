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

  // Start a new test
  const handleStartTest = (mode: TestMode = 'exam', customCount?: number) => {
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

      </main>

      {/* Global Footer */}
      <Footer
        selectedCountry={selectedCountry}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
