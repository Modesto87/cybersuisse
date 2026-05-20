import { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Envelope, NumberCircleOne, NumberCircleTwo, NumberCircleThree } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface PremierRegardPageProps {
  onNavigate: (page: string) => void
}

const steps = [
  {
    icon: NumberCircleOne,
    title: "Avant l'entretien",
    text: 'Une heure de recherche préparatoire sur votre structure, en sources publiques uniquement. Sans accès, sans intrusion.'
  },
  {
    icon: NumberCircleTwo,
    title: 'Pendant les 45 minutes',
    text: "Cinq questions sur votre fonctionnement réel. Puis je vous montre ce que j'ai trouvé, preuve à l'appui, sur votre écran."
  },
  {
    icon: NumberCircleThree,
    title: 'Le lendemain',
    text: "Vous recevez par e-mail un document d'une page résumant les 3 risques identifiés. Ce document est à vous. Sans obligation de suite."
  }
]

export default function PremierRegardPage(_props: PremierRegardPageProps) {
  useEffect(() => {
    applyPageSeo({
      title: 'Premier Regard offert — CyberSuisse',
      description: '45 minutes pour identifier vos 3 risques principaux. Gratuit, sans engagement, sans installation. Pour PMEs de Biel/Bienne.',
      path: '/premier-regard'
    })

    setStructuredData('premier-regard-faq', {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://cybersuisse.ch/premier-regard#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le Premier Regard est-il vraiment gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, totalement. 45 minutes en visioconférence ou sur place dans la région de Biel/Bienne. Aucune obligation d'achat, aucune carte de crédit demandée."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il pendant ces 45 minutes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nous identifions ensemble vos 3 risques cybersécurité les plus pressants pour votre PME. Vous repartez avec une lecture claire et des actions concrètes à mettre en place, même sans suite avec CyberSuisse."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il installer quelque chose sur nos systèmes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Aucune installation, aucun accès distant, aucun outil intrusif. C'est une conversation structurée basée sur votre contexte métier."
          }
        },
        {
          "@type": "Question",
          "name": "Pour quelles entreprises est-ce adapté ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMEs suisses (5 à 80 personnes), notamment fiduciaires, cabinets d'avocats, bureaux d'architectes, PMEs industrielles. Aucun pré-requis technique côté entreprise."
          }
        }
      ]
    })

    return () => setStructuredData('premier-regard-faq', null)
  }, [])

  return (
    <div className="bg-bg">
      {/* HERO */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-fg">Premier Regard</h1>
          <p className="mt-4 text-lg text-fg-secondary">
            45 minutes pour connaître vos 3 risques principaux. Offert. Sans engagement.
          </p>
        </div>
      </section>

      {/* 3 ÉTAPES */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.title} className="bg-bg-inset border-white/10">
                <CardContent className="p-6">
                  <Icon size={36} className="text-brand-amber" weight="fill" />
                  <h3 className="mt-4 text-xl font-semibold text-fg">{s.title}</h3>
                  <p className="mt-3 text-fg-secondary leading-relaxed">{s.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CE QUE CE N'EST PAS */}
      <section className="bg-bg-inset border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-fg">Ce que ce n'est pas</h2>
            <blockquote className="mt-4 border-l-2 border-brand-amber/60 pl-4 text-fg-secondary leading-relaxed italic">
              Le Premier Regard n'est pas un argument de vente déguisé. C'est une démonstration. Si à la suite de cet entretien vous souhaitez aller plus loin, je vous présenterai les options disponibles. Si non, le document reste utile.
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA FINAL — NO FORM */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-fg-secondary">
            Pour demander votre Premier Regard, contactez-moi directement :
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="tel:+41782089545"
              className="flex items-center justify-center gap-3 p-5 rounded-md bg-bg-inset border border-white/10 hover:border-brand-amber/60 hover:bg-bg-overlay transition-colors"
            >
              <Phone size={22} className="text-brand-amber" />
              <span className="text-fg font-medium">078 208 95 45</span>
            </a>
            <a
              href="mailto:modesto@cybersuisse.ch"
              className="flex items-center justify-center gap-3 p-5 rounded-md bg-bg-inset border border-white/10 hover:border-brand-amber/60 hover:bg-bg-overlay transition-colors"
            >
              <Envelope size={22} className="text-brand-amber" />
              <span className="text-fg font-medium">modesto@cybersuisse.ch</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-fg-secondary">
            Réponse sous 24 heures ouvrables. Aucun démarchage. Vos données ne sont pas transmises à des tiers.
          </p>
        </div>
      </section>
    </div>
  )
}
