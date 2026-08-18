import React from 'react';

interface TrafficSignSvgProps {
  signId: string;
  size?: number;
  className?: string;
}

export const TrafficSignSvg: React.FC<TrafficSignSvgProps> = ({
  signId,
  size = 96,
  className = '',
}) => {
  const renderSignContent = () => {
    switch (signId) {
      // 1. STOP SIGN
      case 'reg_stop':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="3" />
            <polygon points="31,8 69,8 92,31 92,69 69,92 31,92 8,69 8,31" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" />
            <text x="50" y="47" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900" fontFamily="Cairo, Tajawal, sans-serif">قف</text>
            <text x="50" y="66" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">STOP</text>
          </svg>
        );

      // 2. YIELD / GIVE WAY
      case 'reg_yield':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,92 8,14 92,14" fill="#dc2626" />
            <polygon points="50,76 18,22 82,22" fill="#ffffff" />
            <text x="50" y="46" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="900" fontFamily="Cairo, sans-serif">أعطِ</text>
            <text x="50" y="60" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="800" fontFamily="Cairo, sans-serif">الأولوية</text>
          </svg>
        );

      // 3. NO ENTRY
      case 'reg_no_entry':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <rect x="16" y="42" width="68" height="16" rx="4" fill="#ffffff" />
          </svg>
        );

      // 4. SPEED LIMIT 80
      case 'reg_speed_limit_80':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="9" />
            <text x="50" y="61" textAnchor="middle" fill="#1e293b" fontSize="34" fontWeight="900" fontFamily="Cairo, sans-serif">80</text>
          </svg>
        );

      // 5. NO OVERTAKING
      case 'reg_no_overtaking':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
            {/* Red car (left) */}
            <g transform="translate(24, 34) scale(0.65)">
              <rect x="2" y="10" width="28" height="32" rx="6" fill="#dc2626" />
              <rect x="6" y="18" width="20" height="12" rx="2" fill="#ffffff" opacity="0.8" />
              <circle cx="6" cy="14" r="3" fill="#fbbf24" />
              <circle cx="26" cy="14" r="3" fill="#fbbf24" />
            </g>
            {/* Black car (right) */}
            <g transform="translate(48, 34) scale(0.65)">
              <rect x="2" y="10" width="28" height="32" rx="6" fill="#1e293b" />
              <rect x="6" y="18" width="20" height="12" rx="2" fill="#ffffff" opacity="0.8" />
              <circle cx="6" cy="14" r="3" fill="#fbbf24" />
              <circle cx="26" cy="14" r="3" fill="#fbbf24" />
            </g>
          </svg>
        );

      // 6. NO U-TURN
      case 'reg_no_u_turn':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
            <path d="M 64 68 V 44 C 64 28 36 28 36 44 V 62" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" fill="none" />
            <polygon points="36,72 26,58 46,58" fill="#1e293b" />
            <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
          </svg>
        );

      // 7. NO PARKING
      case 'reg_no_parking':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#dc2626" strokeWidth="8" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
          </svg>
        );

      // 8. NO HORNS
      case 'reg_no_horns':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
            {/* Horn symbol */}
            <path d="M 28 44 L 46 38 L 46 62 L 28 56 Z" fill="#1e293b" />
            <path d="M 46 42 C 58 42 66 32 68 30 L 68 70 C 66 68 58 58 46 58" fill="#1e293b" />
            <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
          </svg>
        );

      // 9. WARNING PEDESTRIAN CROSSING
      case 'warn_pedestrian':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            {/* Pedestrian */}
            <circle cx="50" cy="40" r="5" fill="#1e293b" />
            <path d="M 48 47 L 52 47 L 54 62 L 58 74 M 50 54 L 42 74 M 43 51 L 57 51" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Zebra crossing lines */}
            <line x1="30" y1="76" x2="70" y2="76" stroke="#1e293b" strokeWidth="2" strokeDasharray="5,4" />
          </svg>
        );

      // 10. WARNING TRAFFIC LIGHT
      case 'warn_traffic_light':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            <rect x="42" y="36" width="16" height="38" rx="4" fill="#1e293b" />
            <circle cx="50" cy="43" r="4" fill="#ef4444" />
            <circle cx="50" cy="55" r="4" fill="#f59e0b" />
            <circle cx="50" cy="67" r="4" fill="#10b981" />
          </svg>
        );

      // 11. WARNING SPEED BUMP
      case 'warn_speed_bump':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            <path d="M 28 66 Q 50 40 72 66 Z" fill="#1e293b" />
          </svg>
        );

      // 12. WARNING SLIPPERY ROAD
      case 'warn_slippery_road':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            {/* Skidding car */}
            <rect x="40" y="38" width="20" height="14" rx="3" fill="#1e293b" />
            <path d="M 38 58 Q 44 64 36 72 M 52 58 Q 62 64 54 72" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      // 13. WARNING ROUNDABOUT
      case 'warn_roundabout':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            <circle cx="50" cy="56" r="14" stroke="#1e293b" strokeWidth="4" strokeDasharray="18 10" fill="none" />
            <polygon points="64,52 68,42 58,46" fill="#1e293b" />
            <polygon points="36,60 32,70 42,66" fill="#1e293b" />
          </svg>
        );

      // 14. MANDATORY ROUNDABOUT (BLUE)
      case 'man_roundabout':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            <circle cx="50" cy="50" r="24" stroke="#ffffff" strokeWidth="5" strokeDasharray="26 12" fill="none" />
            <polygon points="72,42 78,30 64,34" fill="#ffffff" />
            <polygon points="28,58 22,70 36,66" fill="#ffffff" />
            <polygon points="50,78 62,80 56,68" fill="#ffffff" />
          </svg>
        );

      // 15. MANDATORY STRAIGHT ONLY
      case 'man_straight_only':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            <path d="M 50 74 L 50 32" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
            <polygon points="50,18 36,36 64,36" fill="#ffffff" />
          </svg>
        );

      // 16. MANDATORY TURN RIGHT
      case 'man_turn_right':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            <path d="M 38 68 L 38 46 Q 38 34 50 34 L 62 34" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" />
            <polygon points="74,34 58,22 58,46" fill="#ffffff" />
          </svg>
        );

      // 17. MINIMUM SPEED 60
      case 'man_min_speed_60':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="34" fontWeight="900" fontFamily="Cairo, sans-serif">60</text>
          </svg>
        );

      // 18. HOSPITAL GUIDE
      case 'gui_hospital':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <rect x="10" y="10" width="80" height="80" rx="10" fill="#2563eb" stroke="#ffffff" strokeWidth="3" />
            <rect x="22" y="22" width="56" height="56" rx="6" fill="#ffffff" />
            <text x="50" y="62" textAnchor="middle" fill="#dc2626" fontSize="38" fontWeight="900" fontFamily="sans-serif">H</text>
          </svg>
        );

      // 19. GAS STATION GUIDE
      case 'gui_gas_station':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <rect x="10" y="10" width="80" height="80" rx="10" fill="#2563eb" stroke="#ffffff" strokeWidth="3" />
            <rect x="22" y="22" width="56" height="56" rx="6" fill="#ffffff" />
            {/* Gas pump symbol */}
            <path d="M 36 40 L 52 40 L 52 68 L 36 68 Z" fill="#1e293b" />
            <rect x="40" y="44" width="8" height="6" fill="#ffffff" />
            <path d="M 52 46 Q 62 46 62 56 L 62 64 L 58 64" stroke="#1e293b" strokeWidth="3" fill="none" />
          </svg>
        );

      // 20. PARKING ALLOWED (P)
      case 'gui_parking_allowed':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <rect x="10" y="10" width="80" height="80" rx="10" fill="#2563eb" stroke="#ffffff" strokeWidth="3" />
            <text x="50" y="68" textAnchor="middle" fill="#ffffff" fontSize="48" fontWeight="900" fontFamily="sans-serif">P</text>
          </svg>
        );

      // 21. HIGHWAY START
      case 'gui_highway_start':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <rect x="10" y="10" width="80" height="80" rx="10" fill="#059669" stroke="#ffffff" strokeWidth="3" />
            <line x1="32" y1="80" x2="44" y2="40" stroke="#ffffff" strokeWidth="4" />
            <line x1="68" y1="80" x2="56" y2="40" stroke="#ffffff" strokeWidth="4" />
            <rect x="24" y="32" width="52" height="10" rx="2" fill="#ffffff" />
          </svg>
        );

      // 22. PRIORITY MAIN ROAD
      case 'prio_main_road':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,10 90,50 50,90 10,50" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
            <polygon points="50,22 78,50 50,78 22,50" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
          </svg>
        );

      // 23. WARNING SCHOOL CHILDREN
      case 'warn_school_children':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            <circle cx="44" cy="38" r="4" fill="#1e293b" />
            <path d="M 42 43 L 46 43 L 48 58 L 52 70 M 44 52 L 38 70" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="58" cy="46" r="3.5" fill="#1e293b" />
            <path d="M 57 50 L 60 50 L 61 62 L 64 72 M 58 56 L 54 72" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      // 24. WARNING ROAD WORKS
      case 'warn_road_works':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#ea580c" />
            <polygon points="50,22 18,80 82,80" fill="#fef08a" />
            <circle cx="54" cy="40" r="4" fill="#1e293b" />
            <path d="M 52 45 L 46 62 L 36 68 M 46 54 L 58 64 L 62 76" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
            <line x1="32" y1="76" x2="42" y2="66" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      // 25. WARNING TWO WAY TRAFFIC
      case 'warn_two_way_traffic':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <polygon points="50,8 6,88 94,88" fill="#dc2626" />
            <polygon points="50,22 18,80 82,80" fill="#ffffff" />
            {/* Up arrow */}
            <path d="M 40 70 L 40 44" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <polygon points="40,36 32,46 48,46" fill="#1e293b" />
            {/* Down arrow */}
            <path d="M 60 40 L 60 66" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <polygon points="60,74 52,64 68,64" fill="#1e293b" />
          </svg>
        );

      // Default generic sign
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-sm">
            <circle cx="50" cy="50" r="45" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="4" />
            <text x="50" y="55" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="700" fontFamily="Cairo, sans-serif">إشارة مرورية</text>
          </svg>
        );
    }
  };

  return <div className={`inline-flex items-center justify-center select-none ${className}`}>{renderSignContent()}</div>;
};

// Realistic Intersection / Priority Diagram Component
export const RoadSituationDiagram: React.FC<{
  type: 'intersection_1' | 'roundabout_1' | 'overtaking_1' | 'parking_1';
  size?: number;
}> = ({ type, size = 260 }) => {
  if (type === 'intersection_1') {
    return (
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-md text-white">
        <div className="text-xs text-amber-400 font-bold mb-2 text-center">مخطط أسبقية المرور عند التقاطع غير المنظم</div>
        <svg width="100%" height="180" viewBox="0 0 300 200" fill="none">
          {/* Roads */}
          <rect x="0" y="65" width="300" height="70" fill="#334155" />
          <rect x="115" y="0" width="70" height="200" fill="#334155" />
          {/* Dashed center lines */}
          <line x1="0" y1="100" x2="115" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="185" y1="100" x2="300" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="150" y1="0" x2="150" y2="65" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="150" y1="135" x2="150" y2="200" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          
          {/* Car 1 (Red - Going straight from right) */}
          <g transform="translate(230, 105)">
            <rect x="0" y="0" width="36" height="20" rx="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <text x="18" y="15" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">1</text>
            {/* Arrow going left */}
            <path d="M -5 10 L -25 10" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrow)" />
          </g>

          {/* Car 2 (Blue - Turning left from bottom) */}
          <g transform="translate(155, 150)">
            <rect x="0" y="0" width="20" height="36" rx="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
            <text x="10" y="22" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">2</text>
            {/* Curved arrow turning to west */}
            <path d="M 10 -5 Q 10 -35 -20 -35" stroke="#38bdf8" strokeWidth="3" fill="none" />
          </g>

          {/* Car 3 (Green - Going straight from top) */}
          <g transform="translate(125, 15)">
            <rect x="0" y="0" width="20" height="36" rx="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <text x="10" y="22" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">3</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'roundabout_1') {
    return (
      <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-md text-white">
        <div className="text-xs text-amber-400 font-bold mb-2 text-center">أولوية السير داخل الدوار</div>
        <svg width="100%" height="180" viewBox="0 0 300 200" fill="none">
          {/* Roundabout Island */}
          <circle cx="150" cy="100" r="35" fill="#1e293b" stroke="#10b981" strokeWidth="4" />
          {/* Circular roadway */}
          <circle cx="150" cy="100" r="65" stroke="#475569" strokeWidth="30" fill="none" />
          
          {/* Car A (Inside roundabout) */}
          <g transform="translate(140, 40)">
            <rect x="0" y="0" width="30" height="18" rx="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <text x="15" y="13" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">A</text>
          </g>

          {/* Car B (Approaching roundabout from south) */}
          <g transform="translate(140, 160)">
            <rect x="0" y="0" width="20" height="32" rx="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
            <text x="10" y="20" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">B</text>
          </g>
          
          <text x="150" y="105" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700">جزيرة الدوار</text>
        </svg>
      </div>
    );
  }

  return null;
};
