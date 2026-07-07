import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { getOpenStatus } from '../utils/hours';
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE,
  TOTEAT_URL,
  WHATSAPP_RESERVA_URL,
} from '../constants';
import HoursBlock from '../components/HoursBlock';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import ReviewsSection from '../components/ReviewsSection';
import InstagramFeed from '../components/InstagramFeed';
import WhatsAppIcon from '../components/WhatsAppIcon';

const GALLERY = [
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3011225/pexels-photo-3011225.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2724770/pexels-photo-2724770.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export default function HomeView() {
  const [status, setStatus] = useState(getOpenStatus());
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % GALLERY.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setSlide((s) => (s + 1) % GALLERY.length);
  const prev = () => setSlide((s) => (s - 1 + GALLERY.length) % GALLERY.length);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[280px] sm:min-h-[360px] sm:h-[50vh] lg:h-[55vh] lg:min-h-[400px] w-full overflow-hidden">
        {GALLERY.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`Ambiente Vaivén Linares ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 to-transparent" />

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full glass-dark border border-white/10 text-white/80 hover:text-gold hover:border-gold/40 transition-all sm:left-4"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full glass-dark border border-white/10 text-white/80 hover:text-gold hover:border-gold/40 transition-all sm:right-4"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4">
          {GALLERY.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? 'w-8 bg-gold' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 p-5 sm:p-8 lg:p-16 max-w-2xl">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all sm:px-4 ${
                status.open
                  ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : 'bg-red-500/15 text-red-400 border border-red-500/30'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {status.label}
            </span>
            {status.nextChange && (
              <span className="text-xs text-white/70">{status.nextChange}</span>
            )}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white leading-none">
            VAIVÉN
          </h1>
          <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-gold font-medium sm:tracking-mega">
            Food & Drinks
          </p>
          <p className="mt-3 max-w-md text-base text-white/80 leading-relaxed sm:mt-4">
            Alta coctelería y gastronomía urbana premium en el corazón de Linares.
          </p>

          {/* Hero CTAs — mobile-first */}
          <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap">
            <a
              href={WHATSAPP_RESERVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservar por WhatsApp
            </a>
            <a
              href={TOTEAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-ink-900"
            >
              Ver carta
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick CTAs */}
      <section className="px-5 py-8 sm:px-12 lg:px-16 sm:py-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { label: 'Ver Carta', href: TOTEAT_URL, external: true },
            { label: 'Reservas', href: TOTEAT_URL, external: true },
            {
              label: 'WhatsApp',
              href: WHATSAPP_RESERVA_URL,
              external: true,
              whatsapp: true,
            },
          ].map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 sm:px-6 sm:py-5 ${
                cta.whatsapp
                  ? 'border-whatsapp/30 bg-whatsapp/10 hover:bg-whatsapp hover:border-whatsapp'
                  : 'border-white/10 bg-ink-800 hover:border-gold/40 hover:bg-ink-700'
              }`}
            >
              <span
                className={`flex items-center gap-2 font-display text-xl tracking-wider transition-colors sm:text-2xl ${
                  cta.whatsapp
                    ? 'text-whatsapp group-hover:text-white'
                    : 'text-white group-hover:text-gold'
                }`}
              >
                {cta.whatsapp && <MessageCircle className="h-5 w-5" strokeWidth={1.5} />}
                {cta.label}
              </span>
              <ArrowRight
                className={`h-5 w-5 transition-all group-hover:translate-x-1 ${
                  cta.whatsapp ? 'text-whatsapp group-hover:text-white' : 'text-muted group-hover:text-gold'
                }`}
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="px-5 py-8 sm:px-12 lg:px-16 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2 sm:tracking-mega">Ambiente</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-white">
            Nuestro Espacio
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
          {GALLERY.slice(0, 6).map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-[4/3]' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Espacio Vaivén ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Location + Hours */}
      <section className="px-5 py-8 sm:px-12 lg:px-16 sm:py-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2 sm:tracking-mega">Ubicación</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-white">
            Encuéntranos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <GoogleMapEmbed height="md" />
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <p className="text-base text-white">{ADDRESS}</p>
            </div>
            <HoursBlock />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <InstagramFeed />

      {/* Google Reviews */}
      <ReviewsSection />

      {/* Contact quick info */}
      <section className="px-5 pb-8 sm:px-12 lg:px-16 sm:pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InfoCard
            icon={Phone}
            title="Teléfono"
            lines={[`Fijo: ${PHONE_DISPLAY.fijo}`, `Móvil: ${PHONE_DISPLAY.movil}`]}
            links={[`tel:${PHONE.fijo}`, `tel:${PHONE.movil}`]}
          />
          <InfoCard
            icon={MapPin}
            title="Dirección"
            lines={[ADDRESS]}
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  links,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  links?: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:border-gold/30">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
          <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
        </div>
        <h3 className="text-xs uppercase tracking-widest text-muted">{title}</h3>
      </div>
      <div className="space-y-1.5">
        {lines.map((line, i) =>
          links ? (
            <a
              key={i}
              href={links[i]}
              className="block text-base text-white hover:text-gold transition-colors"
            >
              {line}
            </a>
          ) : (
            <p key={i} className="text-base text-white">{line}</p>
          )
        )}
      </div>
    </div>
  );
}
