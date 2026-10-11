import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { ArrowLeft, Home, BookOpen, Star, Sparkles } from 'lucide-react';

interface NavigationHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  onBack?: () => void;
  onHome?: () => void;
  extraActions?: React.ReactNode;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  subtitle,
  badge,
  badgeColor = 'bg-amber-400 text-slate-950',
  onBack,
  onHome,
  extraActions
}) => {
  const { goBack, goToHome, currentGrade, studentProfile } = useApp();

  const handleBack = onBack || goBack;
  const handleHome = onHome || goToHome;

  return (
    <header className="sticky top-0 z-40 bg-[#0B2A4A]/95 backdrop-blur-md border-b-2 border-amber-400/60 shadow-lg px-4 sm:px-6 py-3 text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back & Home Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transform active:scale-95 transition-all cursor-pointer border border-amber-200"
            title="Kembali ke halaman sebelumnya"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>KEMBALI</span>
          </button>

          <button
            onClick={handleHome}
            className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm shadow-xs border border-white/20 transition-all cursor-pointer"
            title="Kembali ke Beranda utama"
          >
            <Home className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">Beranda</span>
          </button>
        </div>

        {/* Center: Title & Subtitle */}
        <div className="flex-1 min-w-[200px] text-center sm:text-left sm:pl-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            {badge && (
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${badgeColor}`}
              >
                {badge}
              </span>
            )}
            <h1 className="text-sm sm:text-base md:text-lg font-black text-white truncate font-display">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-sky-200 truncate font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right: Extra Actions & Student Status Chip */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {extraActions}

          <div className="hidden md:flex items-center gap-2 bg-[#064B78] border border-sky-400/40 px-3 py-1.5 rounded-full text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-sky-100">{studentProfile.name}</span>
            <span className="text-slate-400">•</span>
            <span className="font-black text-amber-300">{currentGrade}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
