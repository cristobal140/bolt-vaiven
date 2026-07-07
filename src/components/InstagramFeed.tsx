import { useEffect } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_EMBED_URL } from '../constants';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  useEffect(() => {
    const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, []);

  return (
    <section className="px-6 py-10 sm:px-12 lg:px-16">
      <div className="rounded-3xl border border-white/10 bg-ink-800 p-6 sm:p-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
            Seguir en Instagram
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </div>

        {/* Official Instagram profile embed */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
          <iframe
            title="Instagram @vaivenlinares"
            src={INSTAGRAM_EMBED_URL}
            className="w-full min-h-[480px] border-0"
            loading="lazy"
            scrolling="no"
            allowTransparency
          />
        </div>

        <p className="mt-4 text-center text-sm text-muted">
          Eventos, promociones y el día a día en Vaivén — directo desde Instagram.
        </p>
      </div>
    </section>
  );
}
