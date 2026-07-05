import { MapPin, Navigation } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Lokasi venue + peta.
export default function LocationSection() {
  const { location } = config;
  return (
    <section id="lokasi" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Venue</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">{location.venue}</h2>
          <p className="mt-4 inline-flex items-start gap-2 text-muted">
            <MapPin size={18} className="mt-0.5 shrink-0 text-rose" /> {location.address}
          </p>
          <div className="mt-6">
            <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rose-deep">
              <Navigation size={16} /> Petunjuk Arah
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-blush shadow-sm">
            <iframe
              src={location.mapEmbed}
              title="Peta lokasi acara"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
