import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Shield, Handshake, Lightning, MapPin, Users, Buildings, Briefcase, Factory } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { applyPageSeo } from '@/components/SEOHelpers'
import Hero3DBackground from '@/components/Hero3DBackground'

interface HomePageProps {
  onNavigate: (page: string) => void
}

const pillars = [
  {
    icon: MapPin,
    title: 'Local',
    text: "Basé à Biel/Bienne. Vous connaissez votre interlocuteur. Pas de centre d'appels, pas de formulaire anonyme."
  },
  {
    icon: Handshake,
    title: 'Humain',
    text: "Un seul consultant, du premier contact au rapport final. Vous avez toujours quelqu'un à qui parler."
  },
  {
    icon: Lightning,
    title: 'Pragmatique',
    text: "Des recommandations concrètes et applicables. Pas de rapport de 80 pages illisible. Pas de jargon inutile."
  }
]

const audiences = [
  { icon: Briefcase, label: 'Études fiduciaires et cabinets comptables' },
  { icon: Shield, label: "Cabinets d'avocats et notaires" },
  { icon: Buildings, label: "Bureaux d'architectes et studios techniques" },
  { icon: Factory, label: 'PMEs industrielles et commerciales de la région' }
]

const services = [
  {
    name: 'M365 Security Check',
    text: 'Votre environnement Microsoft 365 est-il réellement sécurisé ?',
    price: 'CHF 750'
  },
  {
    name: 'Empreinte Numérique',
    text: "Ce qu'un attaquant voit déjà de vous, en sources ouvertes.",
    price: 'CHF 450'
  },
  {
    name: 'Bouclier Humain',
    text: "Former vos collaborateurs contre le phishing et l'ingénierie sociale.",
    price: 'Dès CHF 550'
  },
  {
    name: 'Cap Sécurité',
    text: 'Connaître votre niveau de risque réel et quoi faire en premier.',
    price: 'CHF 900'
  }
]

export default function HomePage({ onNavigate }: HomePageProps) {
  const reduceMotion = useReducedMotion()
  const heroSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    applyPageSeo({
      title: 'CyberSuisse — Cybersécurité de proximité pour PME | Biel/Bienne',
      description: "Consultant indépendant en cybersécurité à Biel/Bienne. Audit Microsoft 365, OSINT, sensibilisation, diagnostic GRC. Interlocuteur unique. Premier Regard offert.",
      path: '/'
    })
  }, [])

  const fade = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduceMotion ? 0 : i * 0.06, duration: reduceMotion ? 0 : 0.5 }
    })
  }

  return (
    <div className="bg-bg">
      {/* HERO — 3D OSINT constellation */}
      <section
        ref={heroSectionRef}
        className="relative overflow-hidden border-b border-white/10"
        style={{ minHeight: 'calc(100svh - 4rem)' }}
      >
        {/* 3D layer (or SVG poster fallback) */}
        <Hero3DBackground sectionRef={heroSectionRef} />

        {/* Veils — navy gradients for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-1"
          style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 60%, transparent 100%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-1"
          style={{ background: 'linear-gradient(0deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.20) 60%, transparent 100%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-1"
          style={{ background: 'radial-gradient(ellipse 75% 95% at 22% 50%, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.55) 38%, rgba(15,23,42,0) 68%)' }}
        />

        {/* Grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-2 mix-blend-overlay"
          style={{
            opacity: 0.07,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        {/* Content */}
        <div
          className="container mx-auto px-4 lg:px-8 relative z-5 py-20 lg:py-28 flex items-center"
          style={{ minHeight: 'inherit' }}
        >
          <div className="max-w-3xl">
            {/* Eyebrow pill */}
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full bg-brand-amber/10 border border-brand-amber/40 px-4 py-1.5"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                fontSize: '10.5px',
                letterSpacing: '0.10em',
                color: '#F6B53C',
                textTransform: 'uppercase',
              }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: '#F6B53C', boxShadow: '0 0 8px #F6B53C' }}
                animate={reduceMotion ? undefined : { opacity: [1, 0.4, 1] }}
                transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span>OSINT · Reconnaissance · Threat intel</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-5 font-heading font-extrabold text-fg"
              style={{
                fontSize: 'clamp(40px, 5.4vw, 78px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                maxWidth: '14ch',
                textWrap: 'balance',
                textShadow: '0 2px 24px rgba(0,0,0,0.5)',
              }}
            >
              La cybersécurité de votre PME mérite une personne de confiance, pas un ticket.
            </motion.h1>
            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 text-fg-secondary"
              style={{ fontSize: '17.5px', lineHeight: 1.55, maxWidth: '52ch' }}
            >
              CyberSuisse accompagne les études fiduciaires, cabinets d'avocats et bureaux techniques de Biel/Bienne avec des prestations claires, un interlocuteur unique et des recommandations applicables dès demain.
            </motion.p>
            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => onNavigate('premier-regard')}
                className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90"
              >
                Demander un Premier Regard offert
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('services')}
                className="border-white/15 text-fg hover:bg-bg-overlay"
              >
                Découvrir les prestations
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POURQUOI CYBERSUISSE */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <Card key={p.title} className="bg-bg-inset border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-amber/10 text-brand-amber">
                      <Icon size={22} />
                    </span>
                    <CardTitle className="text-fg">{p.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-fg-secondary leading-relaxed">{p.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* POUR QUI */}
      <section className="bg-bg-inset border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-fg">
              Conçu pour les PME qui ont des données à protéger
            </h2>
            <p className="mt-4 text-fg-secondary leading-relaxed">
              CyberSuisse s'adresse aux structures de 3 à 30 collaborateurs qui traitent des données confidentielles et n'ont pas de département IT interne dédié.
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {audiences.map((a) => {
              const Icon = a.icon
              return (
                <li
                  key={a.label}
                  className="flex items-center gap-3 p-4 rounded-md bg-bg border border-white/10"
                >
                  <Icon size={20} className="text-brand-amber shrink-0" />
                  <span className="text-fg">{a.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* APERÇU DES PRESTATIONS */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-fg">Aperçu des prestations</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.name} className="bg-bg-inset border-white/10 flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="self-start border-brand-amber/40 text-brand-amber bg-brand-amber/5">
                  {s.price}
                </Badge>
                <CardTitle className="text-fg mt-3">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-fg-secondary leading-relaxed">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-brand-amber hover:underline"
          >
            Voir tous les services
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* PREMIER REGARD BAND */}
      <section className="bg-bg-inset border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Users size={36} className="text-brand-amber mx-auto" />
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-fg">
              Commencez par 45 minutes offertes
            </h2>
            <p className="mt-4 text-fg-secondary leading-relaxed">
              Le Premier Regard est un entretien sans engagement à la fin duquel vous recevez par écrit les 3 risques principaux identifiés sur votre structure. Aucun outil installé. Aucun accès demandé.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                onClick={() => onNavigate('premier-regard')}
                className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90"
              >
                Demander mon Premier Regard
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
