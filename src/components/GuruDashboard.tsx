import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { DUMMY_STUDENT_ROSTER, StudentRecord } from '../data/dummyStudents.ts';
import { GradeLevel } from '../types.ts';
import { NavigationHeader } from './NavigationHeader.tsx';
import {
  GraduationCap,
  Users,
  Search,
  Filter,
  Printer,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Calculator,
  Award,
  Edit3,
  Save,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export const GuruDashboard: React.FC = () => {
  const { teacherProfile, goToHome } = useApp();

  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('Semua Kelas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTopicNoteId, setActiveTopicNoteId] = useState<number>(1);
  const [teacherNoteText, setTeacherNoteText] = useState<string>(
    'Fokuskan bimbingan pada pemahaman makna 7 helai layar Sombala dan perkalian pasak kayu.'
  );
  const [noteSavedMessage, setNoteSavedMessage] = useState<boolean>(false);

  // Filter students (Only Kelas 4, 5, 6)
  const filteredStudents = DUMMY_STUDENT_ROSTER.filter((s) => {
    // Only grade 4, 5, 6
    if (s.grade !== 'Kelas 4' && s.grade !== 'Kelas 5' && s.grade !== 'Kelas 6') return false;
    const matchClass = selectedClassFilter === 'Semua Kelas' || s.grade === selectedClassFilter;
    const matchSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.schoolName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchClass && matchSearch;
  });

  const studentsNeedingSupport = filteredStudents.filter((s) => s.needsReinforcement);

  // Averages calculation
  const totalStudents = filteredStudents.length;
  const avgLit = totalStudents
    ? Math.round(filteredStudents.reduce((acc, s) => acc + s.literacyProgress, 0) / totalStudents)
    : 0;
  const avgNum = totalStudents
    ? Math.round(filteredStudents.reduce((acc, s) => acc + s.numeracyProgress, 0) / totalStudents)
    : 0;
  const avgAssess = totalStudents
    ? Math.round(filteredStudents.reduce((acc, s) => acc + s.assessmentAverage, 0) / totalStudents)
    : 0;

  const handleSaveNote = () => {
    setNoteSavedMessage(true);
    setTimeout(() => setNoteSavedMessage(false), 3000);
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-28">
      <NavigationHeader
        title="PROFIL GURU & DASHBOARD KELAS"
        subtitle="Portal Pengelolaan & Pemantauan Capaian Siswa"
        badge="PROFIL RESMI"
        badgeColor="bg-emerald-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 text-left">
        {/* Teacher Profile Banner - strictly as requested:
            MUSFIRA, S.Pd.
            Guru Kelas 5
            SD Negeri 20 Manyampa */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 text-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 shadow-md">
              <GraduationCap className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider">
                Profil Pengajar
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                MUSFIRA, S.Pd.
              </h1>
              <p className="text-base font-extrabold text-amber-300">
                Guru Kelas 5
              </p>
              <p className="text-sm font-semibold text-slate-200">
                SD Negeri 20 Manyampa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrintReport}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Cetak Rekap Progres</span>
            </button>
          </div>
        </div>

        {/* Aggregate Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-bold">
              <span>Siswa Terdata</span>
              <Users className="w-4 h-4 text-sky-600" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono tabular-nums">
              {totalStudents}
            </span>
            <span className="text-[11px] text-slate-500 block mt-1 font-medium">Kelas 4, 5, dan 6</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-bold">
              <span>Rata-Rata Literasi</span>
              <BookOpen className="w-4 h-4 text-sky-600" />
            </div>
            <span className="text-2xl font-black text-sky-800 font-mono tabular-nums">
              {avgLit}%
            </span>
            <span className="text-[11px] text-emerald-600 font-bold block mt-1">
              Pemahaman bacaan baik
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-bold">
              <span>Rata-Rata Numerasi</span>
              <Calculator className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-2xl font-black text-amber-700 font-mono tabular-nums">
              {avgNum}%
            </span>
            <span className="text-[11px] text-amber-600 font-bold block mt-1">
              Pecahan & data kapal
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-bold">
              <span>Nilai Asesmen</span>
              <Award className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-2xl font-black text-emerald-700 font-mono tabular-nums">
              {avgAssess} / 100
            </span>
            <span className="text-[11px] text-slate-500 block mt-1 font-medium">
              Rata-rata 12 Topik Belajar
            </span>
          </div>
        </div>

        {/* Filter and Table of Students */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-black text-slate-900 font-display">
                Daftar Capaian Siswa
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Pantau kemajuan membaca, bernalar, pengerjaan LKPD, dan bintang permainan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari siswa atau NISN..."
                  className="pl-9 pr-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-600 w-48 sm:w-60"
                />
              </div>

              {/* Class Filter */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                {['Semua Kelas', 'Kelas 4', 'Kelas 5', 'Kelas 6'].map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setSelectedClassFilter(grade)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedClassFilter === grade
                        ? 'bg-white text-sky-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Nama Siswa & Kode</th>
                  <th className="py-3 px-4">Kelas</th>
                  <th className="py-3 px-4 text-center">Literasi</th>
                  <th className="py-3 px-4 text-center">Numerasi</th>
                  <th className="py-3 px-4 text-center">Budaya</th>
                  <th className="py-3 px-4 text-center">Rata-rata Nilai</th>
                  <th className="py-3 px-4 text-center">Status Pendampingan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-900 block">{st.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{st.code}</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-700">{st.grade}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded-full font-bold font-mono bg-sky-50 text-sky-800">
                        {st.literacyProgress}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded-full font-bold font-mono bg-amber-50 text-amber-800">
                        {st.numeracyProgress}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded-full font-bold font-mono bg-emerald-50 text-emerald-800">
                        {st.cultureProgress}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold font-mono text-slate-800">
                      {st.assessmentAverage}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {st.needsReinforcement ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          <AlertCircle className="w-3 h-3" />
                          <span>Perlu Pendampingan</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Mencapai Target</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
