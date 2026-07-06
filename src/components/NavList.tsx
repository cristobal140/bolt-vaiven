import { Home, Users, BookOpen, CalendarClock, Bike, MapPin, Phone, X } from 'lucide-react';
import { NAV_ITEMS, type ViewId } from '../constants';

const ICONS: Record<ViewId, typeof Home> = {
  home: Home,
  quienes: Users,
  carta: BookOpen,
  reservas: CalendarClock,
  delivery: Bike,
  'como-llegar': MapPin,
  contacto: Phone,
};

interface Props {
  active: ViewId;
  onNavigate: (id: ViewId) => void;
  variant: 'sidebar' | 'drawer';
  onClose?: () => void;
}

export default function NavList({ active, onNavigate, variant, onClose }: Props) {
  const isSidebar = variant === 'sidebar';

  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item, idx) => {
        const Icon = ICONS[item.id];
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              if (onClose) onClose();
            }}
            style={{ animationDelay: `${idx * 50}ms` }}
            className={`group relative flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-300 animate-slide-in ${
              isActive
                ? 'bg-gold/10 text-gold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            } ${isSidebar ? 'text-sm' : 'text-base'}`}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-gold" />
            )}
            <Icon
              className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                isSidebar ? 'h-5 w-5' : 'h-6 w-6'
              } ${isActive ? 'text-gold' : 'text-muted group-hover:text-gold'}`}
              strokeWidth={1.5}
            />
            <span className={`font-medium tracking-wide ${isSidebar ? 'tracking-normal' : 'tracking-wide'}`}>
              {item.label}
            </span>
            {item.external && (
              <span className="ml-auto text-[10px] uppercase tracking-widest text-muted/60 group-hover:text-gold/70 transition-colors">
                ↗
              </span>
            )}
          </button>
        );
      })}
      {onClose && (
        <button
          onClick={onClose}
          className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted hover:text-white transition-colors lg:hidden"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
          Cerrar menú
        </button>
      )}
    </nav>
  );
}
