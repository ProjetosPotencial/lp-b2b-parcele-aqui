import type { Metadata } from 'next';
import { Inter, DM_Sans, Kufam } from 'next/font/google';
import './globals.css';

const kufam = Kufam({
  subsets: ['latin'],
  variable: '--font-kufam',
  display: 'swap',
  weight: ['400', '500', '700'],
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parceleaqui.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Parcele Aqui B2B | Destrave negociações imobiliárias com parcelamento no cartão',
  description:
    'Solução de parcelamento B2B para imobiliárias: receba à vista, ofereça em até 12x no cartão. Simples, rápido e 100% digital.',
  keywords: [
    'parcele aqui',
    'parcelamento b2b',
    'imobiliárias',
    'pagamento no cartão',
    'antecipação de recebíveis',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Parcele Aqui',
    title: 'Destrave negociações imobiliárias com parcelamento no cartão',
    description: 'Receba à vista, ofereça em até 12x. Simples, rápido e 100% digital.',
    images: [{ url: '/images/sections/hero-principal.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${kufam.variable} ${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
