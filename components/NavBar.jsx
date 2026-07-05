'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import config from '@/lib/data';

// Navbar sticky dengan menu mobile + tombol Daftar.
export default function NavBar() {
  const { brand, nav } = config;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-bold text-rose-deep">
          {brand.name}<span className="text-gold">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted transition hover:text-rose">
              {n.label}
            </a>
          ))}
          <a href="#daftar" className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-rose-deep">
            Daftar
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="text-ink md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-blush bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-blush">
                {n.label}
              </a>
            ))}
            <a href="#daftar" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-rose px-5 py-3 text-center text-sm font-semibold text-cream">
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
