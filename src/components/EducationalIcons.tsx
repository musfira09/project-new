import React from 'react';

// 1. Phinisi Brand Logo (Sailboat in blue & gold)
export const PhinisiBrandLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldSail" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="blueSail" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0B2A4A" />
      </linearGradient>
      <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="50%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>
    {/* Left Golden Sail */}
    <path
      d="M48 18 C48 18 30 52 14 62 C32 62 48 46 48 18 Z"
      fill="url(#goldSail)"
      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
    />
    {/* Right Deep Blue Main Sail */}
    <path
      d="M53 10 C53 10 82 46 88 64 C70 65 54 52 53 10 Z"
      fill="url(#blueSail)"
      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
    />
    {/* Inner Jib Sail */}
    <path
      d="M51 24 C51 24 68 50 67 62 C57 63 51 52 51 24 Z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    {/* Hull Curve */}
    <path
      d="M10 68 C28 78 72 78 92 68 C80 84 22 84 10 68 Z"
      fill="#0B2A4A"
    />
    <path
      d="M16 71 C32 79 68 79 84 71 C74 77 26 77 16 71 Z"
      fill="#F59E0B"
    />
    {/* Ocean Wave base */}
    <path
      d="M4 80 C18 74 30 84 45 80 C60 76 74 85 96 79 C90 88 15 90 4 80 Z"
      fill="url(#waveGrad)"
    />
  </svg>
);

// 1. Literasi Icon: Open Book with sky-blue cover
export const LiterasiIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="bookCover" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E88E5" />
        <stop offset="100%" stopColor="#0D47A1" />
      </linearGradient>
      <linearGradient id="pageGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="85%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="pageGradLeft" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="85%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <filter id="bookShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0D47A1" floodOpacity="0.22" />
      </filter>
    </defs>
    {/* Outer book spine & cover base */}
    <g filter="url(#bookShadow)">
      <path
        d="M60 76 C46 71 28 69 12 74 L14 26 C28 22 46 24 60 29 C74 24 92 22 106 26 L108 74 C92 69 74 71 60 76 Z"
        fill="url(#bookCover)"
      />
      {/* Golden Book Trim */}
      <path
        d="M12 74 C28 69 46 71 60 76 C74 71 92 69 108 74 L107 77 C91 72 73 74 60 79 C47 74 29 72 13 77 Z"
        fill="#F59E0B"
      />
      {/* Left Pages stack */}
      <path
        d="M59 73 C46 68 30 67 16 71 L17 25 C31 21 47 22 59 27 Z"
        fill="url(#pageGradLeft)"
        stroke="#CBD5E1"
        strokeWidth="0.8"
      />
      {/* Right Pages stack */}
      <path
        d="M61 73 C74 68 90 67 104 71 L103 25 C89 21 73 22 61 27 Z"
        fill="url(#pageGrad)"
        stroke="#CBD5E1"
        strokeWidth="0.8"
      />
      {/* Book Center Gutter */}
      <path d="M60 27 L60 74" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left lines (text illusion) */}
      <line x1="24" y1="36" x2="52" y2="38" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="45" x2="52" y2="47" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="54" x2="48" y2="56" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="63" x2="44" y2="65" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right lines (text illusion) */}
      <line x1="68" y1="38" x2="96" y2="36" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="47" x2="96" y2="45" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="56" x2="92" y2="54" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="65" x2="88" y2="63" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Golden ribbon marker */}
      <path
        d="M60 27 Q63 45 61 78 L65 74 L69 78 Q66 45 60 27 Z"
        fill="#F59E0B"
      />
    </g>
  </svg>
);

// 2. Numerasi Icon: 4 colorful math blocks (+ − × ÷)
export const NumerasiIcon: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="tileShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EA580C" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#tileShadow)">
      {/* Top Left: Blue [+] */}
      <rect x="14" y="14" width="32" height="32" rx="9" fill="#3B82F6" />
      <rect x="14" y="14" width="32" height="12" rx="9" fill="#60A5FA" opacity="0.5" />
      {/* + sign */}
      <path d="M30 22 V38 M22 30 H38" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

      {/* Top Right: Orange [-] */}
      <rect x="54" y="14" width="32" height="32" rx="9" fill="#F97316" />
      <rect x="54" y="14" width="32" height="12" rx="9" fill="#FB923C" opacity="0.5" />
      {/* - sign */}
      <path d="M62 30 H78" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

      {/* Bottom Left: Pink [x] */}
      <rect x="14" y="54" width="32" height="32" rx="9" fill="#EC4899" />
      <rect x="14" y="54" width="32" height="12" rx="9" fill="#F472B6" opacity="0.5" />
      {/* x sign */}
      <path d="M24 64 L36 76 M36 64 L24 76" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

      {/* Bottom Right: Amber/Yellow [/] */}
      <rect x="54" y="54" width="32" height="32" rx="9" fill="#F59E0B" />
      <rect x="54" y="54" width="32" height="12" rx="9" fill="#FBBF24" opacity="0.5" />
      {/* ÷ sign */}
      <circle cx="70" cy="62" r="2.5" fill="#FFFFFF" />
      <path d="M62 70 H78" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="70" cy="78" r="2.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// 3. Jelajah Phinisi Icon: 3D Folded Map with red pin
export const JelajahIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="mapShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#047857" floodOpacity="0.2" />
      </filter>
      <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
    <g filter="url(#mapShadow)">
      {/* Map panel 1 (left) */}
      <polygon points="12,38 38,28 38,72 12,82" fill="#86EFAC" stroke="#4ADE80" strokeWidth="1.5" />
      {/* Map panel 2 (center) */}
      <polygon points="38,28 68,36 68,80 38,72" fill="#4ADE80" stroke="#22C55E" strokeWidth="1.5" />
      {/* Map panel 3 (right) */}
      <polygon points="68,36 98,26 98,70 68,80" fill="#86EFAC" stroke="#4ADE80" strokeWidth="1.5" />

      {/* Map relief lines & trails */}
      <path d="M18,55 Q28,48 38,52 T68,60 T92,45" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
      <path d="M22,66 C30,64 34,58 38,62 C46,67 58,68 68,70" stroke="#15803D" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Coastal waves on map */}
      <path d="M14,75 Q26,72 36,70" stroke="#0284C7" strokeWidth="2" fill="none" />
      <path d="M72,75 Q85,71 96,66" stroke="#0284C7" strokeWidth="2" fill="none" />

      {/* 3D Map Pin */}
      <g transform="translate(43, 8)">
        {/* Pin shadow on map */}
        <ellipse cx="12" cy="46" rx="6" ry="2.5" fill="#047857" opacity="0.4" />
        {/* Pin body */}
        <path
          d="M12 2 C5.37 2 0 7.37 0 14 C0 22 12 44 12 44 C12 44 24 22 24 14 C24 7.37 18.63 2 12 2 Z"
          fill="url(#pinGrad)"
        />
        {/* Pin inner white dot */}
        <circle cx="12" cy="14" r="5" fill="#FFFFFF" />
        {/* Pin highlight */}
        <ellipse cx="8" cy="8" rx="3" ry="1.5" fill="#FFFFFF" opacity="0.5" />
      </g>
    </g>
  </svg>
);

// 4. Mengenal Phinisi Icon: Detailed Wooden Phinisi Boat
export const MengenalPhinisiIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="woodHull" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#92400E" />
        <stop offset="50%" stopColor="#78350F" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
      <linearGradient id="sailTan" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="50%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="shipShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#78350F" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#shipShadow)">
      {/* Front Bowsprit (Anjong) */}
      <line x1="78" y1="58" x2="104" y2="46" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
      {/* Rigging cables */}
      <line x1="42" y1="18" x2="18" y2="58" stroke="#B45309" strokeWidth="1" strokeDasharray="2 1" />
      <line x1="42" y1="18" x2="70" y2="58" stroke="#B45309" strokeWidth="1" strokeDasharray="2 1" />
      <line x1="70" y1="12" x2="100" y2="48" stroke="#B45309" strokeWidth="1" strokeDasharray="2 1" />

      {/* Main Mast 1 */}
      <line x1="44" y1="16" x2="44" y2="58" stroke="#451A03" strokeWidth="3" />
      {/* Main Mast 2 */}
      <line x1="72" y1="10" x2="72" y2="58" stroke="#451A03" strokeWidth="3" />

      {/* Rear Sails (Sombala Balang) */}
      <path d="M42 20 C42 20 22 34 20 54 C32 54 42 46 42 20 Z" fill="url(#sailTan)" />
      <path d="M42 20 C42 20 30 36 32 52 C38 52 42 44 42 20 Z" fill="#F59E0B" opacity="0.3" />

      {/* Front Main Sails (Sombala Rante) */}
      <path d="M70 14 C70 14 48 30 46 54 C58 54 70 44 70 14 Z" fill="url(#sailTan)" />
      {/* Jib sails on bowsprit */}
      <path d="M72 26 C72 26 88 44 94 48 C86 52 74 48 72 26 Z" fill="url(#sailTan)" />
      <path d="M72 16 C72 16 84 34 90 40 C82 44 74 38 72 16 Z" fill="#FEF3C7" />

      {/* Hull (Kalibise) */}
      <path
        d="M14 56 C24 72 74 72 96 56 C90 74 26 76 14 56 Z"
        fill="url(#woodHull)"
      />
      {/* Gold Trim Line on Hull */}
      <path
        d="M18 60 C32 68 76 68 90 60 C84 64 30 64 18 60 Z"
        fill="#F59E0B"
      />
      {/* Ocean foam ripples */}
      <path d="M8 70 C24 66 38 74 54 70 C70 66 86 74 102 70" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 75 C32 72 44 78 60 74 C76 70 88 77 96 74" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 5. Permainan Icon: Cute 3D Pink Game Controller
export const PermainanIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="padGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="50%" stopColor="#E11D48" />
        <stop offset="100%" stopColor="#BE123C" />
      </linearGradient>
      <filter id="gameShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#E11D48" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#gameShadow)">
      {/* Controller Body */}
      <path
        d="M32 24 C46 22 64 22 78 24 C88 24 98 32 96 54 C94 68 84 76 72 74 C62 72 58 58 55 58 C52 58 48 72 38 74 C26 76 16 68 14 54 C12 32 22 24 32 24 Z"
        fill="url(#padGrad)"
      />
      {/* Top highlight bar */}
      <path
        d="M34 27 C47 25 63 25 76 27 C84 27 88 32 89 40 C78 35 68 33 55 33 C42 33 32 35 21 40 C22 32 26 27 34 27 Z"
        fill="#FDA4AF"
        opacity="0.6"
      />
      {/* Left D-Pad (+) */}
      <g transform="translate(25, 38)">
        <rect x="6" y="0" width="8" height="20" rx="3" fill="#FFFFFF" />
        <rect x="0" y="6" width="20" height="8" rx="3" fill="#FFFFFF" />
        <circle cx="10" cy="10" r="2" fill="#E11D48" />
      </g>
      {/* Right 4 Colorful Buttons */}
      <g transform="translate(70, 36)">
        <circle cx="12" cy="4" r="3.5" fill="#FACC15" />  {/* Y - yellow */}
        <circle cx="4" cy="12" r="3.5" fill="#38BDF8" />  {/* X - blue */}
        <circle cx="20" cy="12" r="3.5" fill="#4ADE80" /> {/* B - green */}
        <circle cx="12" cy="20" r="3.5" fill="#FB7185" /> {/* A - pink */}
      </g>
      {/* Middle buttons */}
      <rect x="47" y="38" width="6" height="3" rx="1.5" fill="#FFE4E6" />
      <rect x="57" y="38" width="6" height="3" rx="1.5" fill="#FFE4E6" />
    </g>
  </svg>
);

// 6. LKPD Icon: Wooden Clipboard with Paper and Pencil
export const LKPDIcon: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="lkpdShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#4F46E5" floodOpacity="0.2" />
      </filter>
      <linearGradient id="boardGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
    <g filter="url(#lkpdShadow)">
      {/* Wooden Board */}
      <rect x="18" y="16" width="56" height="72" rx="8" fill="url(#boardGrad)" />
      {/* White Paper Sheet */}
      <rect x="23" y="24" width="46" height="58" rx="4" fill="#FFFFFF" />
      {/* Lines on paper */}
      <line x1="30" y1="36" x2="61" y2="36" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="44" x2="61" y2="44" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="52" x2="61" y2="52" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="60" x2="52" y2="60" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
      {/* Checkbox marks */}
      <rect x="30" y="68" width="6" height="6" rx="1.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
      <line x1="40" y1="71" x2="58" y2="71" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />

      {/* Top Clip */}
      <rect x="34" y="12" width="24" height="10" rx="3" fill="#64748B" />
      <rect x="38" y="14" width="16" height="4" rx="2" fill="#E2E8F0" />

      {/* Pencil leaning on the right */}
      <g transform="translate(62, 42) rotate(24)">
        {/* Pencil body */}
        <rect x="0" y="0" width="8" height="34" rx="1" fill="#F59E0B" />
        {/* Metal band */}
        <rect x="0" y="30" width="8" height="4" fill="#94A3B8" />
        {/* Eraser */}
        <rect x="0" y="34" width="8" height="6" rx="2" fill="#F43F5E" />
        {/* Tip */}
        <polygon points="0,0 8,0 4,-8" fill="#FDE68A" />
        <polygon points="3,-5 5,-5 4,-8" fill="#1E293B" />
      </g>
    </g>
  </svg>
);

// 7. Asesmen Icon: Blue Checklist Clipboard
export const AsesmenIcon: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="asesmenShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.2" />
      </filter>
      <linearGradient id="asesmenBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>
    <g filter="url(#asesmenShadow)">
      {/* Blue Clipboard */}
      <rect x="20" y="16" width="60" height="74" rx="10" fill="url(#asesmenBlue)" />
      {/* Inner White Page */}
      <rect x="26" y="24" width="48" height="60" rx="6" fill="#FFFFFF" />

      {/* Row 1 Checklist */}
      <circle cx="36" cy="38" r="5" fill="#10B981" />
      <path d="M33.5 38 L35.5 40 L38.5 36" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="46" y1="38" x2="66" y2="38" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

      {/* Row 2 Checklist */}
      <circle cx="36" cy="52" r="5" fill="#10B981" />
      <path d="M33.5 52 L35.5 54 L38.5 50" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="46" y1="52" x2="66" y2="52" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

      {/* Row 3 Checklist */}
      <circle cx="36" cy="66" r="5" fill="#10B981" />
      <path d="M33.5 66 L35.5 68 L38.5 64" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="46" y1="66" x2="60" y2="66" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

      {/* Top Clip */}
      <rect x="36" y="12" width="28" height="10" rx="3" fill="#0B2A4A" />
      <circle cx="50" cy="17" r="2.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// 8. Paspor Icon: Golden & Navy Passport Booklet with Phinisi seal
export const PasporIcon: React.FC<{ className?: string }> = ({ className = 'w-18 h-18' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="pasporShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#B45309" floodOpacity="0.25" />
      </filter>
      <linearGradient id="passportCover" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="60%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#0B2A4A" />
      </linearGradient>
    </defs>
    <g filter="url(#pasporShadow)" transform="rotate(-6 50 50)">
      {/* Passport Book Cover */}
      <rect x="22" y="14" width="56" height="74" rx="7" fill="url(#passportCover)" />
      {/* Gold Edge Border */}
      <rect x="25" y="17" width="50" height="68" rx="5" fill="none" stroke="#F59E0B" strokeWidth="1.2" />

      {/* Top Gold emblem lines */}
      <circle cx="50" cy="30" r="4" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="40" y1="30" x2="44" y2="30" stroke="#F59E0B" strokeWidth="1.2" />
      <line x1="56" y1="30" x2="60" y2="30" stroke="#F59E0B" strokeWidth="1.2" />

      {/* Embossed Phinisi emblem in Gold */}
      <g transform="translate(38, 38) scale(0.6)">
        <path d="M20 2 C20 2 6 22 2 30 C12 30 20 22 20 2 Z" fill="#F59E0B" />
        <path d="M22 0 C22 0 38 22 40 32 C30 32 22 24 22 0 Z" fill="#FBBF24" />
        <path d="M2 34 C10 40 30 40 38 34 C34 42 6 42 2 34 Z" fill="#F59E0B" />
      </g>

      {/* Gold Lettering lines */}
      <line x1="34" y1="64" x2="66" y2="64" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="70" x2="62" y2="70" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

      {/* Official stamp emblem */}
      <circle cx="50" cy="77" r="3" fill="#F59E0B" opacity="0.8" />
    </g>
  </svg>
);

// 9. Jeli AI Icon: Friendly Round Robot with Captain Sailor Cap
export const JeliAIIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-18' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="robotShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.25" />
      </filter>
      <linearGradient id="robotWhite" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="visorScreen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B2A4A" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <g filter="url(#robotShadow)">
      {/* Robot Antenna */}
      <circle cx="50" cy="18" r="4" fill="#F59E0B" />
      <line x1="50" y1="22" x2="50" y2="30" stroke="#94A3B8" strokeWidth="2.5" />

      {/* Ear Headset bumps */}
      <rect x="14" y="44" width="8" height="18" rx="4" fill="#0284C7" />
      <rect x="78" y="44" width="8" height="18" rx="4" fill="#0284C7" />

      {/* Round Head */}
      <rect x="18" y="28" width="64" height="52" rx="26" fill="url(#robotWhite)" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Sailor Captain Hat */}
      <g transform="translate(32, 14)">
        <path d="M4 14 C10 6 26 6 32 14 Z" fill="#FFFFFF" stroke="#0B2A4A" strokeWidth="1.5" />
        {/* Hat Visor in Navy */}
        <path d="M0 14 C12 18 24 18 36 14 C34 20 2 20 0 14 Z" fill="#0B2A4A" />
        {/* Anchor badge */}
        <circle cx="18" cy="11" r="2.5" fill="#F59E0B" />
      </g>

      {/* Digital Visor / Screen */}
      <rect x="25" y="38" width="50" height="24" rx="12" fill="url(#visorScreen)" />

      {/* Happy Glowing Cyan Eyes */}
      {/* Left Eye */}
      <path d="M34 50 Q40 44 44 50" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Right Eye */}
      <path d="M56 50 Q60 44 66 50" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Friendly Rosy Cheeks */}
      <circle cx="30" cy="56" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="70" cy="56" r="2" fill="#F472B6" opacity="0.6" />

      {/* Smile underneath visor */}
      <path d="M44 68 Q50 72 56 68" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);
