import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Mail, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Cookie, 
  ExternalLink,
  Lock,
  Eye,
  Server,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | 'contact' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
  locale?: 'ar' | 'en';
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  activeModal,
  onClose,
  locale = 'ar',
}) => {
  if (!activeModal) return null;

  const isAr = locale === 'ar';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#1E293B] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100"
          id="legal-modal-container"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/80 bg-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {activeModal === 'privacy' && <Lock className="w-5 h-5" />}
                {activeModal === 'terms' && <FileText className="w-5 h-5" />}
                {activeModal === 'disclaimer' && <AlertTriangle className="w-5 h-5" />}
                {activeModal === 'contact' && <Mail className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  {activeModal === 'privacy' && (isAr ? 'سياسة الخصوصية وملفات الارتباط' : 'Privacy Policy & Cookies')}
                  {activeModal === 'terms' && (isAr ? 'شروط الاستخدام والخدمة' : 'Terms of Service')}
                  {activeModal === 'disclaimer' && (isAr ? 'إخلاء المسؤولية القانونية' : 'Legal Disclaimer')}
                  {activeModal === 'contact' && (isAr ? 'تواصل معنا والدعم الفني' : 'Contact & Support')}
                </h3>
                <p className="text-xs text-slate-400">
                  {isAr ? 'منصة اجتياز - آخر تحديث: 2026' : 'Ijtiaz Simulator - Last Updated: 2026'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer"
              aria-label="Close"
              id="close-legal-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-normal">
            
            {/* 1. PRIVACY POLICY */}
            {activeModal === 'privacy' && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p>
                    {isAr 
                      ? 'نحن في منصة اجتياز نلتزم بحماية خصوصيتك التامة. لا نطلب أي بيانات شخصية حساسة (كالاسم الكامل أو الهوية أو كلمة المرور) لاستخدام محاكي الاختبارات المجاني.'
                      : 'At Ijtiaz, we are fully committed to protecting your privacy. We never require sensitive personal data (such as national IDs or passwords) to use our free practice simulator.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base flex items-center gap-2">
                    <Server className="w-4 h-4 text-blue-400" />
                    {isAr ? '1. البيانات التي يتم تخزينها محلياً (Local Storage)' : '1. Locally Stored Data'}
                  </h4>
                  <p>
                    {isAr
                      ? 'يتم تخزين نتائج الاختبارات السابقة والأسئلة المفضلة ومعدل درجاتك محلياً على متصفح جهازك فقط (Local Device Storage) لتمكينك من متابعة تقدمك الدراسي دون إرسالها إلى أي خوادم خارجية.'
                      : 'Your past practice scores, flagged questions, and learning progress are stored locally on your device browser only.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-blue-400" />
                    {isAr ? '2. ملفات تعريف الارتباط وشبكات الإعلانات (Cookies & Advertising)' : '2. Cookies & Advertising Partners'}
                  </h4>
                  <p>
                    {isAr
                      ? 'يستخدم الموقع ملفات تعريف الارتباط المجهولة (Cookies) لتحسين سرعة التصفح، وتحليل حركة الزوار، وعرض إعلانات غير مخصصة ومطابقة لمعايير السلامة الرقمية المعتمدة لدى شبكات الإعلانات الشريكة (مثل HilltopAds و Google).'
                      : 'We use anonymous cookies to enhance performance, traffic analysis, and display relevant educational partner advertisements.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-400" />
                    {isAr ? '3. حقوق المستخدم والتحكم في البيانات' : '3. Your Data Rights'}
                  </h4>
                  <p>
                    {isAr
                      ? 'يمكنك في أي وقت مسح سجل اختباراتك وتفضيلاتك بنقرة واحدة من صفحة "سجل الاختبارات" أو عبر مسح بيانات التخزين المؤقت لمتصفحك.'
                      : 'You can clear your stored test history and reset cookies anytime directly from your browser settings or test history tab.'}
                  </p>
                </div>
              </div>
            )}

            {/* 2. TERMS OF SERVICE */}
            {activeModal === 'terms' && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    {isAr
                      ? 'استخدامك لمنصة اجتياز يعني موافقتك الكاملة على الشروط والضوابط الموضحة أدناه، والتي تهدف لتوفير بيئة تعليمية آمنة ومجانية للجميع.'
                      : 'By using Ijtiaz Driving Simulator, you agree to comply with our fair-use educational terms.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base">
                    {isAr ? '1. الغرض التعليمي والتدريبي' : '1. Educational Purpose'}
                  </h4>
                  <p>
                    {isAr
                      ? 'تم تطوير منصة اجتياز كوسيلة مساعدة تفاعلية وتدريبية لتمكين الطلاب والمتدربين من مراجعة قوانين وإشارات المرور والتحضير للاختبار النظري لرخصة القيادة.'
                      : 'This platform is developed solely as an interactive educational aid to prepare drivers for their official theoretical licensing tests.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base">
                    {isAr ? '2. الاستخدام العادل والمجاني' : '2. Fair Use'}
                  </h4>
                  <p>
                    {isAr
                      ? 'الخدمة متاحة مجاناً للاستخدام الشخصي الفردي. يُحظر إعادة نسخ أو سحب بنك الأسئلة لأغراض تجارية دون إذن كتابي مسبق.'
                      : 'Our service is completely free for individual learning. Automated scraping or commercial redistribution of question banks is strictly prohibited.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base">
                    {isAr ? '3. التحديثات والتعديلات المستمرة' : '3. Content Updates'}
                  </h4>
                  <p>
                    {isAr
                      ? 'نعمل باستمرار على تحديث الأسئلة والقواعد لتواكب أحدث اللوائح المرورية الصادرة عن إدارات المرور في الدول العربية والولايات المتحدة.'
                      : 'We regularly update traffic questions and sign classifications to match current traffic guidelines.'}
                  </p>
                </div>
              </div>
            )}

            {/* 3. DISCLAIMER */}
            {activeModal === 'disclaimer' && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p>
                    {isAr
                      ? 'منصة اجتياز هي منصة تعليمية مستقلة وغير تابعة لأي جهة حكومية أو إدارة ترخيص رسمية بشكل مباشر.'
                      : 'Ijtiaz is an independent educational training platform and is not directly affiliated with any government licensing authority.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-white text-base">
                    {isAr ? 'إخلاء المسؤولية عن الاختبارات الرسمية' : 'Official Exam Disclaimer'}
                  </h4>
                  <p>
                    {isAr
                      ? 'بينما نحرص على تقديم نماذج أسئلة مطابقة ودقيقة بنسبة فائقة للمناهج الرسمية لمدارس القيادة (مثل دله السعودية، وهيئة الطرق والمواصلات بدبي، والمرور العام)، إلا أن اجتياز الاختبار في الموقع هو خطوة تدريبية تأهيلية ولا يعتبر شهادة رخصة قيادة رسمية صادرة من المرور.'
                      : 'While our question banks are meticulously modeled after official tests (such as Dallah, RTA, and DMV), practicing on this simulator is for preparation and does not replace official on-site government certification.'}
                  </p>
                </div>
              </div>
            )}

            {/* 4. CONTACT & SUPPORT */}
            {activeModal === 'contact' && (
              <div className="space-y-5">
                <p>
                  {isAr
                    ? 'يسعدنا دائماً تلقي اقتراحاتكم، الإبلاغ عن أي ملاحظة في الأسئلة، أو طلب إضافة مدارس قيادة جديدة.'
                    : 'We welcome your feedback, question reports, or suggestions to add new regional driving schools.'}
                </p>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{isAr ? 'البريد الإلكتروني المباشر' : 'Official Support Email'}</div>
                      <a href="mailto:support@ijtiaz.com" className="font-bold text-blue-400 hover:underline">
                        support@ijtiaz.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                  <span className="font-bold block mb-1">
                    {isAr ? '⚡ وقت الاستجابة المعتاد:' : '⚡ Average Response Time:'}
                  </span>
                  {isAr ? 'يتم الرد على استفسارات المتدربين ومراجعة الأسئلة خلال 24 ساعة.' : 'We review inquiries and feedback within 24 hours.'}
                </div>
              </div>
            )}

          </div>

          {/* Footer Action */}
          <div className="px-6 py-4 border-t border-slate-700/80 bg-slate-800/60 flex items-center justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
              id="confirm-legal-modal-btn"
            >
              {isAr ? 'إغلاق ومتابعة التدريب' : 'Close & Continue'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const CookieConsentBanner: React.FC<{ locale?: 'ar' | 'en' }> = ({ locale = 'ar' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isAr = locale === 'ar';

  useEffect(() => {
    const consent = localStorage.getItem('ijtiaz_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ijtiaz_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl p-4 sm:p-5 shadow-2xl text-slate-100 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-white block mb-0.5">
              {isAr ? 'ملفات تعريف الارتباط وتجربة التصفح' : 'Cookies & Practice Experience'}
            </span>
            {isAr
              ? 'نستخدم ملفات الارتباط المجهولة لحفظ تقدمك في الاختبارات وتقديم تجربة محاكاة سلسة.'
              : 'We use cookies to save your test progress and ensure a smooth simulation experience.'}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-700/60">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md cursor-pointer"
            id="accept-cookies-btn"
          >
            {isAr ? 'موافق، متابعة' : 'Accept & Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
};
