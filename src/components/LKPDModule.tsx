import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { LKPD_CATALOG, ExtendedLKPDItem } from '../data/lkpdData.ts';
import {
  BookOpen,
  Compass,
  HelpCircle,
  PenTool,
  CheckCircle2,
  Save,
  Printer,
  Send,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  Sparkles,
  Lock,
  Calculator,
  FileText,
  FileCheck,
  Sailboat
} from 'lucide-react';

export const LKPDModule: React.FC = () => {
  const {
    currentGrade,
    studentProfile,
    saveLKPD,
    getStageStatus,
    getStageLockReason,
    completeUnitStage,
    openSourceViewer,
    currentView,
    navigateTo,
    goToHome
  } = useApp();

  // Unit and topic group selection
  const [selectedTopicGroup, setSelectedTopicGroup] = useState<'all' | '1-6' | '7-12'>('all');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [selectedDomain, setSelectedDomain] = useState<'literasi' | 'numerasi'>('literasi');

  // Full-page work state
  const [isWorking, setIsWorking] = useState<boolean>(false);

  // Active step in the 6-step scientific inquiry
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Student Responses State (for questions, kesimpulan, refleksi)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [kesimpulan, setKesimpulan] = useState<string>('');
  const [refleksi, setRefleksi] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Sync isWorking when subId changes (e.g. from nav)
  useEffect(() => {
    if (currentView.subId && typeof currentView.subId === 'string' && currentView.subId.startsWith('lkpd-')) {
      const found = LKPD_CATALOG.find((l) => l.id === currentView.subId);
      if (found) {
        setSelectedUnitId(found.unitId);
        setSelectedDomain(found.domain);
        setIsWorking(true);
        setCurrentStep(1);
      }
    }
  }, [currentView.subId]);

  // Filter current active LKPD item
  const currentLKPD: ExtendedLKPDItem =
    LKPD_CATALOG.find(
      (item) => item.unitId === selectedUnitId && item.domain === selectedDomain
    ) ||
    LKPD_CATALOG.find((item) => item.unitId === selectedUnitId) ||
    LKPD_CATALOG[0];

  // Stage status for the selected unit
  const stageStatus = getStageStatus(selectedUnitId, 'lkpd');
  const lockReason = getStageLockReason(selectedUnitId, 'lkpd');

  const handleOpenLKPD = (uId: number, domain: 'literasi' | 'numerasi') => {
    setSelectedUnitId(uId);
    setSelectedDomain(domain);
    setCurrentStep(1);
    setIsSubmitted(false);
    setIsWorking(true);
    const item =
      LKPD_CATALOG.find((l) => l.unitId === uId && l.domain === domain) ||
      LKPD_CATALOG.find((l) => l.unitId === uId);
    if (item) {
      navigateTo('lkpd-work', item.id);
    }
  };

  const handleCloseLKPD = () => {
    setIsWorking(false);
    navigateTo('lkpd');
  };

  const handleNextLKPD = () => {
    if (selectedUnitId < 12) {
      handleOpenLKPD(selectedUnitId + 1, selectedDomain);
    } else {
      handleCloseLKPD();
    }
  };

  const handleAnswerChange = (idx: number | string, val: string) => {
    setAnswers((prev) => ({ ...prev, [idx]: val }));
  };

  const handleSaveDraft = () => {
    setSaveToast('Draf jawaban LKPD berhasil disimpan di memori belajarmu!');
    setTimeout(() => setSaveToast(null), 3000);
  };

  const handleSubmitLKPD = () => {
    setIsSubmitted(true);
    saveLKPD({
      lkpdId: currentLKPD.id,
      topicId: selectedUnitId,
      unitId: selectedUnitId,
      studentId: studentProfile.id,
      answers: answers,
      kesimpulan: kesimpulan,
      refleksi: refleksi,
      submittedAt: new Date().toLocaleDateString('id-ID'),
      status: 'terkirim'
    });
    // Complete stage in app context to unlock 'game'
    completeUnitStage(selectedUnitId, 'lkpd');
  };

  // Step definitions
  const stepsMeta = [
    {
      step: 1,
      title: '1. 📖 AYO MEMBACA',
      subtitle: 'Literasi Budaya & Teks Saintifik',
      desc: 'Bacalah teks pengantar dengan seksama untuk memahami konteks kearifan maritim.'
    },
    {
      step: 2,
      title: '2. 🔍 AYO MENGAMATI',
      subtitle: 'Observasi Visual & Bentuk Nyata',
      desc: 'Perhatikan detail gambar, benda, dan proses nyata tradisi maritim Nusantara.'
    },
    {
      step: 3,
      title: '3. 💡 AYO BERPIKIR',
      subtitle: 'Pertanyaan Pemantik Kritis',
      desc: 'Asah daya nalar dan rasa ingin tahu melalui eksplorasi pertanyaan mendalam.'
    },
    {
      step: 4,
      title: '4. ✍️ AYO MENGERJAKAN',
      subtitle: 'Tugas Terbimbing & Lembar Kerja',
      desc: 'Kerjakan soal pemahaman, perhitungan, atau analisis data dengan cermat.'
    },
    {
      step: 5,
      title: '5. 🧭 AYO MENYIMPULKAN',
      subtitle: 'Sintesis Pengetahuan Baru',
      desc: 'Tuliskan inti pemahaman yang kamu temukan dari seluruh rangkaian penyelidikan.'
    },
    {
      step: 6,
      title: '6. 🌟 REFLEKSI',
      subtitle: 'Refleksi Diri & Karakter Luhur',
      desc: 'Ungkapkan perasaan, kesan, dan nilai karakter yang kamu peroleh hari ini.'
    }
  ];

  // ========================================================================
  // VIEW 1: FULL-PAGE LKPD WORKSPACE
  // ========================================================================
  if (isWorking) {
    return (
      <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
        <NavigationHeader
          title={`LKPD: ${currentLKPD.title}`}
          subtitle={`Topik ${currentLKPD.unitId} • ${currentLKPD.domain.toUpperCase()} • ${currentGrade}`}
          badge="✍️ PENGERJAAN LKPD"
          badgeColor="bg-amber-400 text-slate-950 font-black"
          onBack={handleCloseLKPD}
          extraActions={
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveDraft}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Simpan Draf</span>
              </button>
              <button
                onClick={handleCloseLKPD}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold transition-all cursor-pointer"
              >
                <span>← Kembali ke Katalog</span>
              </button>
            </div>
          }
        />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
          {/* Quick Action Top Bar */}
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-sky-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCloseLKPD}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <span>← Kembali ke Daftar LKPD</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-black uppercase text-[11px]">
                {currentLKPD.domain}
              </span>
              <span>Topik Belajar {currentLKPD.unitId}</span>
              <span>•</span>
              <span>{currentGrade}</span>
            </div>

            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black transition-all cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Draf Jawaban</span>
            </button>
          </div>

          {/* Lock Banner if Locked */}
          {stageStatus === 'LOCKED' && (
            <div className="p-4 rounded-2xl bg-amber-500/20 border-2 border-amber-300 text-amber-100 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-amber-300 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-white">
                    Tahap LKPD Terkunci
                  </h4>
                  <p className="text-xs text-amber-200">
                    {lockReason || 'Selesaikan tahapan Aktivitas terlebih dahulu untuk membuka LKPD ini.'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => completeUnitStage(selectedUnitId, 'aktivitas')}
                className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all shrink-0 cursor-pointer"
              >
                Buka Akses Belajar
              </button>
            </div>
          )}

          {/* LKPD Workspace Card */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden">
            {/* Header Step Progress Bar */}
            <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-amber-300 tracking-wider">
                    Langkah {currentStep} dari 6
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-bold text-sky-200">
                    {currentLKPD.title}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                  {stepsMeta[currentStep - 1].title}
                </h2>
                <p className="text-xs text-sky-200">
                  {stepsMeta[currentStep - 1].subtitle}
                </p>
              </div>

              {/* Stepper Dots (1-6) */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {stepsMeta.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setCurrentStep(s.step)}
                    className={`w-8 h-8 rounded-full text-xs font-black transition-all cursor-pointer ${
                      s.step === currentStep
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-white scale-110 shadow-md'
                        : s.step < currentStep
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    title={s.title}
                  >
                    {s.step < currentStep ? '✓' : s.step}
                  </button>
                ))}
              </div>
            </div>

            {/* LKPD Goal & Official Source Strip */}
            <div className="bg-sky-50 px-6 py-3 border-b border-sky-100 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-700" />
                <span>
                  <strong>Tujuan:</strong> {currentLKPD.tujuan}
                </span>
              </div>

              {currentLKPD.sourceId && (
                <button
                  onClick={() => openSourceViewer(currentLKPD.sourceId)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 hover:text-sky-950 bg-white px-2.5 py-1 rounded-lg border border-sky-200 hover:bg-sky-100 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-600" />
                  <span>Lihat Sumber Resmi</span>
                </button>
              )}
            </div>

            {/* Step Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* STEP 1: AYO MEMBACA */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <BookOpen className="w-5 h-5 text-sky-700" />
                    <span>Teks Bacaan Pengantar Budaya Bahari:</span>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50/50 to-sky-50/40 p-6 rounded-2xl border border-sky-100 text-slate-800 leading-relaxed space-y-3 font-serif text-sm sm:text-base">
                    <p className="indent-6 text-justify">
                      {currentLKPD.bacalah}
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-900">
                      <strong>Tips Membaca:</strong> Temukan kata-kata penting yang berhubungan dengan tradisi, peralatan, atau nilai-nilai kearifan lokal dalam teks di atas!
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: AYO MENGAMATI */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <Eye className="w-5 h-5 text-sky-700" />
                    <span>Petunjuk Observasi & Pengamatan:</span>
                  </div>

                  <div className="bg-sky-50 p-6 rounded-2xl border-2 border-dashed border-sky-200 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-inner flex items-center justify-center text-3xl">
                      🧭
                    </div>
                    <h4 className="text-sm font-black text-slate-900 font-display">
                      Instruksi Pengamatan Budaya
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
                      {currentLKPD.amati}
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Perhatikan detail bentuk, fungsi, dan tata cara adat yang terkandung di dalamnya.</span>
                  </div>
                </div>
              )}

              {/* STEP 3: AYO BERPIKIR */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <HelpCircle className="w-5 h-5 text-sky-700" />
                    <span>Pertanyaan Pemantik & Eksplorasi Nalar:</span>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 space-y-3">
                    <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
                      <Lightbulb className="w-4 h-4 text-purple-700" />
                      <span>Renungkan Pertanyaan Berikut:</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                      {currentLKPD.pikirkan}
                    </p>
                    <textarea
                      value={answers['pemantik_pikir'] || ''}
                      onChange={(e) => handleAnswerChange('pemantik_pikir', e.target.value)}
                      placeholder="Tuliskan gagasan awal atau pemikiranmu di sini..."
                      className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none resize-none h-24 bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: AYO MENGERJAKAN */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <PenTool className="w-5 h-5 text-sky-700" />
                    <span>Tugas Inti & Lembar Jawaban Peserta Didik:</span>
                  </div>

                  <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-xs font-bold text-amber-950">
                    {currentLKPD.kerjakanTugas.instruksi}
                  </div>

                  <div className="space-y-4">
                    {currentLKPD.kerjakanTugas.pertanyaan.map((q, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-sky-300 transition-all space-y-2 shadow-xs"
                      >
                        <label className="text-sm font-black text-slate-900 flex items-start gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#0B2A4A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{q}</span>
                        </label>
                        <textarea
                          value={answers[idx] || ''}
                          onChange={(e) => handleAnswerChange(idx, e.target.value)}
                          placeholder="Tulis jawaban lengkapmu di sini dengan kalimat yang santun..."
                          className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-amber-400 focus:bg-white text-xs sm:text-sm text-slate-800 font-medium focus:outline-hidden transition-all shadow-inner resize-none h-24"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: AYO MENYIMPULKAN */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <Compass className="w-5 h-5 text-sky-700" />
                    <span>Kesimpulan Penyelidikan Budaya:</span>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Petunjuk Kesimpulan:</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-800">
                      {currentLKPD.kesimpulanPrompt}
                    </p>
                    <textarea
                      value={kesimpulan}
                      onChange={(e) => setKesimpulan(e.target.value)}
                      placeholder="Tuliskan kesimpulan menyeluruh yang kamu dapatkan..."
                      className="w-full p-4 rounded-2xl bg-white border-2 border-emerald-300 focus:border-emerald-500 text-xs sm:text-sm text-slate-800 font-medium focus:outline-hidden transition-all shadow-inner resize-none h-28"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: REFLEKSI DIRI & KARAKTER */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-sky-950 font-black text-sm">
                    <Star className="w-5 h-5 text-indigo-500" />
                    <span>Pertanyaan Refleksi Karakter:</span>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <span>Petunjuk Refleksi:</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-800">
                      {currentLKPD.refleksiPrompt}
                    </p>
                    <textarea
                      value={refleksi}
                      onChange={(e) => setRefleksi(e.target.value)}
                      placeholder="Tuliskan perasaan, pengalaman baru, atau janji belajarmu hari ini..."
                      className="w-full p-4 rounded-2xl bg-white border-2 border-indigo-300 focus:border-indigo-500 text-xs sm:text-sm text-slate-800 font-medium focus:outline-hidden transition-all shadow-inner resize-none h-28"
                    />
                  </div>
                </div>
              )}

              {/* Navigation & Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      currentStep === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>

                  {currentStep < 6 ? (
                    <button
                      onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0B2A4A] hover:bg-[#064B78] text-white text-xs font-black transition-all hover:scale-105 shadow-md cursor-pointer"
                    >
                      <span>Langkah Selanjutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitLKPD}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black transition-all hover:scale-105 shadow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim ke Ibu Guru Musfira, S.Pd.</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveDraft}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-black border border-amber-300 transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Draf</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak LKPD</span>
                  </button>
                </div>
              </div>

              {/* Notification Toast */}
              {saveToast && (
                <div className="p-3.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{saveToast}</span>
                </div>
              )}

              {/* Submission Celebration Stiker */}
              {isSubmitted && (
                <div className="p-6 rounded-3xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 space-y-4 text-center shadow-lg animate-scale-up">
                  <span className="text-4xl block">🎉</span>
                  <h4 className="text-lg font-black font-display">
                    Luar Biasa, Penjelajah Cendekia!
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-emerald-900 max-w-lg mx-auto">
                    {currentLKPD.title} telah berhasil diserahkan kepada Ibu Guru Musfira, S.Pd. Tahap Game pembelajaran pada Unit {selectedUnitId} kini TELAH DIBUKA!
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleNextLKPD}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2A4A] text-amber-300 hover:bg-slate-900 text-xs font-black shadow-md cursor-pointer transition-all hover:scale-105"
                    >
                      <span>LKPD BERIKUTNYA</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleCloseLKPD}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-50 text-xs font-black shadow-xs cursor-pointer"
                    >
                      <span>Kembali ke Daftar LKPD</span>
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
  // VIEW 2: LKPD CATALOG (HUB VIEW)
  // ========================================================================
  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header */}
      <NavigationHeader
        title="LEMBAR KERJA PESERTA DIDIK (LKPD)"
        subtitle="24 LKPD Saintifik Berbasis Budaya Maritim Bulukumba"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <FileText className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Sailboat className="w-20 h-20 text-sky-200" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <FileCheck className="w-4 h-4" />
            <span>LKPD DIGITAL INTERAKTIF (24 LEMBAR KERJA)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Lembar Kerja Penjelajah Cendekia
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Alur Saintifik 6 Langkah: Membaca, Mengamati, Berpikir, Mengerjakan, Menyimpulkan, dan Merefleksikan Warisan Luhur Bulukumba.”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Oleh: Musfira, S.Pd.</span>
            </span>
            <span>•</span>
            <span>{currentGrade} SD Bulukumba</span>
            <span>•</span>
            <span>12 Topik Belajar Terpadu</span>
          </div>
        </div>
      </section>

      {/* Filter Topik & Domain */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-sky-200 flex flex-wrap items-center justify-between gap-3">
          {/* Topic Filter */}
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

          {/* Domain Literasi vs Numerasi */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Fokus:
            </span>
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
              <button
                onClick={() => setSelectedDomain('literasi')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedDomain === 'literasi'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>LKPD Literasi</span>
              </button>
              <button
                onClick={() => setSelectedDomain('numerasi')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedDomain === 'numerasi'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>LKPD Numerasi</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of LKPD Cards for the Selected Topic Group */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedTopicGroup === 'all'
            ? Array.from({ length: 12 }, (_, i) => i + 1)
            : selectedTopicGroup === '1-6'
            ? Array.from({ length: 6 }, (_, i) => i + 1)
            : Array.from({ length: 6 }, (_, i) => i + 7)
          ).map((uId) => {
            const item =
              LKPD_CATALOG.find((l) => l.unitId === uId && l.domain === selectedDomain) ||
              LKPD_CATALOG.find((l) => l.unitId === uId) ||
              LKPD_CATALOG[0];
            const uStatus = getStageStatus(uId, 'lkpd');
            const isDone = uStatus === 'COMPLETED';
            const isLock = uStatus === 'LOCKED';

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
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 font-medium leading-relaxed">
                    {item.bacalah
                      ? item.bacalah.slice(0, 140) + '...'
                      : 'Lembar kerja penyelidikan budaya bahari 6 langkah saintifik interaktif.'}
                  </p>

                  <div className="bg-sky-50/70 p-3 rounded-xl border border-sky-100 space-y-1">
                    <span className="text-[10px] font-black uppercase text-sky-950 block">
                      Alur Saintifik 6 Langkah:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {['1. 📖 Baca', '2. 🔍 Amati', '3. 💡 Nalar', '4. ✍️ Kerja', '5. 🧭 Simpul', '6. ⭐ Refleksi'].map(
                        (step, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-bold bg-white text-slate-700 px-1.5 py-0.5 rounded border border-slate-200"
                          >
                            {step}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    Fokus: {selectedDomain}
                  </span>

                  <button
                    onClick={() => handleOpenLKPD(uId, selectedDomain)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    <span>Buka & Kerjakan LKPD</span>
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
