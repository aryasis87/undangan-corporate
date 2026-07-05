'use client';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight, CalendarPlus } from 'lucide-react';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';
import { googleCalendarUrl } from '@/lib/utils';

function Count({ value, label }) {
  return (
    <div className="rounded-xl bg-cream/10 px-3 py-2 text-center backdrop-blur">
      <div className="font-display text-2xl font-bold text-cream md:text-3xl">{String(value).padStart(2, '0')}</div>
      <div className="text-[10px] uppercase tracking-wide text-cream/60">{label}</div>
    </div>
  );
}

// Hero situs acara: judul, CTA daftar, info tanggal/lokasi, countdown.
export default function Hero() {
  const { hero, calendar, meta, location } = config;
  const { days, hours, minutes, seconds } = useCountdown(config.mainDate);
  const calUrl = googleCalendarUrl(calendar, { title: meta.title, location: `${location.venue}, ${location.address}` });

  return (
    <section id="top" className="hero-grid relative overflow-hidden bg-rose-deep px-5 pb-20 pt-32 text-cream md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold"
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          {hero.title}
        </motion.h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-cream/80 md:text-lg">{hero.subtitle}</p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/90">
          <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-gold" /> {hero.dateLabel}</span>
          <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-gold" /> {hero.venueLabel}</span>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#daftar" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:brightness-95">
            Daftar Sekarang <ArrowRight size={16} />
          </a>
          <a href={calUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10">
            <CalendarPlus size={16} /> Tambah ke Kalender
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-4 gap-3">
          <Count value={days} label="Hari" />
          <Count value={hours} label="Jam" />
          <Count value={minutes} label="Menit" />
          <Count value={seconds} label="Detik" />
        </div>
      </div>
    </section>
  );
}
