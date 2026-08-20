import React from 'react';

interface AppLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  withGlow?: boolean;
  withText?: boolean;
  appName?: string;
}

const SIZE_MAP = {
  xs: 'w-5 h-5',
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
  xl: 'w-20 h-20',
  '2xl': 'w-28 h-28'
};

export const AppLogo: React.FC<AppLogoProps> = ({
  size = 'sm',
  className = '',
  withGlow = true,
  withText = false,
  appName = 'اجتياز'
}) => {
  const sizeClasses = SIZE_MAP[size] || 'w-7 h-7';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className={`relative shrink-0 ${sizeClasses} flex items-center justify-center`}>
        {/* Ambient Neon Glow behind the logo */}
        {withGlow && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-teal-400/30 blur-md pointer-events-none -z-10 animate-pulse" />
        )}
        
        {/* Crisp Vector SVG Icon */}
        <svg
          viewBox="0 0 512 512"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(0,242,254,0.35)]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ijtiaz-neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#38ef7d" />
              <stop offset="100%" stopColor="#11998e" />
            </linearGradient>
            <linearGradient id="ijtiaz-dark-squircle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <filter id="ijtiaz-glow-fx" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Squircle App Container */}
          <rect width="512" height="512" rx="120" fill="url(#ijtiaz-dark-squircle)" />
          <rect
            x="8"
            y="8"
            width="496"
            height="496"
            rx="112"
            fill="none"
            stroke="url(#ijtiaz-neon-grad)"
            strokeWidth="8"
            strokeOpacity="0.4"
          />

          {/* Glowing Steering Wheel & Checkmark Pass Icon */}
          <g filter="url(#ijtiaz-glow-fx)">
            {/* Steering Wheel Outer Ring */}
            <circle
              cx="256"
              cy="268"
              r="160"
              fill="none"
              stroke="url(#ijtiaz-neon-grad)"
              strokeWidth="24"
              strokeLinecap="round"
            />

            {/* Central Diamond Hub */}
            <polygon
              points="256,210 306,240 306,296 256,326 206,296 206,240"
              fill="#0F172A"
              stroke="url(#ijtiaz-neon-grad)"
              strokeWidth="12"
            />
            {/* Glowing Core Dot */}
            <polygon
              points="256,250 270,268 256,286 242,268"
              fill="url(#ijtiaz-neon-grad)"
            />

            {/* Bottom Spoke */}
            <path
              d="M 238 324 L 226 408 A 160 160 0 0 0 286 408 L 274 324"
              fill="#0F172A"
              stroke="url(#ijtiaz-neon-grad)"
              strokeWidth="12"
              strokeLinejoin="round"
            />

            {/* Left Spoke & Arabic Calligraphy 'ج' flourish */}
            <path
              d="M 206 250 L 110 216 A 160 160 0 0 1 180 132 C 208 160 214 208 238 216"
              fill="none"
              stroke="url(#ijtiaz-neon-grad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Right Spoke & Neon Green Passing Checkmark (✔) */}
            <path
              d="M 298 268 L 396 230 A 160 160 0 0 0 352 144"
              fill="none"
              stroke="url(#ijtiaz-neon-grad)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M 285 192 L 336 242 L 452 112"
              fill="none"
              stroke="#38ef7d"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Light Sparkle Accents */}
          <polygon
            points="435,430 440,442 452,447 440,452 435,464 430,452 418,447 430,442"
            fill="#38ef7d"
            opacity="0.85"
          />
        </svg>
      </div>

      {withText && (
        <span className="font-black text-lg tracking-wide text-white">
          {appName}
        </span>
      )}
    </div>
  );
};
