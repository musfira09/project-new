import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { COMPREHENSIVE_QUIZ_QUESTIONS, ExtendedQuizQuestion } from '../data/quizData.ts';
import {
  CheckSquare,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Sailboat,
  Star,
  ChevronRight,
  Lightbulb,
  Lock,
  Eye,
  Trophy
} from 'lucide-react';

const UNIT_TITLES: { [key: number]: string } = {
  1: 'Aku & Lingkunganku',
  2: 'Mengenal Bulukumba',
  3: 'Mengenal Pinisi',
  4: 'Panrita Lopi',
  5: 'Bagian & Unsur Pinisi',
  6: 'Nilai & Tradisi Luhur',
  7: 'Proses Pembuatan Kapal',
  8: 'Matematika Pinisi',
  9: 'Pinisi & Masyarakat Bulukumba',
  10: 'Pinisi: Warisan Dunia UNESCO',
  11: 'Membaca Data & Grafik Pinisi',
  12: 'Generasi Pelestari Warisan Bahari'
};

export const AsesmenModule: React.FC = () => {
  const {
    currentGrade,
    recordQuizScore,
    addGamePoints,
    getStageStatus,
    getStageLockReason,
    completeUnitStage,
    openSourceViewer,
    currentView,
    navigateTo,
    goToHome
  } = useApp();

  // Unit and topic selection
  const [selectedTopicGroup, setSelectedTopicGroup] = useState<'all' | '1-6' | '7-12'>('all');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);

  // Full-page quiz taking state
  const [isTakingQuiz, setIsTakingQuiz] = useState<boolean>(false);

  // Active question index (0 to 9)
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState<string>('');
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [userScore, setUserScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Sync isTakingQuiz when subId changes (e.g. from nav or card click)
  useEffect(() => {
    if (currentView.subId) {
      let uId: number | null = null;
      if (typeof currentView.subId === 'number') {
        uId = currentView.subId;
      } else if (typeof currentView.subId === 'string' && currentView.subId.startsWith('asesmen-unit-')) {
        uId = parseInt(currentView.subId.replace('asesmen-unit-', ''), 10);
      } else if (typeof currentView.subId === 'string' && currentView.subId.startsWith('unit-')) {
        uId = parseInt(currentView.subId.replace('unit-', ''), 10);
      }
      if (uId && !isNaN(uId) && uId >= 1 && uId <= 12) {
        setSelectedUnitId(uId);
        setIsTakingQuiz(true);
        setCurrentIdx(0);
        setSelectedAnswer(null);
        setTextAnswer('');
        setIsAnswerChecked(false);
        setUserScore(0);
        setIsFinished(false);
      }
    }
  }, [currentView.subId]);

  // Filter questions for the selected unit (10 questions per unit)
  const unitQuestions: ExtendedQuizQuestion[] = COMPREHENSIVE_QUIZ_QUESTIONS.filter(
    (q) => q.unitId === selectedUnitId
  );

  const currentQ: ExtendedQuizQuestion =
    unitQuestions[currentIdx] || unitQuestions[0] || COMPREHENSIVE_QUIZ_QUESTIONS[0];

  const stageStatus = getStageStatus(selectedUnitId, 'asesmen');
  const lockReason = getStageLockReason(selectedUnitId, 'asesmen');

  // Check correctness
  const isCorrect = (() => {
    if (!isAnswerChecked) return false;
    if (currentQ.type === 'pilihan-ganda') {
      return selectedAnswer === currentQ.correctAnswer;
    }
    if (currentQ.type === 'benar-salah') {
      return selectedAnswer === currentQ.correctAnswer;
    }
    if (currentQ.type === 'isian') {
      return (
        String(textAnswer).trim().toLowerCase() ===
        String(currentQ.correctAnswer).trim().toLowerCase()
      );
    }
    return false;
  })();

  const handleStartQuiz = (uId: number) => {
    setSelectedUnitId(uId);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setTextAnswer('');
    setIsAnswerChecked(false);
    setUserScore(0);
    setIsFinished(false);
    setIsTakingQuiz(true);
    navigateTo('asesmen-quiz', `asesmen-unit-${uId}`);
  };

  const handleCloseQuiz = () => {
    setIsTakingQuiz(false);
    navigateTo('asesmen');
  };

  const handleNextUnitQuiz = () => {
    if (selectedUnitId < 12) {
      handleStartQuiz(selectedUnitId + 1);
    } else {
      handleCloseQuiz();
    }
  };

  const handleCheckAnswer = () => {
    if (currentQ.type === 'isian' && !textAnswer.trim()) return;
    if (currentQ.type !== 'isian' && selectedAnswer === null) return;

    setIsAnswerChecked(true);

    const correct = (() => {
      if (currentQ.type === 'pilihan-ganda') return selectedAnswer === currentQ.correctAnswer;
      if (currentQ.type === 'benar-salah') return selectedAnswer === currentQ.correctAnswer;
      if (currentQ.type === 'isian')
        return (
          String(textAnswer).trim().toLowerCase() ===
          String(currentQ.correctAnswer).trim().toLowerCase()
        );
      return false;
    })();

    if (correct) {
      setUserScore((prev) => prev + 10);
      recordQuizScore(currentQ.id, 100);
      addGamePoints(`asesmen-${currentQ.id}`, 15);
    } else {
      recordQuizScore(currentQ.id, 0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < unitQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setTextAnswer('');
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
      // Automatically complete 'asesmen' stage to unlock 'refleksi'
      completeUnitStage(selectedUnitId, 'asesmen');
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setTextAnswer('');
    setIsAnswerChecked(false);
    setUserScore(0);
    setIsFinished(false);
  };

  // ========================================================================
  // VIEW 1: FULL-PAGE ASESMEN ARENA (VIEW)
  // ========================================================================
  if (isTakingQuiz) {
    return (
      <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
        <NavigationHeader
          title={`Asesmen Unit ${selectedUnitId}: ${UNIT_TITLES[selectedUnitId] || 'Pemahaman Materi'}`}
          subtitle={`Soal ${currentIdx + 1} dari ${unitQuestions.length} • Evaluasi Formatif & Sumatif`}
          badge="🎯 UJIAN PENGETAHUAN"
          badgeColor="bg-amber-400 text-slate-950 font-black"
          onBack={handleCloseQuiz}
          extraActions={
            <button
              onClick={handleCloseQuiz}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold transition-all cursor-pointer"
            >
              <span>← Kembali ke Katalog</span>
            </button>
          }
        />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
          {/* Quick Action Top Bar */}
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-sky-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCloseQuiz}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <span>← Kembali ke Daftar Asesmen</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-black uppercase text-[11px]">
                Topik {selectedUnitId}
              </span>
              <span>Topik Belajar</span>
              <span>•</span>
              <span className="text-emerald-700 font-black">Skor: {userScore}</span>
            </div>

            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Ujian</span>
            </button>
          </div>

          {/* Lock Banner if Locked */}
          {stageStatus === 'LOCKED' && (
            <div className="p-4 rounded-2xl bg-amber-500/20 border-2 border-amber-300 text-amber-100 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-amber-300 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-white">
                    Tahap Asesmen Terkunci
                  </h4>
                  <p className="text-xs text-amber-200">
                    {lockReason || 'Selesaikan tahapan Game edukatif terlebih dahulu untuk membuka Asesmen ini.'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => completeUnitStage(selectedUnitId, 'game')}
                className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all shrink-0 cursor-pointer"
              >
                Buka Akses Belajar
              </button>
            </div>
          )}

          {/* Assessment Card */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden">
            {/* Header Soal & Progress Bar */}
            <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-6">
              <div className="flex items-center justify-between mb-3 text-xs font-bold">
                <span className="uppercase tracking-wider text-amber-300 font-mono">
                  Soal {currentIdx + 1} dari {unitQuestions.length}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-[11px] font-black">
                  {currentQ.type === 'pilihan-ganda' && 'Pilihan Ganda'}
                  {currentQ.type === 'benar-salah' && 'Benar atau Salah'}
                  {currentQ.type === 'isian' && 'Isian Singkat'}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentIdx + 1) / unitQuestions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Assessment Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {!isFinished ? (
                <>
                  {/* Pertanyaan */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-black">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Pertanyaan:</span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-display">
                      {currentQ.question}
                    </h3>
                  </div>

                  {/* Input / Opsi Jawaban */}
                  <div className="space-y-3 pt-2">
                    {/* Tipe 1: Pilihan Ganda */}
                    {currentQ.type === 'pilihan-ganda' && currentQ.options && (
                      <div className="grid grid-cols-1 gap-2.5">
                        {currentQ.options.map((opt, oIdx) => {
                          const isSelected = selectedAnswer === opt;
                          const showCorrect = isAnswerChecked && opt === currentQ.correctAnswer;
                          const showWrong = isAnswerChecked && isSelected && !isCorrect;

                          return (
                            <button
                              key={oIdx}
                              disabled={isAnswerChecked}
                              onClick={() => setSelectedAnswer(opt)}
                              className={`p-4 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                                showCorrect
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                                  : showWrong
                                  ? 'bg-rose-50 border-rose-400 text-rose-950'
                                  : isSelected
                                  ? 'bg-sky-50 border-sky-600 text-sky-950 shadow-xs'
                                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                                    isSelected
                                      ? 'bg-sky-600 text-white'
                                      : 'bg-slate-100 text-slate-600'
                                  }`}
                                >
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>

                              {showCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                              )}
                              {showWrong && (
                                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Tipe 2: Benar / Salah */}
                    {currentQ.type === 'benar-salah' && (
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'BENAR', value: true },
                          { label: 'SALAH', value: false }
                        ].map((opt) => {
                          const isSelected = selectedAnswer === opt.value;
                          const showCorrect = isAnswerChecked && opt.value === currentQ.correctAnswer;
                          const showWrong = isAnswerChecked && isSelected && !isCorrect;

                          return (
                            <button
                              key={String(opt.value)}
                              disabled={isAnswerChecked}
                              onClick={() => setSelectedAnswer(opt.value)}
                              className={`p-5 rounded-2xl border-2 text-center font-black text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                                showCorrect
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                                  : showWrong
                                  ? 'bg-rose-50 border-rose-400 text-rose-950'
                                  : isSelected
                                  ? 'bg-sky-50 border-sky-600 text-sky-950'
                                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span>{opt.label}</span>
                              {showCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              )}
                              {showWrong && (
                                <XCircle className="w-5 h-5 text-rose-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Tipe 3: Isian Singkat */}
                    {currentQ.type === 'isian' && (
                      <div className="space-y-3">
                        <input
                          type="text"
                          disabled={isAnswerChecked}
                          value={textAnswer}
                          onChange={(e) => setTextAnswer(e.target.value)}
                          placeholder="Tuliskan jawaban singkatmu di sini..."
                          className="w-full p-4 rounded-2xl border-2 border-slate-300 focus:border-sky-500 focus:outline-hidden text-sm font-bold bg-slate-50 focus:bg-white transition-all shadow-inner"
                        />
                        {isAnswerChecked && (
                          <div
                            className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                                : 'bg-rose-50 border-rose-300 text-rose-900'
                            }`}
                          >
                            <span>Jawaban Benar: <strong>{String(currentQ.correctAnswer)}</strong></span>
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-600" />
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Kotak Penjelasan & Sumber Ilmiah jika sudah dicek */}
                  {isAnswerChecked && (
                    <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-3 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-black text-amber-950 font-display">
                            Pembahasan & Fakta Ilmiah:
                          </h4>
                        </div>

                        {currentQ.sourceId && (
                          <button
                            onClick={() => openSourceViewer(currentQ.sourceId || 'unesco-pinisi-2017')}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 hover:text-sky-950 bg-white px-2.5 py-1 rounded-lg border border-sky-200 hover:bg-sky-100 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-sky-600" />
                            <span>Lihat Sumber</span>
                          </button>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif-story font-normal">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}

                  {/* Tombol Aksi: Periksa / Selanjutnya */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400">
                      Nilai Saat Ini: <strong className="text-sky-900">{userScore}</strong> / 100
                    </span>

                    {!isAnswerChecked ? (
                      <button
                        onClick={handleCheckAnswer}
                        disabled={
                          (currentQ.type === 'isian' && !textAnswer.trim()) ||
                          (currentQ.type !== 'isian' && selectedAnswer === null)
                        }
                        className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 text-xs font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                      >
                        Periksa Jawaban
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0B2A4A] hover:bg-[#064B78] text-white text-xs font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                      >
                        <span>
                          {currentIdx < unitQuestions.length - 1
                            ? 'Soal Berikutnya'
                            : 'Lihat Hasil Akhir'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Finish State */
                <div className="text-center py-6 space-y-6 animate-scale-up">
                  <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center mx-auto text-4xl shadow-inner">
                    🏆
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                      Asesmen Unit {selectedUnitId} Selesai!
                    </h3>
                    <p className="text-sm font-medium text-slate-600 max-w-md mx-auto">
                      Selamat, kamu telah menyelesaikan 10 soal asesmen pemahaman dengan tekun dan jujur!
                    </p>
                  </div>

                  {/* Score badge */}
                  <div className="inline-block p-6 rounded-3xl bg-sky-50 border-2 border-sky-200">
                    <span className="text-xs font-black text-sky-800 uppercase tracking-wider block mb-1">
                      Nilai Akhirmu:
                    </span>
                    <div className="text-5xl font-black text-[#0B2A4A] font-mono">
                      {userScore}
                      <span className="text-xl text-slate-400 font-sans font-bold"> / 100</span>
                    </div>
                    <div className="text-xs font-bold text-emerald-700 mt-2">
                      {userScore >= 70
                        ? '🌟 Tuntas Melebihi Kriteria Ketercapaian!'
                        : '⚓ Terus Bersemangat Membaca Materi Kembali!'}
                    </div>
                  </div>

                  {/* Unlocked notice */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 font-bold max-w-md mx-auto flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      Tahap Refleksi pada Unit {selectedUnitId} sekarang TELAH DIBUKA! Poin tersimpan di Paspor Belajarmu.
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleRestart}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Ulangi Asesmen Unit Ini</span>
                    </button>

                    <button
                      onClick={handleNextUnitQuiz}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2A4A] hover:bg-[#064B78] text-amber-300 text-xs font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                    >
                      <span>ASESMEN UNIT BERIKUTNYA</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleCloseQuiz}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Kembali ke Katalog Asesmen</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ========================================================================
  // VIEW 2: ASESMEN CATALOG (HUB VIEW)
  // ========================================================================
  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header */}
      <NavigationHeader
        title="ASESMEN PEMAHAMAN CENDEKIA"
        subtitle="120 Soal Formatif & Sumatif Berbasis Fakta & Sumber Ilmiah"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <CheckSquare className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Award className="w-20 h-20 text-yellow-300" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <Trophy className="w-4 h-4" />
            <span>🧭 ASESMEN PEMAHAMAN TERPADU (120 SOAL RESMI)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Asesmen Pelaut Cendekia
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “10 Soal Berbasis Teks, Numerasi, dan Kearifan Lokal untuk Menguji Ketangguhan Ilmu Setiap Unit!”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Oleh: Musfira, S.Pd.</span>
            </span>
            <span>•</span>
            <span>{currentGrade} SD Bulukumba</span>
            <span>•</span>
            <span>12 Topik Belajar • 10 Soal/Topik</span>
          </div>
        </div>
      </section>

      {/* Topic Filter */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-sky-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Topik:
            </span>
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
              <button
                onClick={() => setSelectedTopicGroup('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedTopicGroup === 'all'
                    ? 'bg-[#0B2A4A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Topik (1-12)
              </button>
              <button
                onClick={() => setSelectedTopicGroup('1-6')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedTopicGroup === '1-6'
                    ? 'bg-[#0B2A4A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Topik 1-6
              </button>
              <button
                onClick={() => setSelectedTopicGroup('7-12')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedTopicGroup === '7-12'
                    ? 'bg-[#0B2A4A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Topik 7-12
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black text-slate-600">
            <span>Standar Evaluasi:</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-950 rounded-full font-black">
              10 Soal Berbasis Sumber & Fakta / Topik
            </span>
          </div>
        </div>
      </section>

      {/* Grid of Assessment Cards for Selected Topic Group */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedTopicGroup === 'all'
            ? Array.from({ length: 12 }, (_, i) => i + 1)
            : selectedTopicGroup === '1-6'
            ? Array.from({ length: 6 }, (_, i) => i + 1)
            : Array.from({ length: 6 }, (_, i) => i + 7)
          ).map((uId) => {
            const uStatus = getStageStatus(uId, 'asesmen');
            const isDone = uStatus === 'COMPLETED';
            const isLock = uStatus === 'LOCKED';
            const unitTitle = UNIT_TITLES[uId] || `Materi Topik ${uId}`;

            return (
              <div
                key={uId}
                className="bg-white rounded-3xl p-6 shadow-xl border-2 border-sky-100 flex flex-col justify-between hover:shadow-2xl hover:border-amber-300 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0B2A4A] text-amber-300 text-xs font-black">
                      TOPIK BELAJAR {uId}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase ${
                        isDone
                          ? 'bg-emerald-100 text-emerald-800'
                          : isLock
                          ? 'bg-slate-100 text-slate-500'
                          : 'bg-sky-100 text-sky-800'
                      }`}
                    >
                      {isDone ? '✓ Selesai' : isLock ? '🔒 Terkunci' : 'Tersedia'}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-900 transition-colors font-display">
                    {unitTitle}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 font-medium leading-relaxed">
                    Evaluasi komprehensif 10 soal mencakup Pilihan Ganda, Benar/Salah, dan Isian Singkat berbasis modul ajar resmi.
                  </p>

                  <div className="bg-sky-50/70 p-3 rounded-xl border border-sky-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Komposisi Soal:</span>
                    <span className="font-black text-sky-900">10 Soal (PG + B/S + Isian)</span>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Nilai KKM: 70
                  </span>

                  <button
                    onClick={() => handleStartQuiz(uId)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Mulai Asesmen Ini</span>
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
