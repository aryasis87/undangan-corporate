import { Clock, User } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Agenda / rundown sesi acara.
export default function Agenda() {
  const { agenda } = config;
  return (
    <section id="agenda" className="bg-blush/40 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Jadwal</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Agenda Acara</h2>
          <p className="mt-3 text-sm text-muted">Hari 1 — 18 Desember 2026</p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {agenda.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="flex flex-col gap-2 rounded-2xl border border-blush bg-cream p-5 sm:flex-row sm:items-center sm:gap-5">
                <div className="flex w-24 shrink-0 items-center gap-2 font-display text-lg font-bold text-rose">
                  <Clock size={16} /> {a.time}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-ink">{a.title}</h3>
                  {a.speaker && (
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted">
                      <User size={13} /> {a.speaker}
                    </p>
                  )}
                </div>
                <span className="shrink-0 self-start rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold sm:self-auto">
                  {a.track}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
