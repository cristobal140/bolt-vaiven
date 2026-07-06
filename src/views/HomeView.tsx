import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Instagram, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getOpenStatus } from '../utils/hours';
import {
  INSTAGRAM_URL,
  ADDRESS,
  PHONE_DISPLAY,
  PHONE,
  HOURS_TEXT,
  TOTEAT_URL,
} from '../constants';

const GALLERY = [
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3011225/pexels-photo-3011225.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2724770/pexels-photo-2724770.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

const IG_FEED = [
  'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5933/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3011225/pexels-photo-3011225.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
        {GALLERY.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 to-transparent" />

        {/* Slider controls */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass-dark border border-white/10 text-white/80 hover:text-gold hover:border-gold/40 transition-all"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass-dark border border-white/10 text-white/80 hover:text-gold hover:border-gold/40 transition-all"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {GALLERY.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? 'w-8 bg-gold' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                status.open
                  ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : 'bg-red-500/15 text-red-400 border border-red-500/30'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {status.label}
            </span>
            {status.nextChange && (
              <span className="text-xs text-muted">{status.nextChange}</span>
            )}
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white leading-none">
            VAIVÉN
          </h1>
          <p className="mt-2 text-sm uppercase tracking-mega text-gold font-medium">
            Food & Drinks
          </p>
          <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
            Alta coctelería y gastronomía urbana premium en el corazón de Linares.
          </p>
        </div>
      </section>

      {/* Quick CTAs */}
      <section className="px-6 py-10 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: 'Ver Carta', href: TOTEAT_URL },
            { label: 'Reservas', href: TOTEAT_URL },
            { label: 'Delivery', href: TOTEAT_URL },
          ].map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-800 px-6 py-5 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700"
            >
              <span className="font-display text-2xl tracking-wider text-white group-hover:text-gold transition-colors">
                {cta.label}
              </span>
              <ArrowRight className="h-5 w-5 text-muted group-hover:text-gold group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="px-6 py-10 sm:px-12 lg:px-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-mega text-gold mb-2">Ambiente</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-white">
              Nuestro Espacio
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {GALLERY.slice(0, 6).map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-[4/3]' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Hub */}
      <section className="px-6 py-10 sm:px-12 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-ink-800 p-6 sm:p-10">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark">
                <Instagram className="h-6 w-6 text-ink-900" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-mega text-gold">Síguenos</p>
                <h2 className="font-display text-2xl sm:text-3xl tracking-wider text-white">
                  @vaivenlinares
                </h2>
              </div>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink-900"
            >
              Ver más en Instagram
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {IG_FEED.map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors">
                  <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Core Info Bar */}
      <section className="px-6 py-10 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard icon={MapPin} title="Dirección" lines={[ADDRESS]} />
          <InfoCard
            icon={Clock}
            title="Horarios"
            lines={HOURS_TEXT.map((h) => `${h.days}: ${h.hours}`)}
          />
          <InfoCard
            icon={Phone}
            title="Teléfono"
            lines={[`Fijo: ${PHONE_DISPLAY.fijo}`, `Móvil: ${PHONE_DISPLAY.movil}`]}
            links={[`tel:${PHONE.fijo}`, `tel:${PHONE.movil}`]}
          />
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="px-6 pb-16 sm:px-12 lg:px-16">
        <div className="flex items-center justify-center gap-1 text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted leading-relaxed">
          "Un lugar con un ambiente increíble, tragos de autor y una atención que te hace sentir en casa. El punto de encuentro de Linares."
        </p>
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
              className="block text-sm text-white hover:text-gold transition-colors"
            >
              {line}
            </a>
          ) : (
            <p key={i} className="text-sm text-white">{line}</p>
          )
        )}
      </div>
    </div>
  );
}
