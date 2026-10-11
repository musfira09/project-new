import React, { useRef } from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  PhinisiBrandLogo,
  LiterasiIcon,
  NumerasiIcon,
  JelajahIcon,
  MengenalPhinisiIcon,
  PermainanIcon,
  LKPDIcon,
  AsesmenIcon,
  PasporIcon,
  JeliAIIcon
} from './EducationalIcons.tsx';
import {
  ChevronRight,
  ChevronDown,
  Bell,
  Play,
  User,
  Users,
  BarChart3,
  Calendar,
  BookOpen,
  Calculator,
  Sailboat
} from 'lucide-react';

export const StudentHome: React.FC = () => {
  const {
    studentProfile,
    currentGrade,
    setCurrentGrade,
    studentProgress,
    setActiveTab,
    setIsUserModalOpen,
    setSelectedPortId,
    setRole,
    navigateTo
  } = useApp();

  const handleStartSailing = () => {
    navigateTo('jelajah');
  };

  const handleSelectGradeAndStart = (grade: 'Kelas 4' | 'Kelas 5' | 'Kelas 6') => {
    setCurrentGrade(grade);
    navigateTo('jelajah');
  };

  // Main 9 Learning Cards
  const menuCards = [
    {
      id: 'literasi',
      title: 'LITERASI',
      desc: 'Baca • Pahami • Berkarya',
      icon: <LiterasiIcon className="w-20 h-16 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#E0F2FE] via-[#BAE6FD]/70 to-[#7DD3FC]/50',
      borderColor: 'border-[#7DD3FC]/80',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(2,132,199,0.22)]',
      textColor: 'text-[#064B78]'
    },
    {
      id: 'numerasi',
      title: 'NUMERASI',
      desc: 'Hitung • Analisis • Pecahkan',
      icon: <NumerasiIcon className="w-18 h-18 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#FFE8D6] via-[#FED7AA]/80 to-[#FDBA74]/50',
      borderColor: 'border-[#FB923C]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(234,88,12,0.22)]',
      textColor: 'text-[#9A3412]'
    },
    {
      id: 'jelajah',
      title: 'JELAJAH PHINISI',
      desc: 'Kenali Daerahku Lewat Petualangan',
      icon: <JelajahIcon className="w-20 h-16 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#DCFCE7] via-[#BBF7D0]/80 to-[#86EFAC]/50',
      borderColor: 'border-[#4ADE80]/70',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(22,163,74,0.22)]',
      textColor: 'text-[#14532D]'
    },
    {
      id: 'budaya',
      title: 'MENGENAL PHINISI',
      desc: 'Sejarah • Proses • Nilai Budaya',
      icon: <MengenalPhinisiIcon className="w-20 h-16 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#FEF3C7] via-[#FDE68A]/80 to-[#FCD34D]/50',
      borderColor: 'border-[#F59E0B]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(217,119,6,0.22)]',
      textColor: 'text-[#78350F]'
    },
    {
      id: 'permainan',
      title: 'PERMAINAN EDUKATIF',
      desc: 'Belajar sambil Bermain',
      icon: <PermainanIcon className="w-20 h-16 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#FFE4E6] via-[#FCE7F3]/80 to-[#FBCFE8]/50',
      borderColor: 'border-[#F472B6]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(219,39,119,0.22)]',
      textColor: 'text-[#831843]'
    },
    {
      id: 'lkpd',
      title: 'LKPD',
      desc: 'Ayo Kerjakan!',
      icon: <LKPDIcon className="w-18 h-18 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#EDE9FE] via-[#E0E7FF]/80 to-[#C7D2FE]/50',
      borderColor: 'border-[#818CF8]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(99,102,241,0.22)]',
      textColor: 'text-[#312E81]'
    },
    {
      id: 'asesmen',
      title: 'ASESMEN',
      desc: 'Uji Pemahamanmu',
      icon: <AsesmenIcon className="w-18 h-18 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#D1FAE5] via-[#A7F3D0]/80 to-[#6EE7B7]/50',
      borderColor: 'border-[#34D399]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(5,150,105,0.22)]',
      textColor: 'text-[#064E3B]'
    },
    {
      id: 'paspor',
      title: 'PASPOR BELAJARKU',
      desc: 'Kumpulkan Stempel Perjalanan',
      icon: <PasporIcon className="w-18 h-18 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#FEF08A] via-[#FDE047]/80 to-[#FACC15]/50',
      borderColor: 'border-[#EAB308]/60',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(202,138,4,0.22)]',
      textColor: 'text-[#713F12]'
    },
    {
      id: 'jeli',
      title: 'JELI AI',
      desc: 'Teman Belajar Cerdas',
      icon: <JeliAIIcon className="w-20 h-18 transform group-hover:scale-110 transition-transform duration-300" />,
      bgGradient: 'from-[#E0F2FE] via-[#BAE6FD]/80 to-[#38BDF8]/40',
      borderColor: 'border-[#38BDF8]/70',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(14,165,233,0.22)]',
      textColor: 'text-[#0C4A6E]'
    },
    {
      id: 'sumber',
      title: 'PUSAT SUMBER PHINISI',
      desc: 'Rujukan Resmi UNESCO & Budaya',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-800 transform group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <BookOpen className="w-9 h-9 text-emerald-800" />
        </div>
      ),
      bgGradient: 'from-[#ECFDF5] via-[#D1FAE5]/80 to-[#A7F3D0]/50',
      borderColor: 'border-[#34D399]/70',
      shadowColor: 'hover:shadow-[0_12px_30px_rgba(16,185,129,0.22)]',
      textColor: 'text-[#065F46]'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#064B78] overflow-x-hidden pb-28">
      {/* 
        ========================================================================
        1. CINEMATIC HERO SECTION
        Direct conceptual recreation of the reference visual:
        - Blue sky with clouds & seagulls
        - Phinisi ship sailing on crystal waves with Bulukumba coastal backdrop
        - Top branding lockup with gold "CENDEKIA" and "By : Musfira, S.Pd."
        - Top right script "Dari Bulukumba untuk Generasi Hebat" + student pill
        - Left rustic Bulukumba wooden sign
        - Center golden "▶ Mulai Berlayar" pill button
        - Right parchment paper scroll quote
        ========================================================================
      */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#2582bd] via-[#106fa7] to-[#0a4674] pt-4 sm:pt-6 pb-12 sm:pb-16 text-white shadow-xl">
        {/* Real Generated Phinisi Sailing Artwork Backdrop */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg"
            alt="Perahu Phinisi sedang berlayar megah di laut pesisir Bulukumba"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity scale-105 filter contrast-110"
          />
          {/* Subtle gradient overlays to ensure text contrast and visual harmony */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-[#064B78]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#064B78]/30 to-[#064B78]/70" />

          {/* Seagulls flying in the sky */}
          <div className="absolute top-10 right-1/4 opacity-80 animate-float-slight">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M2 14 Q10 2 20 8 Q30 2 38 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M38 18 Q44 10 50 14 Q56 10 58 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Row: Brand lockup on left, script & user profile on right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-2 pb-6">
            {/* Top Left: Phinisi Brand Lockup */}
            <div className="flex items-start gap-3 sm:gap-4 self-start md:self-auto">
              <div className="shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                <PhinisiBrandLogo className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <div className="text-left space-y-1">
                <div className="leading-none">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B2A4A] drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)] flex flex-wrap items-center gap-1.5 font-display">
                    <span className="text-[#0B2A4A]">PHINISI</span>
                    <span className="text-[#F5B72F] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">CENDEKIA</span>
                  </h1>
                </div>
                <p className="text-xs sm:text-sm font-bold text-sky-950/90 leading-tight max-w-sm drop-shadow-xs">
                  Berlayar dengan Ilmu,<br />
                  Mengenal Budaya,<br />
                  Membangun Masa Depan
                </p>
                <div className="pt-1">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B2A4A] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-md border border-amber-400/40">
                    Musfira, S.Pd.
                  </span>
                </div>
              </div>
            </div>

            {/* Top Right: Decorative Handwritten Script & Student Profile Pill */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 self-end md:self-auto">
              {/* Handwritten script text with decorative arrow */}
              <div className="hidden sm:flex items-center gap-1.5 text-right font-script text-white text-xl md:text-2xl font-bold drop-shadow-md select-none">
                <span>Dari Bulukumba untuk Generasi Hebat</span>
                <span className="text-amber-300 text-lg">↗</span>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Notification Bell Button */}
                <button
                  onClick={() => setIsUserModalOpen(true)}
                  aria-label="Pemberitahuan Siswa"
                  className="w-10 h-10 rounded-full bg-[#0B2A4A]/80 hover:bg-[#0B2A4A] text-amber-300 border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                >
                  <Bell className="w-5 h-5" />
                </button>

                {/* Student Profile Capsule Pill */}
                <button
                  onClick={() => setIsUserModalOpen(true)}
                  className="group flex items-center gap-2.5 bg-white/95 hover:bg-white text-slate-800 px-3.5 py-1.5 rounded-full shadow-lg border border-sky-200 transition-all hover:scale-102"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-sky-100 border-2 border-sky-400 shrink-0">
                    <img
                      src="/src/assets/images/sailor_boy_student_avatar_1790127222409.jpg"
                      alt={studentProfile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-sky-900">
                      {studentProfile.name || 'Siswa Hebat'}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-bold text-sky-700 flex items-center gap-0.5">
                      <span>{currentGrade}</span>
                      <ChevronDown className="w-3 h-3 text-sky-600" />
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Middle Hero Visual Scene: Bulukumba Signpost, Mulai Berlayar CTA & Musfira Parchment Quote */}
          <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Left: Rustic Wooden Signpost of Bulukumba */}
            <div className="md:col-span-3 flex justify-start">
              <div className="relative group bg-gradient-to-b from-[#854d0e] via-[#713f12] to-[#451a03] text-amber-100 p-3.5 sm:p-4 rounded-2xl shadow-2xl border-2 border-[#b45309] max-w-xs text-left transform -rotate-1 hover:rotate-0 transition-transform">
                {/* Wooden screws / pegs in corners */}
                <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-950 border border-amber-600" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-950 border border-amber-600" />
                <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-950 border border-amber-600" />
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-950 border border-amber-600" />

                <div className="flex items-center gap-1.5 text-white font-black text-sm sm:text-base tracking-wide">
                  <span className="text-red-400">📍</span>
                  <span>BULUKUMBA</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5">
                  Butta Panrita Lopi
                </p>
                <p className="text-[10px] text-amber-200/90 italic mt-0.5 font-medium">
                  Tanah Laut, Tanah Inspirasi
                </p>
              </div>
            </div>

            {/* Center: Glowing Golden Hero Button "▶ Mulai Berlayar" and Class Selection */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center py-4 space-y-3">
              <button
                onClick={handleStartSailing}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-[#FDE047] via-[#F5B72F] to-[#D97706] text-[#0B2A4A] text-lg sm:text-xl font-black tracking-wide shadow-[0_8px_25px_rgba(245,183,47,0.55)] hover:shadow-[0_12px_32px_rgba(245,183,47,0.75)] border-2 border-yellow-200 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[#0B2A4A] text-[#F5B72F] flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                <span>Mulai Berlayar</span>
              </button>

              {/* Class Selection Options: Kelas 4, Kelas 5, Kelas 6 */}
              <div className="w-full max-w-sm pt-2">
                <p className="text-[11px] font-black uppercase tracking-wider text-amber-200 mb-2">
                  Pilih Tingkat Kelas:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(['Kelas 4', 'Kelas 5', 'Kelas 6'] as const).map((grade) => {
                    const isCurrent = currentGrade === grade;
                    return (
                      <button
                        key={grade}
                        onClick={() => handleSelectGradeAndStart(grade)}
                        className={`flex flex-col items-center justify-center py-2 px-2.5 rounded-xl border-2 transition-all cursor-pointer shadow-md ${
                          isCurrent
                            ? 'bg-amber-400 border-yellow-200 text-slate-950 font-black scale-105'
                            : 'bg-white/15 hover:bg-white/30 border-white/30 text-white font-bold'
                        }`}
                      >
                        <span className="text-base">🎒</span>
                        <span className="text-xs font-black tracking-tight">{grade}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Rolled Parchment Quote Card */}
            <div className="md:col-span-4 flex justify-end">
              <div className="relative bg-[#FFFBEB] text-[#78350F] p-4 sm:p-5 rounded-2xl shadow-2xl border-2 border-[#FDE68A] max-w-sm text-left transform rotate-1 hover:rotate-0 transition-transform">
                {/* Big decorative quotation mark */}
                <span className="text-3xl sm:text-4xl font-serif text-[#D97706] leading-none absolute -top-3 left-3 select-none">
                  “
                </span>
                <p className="text-xs sm:text-[13px] font-bold italic text-amber-950 mt-1 leading-snug">
                  Seperti Phinisi yang berlayar jauh, teruslah belajar, menggapai cita-cita.”
                </p>
                <p className="text-right text-[11px] font-extrabold text-[#B45309] mt-2 font-script text-base">
                  Musfira, S.Pd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. STUDENT DASHBOARD HORIZONTAL CARD
        Recreated faithfully from the reference:
        - 3 Columns in a wide, clean white horizontal card
        - Column 1: Sailor boy avatar, "Selamat Datang!", "Siswa Hebat", "Kelas V SD", "Lihat Profil >"
        - Column 2: Progres Belajar: 3 progress bars (Literasi 75%, Numerasi 60%, Budaya Phinisi 80%)
        - Column 3: Semester Aktif (Semester 1: Mengenal Phinisi dan Bulukumba >)
        ========================================================================
      */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-sky-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Column 1: Student Welcome & Sailor Avatar */}
            <div className="lg:col-span-4 flex items-center gap-4 sm:gap-5 pb-5 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-100 pr-0 lg:pr-6">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-sky-50 border-3 border-sky-300 shadow-md shrink-0">
                <img
                  src="/src/assets/images/sailor_boy_student_avatar_1790127222409.jpg"
                  alt="Avatar Siswa Hebat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-1">
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  Selamat Datang!
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none font-display">
                  {studentProfile.name || 'Siswa Hebat'}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-sky-700">
                  {currentGrade} SD
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => setIsUserModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200 transition-colors"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Lihat Profil</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Progres Belajar (3 Visual Bars) */}
            <div className="lg:col-span-5 space-y-3 pb-5 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-100 px-0 lg:px-6">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight text-left">
                Progres Belajar
              </h3>

              {/* Progress 1: Literasi */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center text-[10px]">
                      <BookOpen className="w-3 h-3" />
                    </span>
                    <span>Literasi</span>
                  </div>
                  <span className="font-mono text-sky-700 tabular-nums">
                    {studentProgress.literacyProgress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-700"
                    style={{ width: `${studentProgress.literacyProgress}%` }}
                  />
                </div>
              </div>

              {/* Progress 2: Numerasi */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px]">
                      <Calculator className="w-3 h-3" />
                    </span>
                    <span>Numerasi</span>
                  </div>
                  <span className="font-mono text-emerald-700 tabular-nums">
                    {studentProgress.numeracyProgress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-700"
                    style={{ width: `${studentProgress.numeracyProgress}%` }}
                  />
                </div>
              </div>

              {/* Progress 3: Budaya Phinisi */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center text-[10px]">
                      <Sailboat className="w-3 h-3" />
                    </span>
                    <span>Budaya Phinisi</span>
                  </div>
                  <span className="font-mono text-amber-700 tabular-nums">
                    {studentProgress.cultureProgress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-700"
                    style={{ width: `${studentProgress.cultureProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Column 3: Kelas & Topik Belajar Subcard (Tanpa Semester) */}
            <div className="lg:col-span-3 text-left pl-0 lg:pl-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wider">
                <span className="text-sm">🎒</span>
                <span>Tingkat Kelas & Topik</span>
              </div>

              <button
                onClick={() => setIsUserModalOpen(true)}
                className="w-full group text-left bg-sky-50/90 hover:bg-sky-100 border-2 border-sky-200/80 rounded-2xl p-3.5 transition-all flex items-center justify-between shadow-xs cursor-pointer"
              >
                <div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-sky-950 font-display">
                    {currentGrade}
                  </h4>
                  <p className="text-[11px] font-bold text-sky-800 mt-0.5 leading-snug">
                    12 Topik Terbuka Bebas Dipilih
                  </p>
                </div>
                <span className="w-7 h-7 rounded-full bg-white text-sky-700 group-hover:bg-sky-700 group-hover:text-white flex items-center justify-center shadow-xs transition-colors shrink-0 ml-2">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. MAIN MENU: 3-COLUMN GRID OF LARGE COLORFUL CARDS
        Recreated faithfully from the reference:
        - 9 cards in a 3x3 grid on desktop/Chromebook
        - High rounded corners
        - Large colorful custom illustrations
        - Bold uppercase titles
        - Concise descriptive subtitles
        - Crisp white circular arrow buttons on bottom right
        ========================================================================
      */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {menuCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className={`group relative text-center bg-gradient-to-b ${card.bgGradient} rounded-3xl p-6 sm:p-7 border-2 ${card.borderColor} shadow-lg ${card.shadowColor} transition-all duration-300 transform hover:-translate-y-1.5 focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-amber-400 flex flex-col items-center justify-between min-h-[220px] sm:min-h-[240px] cursor-pointer`}
            >
              {/* Card Illustration in Center Top */}
              <div className="flex items-center justify-center h-20 mb-2">
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className={`text-lg sm:text-xl font-black tracking-wide ${card.textColor} font-display`}>
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-slate-700/90 leading-tight">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Right Arrow Button (White Circle with Navy Chevron) */}
              <div className="w-full flex justify-end mt-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#0B2A4A] group-hover:bg-[#0B2A4A] group-hover:text-white flex items-center justify-center shadow-md border border-white/60 transition-all duration-300 transform group-hover:scale-110">
                  <ChevronRight className="w-5 h-5 ml-0.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        4. BOTTOM QUICK ACTION CARDS (PROFIL & DASHBOARD GURU)
        Recreated faithfully from the reference:
        - Two wide white cards side-by-side
        - Blue icons: Users group for Profil, BarChart for Dashboard Guru
        ========================================================================
      */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: PROFIL */}
          <button
            onClick={() => setIsUserModalOpen(true)}
            className="group text-left bg-white rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-sky-100 hover:border-sky-300 transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0B2A4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#064B78] transition-colors shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#064B78] transition-colors font-display">
                PROFIL
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Data dan Pengaturan
              </p>
            </div>
          </button>

          {/* Card 2: DASHBOARD GURU */}
          <button
            onClick={() => {
              setRole('guru');
              setActiveTab('guru');
            }}
            className="group text-left bg-white rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-sky-100 hover:border-sky-300 transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#064B78] text-white flex items-center justify-center shadow-md group-hover:bg-[#0B2A4A] transition-colors shrink-0">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#064B78] transition-colors font-display">
                DASHBOARD GURU
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Pantau Progres Siswa
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* 
        ========================================================================
        5. BOTTOM TAGLINE
        Recreated faithfully from the reference:
        - Elegant decorative calligraphy:
          “Maju Pendidikan,
           Lestari Budaya,
           Jaya Bulukumba!”
        - Positioned over ocean reef backdrop
        ========================================================================
      */}
      <section className="relative z-10 max-w-xl mx-auto px-4 text-center mt-10 sm:mt-14 mb-6">
        <div className="relative inline-block">
          <p className="font-script text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] select-none">
            Maju Pendidikan,<br />
            Lestari Budaya,<br />
            Jaya Bulukumba!
          </p>
        </div>
      </section>

      {/* Subtle Ocean Bottom Reef Backdrop Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-96 pointer-events-none opacity-40 select-none overflow-hidden mix-blend-screen">
        <img
          src="/src/assets/images/ocean_reef_underwater_backdrop_1790127211526.jpg"
          alt="Latar bawah laut dan karang Bulukumba"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-transparent to-transparent" />
      </div>
    </div>
  );
};
