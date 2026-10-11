import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { PORTS_DATA } from '../data/curriculumData.ts';
import { PortLesson } from '../types.ts';
import {
  Compass,
  Sailboat,
  Anchor,
  Star,
  CheckCircle2,
  Lock,
  BookOpen,
  Calculator,
  ChevronRight,
  Sparkles,
  MapPin,
  Award,
  HelpCircle,
  Lightbulb,
  Check,
  ArrowRight
} from 'lucide-react';

export const JelajahPhinisi: React.FC = () => {
  const {
    currentGrade,
    setCurrentGrade,
    studentProgress,
    unlockPort,
    addGamePoints,
    selectedPortId,
    setSelectedPortId,
    navigateTo,
    goToHome
  } = useApp();

  const [activePort, setActivePort] = useState<PortLesson>(
    PORTS_DATA.find((p) => p.id === (selectedPortId || 1)) || PORTS_DATA[0]
  );
  const [activeMissionMode, setActiveMissionMode] = useState<'info' | 'literasi' | 'numerasi'>('info');

  // Interactive Quiz state in port
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);

  const handleSelectPort = (port: PortLesson) => {
    navigateTo('jelajah-detail', port.id);
  };

  const handleCheckPortQuiz = (correctIndex: number) => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    if (selectedAnswer === correctIndex) {
      addGamePoints(`port-${activePort.id}`, 30);
      if (activePort.id < 10) {
        unlockPort(activePort.id + 1);
      }
    }
  };

  const gradeHighlights = {
    'Kelas 4': {
      fase: 'Fase B (Kelas 4 SD)',
      focus: 'Bahasa sederhana, teks sedang, numerasi bilangan & pecahan sederhana, pemahaman dan penerapan.',
      litKeywords: ['Teks Menengah', 'Kosakata Pelaut', 'Pemahaman Tersurat'],
      numKeywords: ['Operasi Bilangan', 'Pecahan Sederhana', 'Pengukuran & Pola']
    },
    'Kelas 5': {
      fase: 'Fase C (Kelas 5 SD)',
      focus: 'Teks lebih kompleks, mencari informasi, ide pokok, kesimpulan, fakta dan opini, pecahan, desimal, persen, KPK-FPB, pengukuran, data.',
      litKeywords: ['Ide Pokok', 'Fakta vs Opini', 'Kesimpulan Bacaan'],
      numKeywords: ['Pecahan & Desimal', 'KPK & FPB', 'Luas & Volume']
    },
    'Kelas 6': {
      fase: 'Fase C (Kelas 6 SD)',
      focus: 'Analisis informasi, simpulan mendalam, hubungan sebab-akibat, rasio & skala, bangun datar & ruang, pemecahan masalah terpadu.',
      litKeywords: ['Analisis Kritis', 'Sebab-Akibat', 'Sintesis Informasi'],
      numKeywords: ['Rasio & Skala', 'Bangun Ruang', 'Analisis Data']
    }
  };

  const currentHighlight = gradeHighlights[currentGrade] || gradeHighlights['Kelas 5'];

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header with Back & Home */}
      <NavigationHeader
        title="PETUALANGAN BELAJARKU"
        subtitle={`Petualangan Belajar ${currentGrade} · Jalur 10 Pelabuhan Bulukumba`}
        badge={currentHighlight.fase}
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* 
        ========================================================================
        1. HEADER: PETUALANGAN BELAJARKU
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-6 pb-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <Compass className="w-16 h-16 text-amber-300 animate-spin-slow" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Sailboat className="w-20 h-20 text-sky-200 animate-float-slight" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <span>🧭 PETUALANGAN BELAJARKU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Petualangan Belajar {currentGrade}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Nakhodai perahu Phinisimu melewati pelabuhan kearifan dan taklukkan setiap misi ilmu!”
          </p>

          {/* Grade Level Selector */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {(['Kelas 4', 'Kelas 5', 'Kelas 6'] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => setCurrentGrade(grade)}
                className={`px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-md ${
                  currentGrade === grade
                    ? 'bg-amber-400 text-slate-950 ring-2 ring-yellow-200 scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                🎒 {grade}
              </button>
            ))}
          </div>

          <div className="p-3 bg-white/10 rounded-2xl max-w-xl mx-auto border border-white/20 text-xs text-sky-100 mt-2">
            <span className="font-bold text-amber-300">Fokus Belajar {currentGrade}: </span>
            <span>{currentHighlight.focus}</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. INTERACTIVE EXPEDITION MAP (10 PELABUHAN)
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-sky-100">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                PETA PELAYARAN SELAT BULUKUMBA & LAUT FLORES
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                Jalur Pelayaran Ekspedisi Siswa
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700">Rute Aktif: {activePort.name}</span>
            </div>
          </div>

          {/* 10 Harbor Interactive Map Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 pt-5">
            {PORTS_DATA.map((port) => {
              const isUnlocked = studentProgress.unlockedPortIds.includes(port.id);
              const isCurrent = activePort.id === port.id;

              return (
                <button
                  key={port.id}
                  onClick={() => handleSelectPort(port)}
                  disabled={!isUnlocked}
                  className={`relative p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-between text-center min-h-[110px] transform hover:-translate-y-1 ${
                    isCurrent
                      ? 'bg-amber-400 border-amber-500 ring-3 ring-amber-300 text-slate-950 font-black shadow-lg scale-105'
                      : isUnlocked
                      ? 'bg-sky-50 hover:bg-sky-100 border-sky-300 text-sky-950 font-bold shadow-xs'
                      : 'bg-slate-100 border-slate-200 opacity-50 cursor-not-allowed text-slate-400'
                  }`}
                >
                  {/* Harbor Icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-xs ${
                      isCurrent
                        ? 'bg-slate-950 text-amber-300 animate-bounce'
                        : isUnlocked
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-300 text-slate-500'
                    }`}
                  >
                    {isUnlocked ? (isCurrent ? '⛵' : <Check className="w-3.5 h-3.5" />) : <Lock className="w-3.5 h-3.5" />}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider mt-1">
                    Pelabuhan {port.id}
                  </span>

                  <span className="text-[11px] font-black leading-tight line-clamp-2">
                    {port.name.replace(`Pelabuhan ${port.id}: `, '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. DETAIL PELABUHAN AKTIF & MISI PEMBELAJARAN
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden">
          {/* Header Pelabuhan */}
          <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-block px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                {activePort.locationTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                {activePort.name}
              </h2>
            </div>

            {/* Mode Switchers */}
            <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/20 self-start sm:self-auto">
              <button
                onClick={() => setActiveMissionMode('info')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeMissionMode === 'info'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                📜 Kisah Pelabuhan
              </button>
              <button
                onClick={() => setActiveMissionMode('literasi')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeMissionMode === 'literasi'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                📖 Misi Literasi
              </button>
              <button
                onClick={() => setActiveMissionMode('numerasi')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeMissionMode === 'numerasi'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                🔢 Misi Numerasi
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Mode 1: Kisah Pelabuhan */}
            {activeMissionMode === 'info' && (
              <div className="space-y-5">
                <div className="bg-[#FFFDF7] p-6 rounded-2xl border-2 border-amber-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚓</span>
                    <h4 className="text-base sm:text-lg font-black text-slate-900 font-display">
                      Tentang Pelabuhan Ini
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif-story">
                    {activePort.description}
                  </p>
                </div>

                <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200 space-y-2">
                  <span className="text-xs font-black text-sky-950 uppercase tracking-wide flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>NILAI KEARIFAN LOKAL BULUKUMBA:</span>
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-sky-900 leading-relaxed">
                    “{activePort.culturalContext}”
                  </p>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div className="space-y-1">
                    <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                      FAKTA SERU PELABUHAN
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-900 leading-relaxed">
                      {activePort.funFact}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: Misi Literasi */}
            {activeMissionMode === 'literasi' && (
              <div className="space-y-5">
                <div className="bg-sky-50 p-5 sm:p-6 rounded-2xl border border-sky-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-sky-700" />
                    <h4 className="text-base font-black text-sky-950 font-display">
                      {activePort.literacyActivity.title}
                    </h4>
                  </div>
                  <p className="text-xs font-bold text-sky-800">
                    Tujuan: {activePort.literacyActivity.objective}
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-sky-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif-story">
                    “{activePort.literacyActivity.story}”
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  <span className="text-xs font-black text-slate-600 uppercase tracking-wider block">
                    Pertanyaan Pemahaman:
                  </span>
                  {activePort.literacyActivity.questions.map((q, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <p className="text-xs sm:text-sm font-black text-slate-900">
                        {i + 1}. {q.question}
                      </p>
                      <p className="text-xs font-bold text-emerald-700">
                        Jawaban Tepat: {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mode 3: Misi Numerasi */}
            {activeMissionMode === 'numerasi' && (
              <div className="space-y-5">
                <div className="bg-amber-50 p-5 sm:p-6 rounded-2xl border border-amber-300 space-y-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-700" />
                    <h4 className="text-base font-black text-amber-950 font-display">
                      {activePort.numeracyActivity.title}
                    </h4>
                  </div>
                  <p className="text-xs font-bold text-amber-800">
                    Konsep: {activePort.numeracyActivity.concept}
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-amber-200 text-sm font-black text-slate-900 leading-relaxed font-display">
                    {activePort.numeracyActivity.problem}
                  </div>
                </div>

                {/* Hint & Solution Box */}
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
                  <span className="text-xs font-black text-sky-950 uppercase tracking-wide flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-sky-700" />
                    <span>Langkah Penyelesaian Berpikir:</span>
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    Petunjuk: {activePort.numeracyActivity.hint}
                  </p>
                  <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs sm:text-sm font-black text-emerald-950">
                    ✓ Kunci Jawaban: {activePort.numeracyActivity.solution}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
