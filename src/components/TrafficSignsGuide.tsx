import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  ShieldAlert, 
  AlertTriangle, 
  Navigation, 
  Info, 
  HelpCircle, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Eye,
  RotateCw
} from 'lucide-react';
import { TrafficSign, SignCategory } from '../types';
import { TRAFFIC_SIGNS_DATA } from '../data/trafficSignsData';
import { TrafficSignSvg } from './TrafficSignSvg';
import { AdBanner } from './AdBanner';

interface TrafficSignsGuideProps {
  onStartSignQuiz?: (sign: TrafficSign) => void;
}

export const TrafficSignsGuide: React.FC<TrafficSignsGuideProps> = ({ onStartSignQuiz }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SignCategory | 'all'>('all');
  const [selectedSign, setSelectedSign] = useState<TrafficSign | null>(null);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [revealedCardIds, setRevealedCardIds] = useState<string[]>([]);

  // Filter logic
  const filteredSigns = TRAFFIC_SIGNS_DATA.filter((sign) => {
    const matchesCategory = selectedCategory === 'all' || sign.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      sign.name.includes(searchQuery) ||
      sign.meaning.includes(searchQuery) ||
      sign.description.includes(searchQuery) ||
      sign.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesList: { id: SignCategory | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'جميع الإشارات', count: TRAFFIC_SIGNS_DATA.length },
    {
      id: 'warning',
      label: 'علامات تحذيرية',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'warning').length,
    },
    {
      id: 'prohibitory',
      label: 'علامات منعية وتنظيمية',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'prohibitory').length,
    },
    {
      id: 'mandatory',
      label: 'علامات إلزامية',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'mandatory').length,
    },
    {
      id: 'guide',
      label: 'علامات إرشادية',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'guide').length,
    },
    {
      id: 'priority',
      label: 'أسبقية وأشغال',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'priority').length,
    },
    {
      id: 'ground',
      label: 'علامات أرضية',
      count: TRAFFIC_SIGNS_DATA.filter((s) => s.category === 'ground').length,
    },
  ];

  const toggleRevealCard = (id: string) => {
    setRevealedCardIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-200 text-slate-100">
      
      {/* Top Banner Ad */}
      <AdBanner slotType="leaderboard" adId="ad-signs-guide-top" />

      {/* Header & Controls */}
      <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>دليل الإشارات الشامل</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100">
              دليل وموسوعة إشارات المرور المعتمدة
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              تعرّف على معاني كافة الإشارات واللوحات المرورية والإجراء المطلوب والعقوبة النظامية عند مخالفتها.
            </p>
          </div>

          {/* Flashcard Mode Switch */}
          <button
            type="button"
            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer ${
              isFlashcardMode
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 ring-2 ring-amber-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isFlashcardMode ? 'وضع البطاقات الذكية (مفعل)' : 'تفعيل وضع حفظ الإشارات (Flashcards)'}</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن أي إشارة بالاسم أو الرمز (مثل: قف، سرعة، دوار، مشاة)..."
            className="w-full pl-4 pr-12 py-3.5 rounded-2xl border border-slate-700 bg-slate-800/90 text-xs sm:text-sm font-medium text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
            >
              مسح
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-blue-700 text-white' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Strategic Medium rectangle banner in Signs Guide */}
      <AdBanner slotType="rectangle" adId="ad-signs-guide-mid" />

      {/* Signs Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredSigns.length === 0 ? (
          <div className="col-span-full py-16 text-center bg-[#1E293B] rounded-3xl border border-slate-700 text-slate-400 space-y-2">
            <Info className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-200">لم يتم العثور على إشارات تطابق بحثك</p>
            <p className="text-xs text-slate-400">جرب كتابة مصطلح بحث آخر أو اختر فئة مختلفة</p>
          </div>
        ) : (
          filteredSigns.map((sign) => {
            const isRevealed = revealedCardIds.includes(sign.id);

            return (
              <div
                key={sign.id}
                id={`sign-card-${sign.id}`}
                className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-5 shadow-lg hover:border-blue-500/60 hover:shadow-xl transition-all flex flex-col justify-between space-y-4 relative group"
              >
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                    {sign.code}
                  </span>
                  <span className="text-[10px] font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                    {sign.categoryName}
                  </span>
                </div>

                {/* SVG Visual Graphic in white display container */}
                <div className="p-4 bg-white rounded-2xl border border-slate-700/60 flex items-center justify-center min-h-[140px] shadow-2xl shadow-black/40">
                  <TrafficSignSvg signId={sign.id} size={90} />
                </div>

                {/* Sign Details or Flashcard Cover */}
                {isFlashcardMode && !isRevealed ? (
                  <div className="text-center py-4 space-y-2 bg-amber-500/10 rounded-2xl border border-amber-500/30 p-3">
                    <p className="text-xs font-bold text-amber-300">هل تعرف معنى هذه الإشارة والإجراء المطلوب؟</p>
                    <button
                      type="button"
                      onClick={() => toggleRevealCard(sign.id)}
                      className="text-xs font-black text-slate-950 bg-amber-500 hover:bg-amber-400 px-4 py-1.5 rounded-xl shadow-md transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>كشف الإجابة والمعنى</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black text-slate-100 leading-snug">
                        {sign.name}
                      </h3>
                      {isFlashcardMode && (
                        <button
                          onClick={() => toggleRevealCard(sign.id)}
                          className="text-[10px] text-slate-400 hover:text-slate-200 underline"
                        >
                          إخفاء
                        </button>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      <strong className="text-slate-100">المعنى:</strong> {sign.meaning}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      <strong className="text-slate-100">الإجراء:</strong> {sign.actionRequired}
                    </p>

                    {sign.penaltyNote && (
                      <div className="text-[11px] text-red-300 bg-red-950/30 p-2 rounded-xl border border-red-500/30 flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{sign.penaltyNote}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Footer Actions */}
                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedSign(sign)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>تفاصيل الإشارة الكاملة</span>
                  </button>

                  <span className="text-[10px] text-slate-400">
                    شكل {sign.shape === 'triangle' ? 'مثلث' : sign.shape === 'circle' ? 'دائري' : 'لوحة'}
                  </span>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Middle Banner Ad */}
      <AdBanner slotType="in_article" adId="ad-signs-guide-mid" />

      {/* Sign Detail Modal */}
      {selectedSign && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#1E293B] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 text-slate-100">
            
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300">
                  {selectedSign.code}
                </span>
                <span className="text-xs font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                  {selectedSign.categoryName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSign(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-700 shadow-xl">
              <TrafficSignSvg signId={selectedSign.id} size={120} />
              <h3 className="text-lg font-black text-slate-900 mt-4 text-center">
                {selectedSign.name}
              </h3>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-slate-100">الوصف الشكلي:</div>
                <p className="text-slate-400">{selectedSign.description}</p>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-slate-100">الدلالة والمعنى القانوني:</div>
                <p className="text-slate-400">{selectedSign.meaning}</p>
              </div>

              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 space-y-1 text-blue-200">
                <div className="font-bold text-blue-300">التصرف والواجب المطلوب من السائق:</div>
                <p>{selectedSign.actionRequired}</p>
              </div>

              {selectedSign.penaltyNote && (
                <div className="p-3 bg-red-950/30 rounded-xl border border-red-500/30 space-y-1 text-red-200">
                  <div className="font-bold text-red-300">المخالفة والعقوبة المرورية:</div>
                  <p>{selectedSign.penaltyNote}</p>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedSign(null)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
