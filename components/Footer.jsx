import { Mail } from 'lucide-react';
import config from '@/lib/data';

// Footer korporat: brand, kontak, sosial, copyright.
export default function Footer() {
  const { brand, footer, nav } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 py-14 text-cream">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">{brand.name}<span className="text-gold">.</span></p>
            <p className="mt-2 max-w-xs text-sm text-cream/60">{brand.full}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream/80">Navigasi</p>
            <ul className="mt-3 space-y-2">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-sm text-cream/60 transition hover:text-gold">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream/80">Kontak</p>
            <a href={`mailto:${footer.email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-cream/60 transition hover:text-gold">
              <Mail size={14} /> {footer.email}
            </a>
            <div className="mt-4 flex gap-4">
              {footer.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-sm text-cream/60 transition hover:text-gold">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {year} {footer.org}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
