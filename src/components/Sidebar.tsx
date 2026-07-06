import NavList from './NavList';
import { type ViewId, INSTAGRAM_URL } from '../constants';
import { Instagram } from 'lucide-react';

interface Props {
  active: ViewId;
  onNavigate: (id: ViewId) => void;
}

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-72 flex-col border-r border-white/10 bg-ink-800 p-8 z-30">
      {/* Logo */}
      <button
        onClick={() => onNavigate('home')}
        className="mb-10 text-left transition-transform hover:scale-[1.02]"
      >
        <h1 className="font-display text-4xl tracking-wider text-white leading-none">
          VAIVÉN
        </h1>
        <p className="mt-1.5 text-[11px] uppercase tracking-mega text-gold font-medium">
          Food & Drinks
        </p>
        <div className="mt-3 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
      </button>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <NavList active={active} onNavigate={onNavigate} variant="sidebar" />
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-[11px] uppercase tracking-widest text-muted mb-3">
          Linares, Maule · Chile
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} />
          @vaivenlinares
        </a>
      </div>
    </aside>
  );
}
