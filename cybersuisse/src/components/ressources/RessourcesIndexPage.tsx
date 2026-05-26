import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, BookOpen } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface RessourcesIndexPageProps {
  onNavigate: (page: string) => void
}

interface ArticleCard {
  slug: string
  title: string
  description: string
  readingTime: string
  topic: string
}

const articles: ArticleCard[] = [
  {
    slug: 'm365-checklist-securite-pme-suisse',
    title: 'Checklist sécurité Microsoft 365 pour PME suisses (2026)',
    description:
      "12 points concrets à vérifier sur votre tenant M365 : MFA, partages, droits, alertes. À faire en quelques heures.",
    readingTime: '8 min de lecture',
    topic: 'Microsoft 365'
  },
  {
    slug: 'reconnaitre-email-phishing-30-secondes',
    title: 'Reconnaître un email de phishing en 30 secondes',
    description:
      "Cinq signaux simples que vos collaborateurs peuvent utiliser pour démasquer un email piégé avant de cliquer.",
    readingTime: '6 min de lecture',
    topic: 'Sensibilisation'
  },
  {
    slug: 'que-faire-apres-cyberattaque-pme-plan',
    title: "Que faire après une cyberattaque ? Plan d'action PME suisse",
    description:
      'Les 72 premières heures après une intrusion : étapes techniques, légales et communication, sans paniquer.',
    readingTime: '10 min de lecture',
    topic: 'Incident'
  },
  {
    slug: 'rgpd-vs-lpd-suisse-pme-2026',
    title: 'RGPD vs LPD suisse : ce qui change pour votre PME en 2026',
    description:
      'Différences pratiques entre RGPD et nLPD. Obligations concrètes pour une PME basée en Suisse, sans jargon.',
    readingTime: '9 min de lecture',
    topic: 'Conformité'
  }
]

export default function RessourcesIndexPage({ onNavigate }: RessourcesIndexPageProps) {
  const navigate = useNavigate()

  useEffect(() => {
    applyPageSeo({
      title: 'Ressources — Guides cybersécurité pour PME suisses | CyberSuisse',
      description:
        'Guides pragmatiques, checklists et plans d\'action en cybersécurité pour PME suisses. Microsoft 365, phishing, incidents, RGPD/LPD.',
      path: '/ressources'
    })

    setStructuredData('ressources-collection', {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://cybersuisse.ch/ressources#collection',
      name: 'Ressources cybersécurité — CyberSuisse',
      description:
        'Articles, guides et checklists en cybersécurité pour PME suisses, rédigés par Luís Modesto.',
      url: 'https://cybersuisse.ch/ressources',
      inLanguage: 'fr-CH',
      isPartOf: { '@id': 'https://cybersuisse.ch/#website' },
      hasPart: articles.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.description,
        url: `https://cybersuisse.ch/ressources/${a.slug}`,
        author: { '@id': 'https://cybersuisse.ch/a-propos#luis-modesto' },
        publisher: { '@id': 'https://cybersuisse.ch/#business' },
        inLanguage: 'fr-CH'
      }))
    })

    setStructuredData('ressources-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cybersuisse.ch/' },
        { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://cybersuisse.ch/ressources' }
      ]
    })

    return () => {
      setStructuredData('ressources-collection', null)
      setStructuredData('ressources-breadcrumb', null)
    }
  }, [])

  return (
    <div className="bg-bg">
      {/* HERO */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4 border-brand-amber/40 text-brand-amber">
            <BookOpen size={14} className="mr-1.5" /> Ressources
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-fg">
            Ressources — Guides et conseils cybersécurité pour PME suisses
          </h1>
          <p className="mt-6 text-lg text-fg-secondary leading-relaxed">
            Des guides pragmatiques pour les patrons et responsables IT de PME suisses. Pas de catastrophisme,
            pas de jargon inutile : des actions concrètes, applicables aujourd'hui, écrites depuis Biel/Bienne.
          </p>
          <p className="mt-4 text-fg-secondary leading-relaxed">
            Chaque article répond à une question que mes clients me posent vraiment — fiduciaires, cabinets,
            bureaux d'architectes, PME industrielles de la région.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="bg-bg-inset border-white/10 hover:border-brand-amber/40 transition-colors flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.topic}
                  </Badge>
                  <span className="text-xs text-fg-secondary inline-flex items-center gap-1">
                    <Clock size={12} /> {article.readingTime}
                  </span>
                </div>
                <CardTitle className="text-fg text-xl leading-snug">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-fg-secondary leading-relaxed flex-1">
                  {article.description}
                </p>
                <a
                  href={`/ressources/${article.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/ressources/${article.slug}`)
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-amber hover:text-brand-amber/80 transition-colors"
                >
                  Lire l'article <ArrowRight size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-fg">
            Vous préférez en parler directement ?
          </h2>
          <p className="mt-4 text-fg-secondary leading-relaxed">
            Le Premier Regard, c'est 45 minutes offertes pour identifier vos trois risques principaux,
            sans installation ni engagement. Plus rapide qu'un article.
          </p>
          <Button
            onClick={() => onNavigate('premier-regard')}
            className="mt-6 bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-medium"
          >
            Réserver mon Premier Regard <ArrowRight size={16} className="ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
