import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { EDUCATIONAL_GAMES, GameItem } from '../data/gamesData.ts';
import {
  Gamepad2,
  Sailboat,
  Sparkles,
  Trophy,
  CheckCircle2,
  RotateCcw,
  Compass,
  Star,
  BookOpen,
  Calculator,
  Lock,
  Unlock,
  Play,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Eye,
  Check,
  X,
  Layers,
  Award
} from 'lucide-react';

export const PermainanModule: React.FC = () => {
  const {
    studentProfile,
    studentProgress,
    completeGame,
    completeUnitStage,
    getStageStatus,
    openSourceViewer,
    currentView,
    navigateTo,
    goBack,
    goToHome
  } = useApp();

  // Filters
  const [activeCategory, setActiveCategory] = useState<'semua' | 'literasi' | 'numerasi' | 'budaya'>('semua');
  const [selectedGrade, setSelectedGrade] = useState<'semua' | 'Kelas 4' | 'Kelas 5' | 'Kelas 6'>('semua');

  // Active game modal state
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);

  // Gameplay state
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [gameFeedback, setGameFeedback] = useState<{ isSuccess: boolean; message: string; stars: number } | null>(null);
  const [isCompletedInSession, setIsCompletedInSession] = useState<boolean>(false);

  // Sync activeGame when subId changes (e.g. from nav)
  useEffect(() => {
    if (currentView.subId && typeof currentView.subId === 'string' && currentView.subId.startsWith('game-')) {
      const found = EDUCATIONAL_GAMES.find((g) => g.id === currentView.subId);
      if (found) {
        setActiveGame(found);
        setUserAnswer(null);
        setGameFeedback(null);
        setIsCompletedInSession(false);
      }
    }
  }, [currentView.subId]);

  // Filtered games list
  const filteredGames = EDUCATIONAL_GAMES.filter((g) => {
    if (activeCategory !== 'semua' && g.category !== activeCategory) return false;
    if (selectedGrade !== 'semua' && g.gradeTier !== selectedGrade) return false;
    return true;
  });

  // Calculate statistics
  const totalStars = Object.values(studentProgress.gameStars || {}).reduce((a, b) => a + b, 0);
  const completedGamesCount = Object.keys(studentProgress.gameStars || {}).length;

  const handleOpenGame = (game: GameItem) => {
    setActiveGame(game);
    setUserAnswer(null);
    setGameFeedback(null);
    setIsCompletedInSession(false);
    navigateTo('game-arena', game.id);
  };

  const handleCloseGame = () => {
    setActiveGame(null);
    setUserAnswer(null);
    setGameFeedback(null);
    navigateTo('permainan');
  };

  const handleResetGame = () => {
    setUserAnswer(null);
    setGameFeedback(null);
    setIsCompletedInSession(false);
  };

  const handleNextGame = () => {
    if (!activeGame) return;
    const currentIndex = EDUCATIONAL_GAMES.findIndex((g) => g.id === activeGame.id);
    if (currentIndex >= 0 && currentIndex < EDUCATIONAL_GAMES.length - 1) {
      const nextGame = EDUCATIONAL_GAMES[currentIndex + 1];
      handleOpenGame(nextGame);
    } else {
      handleCloseGame();
    }
  };

  // Evaluate interactive gameplay based on game mechanics
  const handleVerifyGameAction = () => {
    if (!activeGame) return;

    let success = false;
    let feedbackMsg = '';
    let starsEarned = 3;

    // Different mechanics handling
    switch (activeGame.mechanics) {
      case 'drag-drop-sequence': {
        // e.g. game-1 Susun Kapal or game-21 Alur Penebangan
        if (Array.isArray(userAnswer) && userAnswer.length >= 3) {
          success = true;
          feedbackMsg = 'Luar biasa! Urutan perakitan kapal tersusun sangat presisi sesuai adat Panrita Lopi!';
          starsEarned = 3;
        } else {
          success = false;
          feedbackMsg = 'Urutan masih belum lengkap. Pasang semua komponen berurutan dari dasar!';
          starsEarned = 1;
        }
        break;
      }
      case 'matching': {
        // e.g. game-2 Pasang Layar Cocoro or game-10 Pasang Bagian
        if (userAnswer === 'cocoro-segitiga' || userAnswer === 'correct') {
          success = true;
          feedbackMsg = 'Tepat sekali! Layar segitiga di haluan kapal berhasil dipasangkan dengan tepat!';
          starsEarned = 3;
        } else {
          success = false;
          feedbackMsg = 'Pasangan belum pas, coba periksa kembali bentuk dan tempatnya!';
          starsEarned = 1;
        }
        break;
      }
      case 'calculation':
      case 'balance-weight': {
        // e.g. game-13 Kargo Rempah (balance <= 600)
        if (typeof userAnswer === 'number' && userAnswer > 0 && userAnswer <= 700) {
          success = true;
          feedbackMsg = `Hebat! Muatan ${userAnswer} kg seimbang sempurna di ruang palka kapal!`;
          starsEarned = 3;
        } else if (userAnswer === 'correct-math') {
          success = true;
          feedbackMsg = 'Perhitunganmu sangat akurat!';
          starsEarned = 3;
        } else {
          success = false;
          feedbackMsg = 'Hati-hati, kapal tidak boleh kelebihan muatan di atas 700 kg!';
          starsEarned = 1;
        }
        break;
      }
      case 'binary-choice': {
        // e.g. game-4 Mitos vs Fakta
        if (userAnswer === true || userAnswer === 'fakta') {
          success = true;
          feedbackMsg = 'Tepat! Kamu adalah detektif fakta sejarah maritim yang handal!';
          starsEarned = 3;
        } else {
          success = false;
          feedbackMsg = 'Pilihanmu belum tepat, pelajari kembali sumber resminya!';
          starsEarned = 1;
        }
        break;
      }
      default: {
        // General successful response
        if (userAnswer !== null && userAnswer !== undefined) {
          success = true;
          feedbackMsg = 'Hebat! Kamu berhasil menuntaskan tantangan permainan dengan gemilang!';
          starsEarned = 3;
        } else {
          success = false;
          feedbackMsg = 'Pilih atau selesaikan aksimu terlebih dahulu!';
          starsEarned = 1;
        }
        break;
      }
    }

    if (success) {
      completeGame(activeGame.id, starsEarned);
      completeUnitStage(activeGame.unitId, 'game');
      setIsCompletedInSession(true);
      setGameFeedback({ isSuccess: true, message: feedbackMsg, stars: starsEarned });
    } else {
      setGameFeedback({ isSuccess: false, message: feedbackMsg, stars: 1 });
    }
  };

  // FULL-PAGE GAME ARENA VIEW
  if (activeGame) {
    return (
      <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
        <NavigationHeader
          title={`Arena Game: ${activeGame.title}`}
          subtitle={`Topik ${activeGame.unitId} • ${activeGame.gradeTier} • ${activeGame.category.toUpperCase()}`}
          badge="🎮 ARENA GAME"
          badgeColor="bg-amber-400 text-slate-950 font-black"
          onBack={handleCloseGame}
          extraActions={
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetGame}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ulang Game</span>
              </button>
              <button
                onClick={handleCloseGame}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <span>← Keluar Game</span>
              </button>
            </div>
          }
        />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-sky-100 space-y-6">
            {/* Top Action Bar with prominent Exit and Reset buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <button
                onClick={handleCloseGame}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all cursor-pointer"
              >
                <span>← Keluar Game</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase">
                  {activeGame.category}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Topik Belajar {activeGame.unitId} • {activeGame.gradeTier}
                </span>
              </div>

              <button
                onClick={handleResetGame}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-800 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulang Game</span>
              </button>
            </div>

            {/* Game Title & Description */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {activeGame.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {activeGame.description}
              </p>
            </div>

            {/* Objective & Source */}
            <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="font-black text-sky-950 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-sky-700" />
                  <span>TUJUAN PERMAINAN:</span>
                </span>
                {activeGame.sourceId && (
                  <button
                    onClick={() => openSourceViewer(activeGame.sourceId!)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 hover:text-sky-950 underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Sumber Referensi</span>
                  </button>
                )}
              </div>
              <p className="text-slate-700 font-medium">{activeGame.objective}</p>
              <div className="text-amber-800 font-bold flex items-center gap-1">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Petunjuk: {activeGame.hint}</span>
              </div>
            </div>

            {activeGame.category === 'numerasi' && (
              <div className="p-2.5 bg-amber-100/90 text-amber-950 rounded-xl border border-amber-300 text-xs font-black flex items-center gap-2">
                <span>📌</span>
                <span>Angka berikut adalah data latihan.</span>
              </div>
            )}

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm font-bold text-amber-950">
              👉 <strong>Cara Bermain:</strong> {activeGame.instructions}
            </div>

            {/* Interactive Gameplay Simulation Component */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50 border-2 border-dashed border-sky-300 text-center space-y-4">
              {activeGame.mechanics === 'drag-drop-sequence' ? (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-slate-700">
                    Klik tahapan pembuatan kapal berurutan dari nomor 1 sampai 4:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { step: 1, text: '1. Peletakan Balok Kalibise (Lunas)' },
                      { step: 2, text: '2. Pemasangan Papan Lambung Kayu Bitti' },
                      { step: 3, text: '3. Pasak Kayu Ulin & Rangka Gading' },
                      { step: 4, text: '4. Pendempulan Alami & Annyorong Lopi' }
                    ].map((item) => {
                      const isSelected = (userAnswer || []).includes(item.step);
                      return (
                        <button
                          key={item.step}
                          onClick={() => {
                            const current = Array.isArray(userAnswer) ? userAnswer : [];
                            if (!current.includes(item.step)) {
                              setUserAnswer([...current, item.step]);
                            }
                          }}
                          className={`p-3.5 rounded-xl border-2 text-xs sm:text-sm font-bold text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400'
                              : 'bg-white hover:bg-sky-100 border-slate-200 text-slate-800'
                          }`}
                        >
                          {isSelected ? '✓ ' : ''}{item.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : activeGame.mechanics === 'binary-choice' ? (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-slate-700">
                    Tentukan apakah pernyataan mengenai warisan Pinisi ini Fakta atau Mitos:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setUserAnswer('fakta')}
                      className={`p-5 rounded-2xl border-2 text-sm sm:text-base font-black transition-all cursor-pointer ${
                        userAnswer === 'fakta'
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                          : 'bg-white hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      ✓ FAKTA RESMI
                    </button>
                    <button
                      onClick={() => setUserAnswer('mitos')}
                      className={`p-5 rounded-2xl border-2 text-sm sm:text-base font-black transition-all cursor-pointer ${
                        userAnswer === 'mitos'
                          ? 'bg-rose-100 border-rose-500 text-rose-950 ring-2 ring-rose-400'
                          : 'bg-white hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      ✗ MITOS
                    </button>
                  </div>
                </div>
              ) : activeGame.mechanics === 'balance-weight' || activeGame.mechanics === 'calculation' ? (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-slate-700">
                    Pilih total berat muatan palka yang seimbang dan tidak melebihi 700 kg:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {[350, 500, 650, 850].map((wt) => (
                      <button
                        key={wt}
                        onClick={() => setUserAnswer(wt)}
                        className={`px-5 py-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                          userAnswer === wt
                            ? 'bg-amber-200 border-amber-500 text-slate-950 ring-2 ring-amber-400'
                            : 'bg-white hover:bg-sky-100 border-slate-200'
                        }`}
                      >
                        {wt} kg {wt > 700 ? '(Kelebihan/Bahaya)' : '(Aman Seimbang)'}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-slate-700">
                    Selesaikan misi tantangan bahari berikut:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setUserAnswer('cocoro-segitiga')}
                      className={`p-4 rounded-xl border-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        userAnswer === 'cocoro-segitiga'
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                          : 'bg-white hover:bg-sky-100 border-slate-200'
                      }`}
                    >
                      ⚓ Pilihan A: Pasang Layar Haluan (Cocoro)
                    </button>
                    <button
                      onClick={() => setUserAnswer('wrong')}
                      className={`p-4 rounded-xl border-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        userAnswer === 'wrong'
                          ? 'bg-rose-100 border-rose-500 text-rose-950 ring-2 ring-rose-400'
                          : 'bg-white hover:bg-sky-100 border-slate-200'
                      }`}
                    >
                      🧭 Pilihan B: Melepas Kemudi Buritan
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feedback Alert */}
            {gameFeedback && (
              <div
                className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-bold animate-fade-in ${
                  gameFeedback.isSuccess
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {gameFeedback.isSuccess ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                  )}
                  <span>{gameFeedback.message}</span>
                </div>

                {gameFeedback.isSuccess && (
                  <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                    {Array.from({ length: gameFeedback.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleResetGame}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Tantangan</span>
              </button>

              <div className="flex flex-wrap items-center gap-3">
                {!isCompletedInSession ? (
                  <button
                    onClick={handleVerifyGameAction}
                    disabled={userAnswer === null}
                    className="flex items-center gap-1.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 text-xs sm:text-sm font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Periksa & Kumpulkan Bintang</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleNextGame}
                      className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                    >
                      <span>MAIN GAME BERIKUTNYA</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCloseGame}
                      className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black transition-all shadow-md cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Kembali ke Katalog Game</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // CATALOG VIEW
  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header */}
      <NavigationHeader
        title="PERMAINAN EDUKATIF"
        subtitle="30 Permainan Interaktif Literasi, Numerasi & Budaya"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />
      {/* 
        ========================================================================
        1. HEADER: ARENA 30 PERMAINAN PENDIDIKAN
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <Gamepad2 className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Trophy className="w-20 h-20 text-yellow-300" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <Sparkles className="w-4 h-4" />
            <span>🎮 30 PERMAINAN EDUKASI DIGITAL LENGKAP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Arena Permainan Cendekia
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “10 Game Literasi, 10 Game Numerasi, dan 10 Game Budaya Phinisi yang Menyenangkan dan Sarat Nilai Kearifan Lokal!”
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-bold text-sky-100">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Bintang Terkumpul: <strong>{totalStars} ⭐</strong></span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Game Dituntaskan: <strong>{completedGamesCount} / 30</strong></span>
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              Guru Pembimbing: <strong>Musfira, S.Pd.</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. FILTER TABS & KONTROL
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-sky-200 flex flex-wrap items-center justify-between gap-3">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Kategori:
            </span>
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
              {(['semua', 'literasi', 'numerasi', 'budaya'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                    activeCategory === cat
                      ? 'bg-[#0B2A4A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'semua' && 'Semua (30)'}
                  {cat === 'literasi' && '📖 Literasi (10)'}
                  {cat === 'numerasi' && '🔢 Numerasi (10)'}
                  {cat === 'budaya' && '⛵ Budaya (10)'}
                </button>
              ))}
            </div>
          </div>

          {/* Grade Filter (Kelas 4, 5, 6) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Tingkat Kelas:</span>
            <select
              value={selectedGrade}
              onChange={(e) =>
                setSelectedGrade(e.target.value as 'semua' | 'Kelas 4' | 'Kelas 5' | 'Kelas 6')
              }
              className="bg-slate-100 text-xs font-bold text-slate-800 rounded-xl px-3 py-1.5 border border-slate-200 focus:ring-2 focus:ring-amber-400 cursor-pointer"
            >
              <option value="semua">Semua Kelas (4, 5, 6)</option>
              <option value="Kelas 4">🎒 Kelas 4 (Fase B)</option>
              <option value="Kelas 5">🎒 Kelas 5 (Fase C)</option>
              <option value="Kelas 6">🎒 Kelas 6 (Fase C)</option>
            </select>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. GRID 30 PERMAINAN INTERAKTIF
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGames.map((game) => {
            const stars = studentProgress.gameStars?.[game.id] || 0;
            const isUnlocked =
              studentProgress.unlockedGameIds?.includes(game.id) ||
              getStageStatus(game.unitId, 'game') !== 'LOCKED';

            return (
              <div
                key={game.id}
                className={`bg-white rounded-3xl p-5 border-2 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 ${
                  isUnlocked
                    ? 'border-sky-100 hover:border-amber-400'
                    : 'border-slate-200 opacity-80'
                }`}
              >
                <div className="space-y-3">
                  {/* Category & Semester Tag */}
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span
                      className={`px-2.5 py-1 rounded-full font-black ${
                        game.category === 'literasi'
                          ? 'bg-sky-100 text-sky-800'
                          : game.category === 'numerasi'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}
                    >
                      {game.category.toUpperCase()}
                    </span>

                    <span className="text-slate-500 font-bold">
                      Topik {game.unitId} • {game.gradeTier}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-base font-black text-slate-900 font-display line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {game.description}
                    </p>
                  </div>

                  {/* Star Rating Earned */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-4 h-4 ${
                          starIdx <= stars
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                    <span className="text-[11px] font-bold text-slate-400 ml-1">
                      {stars > 0 ? `${stars} Bintang` : 'Belum dimainkan'}
                    </span>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    Fase {game.gradeTier}
                  </span>

                  <button
                    onClick={() => handleOpenGame(game)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black transition-all shadow-xs ${
                      isUnlocked
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 hover:scale-105'
                        : 'bg-sky-700 hover:bg-sky-600 text-white'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Mainkan</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Buka & Main</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
