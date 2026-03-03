import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  MagnifyingGlass,
  Globe,
  Users,
  Database,
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  FileText,
  Network,
  EnvelopeSimple,
  Clock,
  Target,
  Binoculars,
  Fingerprint,
  User,
  Buildings
} from '@phosphor-icons/react'
import Logo from './Logo'
import SEOContent from './SEOContent'
import { useTranslation } from 'react-i18next'

interface OSINTPageProps {
  onNavigate: (page: 'contact') => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function OSINTPage({ onNavigate }: OSINTPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        seoTitle: 'OSINT & Digital Investigation in Biel/Bienne (Switzerland) | Due Diligence & Discreet Research',
        seoDescription: '🔍 OSINT in Biel/Bienne: digital investigations (open sources), due diligence, profile checks, online reputation and cyber investigations (breaches, attack surface). Discreet and compliant (Swiss law/GDPR).',
        heroTitle: 'OSINT & Digital Investigation',
        heroSubtitle: 'Discreet, legal, and actionable OSINT for individuals and businesses in Switzerland.',
        servicesTitle: 'OSINT Services',
        toolsTitle: 'Tools & Platforms',
        methodologyTitle: 'Methodology',
        benefitsTitle: 'Key Benefits',
        ctaTitle: 'Need an OSINT Investigation?',
        ctaText: 'Describe your needs and scope. I respond within 24–48h.',
        ctaButton: 'Contact me',
        services: [
          {
            icon: User,
            title: 'People Investigation',
            description: 'Discreet digital investigation via open sources: profile consistency, online reputation, red flags, and items to clarify.',
            features: [
              'Consistency checks (timeline, public presence, aliases)',
              'Reputation analysis and weak signals (public sources)',
              'Recruitment context: items to validate before hiring',
              'Clear, actionable synthesis (facts, sources, confidence)'
            ],
            popular: true
          },
          {
            icon: Buildings,
            title: 'Company Due Diligence',
            description: 'Before signing, granting access, or committing budget: assess reputational and operational risk via open sources.',
            features: [
              'Corporate structure analysis',
              'Verification of executives and shareholders',
              'Reputational risk assessment',
              'Partners/suppliers context (risks & red flags)'
            ],
            popular: false
          },
          {
            icon: Network,
            title: 'Cyber Investigation',
            description: 'Detect data leaks, infrastructure exposure, and attack surface analysis.',
            features: [
              'Exposed data detection (breaches)',
              'Infrastructure mapping',
              'Attack surface analysis',
              'Dark web monitoring'
            ],
            popular: false
          },
          {
            icon: Fingerprint,
            title: 'Threat Analysis',
            description: 'Identification and analysis of potential threats via open-source intelligence.',
            features: [
              'Monitoring targeted threats',
              'Disinformation campaign analysis',
              'Geopolitical risk assessment',
              'Custom alerts'
            ],
            popular: false
          }
        ],
        tools: [
          { name: 'OSINT Framework', category: 'Framework' },
          { name: 'Maltego', category: 'Analysis' },
          { name: 'theHarvester', category: 'Collection' },
          { name: 'Recon-ng', category: 'Automation' },
          { name: 'Shodan', category: 'Infrastructure' },
          { name: 'Censys', category: 'Infrastructure' },
          { name: 'HaveIBeenPwned', category: 'Security' },
          { name: 'DeHashed', category: 'Breaches' },
          { name: 'Intelligence X', category: 'Dark Web' },
          { name: 'SpiderFoot', category: 'Automation' }
        ],
        methodology: [
          {
            phase: 'Planning',
            icon: Target,
            description: 'Define objectives, scope, and methodology tailored to your needs.',
            steps: ['Requirements analysis', 'Scope definition', 'Source selection', 'Collection plan']
          },
          {
            phase: 'Collection',
            icon: Database,
            description: 'Systematic gathering of information via open sources and advanced OSINT techniques.',
            steps: ['Public sources', 'Social media', 'Databases', 'Specialized APIs']
          },
          {
            phase: 'Analysis',
            icon: MagnifyingGlass,
            description: 'Processing, correlation, and analysis of collected data to extract relevant insights.',
            steps: ['Data correlation', 'Pattern analysis', 'Information validation', 'Risk assessment']
          },
          {
            phase: 'Reporting',
            icon: FileText,
            description: 'Results presented in a structured report with actionable recommendations.',
            steps: ['Detailed report', 'Visualizations', 'Recommendations', 'Post-analysis support']
          }
        ],
        benefits: [
          { icon: Eye, title: 'Full Visibility', description: 'Discover what is visible about your organization or targets via open sources.' },
          { icon: Shield, title: 'Risk Prevention', description: 'Identify potential threats before they become critical.' },
          { icon: Target, title: 'Informed Decisions', description: 'Base your decisions on verified and up-to-date information.' },
          { icon: Clock, title: 'Real Time', description: 'Continuous monitoring of changes and evolutions.' }
        ]
      }
    : language === 'pt'
      ? {
          seoTitle: 'OSINT & Investigação Digital em Biel/Bienne (Suíça) | Due Diligence & Pesquisa Discreta',
          seoDescription: '🔍 OSINT em Biel/Bienne: investigação digital (fontes abertas), due diligence, verificação de perfis, reputação online e investigações cyber. Discreto e conforme (lei suíça/RGPD).',
          heroTitle: 'OSINT & Investigação Digital',
          heroSubtitle: 'Investigação discreta, legal e acionável para indivíduos e empresas na Suíça.',
          servicesTitle: 'Serviços OSINT',
          toolsTitle: 'Ferramentas & Plataformas',
          methodologyTitle: 'Metodologia',
          benefitsTitle: 'Benefícios Chave',
          ctaTitle: 'Precisa de uma investigação OSINT?',
          ctaText: 'Descreva a sua necessidade e o escopo. Resposta em 24–48h.',
          ctaButton: 'Contacte-me',
          services: [
            {
              icon: User,
              title: 'Investigação de Pessoas',
              description: 'Investigação digital discreta via fontes abertas: coerência de perfil, reputação online, sinais de alerta e elementos a clarificar.',
              features: [
                'Verificação de coerência (percurso, presença pública, pseudónimos)',
                'Análise de reputação e sinais fracos (fontes públicas)',
                'Contexto de recrutamento: elementos a validar antes da contratação',
                'Síntese clara e acionável (factos, fontes, nível de confiança)'
              ],
              popular: true
            },
            {
              icon: Buildings,
              title: 'Due Diligence Empresarial',
              description: 'Antes de assinar, dar acesso ou investir: avalie o risco reputacional e operacional via fontes abertas.',
              features: [
                'Análise da estrutura corporativa',
                'Verificação de executivos e acionistas',
                'Avaliação de riscos reputacionais',
                'Contexto de parceiros/fornecedores (riscos & alertas)'
              ],
              popular: false
            },
            {
              icon: Network,
              title: 'Investigação Cyber',
              description: 'Deteção de fugas de dados, exposição de infraestrutura e análise de superfície de ataque.',
              features: [
                'Deteção de dados expostos (breaches)',
                'Mapeamento de infraestrutura',
                'Análise de superfície de ataque',
                'Monitorização de dark web'
              ],
              popular: false
            },
            {
              icon: Fingerprint,
              title: 'Análise de Ameaças',
              description: 'Identificação e análise de ameaças potenciais via inteligência de fontes abertas.',
              features: [
                'Monitorização de ameaças direcionadas',
                'Análise de campanhas de desinformação',
                'Avaliação de riscos geopolíticos',
                'Alertas personalizados'
              ],
              popular: false
            }
          ],
          tools: [
            { name: 'OSINT Framework', category: 'Framework' },
            { name: 'Maltego', category: 'Análise' },
            { name: 'theHarvester', category: 'Coleta' },
            { name: 'Recon-ng', category: 'Automação' },
            { name: 'Shodan', category: 'Infraestrutura' },
            { name: 'Censys', category: 'Infraestrutura' },
            { name: 'HaveIBeenPwned', category: 'Segurança' },
            { name: 'DeHashed', category: 'Breaches' },
            { name: 'Intelligence X', category: 'Dark Web' },
            { name: 'SpiderFoot', category: 'Automação' }
          ],
          methodology: [
            {
              phase: 'Planeamento',
              icon: Target,
              description: 'Definição de objetivos, escopo e metodologia adaptada à sua necessidade.',
              steps: ['Análise de requisitos', 'Definição de escopo', 'Seleção de fontes', 'Plano de coleta']
            },
            {
              phase: 'Coleta',
              icon: Database,
              description: 'Recolha sistemática de informações via fontes abertas e técnicas OSINT avançadas.',
              steps: ['Fontes públicas', 'Redes sociais', 'Bases de dados', 'APIs especializadas']
            },
            {
              phase: 'Análise',
              icon: MagnifyingGlass,
              description: 'Tratamento, correlação e análise dos dados para extrair insights relevantes.',
              steps: ['Correlação de dados', 'Análise de padrões', 'Validação de informações', 'Avaliação de riscos']
            },
            {
              phase: 'Relatório',
              icon: FileText,
              description: 'Resultados apresentados num relatório estruturado com recomendações acionáveis.',
              steps: ['Relatório detalhado', 'Visualizações', 'Recomendações', 'Suporte pós-análise']
            }
          ],
          benefits: [
            { icon: Eye, title: 'Visibilidade Completa', description: 'Descubra o que é visível sobre a sua organização ou alvos.' },
            { icon: Shield, title: 'Prevenção de Riscos', description: 'Identifique ameaças potenciais antes de se tornarem críticas.' },
            { icon: Target, title: 'Decisões Informadas', description: 'Baseie decisões em informações verificadas e atuais.' },
            { icon: Clock, title: 'Tempo Real', description: 'Monitorização contínua de alterações e evoluções.' }
          ]
        }
      : {
          seoTitle: 'OSINT & Investigation Digitale à Bienne/Biel (Suisse) | Due Diligence & Recherche Discrète',
          seoDescription: "🔍 OSINT à Bienne/Biel et environs : investigation digitale (sources ouvertes), due diligence, vérification de profils/candidats, réputation en ligne et investigations cyber (fuites, surface d'attaque). Discrétion et conformité (droit suisse/RGPD).",
          heroTitle: 'OSINT & Investigation Digitale',
          heroSubtitle: 'Investigation discrète, légale et actionnable pour personnes et entreprises en Suisse.',
          servicesTitle: 'Services OSINT',
          toolsTitle: 'Outils & Plateformes',
          methodologyTitle: 'Méthodologie',
          benefitsTitle: 'Bénéfices Clés',
          ctaTitle: 'Besoin d’une investigation OSINT ? ',
          ctaText: 'Décrivez votre besoin et votre périmètre. Réponse sous 24–48h.',
          ctaButton: 'Me contacter',
          services: [
            {
              icon: User,
              title: 'Investigation de Personnes',
              description: "Investigation digitale discrète via sources ouvertes : cohérence de profil, réputation en ligne, signaux d'alerte et éléments à clarifier.",
              features: [
                'Vérification de cohérence (parcours, présence publique, alias)',
                'Analyse de réputation et signaux faibles (sources publiques)',
                'Contexte recrutement : éléments à valider avant embauche (cadre conforme)',
                'Synthèse claire et actionnable (faits, sources, niveau de confiance)'
              ],
              popular: true
            },
            {
              icon: Buildings,
              title: 'Due Diligence Entreprise',
              description: "Avant de signer, d'ouvrir un accès ou d'engager un budget : évaluez le risque réputationnel et opérationnel via sources ouvertes.",
              features: [
                'Analyse de structure corporate',
                'Vérification de dirigeants et actionnaires',
                'Évaluation des risques réputationnels',
                'Contexte partenaires/fournisseurs (risques & signaux d\'alerte)'
              ],
              popular: false
            },
            {
              icon: Network,
              title: 'Investigation Cyber',
              description: "Détection de fuites de données, exposition d'infrastructure et analyse de surface d'attaque.",
              features: [
                'Détection de données exposées (breaches)',
                "Cartographie d'infrastructure",
                "Analyse de surface d'attaque",
                'Monitoring de dark web'
              ],
              popular: false
            },
            {
              icon: Fingerprint,
              title: 'Analyse de Menaces',
              description: 'Identification et analyse de menaces potentielles via intelligence de sources ouvertes.',
              features: [
                'Veille sur menaces ciblées',
                'Analyse de campagnes de désinformation',
                'Évaluation de risques géopolitiques',
                'Alertes personnalisées'
              ],
              popular: false
            }
          ],
          tools: [
            { name: 'OSINT Framework', category: 'Framework' },
            { name: 'Maltego', category: 'Analyse' },
            { name: 'theHarvester', category: 'Collecte' },
            { name: 'Recon-ng', category: 'Automatisation' },
            { name: 'Shodan', category: 'Infrastructure' },
            { name: 'Censys', category: 'Infrastructure' },
            { name: 'HaveIBeenPwned', category: 'Sécurité' },
            { name: 'DeHashed', category: 'Breaches' },
            { name: 'Intelligence X', category: 'Dark Web' },
            { name: 'SpiderFoot', category: 'Automatisation' }
          ],
          methodology: [
            {
              phase: 'Planification',
              icon: Target,
              description: 'Définition des objectifs, périmètre et méthodologie adaptée à votre besoin spécifique.',
              steps: ['Analyse des exigences', 'Définition du scope', 'Sélection des sources', 'Plan de collecte']
            },
            {
              phase: 'Collecte',
              icon: Database,
              description: "Récupération systématique d'informations via sources ouvertes et techniques OSINT avancées.",
              steps: ['Sources publiques', 'Réseaux sociaux', 'Bases de données', 'APIs spécialisées']
            },
            {
              phase: 'Analyse',
              icon: MagnifyingGlass,
              description: 'Traitement, corrélation et analyse des données collectées pour extraire des insights pertinents.',
              steps: ['Corrélation de données', 'Analyse de patterns', 'Validation des informations', 'Évaluation des risques']
            },
            {
              phase: 'Reporting',
              icon: FileText,
              description: "Présentation des résultats dans un rapport structuré avec recommandations d'actions.",
              steps: ['Rapport détaillé', 'Visualisations', 'Recommandations', 'Support post-analyse']
            }
          ],
          benefits: [
            { icon: Eye, title: 'Visibilité Complète', description: 'Découvrez ce qui est visible de votre organisation ou de vos cibles via sources ouvertes.' },
            { icon: Shield, title: 'Prévention des Risques', description: 'Identifiez les menaces potentielles avant qu\'elles ne deviennent problématiques.' },
            { icon: Target, title: 'Décisions Éclairées', description: 'Basez vos décisions sur des informations vérifiées et actualisées.' },
            { icon: Clock, title: 'Temps Réel', description: 'Suivi continu des changements et évolutions en temps réel.' }
          ]
        })

  const osintServices = copy.services
  const osintTools = copy.tools
  const methodologies = copy.methodology
  const benefits = copy.benefits
  const t = (fr: string, en: string, pt: string) => (language === 'en' ? en : language === 'pt' ? pt : fr)

  if (language !== 'fr') {
    return (
      <div className="min-h-screen py-12 cs-bg-redteam-diagonal">
        <SEOContent page="osint" title={copy.seoTitle} description={copy.seoDescription} />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Logo size="xl" showText={false} className="mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{copy.heroTitle}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{copy.heroSubtitle}</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {osintServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="bg-[#1A1A1A] border-[#333]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-white">
                        <IconComponent size={24} className="text-red-500" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-red-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.methodologyTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((phase, index) => (
                <Card key={index} className="bg-[#1A1A1A] border-[#333]">
                  <CardContent className="p-6 text-center">
                    <div className="text-white font-semibold mb-2">{phase.phase}</div>
                    <p className="text-sm text-gray-400 mb-3">{phase.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {phase.steps.map((step, idx) => (
                        <li key={idx}>• {step}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.toolsTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {osintTools.map((tool, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#444]">
                  <div className="font-semibold text-white text-sm mb-1">{tool.name}</div>
                  <Badge variant="outline" className="text-xs border-[#555] text-gray-400">
                    {tool.category}
                  </Badge>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.benefitsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-[#1A1A1A] border-[#333]">
                  <CardContent className="p-6 text-center">
                    <div className="text-white font-semibold mb-2">{benefit.title}</div>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.ctaTitle}</h2>
            <p className="text-lg text-gray-400 mb-6">{copy.ctaText}</p>
            <Button onClick={() => onNavigate('contact')} className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              {copy.ctaButton}
            </Button>
          </section>
        </div>
      </div>
    )
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-12 cs-bg-redteam-diagonal"
    >
      {/* SEO Content optimisé pour IA et buscas OSINT */}
      <SEOContent
        page="osint"
        title={copy.seoTitle}
        description={copy.seoDescription}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
              className="flex justify-center"
            >
              <Logo size="xl" showText={false} />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30"
            />
          </div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {copy.heroTitle} <span className="text-white cs-text-glow-red-30">OSINT</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6"
          >
            {copy.heroSubtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Binoculars size={16} className="mr-2" />
              {t('Investigation Avancée', 'Advanced Investigation', 'Investigação Avançada')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Database size={16} className="mr-2" />
              {t('Sources Multiples', 'Multiple Sources', 'Fontes Múltiplas')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Shield size={16} className="mr-2" />
              {t('RGPD Compliant', 'GDPR Compliant', 'Conforme RGPD')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Eye size={16} className="mr-2" />
              {t('Discrétion & Confidentialité', 'Discretion & Confidentiality', 'Discrição & Confidencialidade')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Clock size={16} className="mr-2" />
              {t('Rapports 48h', 'Reports in 48h', 'Relatórios em 48h')}
            </Badge>
          </motion.div>
        </motion.div>

        {/* What is OSINT Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Qu'est-ce que l'OSINT ?
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                L'<strong>Open Source Intelligence (OSINT)</strong> consiste à collecter,
                analyser et interpréter des informations disponibles publiquement.
                Contrairement aux méthodes traditionnelles d'investigation, l'OSINT
                utilise uniquement des sources légales et accessibles à tous.
              </p>

              <div className="bg-red-950/30 rounded-lg border border-red-800/40 p-5 mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Concrètement : on vérifie ce qui est déjà visible (et parfois exploitable) — sans intrusion illégale.
                  Cela peut concerner l’informatique (fuites de données, exposition d’infrastructure) ou des sujets plus humains
                  (réputation, cohérence d’un profil, signaux faibles). L’objectif est simple : réduire le risque avant de faire confiance,
                  d’embaucher ou de signer un contrat.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">Investigation privée & due diligence (langage simple)</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vous hésitez avant d’embaucher un candidat, d’accorder un accès à des systèmes sensibles, ou de nouer un partenariat ?
                Une investigation OSINT permet de recouper des informations publiques pour détecter incohérences, risques réputationnels,
                ou signaux d’alerte. Dans un cadre entreprise, l’analyse peut être faite de manière proportionnée et conforme
                (droit suisse, RGPD), avec transparence/consentement lorsque requis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                  <CheckCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" weight="fill" />
                  <p className="text-sm text-gray-300">Mieux connaître un candidat avant embauche (cohérence du parcours, présence publique, signaux à clarifier).</p>
                </div>
                <div className="flex items-start gap-3 bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                  <CheckCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" weight="fill" />
                  <p className="text-sm text-gray-300">Évaluer un partenaire/fournisseur avant de lui faire confiance (réputation, historique public, structure).</p>
                </div>
                <div className="flex items-start gap-3 bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                  <CheckCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" weight="fill" />
                  <p className="text-sm text-gray-300">Protéger votre marque : repérer usurpations, faux profils ou mentions problématiques.</p>
                </div>
                <div className="flex items-start gap-3 bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                  <CheckCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" weight="fill" />
                  <p className="text-sm text-gray-300">Sécurité : détecter données exposées, erreurs de configuration, informations trop visibles.</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Je suis formé aux tactiques de surveillance et de contre-surveillance, ainsi qu’à l’investigation digitale.
                Dans le cadre OSINT, l’approche reste <strong>légale</strong>, <strong>éthique</strong> et centrée sur des preuves issues de sources ouvertes,
                avec une confidentialité stricte.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">{t('Sources Publiques', 'Public Sources', 'Fontes Públicas')}</div>
                    <div className="text-gray-400 text-sm">
                      {t('Sites web, réseaux sociaux, bases de données publiques', 'Websites, social networks, public databases', 'Websites, redes sociais, bases de dados públicas')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">{t('Réseaux Sociaux', 'Social Networks', 'Redes Sociais')}</div>
                    <div className="text-gray-400 text-sm">LinkedIn, Twitter, Facebook, Instagram, TikTok</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">{t('Bases de Données', 'Databases', 'Bases de Dados')}</div>
                    <div className="text-gray-400 text-sm">
                      {t('Registres commerciaux, WHOIS, brevets, publications', 'Business registers, WHOIS, patents, publications', 'Registos comerciais, WHOIS, patentes, publicações')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">{t('Infrastructure', 'Infrastructure', 'Infraestrutura')}</div>
                    <div className="text-gray-400 text-sm">
                      {t("Analyse de surface d'attaque, fuites de données", 'Attack surface analysis, data leaks', 'Análise de superfície de ataque, fugas de dados')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-96 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Binoculars size={80} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">OSINT</h3>
                    <p className="text-muted-foreground">
                      {t('Intelligence des Sources Ouvertes', 'Open-Source Intelligence', 'Inteligência de Fontes Abertas')}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-xl mb-2 drop-shadow-lg">
                    {t('Investigation Éthique', 'Ethical Investigation', 'Investigação Ética')}
                  </h4>
                  <p className="text-white/90 text-sm drop-shadow-lg">
                    {t('Méthodes légales • Sources publiques • RGPD compliant', 'Legal methods • Public sources • GDPR compliant', 'Métodos legais • Fontes públicas • Conforme RGPD')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services OSINT */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{copy.servicesTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {osintServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group"
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-2xl bg-[#1A1A1A] border-[#333] hover:border-red-600/40 overflow-hidden relative ${service.popular ? 'ring-2 ring-red-500/50' : ''}`}>
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-red-600 text-white">{t('Plus demandé', 'Most requested', 'Mais procurado')}</Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-red-950/50 rounded-lg group-hover:bg-red-950/70 transition-colors">
                          <IconComponent size={32} className="text-red-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle size={16} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => onNavigate('contact')}
                          className="w-full justify-between border-[#444] text-gray-300 hover:bg-red-950/50 hover:text-red-400 hover:border-red-600/50 transition-all duration-300"
                        >
                          {t('Demander un devis', 'Request a quote', 'Pedir orçamento')}
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Methodology Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Méthodologie OSINT Professionnelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((phase, index) => {
              const IconComponent = phase.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="inline-block mb-4"
                      >
                        <div className="p-4 bg-red-950/50 rounded-full group-hover:bg-red-950/70 transition-colors">
                          <IconComponent size={40} className="text-red-500" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                        {phase.phase}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        {phase.description}
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center justify-center">
                            <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                          {copy.benefitsTitle}
                
            })}
          </div>
        </motion.section>

        {/* Tools & Technologies */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Outils & Technologies OSINT
          </h2>

          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {osintTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#444] hover:border-red-600/40 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="font-semibold text-white text-sm mb-1">
                      {tool.name}
                    </div>
                    <Badge variant="outline" className="text-xs border-[#555] text-gray-400">
                      {tool.category}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-950/30 rounded-lg border border-red-800/40">
                <p className="text-center text-gray-300 text-sm">
                  🔧 <strong className="text-red-400">{t('Outils spécialisés :', 'Specialized tools:', 'Ferramentas especializadas:')}</strong>{' '}
                  {t(
                    "Utilisation d'outils professionnels et frameworks open source pour maximiser l'efficacité des investigations tout en respectant les contraintes légales et éthiques.",
                    'Use of professional tools and open-source frameworks to maximize investigation efficiency while respecting legal and ethical constraints.',
                    'Uso de ferramentas profissionais e frameworks open source para maximizar a eficácia das investigações, respeitando as restrições legais e éticas.'
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Benefits Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Avantages de l'Investigation OSINT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="inline-block mb-4"
                      >
                        <IconComponent size={48} className="text-orange-500 group-hover:text-red-500 transition-colors" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Cas d'Usage OSINT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Buildings size={24} className="text-primary" />
                    Entreprises
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pré‑recrutement : mieux connaître un candidat avant embauche (cadre conforme)</li>
                    <li>• Vérification de partenaires/fournisseurs avant de faire confiance</li>
                    <li>• Due diligence avant acquisition / collaboration</li>
                    <li>• Protection de la réputation (usurpations, faux profils)</li>
                    <li>• Réduction du risque (fraude, social engineering, exposition publique)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users size={24} className="text-primary" />
                    Particuliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vérifier l\'historique public avant de faire confiance (contexte privé/professionnel)</li>
                    <li>• Recherche de traces et cohérence d\'identité (sources ouvertes)</li>
                    <li>• Analyse de réputation et exposition en ligne</li>
                    <li>• Aide à la protection de la vie privée (ce qui est visible, comment réduire l\'exposition)</li>
                    <li>• Rapports clairs, discrets et orientés faits</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield size={24} className="text-primary" />
                    Cybersécurité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Détection de fuites</li>
                    <li>• Analyse de surface d'attaque</li>
                    <li>• Monitoring menaces</li>
                    <li>• Investigations incident</li>
                    <li>• Cartographie infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={itemVariants} className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Prêt à Découvrir ce qui est Visible ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Laissez-moi vous aider à maîtriser l'art de l'investigation OSINT.
                Découvrez ce qui est visible de votre organisation ou de vos objectifs
                via sources ouvertes légales et éthiques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate('contact')}
                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MagnifyingGlass size={20} className="mr-2" />
                    Lancer une Investigation OSINT
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <EnvelopeSimple size={20} className="mr-2" />
                    Demander Plus d'Infos
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Méthodes légales</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>RGPD compliant</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Confidentialité</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Expert certifié</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  )
}