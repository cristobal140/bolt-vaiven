import { Facebook, Quote, ArrowRight } from 'lucide-react';
import { FACEBOOK_URL } from '../constants';

export default function QuienesView() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2724770/pexels-photo-2724770.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" />
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-mega text-gold mb-3">Nuestra Historia</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white leading-none">
            La Experiencia Vaivén
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <Quote className="h-10 w-10 text-gold/40" strokeWidth={1} />
          </div>
          <p className="text-center text-lg sm:text-xl leading-relaxed text-white/90 text-balance">
            Nacido en el corazón de Linares, <span className="gold-gradient-text font-semibold">Vaivén</span> es mucho más que un restobar; es un punto de encuentro donde la alta coctelería, la gastronomía urbana premium y el buen ambiente se fusionan.
          </p>
          <p className="mt-6 text-center text-lg sm:text-xl leading-relaxed text-white/90 text-balance">
            Nos apasiona crear momentos memorables, combinando un diseño industrial sofisticado con la calidez de nuestra atención local. Ven a vivir el <span className="gold-gradient-text font-semibold">vaivén</span> de sabores, música y buena compañía.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: 'Coctelería de Autor', desc: 'Tragos únicos creados por nuestros bartenders, con insumos locales y técnica premium.' },
            { title: 'Gastronomía Urbana', desc: 'Una carta que mezcla lo clásico con lo contemporáneo, pensada para compartir.' },
            { title: 'Ambiente & Música', desc: 'Diseño industrial, iluminación cuidada y la mejor selección musical de Linares.' },
          ].map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-ink-700"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gold" />
              <h3 className="mb-2 font-display text-xl tracking-wide text-white">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facebook CTA */}
      <section className="px-6 py-12 sm:px-12 lg:px-16">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-12 transition-all duration-300 hover:border-gold/30"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition-opacity group-hover:bg-blue-600/20" />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 border border-blue-600/30">
                <Facebook className="h-7 w-7 text-blue-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-mega text-gold mb-1">Síguenos</p>
                <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-white">
                  Vaivén Linares en Facebook
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold transition-all group-hover:bg-gold group-hover:text-ink-900">
              Visitar página
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </span>
          </div>
        </a>
      </section>
    </div>
  );
}
