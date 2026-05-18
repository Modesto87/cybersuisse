import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, TrendUp, ClockCountdown, PhoneCall, Check, ArrowRight, MapPin, Lock } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SEOContent from './SEOContent'

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'osint' | 'developpement' | 'contact' | 'data-recovery' | 'abonnements') => void
}

const CHART_HEIGHTS = [20, 35, 28, 50, 42, 65, 55, 80, 70, 60, 90, 75, 85, 95]

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
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()

  const heroVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.08,
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    })
  }

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
    <div className="min-h-screen bg-bg text-fg">
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
        {/* HERO — Protect™ monthly report positioning */}
        <section
          className="relative overflow-hidden bg-bg text-fg pt-20 md:pt-28 pb-14 md:pb-20 bg-gradient-to-b from-bg via-bg to-bg-inset/40 border-b border-white/5"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* LEFT */}
              <div className="lg:col-span-6">
                <motion.div initial="hidden" animate="show" custom={0} variants={heroVariants}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-amber/30 bg-brand-amber/5 text-brand-amber text-xs font-medium tracking-wide uppercase">
                    <ShieldCheck size={14} weight="fill" />
                    {t('hero.eyebrow')}
                  </span>
                </motion.div>

                <motion.h1
                  id="hero-title"
                  initial="hidden"
                  animate="show"
                  custom={1}
                  variants={heroVariants}
                  className="mt-6 font-heading text-3xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-fg"
                >
                  {t('hero.title')}{' '}
                  <span className="text-brand-amber">{t('hero.titleAccent')}</span>
                </motion.h1>

                <motion.div initial="hidden" animate="show" custom={2} variants={heroVariants}>
                  <p className="mt-6 text-lg text-fg-secondary leading-relaxed max-w-xl">
                    {t('hero.subtitle')}
                  </p>
                  <ul className="hidden md:block mt-8 space-y-3 text-sm text-fg-secondary">
                    {[0, 1, 2].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} weight="bold" className="text-brand-amber shrink-0 mt-0.5" />
                        <span>{t(`hero.bullets.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial="hidden" animate="show" custom={3} variants={heroVariants}>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('abonnements')}
                      className="btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                    >
                      {t('hero.ctaPrimary')}
                      <ArrowRight size={16} weight="bold" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="btn-secondary px-6 py-3 text-sm font-semibold"
                    >
                      {t('hero.ctaSecondary')}
                    </button>
                  </div>
                  <p className="mt-6 text-xs text-fg-secondary/70 flex items-center gap-2">
                    <MapPin size={12} weight="fill" />
                    {t('hero.microTrust')}
                  </p>
                </motion.div>
              </div>

              {/* RIGHT — Mockup */}
              <motion.div
                initial="hidden"
                animate="show"
                custom={4}
                variants={heroVariants}
                className="lg:col-span-6"
              >
                <div className="relative rounded-xl border border-white/10 bg-bg-inset shadow-2xl shadow-black/40 overflow-hidden max-w-xl ml-auto">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-bg-inset">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <span className="text-[11px] text-fg-secondary/60 font-mono">
                      protect-report-mai-2026.pdf
                    </span>
                    <Lock size={12} weight="fill" className="text-fg-secondary/40" />
                  </div>

                  {/* Header */}
                  <div className="px-6 pt-6 pb-4">
                    <p className="text-[10px] uppercase tracking-widest text-brand-amber font-semibold">
                      {t('hero.mockup.eyebrow')}
                    </p>
                    <h3 className="mt-1 text-base font-heading font-semibold text-fg">
                      {t('hero.mockup.title')}
                    </h3>
                    <p className="text-xs text-fg-secondary/70">
                      {t('hero.mockup.subtitle')}
                    </p>
                  </div>

                  {/* Metric tiles */}
                  <div className="px-6 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-white/10 bg-bg p-3">
                      <p className="text-[10px] uppercase tracking-wide text-fg-secondary/60">
                        {t('hero.mockup.metrics.threats')}
                      </p>
                      <p className="mt-1 text-xl font-heading font-bold text-fg">1 247</p>
                      <p className="text-[10px] text-emerald-400/80">▲ 12%</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-bg p-3">
                      <p className="text-[10px] uppercase tracking-wide text-fg-secondary/60">
                        {t('hero.mockup.metrics.score')}
                      </p>
                      <p className="mt-1 text-xl font-heading font-bold text-fg">87/100</p>
                      <p className="text-[10px] text-emerald-400/80">▲ 4 pts</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-bg p-3">
                      <p className="text-[10px] uppercase tracking-wide text-fg-secondary/60">
                        {t('hero.mockup.metrics.incidents')}
                      </p>
                      <p className="mt-1 text-xl font-heading font-bold text-fg">0</p>
                      <p className="text-[10px] text-brand-amber">Stable</p>
                    </div>
                  </div>

                  {/* Bar chart */}
                  <div className="hidden sm:block mt-5 px-6">
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-wide text-fg-secondary/60">
                        {t('hero.mockup.chartLabel')}
                      </span>
                      <span className="text-[10px] text-fg-secondary/40">
                        {t('hero.mockup.chartTag')}
                      </span>
                    </div>
                    <div className="flex items-end gap-1.5 h-24">
                      {CHART_HEIGHTS.map((pct, idx) => (
                        <div
                          key={idx}
                          className={`flex-1 rounded-sm bg-gradient-to-t from-brand-royal to-brand-amber/70${
                            idx === CHART_HEIGHTS.length - 1 ? ' ring-1 ring-brand-amber/40' : ''
                          }`}
                          style={{ height: `${pct}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Priority actions */}
                  <div className="mt-5 px-6 pb-6">
                    <p className="text-[10px] uppercase tracking-wide text-fg-secondary/60 mb-2">
                      {t('hero.mockup.actionsLabel')}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs py-2 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                          <span className="text-fg/90">{t('hero.mockup.action1')}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-brand-amber/40 text-brand-amber">
                          P1
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center justify-between text-xs py-2 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                          <span className="text-fg/90">{t('hero.mockup.action2')}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-brand-amber/40 text-brand-amber">
                          P2
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center justify-between text-xs py-2 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-fg/90">{t('hero.mockup.action3')}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400">
                          OK
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between text-[10px] text-fg-secondary/50">
                    <span>{t('hero.mockup.footerLeft')}</span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} weight="fill" />
                      {t('hero.mockup.footerRight')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Metrics + trust bar */}
            <motion.div initial="hidden" animate="show" custom={5} variants={heroVariants}>
              {/* Metrics row */}
              <div className="mt-20 grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                {[0, 1, 2].map((i) => {
                  const value = t(`hero.stats.${i}.value`)
                  const isBienne = i === 1
                  return (
                    <div key={i} className="bg-bg-inset px-6 py-6 text-center">
                      <p
                        className={`font-heading font-bold text-fg ${
                          isBienne
                            ? 'text-xl md:text-2xl xl:text-3xl'
                            : 'text-xl md:text-3xl xl:text-4xl'
                        }`}
                      >
                        {value}
                      </p>
                      <p className="mt-2 text-[10px] md:text-xs uppercase tracking-wider text-fg-secondary/70">
                        {t(`hero.stats.${i}.label`)}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Cert + sector trust bar */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-fg-secondary/50">
                      {t('hero.trust.certsLabel')}
                    </p>
                    <div className="mt-2 flex items-center gap-6">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-fg-secondary/70 hover:text-fg transition">
                        EC-COUNCIL · CEH
                      </span>
                      <span className="h-4 w-px bg-white/15" />
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-fg-secondary/70 hover:text-fg transition">
                        TRYHACKME · TOP 1%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-fg-secondary/50">
                      {t('hero.trust.sectorsLabel')}
                    </p>
                    <p className="mt-2 text-xs text-fg-secondary/80">
                      {t('hero.trust.sectors')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="bg-bg-inset py-12 md:py-16" aria-labelledby="plans-title">
          <div className="container mx-auto px-4">
            <h2 id="plans-title" className="font-heading text-2xl md:text-3xl font-semibold mb-3 text-fg">
              Plans d’abonnement CyberSuisse Protect™
            </h2>
            <p className="text-fg-secondary max-w-3xl mb-8">
              Trois formules adaptées à la taille et au niveau d’exposition de votre entreprise pour une
              cybersécurité PME Biel/Bienne durable et mesurable.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className="card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-xl text-fg">{plan.name}</CardTitle>
                    <p className="text-brand-amber font-semibold">{plan.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-fg-secondary mb-6">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 mt-0.5 text-brand-amber shrink-0" weight="fill" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={plan.href} className="text-sm font-medium text-brand-amber hover:underline">
                      Voir la page d’abonnement dédiée
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="bg-bg py-12 md:py-16" aria-labelledby="why-title">
          <div className="container mx-auto px-4">
            <h2 id="why-title" className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-fg">
              Pourquoi ce modèle d’abonnement sécurité cyber Suisse?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="card-enhanced">
                <CardContent className="pt-6">
                  <TrendUp className="w-6 h-6 text-brand-amber mb-3" />
                  <h3 className="text-lg font-medium mb-2 text-fg">Amélioration continue</h3>
                  <p className="text-sm text-fg-secondary">
                    Votre niveau de protection augmente chaque mois avec des actions priorisées.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-enhanced">
                <CardContent className="pt-6">
                  <ClockCountdown className="w-6 h-6 text-brand-amber mb-3" />
                  <h3 className="text-lg font-medium mb-2 text-fg">Réactivité accrue</h3>
                  <p className="text-sm text-fg-secondary">
                    Une veille active permet de réduire le temps entre détection et remédiation.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-enhanced">
                <CardContent className="pt-6">
                  <PhoneCall className="w-6 h-6 text-brand-amber mb-3" />
                  <h3 className="text-lg font-medium mb-2 text-fg">Budget prévisible</h3>
                  <p className="text-sm text-fg-secondary">
                    Un abonnement mensuel lisible, sans dépendre uniquement d’audits ponctuels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* STEPS + CTA */}
        <section className="bg-bg-inset py-12 md:py-16" aria-labelledby="steps-title">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="steps-title" className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-fg">
              Comment ça marche en 3 étapes
            </h2>
            <ol className="space-y-4 list-decimal list-inside text-fg-secondary">
              <li>
                <span className="text-fg font-medium">Diagnostic initial:</span> évaluation rapide des risques cyber et des priorités métier.
              </li>
              <li>
                <span className="text-fg font-medium">Activation du plan:</span> mise en place des contrôles et de la surveillance continue.
              </li>
              <li>
                <span className="text-fg font-medium">Suivi mensuel:</span> reporting, ajustements et recommandations pour protection continue cyber.
              </li>
            </ol>

            <div className="mt-10 rounded-lg border border-brand-amber/40 bg-brand-amber/10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-fg">
                Prêt à sécuriser votre PME à Biel/Bienne?
              </h3>
              <p className="text-fg-secondary mb-6">
                Réservez votre rendez-vous et recevez une première feuille de route cybersécurité adaptée à votre activité.
              </p>
              <Button size="lg" className="btn-primary" onClick={() => onNavigate('contact')}>
                Diagnostic sécurité gratuit – 15 min
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
