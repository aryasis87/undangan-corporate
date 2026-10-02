import Reveal from './ui/Reveal';
import config from '@/lib/data';

const ukuran = {
  Platinum: 'h-20 w-44 md:h-24 md:w-52',
  Gold: 'h-16 w-36 md:h-20 md:w-44',
  Silver: 'h-14 w-28 md:h-16 md:w-36',
};

// Slot sponsor berjenjang. Contoh: kotak berlabel menggantikan logo asli.
export default function Sponsors() {
  const { sponsors } = config;
  return (
    <section className="bg-blush/40 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Didukung Oleh</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Sponsor &amp; Partner</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">Situs contoh: slot di bawah menunjukkan tata letak logo per tingkat sponsor.</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {Object.entries(sponsors).map(([tingkat, jumlah]) => (
            <Reveal key={tingkat}>
              <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">{tingkat}</h3>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-4">
                {Array.from({ length: jumlah }, (_, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-center rounded-xl border-2 border-dashed border-rose/30 bg-cream text-xs font-semibold uppercase tracking-wide text-muted ${ukuran[tingkat] || 'h-14 w-28'}`}
                  >
                    Logo {tingkat}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
