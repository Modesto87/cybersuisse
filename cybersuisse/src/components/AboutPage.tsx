import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Certificate, GlobeHemisphereWest } from '@phosphor-icons/react'

interface AboutPageProps {
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

const notDoing = [
  "Je n'effectue pas de tests d'intrusion sans cadre contractuel et couverture d'assurance en place",
  'Je ne vends pas de produits par commission',
  'Je ne promets pas de sécurité à 100 %',
  'Je ne travaille pas en allemand (limite linguistique assumée)',
  "Zone d'intervention : Biel/Bienne, Seeland, Jura bernois, Neuchâtel"
]

const certifications = [
  { name: 'Security Analyst Level 1', issuer: 'TryHackMe' },
  { name: 'Ethical Hacking Essentials', issuer: 'EC-Council' },
  { name: 'Essential Guide to ISO 27001', issuer: 'LRQA' },
  { name: 'Comprehensive OSINT Expert', issuer: 'OPSWAT Academy' }
]

const languages = [
  { name: 'Portugais', level: 'langue maternelle' },
  { name: 'Français', level: 'avancé' },
  { name: 'Anglais', level: 'avancé' }
]

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useEffect(() => {
    setMeta(
      'À propos — Luís Modesto | CyberSuisse',
      'Consultant indépendant en cybersécurité à Biel/Bienne. Approche humaine, pragmatique et locale pour les PMEs.'
    )
  }, [])

  return (
    <div className="bg-bg">
      {/* HERO */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-fg">Luís Modesto</h1>
          <p className="mt-4 text-lg text-fg-secondary">
            Consultant indépendant en cybersécurité — Biel/Bienne
          </p>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl space-y-6 text-fg-secondary leading-relaxed">
          <p>
            Je travaille en indépendant depuis Biel/Bienne, où j'ai choisi de rester et de construire quelque chose de sérieux pour les entreprises de la région.
          </p>
          <p>
            Mon approche n'est pas celle d'un prestataire impersonnel. Je connais personnellement chaque client, je m'exprime en français, en anglais et en portugais, et je considère que la cybersécurité d'une PME se règle avec une personne de confiance — pas avec un abonnement logiciel.
          </p>
          <p>
            Avant la cybersécurité, j'ai travaillé pendant plusieurs années en environnement industriel de précision, dans un contexte où la rigueur, le respect des procédures et la qualité des livrables n'étaient pas négociables. C'est une culture que j'ai conservée.
          </p>
        </div>
      </section>

      {/* CE QUE JE PROPOSE / CE QUE JE NE FAIS PAS */}
      <section className="bg-bg-inset border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 grid md:grid-cols-2 gap-6">
          <Card className="bg-bg border-white/10">
            <CardHeader>
              <CardTitle className="text-fg">Ce que je propose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fg-secondary leading-relaxed">
                Des prestations claires, forfaitaires, sans jargon inutile. Un seul interlocuteur du premier contact au rapport final. Une communication adaptée à votre niveau de maturité technique — pas à mon ego.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bg border-white/10">
            <CardHeader>
              <CardTitle className="text-fg">Ce que je ne fais pas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-fg-secondary">
                {notDoing.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-amber shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FORMATIONS ET CERTIFICATIONS */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-fg flex items-center gap-3">
            <Certificate size={28} className="text-brand-amber" />
            Formations et certifications
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 p-4 rounded-md bg-bg-inset border border-white/10"
              >
                <CheckCircle size={20} className="text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <p className="text-fg font-medium">{c.name}</p>
                  <p className="text-sm text-fg-secondary">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LANGUES */}
      <section className="bg-bg-inset border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-fg flex items-center gap-3">
              <GlobeHemisphereWest size={26} className="text-brand-amber" />
              Langues
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {languages.map((l) => (
                <li key={l.name}>
                  <Badge variant="outline" className="border-white/15 text-fg bg-bg px-3 py-1.5 text-sm">
                    <span className="font-medium mr-1.5">{l.name}</span>
                    <span className="text-fg-secondary">— {l.level}</span>
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 text-center">
        <Button
          size="lg"
          onClick={() => onNavigate('premier-regard')}
          className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90"
        >
          Demander un Premier Regard offert
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </section>
    </div>
  )
}
