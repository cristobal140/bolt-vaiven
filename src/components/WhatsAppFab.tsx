import { WHATSAPP_URL } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 shadow-lg shadow-whatsapp/30 transition-all duration-300 hover:scale-105 hover:shadow-whatsapp/50 active:scale-95 lg:bottom-6 lg:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
      <WhatsAppIcon className="relative h-6 w-6 text-white" />
      <span className="relative text-sm font-semibold text-white pr-0.5">
        WhatsApp
      </span>
    </a>
  );
}
