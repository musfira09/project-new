import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { OFFICIAL_SOURCES, SOURCE_REGISTRY } from '../data/sourceRegistry.ts';
import {
  BookOpen,
  Award,
  Globe2,
  Building2,
  GraduationCap,
  ExternalLink,
  Search,
  CheckCircle2,
  ShieldCheck,
  Sailboat,
  Compass
} from 'lucide-react';

export const PusatSumberModule: React.FC = () => {
  const { openSourceViewer, goToHome } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'semua', label: 'Semua Sumber' },
    { id: 'unesco', label: 'UNESCO ICH' },
    { id: 'pemkab', label: 'Pemerintah Kab. Bulukumba' },
    { id: 'kemdikbud', label: 'Kemendikbudristek RI' },
    { id: 'akademik', label: 'Kajian Akademik & Modul' }
  ];

  const sourceItems = [
    {
      id: 'unesco-pinisi-2017',
      category: 'unesco',
      title: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO (United Nations Educational, Scientific and Cultural Organization)',
      year: '2017',
      status: 'Representative List of the Intangible Cultural Heritage of Humanity',
      description:
        'Dokumen penetapan resmi dunia atas kemahiran dan tradisi pembuatan perahu Pinisi di Sulawesi Selatan sebagai Warisan Budaya Takbenda Kemanusiaan pada sidang ke-12 Komite Antarpemerintah di Pulau Jeju, Republik Korea.',
      url: 'https://ich.unesco.org/en/RL/pinisi-art-of-boatbuilding-in-south-sulawesi-01282',
      badge: '✓ SUMBER RESMI UTAMA',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      id: 'unesco-decision-12com',
      category: 'unesco',
      title: 'Decision of the Intergovernmental Committee: 12.COM 11.b.13',
      organization: 'UNESCO Intangible Cultural Heritage Committee',
      year: '2017',
      status: 'Dokumen Resmi Keputusan Sidang UNESCO',
      description:
        'Ketetapan tertulis mengenai signifikansi teknik pembuatan kapal tanpa cetak biru, pengetahuan navigasi kosmologis, peran sentral Panrita Lopi, serta rencana pelestarian hutan kayu Bitti dan Ulin.',
      url: 'https://ich.unesco.org/en/decisions/12.COM/11.B.13',
      badge: '✓ DOKUMEN HUKUM DUNIA',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      id: 'pemkab-bulukumba-pinisi',
      category: 'pemkab',
      title: 'Profil Sentra Industri Galangan Rakyat Bonto Bahari & Penetapan Budaya',
      organization: 'Pemerintah Kabupaten Bulukumba (Dinas Pariwisata, Pemuda dan Olahraga)',
      year: '2017',
      status: 'Dokumen Data Resmi Pemerintah Daerah',
      description:
        'Catatan resmi sentra industri pembuatan perahu tradisional di Kelurahan Tana Beru, Bira, dan Batu Licin, Kecamatan Bonto Bahari, Kabupaten Bulukumba, Sulawesi Selatan.',
      url: 'https://bulukumbakab.go.id',
      badge: '✓ PEMDA BULUKUMBA',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300'
    },
    {
      id: 'kemdikbud-wbtb-pinisi',
      category: 'kemdikbud',
      title: 'Karya Budaya Pembuatan Perahu Pinisi (Sertifikat WBTb Indonesia No. 270/P/2014)',
      organization: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia',
      year: '2014',
      status: 'Warisan Budaya Takbenda Indonesia',
      description:
        'Sertifikasi resmi Warisan Budaya Takbenda tingkat nasional oleh Direktorat Jenderal Kebudayaan untuk domain Kemahiran dan Kerajinan Tradisional masyarakat Bulukumba.',
      url: 'https://warisanbudaya.kemdikbud.go.id',
      badge: '✓ KEMDIKBUDRISTEK RI',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    {
      id: 'bpnb-sulsel-etnografi',
      category: 'akademik',
      title: 'Etnografi Teknologi Tradisional Pembuatan Perahu Pinisi di Tana Beru Bulukumba',
      organization: 'Balai Pelestarian Nilai Budaya (BPNB) Sulawesi Selatan',
      year: '2018',
      status: 'Publikasi Kajian Balai Pelestarian Kebudayaan',
      description:
        'Riset etnografi mengenai tata cara pemilihan hari baik, upacara adat Ansompo Lopi, perakitan balok lunas (Kalibise), pasak kayu ulin, hingga tradisi gotong royong Annyorong Lopi.',
      url: 'https://repositori.kemdikbud.go.id',
      badge: '📚 KAJIAN ETNOGRAFI',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'modul-ajar-musfira',
      category: 'akademik',
      title: 'Panduan Modul Ajar Muatan Lokal Maritim Terintegrasi Literasi-Numerasi SD',
      organization: 'Musfira, S.Pd. (SD Negeri 20 Manyampa, Bulukumba)',
      year: '2024',
      status: 'Modul Guru Terintegrasi',
      description:
        'Pengembangan bahan ajar kontekstual berbasis budaya bahari Bulukumba, integrasi numerasi pasak dan lunas, serta lembar kerja peserta didik untuk Kelas 4, 5, dan 6.',
      badge: '💡 MODUL GURU INOVATIF',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
    }
  ];

  const filteredSources = sourceItems.filter((item) => {
    const matchCategory = selectedCategory === 'semua' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Header */}
      <NavigationHeader
        title="PUSAT SUMBER PHINISI"
        subtitle="Repositori Rujukan Fakta Budaya, UNESCO, dan Riset Resmi"
        badge="SUMBER TERVERIFIKASI"
        badgeColor="bg-emerald-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Banner Hero */}
        <div className="bg-gradient-to-r from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white p-6 sm:p-8 rounded-3xl border-2 border-sky-300/40 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>AKURASI & KEASLIAN FAKTA TERJAMIN</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
              Pusat Sumber & Rujukan Resmi Phinisi Cendekia
            </h1>
            <p className="text-sm sm:text-base text-sky-100 leading-relaxed font-medium">
              Seluruh materi sejarah, budaya, dan tradisi pembuatan perahu Pinisi dalam aplikasi ini
              disusun berdasarkan dokumen resmi UNESCO, Pemerintah Kabupaten Bulukumba, dan
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI. Tidak ada fakta yang
              dikarang.
            </p>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-lg border border-sky-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari sumber rujukan..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#0B2A4A] text-amber-300 shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Source Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border ${item.badgeColor}`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    Tahun: {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-sky-800 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{item.organization}</span>
                  </p>
                </div>

                <div className="bg-sky-50/60 p-3.5 rounded-xl border border-sky-100">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => openSourceViewer(item.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black text-xs shadow-md transform hover:scale-102 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>LIHAT SUMBER RESMI</span>
                </button>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 underline underline-offset-2"
                  >
                    <span>Kunjungi Tautan</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
