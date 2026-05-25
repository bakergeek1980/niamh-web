import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Niamh',
  description: 'Politique de confidentialité et protection des données personnelles de l\'application Niamh.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FDF6EE' }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #EDE0D4' }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E05780, #FF8FAB)' }}>
            <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>N</span>
          </div>
          <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-cormorant)', color: '#1C0E0A' }}>Niamh</span>
        </Link>
        <Link href="/" className="text-sm font-medium" style={{ color: '#8C7B73' }}>← Retour</Link>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 56, fontWeight: 600, color: '#1C0E0A', lineHeight: 1 }}>
          Politique de confidentialité
        </h1>
        <p className="mb-12 text-sm" style={{ color: '#8C7B73' }}>Dernière mise à jour : 21 mai 2026</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: '#5C3D2E' }}>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>1. Qui sommes-nous ?</h2>
            <p>
              Niamh est une application mobile de coaching nutrition développée et éditée par <strong>Niamh SAS</strong>
              (en cours de constitution), dont le siège social est en France.
              Contact : <a href="mailto:contact@niamh.app" style={{ color: '#E05780' }}>contact@niamh.app</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>2. Données collectées</h2>
            <p className="mb-4">Nous collectons uniquement les données nécessaires au fonctionnement de l'application :</p>
            <ul className="space-y-2 pl-4">
              {[
                ['Données de compte', 'Adresse e-mail, nom complet (fournis lors de l\'inscription).'],
                ['Données de santé', 'Poids, objectif de poids, apports caloriques, macronutriments — uniquement sur consentement explicite (Art. 9 RGPD).'],
                ['Données du cycle', 'Date des dernières règles, durée du cycle — uniquement sur consentement explicite.'],
                ['Photos de repas', 'Transmises temporairement à notre service IA (Groq) pour analyse ; non stockées après traitement.'],
                ['Données d\'usage', 'Analytics anonymisées via PostHog EU Cloud (uniquement avec votre consentement).'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span style={{ color: '#E05780', flexShrink: 0 }}>✦</span>
                  <span><strong style={{ color: '#1C0E0A' }}>{title} :</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>3. Base légale du traitement</h2>
            <ul className="space-y-2 pl-4">
              {[
                ['Exécution du contrat (Art. 6.1.b)', 'Pour les données nécessaires au fonctionnement du service (compte, repas sauvegardés).'],
                ['Consentement explicite (Art. 6.1.a / 9.2.a)', 'Pour les données de santé, le cycle menstruel, la périménopause et les analytics.'],
                ['Intérêt légitime (Art. 6.1.f)', 'Pour la sécurité du service et la prévention des abus.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span style={{ color: '#E05780', flexShrink: 0 }}>✦</span>
                  <span><strong style={{ color: '#1C0E0A' }}>{title} :</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>4. Hébergement & sous-traitants</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #EDE0D4' }}>
                    {['Service', 'Rôle', 'Localisation'].map(h => (
                      <th key={h} className="text-left py-2 pr-4 font-semibold" style={{ color: '#1C0E0A' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Supabase (EU)', 'Base de données, authentification', '🇪🇺 Union Européenne'],
                    ['Groq Cloud', 'Inférence IA (coach, analyse photo)', '🇺🇸 USA — données anonymisées, non stockées'],
                    ['PostHog EU Cloud', 'Analytics (optionnel)', '🇪🇺 Union Européenne'],
                    ['RevenueCat', 'Gestion des abonnements', '🇺🇸 USA — données de paiement uniquement'],
                    ['Expo / EAS', 'Distribution de l\'app', '🇺🇸 USA — métadonnées techniques uniquement'],
                  ].map(([service, role, loc]) => (
                    <tr key={service} style={{ borderBottom: '1px solid #EDE0D4' }}>
                      <td className="py-2.5 pr-4 font-medium" style={{ color: '#1C0E0A' }}>{service}</td>
                      <td className="py-2.5 pr-4" style={{ color: '#5C3D2E' }}>{role}</td>
                      <td className="py-2.5" style={{ color: '#5C3D2E' }}>{loc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>5. Durée de conservation</h2>
            <ul className="space-y-2 pl-4">
              {[
                'Données de compte : durée d\'utilisation + 3 ans après clôture du compte.',
                'Données de santé & cycle : durée d\'utilisation active + 1 an.',
                'Photos de repas : supprimées après traitement par l\'IA (non persistées).',
                'Analytics : 1 an (plan gratuit PostHog).',
                'Données de paiement : gérées par RevenueCat selon leurs CGU ; Niamh ne stocke aucune carte bancaire.',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: '#E05780', flexShrink: 0 }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>6. Vos droits (RGPD)</h2>
            <p className="mb-4">Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :</p>
            <ul className="space-y-2 pl-4">
              {[
                'Droit d\'accès : obtenir une copie de vos données.',
                'Droit de rectification : corriger des données inexactes.',
                'Droit à l\'effacement : supprimer votre compte et l\'ensemble de vos données (bouton disponible dans l\'app).',
                'Droit à la portabilité : exporter vos données au format JSON (bouton dans l\'app → Profil → Exporter mes données).',
                'Droit d\'opposition : refuser certains traitements (analytics, coaching IA).',
                'Droit de retirer le consentement à tout moment, sans affecter la licéité des traitements antérieurs.',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: '#E05780', flexShrink: 0 }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pour exercer ces droits : <a href="mailto:contact@niamh.app" style={{ color: '#E05780' }}>contact@niamh.app</a>.
              Réponse sous 30 jours maximum. Vous pouvez également déposer une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#E05780' }}>CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>7. Sécurité</h2>
            <p>
              Les données sont transmises via HTTPS/TLS. Les mots de passe ne sont jamais stockés en clair (gestion par Supabase Auth avec bcrypt).
              L'accès aux données de production est restreint au strict nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>8. Cookies</h2>
            <p>
              L'application mobile Niamh n'utilise pas de cookies. Le site web <strong>niamh.app</strong> utilise
              uniquement des cookies techniques essentiels (session, préférences de langue). Aucun cookie publicitaire ou de tracking tiers n'est déposé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, color: '#1C0E0A' }}>9. Modifications</h2>
            <p>
              Cette politique peut être mise à jour. En cas de modification substantielle, vous serez notifié(e) par e-mail ou via l'application.
              La date de dernière mise à jour est indiquée en haut de ce document.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm" style={{ borderTop: '1px solid #EDE0D4', color: '#8C7B73' }}>
        <Link href="/" style={{ color: '#E05780' }}>← Retour à niamh.app</Link>
        <span className="mx-3">·</span>
        <a href="mailto:contact@niamh.app" style={{ color: '#8C7B73' }}>contact@niamh.app</a>
      </footer>
    </div>
  )
}
