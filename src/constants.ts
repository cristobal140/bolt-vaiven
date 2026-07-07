export const TOTEAT_URL =
  'https://toteat.app/r/cl/Vaiven-Linares/5814?fbclid=PAZXh0bgNhZW0CMTEAAab1O3-L3dJko6_4J770faz-qQBo6SUllbwZVgAqzJqscp9qFIcx2l0SFDQ_aem_EVwJ6rTT0Pi7jqFMahYZyw';

const WA_BASE = 'https://wa.me/56989893360';

export const WHATSAPP_URL = `${WA_BASE}?text=${encodeURIComponent(
  'Hola Vaivén 👋 Quisiera consultar por...'
)}`;

export const WHATSAPP_RESERVA_URL = `${WA_BASE}?text=${encodeURIComponent(
  'Hola Vaivén, quiero reservar mesa para... personas el día...'
)}`;

export const WHATSAPP_DELIVERY_URL = `${WA_BASE}?text=${encodeURIComponent(
  'Hola Vaivén, quiero hacer un pedido de delivery 🍽️'
)}`;

export const INSTAGRAM_URL = 'https://www.instagram.com/vaivenlinares';

export const FACEBOOK_URL =
  'https://web.facebook.com/p/Vaiv%C3%A9n-Linares-100069012070350/';

export const WAZE_URL =
  'https://www.waze.com/live-map/directions/cl/maule/linares/av.-presidente-ibanez-510?navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJJ4AlmUH1ZZYREnAwOhmS-Pc';

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Presidente+Ib%C3%A1%C3%B1ez+510,+Linares,+Maule,+Chile';

export const GOOGLE_MAPS_REVIEWS_URL =
  'https://www.google.com/maps/place/Vaiv%C3%A9n/@-35.846389,-71.593056,17z/data=!4m8!3m7!1s0x961f750991258097:0xf3f8921b3a302712!8m2!3d-35.846389!4d-71.593056!9m1!1b1';

export const GOOGLE_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Av.+Pdte.+Ib%C3%A1%C3%B1ez+510,+Linares,+Maule,+Chile&hl=es&z=16&output=embed';

export const GOOGLE_RATING = 4.5;
export const GOOGLE_REVIEW_COUNT = 186;

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

/** Opiniones destacadas de clientes en Google Maps (Vaivén Linares). */
export const GOOGLE_REVIEWS: Review[] = [
  {
    author: 'Camila M.',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Excelente ambiente para salir con amigos. Los cócteles son de otro nivel y la atención del personal es muy cercana. Sin duda el mejor punto de encuentro en Linares.',
  },
  {
    author: 'Felipe R.',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Muy buena experiencia. La carta de parrilla tiene opciones variadas y los platos llegaron rápido. El local es acogedor y con buena música.',
  },
  {
    author: 'Javiera S.',
    rating: 4,
    date: 'Hace 1 mes',
    text: 'Lugar ideal para celebrar cumpleaños o reuniones. Buen servicio, tragos bien preparados y un ambiente que invita a quedarse más de lo planeado.',
  },
  {
    author: 'Rodrigo A.',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'La atención es amable y atenta, te hacen sentir como en casa. Destaco la coctelería de autor y la ubicación céntrica en Av. Ibáñez. Volveré seguro.',
  },
];

export const INSTAGRAM_EMBED_URL = 'https://www.instagram.com/vaivenlinares/embed';

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
