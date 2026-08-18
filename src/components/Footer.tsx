import React from 'react';
import { Car, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { CountryInfo } from '../types';

interface FooterProps {
  selectedCountry: CountryInfo;
  onNavigate: (view: 'home' | 'test' | 'signs' | 'violations' | 'history') => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedCountry, onNavigate }) => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-slate-100 tracking-tight">
                منصة اجتياز
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              المنصة العربية الذكية الأولى لمحاكاة اختبار رخصة القيادة النظري المعتمد في {selectedCountry.name} وكافة الدول العربية. تم تصميم المنصة لمساعدة المتدربين على الفهم العميق لقواعد المرور والإشارات واجتياز الاختبار الرسمي من المحاولة الأولى.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>نماذج محدثة وفق نظام {selectedCountry.authority}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('test')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  بدء الاختبار التجريبي الكامل
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('signs')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  دليل الإشارات واللوحات المرورية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('violations')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  جدول المخالفات والنقاط المرورية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  سجل الاختبارات والنتائج
                </button>
              </li>
            </ul>
          </div>

          {/* Tips / Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100">إرشادات هامة للمتدرب</h4>
            <ul className="space-y-2 text-xs text-slate-400 leading-normal">
              <li>• نسبة النجاح المطلوبة في {selectedCountry.name} هي {selectedCountry.passingScorePercentage}%.</li>
              <li>• تدرب على قراءة السؤال جيداً قبل اختيار الإجابة.</li>
              <li>• احرص على فهم إشارات المنع والإلزام والأسبقية.</li>
              <li>• الاختبارات في المنصة مطابقة للأنظمة المرورية المعتمدة.</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} لمنصة اجتياز الذكية (Ijtiaz).
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنعت بعناية لتعزيز السلامة المرورية والحد من الحوادث</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
