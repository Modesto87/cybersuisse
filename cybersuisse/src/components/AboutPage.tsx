import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Shield,
  CheckCircle,
  Certificate,
  Users,
  TrendUp,
  LinkedinLogo,
  EnvelopeSimple
} from '@phosphor-icons/react'
import SEOContent from './SEOContent'
import profileImage from '@/assets/images/eu1.png'
import profileImageWebp from '@/assets/images/eu1.webp'
import { useTranslation } from 'react-i18next'

interface AboutPageProps {
  onNavigate: (page: 'contact') => void
}

const certifications = [
  { name: 'Security Analyst', issuer: 'TryHackMe', year: '2025' },
  { name: 'Technicien CyberSécurité', issuer: 'EC-Council', year: '2025' },
  { name: 'Ethical Hacker Essentials', issuer: 'EC-Council', year: '2024' },
  { name: 'Développeur Web', issuer: 'Skill and You + Studi', year: '2024' }
]

const trustSignals = [
  'Formation continue en menaces cyber et conformité',
  'Approche pratique orientée décisions business',
  'Communication claire pour dirigeants non techniques',
  'Confidentialité, transparence et accompagnement de proximité'
]

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = language === 'en'
    ? {
        seoTitle: 'About – Cybersecurity Expert for SMEs in Biel/Bienne, Switzerland | CyberSuisse',
        seoDescription:
          'CyberSuisse supports SMEs in Biel/Bienne with continuous cybersecurity, clear monthly security reports, and practical risk decisions for business leaders.',
        h1: 'About CyberSuisse – Cybersecurity expertise for SMEs in Biel/Bienne',
        missionTitle: 'Mission and purpose',
        mission:
          'Our mission is to protect Swiss SMEs from cyber risk in a continuous and affordable way. Our vision is clear and understandable security for companies without internal security teams.',
        problem:
          'We solve a recurring problem: many SMEs are exposed to cyber threats but receive overly technical audits that are difficult to act on.',
        audience:
          'Our main audience is SMEs in Biel/Bienne and the region, as well as Swiss companies that need practical guidance.',
        valuesTitle: 'Our values',
        values: ['Trust', 'Transparency', 'Practical execution'],
        storyTitle: 'My story and cybersecurity experience',
        story:
          'I built CyberSuisse after working on cybersecurity and secure development projects where I repeatedly saw the same need: decision-makers want clear recommendations, not only technical jargon. This is why I chose a monthly subscription model.',
        modelTitle: 'Why the subscription model',
        modelPoints: [
          'Our focus is to provide clear monthly security reports oriented to action.',
          'We work with SMEs to translate technical complexity into practical decisions.',
          'Each report is part of a continuous protection strategy.'
        ],
        credibilityTitle: 'Credibility and trust',
        ctaTitle: 'Next step',
        ctaText: 'Start with a short, concrete exchange to evaluate your current risk level and the right monthly plan.'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Sobre – Especialista em cibersegurança para PME em Biel/Bienne, Suíça | CyberSuisse',
          seoDescription:
            'A CyberSuisse apoia PME em Biel/Bienne com segurança contínua, relatórios mensais claros e decisões práticas de risco para gestores.',
          h1: 'Sobre a CyberSuisse – expertise em cibersegurança para PME em Biel/Bienne',
          missionTitle: 'Missão e propósito',
          mission:
            'A nossa missão é proteger PME suíças de riscos cibernéticos de forma contínua e acessível. A visão é tornar a segurança clara e compreensível para empresas sem equipa interna.',
          problem:
            'Resolvemos um problema recorrente: muitas PME estão expostas, mas recebem auditorias demasiado técnicas e difíceis de transformar em ações.',
          audience:
            'O público principal são PME de Biel/Bienne e região, bem como empresas suíças que precisam de orientação prática.',
          valuesTitle: 'Os nossos valores',
          values: ['Confiança', 'Transparência', 'Prática'],
          storyTitle: 'A minha história e experiência em cibersegurança',
          story:
            'Criei a CyberSuisse após projetos de cibersegurança e desenvolvimento seguro onde vi sempre a mesma necessidade: decisores querem recomendações claras, não apenas jargão técnico. Por isso escolhi o modelo por assinatura.',
          modelTitle: 'Porque o modelo por assinatura',
          modelPoints: [
            'O nosso foco é fornecer relatórios de segurança mensais claros e orientados para ação.',
            'Trabalhamos com PME para traduzir complexidade técnica em decisões práticas.',
            'Cada relatório faz parte de uma estratégia contínua de proteção.'
          ],
          credibilityTitle: 'Credibilidade e confiança',
          ctaTitle: 'Próximo passo',
          ctaText: 'Comece com uma conversa curta e concreta para avaliar o risco atual e o plano mensal ideal.'
        }
      : {
          seoTitle: 'À propos – Expert en cybersécurité pour PME à Biel/Bienne, Suisse | CyberSuisse',
          seoDescription:
            'CyberSuisse est un expert en cybersécurité dédié aux PME de Biel/Bienne et Suisse romande, offrant des protections continues et des rapports mensuels clairs.',
          h1: 'À propos de CyberSuisse – expertise en cybersécurité pour PME',
          missionTitle: 'Mission et raison d’être',
          mission:
            'Notre mission est de protéger les PME suisses contre les risques cyber de manière continue et accessible. Notre vision est une sécurité claire et compréhensible pour les entreprises sans ressources internes dédiées.',
          problem:
            'Nous résolvons un problème concret: beaucoup de PME sont exposées, mais reçoivent des audits ponctuels trop techniques et difficiles à transformer en décisions.',
          audience:
            'Notre public cible: les PME de Biel/Bienne et de la région, ainsi que les entreprises suisses qui veulent une sécurité pragmatique.',
          valuesTitle: 'Nos valeurs',
          values: ['Confiance', 'Transparence', 'Pragmatisme'],
          storyTitle: 'Mon histoire et mon expérience en cybersécurité',
          story:
            'J’ai créé CyberSuisse après des missions en cybersécurité et en développement sécurisé où le même besoin revenait: les dirigeants veulent des recommandations claires, pas uniquement du jargon technique. Le modèle par abonnement répond à cette réalité et évite des coûts initiaux trop élevés.',
          modelTitle: 'Sécurité continue et rapports de sécurité mensuels',
          modelPoints: [
            'Notre focus est de fournir des rapports de sécurité mensuels clairs et orientés action.',
            'Nous travaillons avec les PME pour traduire la complexité technique en décisions pratiques.',
            'Chaque rapport fait partie d’une stratégie continue de protection.'
          ],
          credibilityTitle: 'Crédibilité et confiance',
          ctaTitle: 'Passez à l’action',
          ctaText: 'Commencez par un échange court et concret pour évaluer votre niveau de risque actuel et le plan mensuel adapté.'
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
      className="min-h-screen py-12 bg-bg text-fg"
    >
      <SEOContent page="about" title={copy.seoTitle} description={copy.seoDescription} />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="mb-14" aria-labelledby="about-title">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <h1 id="about-title" className="text-4xl md:text-5xl font-bold mb-6">{copy.h1}</h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-brand-amber/10 text-brand-amber border border-brand-amber/40">PME Biel/Bienne</Badge>
                <Badge className="bg-brand-amber/10 text-brand-amber border border-brand-amber/40">Sécurité continue</Badge>
                <Badge className="bg-brand-amber/10 text-brand-amber border border-brand-amber/40">Rapports mensuels</Badge>
              </div>
              <p className="text-fg text-lg leading-relaxed">{copy.mission}</p>
            </div>
            <Card className="border-[#333] bg-[#1A1A1A] overflow-hidden">
              <picture>
                <source srcSet={profileImageWebp} type="image/webp" />
                <img
                  src={profileImage}
                  alt="Consultant CyberSuisse en cybersécurité pour PME à Biel/Bienne"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <CardContent className="p-5">
                <p className="text-fg text-sm leading-relaxed">{copy.audience}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="mission-title">
          <h2 id="mission-title" className="text-3xl font-bold mb-6">{copy.missionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-[#333] bg-[#1A1A1A]">
              <CardHeader>
                <CardTitle className="text-fg flex items-center gap-2">
                  <Shield size={20} className="text-brand-amber" />
                  Problème que nous résolvons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fg">{copy.problem}</p>
              </CardContent>
            </Card>

            <Card className="border-[#333] bg-[#1A1A1A]">
              <CardHeader>
                <CardTitle className="text-fg flex items-center gap-2">
                  <Users size={20} className="text-brand-amber" />
                  {copy.valuesTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-fg">
                  {copy.values.map((value) => (
                    <li key={value} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-amber" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="story-title">
          <h2 id="story-title" className="text-3xl font-bold mb-4">{copy.storyTitle}</h2>
          <Card className="border-[#333] bg-[#1A1A1A]">
            <CardContent className="p-6">
              <p className="text-fg leading-relaxed mb-4">{copy.story}</p>
              <h3 className="text-xl font-semibold mb-3 text-fg">{copy.modelTitle}</h3>
              <ul className="space-y-2 text-fg">
                {copy.modelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <TrendUp size={16} className="text-brand-amber mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14" aria-labelledby="cred-title">
          <h2 id="cred-title" className="text-3xl font-bold mb-6">{copy.credibilityTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-[#333] bg-[#1A1A1A]">
                <CardContent className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-fg font-semibold">{cert.name}</h3>
                    <p className="text-fg text-sm">{cert.issuer}</p>
                  </div>
                  <Badge className="bg-brand-amber/10 text-brand-amber border border-brand-amber/40">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-[#333] bg-[#1A1A1A]">
            <CardHeader>
              <CardTitle className="text-fg flex items-center gap-2">
                <Certificate size={20} className="text-brand-amber" />
                Signaux de confiance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-fg">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-brand-amber mt-1" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8" aria-labelledby="cta-title">
          <Card className="border-brand-amber/40 bg-brand-amber/10">
            <CardContent className="p-8 text-center">
              <h2 id="cta-title" className="text-3xl font-bold mb-3">{copy.ctaTitle}</h2>
              <p className="text-fg mb-6 max-w-3xl mx-auto">{copy.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="btn-primary" onClick={() => onNavigate('contact')}>
                  <EnvelopeSimple size={18} className="mr-2" />
                  Planifier un diagnostic de sécurité gratuit
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary" asChild>
                  <a href="/abonnements/pro">Découvrir nos plans d’abonnement</a>
                </Button>
              </div>
              <div className="mt-5 flex justify-center">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg/90 hover:text-fg text-sm inline-flex items-center gap-2"
                >
                  <LinkedinLogo size={18} />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.div>
  )
}
