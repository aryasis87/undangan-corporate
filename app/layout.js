import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import config from '@/lib/data';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"Event","name":"TechNusantara Summit 2026","description":"Konferensi teknologi tahunan"};

export const metadata = {
  metadataBase: new URL("https://corporate.pintuweb.com"),
  title: "Undangan Acara Korporat Digital — TechNusantara Summit 2026",
  description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
  applicationName: "Undangan Digital",
  keywords: ["undangan acara perusahaan", "undangan konferensi digital", "undangan event korporat", "undangan seminar"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://corporate.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://corporate.pintuweb.com",
    siteName: "Undangan Digital",
    title: "Undangan Acara Korporat Digital — TechNusantara Summit 2026",
    description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Acara Korporat Digital — TechNusantara Summit 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Acara Korporat Digital — TechNusantara Summit 2026",
    description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#1e1b4b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
