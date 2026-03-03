import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, TrendUp, ClockCountdown, PhoneCall } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SEOContent from './SEOContent'

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'osint' | 'developpement' | 'contact' | 'data-recovery') => void
}

const plans = [
  {
    name: 'Protection PME Essentiel + Rapport',
    price: 'CHF 149 / mois',
    href: '/abonnements/essentiel',
    points: [
      'Rapport mensuel de sécurité visuel et en langage simple',
      'Identification des risques critiques avec impact business',
      'Priorités d’action pour le mois suivant',
      'Scans automatisés de vulnérabilités',
      'Vérification basique de présence publique exposée'
    ]
  },
  {
    name: 'Protection PME Active + Rapport Stratégique',
    price: 'CHF 449 / mois',
    href: '/abonnements/pro',
    points: [
      'Rapport mensuel avancé',
      'Tendances et évolution des risques',
      'Plan d’action 30/60/90 jours avec priorités',
      'Session technique mensuelle (30–60 min)',
      'Révision des politiques de sécurité de base'
    ]
  },
  {
    name: 'Protection PME Premium + Conseils',
    price: 'CHF 799 / mois',
    href: '/abonnements/premium',
    points: [
      'Tout le plan Active',
      'Pentest léger une fois par an (ou revues ciblées)',
      'Simulations de phishing documentées',
      'Sessions stratégiques bimensuelles',
      'Priorisation ajustée par secteur et conformité basique'
    ]
  }
]

export default function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    document.title = 'Cybersécurité PME Biel/Bienne Suisse | Abonnement CyberSuisse Protect™'

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }
    description.setAttribute(
      'content',
      'Abonnement mensuel de cybersécurité pour PME à Biel/Bienne et en Suisse. Protection continue cyber, surveillance proactive et accompagnement expert. Diagnostic sécurité gratuit – 15 min.'
    )
  }, [])

  return (
    <div className="min-h-screen bg-background text-white">
      <SEOContent
        page="home"
        title="Cybersécurité PME Biel/Bienne Suisse | Abonnement CyberSuisse Protect™"
        description="Abonnement sécurité cyber Suisse pour PME avec protection continue cyber et accompagnement expert à Biel/Bienne."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'LocalBusiness',
                name: 'CyberSuisse',
                url: 'https://www.cybersuisse.ch/',
                image: 'https://www.cybersuisse.ch/assets/images/logo.png',
                telephone: '+41 78 208 95 45',
                email: 'modesto@cybersuisse.ch',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Biel/Bienne',
                  addressCountry: 'CH'
                },
                areaServed: ['Biel/Bienne', 'Suisse']
              },
              {
                '@type': 'Service',
                name: 'Abonnement CyberSuisse Protect™',
                serviceType: 'Abonnement sécurité cyber Suisse',
                areaServed: 'Suisse',
                provider: {
                  '@type': 'Organization',
                  name: 'CyberSuisse'
                }
              }
            ]
          })
        }}
      />

      <main>
        <section className="py-16 md:py-24" aria-labelledby="hero-title">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <p className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                Nouveau positionnement · Abonnements mensuels de cybersécurité
              </p>
              <h1 id="hero-title" className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Cybersécurité PME Biel/Bienne: protection continue cyber par abonnement
              </h1>
              <p className="text-base md:text-lg text-white max-w-3xl mb-8">
                Avec CyberSuisse Protect™, les PME de Biel/Bienne et de Suisse passent d’une sécurité ponctuelle
                à une défense continue: prévention, surveillance, amélioration et réaction rapide face aux menaces.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="btn-primary-3d" onClick={() => onNavigate('contact')}>
                  Diagnostic sécurité gratuit – 15 min
                </Button>
                <Button variant="outline" className="btn-secondary-3d" asChild>
                  <a href="#plans">Voir les plans d’abonnement</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="plans" className="py-12 md:py-16" aria-labelledby="plans-title">
          <div className="container mx-auto px-4">
            <h2 id="plans-title" className="text-2xl md:text-3xl font-semibold mb-3">
              Plans d’abonnement CyberSuisse Protect™
            </h2>
            <p className="text-white max-w-3xl mb-8">
              Trois formules adaptées à la taille et au niveau d’exposition de votre entreprise pour une
              cybersécurité PME Biel/Bienne durable et mesurable.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className="card-enhanced border-border/70">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-primary font-semibold">{plan.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-white mb-6">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 mt-0.5 text-primary" weight="fill" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={plan.href} className="text-sm font-medium text-primary hover:underline">
                      Voir la page d’abonnement dédiée
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="why-title">
          <div className="container mx-auto px-4">
            <h2 id="why-title" className="text-2xl md:text-3xl font-semibold mb-6">
              Pourquoi ce modèle d’abonnement sécurité cyber Suisse?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/70">
                <CardContent className="pt-6">
                  <TrendUp className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Amélioration continue</h3>
                  <p className="text-sm text-white">Votre niveau de protection augmente chaque mois avec des actions priorisées.</p>
                </CardContent>
              </Card>
              <Card className="border-border/70">
                <CardContent className="pt-6">
                  <ClockCountdown className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Réactivité accrue</h3>
                  <p className="text-sm text-white">Une veille active permet de réduire le temps entre détection et remédiation.</p>
                </CardContent>
              </Card>
              <Card className="border-border/70">
                <CardContent className="pt-6">
                  <PhoneCall className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Budget prévisible</h3>
                  <p className="text-sm text-white">Un abonnement mensuel lisible, sans dépendre uniquement d’audits ponctuels.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="steps-title">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="steps-title" className="text-2xl md:text-3xl font-semibold mb-6">
              Comment ça marche en 3 étapes
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-white">
              <li>
                <span className="text-white font-medium">Diagnostic initial:</span> évaluation rapide des risques cyber et des priorités métier.
              </li>
              <li>
                <span className="text-white font-medium">Activation du plan:</span> mise en place des contrôles et de la surveillance continue.
              </li>
              <li>
                <span className="text-white font-medium">Suivi mensuel:</span> reporting, ajustements et recommandations pour protection continue cyber.
              </li>
            </ol>

            <div className="mt-10 rounded-xl border border-primary/30 bg-primary/10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Prêt à sécuriser votre PME à Biel/Bienne?</h3>
              <p className="text-white mb-6">
                Réservez votre rendez-vous et recevez une première feuille de route cybersécurité adaptée à votre activité.
              </p>
              <Button size="lg" className="btn-primary-3d" onClick={() => onNavigate('contact')}>
                Diagnostic sécurité gratuit – 15 min
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
