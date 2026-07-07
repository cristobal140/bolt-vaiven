import { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import MobileActionBar from './components/MobileActionBar';
import WhatsAppFab from './components/WhatsAppFab';
import HomeView from './views/HomeView';
import QuienesView from './views/QuienesView';
import ComoLlegarView from './views/ComoLlegarView';
import ContactoView from './views/ContactoView';
import { type ViewId, TOTEAT_URL } from './constants';

export default function App() {
  const [active, setActive] = useState<ViewId>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = useCallback((id: ViewId) => {
    if (id === 'carta' || id === 'reservas' || id === 'delivery') {
      window.open(TOTEAT_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const renderView = () => {
    switch (active) {
      case 'home':
        return <HomeView />;
      case 'quienes':
        return <QuienesView />;
      case 'como-llegar':
        return <ComoLlegarView />;
      case 'contacto':
        return <ContactoView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-ink-900">
      <Sidebar active={active} onNavigate={handleNavigate} />
      <MobileNav
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
        active={active}
        onNavigate={handleNavigate}
      />

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-20 flex h-16 items-center justify-center glass-dark border-b border-white/10 lg:hidden">
        <button onClick={() => handleNavigate('home')} className="text-center">
          <span className="font-display text-2xl tracking-wider text-white">VAIVÉN</span>
          <span className="ml-2 text-[10px] uppercase tracking-mega text-gold">Food & Drinks</span>
        </button>
      </div>

      <main className="lg:pl-72">
        <div key={active} className="pt-16 pb-24 lg:pt-0 lg:pb-0">
          {renderView()}
        </div>
      </main>

      <MobileActionBar onNavigate={handleNavigate} />
      <WhatsAppFab />
    </div>
  );
}
