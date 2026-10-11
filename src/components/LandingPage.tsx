import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  Compass,
  Anchor,
  BookOpen,
  Calculator,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Ship,
  MapPin
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setActiveTab, setIsUserModalOpen, setRole } = useApp();

  const handleStartSailing = () => {
    setIsUserModalOpen(true);
  };

  const handleEnterAsStudent = () => {
    setRole('siswa');
    setActiveTab('beranda');
  };

  const handleEnterAsTeacher = () => {
    setRole('guru');
    setActiveTab('guru');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-sky-950 text-white">
        {/* Maritime pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brand & Tagline */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Bulukumba badge marker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900/60 border border-sky-500/30 text-sky-200 text-xs font-semibold backdrop-blur-xs">
                <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>Platform Digital Siswa SD Kabupaten Bulukumba</span>
              </div>

              {/* Main Title */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif-title">
                  PHINISI <span className="text-amber-400">CENDEKIA</span>
                </h1>
                <p className="text-lg sm:text-xl text-sky-100 font-medium italic leading-relaxed max-w-xl mx-auto lg:mx-0">
                  “Berlayar dengan Ilmu, Mengenal Budaya, Membangun Masa Depan”
                </p>
              </div>

              {/* Teacher Credit */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Anchor className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-300 font-medium">Inovasi Pembelajaran Digital</p>
                  <p className="text-sm font-bold text-amber-300">Musfira, S.Pd.</p>
                </div>
              </div>

              {/* Concept Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Phinisi Cendekia memadukan kekuatan pembelajaran <strong className="text-sky-300">Literasi</strong> dan{' '}
                <strong className="text-amber-300">Numerasi</strong> dengan kearifan lokal pembuatan perahu Phinisi sebagai
                Warisan Budaya Takbenda Dunia UNESCO dari Bumi Butta Panrita Lopi untuk siswa Kelas 4, Kelas 5, dan Kelas 6.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={handleStartSailing}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Ship className="w-5 h-5 text-slate-950" />
                  <span>MULAI BERLAYAR</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={handleEnterAsTeacher}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sky-900/40 hover:bg-sky-900/60 border border-sky-400/30 text-white font-semibold text-sm transition-colors"
                >
                  <Users className="w-4 h-4 text-sky-300" />
                  <span>Masuk Sebagai Guru</span>
                </button>
              </div>

              {/* Quick Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-3 text-center border-t border-white/10">
                <div>
                  <p className="text-lg font-bold text-white">2 Semester</p>
                  <p className="text-xs text-sky-200">12 Unit Terpadu</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-amber-400">10 Pelabuhan</p>
                  <p className="text-xs text-sky-200">Jelajah Pembelajaran</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-emerald-400">Kelas 1 - 6</p>
                  <p className="text-xs text-sky-200">Fase A, B, dan C</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Frame */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-amber-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900">
                  <img
                    src="/src/assets/images/hero_phinisi_sailing_1790126015691.jpg"
                    alt="Perahu Phinisi sedang berlayar di laut pesisir Bulukumba dengan megah"
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover hover:scale-102 transition-transform duration-700"
                  />
                  {/* Floating Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                          Kearifan Bahari Nusantara
                        </span>
                        <p className="text-sm font-bold text-white">
                          Perahu Phinisi · Tanah Beru & Bonto Bahari, Bulukumba
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-sky-900/60 border border-sky-400/30 text-sky-200 text-xs font-bold">
                        UNESCO 2017
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ocean Wave Transition */}
        <div className="w-full h-8 overflow-hidden text-slate-50">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-current">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2-Semester Roadmap Overview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
            Kurikulum Terstruktur Sepanjang Tahun Ajaran
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-serif-title">
            Dua Semester Petualangan Ilmu & Budaya
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Setiap unit menggabungkan modul literasi berjenjang, penalaran numerasi, LKPD terstruktur,
            dan permainan edukatif yang bermakna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Semester 1 Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">SEMESTER 1</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Mengenal Phinisi dan Bulukumba</h3>
              </div>
              <span className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-sm">
                01
              </span>
            </div>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 1:</strong> Aku dan Lingkunganku (Pesisir & Pantai Bira)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 2:</strong> Mengenal Bulukumba (Bumi Butta Panrita Lopi)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 3:</strong> Apa Itu Phinisi? (7 Helai Layar & Tiang Agung)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 4:</strong> Panrita Lopi (Keahlian Intuitif Tanpa Gambar)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 5:</strong> Bagian-Bagian Phinisi (Kalibise, Anjong, Sombala)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <span><strong>Unit 6:</strong> Nilai & Kehidupan di Balik Phinisi (Tradisi Annyorong Lopi)</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Fokus: Fondasi Konsep & Kosakata</span>
              <button
                onClick={handleEnterAsStudent}
                className="text-sky-700 font-bold hover:underline"
              >
                Mulai Semester 1 &rarr;
              </button>
            </div>
          </div>

          {/* Semester 2 Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">SEMESTER 2</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Memahami dan Melestarikan</h3>
              </div>
              <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                02
              </span>
            </div>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 7:</strong> Proses Pembuatan Phinisi (Dari Hutan ke Lautan)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 8:</strong> Matematika di Balik Phinisi (Geometri & Sudut Angin)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 9:</strong> Phinisi dan Kehidupan Masyarakat (Ekonomi Maritim)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 10:</strong> Phinisi sebagai Warisan Budaya Takbenda UNESCO</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 11:</strong> Data & Informasi tentang Phinisi (Analisis Statistik)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Unit 12:</strong> Generasi Pelestari Phinisi (Aksi Nyata Pelajar SD)</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Fokus: Penalaran Kritis & Pelestarian</span>
              <button
                onClick={handleEnterAsStudent}
                className="text-amber-700 font-bold hover:underline"
              >
                Mulai Semester 2 &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="bg-sky-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
              Mengapa Phinisi Cendekia?
            </h2>
            <p className="text-sm text-sky-200 mt-2">
              Phinisi bukan sekadar hiasan visual, tetapi benang merah pembelajaran nyata bagi siswa SD di Bulukumba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Literasi Berjenjang</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dari mengenal kata dan kalimat di Kelas 1-2, ide pokok di Kelas 3-4, hingga analisis teks kritis, fakta vs opini, dan sebab-akibat di Kelas 5-6.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Numerasi Kontekstual</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Belajar bilangan, bentuk geometri layar perahu, pecahan, perkalian pasak kayu, skala maket miniatur, dan perhitungan data statistik muatan kapal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Karakter & Budaya</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Menanamkan etos kerja Panrita Lopi: ketekunan, kejujuran, gotong royong dalam Annyorong Lopi, dan rasa cinta menjaga hutan kayu Bitti Bulukumba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">PHINISI CENDEKIA</span>
            <span>·</span>
            <span>Kabupaten Bulukumba, Sulawesi Selatan</span>
          </div>
          <div>
            <span>Karya Pengembang Pembelajaran: </span>
            <strong className="text-amber-300">Musfira, S.Pd.</strong>
          </div>
        </div>
      </footer>
    </div>
  );
};
