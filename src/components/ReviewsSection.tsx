import { Star, ExternalLink } from 'lucide-react';
import {
  GOOGLE_REVIEWS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_MAPS_REVIEWS_URL,
} from '../constants';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'text-gold' : 'text-white/20'}`}
          fill={i <= rating ? 'currentColor' : 'none'}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="px-6 py-10 sm:px-12 lg:px-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-mega text-gold mb-2">Opiniones</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-white">
            Lo que dicen en Google
          </h2>
        </div>
        <a
          href={GOOGLE_MAPS_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink-900"
        >
          Ver todas las reseñas
          <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>

      {/* Aggregate score */}
      <div className="mb-8 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-ink-800 p-6 sm:flex-row sm:justify-center sm:gap-8">
        <div className="text-center">
          <p className="font-display text-6xl tracking-wider text-gold leading-none">
            {GOOGLE_RATING}
          </p>
          <div className="mt-2 flex justify-center">
            <StarRow rating={Math.round(GOOGLE_RATING)} />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-base font-medium text-white">
            {GOOGLE_REVIEW_COUNT}+ opiniones en Google Maps
          </p>
          <p className="mt-1 text-sm text-muted">
            Destacan el ambiente, la coctelería y la atención del equipo.
          </p>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {GOOGLE_REVIEWS.map((review) => (
          <article
            key={review.author}
            className="flex flex-col rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:border-gold/30"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{review.author}</p>
                <p className="text-xs text-muted">{review.date}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted">
                Google
              </span>
            </div>
            <StarRow rating={review.rating} />
            <p className="mt-3 flex-1 text-base leading-relaxed text-white/85">
              "{review.text}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
