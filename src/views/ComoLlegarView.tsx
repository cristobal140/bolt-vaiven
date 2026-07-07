import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { GOOGLE_MAPS_URL, WAZE_URL, ADDRESS } from '../constants';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import HoursBlock from '../components/HoursBlock';

export default function ComoLlegarView() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[30vh] min-h-[220px] sm:h-[35vh] sm:min-h-[260px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cómo llegar a Vaivén Linares"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        <div className="absolute bottom-0 left-0 p-5 sm:p-8 lg:p-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2 sm:tracking-mega">Ubicación</p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-wider text-white leading-none">
            Cómo Llegar
          </h1>
          <p className="mt-2 flex items-center gap-2 text-base text-white/80 sm:mt-3">
            <MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            {ADDRESS}
          </p>
        </div>
      </section>

      {/* Map embed */}
      <section className="px-5 py-8 sm:px-12 lg:px-16 sm:py-10">
        <GoogleMapEmbed height="lg" />
      </section>

      {/* Address + hours */}
      <section className="px-5 py-4 sm:px-12 lg:px-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 text-center sm:p-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
              <Compass className="h-7 w-7 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Dirección</p>
            <p className="text-lg text-white">{ADDRESS}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-8">
            <HoursBlock />
          </div>
        </div>
      </section>

      {/* Routing cards */}
      <section className="px-5 pb-20 sm:px-12 lg:px-16 sm:pb-16">
        <p className="mb-5 text-center text-base text-white/80">Elige tu app de navegación</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl mx-auto sm:gap-5">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-7 sm:p-10 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700 hover:-translate-y-1"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:bg-gold/10" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark transition-transform duration-300 group-hover:scale-110">
              <MapPin className="h-8 w-8 text-ink-900" strokeWidth={1.5} />
            </div>
            <div className="relative text-center">
              <h3 className="font-display text-xl tracking-wider text-white group-hover:text-gold transition-colors sm:text-2xl">
                Abrir en Google Maps
              </h3>
              <p className="mt-1 text-sm text-muted">Navegación con Google</p>
            </div>
            <ExternalLink className="relative h-4 w-4 text-muted group-hover:text-gold transition-colors" strokeWidth={1.5} />
          </a>

          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-7 sm:p-10 transition-all duration-300 hover:border-gold/40 hover:bg-ink-700 hover:-translate-y-1"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl transition-opacity group-hover:bg-cyan-500/10" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 transition-transform duration-300 group-hover:scale-110">
              <Navigation className="h-8 w-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="relative text-center">
              <h3 className="font-display text-xl tracking-wider text-white group-hover:text-gold transition-colors sm:text-2xl">
                Abrir en Waze
              </h3>
              <p className="mt-1 text-sm text-muted">Navegación en tiempo real</p>
            </div>
            <ExternalLink className="relative h-4 w-4 text-muted group-hover:text-gold transition-colors" strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
