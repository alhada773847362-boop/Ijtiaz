import React, { useEffect, useRef } from 'react';
import { Info, ShieldAlert } from 'lucide-react';

interface AdBannerProps {
  slotType: 'leaderboard' | 'in_test' | 'sidebar' | 'in_article' | 'rectangle';
  className?: string;
  adId?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slotType,
  className = '',
  adId = 'hilltop_ad_slot',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject HilltopAds Desktop/Mobile banner dynamically based on slotType
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      const script = document.createElement('script');
      
      // Load standard high-performing banner zones
      if (slotType === 'leaderboard' || slotType === 'in_article') {
        script.src = '//massivesalad.com/bdXpV/sad.GslG0QYsWScj/reQmm9ouRZ_U/lUkePDT/c/z/MUD/I/y/OATrc/t/NKznM-wAM/jeMEwzMkQP';
      } else {
        script.src = '//massivesalad.com/b/XJVps.dWGfl/0GYwWfcX/NeCmY9iurZjUrl/kLPLTKcezoMMDxI_ybOEDSU/tDNWzVMVwLMRjBIb4wOlQe';
      }
      
      script.async = true;
      script.referrerPolicy = 'no-referrer-when-downgrade';
      containerRef.current.appendChild(script);
    }
  }, [slotType]);

  // Determine standard wrapper dimensions based on slotType to prevent Layout Shifts (CLS)
  let containerStyle: React.CSSProperties = { minHeight: '90px' };
  let headerText = 'إعلان معتمد من هيلتوب آدز • HilltopAds';

  if (slotType === 'rectangle') {
    containerStyle = { minHeight: '250px', maxWidth: '336px' };
    headerText = 'إعلان معتمد من هيلتوب آدز • HilltopAds Rectangle';
  } else if (slotType === 'sidebar') {
    containerStyle = { minHeight: '300px', maxWidth: '240px' };
    headerText = 'إعلان معتمد من هيلتوب آدز • HilltopAds Sidebar';
  } else if (slotType === 'in_test') {
    containerStyle = { minHeight: '100px' };
    headerText = 'إعلان معتمد من هيلتوب آدز • HilltopAds In-Quiz';
  }

  return (
    <aside
      id={adId}
      className={`w-full mx-auto my-3 overflow-hidden rounded-2xl border border-slate-750 bg-[#1E293B]/60 shadow-lg text-center transition-all ${className}`}
      style={containerStyle}
    >
      {/* Universal Honest Header */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#0F172A]/70 border-b border-slate-750 text-[10px] text-slate-400 font-semibold select-none">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-blue-400" />
          <span>{headerText}</span>
        </span>
        <span className="bg-slate-800 border border-slate-700/80 text-slate-400 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase">AD</span>
      </div>

      {/* Live Interactive Script Ad Container (Renders HilltopAds dynamic bids cleanly) */}
      <div className="w-full h-full p-2 flex items-center justify-center bg-slate-900/10 min-h-[inherit]">
        <div ref={containerRef} className="w-full h-full flex items-center justify-center min-h-[inherit]">
          {/* Subtle loading fallback during ad fetch */}
          <div className="text-[11px] text-slate-500 py-4 flex items-center gap-1.5 animate-pulse">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>جاري تحميل الإعلان المعتمد...</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
