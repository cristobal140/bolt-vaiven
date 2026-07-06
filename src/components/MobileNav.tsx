import { Menu } from 'lucide-react';
import NavList from './NavList';
import { type ViewId } from '../constants';

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  active: ViewId;
  onNavigate: (id: ViewId) => void;
}

export default function MobileNav({ open, onOpen, onClose, active, onNavigate }: Props) {
  return (
    <>
      {/* Hamburger trigger */}
      <button
        onClick={onOpen}
        aria-label="Abrir menú"
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl glass-dark border border-white/10 text-white transition-all hover:border-gold/40 hover:text-gold active:scale-95 lg:hidden"
      >
        <Menu className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[300px] max-w-[85vw] glass-dark border-r border-white/10 transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6 pt-20 overflow-y-auto scrollbar-hide">
          <div className="mb-8">
            <h2 className="font-display text-3xl tracking-wider text-white">
              VAIVÉN
            </h2>
            <p className="text-xs uppercase tracking-mega text-gold mt-1">Food & Drinks</p>
          </div>
          <NavList active={active} onNavigate={onNavigate} variant="drawer" onClose={onClose} />
        </div>
      </aside>
    </>
  );
}
