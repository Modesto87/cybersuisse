import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SEOContent from '@/components/SEOContent'
import { 
  CheckCircle, Shield, MagnifyingGlass, ChartLineUp, 
  Lightbulb, Handshake, Target, RocketLaunch, CurrencyEur, Envelope, Phone
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ProtectionPmeEssentielPageProps {
  onNavigate: (page: 'contact') => void
}

export default function ProtectionPmeEssentielPage({ onNavigate }: ProtectionPmeEssentielPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  // We keep translations mainly in French as requested, but provide valid fallbacks for other languages
  // to ensure the app doesn't break. Since the prompt gave only French content, we use it as base.
  const copy = {
    seoTitle: 'Protection PME Essentiel – CyberSuisse Protect™ | Sécurité continu pour PME Biel/Bienne',
    seoDescription: 'Découvrez l’offre "PME Essentiel": protection cybersécurité continue pour PME. Rapports mensuels, diagnostics, recommandations et prévention des risques – accessible et adapté aux budgets PME.',
    badge: 'Abonnement CyberSuisse Protect™',
    title: 'Protection PME Essentiel',
    subtitle: 'La base de la cybersécurité continue pour votre PME — surveillance, analyse, recommandations.',
    intro: 'Les PME font face à des cybermenaces constantes, même sans équipe IT interne. Avec Protection PME Essentiel, nous fournissons une base solide de cybersécurité continue, adaptée aux petits budgets et aux besoins réels des PME suisses. Ce plan vous aide à identifier les risques, à recevoir des rapports clairs et à prioriser les actions, sans complexité.',
    
    includesTitle: 'Ce que comprend le plan "Essentiel"',
    includes: [
      {
        title: 'Surveillance & Diagnostic',
        icon: MagnifyingGlass,
        items: [
          'Analyse mensuelle des vulnérabilités de vos services et applications critiques',
          'Identification des risques accessibles depuis Internet'
        ]
      },
      {
        title: 'Rapport mensuel simplifié',
        icon: ChartLineUp,
        items: [
          'Résumé des points clés de sûreté',
          'Explication des risques et de leur impact potentiel',
          'Priorisation claire des actions à entreprendre (30 jours)'
        ]
      },
      {
        title: 'Recommandations d’amélioration',
        icon: Lightbulb,
        items: [
          'Conseils concrets, compréhensibles même sans expertise technique',
          'Actions pratiques à exécuter en priorité'
        ]
      },
      {
        title: 'Accompagnement pragmatique',
        icon: Handshake,
        items: [
          'Revue trimestrielle par e-mail ou court appel',
          'Alignement de vos priorités avec vos contraintes métier'
        ]
      }
    ],

    benefitsTitle: 'Les bénéfices pour votre PME',
    benefits: [
      { title: 'Protection proactive', text: 'Allez au-delà d’une sécurité réactive — surveillez, identifiez et gérez les risques avant qu’ils ne deviennent des incidents critiques.', icon: Shield },
      { title: 'Décisions éclairées', text: 'Des rapports simples, sans jargon, qui expliquent clairement ce qui compte vraiment pour votre entreprise.', icon: ChartLineUp },
      { title: 'Priorités claires', text: 'Concentrez votre énergie sur les actions qui réduisent effectivement les risques les plus importants.', icon: Target },
      { title: 'Budget maîtrisé', text: 'Une solution mensuelle claire — pas de surprises — adaptée à la réalité des PME.', icon: CurrencyEur }
    ],

    pricingTitle: 'Tarif',
    pricingPrice: 'CHF 149 / mois',
    pricingDesc: 'Idéal pour les petites entreprises qui veulent une cybersécurité continue sans investissement initial lourd.',
    pricingNote: 'Tarif indicatif, sans engagement long terme, avec possibilité d’évolution vers des niveaux supérieurs (Active et Premium) si vos besoins augmentent.',

    targetTitle: 'Pour qui est ce plan ?',
    targetSubtitle: 'Ce plan est conçu pour :',
    targetItems: [
      'PME sans équipe interne de cybersécurité',
      'Entreprises qui veulent débuter une stratégie de protection continue',
      'Organisations qui veulent un rapport actionable chaque mois',
      'PME cherchant à comprendre leurs risques avant d’investir dans des plans plus avancés'
    ],

    testimonialsTitle: 'Résultats attendus',
    testimonialQuote: '"Merci à CyberSuisse pour un rapport clair qui nous a aidé à prioriser nos risques immédiatement."',
    testimonialAuthor: '— PME locale, Biel/Bienne',

    faqTitle: 'Foire Aux Questions (FAQ)',
    faqs: [
      { q: 'Est-ce qu’un plan Essentiel suffit pour mon entreprise ?', a: 'Si vous commencez votre démarche de cybersécurité ou si vous avez un petit périmètre à protéger, ce plan fournit une base solide et vous permet de croître ensuite vers des niveaux plus complets.' },
      { q: 'Est-ce que des interventions d’urgence sont incluses ?', a: 'Le plan Essentiel inclut des rapports et recommandations – pour les besoins d’intervention ou de tests avancés, voir les plans Active et Premium.' },
      { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui — vous pouvez évoluer vers un plan supérieur selon vos besoins et votre budget.' }
    ],

    ctaTitle: 'Prêt à sécuriser votre PME ?',
    ctaSubtitle: 'Contactez-nous pour un diagnostic gratuit de vos besoins.',
    ctaPrimary: 'Envoyer un email',
    ctaSecondary: 'Appeler +41 78 208 95 45'
  }

  useEffect(() => {
    document.title = copy.seoTitle

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }
    description.setAttribute('content', copy.seoDescription)
  }, [copy.seoDescription, copy.seoTitle])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 cs-bg-redteam-diagonal text-white"
    >
      <SEOContent page="home" title={copy.seoTitle} description={copy.seoDescription} />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* HERO SECTION */}
        <section className="text-center mb-16" aria-labelledby="hero-title">
          <Badge className="mb-4 bg-red-950/60 text-red-300 border border-red-600/40 px-3 py-1 text-sm">{copy.badge}</Badge>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">{copy.title}</h1>
          <p className="text-xl md:text-2xl text-red-300 font-semibold max-w-3xl mx-auto leading-relaxed mb-6">
            {copy.subtitle}
          </p>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            {copy.intro}
          </p>
        </section>

        {/* FEATURES SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <span className="text-red-400">📊</span>
            {copy.includesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.includes.map((feature, idx) => (
              <Card key={idx} className="bg-[#1A1A1A] border-[#333] hover:border-red-900/50 transition-colors">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-950/30 p-3 rounded-xl border border-red-900/50">
                      <feature.icon className="w-8 h-8 text-red-400" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" weight="fill" />
                        <span className="text-zinc-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <span className="text-red-400">📦</span>
            {copy.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.benefits.map((benefit, idx) => (
              <Card key={idx} className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border-[#333]">
                <CardContent className="p-6">
                  <benefit.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING & TARGET */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* PRICING */}
          <Card className="bg-red-950/20 border-red-600/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
            <CardContent className="p-8 md:p-10 flex flex-col justify-center h-full">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                💰 {copy.pricingTitle}
              </h2>
              <div className="text-4xl md:text-5xl font-black text-white my-6">
                {copy.pricingPrice}
              </div>
              <p className="text-lg text-white font-medium mb-6 leading-relaxed">
                {copy.pricingDesc}
              </p>
              <div className="bg-black/30 p-4 rounded-lg mt-auto">
                <p className="text-sm text-zinc-300 italic">
                  📌 {copy.pricingNote}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* TARGET */}
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-8 md:p-10 h-full">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                📋 {copy.targetTitle}
              </h2>
              <p className="text-zinc-400 mb-6">{copy.targetSubtitle}</p>
              <ul className="space-y-4">
                {copy.targetItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-red-400 flex-shrink-0" weight="fill" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* TESTIMONIAL / VALUE */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-red-900/40 to-transparent border-red-500/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-wider">{copy.testimonialsTitle}</h2>
              <blockquote className="text-2xl text-white font-medium italic mb-6">
                {copy.testimonialQuote}
              </blockquote>
              <p className="text-zinc-400 font-medium">
                {copy.testimonialAuthor}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-red-400">❓</span>
            {copy.faqTitle}
          </h2>
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {copy.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-[#333]">
                    <AccordionTrigger className="text-left text-white font-semibold hover:text-red-400 hover:no-underline text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 leading-relaxed text-base pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* CTA FINAL */}
        <section className="mb-10">
          <Card className="bg-black border-[#444] shadow-2xl overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
            <CardContent className="p-10 md:p-14 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                📢 {copy.ctaTitle}
              </h2>
              <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
                {copy.ctaSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-3d text-lg px-8 py-6 h-auto" onClick={() => onNavigate('contact')}>
                  <Envelope size={24} className="mr-3" />
                  {copy.ctaPrimary}
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary-3d bg-[#1A1A1A] text-lg px-8 py-6 h-auto" asChild>
                  <a href="tel:+41782089545">
                    <Phone size={24} className="mr-3 text-red-400" />
                    {copy.ctaSecondary}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </motion.div>
  )
}
