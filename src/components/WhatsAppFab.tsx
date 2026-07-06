import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-all duration-300 hover:scale-110 hover:shadow-whatsapp/50 active:scale-95"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
      <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={1.5} fill="white" />
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink-800 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
