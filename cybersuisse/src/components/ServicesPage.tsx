import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Clock, Info } from '@phosphor-icons/react'

interface ServicesPageProps {
  onNavigate: (page: string) => void
}

const setMeta = (title: string, description: string) => {
  document.title = title
  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', description)
}

interface CoreService {
  id: string
  name: string
  badge: string
  intro: string
  bullets: string[]
  duration?: string
  prerequisites?: string
  option?: string
  pricing?: Array<{ label: string; price: string }>
}

const coreServices: CoreService[] = [
  {
    id: 'm365',
    name: 'M365 Security Check',
    badge: 'CHF 750 — forfait',
    intro:
      'La majorité des PME utilisent Microsoft 365 avec une configuration par défaut non sécurisée. Comptes vulnérables, absence de MFA, sauvegardes inexistantes, permissions excessives — un seul compte compromis suffit à exposer toute la structure.',
    bullets: [
      "Rapport d'audit complet (15 à 25 pages, PDF)",
      'Score de sécurité actuel et cartographie des risques',
      "Plan d'action priorisé et applicable",
      "Synthèse exécutive d'une page pour la direction",
      "Réunion de restitution d'une heure"
    ],
    duration: '5 à 7 jours ouvrables',
    prerequisites: 'Un accès administrateur temporaire'
  },
  {
    id: 'empreinte',
    name: 'Empreinte Numérique',
    badge: 'CHF 450 — forfait',
    intro:
      "Adresses e-mail exposées, mots de passe fuités, documents indexés par Google, sous-domaines oubliés — tout ce qu'un attaquant peut collecter sur vous avant même de vous contacter. Nous faisons cette recherche à votre place, avec les mêmes outils.",
    bullets: [
      "Rapport d'exposition (10 à 15 pages, PDF)",
      "Inventaire complet de votre surface d'attaque",
      'Fuites de données et comptes compromis identifiés',
      'Synthèse de risque et recommandations',
      'Restitution orale de 45 minutes'
    ],
    duration: '4 à 5 jours ouvrables',
    prerequisites: 'Autorisation écrite signée (modèle fourni)',
    option: 'Surveillance continue — CHF 90/mois'
  },
  {
    id: 'bouclier',
    name: 'Bouclier Humain',
    badge: 'Dès CHF 550',
    intro:
      "85 % des cyberattaques réussies commencent par un e-mail. La technologie ne protège pas contre un collaborateur qui clique. Une session de 90 minutes peut changer les réflexes de toute une équipe.",
    bullets: [
      'Session de formation de 90 minutes (présentiel ou visio)',
      'Support visuel remis aux participants (PDF)',
      'Aide-mémoire à afficher au bureau',
      'Quiz interactif en fin de session',
      'Attestation de participation individuelle'
    ],
    pricing: [
      { label: "Jusqu'à 10 participants", price: 'CHF 550' },
      { label: '11 à 25 participants', price: 'CHF 750' },
      { label: '26 à 40 participants', price: 'CHF 950' }
    ],
    option: 'Simulation de phishing (1 mois après) — CHF 350'
  },
  {
    id: 'cap',
    name: 'Cap Sécurité',
    badge: 'CHF 900 — forfait',
    intro:
      "Avant de dépenser CHF 10 000 en cybersécurité, dépensez CHF 900 pour savoir où les dépenser. Ce diagnostic vous donne une vision complète de votre posture de sécurité et une feuille de route à 12 mois, priorisée et chiffrée.",
    bullets: [
      'Rapport de diagnostic (25 à 35 pages, PDF)',
      'Score de maturité par domaine (accès, données, réseau, incidents, conformité, fournisseurs)',
      'Cartographie des risques priorisée',
      'Feuille de route à 12 mois avec estimations budgétaires',
      'Atelier de restitution de 2 heures avec la direction'
    ],
    duration: '10 à 15 jours ouvrables'
  }
]

interface ExtraService {
  id: string
  name: string
  badge: string
  intro: string
  bullets: string[]
  note?: string
  important?: string
  supports?: string
}

const extraServices: ExtraService[] = [
  {
    id: 'web',
    name: 'Création & Refonte de sites web',
    badge: 'Sur devis',
    intro:
      "Conception et développement de sites web professionnels pour PMEs, indépendants et associations. Sites vitrines, landing pages, sites de présentation de services. Hébergement, nom de domaine et mise en ligne inclus selon formule.",
    bullets: [
      'Site responsive, optimisé mobile',
      'Référencement naturel (SEO) intégré dès la conception',
      'Sécurité de base incluse (HTTPS, en-têtes sécurisés)',
      'Formation à la mise à jour autonome du contenu',
      'Support technique post-livraison'
    ],
    note: 'Tarifs communiqués sur demande selon le projet.'
  },
  {
    id: 'data',
    name: 'Récupération de données',
    badge: 'Sur devis',
    intro:
      "Disque dur défaillant, carte mémoire corrompue, clé USB non reconnue, carte SD inaccessible — avant de considérer ces données comme perdues définitivement, une analyse technique est possible.",
    bullets: [
      'Diagnostic préalable gratuit (évaluation de faisabilité)',
      'Récupération des données accessibles sans ouverture physique',
      'Rapport des données récupérées avant livraison finale',
      'Restitution sur support neuf fourni par le client'
    ],
    important:
      "Le diagnostic est gratuit et sans engagement. Le devis est communiqué avant toute intervention. En cas d'échec, aucun frais de récupération n'est facturé.",
    supports:
      'Disques durs HDD et SSD, clés USB, cartes SD et microSD, appareils photo numériques, téléphones (selon cas)'
  }
]

function ServiceCard({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Card id={id} className="bg-bg-inset border-white/10 scroll-mt-24">
      {children}
    </Card>
  )
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  useEffect(() => {
    setMeta(
      'Prestations — CyberSuisse | Biel/Bienne',
      'M365 Security Check, Empreinte Numérique, Bouclier Humain, Cap Sécurité, création de sites web, récupération de données. Forfaits clairs pour PMEs.'
    )
  }, [])

  return (
    <div className="bg-bg">
      {/* HERO */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-fg">Nos prestations</h1>
          <p className="mt-4 text-lg text-fg-secondary">
            Des forfaits clairs, sans surprise, pour les PME qui veulent avancer.
          </p>
        </div>
      </section>

      {/* BLOC 1 — Cybersécurité */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-8">
          Prestations cybersécurité
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {coreServices.map((s) => (
            <ServiceCard key={s.id} id={s.id}>
              <CardHeader>
                <Badge variant="outline" className="self-start border-brand-amber/40 text-brand-amber bg-brand-amber/5">
                  {s.badge}
                </Badge>
                <CardTitle className="text-fg mt-3 text-2xl">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <blockquote className="border-l-2 border-brand-amber/60 pl-4 text-fg-secondary italic leading-relaxed">
                  {s.intro}
                </blockquote>

                <div>
                  <p className="font-semibold text-fg mb-2">Ce que vous obtenez :</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-fg-secondary">
                        <CheckCircle size={18} className="text-brand-amber shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {s.pricing && (
                  <div>
                    <p className="font-semibold text-fg mb-2">Tarification :</p>
                    <ul className="space-y-1.5">
                      {s.pricing.map((p) => (
                        <li key={p.label} className="flex justify-between text-fg-secondary">
                          <span>{p.label}</span>
                          <span className="text-fg font-medium">{p.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  {s.duration && (
                    <div className="flex items-start gap-2 p-3 rounded-md bg-bg border border-white/10">
                      <Clock size={16} className="text-brand-amber shrink-0 mt-0.5" />
                      <div>
                        <p className="text-fg-secondary">Durée</p>
                        <p className="text-fg">{s.duration}</p>
                      </div>
                    </div>
                  )}
                  {s.prerequisites && (
                    <div className="flex items-start gap-2 p-3 rounded-md bg-bg border border-white/10">
                      <Info size={16} className="text-brand-amber shrink-0 mt-0.5" />
                      <div>
                        <p className="text-fg-secondary">Prérequis</p>
                        <p className="text-fg">{s.prerequisites}</p>
                      </div>
                    </div>
                  )}
                </div>

                {s.option && (
                  <p className="text-sm text-fg-secondary">
                    <span className="text-fg font-medium">Option : </span>
                    {s.option}
                  </p>
                )}
              </CardContent>
            </ServiceCard>
          ))}
        </div>
      </section>

      {/* BLOC 2 — Services complémentaires */}
      <section className="bg-bg-inset border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-fg">
            Services complémentaires
          </h2>
          <p className="mt-3 text-fg-secondary max-w-2xl">
            Des services techniques additionnels pour accompagner votre transformation numérique.
          </p>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {extraServices.map((s) => (
              <Card key={s.id} id={s.id} className="bg-bg border-white/10 scroll-mt-24">
                <CardHeader>
                  <Badge variant="outline" className="self-start border-brand-amber/40 text-brand-amber bg-brand-amber/5">
                    {s.badge}
                  </Badge>
                  <CardTitle className="text-fg mt-3 text-2xl">{s.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <blockquote className="border-l-2 border-brand-amber/60 pl-4 text-fg-secondary italic leading-relaxed">
                    {s.intro}
                  </blockquote>

                  <div>
                    <p className="font-semibold text-fg mb-2">Ce que vous obtenez :</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-fg-secondary">
                          <CheckCircle size={18} className="text-brand-amber shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {s.note && (
                    <p className="text-sm text-fg-secondary">
                      <span className="text-fg font-medium">Note : </span>
                      {s.note}
                    </p>
                  )}

                  {s.important && (
                    <div className="p-3 rounded-md bg-brand-amber/5 border border-brand-amber/30 text-sm text-fg-secondary">
                      <p className="text-fg font-semibold mb-1">Important</p>
                      <p>{s.important}</p>
                    </div>
                  )}

                  {s.supports && (
                    <p className="text-sm text-fg-secondary">
                      <span className="text-fg font-medium">Supports traités : </span>
                      {s.supports}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 text-center">
        <p className="text-lg text-fg-secondary mb-6">
          Pas sûr de quelle prestation vous convient ?
        </p>
        <Button
          size="lg"
          onClick={() => onNavigate('premier-regard')}
          className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90"
        >
          Commencez par un Premier Regard offert
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </section>
    </div>
  )
}
