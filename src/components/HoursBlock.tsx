import { Clock } from 'lucide-react';
import { HOURS_TEXT } from '../constants';

interface Props {
  compact?: boolean;
}

export default function HoursBlock({ compact = false }: Props) {
  return (
    <div className={compact ? 'space-y-2' : 'space-y-3'}>
      {!compact && (
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
            <Clock className="h-5 w-5 text-gold" strokeWidth={1.5} />
          </div>
          <h3 className="text-xs uppercase tracking-widest text-muted">Horarios</h3>
        </div>
      )}
      <div className="space-y-2">
        {HOURS_TEXT.map((h) => (
          <div
            key={h.days}
            className={`flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between ${
              compact ? '' : 'rounded-lg border border-white/5 bg-ink-900/40 px-4 py-2.5'
            }`}
          >
            <span className="text-sm text-white/80">{h.days}</span>
            <span className="text-sm font-medium text-white">{h.hours}</span>
          </div>
        ))}
        <p className="text-sm text-muted">Lunes: Cerrado</p>
      </div>
    </div>
  );
}
