export const TOTEAT_URL =
  'https://toteat.app/r/cl/Vaiven-Linares/5814?fbclid=PAZXh0bgNhZW0CMTEAAab1O3-L3dJko6_4J770faz-qQBo6SUllbwZVgAqzJqscp9qFIcx2l0SFDQ_aem_EVwJ6rTT0Pi7jqFMahYZyw';

export const WHATSAPP_URL = 'https://wa.me/56989893360';

export const INSTAGRAM_URL = 'https://www.instagram.com/vaivenlinares';

export const FACEBOOK_URL =
  'https://web.facebook.com/p/Vaiv%C3%A9n-Linares-100069012070350/';

export const WAZE_URL =
  'https://www.waze.com/live-map/directions/cl/maule/linares/av.-presidente-ibanez-510?navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJJ4AlmUH1ZZYREnAwOhmS-Pc';

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Presidente+Ib%C3%A1%C3%B1ez+510,+Linares,+Maule,+Chile';

export const ADDRESS = 'Av. Pdte. Ibáñez 510, Linares, Maule';

export const EMAIL = 'vaivenlinares@gmail.com';

export const PHONE = {
  fijo: '+56732326603',
  movil: '+56989893360',
};

export const PHONE_DISPLAY = {
  fijo: '+56 73 2326603',
  movil: '+56 9 8989 3360',
};

// Schedule: day 0 (Sun) .. 6 (Sat). open/close in minutes from midnight.
// null = closed. close past midnight = +2400 (next day handled in isOpen).
export const SCHEDULE: Record<number, { open: number; close: number } | null> = {
  0: { open: 750, close: 1020 }, // Sunday 12:30–17:00
  1: null, // Monday closed
  2: { open: 750, close: 60 }, // Tue 12:30–01:00 (+24h)
  3: { open: 750, close: 60 }, // Wed 12:30–01:00
  4: { open: 750, close: 60 }, // Thu 12:30–01:00
  5: { open: 750, close: 120 }, // Fri 12:30–02:00
  6: { open: 750, close: 120 }, // Sat 12:30–02:00
};

export const HOURS_TEXT = [
  { days: 'Martes a Jueves', hours: '12:30 a 01:00 Hrs' },
  { days: 'Viernes y Sábado', hours: '12:30 a 02:00 Hrs' },
  { days: 'Domingo', hours: '12:30 a 17:00 Hrs' },
];

export type ViewId =
  | 'home'
  | 'quienes'
  | 'carta'
  | 'reservas'
  | 'delivery'
  | 'como-llegar'
  | 'contacto';

export const NAV_ITEMS: {
  id: ViewId;
  label: string;
  external?: boolean;
}[] = [
  { id: 'home', label: 'Home' },
  { id: 'quienes', label: 'Quiénes Somos' },
  { id: 'carta', label: 'Carta', external: true },
  { id: 'reservas', label: 'Reservas', external: true },
  { id: 'delivery', label: 'Delivery', external: true },
  { id: 'como-llegar', label: 'Cómo Llegar' },
  { id: 'contacto', label: 'Contacto' },
];
