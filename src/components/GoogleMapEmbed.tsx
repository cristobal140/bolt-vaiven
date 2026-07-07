import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from '../constants';
import { ExternalLink } from 'lucide-react';

interface Props {
  title?: string;
  height?: 'sm' | 'md' | 'lg';
  showLink?: boolean;
}

const HEIGHTS = {
  sm: 'h-56 sm:h-64',
  md: 'h-64 sm:h-80',
  lg: 'h-72 sm:h-96',
};

export default function GoogleMapEmbed({
  title = 'Ubicación Vaivén Linares',
  height = 'md',
  showLink = true,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
      <iframe
        title={title}
        src={GOOGLE_MAPS_EMBED_URL}
        className={`w-full ${HEIGHTS[height]} border-0`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {showLink && (
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <p className="text-sm text-white/80">Av. Pdte. Ibáñez 510, Linares</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            Abrir en Maps
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      )}
    </div>
  );
}
