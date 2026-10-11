import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { SHIP_MISSIONS } from '../data/numeracyMissions.ts';
import {
  Calculator,
  Compass,
  Coins,
  Ruler,
  PieChart,
  Shapes,
  BarChart3,
  Brain,
  Star,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Sailboat,
  Anchor,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ShipMission {
  id: string;
  missionNumber: number;
  title: string;
  topicDomain: string;
  storyContext: string;
  problem: string;
  visualType?: 'coins' | 'bar' | 'shape' | 'fraction' | 'ruler';
  visualData?: { label: string; value: number; unit?: string }[];
  options: string[];
  correctAnswer: number;
  stepByStepSolution: string;
  hint: string;
}

export const NumerasiModule: React.FC = () => {
  const {
    currentGrade,
    recordQuizScore,
    addGamePoints,
    completeUnitStage,
    openSourceViewer,
    getStageStatus,
    navigateTo,
    goBack,
    goToHome
  } = useApp();

  // Selected Math Topic Domain
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  // Active Ship Mission
  const [activeMissionIndex, setActiveMissionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [earnedStars, setEarnedStars] = useState<number>(3);

  // 7 Domain Cards
  const domainCards = [
    { id: 'all', label: 'Semua Misi', icon: Compass, color: 'from-amber-400 to-amber-500 text-slate-950 ring-2 ring-amber-300' },
    { id: 'bilangan', label: '🔢 Bilangan', icon: Calculator, color: 'from-sky-50 to-blue-100 text-sky-950 border-sky-300' },
    { id: 'operasi', label: '➕ Operasi Hitung', icon: Shapes, color: 'from-emerald-50 to-teal-100 text-emerald-950 border-emerald-300' },
    { id: 'pecahan', label: '🍕 Pecahan', icon: PieChart, color: 'from-orange-50 to-amber-100 text-orange-950 border-orange-300' },
    { id: 'pengukuran', label: '📏 Pengukuran', icon: Ruler, color: 'from-indigo-50 to-blue-100 text-indigo-950 border-indigo-300' },
    { id: 'geometri', label: '📐 Geometri', icon: Shapes, color: 'from-pink-50 to-rose-100 text-pink-950 border-pink-300' },
    { id: 'data', label: '📊 Data', icon: BarChart3, color: 'from-teal-50 to-emerald-100 text-teal-950 border-teal-300' },
    { id: 'masalah', label: '🧠 Pemecahan Masalah', icon: Brain, color: 'from-purple-50 to-indigo-100 text-purple-950 border-purple-300' }
  ];

  // 5 Progressive Ship Missions (Misi Kapal)
  const shipMissions: ShipMission[] = [
    {
      id: 'misi-1',
      missionNumber: 1,
      title: 'Misi 1 — Hitung Perjalanan',
      topicDomain: 'pengukuran',
      storyContext: 'Kapal Phinisi bersiap mengarungi rute dari Pelabuhan Tanjung Bira menuju Kepulauan Liukang Loe dengan kecepatan tetap.',
      problem: 'Sebuah perahu Phinisi menempuh jarak sejauh 18 kilometer dalam waktu 2 jam pelayaran. Berapa kilometer jarak yang ditempuh perahu tersebut setiap 1 jam?',
      visualType: 'bar',
      visualData: [
        { label: 'Jam Ke-1', value: 9, unit: 'km' },
        { label: 'Jam Ke-2', value: 9, unit: 'km' }
      ],
      options: ['6 kilometer', '8 kilometer', '9 kilometer', '12 kilometer'],
      correctAnswer: 2,
      stepByStepSolution: 'Langkah hitung: Jarak total dibagi waktu tempuh = 18 km : 2 jam = 9 km/jam.',
      hint: 'Gunakan operasi pembagian: 18 dibagi 2.'
    },
    {
      id: 'misi-2',
      missionNumber: 2,
      title: 'Misi 2 — Ukur Kapal',
      topicDomain: 'geometri',
      storyContext: 'Panrita Lopi sedang mengukur rasio balok lunas (Kalibise) dan tiang agung perahu agar seimbang saat membelah ombak besar.',
      problem: 'Layar segitiga haluan perahu Phinisi memiliki alas sepanjang 6 meter dan tinggi 8 meter. Berapakah luas kain layar segitiga tersebut? (Rumus: ½ × alas × tinggi)',
      visualType: 'shape',
      visualData: [
        { label: 'Alas Layar', value: 6, unit: 'meter' },
        { label: 'Tinggi Layar', value: 8, unit: 'meter' }
      ],
      options: ['14 meter persegi', '24 meter persegi', '48 meter persegi', '32 meter persegi'],
      correctAnswer: 1,
      stepByStepSolution: 'Langkah hitung: Luas Segitiga = ½ × 6 meter × 8 meter = 3 × 8 = 24 meter persegi.',
      hint: 'Kalikan alas dengan tinggi (6 × 8 = 48), lalu bagi hasilnya dengan 2.'
    },
    {
      id: 'misi-3',
      missionNumber: 3,
      title: 'Misi 3 — Pecahkan Muatan',
      topicDomain: 'pecahan',
      storyContext: 'Sebuah perahu layar mengangkut peti rempah-rempah kelapa dan cengkeh dari perkebunan Bulukumba.',
      problem: 'Dari total 7 helai layar Phinisi, nahkoda membentangkan 4 helai layar karena hembusan angin sedang sedang. Manakah bentuk pecahan yang menyatakan jumlah layar yang terbentang?',
      visualType: 'fraction',
      visualData: [
        { label: 'Layar Terbentang', value: 4, unit: 'helai' },
        { label: 'Layar Tergulung', value: 3, unit: 'helai' }
      ],
      options: ['3/7 bagian', '4/7 bagian', '7/4 bagian', '4/10 bagian'],
      correctAnswer: 1,
      stepByStepSolution: 'Langkah hitung: Bagian yang terbentang (4) dibanding jumlah keseluruhan layar (7) adalah 4/7 bagian.',
      hint: 'Pembilang adalah layar yang terbentang (4), penyebut adalah total seluruh layar (7).'
    },
    {
      id: 'misi-4',
      missionNumber: 4,
      title: 'Misi 4 — Baca Data',
      topicDomain: 'data',
      storyContext: 'Petugas pelabuhan mendata jumlah kapal Phinisi wisata yang berlabuh di Tanjung Bira selama 4 pekan berturut-turut.',
      problem: 'Pekan 1: 12 kapal, Pekan 2: 15 kapal, Pekan 3: 18 kapal, Pekan 4: 15 kapal. Berapakah rata-rata (mean) jumlah kapal yang berlabuh per pekan?',
      visualType: 'bar',
      visualData: [
        { label: 'Pekan 1', value: 12, unit: 'kapal' },
        { label: 'Pekan 2', value: 15, unit: 'kapal' },
        { label: 'Pekan 3', value: 18, unit: 'kapal' },
        { label: 'Pekan 4', value: 15, unit: 'kapal' }
      ],
      options: ['13 kapal', '14 kapal', '15 kapal', '16 kapal'],
      correctAnswer: 2,
      stepByStepSolution: 'Langkah hitung: Jumlahkan seluruh data (12 + 15 + 18 + 15 = 60 kapal). Lalu bagi dengan 4 pekan = 60 : 4 = 15 kapal per pekan.',
      hint: 'Jumlahkan data keempat pekan, kemudian bagi dengan angka 4.'
    },
    {
      id: 'misi-5',
      missionNumber: 5,
      title: 'Misi 5 — Tantangan Kapten',
      topicDomain: 'masalah',
      storyContext: 'Panrita Lopi membutuhkan pasak kayu ulin untuk menyatukan 15 baris papan lambung kapal.',
      problem: 'Jika setiap baris papan membutuhkan 16 pasak kayu ulin, berapa total pasak kayu yang harus disiapkan oleh para sawi pembuat kapal?',
      visualType: 'coins',
      visualData: [
        { label: 'Baris Papan', value: 15, unit: 'baris' },
        { label: 'Pasak per Baris', value: 16, unit: 'pasak' }
      ],
      options: ['210 pasak', '230 pasak', '240 pasak', '260 pasak'],
      correctAnswer: 2,
      stepByStepSolution: 'Langkah hitung: Gunakan perkalian bersusun: 15 × 16 = 240 pasak kayu ulin.',
      hint: 'Hitung (15 × 10) + (15 × 6) = 150 + 90 = 240.'
    }
  ];

  const currentMission = shipMissions[activeMissionIndex] || shipMissions[0];

  const handleSelectMission = (index: number) => {
    setActiveMissionIndex(index);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowHint(false);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);
    if (selectedOption === currentMission.correctAnswer) {
      recordQuizScore(currentMission.id, 100);
      addGamePoints('game-numerasi', 25);
      setEarnedStars(3);
      // Automatically unlock stage for this mission unit
      completeUnitStage(currentMission.missionNumber, 'materi');
      completeUnitStage(currentMission.missionNumber, 'aktivitas');
    } else {
      setEarnedStars(2);
    }
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header with Back and Home */}
      <NavigationHeader
        title="PETUALANGAN NUMERASI"
        subtitle="Nalar Hitung & Geometri Maritim Bulukumba"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* 
        ========================================================================
        1. HEADER: PETUALANGAN NUMERASI
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-6 pb-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        {/* Floating background mathematical icons */}
        <div className="absolute top-4 left-8 opacity-25 select-none pointer-events-none">
          <Calculator className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-10 opacity-20 select-none pointer-events-none">
          <Coins className="w-20 h-20 text-yellow-300" />
        </div>
        <div className="absolute top-10 right-1/4 opacity-25 select-none pointer-events-none">
          <Compass className="w-14 h-14 text-sky-200" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <span>🔢 PETUALANGAN NUMERASI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Nalar Hitung & Geometri Maritim
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Hitung, temukan pola, dan pecahkan tantangan!”
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1">
              <Sailboat className="w-4 h-4 text-amber-400" />
              <span>Matematika Kontekstual Phinisi</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{currentGrade} SD</span>
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. KARTU TOPIK DOMAIN (7 KARTU INTERAKTIF)
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 rounded-full bg-white/95 text-sky-950 text-xs sm:text-sm font-extrabold shadow-md border border-sky-200">
            🧭 Domain Matematika Bahari
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {domainCards.map((card) => {
            const isSelected = selectedDomain === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setSelectedDomain(card.id)}
                className={`p-3 rounded-2xl border-2 transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5 shadow-sm transform hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-amber-400 border-amber-500 ring-3 ring-amber-300 text-slate-950 font-black shadow-md scale-105'
                    : 'bg-white hover:bg-sky-50 border-slate-200 text-slate-700 font-bold'
                }`}
              >
                <span className="text-base">{card.label.split(' ')[0]}</span>
                <span className="text-[11px] font-black leading-tight line-clamp-1">
                  {card.label.split(' ').slice(1).join(' ') || card.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        3. NUMERASI BERBASIS MISI: ⛵ MISI KAPAL
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-sky-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⛵</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                  MISI KAPAL PHINISI
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-bold text-sky-800 mt-0.5">
                Pecahkan setiap misi pelayaran secara bertahap dan raih stempel Kapten Matematika!
              </p>
            </div>

            {/* Bintang Misi */}
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1.5 rounded-full self-start sm:self-auto shadow-xs">
              <span className="text-xs font-bold text-amber-900">Bintang Misi:</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
            </div>
          </div>

          {/* Mission Progress Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-5">
            {shipMissions.map((mission, idx) => {
              return (
                <button
                  key={mission.id}
                  onClick={() => navigateTo('numerasi-misi', mission.id)}
                  className="group relative text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/60 transition-all duration-200 flex flex-col justify-between hover:shadow-md hover:scale-102 cursor-pointer min-h-[110px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      BUKA MISI ↗
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 mt-2 font-display line-clamp-1">
                    {mission.title.split('—')[1] || mission.title}
                  </h4>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 capitalize">
                    {mission.topicDomain}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        4. ACTIVE MISSION CANVAS (CHALLENGE BOARD)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="inline-block px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                {currentMission.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Tantangan Hitung Pelaut Cilik
              </h3>
            </div>

            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 font-bold text-xs border border-white/20 transition-all self-start sm:self-auto"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{showHint ? 'Tutup Bantuan' : '💡 Bantuan Hitung'}</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Story Context Banner */}
            <div className="bg-[#FFFDF7] p-5 rounded-2xl border-2 border-amber-200/80 shadow-xs flex items-start gap-3">
              <span className="text-2xl">🧭</span>
              <div className="space-y-1">
                <span className="text-xs font-black text-amber-900 uppercase tracking-wide">
                  KONTEKS DUNIA NYATA BULUKUMBA
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {currentMission.storyContext}
                </p>
              </div>
            </div>

            {/* Visual Problem Diagram / Data Card */}
            {currentMission.visualData && (
              <div className="bg-sky-50 rounded-2xl p-5 border border-sky-200 space-y-3">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wide flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-sky-700" />
                  <span>DATA PENGAMATAN KAPAL</span>
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentMission.visualData.map((d, i) => (
                    <div key={i} className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-xs text-center">
                      <span className="text-xs font-bold text-slate-500 block">{d.label}</span>
                      <span className="text-xl sm:text-2xl font-black text-sky-900 font-display block mt-0.5">
                        {d.value}
                      </span>
                      {d.unit && <span className="text-[11px] font-bold text-slate-400">{d.unit}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem Statement Box */}
            <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border-2 border-amber-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black text-amber-900 uppercase tracking-wide block">
                  PERTANYAAN MISI
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-200 text-amber-950 text-[11px] font-black border border-amber-400">
                  📌 Angka berikut adalah data latihan.
                </span>
              </div>
              <p className="text-base sm:text-lg font-black text-slate-900 font-display leading-snug">
                {currentMission.problem}
              </p>
            </div>

            {/* Hint Box (if toggled) */}
            {showHint && (
              <div className="p-4 rounded-2xl bg-yellow-50 border-2 border-yellow-300 text-xs sm:text-sm text-yellow-950 font-bold flex items-start gap-2.5 animate-fade-in">
                <Sparkles className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                <span>💡 Petunjuk Hitung: {currentMission.hint}</span>
              </div>
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              <span className="text-xs font-black text-slate-600 uppercase tracking-wide block">
                Pilih Jawaban yang Paling Tepat:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentMission.options.map((opt, idx) => {
                  const isChosen = selectedOption === idx;
                  const isCorrect = idx === currentMission.correctAnswer;

                  let style = 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50/50';

                  if (isAnswerChecked) {
                    if (isCorrect) {
                      style = 'bg-emerald-100 border-emerald-500 ring-2 ring-emerald-400 font-black';
                    } else if (isChosen && !isCorrect) {
                      style = 'bg-rose-50 border-rose-400 ring-2 ring-rose-300 opacity-70';
                    }
                  } else if (isChosen) {
                    style = 'bg-amber-100 border-amber-500 ring-2 ring-amber-400 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => !isAnswerChecked && setSelectedOption(idx)}
                      disabled={isAnswerChecked}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-black shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm font-bold text-slate-900">{opt}</span>
                      </div>

                      {isAnswerChecked && isCorrect && (
                        <span className="text-emerald-700 font-black text-xs">✓ Benar</span>
                      )}
                      {isAnswerChecked && isChosen && !isCorrect && (
                        <span className="text-rose-600 font-black text-xs">✗ Salah</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Check Answer Button & Feedback */}
            <div className="pt-2 space-y-4">
              {!isAnswerChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-md ${
                    selectedOption === null
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 hover:scale-105'
                  }`}
                >
                  [ PERIKSA JAWABAN ]
                </button>
              ) : (
                <div className="space-y-4">
                  {/* Feedback Banner */}
                  {selectedOption === currentMission.correctAnswer ? (
                    <div className="p-5 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 flex items-start gap-3.5 shadow-md">
                      <span className="text-3xl">🎉</span>
                      <div className="space-y-1.5">
                        <h5 className="text-sm sm:text-base font-black">
                          🎉 Hebat! Kamu menemukan perhitungannya!
                        </h5>
                        <p className="text-xs sm:text-sm font-bold text-emerald-900">
                          {currentMission.stepByStepSolution}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 flex items-start gap-3.5 shadow-md">
                      <span className="text-3xl">🌱</span>
                      <div className="space-y-1.5">
                        <h5 className="text-sm sm:text-base font-black">
                          🌱 Belum tepat. Yuk, hitung kembali langkah demi langkah.
                        </h5>
                        <p className="text-xs sm:text-sm font-bold text-amber-900">
                          {currentMission.stepByStepSolution}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setIsAnswerChecked(false);
                        setSelectedOption(null);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Ulangi Misi Ini</span>
                    </button>

                    {activeMissionIndex < shipMissions.length - 1 && (
                      <button
                        onClick={() => handleSelectMission(activeMissionIndex + 1)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2A4A] hover:bg-[#064B78] text-white text-xs font-black transition-all hover:scale-105 shadow-md"
                      >
                        <span>Lanjut ke Misi Berikutnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
