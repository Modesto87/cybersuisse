import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Code,
  MagnifyingGlass,
  ArrowRight,
  MapPin,
  Envelope,
  CheckCircle,
  Star,
  Trophy,
  Certificate,
  Clock,
  Users,
  TrendUp,
  WaveTriangle,
  Lightning,
  Medal
} from '@phosphor-icons/react'
import SEOContent from './SEOContent'
import cyberSecurityImage1 from '@/assets/images/pexels-cottonbro-5474285.jpg'
import cyberSecurityImage2 from '@/assets/images/pexels-cottonbro-5483064.jpg'
import cyberSecurityImage3 from '@/assets/images/pexels-pixabay-60504.jpg'
import expertImage from '@/assets/images/eu2.png'
import { useTranslation } from 'react-i18next'

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'osint' | 'developpement' | 'contact' | 'data-recovery') => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = (language === 'en'
    ? {
        seoTitle: 'Swiss Cybersecurity Expert | Protect Your Business | CyberSuisse',
        seoDescription: '🔒 Reliable cybersecurity expert in Switzerland? Pentest, OSINT investigations, and secure development. Certified freelancer in Biel. Free quote within 24h.',
        badges: ['Certified Expert', 'Switzerland', '24h Response'],
        headline: ['RED TEAM', 'OFFENSIVE SECURITY', 'PROTECT YOUR', 'BUSINESS'],
        subheadline: '🎯 Offensive security expert in Switzerland\nPenetration testing, Red Team operations, and secure development.\nAttack before you are attacked.',
        riskTitle: '⚠️ Real Risks',
        riskText: 'Every day, Swiss companies are victims of cyberattacks. Don’t be the next one!',
        ctaPrimary: 'PROTECT ME NOW',
        ratingText: '4.9/5',
        ratingMeta: '(10+ reviews)',
        certLabel: 'EC-Council Certified',
        expLabel: '2+ years experience',
        stats: [
          { number: '2+', label: 'Years of experience', icon: Clock },
          { number: '10+', label: 'Companies secured', icon: Users },
          { number: '99%', label: 'Success rate', icon: TrendUp },
          { number: '50+', label: 'Vulnerabilities identified', icon: Medal }
        ],
        problemTitle: '🚨 Is Your Business Vulnerable?',
        problemSubtitle: 'Discover common risks and how Swiss companies protect themselves effectively',
        problemsTitle: '❌ Common Problems',
        problems: [
          { title: 'Untested systems', text: '80% of companies have never performed a pentest' },
          { title: 'Undertrained teams', text: 'Lack of internal cybersecurity skills' }
        ],
        solutionsTitle: '✅ My Solutions',
        solutions: [
          { title: 'Comprehensive pentesting', text: 'Identify all your vulnerabilities' },
          { title: 'Training & guidance', text: 'Strengthen your internal skills' }
        ],
        servicesTitle: 'Offensive Security Services',
        servicesSubtitle: 'From prevention to incident response, I cover all your cybersecurity needs',
        services: [
          {
            id: 'pentest' as const,
            icon: Shield,
            title: 'Penetration Testing',
            description: 'Complete security assessment with proven methodology',
            features: ['External and internal pentest', 'Web and mobile applications', 'Detailed report with recommendations'],
            image: cyberSecurityImage1,
            popular: true
          },
          {
            id: 'osint' as const,
            icon: MagnifyingGlass,
            title: 'OSINT Investigations',
            description: 'Research and analysis of public information for professional digital investigations',
            features: ['Advanced research', 'Data analysis', 'Detailed reports'],
            image: cyberSecurityImage3,
            popular: false
          },
          {
            id: 'developpement' as const,
            icon: Code,
            title: 'Secure Development',
            description: 'Applications and websites built with security best practices',
            features: ['Secure by design', 'Security code review', 'Integrated vulnerability testing'],
            image: cyberSecurityImage1,
            popular: false
          },
          {
            id: 'data-recovery' as const,
            icon: MagnifyingGlass,
            title: 'Data Recovery',
            description: 'Professional recovery of lost data on all media',
            features: ['Hard drives & SSD', 'SD cards & USB', 'Servers & NAS'],
            image: cyberSecurityImage2,
            popular: false
          }
        ],
        testimonialsTitle: 'They Trust Me',
        testimonialsSubtitle: 'Discover testimonials from satisfied clients who secured their business',
        testimonials: [
          { name: 'Marie Dubois', text: 'Outstanding service! Our system was vulnerable and now we sleep peacefully.', rating: 5 },
          { name: 'Pierre Martin', text: 'Skilled expert and attentive. Highly recommended for SMEs.', rating: 5 }
        ],
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Answers to common cybersecurity questions',
        faq: [
          {
            q: '🤔 How much does a pentest cost?',
            a: 'Prices vary depending on complexity: from CHF 2,000 for a simple website to CHF 15,000 for a full infrastructure. I always provide a free, tailored quote.'
          },
          {
            q: '⏱️ How long does an audit take?',
            a: 'A full audit usually takes 2–4 weeks depending on infrastructure size. The final report with recommendations is delivered within 5 business days.'
          },
          {
            q: '🛡️ Am I protected after the audit?',
            a: 'The audit identifies vulnerabilities. I provide a detailed action plan and can assist with implementing fixes for complete protection.'
          }
        ],
        ctaTitle: '🚀 Ready to Protect Your Business?',
        ctaText: 'Don’t let cyberattacks ruin your business. Contact me today for a free consultation.',
        urgencyTitle: 'Limited Offer',
        urgencyText: '📅 Response guaranteed within 24h • 📞 Free consultation',
        ctaPrimaryBottom: 'GET MY FREE QUOTE',
        ctaSecondary: 'Learn more about me',
        trustSignals: ['Certified expert', 'GDPR compliant', 'Professional insurance', 'Confidentiality guaranteed'],
        popularBadge: 'Most requested',
        learnMore: 'Learn more'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Especialista em Cibersegurança na Suíça | Proteja a Sua Empresa | CyberSuisse',
          seoDescription: '🔒 Precisa de um especialista em cibersegurança na Suíça? Pentest, OSINT e desenvolvimento seguro. Freelancer certificado em Biel. Orçamento grátis em 24h.',
          badges: ['Especialista Certificado', 'Suíça', 'Resposta 24h'],
          headline: ['RED TEAM', 'OFFENSIVE SECURITY', 'PROTEJA A SUA', 'EMPRESA'],
          subheadline: '🎯 Especialista em segurança ofensiva na Suíça\nTestes de intrusão, operações Red Team e desenvolvimento seguro.\nAtaque antes de ser atacado.',
          riskTitle: '⚠️ Riscos Reais',
          riskText: 'Todos os dias, empresas suíças são vítimas de ciberataques. Não seja a próxima!',
          ctaPrimary: 'PROTEJA-ME AGORA',
          ratingText: '4.9/5',
          ratingMeta: '(10+ avaliações)',
          certLabel: 'Certificado EC-Council',
          expLabel: '2+ anos de experiência',
          stats: [
            { number: '2+', label: 'Anos de experiência', icon: Clock },
            { number: '10+', label: 'Empresas protegidas', icon: Users },
            { number: '99%', label: 'Taxa de sucesso', icon: TrendUp },
            { number: '50+', label: 'Vulnerabilidades identificadas', icon: Medal }
          ],
          problemTitle: '🚨 A sua empresa está vulnerável?',
          problemSubtitle: 'Descubra riscos comuns e como as empresas suíças se protegem eficazmente',
          problemsTitle: '❌ Problemas Comuns',
          problems: [
            { title: 'Sistemas não testados', text: '80% das empresas nunca fizeram pentest' },
            { title: 'Equipas pouco treinadas', text: 'Falta de competências internas em cibersegurança' }
          ],
          solutionsTitle: '✅ As Minhas Soluções',
          solutions: [
            { title: 'Testes de intrusão completos', text: 'Identificação de todas as vulnerabilidades' },
            { title: 'Formação e acompanhamento', text: 'Reforço das competências internas' }
          ],
          servicesTitle: 'Serviços de Segurança Ofensiva',
          servicesSubtitle: 'Da prevenção à resposta a incidentes, cubro todas as suas necessidades',
          services: [
            {
              id: 'pentest' as const,
              icon: Shield,
              title: 'Testes de Intrusão',
              description: 'Avaliação completa de segurança com metodologia comprovada',
              features: ['Pentest externo e interno', 'Aplicações web e mobile', 'Relatório detalhado com recomendações'],
              image: cyberSecurityImage1,
              popular: true
            },
            {
              id: 'osint' as const,
              icon: MagnifyingGlass,
              title: 'Investigações OSINT',
              description: 'Pesquisa e análise de informações públicas para investigações digitais',
              features: ['Pesquisa avançada', 'Análise de dados', 'Relatórios detalhados'],
              image: cyberSecurityImage3,
              popular: false
            },
            {
              id: 'developpement' as const,
              icon: Code,
              title: 'Desenvolvimento Seguro',
              description: 'Aplicações e sites com as melhores práticas de segurança',
              features: ['Secure by design', 'Revisão de código', 'Testes de vulnerabilidades integrados'],
              image: cyberSecurityImage1,
              popular: false
            },
            {
              id: 'data-recovery' as const,
              icon: MagnifyingGlass,
              title: 'Recuperação de Dados',
              description: 'Recuperação profissional de dados perdidos em qualquer suporte',
              features: ['Discos rígidos & SSD', 'Cartões SD & USB', 'Servidores & NAS'],
              image: cyberSecurityImage2,
              popular: false
            }
          ],
          testimonialsTitle: 'Eles confiam em mim',
          testimonialsSubtitle: 'Veja testemunhos de clientes satisfeitos',
          testimonials: [
            { name: 'Marie Dubois', text: 'Serviço excecional! O nosso sistema era vulnerável e agora dormimos tranquilos.', rating: 5 },
            { name: 'Pierre Martin', text: 'Especialista competente e atento. Recomendo para PME.', rating: 5 }
          ],
          faqTitle: 'Perguntas Frequentes',
          faqSubtitle: 'Respostas às dúvidas comuns sobre cibersegurança',
          faq: [
            {
              q: '🤔 Quanto custa um pentest?',
              a: 'Os preços variam conforme a complexidade: de 2.000 CHF para um site simples até 15.000 CHF para uma infraestrutura completa. Forneço sempre um orçamento gratuito.'
            },
            {
              q: '⏱️ Quanto tempo demora uma auditoria?',
              a: 'Uma auditoria completa leva normalmente 2–4 semanas. O relatório final é entregue em até 5 dias úteis.'
            },
            {
              q: '🛡️ Fico protegido após a auditoria?',
              a: 'A auditoria identifica vulnerabilidades. Entrego um plano de ação detalhado e posso acompanhar a correção.'
            }
          ],
          ctaTitle: '🚀 Pronto para proteger a sua empresa?',
          ctaText: 'Não deixe os ciberataques arruinarem o seu negócio. Contacte-me hoje para uma consulta gratuita.',
          urgencyTitle: 'Oferta limitada',
          urgencyText: '📅 Resposta garantida em 24h • 📞 Consulta gratuita',
          ctaPrimaryBottom: 'OBTER O MEU ORÇAMENTO',
          ctaSecondary: 'Saber mais sobre mim',
          trustSignals: ['Especialista certificado', 'Conforme RGPD', 'Seguro profissional', 'Confidencialidade garantida'],
          popularBadge: 'Mais procurado',
          learnMore: 'Saber mais'
        }
      : {
          seoTitle: 'Expert Cybersécurité Suisse | Protégez Votre Entreprise Contre les Cyberattaques | CyberSuisse',
          seoDescription: "🔒 Besoin d'un expert en cybersécurité fiable en Suisse ? Tests d'intrusion, investigations OSINT et développement sécurisé. Freelance certifié basé à Bienne. Devis gratuit sous 24h.",
          badges: ['Expert Certifié', 'Suisse', 'Réponse 24h'],
          headline: ['RED TEAM', 'OFFENSIVE SECURITY', 'PROTÉGEZ VOTRE', 'ENTREPRISE'],
          subheadline: "🎯 Expert en sécurité offensive en Suisse\nTests d'intrusion, Red Team operations et développement sécurisé.\nAttaquez avant d'être attaqué.",
          riskTitle: '⚠️ Risques Réels',
          riskText: 'Chaque jour, des entreprises suisses sont victimes de cyberattaques. Ne soyez pas la prochaine victime !',
          ctaPrimary: 'PROTÉGEZ-MOI MAINTENANT',
          ratingText: '4.9/5',
          ratingMeta: '(+10 avis)',
          certLabel: 'Certifié EC-Council',
          expLabel: '2+ ans expérience',
          stats: [
            { number: '2+', label: "Années d'expérience", icon: Clock },
            { number: '10+', label: 'Entreprises sécurisées', icon: Users },
            { number: '99%', label: 'Taux de succès', icon: TrendUp },
            { number: '50+', label: 'Vulnérabilités identifiées', icon: Medal }
          ],
          problemTitle: '🚨 Votre Entreprise est-elle Vulnérable ?',
          problemSubtitle: 'Découvrez les risques courants et comment les entreprises suisses se protègent efficacement',
          problemsTitle: '❌ Problèmes Courants',
          problems: [
            { title: 'Systèmes non testés', text: "80% des entreprises n'ont jamais fait de pentest" },
            { title: 'Équipes sous-formées', text: 'Manque de compétences internes en cybersécurité' }
          ],
          solutionsTitle: '✅ Mes Solutions',
          solutions: [
            { title: "Tests d'intrusion complets", text: 'Identification de toutes vos vulnérabilités' },
            { title: 'Formation et accompagnement', text: 'Renforcement de vos compétences internes' }
          ],
          servicesTitle: 'Services de Sécurité Offensive',
          servicesSubtitle: 'De la prévention à la réponse aux incidents, je couvre tous vos besoins en cybersécurité',
          services: [
            {
              id: 'pentest' as const,
              icon: Shield,
              title: "Tests d'Intrusion",
              description: 'Évaluation complète de la sécurité de vos systèmes avec méthodologie éprouvée',
              features: ['Pentest externe et interne', 'Applications web et mobiles', 'Rapport détaillé avec recommandations'],
              image: cyberSecurityImage1,
              popular: true
            },
            {
              id: 'osint' as const,
              icon: MagnifyingGlass,
              title: 'Investigations OSINT',
              description: "Recherche et analyse d'informations publiques pour investigations numériques professionnelles",
              features: ['Recherche avancée', 'Analyse de données', 'Rapports détaillés'],
              image: cyberSecurityImage3,
              popular: false
            },
            {
              id: 'developpement' as const,
              icon: Code,
              title: 'Développement Sécurisé',
              description: 'Applications et sites web développés avec les meilleures pratiques de sécurité',
              features: ['Secure by design', 'Code review sécurité', 'Tests de vulnérabilités intégrés'],
              image: cyberSecurityImage1,
              popular: false
            },
            {
              id: 'data-recovery' as const,
              icon: MagnifyingGlass,
              title: 'Récupération de Données',
              description: 'Récupération professionnelle de données perdues sur tous supports',
              features: ['Disques durs & SSD', 'Cartes SD & USB', 'Serveurs & NAS'],
              image: cyberSecurityImage2,
              popular: false
            }
          ],
          testimonialsTitle: 'Ils me font confiance',
          testimonialsSubtitle: 'Découvrez les témoignages de clients satisfaits qui ont sécurisé leur entreprise',
          testimonials: [
            { name: 'Marie Dubois', text: 'Service exceptionnel ! Notre système était vulnérable et maintenant nous dormons tranquilles.', rating: 5 },
            { name: 'Pierre Martin', text: "Expert compétent et à l'écoute. Recommande vivement pour les PME.", rating: 5 }
          ],
          faqTitle: 'Questions Fréquentes',
          faqSubtitle: 'Réponses aux questions que vous vous posez sur la cybersécurité',
          faq: [
            {
              q: "🤔 Combien coûte un test d'intrusion ?",
              a: 'Les prix varient selon la complexité : de 2\'000 CHF pour un site web simple à 15\'000 CHF pour une infrastructure complète. Je propose toujours un devis gratuit et personnalisé.'
            },
            {
              q: '⏱️ Combien de temps prend un audit ?',
              a: 'Un audit complet prend généralement 2-4 semaines selon la taille de votre infrastructure. Le rapport final avec recommandations est livré sous 5 jours ouvrés.'
            },
            {
              q: "🛡️ Est-ce que je suis protégé après l'audit ?",
              a: "L'audit identifie les vulnérabilités. Je vous fournis un plan d'action détaillé et peux vous accompagner dans la mise en œuvre des correctifs pour une protection complète."
            }
          ],
          ctaTitle: '🚀 Prêt à Protéger Votre Entreprise ?',
          ctaText: "Ne laissez pas les cyberattaques ruiner votre business. Contactez-moi dès aujourd'hui pour une consultation gratuite.",
          urgencyTitle: 'Offre Limitée',
          urgencyText: '📅 Réponse garantie sous 24h • 📞 Consultation gratuite',
          ctaPrimaryBottom: 'OBTENIR MON DEVIS GRATUIT',
          ctaSecondary: 'En savoir plus sur moi',
          trustSignals: ['Expert certifié', 'RGPD compliant', 'Assurance professionnelle', 'Confidentialité garantie'],
          popularBadge: 'Plus demandé',
          learnMore: 'En savoir plus'
        })

  const services = copy.services
  const stats = copy.stats
  const testimonials = copy.testimonials
  const faqItems = copy.faq
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEOContent
        page="home"
        title={copy.seoTitle}
        description={copy.seoDescription}
      />
      {/* Hero Section Ultra-Impactante - RED TEAM */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center text-white cs-bg-redteam-home"
      >
        {/* Abstract Tech Background Pattern - RED */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 cs-hero-grid-red"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-600/20 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Trust Badges - RED TEAM */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="bg-red-900/50 backdrop-blur-md text-white border border-red-500/50 hero-badge hover:bg-red-800/50 transition-colors">
                  <CheckCircle size={14} className="mr-1 text-red-400" />
                  {copy.badges[0]}
                </Badge>
                <Badge variant="secondary" className="bg-red-900/50 backdrop-blur-md text-white border border-red-500/50 hero-badge hover:bg-red-800/50 transition-colors">
                  <MapPin size={14} className="mr-1 text-orange-400" />
                  {copy.badges[1]}
                </Badge>
                <Badge variant="secondary" className="bg-red-900/50 backdrop-blur-md text-white border border-red-500/50 hero-badge hover:bg-red-800/50 transition-colors">
                  <Clock size={14} className="mr-1 text-orange-400" />
                  {copy.badges[2]}
                </Badge>
              </div>

              {/* Main Headline - RED TEAM */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-lg block">{copy.headline[0]}</span>
                <span className="text-red-500 drop-shadow-lg block cs-text-glow-red-40">{copy.headline[1]}</span>
                <span className="text-white drop-shadow-md block">{copy.headline[2]}</span>
                <span className="text-orange-500 drop-shadow-md block cs-text-glow-orange-30">{copy.headline[3]}</span>
              </h2>

              {/* Subheadline - RED TEAM */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl hero-subtitle drop-shadow-md">
                {copy.subheadline.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              {/* Pain Points - RED TEAM */}
              <div className="bg-red-950/60 border border-red-600/50 rounded-lg p-4 mb-8 backdrop-blur-sm cs-shadow-glow-red-30-soft">
                <div className="flex items-center mb-2">
                  <WaveTriangle className="text-red-500" size={20} />
                  <span className="text-white font-semibold ml-2">{copy.riskTitle}</span>
                </div>
                <p className="text-red-200 text-sm">
                  {copy.riskText}
                </p>
              </div>

              {/* CTA Buttons - RED TEAM */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => onNavigate('contact')}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-red-500/40 transform transition-all duration-300 font-bold text-lg px-8 py-4 border border-red-500/50 cs-shadow-glow-red-30"
                  >
                    <Lightning className="mr-2" size={20} />
                    {copy.ctaPrimary}
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </motion.div>

                
              </div>

              {/* Social Proof - RED TEAM */}
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="text-orange-400" size={16} />
                  <span className="font-semibold text-white">{copy.ratingText}</span>
                  <span>{copy.ratingMeta}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Certificate className="text-red-400" size={16} />
                  <span>{copy.certLabel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="text-orange-400" size={16} />
                  <span>{copy.expLabel}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual - RED TEAM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Cards - RED TEAM */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-red-950/60 backdrop-blur-sm border border-red-600/40 rounded-xl p-6 mb-4 cs-shadow-glow-red-40-soft"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center cs-shadow-glow-red-20-strong">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Système Protégé</div>
                      <div className="text-red-300 text-sm">Sécurité maximale</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-medium">✓ 0 vulnérabilités détectées</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="hidden"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - RED TEAM DARK */}
      <section className="py-16 bg-[#0A0A0A] border-b border-red-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-red-950/80 border border-red-600/40 rounded-full flex items-center justify-center cs-shadow-glow-red-20-soft">
                      <IconComponent className="text-red-500" size={24} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section - RED TEAM DARK */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#1A0505] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.problemTitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {copy.problemSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems - RED */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6 cs-text-glow-red-20">{copy.problemsTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-950/50 border border-red-800/40 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-400">{copy.problems[0].title}</div>
                    <div className="text-red-300/70 text-sm">{copy.problems[0].text}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/50 border border-red-800/40 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-400">{copy.problems[1].title}</div>
                    <div className="text-red-300/70 text-sm">{copy.problems[1].text}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions - GREEN on DARK */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-green-500 mb-6 cs-text-glow-green-20">{copy.solutionsTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-950/50 border border-green-800/40 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-400">{copy.solutions[0].title}</div>
                    <div className="text-green-300/70 text-sm">{copy.solutions[0].text}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-950/50 border border-green-800/40 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-400">{copy.solutions[1].title}</div>
                    <div className="text-green-300/70 text-sm">{copy.solutions[1].text}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - RED TEAM DARK */}
      <section id="services-section" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.servicesTitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {copy.servicesSubtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card
                    className={`h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/60 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden relative ${service.popular ? 'ring-2 ring-red-500/50 cs-shadow-glow-red-30-soft' : ''}`}
                    onClick={() => onNavigate(service.id)}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg border-0">{copy.popularBadge}</Badge>
                      </div>
                    )}

                    {/* Image Header - RED TEAM */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <motion.div
                          className="p-3 bg-red-600/40 backdrop-blur-sm rounded-lg group-hover:bg-red-500/50 transition-colors duration-300 border border-red-500/30 cs-shadow-glow-red-15"
                          whileHover={{ scale: 1.1 }}
                        >
                          <IconComponent size={32} className="text-white drop-shadow-lg" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <CardTitle className="text-white text-xl mb-1 drop-shadow-lg">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardDescription className="text-base leading-relaxed text-gray-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => onNavigate(service.id)}
                          className="w-full justify-between text-gray-300 hover:text-white hover:bg-red-950/50 transition-all duration-300"
                        >
                          {copy.learnMore}
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - RED TEAM DARK */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#150505] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.testimonialsTitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {copy.testimonialsSubtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-orange-400 fill-current" size={16} />
                      ))}
                    </div>
                    <blockquote className="text-gray-400 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - RED TEAM DARK */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.faqTitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {copy.faqSubtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    {faqItems[0].q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    {faqItems[0].a}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    {faqItems[1].q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    {faqItems[1].a}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    {faqItems[2].q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    {faqItems[2].a}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - RED TEAM */}
      <section className="py-20 text-white relative overflow-hidden cs-bg-redteam-cta">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 cs-cta-dotpattern" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/20 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-red-500/50 overflow-hidden shadow-2xl cs-shadow-glow-red-40">
                  <img 
                    src={expertImage} 
                    alt="Modesto - Expert Cybersécurité" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 w-8 h-8 rounded-full border-4 border-red-800 flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" weight="bold" />
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {copy.ctaTitle}
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              {copy.ctaText}
            </p>

            {/* Urgency Elements - RED TEAM */}
            <div className="bg-black/30 border border-red-400/40 rounded-lg p-4 mb-8 max-w-md mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-orange-400 mr-2" size={20} />
                <span className="text-orange-300 font-semibold">{copy.urgencyTitle}</span>
              </div>
              <p className="text-white text-sm">
                {copy.urgencyText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-red-700 hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transform transition-all duration-300 font-bold text-lg px-8 py-4 cs-shadow-glow-white-30"
                >
                  <Envelope size={20} className="mr-2" />
                  {copy.ctaPrimaryBottom}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('about')}
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-semibold px-8 py-4 bg-transparent"
                >
                  <Medal size={20} className="mr-2" />
                  {copy.ctaSecondary}
                </Button>
              </motion.div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-red-100">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>{copy.trustSignals[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>{copy.trustSignals[1]}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>{copy.trustSignals[2]}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>{copy.trustSignals[3]}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}