import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { CULTURE_TOPICS, CultureTopic } from './BudayaDetailView.tsx';
import {
  Sailboat,
  Volume2,
  VolumeX,
  Star,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Award,
  BookOpen
} from 'lucide-react';

export const BudayaPhinisi: React.FC = () => {
  const { addGamePoints, navigateTo, goToHome, openSourceViewer } = useApp();

  const [activeCardId, setActiveCardId] = useState<string>('apa-itu');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [selectedTerm, setSelectedTerm] = useState<{ term: string; meaning: string } | null>(null);

  const currentTopic: CultureTopic =
    CULTURE_TOPICS.find((t) => t.id === activeCardId) || CULTURE_TOPICS[0];

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = currentTopic.fullStory.join(' ');
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'id-ID';
      utterance.rate = 0.85;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleSelectCard = (id: string) => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setActiveCardId(id);
    setSelectedTerm(null);
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* Top Navigation Header with Back and Home */}
      <NavigationHeader
        title="MENGENAL PINISI"
        subtitle="12 Topik Budaya Maritim Bulukumba & Warisan UNESCO"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* 
        ========================================================================
        1. HEADER: MENGENAL PHINISI
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-6 pb-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <Sailboat className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Award className="w-20 h-20 text-yellow-300" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <span>⛵ MENGENAL PINISI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Warisan Pengetahuan dari Bulukumba
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Karya besar nenek moyang Butta Panrita Lopi yang diakui dunia sebagai Warisan Budaya Takbenda UNESCO.”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-white/20">
              <Award className="w-4 h-4 text-amber-400" />
              <span>UNESCO Warisan Budaya Takbenda (2017)</span>
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-white/20 text-sky-100">
              Guru Pembimbing: <strong>Musfira, S.Pd.</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. GRID 12 TOPIK MENGENAL PINISI
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-5 py-1.5 rounded-full bg-white/95 text-sky-950 text-xs sm:text-sm font-black shadow-md border border-sky-200">
            📖 12 Topik Resmi Mengenal Pinisi (Klik untuk Buka Halaman)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CULTURE_TOPICS.map((topic) => {
            const isSelected = activeCardId === topic.id;

            return (
              <button
                key={topic.id}
                onClick={() => handleSelectCard(topic.id)}
                className={`p-3.5 rounded-2xl border-2 transition-all duration-200 text-left flex flex-col justify-between min-h-[110px] shadow-sm transform hover:-translate-y-1 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 border-amber-500 ring-3 ring-amber-300 text-slate-950 font-black shadow-md scale-102'
                    : 'bg-white hover:bg-sky-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                      isSelected ? 'bg-slate-950 text-amber-300' : 'bg-sky-100 text-sky-900'
                    }`}
                  >
                    {topic.number}
                  </span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo('budaya-detail', topic.id);
                    }}
                    className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full cursor-pointer ${
                      isSelected ? 'bg-slate-950 text-white' : 'bg-sky-100 text-sky-800 hover:bg-sky-200'
                    }`}
                  >
                    Buka ↗
                  </span>
                </div>

                <div className="mt-2">
                  <h4 className="text-xs sm:text-sm font-black leading-tight line-clamp-2 font-display">
                    {topic.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        3. DETAIL ENSIKLOPEDIA AKTIF
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  Topik {currentTopic.number} dari {CULTURE_TOPICS.length}
                </span>
                <span className="text-xs font-bold text-sky-200">
                  {currentTopic.subtitle}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
                {currentTopic.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handleToggleSpeech}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-xs transition-all shadow-md cursor-pointer ${
                  isSpeaking
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isSpeaking ? 'Hentikan Suara' : '🔊 Dengarkan Narasi'}</span>
              </button>

              <button
                onClick={() => navigateTo('budaya-detail', currentTopic.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sky-950 font-black text-xs hover:bg-sky-100 transition-all shadow-md cursor-pointer"
              >
                <span>Buka Halaman Penuh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Full Story Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-reading">
              {currentTopic.fullStory.map((para, i) => (
                <p key={i} className="bg-[#FFFDF7] p-4 rounded-2xl border border-amber-100 shadow-2xs">
                  {para}
                </p>
              ))}
            </div>

            {/* 📌 KOMPONEN SUMBER FAKTUAL RESMI */}
            <div className="bg-emerald-50/90 rounded-2xl p-4 sm:p-5 border-2 border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900 uppercase tracking-wide">
                  <span>📌 SUMBER FAKTUAL RESMI</span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-emerald-950">
                  {currentTopic.source.name}
                </h4>
                <p className="text-xs font-bold text-emerald-800">
                  {currentTopic.source.organization} ({currentTopic.source.year})
                </p>
              </div>
              <button
                onClick={() => openSourceViewer(currentTopic.source.sourceId)}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shrink-0"
              >
                <span>Lihat Sumber</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quote of Wisdom */}
            {currentTopic.quote && (
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 text-center space-y-1 shadow-xs">
                <p className="text-sm sm:text-base font-black text-amber-950 italic font-serif-title">
                  {currentTopic.quote}
                </p>
                <span className="text-[11px] font-bold text-amber-700 block uppercase tracking-wider">
                  — Falsafah Luhur Pelaut Butta Panrita Lopi
                </span>
              </div>
            )}

            {/* Interactive Bugis Terms Tags */}
            <div className="bg-sky-50 rounded-2xl p-5 border border-sky-200 space-y-3">
              <span className="text-xs font-black text-sky-950 uppercase tracking-wide flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>ISTILAH BUDAYA BUGIS-MAKASSAR (Klik untuk arti):</span>
              </span>

              <div className="flex flex-wrap gap-2.5">
                {currentTopic.bugisTerms.map((t) => (
                  <button
                    key={t.term}
                    onClick={() => setSelectedTerm(t)}
                    className="px-3.5 py-1.5 rounded-full bg-white hover:bg-amber-100 text-sky-950 font-black text-xs border border-sky-300 transition-all transform hover:scale-105 flex items-center gap-1 shadow-xs cursor-pointer"
                  >
                    <span>{t.term}</span>
                    <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                  </button>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                  FAKTA MEMBANGGAKAN BULUKUMBA
                </span>
                <p className="text-xs sm:text-sm font-bold text-emerald-900 leading-relaxed">
                  {currentTopic.funFact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Penjelasan Istilah Bugis */}
      {selectedTerm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border-2 border-amber-300 space-y-4 transform animate-scale-up">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                ⚓
              </span>
              <div>
                <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">
                  ISTILAH BUDAYA BAHARI
                </span>
                <h3 className="text-lg font-black text-slate-900 font-display">
                  {selectedTerm.term}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                “{selectedTerm.meaning}”
              </p>
            </div>

            <button
              onClick={() => setSelectedTerm(null)}
              className="w-full py-2.5 bg-[#0B2A4A] hover:bg-[#064B78] text-white text-xs font-black rounded-xl transition-all shadow-md cursor-pointer"
            >
              Aku Mengerti! Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
