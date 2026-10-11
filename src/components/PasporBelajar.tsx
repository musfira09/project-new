import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { SOURCE_REGISTRY } from '../data/sourceRegistry.ts';
import { EDUCATIONAL_GAMES } from '../data/gamesData.ts';
import {
  Award,
  Compass,
  Sailboat,
  Printer,
  CheckCircle2,
  Lock,
  Anchor,
  Star,
  Sparkles,
  BookOpen,
  Calculator,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Eye,
  FileCheck,
  Trophy,
  Check,
  Layers,
  GraduationCap
} from 'lucide-react';

interface StampDetail {
  id: string;
  title: string;
  icon: string;
  category: string;
  date: string;
  status: 'unlocked' | 'locked';
  teacherNote: string;
}

export const PasporBelajar: React.FC = () => {
  const {
    studentProfile,
    currentGrade,
    currentSemester,
    studentProgress,
    getStageStatus,
    openSourceViewer,
    goToHome
  } = useApp();

  const [activeTab, setActiveTabState] = useState<'paspor' | 'progres' | 'game' | 'sumber'>('paspor');
  const [activeStamp, setActiveStamp] = useState<StampDetail | null>(null);

  const totalPoints = Object.values(studentProgress.gamePoints || {}).reduce((a, b) => a + b, 0);
  const totalStars = Object.values(studentProgress.gameStars || {}).reduce((a, b) => a + b, 0);
  const completedGamesCount = Object.keys(studentProgress.gameStars || {}).length;

  // 5 Golden Maritime Stamps
  const stamps: StampDetail[] = [
    {
      id: 'stamp-1',
      title: 'Stempel Literasi Bahari',
      icon: '📖',
      category: 'Literasi Menyimak & Membaca',
      date: 'Tercapai pada Pelabuhan 3',
      status: 'unlocked',
      teacherNote:
        '“Hebat! Kamu telah menunjukkan ketekunan membaca kisah Panrita Lopi dan memahami makna 7 helai layar Phinisi dengan sangat baik.” — Bu Musfira, S.Pd.'
    },
    {
      id: 'stamp-2',
      title: 'Stempel Numerasi Maritim',
      icon: '🔢',
      category: 'Kalkulasi Muatan & Geometri Layar',
      date: 'Tercapai pada Misi Kapal 2',
      status: 'unlocked',
      teacherNote:
        '“Luar biasa! Nalarmu dalam mengukur luas segitiga layar dan menghitung muatan rempah membuktikan kecerdasan berpikir logis.” — Bu Musfira, S.Pd.'
    },
    {
      id: 'stamp-3',
      title: 'Stempel Bumi Bulukumba',
      icon: '🌴',
      category: 'Geografi & Pesisir Bira',
      date: 'Tercapai pada Pelabuhan 1 & 2',
      status: 'unlocked',
      teacherNote:
        '“Kamu mengenal tanah kelahiranmu dengan rasa cinta dan bangga. Tanjung Bira dan Tanah Beru tersenyum menyambutmu!” — Bu Musfira, S.Pd.'
    },
    {
      id: 'stamp-4',
      title: 'Stempel Panrita Lopi',
      icon: '🪵',
      category: 'Arsitektur Tanpa Cetak Biru',
      date: 'Tercapai pada Simulasi Phinisi',
      status: 'unlocked',
      teacherNote:
        '“Nilai ketelitian, kejujuran, dan penghormatan kepada pohon kayu bitti telah tertanam di hatimu.” — Bu Musfira, S.Pd.'
    },
    {
      id: 'stamp-5',
      title: 'Stempel Warisan Dunia UNESCO',
      icon: '🌏',
      category: 'Penjaga Budaya Takbenda Dunia',
      date: 'Tercapai pada Asesmen Akhir',
      status: totalPoints > 50 ? 'unlocked' : 'locked',
      teacherNote:
        '“Selamat! Kamu dinobatkan sebagai Duta Pelestari Warisan Budaya Phinisi Bulukumba untuk peradaban dunia!” — Bu Musfira, S.Pd.'
    }
  ];

  const stagesList = [
    { key: 'misi', label: 'Misi' },
    { key: 'materi', label: 'Materi' },
    { key: 'aktivitas', label: 'Aktivitas' },
    { key: 'lkpd', label: 'LKPD' },
    { key: 'game', label: 'Game' },
    { key: 'asesmen', label: 'Asesmen' },
    { key: 'refleksi', label: 'Refleksi' }
  ] as const;

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header */}
      <NavigationHeader
        title="PASPOR BELAJARKU"
        subtitle="Buku Catatan Petualangan Maritim & Portofolio Prestasi"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* 
        ========================================================================
        1. HEADER: PASPOR BELAJAR DIGITAL
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 shadow-xl print:hidden">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <Award className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Compass className="w-20 h-20 text-yellow-300" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <span>📜 PASPOR DIGITAL PELAUT CENDEKIA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Paspor Belajarku: Butta Panrita Lopi
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Buku catatan petualangan maritim, portofolio progres, koleksi stempel kehormatan, dan sumber belajar terpercaya!”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{totalPoints} Poin Prestasi</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span>{totalStars} Bintang Game</span>
            </span>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs border border-white/30 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Paspor Resmi</span>
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. TABS NAVIGASI PASPOR
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 print:mt-4">
        {/* Navigation Strip */}
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-sky-200 flex flex-wrap items-center justify-center gap-2 print:hidden">
          {[
            { id: 'paspor', label: '📜 Paspor & Stempel', icon: Award },
            { id: 'progres', label: '🗺️ Alur 7 Tahap (12 Unit)', icon: Layers },
            { id: 'game', label: '🎮 Rekap 30 Game', icon: Trophy },
            { id: 'sumber', label: '📚 Sumber Resmi (UNESCO)', icon: BookOpen }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabState(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0B2A4A] text-amber-300 shadow-md ring-2 ring-amber-400'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-sky-50'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: PASPOR & STEMPEL RESMI */}
        {activeTab === 'paspor' && (
          <div className="bg-gradient-to-br from-[#0B2A4A] via-[#064B78] to-[#042844] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400/80 relative overflow-hidden print:bg-white print:text-black print:border-2 print:border-black">
            {/* Subtle Watermark */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full border-8 border-amber-400/10 pointer-events-none flex items-center justify-center">
              <Compass className="w-40 h-40 text-amber-400/10" />
            </div>

            {/* Header Paspor */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/20 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                  ⛵
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-300 tracking-widest block">
                    PASPOR MARITIM PELAJAR SD BULUKUMBA
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                    PHINISI CENDEKIA
                  </h2>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <span className="text-xs text-sky-200 block font-mono">
                  NOMOR REGISTRASI:
                </span>
                <span className="text-sm font-mono font-black text-amber-300">
                  BLK-PC-2026-0887
                </span>
              </div>
            </div>

            {/* Biodata Siswa */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b border-white/20">
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-3xl font-black shadow-lg border-2 border-white">
                  {studentProfile.avatar}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                    NAMA LENGKAP SISWA
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {studentProfile.name}
                  </h3>
                  <p className="text-xs text-sky-100">
                    {studentProfile.school} • {currentGrade} SD
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-sky-200">Semester:</span>
                  <span className="font-bold text-white">Semester {currentSemester}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-sky-200">Poin Pelaut:</span>
                  <span className="font-bold text-amber-300">{totalPoints} Poin</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-sky-200">Tingkat Kemahiran:</span>
                  <span className="font-bold text-emerald-300">Nahkoda Cilik</span>
                </div>
              </div>
            </div>

            {/* 5 Golden Stamps */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black uppercase text-amber-300 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>KOLEKSI STEMPEL KEHORMATAN PELAUT</span>
                </h4>
                <span className="text-[11px] text-sky-200">
                  Klik stempel untuk melihat catatan guru
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {stamps.map((stamp) => {
                  const isUnlocked = stamp.status === 'unlocked';
                  return (
                    <button
                      key={stamp.id}
                      onClick={() => isUnlocked && setActiveStamp(stamp)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center flex flex-col items-center justify-between gap-2 ${
                        isUnlocked
                          ? 'bg-white/15 hover:bg-white/25 border-amber-400/80 shadow-md transform hover:scale-105 cursor-pointer'
                          : 'bg-black/20 border-white/10 opacity-40 cursor-not-allowed'
                      }`}
                    >
                      <span className="text-3xl block filter drop-shadow-md">
                        {isUnlocked ? stamp.icon : '🔒'}
                      </span>
                      <div>
                        <h5 className="text-xs font-black text-white line-clamp-1">
                          {stamp.title}
                        </h5>
                        <p className="text-[10px] text-amber-300/90 font-medium line-clamp-1">
                          {isUnlocked ? stamp.date : 'Terkunci'}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Catatan Guru Modal Preview */}
            {activeStamp && (
              <div className="mt-6 p-4 rounded-2xl bg-amber-400/20 border border-amber-300/60 backdrop-blur-md space-y-2 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <span>{activeStamp.icon}</span>
                    <span>{activeStamp.title} — {activeStamp.category}</span>
                  </span>
                  <button
                    onClick={() => setActiveStamp(null)}
                    className="text-xs text-sky-200 hover:text-white"
                  >
                    Tutup
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-sky-50 italic">
                  {activeStamp.teacherNote}
                </p>
              </div>
            )}

            {/* Tanda Tangan Guru Validasi */}
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="text-sky-200 text-center sm:text-left">
                <span>Dikeluarkan di:</span>
                <span className="font-bold text-white block">Kabupaten Bulukumba, Sulawesi Selatan</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-sky-200">Guru Pembimbing:</span>
                <span className="font-black text-amber-300 block text-sm">Musfira, S.Pd.</span>
                <span className="text-[10px] text-sky-200">SD Negeri Butta Panrita Lopi</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROGRES 12 UNIT DENGAN ALUR 7 TAHAP */}
        {activeTab === 'progres' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-sky-100 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-sky-800 uppercase tracking-wider">
                SISTEM UNLOCK BERJENJANG (12 UNIT • 2 SEMESTER)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Alur 7 Tahap Pembelajaran Lengkap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Alur wajib: MISI → MATERI → AKTIVITAS → LKPD → GAME → ASESMEN → REFLEKSI.
              </p>
            </div>

            {/* Grid 12 Units */}
            <div className="space-y-4">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((uId) => {
                const semester = uId <= 6 ? 1 : 2;

                return (
                  <div
                    key={uId}
                    className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-[#0B2A4A] text-white font-mono text-xs font-black">
                          Unit {uId}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900">
                          {uId === 1 && 'Aku & Lingkunganku (Bulukumba)'}
                          {uId === 2 && 'Mengenal Bulukumba (Bira & Bahari)'}
                          {uId === 3 && 'Mengenal Pinisi (7 Layar & Konstruksi)'}
                          {uId === 4 && 'Panrita Lopi (Kearifan Maestro)'}
                          {uId === 5 && 'Bagian & Unsur Perahu (Kalibise, Anjong)'}
                          {uId === 6 && 'Nilai & Tradisi (Annyorong Lopi)'}
                          {uId === 7 && 'Proses Pembuatan (Kayu Bitti & Ulin)'}
                          {uId === 8 && 'Matematika Pinisi (Skala, Kargo, Segitiga)'}
                          {uId === 9 && 'Pinisi & Masyarakat (Sosial Ekonomi)'}
                          {uId === 10 && 'Warisan Budaya UNESCO (7 Des 2017)'}
                          {uId === 11 && 'Membaca Data Lingkungan (Reboisasi Bitti)'}
                          {uId === 12 && 'Generasi Pelestari Cendekia'}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500">
                        Semester {semester}
                      </span>
                    </div>

                    {/* 7 Stage Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                      {stagesList.map((stg) => {
                        const status = getStageStatus(uId, stg.key as any);
                        return (
                          <div
                            key={stg.key}
                            className={`p-2 rounded-xl text-center text-xs font-bold border transition-all ${
                              status === 'COMPLETED'
                                ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-black'
                                : status === 'LOCKED'
                                ? 'bg-slate-100 border-slate-200 text-slate-400'
                                : 'bg-amber-100 border-amber-400 text-amber-950 font-black ring-1 ring-amber-300'
                            }`}
                          >
                            <span className="block text-[10px] text-slate-500">
                              {stg.label}
                            </span>
                            <span className="text-[11px]">
                              {status === 'COMPLETED' ? '✓ Selesai' : status === 'LOCKED' ? '🔒 Kunci' : '✨ Siap'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: REKAP 30 GAME PENDIDIKAN */}
        {activeTab === 'game' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-sky-100 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                  PRESTASI 30 PERMAINAN DIGITAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  Pencapaian Bintang Permainan
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-black">
                  ⭐ {totalStars} Total Bintang
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-950 text-xs font-black">
                  🎮 {completedGamesCount} / 30 Game
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {EDUCATIONAL_GAMES.map((game) => {
                const stars = studentProgress.gameStars?.[game.id] || 0;
                return (
                  <div
                    key={game.id}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-slate-500">
                        {game.category} • Unit {game.unitId}
                      </span>
                      <h4 className="text-xs font-black text-slate-800 line-clamp-1">
                        {game.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-0.5 shrink-0">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= stars
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: REPOSITORI SUMBER RESMI (UNESCO & KEMDIKBUD) */}
        {activeTab === 'sumber' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-sky-100 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-sky-800 uppercase tracking-wider">
                INTEGRITAS FAKTA & SUMBER HUKUM RESMI
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Daftar Sumber Rujukan Phinisi Cendekia
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Seluruh materi sejarah, terminologi Bugis, dimensi perahu, dan adat Annyorong Lopi didasarkan pada dokumen primer terverifikasi UNESCO dan Kementerian Pendidikan & Kebudayaan.
              </p>
            </div>

            <div className="space-y-3">
              {SOURCE_REGISTRY.map((src) => (
                <div
                  key={src.id}
                  className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#0B2A4A] text-white text-[10px] font-mono font-bold">
                        {src.id}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">
                        {src.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>Institusi:</strong> {src.publisher} ({src.year}) • <em>{src.author}</em>
                    </p>
                    <p className="text-[11px] text-slate-500 italic">
                      Relevansi: {src.context}
                    </p>
                  </div>

                  <button
                    onClick={() => openSourceViewer(src.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Buka Rujukan</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
