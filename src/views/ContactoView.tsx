import { MapPin, Clock, Mail, Phone, MessageCircle } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  HOURS_TEXT,
  WHATSAPP_URL,
} from '../constants';

export default function ContactoView() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="px-6 pt-12 pb-8 sm:px-12 lg:px-16 lg:pt-16">
        <p className="text-xs uppercase tracking-mega text-gold mb-3">Contacto</p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider gold-shimmer animate-shimmer leading-none">
          HABLEMOS
        </h1>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
      </section>

      {/* Contact grid */}
      <section className="px-6 pb-16 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Dirección */}
          <ContactCard icon={MapPin} title="Dirección">
            <p className="text-base text-white">{ADDRESS}</p>
          </ContactCard>

          {/* Horarios */}
          <ContactCard icon={Clock} title="Abierto">
            <div className="space-y-2">
              {HOURS_TEXT.map((h) => (
                <div key={h.days} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-sm text-muted">{h.days}</span>
                  <span className="text-sm text-white font-medium">{h.hours}</span>
                </div>
              ))}
              <p className="pt-1 text-xs text-muted/70">Lunes: Cerrado</p>
            </div>
          </ContactCard>

          {/* Correo */}
          <ContactCard icon={Mail} title="Correo">
            <a
              href={`mailto:${EMAIL}`}
              className="text-base text-white hover:text-gold transition-colors"
            >
              {EMAIL}
            </a>
          </ContactCard>

          {/* Teléfono */}
          <ContactCard icon={Phone} title="Teléfono">
            <div className="space-y-2">
              <a
                href={`tel:${PHONE.fijo}`}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-900/50 px-4 py-2.5 transition-all hover:border-gold/30 hover:bg-ink-900"
              >
                <span className="text-sm text-muted">Fijo</span>
                <span className="text-sm text-white font-medium group-hover:text-gold">
                  {PHONE_DISPLAY.fijo}
                </span>
              </a>
              <a
                href={`tel:${PHONE.movil}`}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-900/50 px-4 py-2.5 transition-all hover:border-gold/30 hover:bg-ink-900"
              >
                <span className="text-sm text-muted">Móvil</span>
                <span className="text-sm text-white font-medium">{PHONE_DISPLAY.movil}</span>
              </a>
            </div>
          </ContactCard>
        </div>

        {/* Quick action buttons */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={`tel:${PHONE.movil}`}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-800 px-6 py-4 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700"
          >
            <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="text-sm font-medium text-white">Llamar ahora</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-800 px-6 py-4 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700"
          >
            <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="text-sm font-medium text-white">Enviar correo</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-whatsapp/30 bg-whatsapp/10 px-6 py-4 transition-all duration-300 hover:bg-whatsapp hover:border-whatsapp"
          >
            <MessageCircle className="h-5 w-5 text-whatsapp group-hover:text-white" strokeWidth={1.5} />
            <span className="text-sm font-medium text-whatsapp group-hover:text-white">WhatsApp</span>
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
