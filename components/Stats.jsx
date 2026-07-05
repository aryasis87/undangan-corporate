import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Bar statistik acara.
export default function Stats() {
  const { stats } = config;
  return (
    <section className="border-b border-blush bg-cream px-5 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="font-display text-3xl font-bold text-rose md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
