import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { GradeLevel, UserRole } from '../types.ts';
import { User, GraduationCap, X, Check, Compass, Sparkles, Building2 } from 'lucide-react';

export const UserSelectionModal: React.FC = () => {
  const {
    isUserModalOpen,
    setIsUserModalOpen,
    role,
    setRole,
    currentGrade,
    setCurrentGrade,
    studentProfile,
    setStudentProfile,
    setActiveTab
  } = useApp();

  const [selectedRole, setSelectedRole] = useState<UserRole>(role);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(currentGrade);
  const [nickname, setNickname] = useState(studentProfile.name);

  if (!isUserModalOpen) return null;

  const grades: GradeLevel[] = [
    'Kelas 4',
    'Kelas 5',
    'Kelas 6'
  ];

  const handleSave = () => {
    setRole(selectedRole);
    if (selectedRole === 'siswa') {
      setCurrentGrade(selectedGrade);
      setStudentProfile((prev) => ({
        ...prev,
        name: nickname.trim() || 'Penjelajah Bahari',
        grade: selectedGrade,
        code: `PC-${selectedGrade.replace('Kelas ', '')}B-${Math.floor(Math.random() * 89 + 10)}`
      }));
      setActiveTab('beranda');
    } else {
      setActiveTab('guru');
    }
    setIsUserModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border-2 border-sky-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-sky-900 to-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div className="text-left">
              <h2 className="text-base sm:text-lg font-black tracking-tight font-display">
                Pilih Identitas Penjelajah
              </h2>
              <p className="text-xs text-sky-200">Phinisi Cendekia · Butta Panrita Lopi</p>
            </div>
          </div>
          <button
            onClick={() => setIsUserModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-left">
          {/* Role selector tabs */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wider">
              Jenis Pengguna
            </label>
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setSelectedRole('siswa')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedRole === 'siswa'
                    ? 'bg-white text-sky-950 shadow-md border border-sky-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-4 h-4 text-sky-700" />
                <span>SISWA SD</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('guru')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedRole === 'guru'
                    ? 'bg-white text-emerald-950 shadow-md border border-emerald-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>PROFIL GURU</span>
              </button>
            </div>
          </div>

          {selectedRole === 'siswa' ? (
            <>
              {/* Nickname input */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1.5">
                  Nama Panggilan Siswa
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Contoh: Andi, Rahmat, Fatimah"
                  maxLength={30}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-600 text-sm font-semibold"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  *Cukup gunakan nama panggilan untuk petualangan belajar di kelas.
                </p>
              </div>

              {/* Grade selector (Kelas 4, 5, 6) */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-2">
                  Pilih Tingkat Kelas (Fase Belajar)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {grades.map((gr) => {
                    const isSelected = selectedGrade === gr;
                    return (
                      <button
                        key={gr}
                        type="button"
                        onClick={() => setSelectedGrade(gr)}
                        className={`p-3.5 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                          isSelected
                            ? 'bg-sky-50 border-sky-600 text-sky-950 font-black shadow-md scale-102'
                            : 'border-slate-200 bg-slate-50/70 hover:bg-white text-slate-700 font-bold'
                        }`}
                      >
                        <span className="text-xl">🎒</span>
                        <span className="text-xs sm:text-sm font-black">{gr}</span>
                        <span className="text-[10px] text-slate-500 font-semibold">
                          {gr === 'Kelas 4' ? 'Fase B' : 'Fase C'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50 border-2 border-emerald-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    MUSFIRA, S.Pd.
                  </h3>
                  <p className="text-xs font-bold text-emerald-800">
                    Guru Kelas 5
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    SD Negeri 20 Manyampa
                  </p>
                </div>
              </div>

              <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-100 text-xs text-slate-700 leading-relaxed font-medium">
                Penyusun dan pengembang aplikasi pembelajaran interaktif <strong>Phinisi Cendekia</strong> untuk muatan literasi, numerasi, dan budaya maritim Bulukumba bagi siswa Kelas 4, 5, dan 6.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsUserModalOpen(false)}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sky-800 to-blue-900 hover:from-sky-700 hover:to-blue-800 text-white rounded-xl text-xs font-black shadow-md transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Simpan & Lanjutkan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
