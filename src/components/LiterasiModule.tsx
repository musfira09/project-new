import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LITERACY_JOURNEYS } from '../data/literacyStories.ts';
import { GradeLevel } from '../types.ts';
import {
  BookOpen,
  Search,
  Gamepad2,
  PenTool,
  Lightbulb,
  ChevronRight,
  Sparkles,
  Lock,
  CheckCircle2,
  Sailboat,
  Compass,
  ArrowRight,
  FileCheck
} from 'lucide-react';

export const LiterasiModule: React.FC = () => {
  const {
    currentGrade,
    setCurrentGrade,
    navigateTo,
    goBack,
    goToHome,
    openSourceViewer,
    getStageStatus,
    getStageLockReason
  } = useApp();

  const [selectedPortId, setSelectedPortId] = useState<number>(1);
  const activeJourney = LITERACY_JOURNEYS.find((j) => j.portId === selectedPortId) || LITERACY_JOURNEYS[0];

  const gradeList: GradeLevel[] = [
    'Kelas 4',
    'Kelas 5',
    'Kelas 6'
  ];

  // 6 Action Cards for Petualangan Literasi
  const actionCards = [
    {
      id: 'baca-pahami',
      title: '📚 BACA DAN PAHAMI',
      actionName: 'BUKA BACAAN',
      desc: 'Baca teks cerita bahari Bulukumba lembar demi lembar dengan audio narasi & fakta.',
      badge: 'BACA & PAHAMI',
      bgGradient: 'from-sky-50 via-sky-100/70 to-blue-100/50',
      border: 'border-sky-300 hover:border-sky-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(2,132,199,0.25)]',
      textColor: 'text-sky-950',
      btnBg: 'bg-sky-600 hover:bg-sky-700 text-white',
      onAction: () => navigateTo('literasi-materi', activeJourney.portId)
    },
    {
      id: 'detektif-informasi',
      title: '🔎 DETEKTIF INFORMASI',
      actionName: 'CARI INFORMASI',
      desc: 'Tantangan menemukan informasi tersirat dan tersurat dalam teks pelayaran.',
      badge: 'DETEKTIF INFORMASI',
      bgGradient: 'from-emerald-50 via-teal-100/70 to-emerald-100/50',
      border: 'border-emerald-300 hover:border-emerald-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.25)]',
      textColor: 'text-emerald-950',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      onAction: () => navigateTo('literasi-misi', activeJourney.portId)
    },
    {
      id: 'ide-pokok',
      title: '🧠 IDE POKOK',
      actionName: 'TEMUKAN IDE POKOK',
      desc: 'Latihan menentukan ide pokok paragraf, simpulan, dan pesan utama cerita.',
      badge: 'GAGASAN UTAMA',
      bgGradient: 'from-indigo-50 via-blue-100/70 to-indigo-100/50',
      border: 'border-indigo-300 hover:border-indigo-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(99,102,241,0.25)]',
      textColor: 'text-indigo-950',
      btnBg: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      onAction: () => navigateTo('literasi-misi', activeJourney.portId, { focus: 'ide-pokok' })
    },
    {
      id: 'kosakata',
      title: '💡 KOSAKATA',
      actionName: 'JELAJAH KOSAKATA',
      desc: 'Kamus interaktif istilah maritim, bahasa Konjo/Bugis, dan perahu tradisional.',
      badge: 'PERKAYA BAHASA',
      bgGradient: 'from-purple-50 via-fuchsia-100/70 to-purple-100/50',
      border: 'border-purple-300 hover:border-purple-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.25)]',
      textColor: 'text-purple-950',
      btnBg: 'bg-purple-600 hover:bg-purple-700 text-white',
      onAction: () => navigateTo('literasi-materi', activeJourney.portId, { highlightWords: true })
    },
    {
      id: 'menulis',
      title: '📝 MENULIS',
      actionName: 'MULAI MENULIS',
      desc: 'Tuangkan gagasan, pengalaman, dan refleksi nilai luhurmu di Studio Menulis.',
      badge: 'STUDIO MENULIS',
      bgGradient: 'from-amber-50 via-yellow-100/70 to-amber-100/50',
      border: 'border-amber-300 hover:border-amber-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.25)]',
      textColor: 'text-amber-950',
      btnBg: 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black',
      onAction: () => navigateTo('literasi-menulis', activeJourney.portId)
    },
    {
      id: 'game-literasi',
      title: '🎮 GAME LITERASI',
      actionName: 'MAIN GAME',
      desc: 'Detektif kata, susun kalimat, pasangkan makna di Arena Permainan Literasi.',
      badge: 'GAME KATA',
      bgGradient: 'from-rose-50 via-pink-100/70 to-rose-100/50',
      border: 'border-rose-300 hover:border-rose-500',
      shadow: 'hover:shadow-[0_12px_28px_rgba(244,63,94,0.25)]',
      textColor: 'text-rose-950',
      btnBg: 'bg-rose-600 hover:bg-rose-700 text-white',
      onAction: () => navigateTo('game-arena', 'game-1')
    }
  ];

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <NavigationHeader
        title="PETUALANGAN LITERASI"
        subtitle="Baca • Pahami • Berkarya Menjelajah Samudra Bulukumba"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* 2. GRADE LEVEL SELECTOR PILLS */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-sky-300/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="text-xs sm:text-sm font-black text-slate-900 uppercase">
              Tingkat Kelas:
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {gradeList.map((grade) => {
              const isSelected = currentGrade === grade;
              return (
                <button
                  key={grade}
                  onClick={() => setCurrentGrade(grade)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B2A4A] text-amber-300 shadow-md ring-2 ring-amber-400 scale-105'
                      : 'bg-sky-50 hover:bg-sky-100 text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {grade}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. JOURNEY PORTS ROADMAP SELECTOR */}
        <div className="bg-gradient-to-r from-[#0B2A4A] via-[#064B78] to-[#043353] rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-sky-400/40 text-white space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
              <h2 className="text-sm sm:text-base font-black text-white uppercase tracking-wide font-display">
                Pilih Pelabuhan Belajar Literasi
              </h2>
            </div>
            <span className="text-xs font-bold text-sky-200">
              Pelabuhan {selectedPortId} dari 5
            </span>
          </div>

          {/* Horizontal Ports Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
            {LITERACY_JOURNEYS.map((j) => {
              const isSelected = selectedPortId === j.portId;
              const isLocked = j.status === 'locked';

              return (
                <button
                  key={j.portId}
                  onClick={() => setSelectedPortId(j.portId)}
                  className={`p-3 rounded-2xl text-left transition-all border-2 flex flex-col justify-between min-h-[90px] cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 border-yellow-200 text-slate-950 shadow-lg scale-102 ring-2 ring-white'
                      : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-black">
                    <span>Pelabuhan {j.portId}</span>
                    {j.status === 'completed' && <span>✓</span>}
                    {isLocked && <Lock className="w-3.5 h-3.5 opacity-60" />}
                  </div>
                  <div className="text-xs sm:text-[13px] font-black truncate mt-1">
                    {j.storyTitle}
                  </div>
                  <div className={`text-[10px] font-bold mt-1 ${isSelected ? 'text-slate-800' : 'text-sky-200'}`}>
                    {j.pages.length} Halaman Bacaan
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. ACTIVE PORT FEATURED BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border-4 border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-black">
                {activeJourney.portName}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                ✓ Siap Dipelajari
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              {activeJourney.storyTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium leading-relaxed">
              {activeJourney.summary}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigateTo('literasi-materi', activeJourney.portId)}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>MULAI BACA MATERI</span>
            </button>
          </div>
        </div>

        {/* 
          ========================================================================
          5. THE 5 BIG INTERACTIVE ACTION CARDS (ONE ICON = ONE PAGE)
          Directly matches the prompt:
          📚 MATERI
          🔎 MISI LITERASI
          🎮 GAME LITERASI
          ✍️ MISI MENULIS
          💡 TAHUKAH KAMU?
          ========================================================================
        */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg sm:text-xl font-black text-white font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Pilih Mode Petualangan Literasi:</span>
            </h3>
            <span className="text-xs text-sky-200 font-bold hidden sm:inline">
              Klik kartu untuk membuka halaman penuh khusus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actionCards.map((card) => (
              <div
                key={card.id}
                onClick={card.onAction}
                className={`group bg-gradient-to-br ${card.bgGradient} rounded-3xl p-6 sm:p-7 border-3 ${card.border} shadow-lg ${card.shadow} transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between min-h-[240px] cursor-pointer`}
              >
                {/* Top Badge & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-slate-800 text-[10px] font-black uppercase tracking-wider shadow-2xs">
                      {card.badge}
                    </span>
                    <span className="text-xs font-black text-sky-800 opacity-80 group-hover:opacity-100">
                      HALAMAN PENUH ↗
                    </span>
                  </div>

                  <h4 className={`text-xl sm:text-2xl font-black tracking-tight ${card.textColor} font-display mt-1`}>
                    {card.title}
                  </h4>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700/90 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Big Action Button on Bottom */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-200/60 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      card.onAction();
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-md transition-all ${card.btnBg} group-hover:scale-105 cursor-pointer`}
                  >
                    <span>{card.actionName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="w-9 h-9 rounded-full bg-white text-slate-900 group-hover:bg-[#0B2A4A] group-hover:text-amber-300 flex items-center justify-center shadow-xs transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
