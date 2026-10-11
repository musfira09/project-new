import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  Compass,
  BookOpen,
  Calculator,
  MapPin,
  Sparkles,
  User,
  GraduationCap,
  Menu,
  X,
  Award
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    role,
    activeTab,
    setActiveTab,
    currentGrade,
    studentProfile,
    setIsUserModalOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'jelajah', label: 'Jelajah Phinisi' },
    { id: 'literasi', label: 'Literasi' },
    { id: 'numerasi', label: 'Numerasi' },
    { id: 'budaya', label: 'Budaya Phinisi' },
    { id: 'permainan', label: 'Permainan' },
    { id: 'paspor', label: 'Paspor' },
    { id: 'jeli', label: 'Jeli AI' },
    ...(role === 'guru' ? [{ id: 'guru', label: 'Dashboard Guru' }] : [])
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single element brand wordmark & Back to Home */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-xs transition-all transform hover:scale-105"
            >
              <span>← Beranda</span>
            </button>

            <button
              onClick={() => handleNavClick('beranda')}
              className="flex items-center gap-2 text-left group transition-transform focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 via-sky-800 to-amber-600 flex items-center justify-center text-white shadow-xs">
                <Compass className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-slate-900 group-hover:text-sky-800 transition-colors">
                  PHINISI CENDEKIA
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-sky-900 font-semibold bg-sky-50 border border-sky-200/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Jeli AI quick button */}
            <button
              onClick={() => handleNavClick('jeli')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-semibold transition-all ${
                activeTab === 'jeli'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>JELI AI</span>
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
              title="Ganti pengguna atau kelas"
            >
              {role === 'guru' ? (
                <GraduationCap className="w-4 h-4 text-emerald-600" />
              ) : (
                <User className="w-4 h-4 text-sky-700" />
              )}
              <span className="hidden sm:inline font-semibold">
                {role === 'guru' ? 'Ibu Guru' : studentProfile.name}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-sky-700 font-bold">
                {role === 'guru' ? 'Guru SD' : currentGrade}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  activeTab === link.id
                    ? 'bg-sky-50 text-sky-900 font-semibold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
            <span>Kabupaten Bulukumba · 2026</span>
            <button
              onClick={() => {
                setIsUserModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-sky-700 font-semibold underline"
            >
              Ubah Pengguna
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
