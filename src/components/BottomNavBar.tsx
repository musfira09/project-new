import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import {
  Home,
  BookOpen,
  Compass,
  Trophy,
  Bell,
  Settings,
  X,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';

export const BottomNavBar: React.FC = () => {
  const { activeTab, setActiveTab, setIsUserModalOpen, currentGrade, studentProgress } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const notifications = [
    {
      id: 1,
      title: 'Tantangan Baru dari Ibu Musfira, S.Pd.',
      desc: 'LKPD Unit 4 (Panrita Lopi) sudah siap dikerjakan. Ayo amati dan hitung kebutuhan pasak kayu!',
      time: 'Baru saja',
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-700'
    },
    {
      id: 2,
      title: 'Lencana Pelaut Terbuka!',
      desc: 'Selamat! Kamu telah menyelesaikan Pelabuhan 3 (Kawasan Bira). Cek stempel di Paspor Belajarmu.',
      time: '2 jam lalu',
      icon: Award,
      color: 'bg-emerald-100 text-emerald-700'
    }
  ];

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'materi', label: 'Materi', icon: BookOpen },
    { id: 'jelajah', label: 'Jelajah', icon: Compass },
    { id: 'paspor', label: 'Prestasi', icon: Trophy },
    { id: 'notifikasi', label: 'Notifikasi', icon: Bell, hasBadge: unreadCount > 0 },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings }
  ];

  const handleNavClick = (id: string) => {
    if (id === 'beranda') {
      setActiveTab('beranda');
    } else if (id === 'materi') {
      // Toggle to literasi or show learning menu
      setActiveTab('literasi');
    } else if (id === 'jelajah') {
      setActiveTab('jelajah');
    } else if (id === 'paspor') {
      setActiveTab('paspor');
    } else if (id === 'notifikasi') {
      setShowNotifications(true);
      setUnreadCount(0);
    } else if (id === 'pengaturan') {
      setIsUserModalOpen(true);
    }
  };

  const isItemActive = (id: string) => {
    if (id === 'beranda') return activeTab === 'beranda' || activeTab === 'landing';
    if (id === 'materi') return activeTab === 'literasi' || activeTab === 'numerasi' || activeTab === 'budaya' || activeTab === 'lkpd';
    if (id === 'jelajah') return activeTab === 'jelajah';
    if (id === 'paspor') return activeTab === 'paspor';
    return false;
  };

  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <nav
        aria-label="Navigasi Utama Bawah"
        className="fixed bottom-0 inset-x-0 z-50 bg-[#0B2A4A] border-t-2 border-amber-500/40 shadow-2xl backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto px-2 sm:px-6">
          <div className="flex items-center justify-around h-16 sm:h-18">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item.id);

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all duration-200 focus-visible:outline-hidden ${
                    active ? 'scale-105' : 'hover:opacity-100 opacity-80'
                  }`}
                >
                  {/* Active Indicator Top Glow */}
                  {active && (
                    <span className="absolute -top-1 w-8 sm:w-10 h-1 bg-[#F5B72F] rounded-full shadow-[0_0_10px_#F5B72F]" />
                  )}

                  <div className="relative">
                    <Icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-200 ${
                        active ? 'text-[#F5B72F] drop-shadow-[0_2px_8px_rgba(245,183,47,0.5)]' : 'text-slate-300 group-hover:text-white'
                      }`}
                    />
                    {item.hasBadge && (
                      <span className="absolute -top-1 -right-1.5 w-3 h-3 bg-red-500 border-2 border-[#0B2A4A] rounded-full animate-pulse" />
                    )}
                  </div>

                  <span
                    className={`text-[10px] sm:text-xs font-bold mt-1 tracking-tight transition-colors duration-200 ${
                      active ? 'text-[#F5B72F]' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Notifications Drawer Modal */}
      {showNotifications && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-sky-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Pemberitahuan Siswa</h3>
                  <p className="text-xs text-slate-500">{currentGrade} · Bulukumba</p>
                </div>
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors flex items-start gap-3"
                  >
                    <div className={`w-9 h-9 rounded-xl ${notif.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-900">{notif.title}</h4>
                        <span className="text-[10px] text-slate-400">{notif.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{notif.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setShowNotifications(false)}
              className="w-full py-2.5 bg-sky-900 hover:bg-sky-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Tutup Pemberitahuan
            </button>
          </div>
        </div>
      )}
    </>
  );
};
