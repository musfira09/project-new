import React from 'react';
import { AppProvider, useApp } from './context/AppContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { StudentHome } from './components/StudentHome.tsx';
import { JelajahPhinisi } from './components/JelajahPhinisi.tsx';
import { JelajahDetailView } from './components/JelajahDetailView.tsx';
import { LiterasiModule } from './components/LiterasiModule.tsx';
import { LiterasiMateriView } from './components/LiterasiMateriView.tsx';
import { LiterasiMisiView } from './components/LiterasiMisiView.tsx';
import { LiterasiMenulisView } from './components/LiterasiMenulisView.tsx';
import { LiterasiFaktaView } from './components/LiterasiFaktaView.tsx';
import { NumerasiModule } from './components/NumerasiModule.tsx';
import { NumerasiMisiView } from './components/NumerasiMisiView.tsx';
import { BudayaPhinisi } from './components/BudayaPhinisi.tsx';
import { BudayaDetailView } from './components/BudayaDetailView.tsx';
import { LKPDModule } from './components/LKPDModule.tsx';
import { PermainanModule } from './components/PermainanModule.tsx';
import { AsesmenModule } from './components/AsesmenModule.tsx';
import { PasporBelajar } from './components/PasporBelajar.tsx';
import { JeliAI } from './components/JeliAI.tsx';
import { GuruDashboard } from './components/GuruDashboard.tsx';
import { PusatSumberModule } from './components/PusatSumberModule.tsx';
import { UserSelectionModal } from './components/UserSelectionModal.tsx';
import { SourceViewerModal } from './components/SourceViewerModal.tsx';
import { BottomNavBar } from './components/BottomNavBar.tsx';

const AppContent: React.FC = () => {
  const { currentView } = useApp();
  const page = currentView?.page || 'beranda';

  return (
    <div className="min-h-screen flex flex-col bg-[#064B78] text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-950 font-display">
      {/* Top Navbar only shown on internal modules to maximize immersion on Beranda */}
      {page !== 'beranda' && page !== 'landing' && <Navbar />}

      <main className="flex-1 pb-16">
        {(page === 'beranda' || page === 'landing') && <StudentHome />}
        {page === 'jelajah' && <JelajahPhinisi />}
        {page === 'jelajah-detail' && <JelajahDetailView />}
        {page === 'literasi' && <LiterasiModule />}
        {page === 'literasi-materi' && <LiterasiMateriView />}
        {page === 'literasi-misi' && <LiterasiMisiView />}
        {page === 'literasi-menulis' && <LiterasiMenulisView />}
        {page === 'literasi-fakta' && <LiterasiFaktaView />}
        {page === 'numerasi' && <NumerasiModule />}
        {page === 'numerasi-misi' && <NumerasiMisiView />}
        {page === 'budaya' && <BudayaPhinisi />}
        {page === 'budaya-detail' && <BudayaDetailView />}
        {(page === 'lkpd' || page === 'lkpd-work') && <LKPDModule />}
        {(page === 'permainan' || page === 'game-arena') && <PermainanModule />}
        {(page === 'asesmen' || page === 'asesmen-test') && <AsesmenModule />}
        {page === 'paspor' && <PasporBelajar />}
        {page === 'jeli' && <JeliAI />}
        {page === 'guru' && <GuruDashboard />}
        {page === 'sumber' && <PusatSumberModule />}
      </main>

      {/* Fixed Bottom Navigation Bar */}
      <BottomNavBar />

      {/* User / Class Switcher Modal */}
      <UserSelectionModal />

      {/* Official UNESCO & Legal Source Viewer Modal */}
      <SourceViewerModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
