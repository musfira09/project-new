import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LITERACY_JOURNEYS } from '../data/literacyStories.ts';
import {
  Lightbulb,
  Sparkles,
  FileCheck,
  Compass,
  Anchor,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const LiterasiFaktaView: React.FC = () => {
  const { currentView, navigateTo, goBack, openSourceViewer } = useApp();

  const portId = (currentView.subId as number) || 1;
  const journey = LITERACY_JOURNEYS.find((j) => j.portId === portId) || LITERACY_JOURNEYS[0];

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. NAVIGATION HEADER */}
      <NavigationHeader
        title={`Tahukah Kamu? ${journey.storyTitle}`}
        subtitle={`Fakta Bahari & Warisan Budaya • ${journey.portName}`}
        badge="💡 TAHUKAH KAMU?"
        badgeColor="bg-yellow-300 text-slate-950 font-black"
        onBack={goBack}
        extraActions={
          <button
            onClick={() => openSourceViewer(journey.sourceId)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Lihat Dokumen UNESCO</span>
          </button>
        }
      />

      {/* 2. MAIN TRIVIA VIEW (FULL-PAGE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-yellow-200 space-y-6">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <span className="text-xs font-black text-amber-800 uppercase tracking-wide">
              {journey.portName}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display flex items-center gap-2">
              <Lightbulb className="w-7 h-7 text-amber-500 fill-amber-300" />
              <span>Fakta Emas Bahari Bulukumba</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Tahukah kamu rahasia dan fakta mengagumkan di balik perahu Phinisi dan pesisir Bulukumba?
            </p>
          </div>

          {/* Big Featured Fun Fact Card */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-50 via-yellow-100/70 to-amber-100 border-2 border-amber-300 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-amber-950 font-display">
                Fakta Istimewa Pelabuhan Ini:
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-900 leading-relaxed font-reading">
                “{journey.funFact}”
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openSourceViewer(journey.sourceId)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B2A4A] hover:bg-slate-900 text-amber-300 text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Buka Dokumen Rujukan Resmi</span>
              </button>
            </div>
          </div>

          {/* Maritime Heritage Context Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
              <div className="flex items-center gap-2 text-sky-900 font-black text-sm">
                <Compass className="w-4 h-4 text-sky-700" />
                <span>Geografi & Wilayah</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Bulukumba terletak di ujung selatan semenanjung pulau Sulawesi, mempertemukan Teluk Bone dan Laut Flores dengan jalur angin maritim yang strategis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-sm">
                <Anchor className="w-4 h-4 text-emerald-700" />
                <span>Nilai Kearifan Lokal</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Filosofi <em>Panrita Lopi</em> memadukan ketelitian matematika ruang dengan rasa hormat mendalam kepada kelestarian pohon kayu Bitti di hutan Butta Panrita Lopi.
              </p>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => navigateTo('literasi-materi', journey.portId)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>BACA MATERI KISAH INI</span>
            </button>

            <button
              onClick={() => navigateTo('literasi')}
              className="px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all cursor-pointer"
            >
              Kembali ke Menu Literasi
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
