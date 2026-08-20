import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  LayoutGrid, 
  Sparkles, 
  Info,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  MessageSquarePlus
} from 'lucide-react';
import { Question, CountryInfo, TestMode, AppLocale } from '../types';
import { TrafficSignSvg, RoadSituationDiagram } from './TrafficSignSvg';
import { AdBanner } from './AdBanner';
import { TRANSLATIONS, getTranslation } from '../data/translations';
import { soundEffects } from '../utils/audioEffects';
import { FeedbackModal } from './FeedbackModal';

interface TestSimulatorProps {
  country: CountryInfo;
  mode: TestMode;
  questions: Question[];
  isAudioEnabled: boolean;
  locale?: AppLocale;
  onFinishTest: (sessionData: {
    questions: Question[];
    userAnswers: Record<string, string>;
    flaggedQuestionIds: string[];
    timeSpentSeconds: number;
  }) => void;
  onCancelTest: () => void;
}

export const TestSimulator: React.FC<TestSimulatorProps> = ({
  country,
  mode,
  questions,
  isAudioEnabled,
  locale = 'ar',
  onFinishTest,
  onCancelTest,
}) => {
  const currentLocale = locale || 'ar';
  const t = getTranslation(currentLocale);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  
  // Timer setup: Default minutes based on mode & country
  const totalTimeLimitSeconds = mode === 'quick_10' 
    ? 10 * 60 
    : country.timeLimitMinutes * 60;

  const [remainingSeconds, setRemainingSeconds] = useState(totalTimeLimitSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const currentQuestion = questions[currentIndex] || questions[0];
  const isPracticeMode = mode === 'practice';

  // Timer interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Read question text using Web Speech API if audio is enabled
  useEffect(() => {
    if (isAudioEnabled && currentQuestion && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentQuestion.questionText);
      utterance.lang = locale === 'ar' ? 'ar-SA' : 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }, [currentIndex, isAudioEnabled, currentQuestion, locale]);

  const handleAutoSubmit = () => {
    const timeSpent = totalTimeLimitSeconds - remainingSeconds;
    onFinishTest({
      questions,
      userAnswers,
      flaggedQuestionIds: flaggedIds,
      timeSpentSeconds: timeSpent,
    });
  };

  const handleSelectOption = (optionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    if (isAudioEnabled) {
      if (isPracticeMode) {
        if (optionId === currentQuestion.correctOptionId) {
          soundEffects.playCorrect();
        } else {
          soundEffects.playWrong();
        }
      } else {
        soundEffects.playClick();
      }
    }
  };

  const handleToggleFlag = () => {
    const qId = currentQuestion.id;
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
    if (isAudioEnabled) {
      soundEffects.playClick();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFinishConfirm(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleConfirmFinish = () => {
    const timeSpent = Math.max(1, totalTimeLimitSeconds - remainingSeconds);
    onFinishTest({
      questions,
      userAnswers,
      flaggedQuestionIds: flaggedIds,
      timeSpentSeconds: timeSpent,
    });
  };

  // Keyboard navigation shortcuts (1, 2, 3, 4 for options, arrows for navigation)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key) - 1;
        if (currentQuestion?.options[optionIndex]) {
          handleSelectOption(currentQuestion.options[optionIndex].id);
        }
      } else if (e.key === 'ArrowLeft') {
        handleNext();
      } else if (e.key === 'ArrowRight') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion]);

  // Format time MM:SS
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);
  const isTimeCritical = remainingSeconds < 180; // Less than 3 mins

  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isAnswered = Boolean(currentAnswer);
  const isFlagged = currentQuestion ? flaggedIds.includes(currentQuestion.id) : false;

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-150 text-slate-100 pb-10">
      
      {/* Top Test Console Header */}
      <header className="rounded-2xl border border-slate-700/60 bg-[#1E293B] p-4 sm:p-5 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: School and Mode */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 shadow-inner">
            <span className="text-base">{country.flag}</span>
            <span className="text-xs sm:text-sm font-medium text-slate-200">{country.popularSchool}</span>
          </div>

          <button
            id="test-palette-toggle-btn"
            type="button"
            onClick={() => setIsPaletteOpen(true)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer"
            title={t.questionMap}
          >
            <LayoutGrid className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">{t.questionMap}</span>
            <span className="text-blue-400 font-mono">({answeredCount}/{questions.length})</span>
          </button>
        </div>

        {/* Center/Right: Countdown & System Status */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{t.remainingTime}</span>
            <div
              className={`text-2xl sm:text-3xl font-mono font-bold transition-colors ${
                isTimeCritical ? 'text-red-400 animate-pulse' : 'text-amber-400'
              }`}
              dir="ltr"
            >
              {formatTime(remainingSeconds)}
            </div>
          </div>

          {/* Pulse System Online Indicator */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-slate-700 flex items-center justify-center bg-slate-800/90 shadow-inner">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
            </div>
          </div>

          {/* Early Submit CTA */}
          <button
            id="test-finish-btn"
            type="button"
            onClick={() => setShowFinishConfirm(true)}
            className="bg-blue-600 hover:bg-blue-500 active:scale-98 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
          >
            {t.submitTest}
          </button>

          {/* Exit button */}
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="text-slate-400 hover:text-red-400 p-1.5 transition-colors cursor-pointer"
            title={t.exitTest}
          >
            <XCircle className="w-5 h-5" />
          </button>

        </div>

      </header>

      {/* Main Command Console Layout: Grid with Question Map Sidebar on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Question Map Sidebar (Desktop Col 3) */}
        <aside className="hidden lg:flex lg:col-span-3 bg-[#0F172A] border border-slate-800 rounded-3xl p-5 flex-col gap-6 shadow-xl sticky top-20">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>{t.questionMap}</span>
              <span className="text-blue-400 font-mono text-[11px]">{answeredCount} {t.footerDesc.includes('in') ? 'of' : 'من'} {questions.length}</span>
            </h3>
            
            <div className="grid grid-cols-5 gap-2 max-h-[320px] overflow-y-auto pr-0.5">
              {questions.map((q, idx) => {
                const answered = Boolean(userAnswers[q.id]);
                const flagged = flaggedIds.includes(q.id);
                const isCurrent = idx === currentIndex;

                let tileStyle = 'border border-slate-700/80 bg-slate-800/60 text-slate-400';

                if (answered) {
                  tileStyle = 'border border-green-500/50 bg-green-500/10 text-green-400 font-bold';
                }
                if (flagged) {
                  tileStyle = 'border border-amber-500/60 bg-amber-500/20 text-amber-300 font-bold';
                }
                if (isCurrent) {
                  tileStyle = 'border-2 border-blue-500 bg-blue-500/25 text-white font-black shadow-lg shadow-blue-500/20';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer ${tileStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress gauge */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{t.completionRate}</span>
              <span className="font-mono font-bold text-blue-400">{progressPercent}٪</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Ad Placement in Sidebar */}
          <AdBanner slotType="sidebar" adId="simulator-sidebar-ad" />
        </aside>

        {/* Question Center Terminal (Col 9 or Full) */}
        <section className="lg:col-span-9 bg-[#0B1120] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-8 min-h-[550px]">
          
          <div className="space-y-6">
            
            {/* Top Bar: Question Number & Actions */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider rounded-full border border-blue-500/20">
                  {t.questionCount.replace('%current%', String(currentIndex + 1)).replace('%total%', String(questions.length))}
                </span>
                <span className="text-xs text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/60 font-medium">
                  {currentQuestion?.categoryName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Voice read */}
                <button
                  type="button"
                  onClick={() => {
                    if ('speechSynthesis' in window && currentQuestion) {
                      window.speechSynthesis.cancel();
                      const utterance = new SpeechSynthesisUtterance(currentQuestion.questionText);
                      utterance.lang = locale === 'ar' ? 'ar-SA' : 'en-US';
                      window.speechSynthesis.speak(utterance);
                    }
                  }}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer"
                  title={t.readQuestion}
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                {/* Flag bookmark */}
                <button
                  id="flag-question-btn"
                  type="button"
                  onClick={handleToggleFlag}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isFlagged
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span>{isFlagged ? t.flagged : t.flagAction}</span>
                </button>

                {/* Report / Note button */}
                <button
                  id="report-question-btn"
                  type="button"
                  onClick={() => setIsReportModalOpen(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-750 border border-slate-700 transition-all cursor-pointer"
                  title={locale === 'en' ? 'Report issue or suggest edit' : 'إبلاغ عن ملاحظة في السؤال'}
                >
                  <MessageSquarePlus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{locale === 'en' ? 'Report' : 'ملاحظة'}</span>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion?.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* Question Text & Embedded Visual Diagram */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                  
                  <div className="space-y-3 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white">
                      {currentQuestion?.questionText}
                    </h2>
                  </div>

                  {/* Visual Traffic Sign / Diagram in crisp container */}
                  {currentQuestion?.signId && (
                    <div className="w-44 h-44 bg-white rounded-2xl flex items-center justify-center p-3 shadow-2xl shadow-black/60 shrink-0 border border-slate-700/50">
                      <TrafficSignSvg signId={currentQuestion.signId} size={110} />
                    </div>
                  )}

                  {currentQuestion?.diagramType && (
                    <div className="w-full max-w-sm shrink-0">
                      <RoadSituationDiagram type={currentQuestion.diagramType} />
                    </div>
                  )}

                </div>

                {/* Multiple Choice Option Buttons (Immersive UI grid cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {currentQuestion?.options.map((option) => {
                    const isSelected = currentAnswer === option.id;
                    const isCorrect = option.id === currentQuestion.correctOptionId;
                    const showPracticeValidation = isPracticeMode && isAnswered;

                    let cardStyle = 'bg-slate-800/50 border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 text-slate-200';
                    let circleStyle = 'border border-slate-600 text-slate-300 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:text-white';

                    if (isSelected) {
                      cardStyle = 'bg-blue-600/15 border-2 border-blue-500 text-blue-50 shadow-lg shadow-blue-500/10 font-bold';
                      circleStyle = 'bg-blue-600 border border-blue-400 text-white';
                    }

                    if (showPracticeValidation) {
                      if (isCorrect) {
                        cardStyle = 'bg-green-600/15 border-2 border-green-500 text-green-50 shadow-lg shadow-green-500/10';
                        circleStyle = 'bg-green-600 border border-green-400 text-white';
                      } else if (isSelected && !isCorrect) {
                        cardStyle = 'bg-red-600/15 border-2 border-red-500 text-red-50 shadow-lg shadow-red-500/10';
                        circleStyle = 'bg-red-600 border border-red-400 text-white';
                      }
                    }

                    return (
                      <motion.button
                        key={option.id}
                        id={`option-${option.id}`}
                        type="button"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => handleSelectOption(option.id)}
                        className={`group flex items-center p-5 rounded-2xl transition-all text-right relative overflow-hidden cursor-pointer ${cardStyle}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-4 shrink-0 transition-colors font-bold text-sm ${circleStyle}`}>
                          {option.id}
                        </div>
                        <span className="text-sm sm:text-base font-medium leading-relaxed flex-1">
                          {option.text}
                        </span>

                        {isSelected && !showPracticeValidation && (
                          <div className="absolute top-2 left-2 text-blue-400">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                        {showPracticeValidation && isCorrect && (
                          <div className="absolute top-2 left-2 text-green-400">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                        {showPracticeValidation && isSelected && !isCorrect && (
                          <div className="absolute top-2 left-2 text-red-400">
                            <XCircle className="w-4 h-4" />
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* In-Test banner placed right below the multiple choice options */}
                <AdBanner slotType="in_test" adId="simulator-under-options-ad" />

                {/* Practice Mode Explanation Box */}
                {isPracticeMode && isAnswered && (
                  <div className="p-4 rounded-2xl bg-[#1E293B] border border-blue-500/30 text-slate-200 space-y-2 animate-in fade-in duration-150">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                      <Info className="w-4 h-4 text-blue-400" />
                      <span>{t.explanationTitle}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {currentQuestion?.explanation}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Bottom Console Action Footer */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-3">
            
            <div className="flex gap-3">
              <button
                id="test-prev-btn"
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-6 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm ${
                  currentIndex === 0
                    ? 'opacity-30 cursor-not-allowed bg-slate-800 text-slate-500'
                    : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                }`}
              >
                <ChevronRight className={`w-4 h-4 ${locale === 'ar' ? '' : 'rotate-180'}`} />
                <span>{t.prev}</span>
              </button>

              <button
                id="test-skip-btn"
                type="button"
                onClick={handleSkip}
                className="px-5 py-2.5 border border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl font-bold transition-colors cursor-pointer text-xs sm:text-sm"
              >
                {t.skip}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-left ml-2">
                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">{t.autoSave}</div>
                <div className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>{t.systemConnected}</span>
                </div>
              </div>

              <button
                id="test-next-btn"
                type="button"
                onClick={handleNext}
                className="px-8 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:translate-y-[-1px] transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>{currentIndex === questions.length - 1 ? t.reviewSubmit : t.next}</span>
                <ChevronLeft className={`w-4 h-4 ${locale === 'ar' ? '' : 'rotate-180'}`} />
              </button>
            </div>

          </div>

        </section>

      </div>

      {/* Strategic In-Test Banner Ad (CLS Safe) */}
      <AdBanner slotType="in_test" adId="ad-in-test-simulator" />

      {/* Question Palette Modal Drawer (Mobile / Fast Trigger) */}
      {isPaletteOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1E293B] border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col text-slate-100">
            
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <h3 className="text-base font-black text-slate-100 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-blue-400" />
                <span>{t.paletteTitle}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsPaletteOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-slate-300 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-green-500/30 border border-green-500/50" />
                <span>{t.answered} ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-amber-500/30 border border-amber-500/50" />
                <span>{t.flagged} ({flaggedIds.length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-slate-700" />
                <span>{t.unanswered} ({questions.length - answeredCount})</span>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 overflow-y-auto py-2 pr-1">
              {questions.map((q, idx) => {
                const answered = Boolean(userAnswers[q.id]);
                const flagged = flaggedIds.includes(q.id);
                const isCurrent = idx === currentIndex;

                let btnBg = 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700';

                if (answered) {
                  btnBg = 'bg-green-600/20 text-green-400 border-green-500/40 shadow-sm';
                }
                if (flagged) {
                  btnBg = 'bg-amber-500/30 text-amber-300 border-amber-500 font-bold';
                }
                if (isCurrent) {
                  btnBg = 'border-2 border-blue-500 bg-blue-600/30 text-white font-black ring-2 ring-blue-500/30';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPaletteOpen(false);
                    }}
                    className={`h-10 rounded-xl border text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${btnBg}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-700 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsPaletteOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors"
              >
                {t.closeReturn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Finish Confirmation Modal */}
      {showFinishConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1E293B] border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 text-center text-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto text-2xl">
              📝
            </div>
            <h3 className="text-lg font-black text-white">
              {t.confirmSubmitTitle}
            </h3>
            <div className="text-xs text-slate-300 space-y-1">
              <p dangerouslySetInnerHTML={{ __html: t.answeredSummary.replace('%count%', String(answeredCount)).replace('%total%', String(questions.length)) }} />
              {questions.length - answeredCount > 0 && (
                <p className="text-amber-400 font-bold">
                  {t.unansweredWarning.replace('%count%', String(questions.length - answeredCount))}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowFinishConfirm(false)}
                className="py-2.5 px-4 rounded-xl border border-slate-700 text-slate-300 text-xs font-bold hover:bg-slate-800"
              >
                {t.continueSolving}
              </button>
              <button
                id="confirm-submit-test-btn"
                type="button"
                onClick={handleConfirmFinish}
                className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                {t.yesSubmit}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1E293B] border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 text-center text-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 text-red-400 border border-red-500/30 flex items-center justify-center mx-auto text-2xl">
              ⚠️
            </div>
            <h3 className="text-lg font-black text-white">
              {t.exitConfirmTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.exitConfirmDesc}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="py-2.5 px-4 rounded-xl border border-slate-700 text-slate-300 text-xs font-bold hover:bg-slate-800"
              >
                {t.stayInTest}
              </button>
              <button
                type="button"
                onClick={onCancelTest}
                className="py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black shadow-md shadow-red-600/20 cursor-pointer"
              >
                {t.yesExit}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Feedback & Report Modal */}
      <FeedbackModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        currentQuestion={currentQuestion}
        selectedCountry={country}
        locale={locale}
      />

    </div>
  );
};
