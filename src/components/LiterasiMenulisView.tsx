import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LITERACY_JOURNEYS } from '../data/literacyStories.ts';
import {
  PenTool,
  Save,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Send,
  MessageSquareQuote
} from 'lucide-react';

export const LiterasiMenulisView: React.FC = () => {
  const { currentView, navigateTo, goBack, studentProfile, addGamePoints } = useApp();

  const portId = (currentView.subId as number) || 1;
  const journey = LITERACY_JOURNEYS.find((j) => j.portId === portId) || LITERACY_JOURNEYS[0];

  const [reflectionText, setReflectionText] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const sentenceStarters = [
    'Saya belajar bahwa...',
    'Sikap pelaut Bulukumba yang paling saya kagumi adalah...',
    'Menurut saya, perahu Phinisi sangat istimewa karena...',
    'Janji saya untuk menjaga budaya Bulukumba adalah...'
  ];

  const handleAddStarter = (starter: string) => {
    setReflectionText((prev) => (prev ? `${prev} ${starter} ` : `${starter} `));
  };

  const handleSaveReflection = () => {
    if (!reflectionText.trim()) return;
    setIsSaved(true);
    addGamePoints('reflection-' + journey.portId, 40);
  };

  const wordCount = reflectionText.trim() ? reflectionText.trim().split(/\s+/).length : 0;

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. NAVIGATION HEADER */}
      <NavigationHeader
        title={`Misi Menulis: ${journey.storyTitle}`}
        subtitle={`Refleksi & Karya Tulismu • ${journey.portName}`}
        badge="✍️ MISI MENULIS"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={goBack}
      />

      {/* 2. MAIN WRITING STUDIO (FULL-PAGE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-100 space-y-6">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <span className="text-xs font-black text-amber-800 uppercase tracking-wide">
              {journey.portName}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display">
              Studio Menulis & Refleksi Pelaut Cendekia
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Tuangkan gagasan, perasaan, dan pesan moral yang kamu peroleh dari kisah ini ke dalam kalimatmu sendiri.
            </p>
          </div>

          {/* Prompt Box */}
          <div className="bg-amber-50 rounded-2xl p-5 border-2 border-amber-300 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-black text-sm">
              <MessageSquareQuote className="w-5 h-5 text-amber-700" />
              <span>Tantangan Menulismu:</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-amber-950 leading-relaxed font-display">
              “{journey.missionChallenges.reflectionPrompt}”
            </p>
          </div>

          {/* Sentence Starters */}
          <div className="space-y-2">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wide">
              💡 Bantuan Memulai Kalimat (Klik untuk menambahkan):
            </span>
            <div className="flex flex-wrap gap-2">
              {sentenceStarters.map((starter, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAddStarter(starter)}
                  className="px-3 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-950 font-bold text-xs transition-all border border-sky-300 shadow-2xs cursor-pointer hover:scale-102"
                >
                  + {starter}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="space-y-2">
            <textarea
              value={reflectionText}
              onChange={(e) => {
                setReflectionText(e.target.value);
                setIsSaved(false);
              }}
              rows={7}
              placeholder="Ketik tulisan refleksimu di sini dengan rapi dan sopan..."
              className="w-full p-5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-200 text-sm sm:text-base font-medium text-slate-900 leading-relaxed resize-none shadow-inner"
            />
            <div className="flex justify-between items-center text-xs text-slate-500 font-bold px-1">
              <span>Penulis: {studentProfile.name} ({studentProfile.grade})</span>
              <span>Jumlah Kata: {wordCount} kata</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleSaveReflection}
              disabled={!reflectionText.trim()}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-xs sm:text-sm shadow-md transition-all ${
                !reflectionText.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 hover:scale-105 cursor-pointer'
              }`}
            >
              <Save className="w-4 h-4" />
              <span>SIMPAN TULISAN KE PASPOR BELAJAR</span>
            </button>

            <button
              onClick={() => navigateTo('literasi-materi', journey.portId)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Baca Ulang Materi</span>
            </button>
          </div>

          {/* Saved Notification */}
          {isSaved && (
            <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 space-y-3 animate-fade-in shadow-md">
              <div className="flex items-center gap-2 font-black text-sm text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Tulisan Refleksimu Berhasil Disimpan!</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-900/90">
                Karyamu telah dicatat ke dalam portofolio bimbingan guru <strong>Musfira, S.Pd.</strong> dan kamu memperoleh tambahan +40 Poin Literasi!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('literasi')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs shadow-md transition-all"
                >
                  <span>Kembali ke Hub Literasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
