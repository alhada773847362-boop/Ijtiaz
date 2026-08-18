import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Scale, Search, Info, CheckCircle2 } from 'lucide-react';
import { CountryInfo } from '../types';
import { VIOLATIONS_DATA } from '../data/violationsData';
import { AdBanner } from './AdBanner';

interface ViolationsGuideProps {
  selectedCountry: CountryInfo;
}

export const ViolationsGuide: React.FC<ViolationsGuideProps> = ({ selectedCountry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'severe' | 'points'>('all');

  const filteredViolations = VIOLATIONS_DATA.filter((item) => {
    const matchesCountry = item.countryId === 'all' || item.countryId === selectedCountry.id;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.violation.includes(searchQuery) ||
      item.category.includes(searchQuery) ||
      item.consequences.includes(searchQuery);

    if (!matchesCountry || !matchesSearch) return false;
    if (selectedFilter === 'severe') return item.points >= 12;
    if (selectedFilter === 'points') return item.points > 0;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Banner Ad */}
      <AdBanner slotType="leaderboard" adId="ad-violations-top" />

      {/* Header */}
      <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>جدول المخالفات والنقاط المرورية</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
          دليل المخالفات والغرامات ونظام النقاط ({selectedCountry.name})
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          تعرف على تصنيف المخالفات المرورية وقيمة الغرامات والنقاط المسجلة في السجل المروري وكيفية تجنب تعليق أو سحب رخصة القيادة.
        </p>

        {/* Search */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن أي مخالفة (مثل: إشارة حمراء، سرعة، جوال، حزام)..."
            className="w-full pl-4 pr-12 py-3.5 rounded-2xl border border-slate-700 bg-slate-800 text-xs sm:text-sm font-medium text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Important Legal Notes Card */}
      <div className="p-6 rounded-3xl bg-[#0F172A] text-white shadow-xl border border-slate-700/80 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
          <AlertTriangle className="w-4 h-4" />
          <span>قواعد أساسية في نظام النقاط المرورية:</span>
        </div>
        <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
          <li>• تسجيل <strong className="text-amber-400 font-bold">24 نقطة مرورية</strong> في سجل السائق خلال سنة هجرية واحدة يؤدي إلى سحب رخصة القيادة لمدة 3 أشهر في المرة الأولى.</li>
          <li>• تكرار الوصول إلى 24 نقطة للمرة الرابعة يترتب عليه <strong className="text-red-400 font-bold">إلغاء رخصة القيادة نهائياً</strong>.</li>
          <li>• القيادة بالرخصة المسحوبة يعاقب عليها كقيادة بدون رخصة مع التوقيف والغرامة.</li>
        </ul>
      </div>

      {/* Strategic Medium rectangle banner in Violations Guide */}
      <AdBanner slotType="rectangle" adId="ad-violations-list-rectangle" />

      {/* Violations List */}
      <div className="space-y-4">
        {filteredViolations.map((item) => (
          <div
            key={item.id}
            className="bg-[#1E293B] rounded-2xl border border-slate-700/80 p-5 shadow-md hover:border-blue-500/50 transition-all space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-2.5">
              <span className="text-xs font-bold text-red-300 bg-red-950/40 border border-red-500/30 px-2.5 py-0.5 rounded-lg">
                {item.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded-md">
                  {item.points} نقاط
                </span>
                <span className="text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-md font-mono">
                  {item.fineRange}
                </span>
              </div>
            </div>

            <h3 className="text-sm font-black text-slate-100 leading-relaxed">
              {item.violation}
            </h3>

            <div className="text-xs text-slate-300 bg-slate-800/70 p-3 rounded-xl border border-slate-700/80 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span><strong className="text-slate-100">العقوبة الإضافية:</strong> {item.consequences}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Banner Ad */}
      <AdBanner slotType="in_test" adId="ad-violations-mid" />

    </div>
  );
};
