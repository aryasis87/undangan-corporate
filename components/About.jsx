import { Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Tentang acara.
export default function About() {
  const { about } = config;
  return (
    <section id="tentang" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Tentang</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">{about.heading}</h2>
          <p className="mt-5 leading-relaxed text-muted">{about.body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-4">
            {about.points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-blush bg-blush/40 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose text-cream">
                  <Check size={14} />
                </span>
                <span className="text-sm font-medium text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
