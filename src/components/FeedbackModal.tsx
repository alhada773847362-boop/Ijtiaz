import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquarePlus, 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Flag,
  FileQuestion
} from 'lucide-react';
import { Question, CountryInfo } from '../types';
import { soundEffects } from '../utils/audioEffects';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestion?: Question | null;
  selectedCountry?: CountryInfo;
  locale?: 'ar' | 'en';
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  selectedCountry,
  locale = 'ar',
}) => {
  const isAr = locale === 'ar';
  const [feedbackType, setFeedbackType] = useState<'question_issue' | 'suggestion' | 'content_update' | 'other'>('question_issue');
  const [userEmail, setUserEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    // Save locally
    try {
      const existingReports = JSON.parse(localStorage.getItem('ijtiaz_user_reports') || '[]');
      existingReports.push({
        id: 'rep_' + Date.now(),
        date: new Date().toISOString(),
        type: feedbackType,
        email: userEmail.trim(),
        country: selectedCountry?.id || 'sa',
        questionId: currentQuestion?.id || null,
        questionText: currentQuestion?.questionText || null,
        comment: commentText.trim(),
      });
      localStorage.setItem('ijtiaz_user_reports', JSON.stringify(existingReports));
    } catch {
      // ignore
    }

    soundEffects.playCorrect();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setCommentText('');
      setUserEmail('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#1E293B] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100"
          id="feedback-modal"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/80 bg-slate-800/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white">
                  {isAr ? 'إرسال ملاحظة أو اقتراح' : 'Send Feedback or Report'}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedCountry ? (isAr ? `خاص بـ ${selectedCountry.name}` : `For ${selectedCountry.name}`) : ''}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form / Content */}
          <div className="p-6">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white">
                  {isAr ? 'شكراً لملاحظتك القيمة!' : 'Thank you for your feedback!'}
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  {isAr
                    ? 'تم تسجيل ملاحظتك وسيقوم فريق التدقيق بمراجعتها وتحديث الأسئلة لخدمة جميع المتدربين.'
                    : 'Your note has been received and will be reviewed to continuously improve the question bank.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Associated Question Card if reported during test */}
                {currentQuestion && (
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-blue-400">
                      <FileQuestion className="w-4 h-4" />
                      <span>{isAr ? 'السؤال المستهدف:' : 'Referenced Question:'}</span>
                    </div>
                    <p className="text-slate-300 line-clamp-2">
                      {currentQuestion.questionText}
                    </p>
                  </div>
                )}

                {/* Feedback Type Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    {isAr ? 'نوع الملاحظة:' : 'Feedback Type:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'question_issue', ar: 'ملاحظة في السؤال/الإجابة', en: 'Issue with Question' },
                      { id: 'content_update', ar: 'تحديث قانون أو غرامة', en: 'Law / Fine Update' },
                      { id: 'suggestion', ar: 'اقتراح تحسين للموقع', en: 'Feature Suggestion' },
                      { id: 'other', ar: 'استفسار آخر', en: 'Other Inquiry' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFeedbackType(type.id as any)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-right ltr:text-left cursor-pointer ${
                          feedbackType === type.id
                            ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-md shadow-blue-500/10'
                            : 'bg-slate-800/50 border-slate-700/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isAr ? type.ar : type.en}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment Text Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    {isAr ? 'تفاصيل الملاحظة أو الاقتراح:' : 'Details:'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder={
                      isAr
                        ? 'اكتب ملاحظتك أو التصحيح المقترح هنا بكل دقة...'
                        : 'Please provide the details of your feedback or suggestion...'
                    }
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-2xl p-3 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Optional Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                    <span>{isAr ? 'البريد الإلكتروني (اختياري للرد عليك):' : 'Email (Optional for follow-up):'}</span>
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {isAr ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 active:scale-98 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال الملاحظة' : 'Submit Feedback'}</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
