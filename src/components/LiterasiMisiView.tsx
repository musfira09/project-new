import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LITERACY_JOURNEYS } from '../data/literacyStories.ts';
import {
  Target,
  Search,
  ListOrdered,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export const LiterasiMisiView: React.FC = () => {
  const {
    currentView,
    navigateTo,
    goBack,
    recordQuizScore,
    completeUnitStage,
    addGamePoints
  } = useApp();

  const portId = (currentView.subId as number) || 1;
  const journey = LITERACY_JOURNEYS.find((j) => j.portId === portId) || LITERACY_JOURNEYS[0];

  const [activeTab, setActiveTab] = useState<'info' | 'urutan' | 'makna' | 'kuis'>('kuis');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  const handleCheckQuiz = () => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);

    if (selectedOption === journey.missionChallenges.mcQuestion.correctAnswer) {
      setShowCelebration(true);
      recordQuizScore(`lit-port-${journey.portId}`, 100);
      addGamePoints(`lit-port-${journey.portId}`, 50);
      completeUnitStage(journey.portId, 'aktivitas');
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowCelebration(false);
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <NavigationHeader
        title={`Misi: ${journey.storyTitle}`}
        subtitle={`Tantangan Pemahaman • ${journey.portName}`}
        badge="🔎 MISI LITERASI"
        badgeColor="bg-emerald-400 text-slate-950 font-black"
        onBack={goBack}
        extraActions={
          <button
            onClick={() => navigateTo('literasi-materi', journey.portId)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Buka Materi</span>
          </button>
        }
      />

      {/* 2. MAIN MISSION VIEW (FULL-PAGE IMMERSIVE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-sky-100 space-y-6">
          {/* Header Title */}
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <span className="text-xs font-black text-sky-800 uppercase tracking-wide">
              {journey.portName}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display">
              Tantangan Pemahaman & Penyelidikan Kisah
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Selesaikan tantangan di bawah ini untuk menguji ketajaman analisismu dan raih 3 Bintang Pelaut!
            </p>
          </div>

          {/* 4 Mode Tab Switchers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'kuis', label: '🎯 Kuis Pilihan', icon: Target },
              { id: 'info', label: '🔎 Cari Fakta', icon: Search },
              { id: 'urutan', label: '🧩 Susun Alur', icon: ListOrdered },
              { id: 'makna', label: '💡 Makna Nilai', icon: Lightbulb }
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                    active
                      ? 'bg-[#0B2A4A] text-amber-300 shadow-md ring-2 ring-amber-400 scale-102'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: KUIS PILIHAN GANDA (INTERACTIVE WITH FEEDBACK) */}
          {activeTab === 'kuis' && (
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-200 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase text-emerald-800 tracking-wide block">
                  PERTANYAAN PEMAHAMAN LITERASI:
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 font-display">
                  {journey.missionChallenges.mcQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {journey.missionChallenges.mcQuestion.options.map((option, idx) => {
                  const isChosen = selectedOption === idx;
                  const isCorrect = idx === journey.missionChallenges.mcQuestion.correctAnswer;

                  let optionStyle = 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50';

                  if (isAnswerChecked) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400';
                    } else if (isChosen && !isCorrect) {
                      optionStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                    } else {
                      optionStyle = 'bg-white border-slate-200 opacity-60';
                    }
                  } else if (isChosen) {
                    optionStyle = 'bg-sky-100 border-sky-500 text-sky-950 font-black ring-2 ring-sky-300';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerChecked}
                      onClick={() => setSelectedOption(idx)}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 shadow-xs cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-black shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {option}
                        </span>
                      </div>

                      {isAnswerChecked && isCorrect && (
                        <span className="text-emerald-700 font-black text-xs shrink-0 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Benar
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit & Feedback Button */}
              <div className="pt-2">
                {!isAnswerChecked ? (
                  <button
                    onClick={handleCheckQuiz}
                    disabled={selectedOption === null}
                    className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-md ${
                      selectedOption === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 hover:scale-105 cursor-pointer'
                    }`}
                  >
                    PERIKSA JAWABAN
                  </button>
                ) : (
                  <div className="space-y-4">
                    {selectedOption === journey.missionChallenges.mcQuestion.correctAnswer ? (
                      <div className="p-4 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 space-y-2">
                        <div className="flex items-center gap-2 font-black text-sm text-emerald-900">
                          <span className="text-xl">🎉</span>
                          <span>Hebat! Jawabanmu Tepat Sekali!</span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-emerald-900/90">
                          {journey.missionChallenges.mcQuestion.explanation}
                        </p>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 space-y-2">
                        <div className="flex items-center gap-2 font-black text-sm text-amber-900">
                          <span className="text-xl">🌱</span>
                          <span>Belum tepat. Coba perhatikan lagi ceritanya!</span>
                        </div>
                        <button
                          onClick={handleReset}
                          className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Coba Lagi</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TEMUKAN INFO */}
          {activeTab === 'info' && (
            <div className="bg-sky-50 rounded-2xl p-6 sm:p-8 border-2 border-sky-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-sky-950 flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-700" />
                <span>Misi Penjelajah Kata: Temukan Informasi Kunci</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-bold">
                {journey.missionChallenges.findInfo}
              </p>
              <div className="p-4 rounded-xl bg-white border border-sky-200 text-xs sm:text-sm font-bold text-sky-900 leading-relaxed">
                💡 Petunjuk Penyelidik: Perhatikan tokoh, tempat, dan benda penting yang disebutkan dalam bacaan!
              </div>
            </div>
          )}

          {/* TAB 3: SUSUN URUTAN */}
          {activeTab === 'urutan' && (
            <div className="bg-purple-50 rounded-2xl p-6 sm:p-8 border-2 border-purple-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-purple-950 flex items-center gap-2">
                <ListOrdered className="w-5 h-5 text-purple-700" />
                <span>Misi Urutan Peristiwa: Rangkaian Kisah yang Runtut</span>
              </h3>
              <div className="space-y-2.5">
                {journey.missionChallenges.sequence.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple-200 shadow-xs"
                  >
                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MAKNA NILAI */}
          {activeTab === 'makna' && (
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-amber-950 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-700" />
                <span>Misi Penjelajah Makna: Pesan Luhur & Kearifan Budaya</span>
              </h3>
              <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-xs text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
                “{journey.missionChallenges.whatItMeans}”
              </div>
              <p className="text-xs text-amber-900 font-semibold">
                Nilai ini mengajarkan kita pentingnya integritas, ketelitian, dan rasa hormat kepada alam serta warisan leluhur.
              </p>
            </div>
          )}

          {/* Celebration Banner & Next Action */}
          {showCelebration && (
            <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 space-y-4 animate-fade-in shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-emerald-950 font-display">
                    Misi Selesai! Kamu Meraih 3 Bintang Pelaut!
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-emerald-800">
                    Progres misi telah tercatat di Paspor Belajar. Lanjutkan petualangan ke Game Literasi!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo('game-arena', 'game-1')}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <span>LANJUT KE GAME LITERASI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('literasi')}
                  className="px-4 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all cursor-pointer"
                >
                  Kembali ke Menu Literasi
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
