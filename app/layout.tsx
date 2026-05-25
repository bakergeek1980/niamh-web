import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Niamh — Coach nutrition IA pour femmes 30–50',
  description: 'Le coach nutrition bienveillant pensé pour les femmes de 30 à 50 ans. Intelligence artificielle, base CIQUAL, suivi du cycle hormonal.',
  keywords: 'nutrition, coach IA, femmes, périménopause, CIQUAL, calories, santé',
  openGraph: {
    title: 'Niamh — Nourris ton éclat.',
    description: 'Coach nutrition IA bienveillant pour les femmes 30–50. Bientôt sur l\'App Store.',
    url: 'https://niamh.app',
    siteName: 'Niamh',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niamh — Nourris ton éclat.',
    description: 'Coach nutrition IA bienveillant pour les femmes 30–50.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${jakarta.variable} grain`}>
        {children}
      </body>
    </html>
  )
}
