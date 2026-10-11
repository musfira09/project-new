import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LITERACY_JOURNEYS, StoryPage } from '../data/literacyStories.ts';
import {
  BookOpen,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Sailboat,
  Lightbulb
} from 'lucide-react';

export const LiterasiMateriView: React.FC = () => {
  const {
    currentView,
    navigateTo,
    goBack,
    completeUnitStage,
    openSourceViewer
  } = useApp();

  const portId = (currentView.subId as number) || 1;
  const journey = LITERACY_JOURNEYS.find((j) => j.portId === portId) || LITERACY_JOURNEYS[0];

  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<{ word: string; meaning: string } | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentPage: StoryPage = journey.pages[currentPageIndex] || journey.pages[0];
  const isLastPage = currentPageIndex === journey.pages.length - 1;

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPage.text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.85; // friendly tempo for kids
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleNextPage = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (currentPageIndex < journey.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      setSelectedWord(null);
    }
  };

  const handlePrevPage = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      setSelectedWord(null);
    }
  };

  const handleMarkComplete = () => {
    setIsCompleted(true);
    completeUnitStage(journey.portId, 'materi');
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <NavigationHeader
        title={`Materi: ${journey.storyTitle}`}
        subtitle={journey.portName}
        badge="📚 BACAAN LENGKAP"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={goBack}
        extraActions={
          <button
            onClick={() => openSourceViewer(journey.sourceId)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Lihat Sumber</span>
          </button>
        }
      />

      {/* 2. MAIN STORY VIEWER (FULL-PAGE IMMERSIVE) */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-sky-100 space-y-6">
          {/* Header Story Info & Audio Control */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-black uppercase text-sky-800 tracking-wider">
                {journey.portName}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display">
                {journey.storyTitle}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleAudio}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-black text-xs sm:text-sm transition-all shadow-md ${
                  isSpeaking
                    ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Hentikan Suara</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>🔊 Dengarkan Cerita</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Story Artwork / Illustration Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border-2 border-sky-200 aspect-video max-h-[360px] flex items-center justify-center">
            <img
              src={currentPage.imageUrl || '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg'}
              alt={journey.storyTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs sm:text-sm font-bold drop-shadow-md">
              📍 {currentPage.imagePrompt || journey.summary}
            </div>
          </div>

          {/* Text Content with Highlighted Clickable Words */}
          <div className="bg-sky-50/60 rounded-2xl p-6 sm:p-8 border border-sky-100 space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-slate-900 font-medium leading-relaxed font-reading">
              {currentPage.text}
            </p>

            {/* Clickable Highlighted Words */}
            {currentPage.highlightWords && currentPage.highlightWords.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wide block mb-2">
                  🔍 Kosakata Pelaut (Klik untuk tahu artinya):
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentPage.highlightWords.map((hw, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedWord(hw)}
                      className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm transition-all border border-amber-300 shadow-xs cursor-pointer transform hover:scale-105"
                    >
                      💡 {hw.word}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Meaning Popup / Callout */}
            {selectedWord && (
              <div className="p-4 rounded-xl bg-amber-100 border-2 border-amber-400 text-amber-950 animate-fade-in flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Makna Kata: <strong>{selectedWord.word}</strong></span>
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-amber-900/90 leading-relaxed">
                    {selectedWord.meaning}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="text-xs font-black text-amber-800 hover:text-amber-950 px-2 py-1"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Sequential Page Turning Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                currentPageIndex === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-sky-100 hover:bg-sky-200 text-sky-950 hover:scale-102'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>← Halaman Sebelumnya</span>
            </button>

            <span className="text-xs sm:text-sm font-black text-slate-600 font-mono">
              Halaman {currentPageIndex + 1} dari {journey.pages.length}
            </span>

            {isLastPage ? (
              <button
                onClick={handleMarkComplete}
                className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ SELESAI MEMPELAJARI</span>
              </button>
            ) : (
              <button
                onClick={handleNextPage}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-102 transition-all cursor-pointer"
              >
                <span>Halaman Berikutnya →</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Celebratory Feedback & Next Step Banner */}
          {isCompleted && (
            <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 space-y-4 animate-fade-in shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎉</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-emerald-950 font-display">
                    Hebat! Kamu telah menyelesaikan bacaan ini!
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-emerald-800">
                    Progres belajarmu telah tersimpan. Sekarang, buktikan pemahamanmu di Misi Literasi!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo('literasi-misi', journey.portId)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <span>LANJUT KE MISI LITERASI</span>
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
