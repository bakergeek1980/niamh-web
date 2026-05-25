'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

// ─── Translations ────────────────────────────────────────────────────────────

const T = {
  fr: {
    nav: { features: 'Fonctionnalités', pricing: 'Tarifs', cta: 'Me prévenir' },
    hero: {
      badge: '✦ Bientôt sur l\'App Store',
      h1a: 'Nourris',
      h1b: 'ton éclat.',
      sub: 'Le coach nutrition bienveillant pensé pour les femmes de 30 à 50 ans. Intelligence artificielle, base CIQUAL et suivi du cycle hormonal — tout dans ta poche.',
      placeholder: 'ton@email.fr',
      cta: 'Me prévenir à la sortie →',
      note: 'Gratuit · Aucun spam · Désabonnement en un clic',
    },
    features: {
      label: 'Fonctionnalités',
      title: 'Tout ce dont tu as besoin,\nrien de superflu.',
      items: [
        { icon: '✦', title: 'Coach IA Niamh', desc: 'Niamh te connaît. Elle adapte ses conseils à ton cycle, ton sommeil, tes objectifs et ta façon de manger — en temps réel.' },
        { icon: '◉', title: 'Photo & scan', desc: 'Prends en photo ton assiette ou scanne un code-barres. Niamh identifie les aliments et calcule tes macros en quelques secondes.' },
        { icon: '◈', title: 'Base CIQUAL', desc: 'Plus de 3 000 aliments issus de la base officielle Anses-CIQUAL — les données nutritionnelles les plus fiables du marché français.' },
        { icon: '◎', title: 'Cycle & hormones', desc: 'Adapte ta nutrition aux phases de ton cycle. En périménopause, Niamh ajuste automatiquement tes besoins en protéines, calcium et phyto-œstrogènes.' },
        { icon: '◇', title: 'Rapports hebdos', desc: 'Un bilan détaillé chaque semaine : tendances, points forts, axes d\'amélioration. Rédigé par Niamh, personnalisé pour toi.' },
        { icon: '◻', title: 'Privacy-first', desc: 'Données hébergées en Europe. Aucune publicité, aucune revente. Conforme RGPD. Tes données t\'appartiennent, point.' },
      ],
    },
    peri: {
      label: 'Pour les 40+',
      title: 'La nutrition qui comprend\nton corps qui change.',
      desc: 'La périménopause modifie tes besoins nutritionnels en profondeur — mais peu d\'apps le savent. Niamh intègre nativement ces besoins spécifiques : apport protéique renforcé, calcium, vitamine D, phyto-œstrogènes. Pas un module en option. C\'est le cœur de l\'app.',
      stats: [
        { n: '1 800+', label: 'femmes en liste d\'attente' },
        { n: '3 000+', label: 'aliments CIQUAL indexés' },
        { n: '40–50', label: 'ans, la tranche la moins bien servie par les apps' },
      ],
    },
    pricing: {
      label: 'Tarifs',
      title: 'Commence gratuitement,\névolue à ton rythme.',
      plans: [
        {
          name: 'Gratuit',
          price: '0€',
          period: 'pour toujours',
          desc: 'Pour découvrir Niamh',
          features: ['Suivi calorique quotidien', 'Base CIQUAL complète', 'Historique 30 jours', 'Repas favoris'],
          cta: 'Commencer gratuitement',
          featured: false,
        },
        {
          name: 'Premium',
          price: '5,99€',
          period: 'par mois',
          annual: '49,99€/an (−30%)',
          desc: 'Le vrai coach nutrition',
          features: ['Tout du plan gratuit', 'Coach IA Niamh illimité', 'Analyse photo de repas', 'Suivi du cycle hormonal', 'Recettes générées par IA', 'Rapports hebdomadaires'],
          cta: 'Choisir Premium',
          featured: true,
        },
        {
          name: 'Premium+',
          price: '9,99€',
          period: 'par mois',
          annual: '79,99€/an (−33%)',
          desc: 'Pour aller plus loin',
          features: ['Tout de Premium', 'Analyses nutritionnelles avancées', 'Export données santé', 'Support prioritaire', 'Accès bêta aux nouvelles features'],
          cta: 'Choisir Premium+',
          featured: false,
        },
      ],
    },
    trust: {
      items: [
        { icon: '🔒', title: 'Données en Europe', desc: 'Hébergement Supabase EU. PostHog EU Cloud. Aucune donnée ne quitte l\'Union Européenne.' },
        { icon: '🚫', title: 'Zéro publicité', desc: 'Pas de tracking publicitaire. Pas de revente de données. Le modèle économique, c\'est l\'abonnement — pas toi.' },
        { icon: '✓', title: 'Conforme RGPD', desc: 'Consentement granulaire, droit à l\'oubli, export de tes données en un tap.' },
      ],
    },
    footer: {
      tagline: 'Nourris ton éclat.',
      links: [
        { label: 'Fonctionnalités', href: '#features' },
        { label: 'Tarifs', href: '#pricing' },
        { label: 'Confidentialité', href: '/privacy' },
        { label: 'Contact', href: 'mailto:contact@niamh.app' },
      ],
      copy: '© 2026 Niamh. Fait avec soin, en France.',
    },
  },
  en: {
    nav: { features: 'Features', pricing: 'Pricing', cta: 'Get notified' },
    hero: {
      badge: '✦ Coming soon to the App Store',
      h1a: 'Nourish',
      h1b: 'your radiance.',
      sub: 'The caring nutrition coach designed for women aged 30 to 50. Artificial intelligence, CIQUAL food database and hormonal cycle tracking — all in your pocket.',
      placeholder: 'your@email.com',
      cta: 'Notify me at launch →',
      note: 'Free · No spam · Unsubscribe anytime',
    },
    features: {
      label: 'Features',
      title: 'Everything you need,\nnothing you don\'t.',
      items: [
        { icon: '✦', title: 'Niamh AI Coach', desc: 'Niamh knows you. She adapts her advice to your cycle, sleep, goals and eating habits — in real time.' },
        { icon: '◉', title: 'Photo & scan', desc: 'Photograph your plate or scan a barcode. Niamh identifies foods and calculates your macros in seconds.' },
        { icon: '◈', title: 'CIQUAL Database', desc: 'Over 3,000 foods from the official Anses-CIQUAL database — the most reliable nutritional data for the French market.' },
        { icon: '◎', title: 'Cycle & hormones', desc: 'Adapt your nutrition to your cycle phases. In perimenopause, Niamh automatically adjusts your protein, calcium and phytoestrogen needs.' },
        { icon: '◇', title: 'Weekly reports', desc: 'A detailed review every week: trends, strengths, areas for improvement. Written by Niamh, personalised for you.' },
        { icon: '◻', title: 'Privacy-first', desc: 'Data hosted in Europe. No ads, no data selling. GDPR compliant. Your data is yours, period.' },
      ],
    },
    peri: {
      label: 'For women 40+',
      title: 'Nutrition that understands\nyour changing body.',
      desc: 'Perimenopause deeply changes your nutritional needs — but most apps don\'t know that. Niamh natively integrates these specific needs: increased protein intake, calcium, vitamin D, phytoestrogens. Not an optional module. It\'s the heart of the app.',
      stats: [
        { n: '1,800+', label: 'women on the waitlist' },
        { n: '3,000+', label: 'CIQUAL foods indexed' },
        { n: '40–50', label: 'the age group least served by nutrition apps' },
      ],
    },
    pricing: {
      label: 'Pricing',
      title: 'Start for free,\ngrow at your pace.',
      plans: [
        {
          name: 'Free',
          price: '€0',
          period: 'forever',
          desc: 'Discover Niamh',
          features: ['Daily calorie tracking', 'Full CIQUAL database', '30-day history', 'Favourite meals'],
          cta: 'Start for free',
          featured: false,
        },
        {
          name: 'Premium',
          price: '€5.99',
          period: 'per month',
          annual: '€49.99/year (−30%)',
          desc: 'Your real nutrition coach',
          features: ['Everything in Free', 'Unlimited Niamh AI coach', 'Meal photo analysis', 'Hormonal cycle tracking', 'AI-generated recipes', 'Weekly reports'],
          cta: 'Choose Premium',
          featured: true,
        },
        {
          name: 'Premium+',
          price: '€9.99',
          period: 'per month',
          annual: '€79.99/year (−33%)',
          desc: 'Go further',
          features: ['Everything in Premium', 'Advanced nutrition analytics', 'Health data export', 'Priority support', 'Beta access to new features'],
          cta: 'Choose Premium+',
          featured: false,
        },
      ],
    },
    trust: {
      items: [
        { icon: '🔒', title: 'Data in Europe', desc: 'Supabase EU hosting. PostHog EU Cloud. No data leaves the European Union.' },
        { icon: '🚫', title: 'Zero advertising', desc: 'No ad tracking. No data selling. The business model is the subscription — not you.' },
        { icon: '✓', title: 'GDPR compliant', desc: 'Granular consent, right to erasure, data export in one tap.' },
      ],
    },
    footer: {
      tagline: 'Nourish your radiance.',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Contact', href: 'mailto:contact@niamh.app' },
      ],
      copy: '© 2026 Niamh. Made with care, in France.',
    },
  },
}

type Lang = 'fr' | 'en'

// ─── Fade-in wrapper ─────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="relative w-[260px] mx-auto select-none" style={{ animation: 'float 7s ease-in-out infinite' }}>
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl opacity-30 rounded-full" style={{ background: 'radial-gradient(ellipse, #E05780 0%, #FF8FAB 50%, transparent 80%)', transform: 'scale(1.3) translateY(10%)' }} />

      {/* Phone frame */}
      <div className="relative rounded-[44px] overflow-hidden border-[6px] border-warm-dark shadow-2xl"
        style={{ background: '#1C0E0A', aspectRatio: '9/19.5' }}>

        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-warm-dark rounded-full z-10" />

        {/* Screen */}
        <div className="absolute inset-0 flex flex-col" style={{ background: '#FDF6EE' }}>

          {/* App header */}
          <div className="px-4 pt-12 pb-3 flex items-center justify-between" style={{ borderBottom: '1px solid #EDE0D4' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: '#1C0E0A', lineHeight: 1 }}>Niamh</p>
              <p style={{ fontSize: 10, color: '#8C7B73', marginTop: 1 }}>Bonjour, Sophie ✦</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)' }}>
              <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>S</span>
            </div>
          </div>

          {/* Calorie ring */}
          <div className="flex flex-col items-center py-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#EDE0D4" strokeWidth="7" />
                <circle cx="40" cy="40" r="34" fill="none" stroke="url(#rg)" strokeWidth="7"
                  strokeDasharray={`${2 * Math.PI * 34 * 0.72} ${2 * Math.PI * 34 * 0.28}`}
                  strokeLinecap="round" />
                <defs>
                  <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E05780" />
                    <stop offset="100%" stopColor="#FF8FAB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span style={{ fontSize: 14, fontWeight: 800, color: '#E05780', lineHeight: 1 }}>1 248</span>
                <span style={{ fontSize: 8, color: '#8C7B73' }}>/ 1 700</span>
              </div>
            </div>
            <p style={{ fontSize: 9, color: '#8C7B73', marginTop: 4 }}>kcal aujourd'hui</p>
          </div>

          {/* Macros row */}
          <div className="flex gap-2 px-4 mb-3">
            {[{ c: '#10B981', l: 'Protéines', v: '64g' }, { c: '#F59E0B', l: 'Glucides', v: '142g' }, { c: '#8B5CF6', l: 'Lipides', v: '38g' }].map(m => (
              <div key={m.l} className="flex-1 rounded-xl p-2 text-center" style={{ background: '#FFF5EE' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: m.c }}>{m.v}</p>
                <p style={{ fontSize: 7, color: '#8C7B73' }}>{m.l}</p>
              </div>
            ))}
          </div>

          {/* Chat bubble */}
          <div className="mx-3 rounded-2xl p-3" style={{ background: '#FFF0F5', border: '1px solid #F9D0DC' }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)' }}>
                <span style={{ color: 'white', fontSize: 8, fontWeight: 700 }}>N</span>
              </div>
              <span style={{ fontSize: 9, fontWeight: 600, color: '#E05780' }}>Niamh</span>
            </div>
            <p style={{ fontSize: 8.5, color: '#5C3D2E', lineHeight: 1.5 }}>
              Tu es à J14 de ton cycle — phase ovulatoire. C'est le bon moment pour augmenter les protéines. Ajoute du poulet ou du tofu ce midi 🌿
            </p>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-2 py-2" style={{ borderTop: '1px solid #EDE0D4', background: '#FDF6EE' }}>
            {['🏠', '🍽️', '✨', '📊', '👤'].map((ic, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span style={{ fontSize: 14 }}>{ic}</span>
                {i === 0 && <div className="w-1 h-1 rounded-full" style={{ background: '#E05780' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>('fr')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const t = T[lang]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#FDF6EE' }}>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'rgba(253,246,238,0.85)', borderBottom: '1px solid rgba(237,224,212,0.6)' }}>

        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)' }}>
            <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>N</span>
          </div>
          <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C0E0A' }}>Niamh</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium transition-colors" style={{ color: '#8C7B73' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1C0E0A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8C7B73')}>
            {t.nav.features}
          </a>
          <a href="#pricing" className="text-sm font-medium transition-colors" style={{ color: '#8C7B73' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1C0E0A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8C7B73')}>
            {t.nav.pricing}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-full p-0.5 text-xs font-medium" style={{ background: '#EDE0D4' }}>
            {(['fr', 'en'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className="px-3 py-1 rounded-full transition-all uppercase tracking-wide"
                style={{ background: lang === l ? '#1C0E0A' : 'transparent', color: lang === l ? '#FDF6EE' : '#8C7B73' }}>
                {l}
              </button>
            ))}
          </div>
          <a href="#notify"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all"
            style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)', color: 'white' }}>
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #E05780, transparent)' }} />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #C47B5A, transparent)' }} />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #7A9E7E, transparent)' }} />

        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
                style={{ background: '#FFF0F5', color: '#E05780', border: '1px solid #F9D0DC' }}>
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(64px, 9vw, 108px)', fontWeight: 600, color: '#1C0E0A', letterSpacing: '-0.02em' }}>
              {t.hero.h1a}<br />
              <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E05780, #C47B5A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t.hero.h1b}
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: '#5C3D2E' }}>
              {t.hero.sub}
            </motion.p>

            <motion.div id="notify" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              {submitted ? (
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ background: '#FFF0F5', border: '1px solid #F9D0DC' }}>
                  <span style={{ fontSize: 20 }}>✦</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#E05780' }}>
                      {lang === 'fr' ? 'Parfait, tu es sur la liste !' : 'You\'re on the list!'}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#8C7B73' }}>
                      {lang === 'fr' ? 'On te prévient dès la sortie sur l\'App Store.' : 'We\'ll notify you when Niamh launches on the App Store.'}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder={t.hero.placeholder} required
                    className="flex-1 px-5 py-3.5 rounded-2xl text-sm outline-none transition-all"
                    style={{ background: 'white', border: '1.5px solid #EDE0D4', color: '#1C0E0A', fontFamily: 'var(--font-jakarta)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E05780')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#EDE0D4')}
                  />
                  <button type="submit"
                    className="px-6 py-3.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all"
                    style={{ background: 'linear-gradient(135deg, #E05780, #C47B5A)', color: 'white' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                    {t.hero.cta}
                  </button>
                </form>
              )}
              <p className="text-xs mt-3" style={{ color: '#8C7B73' }}>{t.hero.note}</p>
            </motion.div>
          </div>

          {/* Right — phone */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </motion.div>
        </div>

        {/* Organic curve bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ fill: '#F5E9D8', height: 60 }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="relative py-24 px-6" style={{ background: '#F5E9D8' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C47B5A' }}>
              {t.features.label}
            </span>
            <h2 className="leading-tight" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, color: '#1C0E0A', whiteSpace: 'pre-line' }}>
              {t.features.title}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.items.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group h-full p-7 rounded-3xl transition-all duration-300 cursor-default"
                  style={{ background: '#FDF6EE', border: '1.5px solid #EDE0D4' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E05780'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(224,87,128,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#EDE0D4'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #FFF0F5, #F9D0DC)' }}>
                    <span style={{ fontSize: 18, color: '#E05780' }}>{f.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, color: '#1C0E0A' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8C7B73' }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Curve */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ fill: '#FDF6EE', height: 60 }}>
            <path d="M0,20 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Périménopause ────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: '#FDF6EE' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #7A9E7E, transparent)', transform: 'translate(30%, -30%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#7A9E7E' }}>
              {t.peri.label}
            </span>
            <h2 className="mb-6 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 600, color: '#1C0E0A', whiteSpace: 'pre-line' }}>
              {t.peri.title}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#5C3D2E', maxWidth: 480 }}>
              {t.peri.desc}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5">
            {t.peri.stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6 p-6 rounded-3xl" style={{ background: '#F5E9D8', border: '1.5px solid #EDE0D4' }}>
                  <div className="shrink-0">
                    <p className="leading-none font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 48, color: '#E05780' }}>{s.n}</p>
                  </div>
                  <p className="text-sm leading-snug" style={{ color: '#5C3D2E' }}>{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Curve */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ fill: '#F5E9D8', height: 60 }}>
            <path d="M0,60 C480,0 960,80 1440,20 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="relative py-24 px-6" style={{ background: '#F5E9D8' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C47B5A' }}>
              {t.pricing.label}
            </span>
            <h2 className="leading-tight" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, color: '#1C0E0A', whiteSpace: 'pre-line' }}>
              {t.pricing.title}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {t.pricing.plans.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative h-full flex flex-col p-8 rounded-3xl transition-all duration-300"
                  style={{
                    background: p.featured ? 'linear-gradient(155deg, #1C0E0A 0%, #3D1A14 100%)' : '#FDF6EE',
                    border: p.featured ? '1.5px solid #E05780' : '1.5px solid #EDE0D4',
                    transform: p.featured ? 'scale(1.04)' : 'scale(1)',
                    boxShadow: p.featured ? '0 30px 80px rgba(224,87,128,0.25)' : 'none',
                  }}>

                  {p.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)', color: 'white' }}>
                      ✦ {lang === 'fr' ? 'Le plus populaire' : 'Most popular'}
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-1" style={{ color: p.featured ? '#FF8FAB' : '#C47B5A' }}>{p.name}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 700, color: p.featured ? 'white' : '#1C0E0A', lineHeight: 1 }}>{p.price}</span>
                      <span className="text-sm" style={{ color: p.featured ? '#8C7B73' : '#8C7B73' }}>/{p.period}</span>
                    </div>
                    {'annual' in p && p.annual && (
                      <p className="text-xs" style={{ color: p.featured ? '#FF8FAB' : '#C47B5A' }}>{p.annual}</p>
                    )}
                    <p className="text-sm mt-2" style={{ color: p.featured ? '#8C7B73' : '#8C7B73' }}>{p.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm" style={{ color: p.featured ? '#D4C0B8' : '#5C3D2E' }}>
                        <span className="shrink-0 mt-0.5" style={{ color: p.featured ? '#E05780' : '#7A9E7E' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#notify"
                    className="block text-center py-3.5 rounded-2xl text-sm font-semibold transition-all"
                    style={p.featured
                      ? { background: 'linear-gradient(135deg, #E05780, #FF8FAB)', color: 'white' }
                      : { background: '#EDE0D4', color: '#1C0E0A' }}>
                    {p.cta}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Curve */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ fill: '#FDF6EE', height: 60 }}>
            <path d="M0,40 C360,0 1080,80 1440,30 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Trust ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: '#FDF6EE' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {t.trust.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, color: '#1C0E0A' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8C7B73' }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center" style={{ background: 'linear-gradient(160deg, #1C0E0A 0%, #3D1A14 100%)' }}>
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#E05780' }}>✦ Niamh</p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 600, color: 'white', lineHeight: 1.1 }}>
            {t.hero.h1a}<br />
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E05780, #FF8FAB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.hero.h1b}
            </em>
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: '#8C7B73' }}>{t.hero.sub}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            {submitted ? (
              <p className="text-sm" style={{ color: '#FF8FAB' }}>
                {lang === 'fr' ? '✦ Tu es sur la liste — à très bientôt !' : '✦ You\'re on the list — see you soon!'}
              </p>
            ) : (
              <>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder={t.hero.placeholder} required
                  className="flex-1 px-5 py-3.5 rounded-2xl text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', color: 'white', fontFamily: 'var(--font-jakarta)' }} />
                <button type="submit"
                  className="px-6 py-3.5 rounded-2xl text-sm font-semibold whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)', color: 'white' }}>
                  {t.hero.cta}
                </button>
              </>
            )}
          </form>
        </FadeIn>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-12 px-6" style={{ background: '#1C0E0A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)' }}>
              <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>N</span>
            </div>
            <div>
              <p className="font-semibold leading-none" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, color: 'white' }}>Niamh</p>
              <p className="text-xs mt-0.5" style={{ color: '#8C7B73', fontStyle: 'italic' }}>{t.footer.tagline}</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {t.footer.links.map(l => (
              <Link key={l.label} href={l.href} className="text-sm transition-colors" style={{ color: '#8C7B73' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FDF6EE')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8C7B73')}>
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-center" style={{ color: '#5C3D2E' }}>{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  )
}
