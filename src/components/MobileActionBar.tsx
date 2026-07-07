import { MessageCircle, CalendarClock, MapPin } from 'lucide-react';
import { WHATSAPP_RESERVA_URL, TOTEAT_URL } from '../constants';
import { type ViewId } from '../constants';

interface Props {
  onNavigate: (id: ViewId) => void;
}

export default function MobileActionBar({ onNavigate }: Props) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 glass-dark pb-safe lg:hidden"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={WHATSAPP_RESERVA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-whatsapp transition-colors active:bg-white/5"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} fill="currentColor" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href={TOTEAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-gold transition-colors active:bg-white/5"
        >
          <CalendarClock className="h-5 w-5" strokeWidth={1.5} />
          <span className="text-[11px] font-medium">Reservar</span>
        </a>
        <button
          onClick={() => onNavigate('como-llegar')}
          className="flex flex-col items-center gap-1 py-3 text-white/80 transition-colors active:bg-white/5"
        >
          <MapPin className="h-5 w-5" strokeWidth={1.5} />
          <span className="text-[11px] font-medium">Cómo llegar</span>
        </button>
      </div>
    </nav>
  );
}
