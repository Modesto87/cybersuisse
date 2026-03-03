import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SEOContent from '@/components/SEOContent'
import { 
  CheckCircle, Shield, MagnifyingGlass, ChartLineUp, 
  Lightbulb, Handshake, Target, CurrencyEur, Envelope, Phone,
  TrendUp, Strategy
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface ProtectionPmeActivePageProps {
  onNavigate: (page: 'contact') => void
}

export default function ProtectionPmeActivePage({ onNavigate }: ProtectionPmeActivePageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = {
    seoTitle: 'Protection PME Active + Rapport Stratégique – Cybersécurité continue pour PME Biel/Bienne',
    seoDescription: 'Découvrez l’offre Protection PME Active : rapports stratégiques mensuels, analyse des risques, recommandations prioritaires et accompagnement ciblé pour PME.',
    badge: 'Abonnement CyberSuisse Protect™',
    title: 'Protection PME Active + Rapport Stratégique',
    subtitle: 'Cybersécurité continue, vision stratégique et rapports actionnables pour PME.',
    intro: 'Dans un paysage où les PME suisses sont de plus en plus ciblées par des cyberattaques — même lorsqu’elles n’ont pas encore fait l’expérience d’un incident — il est crucial d’adopter une approche plus structurée de sécurité, au-delà de la simple surveillance. Ce plan va plus loin que le niveau Essentiel, en transformant les données de sécurité en stratégie concrète et actions ciblées.',
    
    includesTitle: 'Ce que comprend ce plan',
    includes: [
      {
        title: 'Analyse approfondie des risques',
        icon: MagnifyingGlass,
        items: [
          'Évaluation régulière de vos vulnérabilités critiques',
          'Identification des vecteurs d’exposition prioritaires',
          'Mise en perspective des résultats avec votre contexte business'
        ]
      },
      {
        title: 'Rapports stratégiques mensuels',
        icon: TrendUp,
        items: [
          'Synthèse claire et visuelle des risques et de leur évolution',
          'Explication contextualisée des impacts possibles',
          'Tableau de bord simplifié des indicateurs clés de sécurité'
        ]
      },
      {
        title: 'Recommandations actionnables',
        icon: Target,
        items: [
          'Priorisation précise des actions à mettre en œuvre',
          'Conseils structurés selon vos ressources internes'
        ]
      },
      {
        title: 'Accompagnement et revue périodique',
        icon: Handshake,
        items: [
          'Révisions mensuelles avec toi (visio/échanges)',
          'Ajustement de la feuille de route sécurité',
          'Support pour décisions métier liées à la cybersécurité'
        ]
      }
    ],

    benefitsTitle: 'Comment ce plan aide réellement votre PME',
    benefits: [
      { title: 'Vision stratégique', text: 'Au lieu de simples données techniques, ce plan fournit une vue d’ensemble des risques prioritaires, expliqués dans le langage du décideur, ce qui rend les rapports beaucoup plus utiles qu’une notification automatisée.', icon: Shield },
      { title: 'Décisions tactiques', text: 'Chaque rapport contient une priorisation claire des actions, vous permettant d’agir là où l’impact est le plus fort, tout en restant dans des budgets maîtrisés.', icon: ChartLineUp },
      { title: 'Accompagnement humain', text: 'Vous ne recevez pas juste des chiffres : chaque mois, nous discutons de ce qui compte, ce que vous pouvez faire, et comment structurer vos efforts.', icon: Handshake }
    ],

    pricingTitle: 'Tarification',
    pricingPrice: 'CHF 449 / mois',
    pricingDesc: 'Tarif mensuel – plan flexible sans engagement long terme.',
    pricingNote: 'Ce tarif place ce plan dans une catégorie réaliste et compétitive : plus riche en valeur que le niveau Essentiel, mais accessible pour la majorité des PME qui veulent progresser sans basculer dans une solution full enterprise coûteuse.',

    targetTitle: 'Pour qui est ce plan ?',
    targetSubtitle: 'Idéal pour :',
    targetItems: [
      'PME attachées à une amélioration continue de leur posture cyber',
      'Décideurs qui veulent comprendre leur profil de risque global',
      'Entreprises souhaitant prendre des décisions basées sur un rapport stratégique compréhensible',
      'Celles sans équipe interne IT/Sécu mais qui veulent structurer leur démarche'
    ],

    faqTitle: 'Foire Aux Questions (FAQ)',
    faqs: [
      { q: 'Qu’est-ce qui distingue ce plan du plan Essentiel ?', a: 'Le plan Active ajoute une analyse de tendance, une priorisation avancée, des rapports stratégiques et un accompagnement programmé.' },
      { q: 'Est-ce que ce plan inclut une réponse à incident 24/7 ?', a: 'Non — ce plan fournit des rapports et un accompagnement stratégique mensuel. Pour des besoins opérationnels plus réactifs, voir le plan Premium ou des services dédiés.' },
      { q: 'Puis-je changer de plan après ?', a: 'Oui — tu peux évoluer vers un plan Premium ou revenir au plan Essentiel selon tes besoins et budget.' }
    ],

    ctaTitle: 'Prêt à renforcer votre cybersécurité avec une stratégie claire ?',
    ctaSubtitle: 'Contactez-nous pour un diagnostic offert et voir comment ce plan s’applique à votre entreprise.',
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
            <span className="text-red-400">📌</span>
            {copy.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.benefits.map((benefit, idx) => (
              <Card key={idx} className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border-[#333]">
                <CardContent className="p-6">
                  <benefit.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
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
