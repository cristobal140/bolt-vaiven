import { SCHEDULE } from '../constants';

export function getOpenStatus(): { open: boolean; label: string; nextChange?: string } {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  const today = SCHEDULE[day];
  if (today) {
    const close = today.close < today.open ? today.close + 1440 : today.close;
    if (minutes >= today.open && minutes < close) {
      return { open: true, label: '¡Abierto ahora!' };
    }
  }

  // Check if we're in the early-morning extension of yesterday's schedule
  const yesterday = SCHEDULE[(day + 6) % 7];
  if (yesterday && yesterday.close < yesterday.open) {
    if (minutes < yesterday.close) {
      return { open: true, label: '¡Abierto ahora!' };
    }
  }

  // Find next opening
  for (let i = 0; i < 7; i++) {
    const checkDay = (day + i) % 7;
    const sched = SCHEDULE[checkDay];
    if (sched) {
      const dayLabel = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][checkDay];
      if (i === 0 && minutes < sched.open) {
        return { open: false, label: 'Cerrado', nextChange: `Abre hoy ${formatTime(sched.open)}` };
      }
      if (i > 0) {
        return { open: false, label: 'Cerrado', nextChange: `Abre ${dayLabel} ${formatTime(sched.open)}` };
      }
    }
  }

  return { open: false, label: 'Cerrado' };
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
