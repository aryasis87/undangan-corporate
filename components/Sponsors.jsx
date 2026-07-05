import Reveal from './ui/Reveal';
import config from '@/lib/data';

const tierStyle = {
  Platinum: 'text-xl md:text-2xl',
  Gold: 'text-lg md:text-xl',
  Silver: 'text-base md:text-lg',
};

// Sponsor berjenjang (logo sebagai teks placeholder).
export default function Sponsors() {
  const { sponsors } = config;
  return (
    <section className="bg-blush/40 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Didukung Oleh</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Sponsor &amp; Partner</h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {Object.entries(sponsors).map(([tier, list]) => (
            <Reveal key={tier}>
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">{tier}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {list.map((name) => (
                  <span key={name} className={`font-display font-bold text-rose-deep/70 ${tierStyle[tier] || 'text-base'}`}>
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
