import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SEOContent from '@/components/SEOContent'
import { 
  CheckCircle, Shield, MagnifyingGlass, ChartLineUp, 
  Handshake, Target, CurrencyEur, Envelope, Phone,
  TrendUp, Strategy, Crown, Headset, Notebook
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface ProtectionPmePremiumPageProps {
  onNavigate: (page: 'contact') => void
}

export default function ProtectionPmePremiumPage({ onNavigate }: ProtectionPmePremiumPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = {
    seoTitle: 'Protection PME Premium + Conseils – Cybersécurité stratégique pour PME Biel/Bienne',
    seoDescription: 'Découvrez l’offre Premium de CyberSuisse Protect™ : rapports approfondis, conseils stratégiques mensuels, simulations, plan d’amélioration et support prioritaire pour protéger durablement votre PME.',
    badge: 'Abonnement CyberSuisse Protect™',
    title: 'Protection PME Premium + Conseils',
    subtitle: 'Sécurité proactive, vision stratégique et accompagnement haut niveau pour PME.',
    intro: 'Les PME évoluent dans un environnement où les menaces cyber sont de plus en plus sophistiquées et où la sécurité ne peut plus être réactive ou fragmentée. Ce plan Premium apporte une vision globale, stratégique et continue de votre cybersécurité. Ce niveau s’adresse aux PME qui veulent penser leur sécurité comme un avantage stratégique, pas seulement comme une dépense technique.',
    
    includesTitle: 'Ce que comprend le plan Premium',
    includes: [
      {
        title: 'Rapports stratégiques mensuels approfondis',
        icon: ChartLineUp,
        items: [
          'Analyses détaillées et contextualisées des risques',
          'Tableau de bord intelligible et priorisation avancée',
          'Recommandations précises pour décisions métiers'
        ]
      },
      {
        title: 'Simulations & scénarios de menace',
        icon: Target,
        items: [
          'Exercices pratiques comme simulations ciblées (par ex. phishing, vecteurs représentatifs du risque)',
          'Analyse de l’impact potentiel et plan d’atténuation'
        ]
      },
      {
        title: 'Plan de réponse personnalisé',
        icon: Strategy,
        items: [
          'Plan d’amélioration des défenses adapté à votre organisation',
          'Roadmap stratégique sur plusieurs mois',
          'Indicateurs de progrès pour suivre l’évolution'
        ]
      },
      {
        title: 'Accompagnement conseil prioritaire',
        icon: Headset,
        items: [
          'Support prioritaire par e-mail/visio',
          'Réunions stratégiques bimestrielles',
          'Orientation sur décisions de sécurité, investissements et politiques'
        ]
      },
      {
        title: 'Revue de politiques & conformité',
        icon: Notebook,
        items: [
          'Vérification des pratiques internes',
          'Recommandations pour alignement avec normes ou bonnes pratiques'
        ]
      }
    ],

    benefitsTitle: 'Bénéfices clés pour votre entreprise',
    benefits: [
      { title: 'Vision stratégique complète', text: 'Des rapports enrichis et une pondération des risques au niveau métier pour faciliter les décisions. Permet d’aller au-delà de simples alertes techniques.', icon: MagnifyingGlass },
      { title: 'Conseil proactif', text: 'Vous ne subissez pas l’évolution des risques — vous l’anticipez avec des recommandations précises.', icon: Shield },
      { title: 'Amélioration continue', text: 'Contrairement à un audit ponctuel, ce plan donne une feuille de route sécuritaire qui s’adapte avec le temps.', icon: TrendUp },
      { title: 'Support prioritaire', text: 'Vous bénéficiez d’un accès direct à un expert pour orienter vos prochains choix de sécurité.', icon: Handshake }
    ],

    pricingTitle: 'Tarification',
    pricingPrice: 'CHF 799 / mois',
    pricingDesc: 'Tarif mensuel sans engagement long terme — conçu pour être compétitif tout en offrant un service stratégique de haut niveau.',
    pricingNote: 'Ce niveau est équivalent aux offres premium que d’autres fournisseurs ajustent en créneau professionnel, mais ici adapté à la réalité d’une PME et fourni par un expert qui accompagne personnellement chaque client.',

    faqTitle: 'Questions fréquentes – FAQ',
    faqs: [
      { q: 'En quoi ce plan est-il différent du plan Active ?', a: 'La version Premium inclut des conseils stratégiques réguliers, des simulations de menaces et un plan d’amélioration personnalisé, en plus des analyses et rapports avancés.' },
      { q: 'Est-ce que ce plan inclut un support d’incident 24/7 ?', a: 'Non — il inclut un support prioritaire planifié et conseil, pas une réponse de type SOC 24/7. Pour des besoins d’intervention très rapide, des services complémentaires peuvent être discutés.' },
      { q: 'Puis-je passer à ce plan depuis un niveau inférieur ?', a: 'Oui — il suffit de nous le demander, nous procéderons à l’ajustement.' }
    ],

    ctaTitle: 'Prêt à passer à un niveau stratégique ?',
    ctaSubtitle: 'Contactez-nous pour un diagnostic offert et voir comment ce plan peut transformer la sécurité de votre PME.',
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
          <Badge className="mb-4 bg-red-900/80 text-white border border-red-600/40 px-3 py-1 text-sm shadow-[0_0_10px_rgba(229,57,53,0.5)]">
            <Crown size={14} className="inline mr-1 -mt-0.5 text-yellow-500" weight="fill"/>
            {copy.badge}
          </Badge>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.includes.map((feature, idx) => (
              <Card key={idx} className={`bg-[#1A1A1A] border-[#333] hover:border-red-900/50 transition-colors ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`}>
                <CardContent className="p-6 md:p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-950/30 p-3 rounded-xl border border-red-900/50">
                      <feature.icon className="w-7 h-7 text-red-400" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" weight="fill" />
                        <span className="text-zinc-300 leading-relaxed text-sm md:text-base">{item}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.benefits.map((benefit, idx) => (
              <Card key={idx} className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border-[#333]">
                <CardContent className="p-6 md:p-8 flex items-start gap-5">
                  <div className="mt-1">
                    <benefit.icon className="w-12 h-12 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{benefit.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="max-w-4xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-red-950/40 to-[#0A0A0A] border-red-500/30 shadow-[0_0_30px_rgba(229,57,53,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
            <CardContent className="p-8 md:p-12 text-center flex flex-col justify-center h-full relative z-10">
              <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                💎 {copy.pricingTitle} 💎
              </h2>
              <div className="text-5xl md:text-6xl font-black text-white my-6">
                {copy.pricingPrice}
              </div>
              <p className="text-lg text-red-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                {copy.pricingDesc}
              </p>
              <div className="bg-black/40 p-5 rounded-lg border border-white/5 border-t-white/10 mx-auto max-w-3xl">
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  {copy.pricingNote}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-red-400">🤔</span>
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
