import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { SHIP_MISSIONS, ShipMission } from '../data/numeracyMissions.ts';
import {
  Calculator,
  Compass,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Star,
  RotateCcw,
  BookOpen,
  PieChart,
  Ruler,
  Shapes,
  BarChart3
} from 'lucide-react';

export const NumerasiMisiView: React.FC = () => {
  const { currentView, navigateTo, goBack, recordQuizScore, addGamePoints, completeUnitStage } = useApp();

  const missionId = (currentView.subId as string) || 'misi-1';
  const missionIndex = SHIP_MISSIONS.findIndex((m) => m.id === missionId);
  const currentMission: ShipMission = missionIndex >= 0 ? SHIP_MISSIONS[missionIndex] : SHIP_MISSIONS[0];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);

    if (selectedOption === currentMission.correctAnswer) {
      setIsCompleted(true);
      recordQuizScore(currentMission.id, 100);
      addGamePoints('game-numerasi', 30);
      completeUnitStage(currentMission.missionNumber, 'materi');
    }
  };

  const handleNextMission = () => {
    if (missionIndex < SHIP_MISSIONS.length - 1) {
      const nextMission = SHIP_MISSIONS[missionIndex + 1];
      navigateTo('numerasi-misi', nextMission.id);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowHint(false);
      setIsCompleted(false);
    } else {
      navigateTo('numerasi');
    }
  };

  const handlePrevMission = () => {
    if (missionIndex > 0) {
      const prevMission = SHIP_MISSIONS[missionIndex - 1];
      navigateTo('numerasi-misi', prevMission.id);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowHint(false);
      setIsCompleted(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. NAVIGATION HEADER */}
      <NavigationHeader
        title={`Numerasi: ${currentMission.title}`}
        subtitle={`Domain: ${currentMission.topicDomain.toUpperCase()} • Konteks Maritim`}
        badge="📐 TANTANGAN HITUNG"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={goBack}
      />

      {/* 2. MAIN NUMERACY MISSION (FULL-PAGE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-200 space-y-6">
          {/* Top Mission Title & Domain Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase text-amber-800 tracking-wide">
                Misi Matematika Phinisi #{currentMission.missionNumber}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display">
                {currentMission.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 font-black text-xs uppercase border border-amber-300">
                {currentMission.topicDomain}
              </span>
            </div>
          </div>

          {/* Context Story */}
          <div className="bg-sky-50 rounded-2xl p-5 border-2 border-sky-200 space-y-1">
            <span className="text-xs font-black text-sky-900 uppercase tracking-wide block">
              📖 Konteks Pelayaran Bulukumba:
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-reading">
              {currentMission.storyContext}
            </p>
          </div>

          {/* Problem Statement Card */}
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 sm:p-8 border-3 border-amber-300 shadow-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black uppercase text-amber-900 tracking-wide block">
                TANTANGAN NUMERASI:
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-200/90 text-amber-950 text-[11px] font-black border border-amber-400/80 shadow-2xs">
                📌 Angka berikut adalah data latihan.
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-black text-slate-950 leading-relaxed font-display">
              {currentMission.problem}
            </p>

            {/* Visual Aid Representation */}
            {currentMission.visualData && (
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/80 space-y-3">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  📊 Diagram Ilustrasi Data:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentMission.visualData.map((d, idx) => (
                    <div
                      key={idx}
                      className="bg-amber-100/70 p-3 rounded-xl border border-amber-300 text-center"
                    >
                      <div className="text-[11px] font-bold text-slate-700">{d.label}</div>
                      <div className="text-lg font-black text-amber-950 mt-0.5">
                        {d.value} <span className="text-xs font-semibold">{d.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wide block">
              Pilih Jawaban yang Benar:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentMission.options.map((opt, idx) => {
                const isChosen = selectedOption === idx;
                const isCorrect = idx === currentMission.correctAnswer;

                let optClass = 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50/50';

                if (isAnswerChecked) {
                  if (isCorrect) {
                    optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400';
                  } else if (isChosen && !isCorrect) {
                    optClass = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                  } else {
                    optClass = 'bg-white border-slate-200 opacity-60';
                  }
                } else if (isChosen) {
                  optClass = 'bg-amber-100 border-amber-500 text-amber-950 font-black ring-2 ring-amber-300';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => setSelectedOption(idx)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 shadow-xs cursor-pointer ${optClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-black shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {opt}
                      </span>
                    </div>

                    {isAnswerChecked && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Row: Hint & Submit */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-sky-100 hover:bg-sky-200 text-sky-950 text-xs font-bold transition-all cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-sky-700" />
              <span>{showHint ? 'Tutup Petunjuk' : '💡 Buka Petunjuk Hitung'}</span>
            </button>

            {!isAnswerChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className={`px-8 py-3.5 rounded-full font-black text-sm shadow-md transition-all ${
                  selectedOption === null
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 hover:scale-105 cursor-pointer'
                }`}
              >
                PERIKSA JAWABAN
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedOption(null);
                    setIsAnswerChecked(false);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Coba Lagi</span>
                </button>
              </div>
            )}
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-300 text-sky-950 text-xs sm:text-sm font-semibold animate-fade-in">
              💡 <strong>Petunjuk Guru:</strong> {currentMission.hint}
            </div>
          )}

          {/* Step-by-Step Solution Card on Check */}
          {isAnswerChecked && (
            <div
              className={`p-6 rounded-2xl border-2 space-y-3 animate-fade-in ${
                selectedOption === currentMission.correctAnswer
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-black text-sm">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>
                  {selectedOption === currentMission.correctAnswer
                    ? 'Luar Biasa! Jawabanmu Benar!'
                    : 'Belum Tepat. Simak Penjelasan Langkah Demi Langkah Berikut:'}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold leading-relaxed">
                {currentMission.stepByStepSolution}
              </p>
            </div>
          )}

          {/* Celebratory Feedback & Sequential Navigation */}
          {isCompleted && (
            <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-950 space-y-4 animate-fade-in shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-amber-950 font-display">
                    Misi Selesai! Kamu Menguasai Konsep Ini!
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-amber-800">
                    Progres tersimpan di Paspor Belajar. Lanjutkan ke misi berikutnya atau kembali ke katalog!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleNextMission}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <span>LANJUT KE MISI BERIKUTNYA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('numerasi')}
                  className="px-4 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all cursor-pointer"
                >
                  Kembali ke Menu Numerasi
                </button>
              </div>
            </div>
          )}

          {/* Sequential Bottom Bar: Sebelumnya & Selanjutnya */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-600">
            <button
              onClick={handlePrevMission}
              disabled={missionIndex === 0}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl ${
                missionIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-slate-100 text-slate-800 cursor-pointer'
              }`}
            >
              <span>← Misi Sebelumnya</span>
            </button>

            <span>
              Misi {missionIndex + 1} dari {SHIP_MISSIONS.length}
            </span>

            <button
              onClick={handleNextMission}
              disabled={missionIndex === SHIP_MISSIONS.length - 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl ${
                missionIndex === SHIP_MISSIONS.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-slate-100 text-slate-800 cursor-pointer'
              }`}
            >
              <span>Misi Selanjutnya →</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
