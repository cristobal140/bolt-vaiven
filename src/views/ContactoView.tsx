import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../constants';
import HoursBlock from '../components/HoursBlock';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ContactoView() {
  return (
    <div className="animate-fade-in">
      <section className="px-5 pt-10 pb-6 sm:px-12 lg:px-16 lg:pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3 sm:tracking-mega">Contacto</p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider gold-shimmer animate-shimmer leading-none">
          HABLEMOS
        </h1>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
      </section>

      <section className="px-5 pb-24 sm:px-12 lg:px-16 sm:pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactCard icon={MapPin} title="Dirección">
            <p className="text-base text-white">{ADDRESS}</p>
          </ContactCard>

          <ContactCard icon={Phone} title="Teléfono">
            <div className="space-y-2">
              <a
                href={`tel:${PHONE.fijo}`}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-900/50 px-4 py-3 transition-all hover:border-gold/30 hover:bg-ink-900"
              >
                <span className="text-sm text-muted">Fijo</span>
                <span className="text-base text-white font-medium">{PHONE_DISPLAY.fijo}</span>
              </a>
              <a
                href={`tel:${PHONE.movil}`}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-900/50 px-4 py-3 transition-all hover:border-gold/30 hover:bg-ink-900"
              >
                <span className="text-sm text-muted">Móvil</span>
                <span className="text-base text-white font-medium">{PHONE_DISPLAY.movil}</span>
              </a>
            </div>
          </ContactCard>

          <ContactCard icon={Mail} title="Correo">
            <a
              href={`mailto:${EMAIL}`}
              className="text-base text-white hover:text-gold transition-colors"
            >
              {EMAIL}
            </a>
          </ContactCard>

          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:border-gold/30">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                <Clock className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl tracking-wider text-white">Horarios</h3>
            </div>
            <HoursBlock compact />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <a
            href={`tel:${PHONE.movil}`}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-800 px-6 py-4 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700"
          >
            <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="text-base font-medium text-white">Llamar ahora</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-800 px-6 py-4 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700"
          >
            <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="text-base font-medium text-white">Enviar correo</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-whatsapp/30 bg-whatsapp/10 px-6 py-4 transition-all duration-300 hover:bg-whatsapp hover:border-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp group-hover:text-white" />
            <span className="text-base font-medium text-whatsapp group-hover:text-white">WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:border-gold/30">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
          <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-xl tracking-wider text-white">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
