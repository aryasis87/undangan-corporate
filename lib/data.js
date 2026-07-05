// ============================================================
//  KONFIGURASI ACARA — Corporate (Conference Website)
//  Ubah seluruh isi situs acara dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'TechNusantara Summit 2026',
    description: 'Konferensi teknologi tahunan: 2 hari penuh insight, networking, dan inovasi.',
  },

  // -- Identitas acara --
  brand: {
    name: 'TN Summit',
    full: 'TechNusantara Summit 2026',
  },

  // -- Navigasi --
  nav: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Pembicara', href: '#pembicara' },
    { label: 'Lokasi', href: '#lokasi' },
  ],

  // -- Hero --
  hero: {
    badge: 'Konferensi Teknologi Tahunan',
    title: 'TechNusantara Summit 2026',
    subtitle: 'Dua hari penuh insight, inovasi, dan networking bersama para pemimpin industri teknologi.',
    dateLabel: '18 - 19 Desember 2026',
    venueLabel: 'JCC Senayan, Jakarta',
  },

  // -- Tanggal mulai (ISO) untuk countdown --
  mainDate: '2026-12-18T09:00:00+07:00',
  calendar: {
    name: 'TechNusantara Summit 2026',
    start: '2026-12-18T09:00:00+07:00',
    end: '2026-12-19T17:00:00+07:00',
  },

  // -- Statistik --
  stats: [
    { value: '2.000+', label: 'Peserta' },
    { value: '40+', label: 'Pembicara' },
    { value: '24', label: 'Sesi' },
    { value: '2', label: 'Hari' },
  ],

  // -- Tentang --
  about: {
    heading: 'Tentang Acara',
    body: 'TechNusantara Summit mempertemukan developer, founder, dan profesional teknologi dari seluruh Indonesia. Hadirilah keynote inspiratif, workshop praktis, dan sesi networking yang membuka peluang kolaborasi baru.',
    points: [
      'Keynote dari pemimpin industri global',
      'Workshop hands-on & studi kasus nyata',
      'Expo startup & sesi networking eksklusif',
    ],
  },

  // -- Agenda (rundown sesi) --
  agenda: [
    { time: '09.00', title: 'Registration & Welcome Coffee', speaker: '', track: 'Umum' },
    { time: '10.00', title: 'Keynote: The Future of AI in Indonesia', speaker: 'Dr. Ardian Wijaya', track: 'Main Stage' },
    { time: '11.30', title: 'Panel: Scaling Startups Sustainably', speaker: 'Rina Kusuma, dkk.', track: 'Main Stage' },
    { time: '13.00', title: 'Workshop: Cloud Native Architecture', speaker: 'Bayu Saputra', track: 'Track A' },
    { time: '15.00', title: 'Fireside Chat: Building Dev Culture', speaker: 'Maya Hartanti', track: 'Track B' },
    { time: '16.30', title: 'Networking & Startup Expo', speaker: '', track: 'Umum' },
  ],

  // -- Pembicara --
  speakers: [
    { name: 'Dr. Ardian Wijaya', role: 'Chief AI Scientist', org: 'NusaLabs', photo: 'https://placehold.co/400x400/1e1b4b/f8fafc.png?text=Speaker+1' },
    { name: 'Rina Kusuma', role: 'CEO & Founder', org: 'PayThink', photo: 'https://placehold.co/400x400/4f46e5/f8fafc.png?text=Speaker+2' },
    { name: 'Bayu Saputra', role: 'Principal Engineer', org: 'CloudGaruda', photo: 'https://placehold.co/400x400/06b6d4/0f172a.png?text=Speaker+3' },
    { name: 'Maya Hartanti', role: 'VP Engineering', org: 'TokoMaju', photo: 'https://placehold.co/400x400/1e1b4b/f8fafc.png?text=Speaker+4' },
  ],

  // -- Sponsor --
  sponsors: {
    Platinum: ['NusaLabs', 'CloudGaruda'],
    Gold: ['PayThink', 'TokoMaju', 'DataNusa'],
    Silver: ['DevID', 'StartHub', 'CodeCamp', 'ByteWorks'],
  },

  // -- Lokasi --
  location: {
    venue: 'Jakarta Convention Center (JCC)',
    address: 'Jl. Gatot Subroto, Senayan, Jakarta Pusat',
    mapEmbed: 'https://www.google.com/maps?q=Jakarta+Convention+Center&output=embed',
    mapLink: 'https://maps.google.com/?q=Jakarta+Convention+Center',
  },

  // -- Tipe tiket (untuk form registrasi) --
  tickets: ['Early Bird', 'Regular', 'VIP', 'Student'],

  // -- Footer --
  footer: {
    org: 'TechNusantara',
    email: 'hello@technusantara.id',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
    ],
  },
};

export default config;
