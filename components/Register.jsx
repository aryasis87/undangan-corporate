'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Form registrasi peserta (data lokal/dummy).
export default function Register() {
  const { tickets } = config;
  const [form, setForm] = useState({ name: '', email: '', company: '', ticket: tickets[0] });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    // TODO: kirim ke backend/Firebase
    console.log('Register:', form);
    setDone(true);
  };

  const field = 'w-full rounded-xl border border-blush bg-cream px-4 py-3 text-sm outline-none focus:border-rose';

  return (
    <section id="daftar" className="bg-rose-deep px-5 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Registrasi</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Amankan Tiketmu</h2>
          <p className="mt-3 text-sm text-cream/70">Isi formulir di bawah untuk mendaftar sebagai peserta.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {done ? (
            <div className="rounded-2xl bg-cream p-8 text-center text-ink">
              <CheckCircle2 size={48} className="mx-auto text-rose" />
              <p className="mt-4 font-display text-xl font-bold">Terima kasih, {form.name}!</p>
              <p className="mt-1 text-sm text-muted">Konfirmasi pendaftaran akan dikirim ke {form.email}.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4 rounded-2xl bg-cream p-6 text-ink md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" value={form.name} onChange={handle} placeholder="Nama lengkap" className={field} required />
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="Email" className={field} required />
              </div>
              <input name="company" value={form.company} onChange={handle} placeholder="Perusahaan / Institusi" className={field} />
              <select name="ticket" value={form.ticket} onChange={handle} className={field}>
                {tickets.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <button type="submit" className="w-full rounded-full bg-rose py-3.5 text-sm font-semibold text-cream transition hover:bg-ink">
                Daftar Sekarang
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
