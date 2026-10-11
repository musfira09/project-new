import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { PORTS_DATA } from '../data/curriculumData.ts';
import { PortLesson } from '../types.ts';
import {
  Compass,
  MapPin,
  Sailboat,
  Star,
  CheckCircle2,
  BookOpen,
  Calculator,
  ArrowRight,
  Sparkles,
  FileCheck,
  Check,
  RotateCcw
} from 'lucide-react';

export const JelajahDetailView: React.FC = () => {
  const {
    currentView,
    navigateTo,
    goBack,
    goToHome,
    unlockPort,
    addGamePoints,
    openSourceViewer
  } = useApp();

  const portId = (currentView.subId as number) || 1;
  const portIndex = PORTS_DATA.findIndex((p) => p.id === portId);
  const activePort: PortLesson = portIndex >= 0 ? PORTS_DATA[portIndex] : PORTS_DATA[0];

  const [activeTab, setActiveTab] = useState<'info' | 'literasi' | 'numerasi'>('info');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Derive quiz question for current tab
  const literacyOptions = [
    activePort.literacyActivity?.questions[0]?.answer || 'Jawaban Benar',
    'Wilayah daratan pegunungan Jawa',
    'Kawasan hutan belantara Kalimantan'
  ];

  const numeracyOptions = [
    activePort.numeracyActivity?.solution || 'Jawaban Numerasi Tepat',
    '15 satuan perhitungan cepat',
    '30 ukuran kayu tambahan'
  ];

  const handleCheckQuiz = (isCorrectChoice: boolean) => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);

    if (isCorrectChoice) {
      setIsCompleted(true);
      addGamePoints(`port-${activePort.id}`, 35);
      if (activePort.id < 10) {
        unlockPort(activePort.id + 1);
      }
    }
  };

  const handleNextPort = () => {
    if (portIndex < PORTS_DATA.length - 1) {
      const nextPort = PORTS_DATA[portIndex + 1];
      navigateTo('jelajah-detail', nextPort.id);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      setIsCompleted(false);
      setActiveTab('info');
    } else {
      navigateTo('jelajah');
    }
  };

  const handlePrevPort = () => {
    if (portIndex > 0) {
      const prevPort = PORTS_DATA[portIndex - 1];
      navigateTo('jelajah-detail', prevPort.id);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      setIsCompleted(false);
      setActiveTab('info');
    }
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <NavigationHeader
        title={`Jelajah: ${activePort.name}`}
        subtitle={`${activePort.locationTitle} • Bulukumba`}
        badge="🧭 EKSPLORASI LOKASI"
        badgeColor="bg-emerald-400 text-slate-950 font-black"
        onBack={goBack}
        extraActions={
          <button
            onClick={() => openSourceViewer('pemkab-bulukumba-pinisi')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Rujukan Lokasi</span>
          </button>
        }
      />

      {/* 2. MAIN DESTINATION VIEW (FULL-PAGE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-sky-100 space-y-6">
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-black">
                  PELABUHAN #{activePort.id}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{activePort.locationTitle}</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {activePort.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 font-black text-xs uppercase border border-amber-300">
                ⭐ {activePort.requiredPoints} Poin
              </span>
            </div>
          </div>

          {/* Location Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border-2 border-sky-200 aspect-video max-h-[300px] flex items-center justify-center">
            <img
              src="/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg"
              alt={activePort.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 drop-shadow-md">
              <h3 className="text-lg sm:text-xl font-black text-white font-display">
                {activePort.name}
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 font-medium">
                {activePort.description}
              </p>
            </div>
          </div>

          {/* Tab Switcher for Location Modes */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'info', label: '📖 Info & Budaya', icon: Compass },
              { id: 'literasi', label: '📚 Misi Membaca', icon: BookOpen },
              { id: 'numerasi', label: '📐 Misi Berhitung', icon: Calculator }
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSelectedAnswer(null);
                    setIsAnswerChecked(false);
                  }}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
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

          {/* TAB 1: INFO & BUDAYA */}
          {activeTab === 'info' && (
            <div className="bg-sky-50 rounded-2xl p-6 sm:p-8 border-2 border-sky-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-sky-950 flex items-center gap-2 font-display">
                <Compass className="w-5 h-5 text-sky-700" />
                <span>Konteks Budaya & Kearifan Lokal</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {activePort.culturalContext}
              </p>
              <div className="p-4 rounded-xl bg-white border border-sky-200 text-xs sm:text-sm font-bold text-sky-900 leading-relaxed">
                💡 <strong>Tahukah Kamu?</strong> {activePort.funFact}
              </div>
            </div>
          )}

          {/* TAB 2: MISI LITERASI */}
          {activeTab === 'literasi' && (
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-200 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-emerald-800 tracking-wide block">
                  MISI LITERASI PELABUHAN:
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-display">
                  {activePort.literacyActivity?.title || 'Aktivitas Membaca'}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white border border-emerald-200 text-sm text-slate-800 leading-relaxed font-medium">
                {activePort.literacyActivity?.story}
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-700">
                  Pertanyaan: {activePort.literacyActivity?.questions[0]?.question}
                </p>
                <div className="space-y-2">
                  {literacyOptions.map((opt, idx) => {
                    const isChosen = selectedAnswer === idx;
                    const isCorrect = idx === 0;
                    let optClass = 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50';

                    if (isAnswerChecked) {
                      if (isCorrect) {
                        optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400';
                      } else if (isChosen && !isCorrect) {
                        optClass = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                      } else {
                        optClass = 'bg-white border-slate-200 opacity-60';
                      }
                    } else if (isChosen) {
                      optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-300';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswerChecked}
                        onClick={() => setSelectedAnswer(idx)}
                        className={`w-full p-3.5 rounded-xl border-2 text-left transition-all flex items-center justify-between gap-3 shadow-xs cursor-pointer ${optClass}`}
                      >
                        <span className="text-xs sm:text-sm font-bold">{opt}</span>
                        {isAnswerChecked && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                {!isAnswerChecked ? (
                  <button
                    onClick={() => handleCheckQuiz(selectedAnswer === 0)}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-full font-black text-sm shadow-md transition-all ${
                      selectedAnswer === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 cursor-pointer'
                    }`}
                  >
                    PERIKSA JAWABAN
                  </button>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-950 text-xs sm:text-sm font-bold">
                    ✓ Hebat! Jawabanmu tepat: {activePort.literacyActivity?.questions[0]?.answer}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: MISI NUMERASI */}
          {activeTab === 'numerasi' && (
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-200 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-amber-800 tracking-wide block">
                  MISI NUMERASI PELABUHAN:
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-display">
                  {activePort.numeracyActivity?.title || 'Tantangan Berhitung'}
                </h3>
              </div>

              {/* Mandatory Notice */}
              <div className="p-2.5 bg-amber-100 text-amber-950 rounded-xl border border-amber-300 text-xs font-black flex items-center gap-2">
                <span>📌</span>
                <span>Angka berikut adalah data latihan.</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-amber-200 text-sm text-slate-800 leading-relaxed font-medium space-y-2">
                <p><strong>Soal Cerita:</strong> {activePort.numeracyActivity?.problem}</p>
                <p className="text-xs text-amber-900 italic font-semibold">💡 Petunjuk: {activePort.numeracyActivity?.hint}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-700">Pilih penyelesaian yang tepat:</p>
                <div className="space-y-2">
                  {numeracyOptions.map((opt, idx) => {
                    const isChosen = selectedAnswer === idx;
                    const isCorrect = idx === 0;
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
                        onClick={() => setSelectedAnswer(idx)}
                        className={`w-full p-3.5 rounded-xl border-2 text-left transition-all flex items-center justify-between gap-3 shadow-xs cursor-pointer ${optClass}`}
                      >
                        <span className="text-xs sm:text-sm font-bold">{opt}</span>
                        {isAnswerChecked && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                {!isAnswerChecked ? (
                  <button
                    onClick={() => handleCheckQuiz(selectedAnswer === 0)}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-full font-black text-sm shadow-md transition-all ${
                      selectedAnswer === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 cursor-pointer'
                    }`}
                  >
                    PERIKSA JAWABAN
                  </button>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-950 text-xs sm:text-sm font-bold">
                    ✓ Sempurna! {activePort.numeracyActivity?.solution}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Celebratory Feedback & Next Action */}
          {isCompleted && (
            <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 space-y-4 animate-fade-in shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⛵</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-emerald-950 font-display">
                    Pelabuhan {activePort.id} Berhasil Dikuasai!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                    Kamu mendapatkan +35 Poin Pelaut Cendekia!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {portIndex < PORTS_DATA.length - 1 ? (
                  <button
                    onClick={handleNextPort}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm shadow-md transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span>Lanjut ke Pelabuhan {activePort.id + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => navigateTo('paspor')}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span>Buka Paspor Belajarku</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => navigateTo('jelajah')}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 cursor-pointer"
                >
                  Kembali ke Peta Ekspedisi
                </button>
              </div>
            </div>
          )}

          {/* Navigation Between Ports */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              onClick={handlePrevPort}
              disabled={portIndex === 0}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm border transition-all ${
                portIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer'
              }`}
            >
              <span>← Pelabuhan Sebelumnya</span>
            </button>

            <span className="text-xs font-bold text-slate-500">
              Pelabuhan {activePort.id} dari {PORTS_DATA.length}
            </span>

            <button
              onClick={handleNextPort}
              disabled={portIndex === PORTS_DATA.length - 1}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm border transition-all ${
                portIndex === PORTS_DATA.length - 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer'
              }`}
            >
              <span>Pelabuhan Berikutnya →</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default JelajahDetailView;
