import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Certificate, 
  Shield, 
  Code, 
  Eye, 
  CheckCircle, 
  Trophy,
  GlobeHemisphereWest,
  LinkedinLogo,
  EnvelopeSimple
} from '@phosphor-icons/react'
import Logo from './Logo'
import SEOContent from './SEOContent'
import profileImage from '@/assets/images/eu1.png'
import { useTranslation } from 'react-i18next'

interface AboutPageProps {
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

const certifications = [
  {
    name: "Security Analyst",
    description: "Certificat Security Analyst",
    issuer: "TryHackMe",
    year: "2025",
    icon: Shield
  },
  {
    name: "Technicien CiberSécurité",
    description: "Certificat Technicien en CyberSécurité",
    issuer: "EC-Council",
    year: "2025",
    icon: Certificate
  },
  {
    name: "Ethical Hacker Essentials",
    description: "Certificat Ethical Hacker Essentials",
    issuer: "EC-Council",
    year: "2024",
    icon: Eye
  },
  {
    name: "Développeur Web",
    description: "Certificat Développeur Web",
    issuer: "Skill and You + Studi",
    year: "2024",
    icon: Code
  }
]

const skills = [
  "Penetration Testing",
  "Vulnerability Assessment", 
  "Security Auditing",
  "Incident Response",
  "Risk Assessment",
  "Compliance (ISO 27001, CRA)",
  "Network Security",
  "Application Security",
  "Security Architecture",
  "Threat Intelligence",
  "Secure Development"
]


export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        seoTitle: 'Modesto - Swiss Cybersecurity MSSP | IT Security Expert Biel | Managed Services',
        seoDescription: '🔒 Swiss MSSP based in Biel. Cybersecurity services: pentest, secure development, and OSINT. Multilingual FR/EN/PT. Free quote.',
        heroTitle: 'Red Team Cybersecurity Expert',
        heroText: '🛡️ Swiss Managed Security Service Provider based in Biel. Comprehensive managed cybersecurity services for SMEs and companies: penetration testing, CRA compliance audits, secure development, and incident response.',
        badges: ['Multilingual FR/EN/PT', 'Red Team Expert', 'EC-Council & TryHackMe'],
        expertiseTitle: 'Multilingual & International Expertise',
        expertiseText: '🌍 Competitive advantage: smooth communication with international clients, technical documentation in multiple languages, and understanding of local regulations (Swiss GDPR, EU CRA, etc.).',
        certificationsTitle: 'Professional Certifications & Qualifications'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Modesto - MSSP Cibersegurança Suíça | Especialista IT Biel | Serviços Geridos',
          seoDescription: '🔒 MSSP suíço baseado em Biel. Serviços: pentest, desenvolvimento seguro e OSINT. Multilíngue FR/EN/PT. Orçamento grátis.',
          heroTitle: 'Especialista Red Team em Cibersegurança',
          heroText: '🛡️ Managed Security Service Provider suíço baseado em Biel. Serviços completos e geridos para PME e empresas: testes de intrusão, auditorias de conformidade CRA, desenvolvimento seguro e resposta a incidentes.',
          badges: ['Multilíngue FR/EN/PT', 'Especialista Red Team', 'EC-Council & TryHackMe'],
          expertiseTitle: 'Especialização Multilíngue & Internacional',
          expertiseText: '🌍 Vantagem competitiva: comunicação fluida com clientes internacionais, documentação técnica em várias línguas e compreensão de regulamentos locais (RGPD Suíço, CRA europeu, etc.).',
          certificationsTitle: 'Certificações & Qualificações Profissionais'
        }
      : {
          seoTitle: 'Modesto - MSSP Cybersécurité Suisse | Expert Sécurité IT Bienne | Services Managés',
          seoDescription: '🔒 MSSP professionnel suisse basé à Bienne. Services de cybersécurité : pentest, développement sécurisé et OSINT. Multilingue FR/EN/PT. Devis gratuit.',
          heroTitle: 'Red Team Expert Cybersécurité',
          heroText: '🛡️ Managed Security Service Provider suisse basé à Bienne. Services de cybersécurité complets et managés pour PME et entreprises : tests d\'intrusion, audits de conformité CRA, développement sécurisé et réponse aux incidents.',
          badges: ['Multilingue FR/EN/PT', 'Red Team Expert', 'EC-Council & TryHackMe'],
          expertiseTitle: 'Expertise Multilingue & Internationale',
          expertiseText: '🌍 Avantage concurrentiel : Communication fluide avec clients internationaux, documentation technique en plusieurs langues, et compréhension des réglementations locales (RGPD Suisse, CRA européen, etc.)',
          certificationsTitle: 'Certifications & Qualifications Professionnelles'
        })
  if (language !== 'fr') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen py-12 cs-bg-redteam-diagonal"
      >
        <SEOContent page="about" title={copy.seoTitle} description={copy.seoDescription} />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Logo size="xl" showText={false} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-6">{copy.heroTitle}</h1>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-6">{copy.heroText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
                <GlobeHemisphereWest size={16} className="mr-2" />
                {copy.badges[0]}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
                <Shield size={16} className="mr-2" />
                {copy.badges[1]}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
                <Certificate size={16} className="mr-2" />
                {copy.badges[2]}
              </Badge>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.expertiseTitle}</h2>
            <Card className="border-2 border-red-900/30 bg-[#1A1A1A]">
              <CardContent className="p-6 text-gray-300">{copy.expertiseText}</CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{copy.certificationsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.name} className="border-2 border-red-900/30 bg-[#1A1A1A]">
                  <CardHeader>
                    <CardTitle className="text-white">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    {cert.issuer} · {cert.year}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-xl border border-red-500/50"
            >
              <EnvelopeSimple size={20} className="mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-12 cs-bg-redteam-diagonal"
    >
      {/* SEO Content optimisé pour IA et buscas MSSP */}
      <SEOContent
        page="about"
        title={copy.seoTitle}
        description={copy.seoDescription}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section - MSSP Professional */}
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
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white cs-text-glow-soft-redteam">{copy.heroTitle}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-6"
          >
            {copy.heroText}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <GlobeHemisphereWest size={16} className="mr-2" />
              {copy.badges[0]}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Shield size={16} className="mr-2" />
              {copy.badges[1]}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-950/60 text-red-400 border border-red-600/40">
              <Certificate size={16} className="mr-2" />
              {copy.badges[2]}
            </Badge>

          </motion.div>
        </motion.div>

        {/* Multilíngue Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{copy.expertiseTitle}</h2>

          <Card className="border-2 border-red-900/30 bg-[#1A1A1A]">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-blue-800/40"
                >
                  <div className="text-3xl mb-2">🇫🇷</div>
                  <h3 className="font-semibold text-blue-400">Français</h3>
                  <p className="text-xs text-blue-400/70 mt-1">Communication client suisse</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-green-950/50 to-green-900/30 border border-green-800/40"
                >
                  <div className="text-3xl mb-2">🇵🇹</div>
                  <h3 className="font-semibold text-green-400">Português</h3>
                  <p className="text-xs text-green-400/70 mt-1">Marché lusophone</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-950/50 to-purple-900/30 border border-purple-800/40"
                >
                  <div className="text-3xl mb-2">🇬🇧</div>
                  <h3 className="font-semibold text-purple-400">English</h3>
                  <p className="text-xs text-purple-400/70 mt-1">Standards internationaux</p>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-red-950/30 rounded-lg border border-red-800/40">
                <p className="text-center text-gray-300">
                  {copy.expertiseText}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Certifications Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {copy.certificationsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-2xl border-2 border-[#333] hover:border-red-600/50 bg-[#1A1A1A]">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <cert.icon size={32} className="text-red-500 group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary" className="text-xs bg-red-950/50 text-red-400 border border-red-600/40">
                        {cert.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-3 text-sm">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-orange-400 font-medium text-sm">
                        🏛️ {cert.issuer}
                      </p>
                      <Badge variant="outline" className="text-xs border-green-600/40 text-green-400">
                        Validé
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 bg-gradient-to-r from-red-950/30 to-orange-950/30 rounded-lg border border-red-800/40"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                🎯 Formation Continue & Mise à Jour
              </h3>
              <p className="text-white text-sm">
                Engagement dans la formation continue avec suivi des dernières menaces,
                techniques d'attaque et évolutions réglementaires (CRA 2025, NIS2, etc.)
              </p>
            </div>
          </motion.div>
        </motion.section>        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Services MSSP Complets
          </h2>
          
          <Card className="border-2 border-[#333] bg-[#1A1A1A]">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                                        <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#0A0A0A] border border-[#444] hover:border-red-600/40 transition-all duration-200 hover:shadow-md">
                      <CheckCircle size={16} className="text-red-500 group-hover:text-red-400 transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Approche Stratégique MSSP */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Approche Stratégique MSSP
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
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
                    <Shield size={48} className="text-red-500 group-hover:text-orange-500 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Prévention Proactive
                  </h3>
                  <p className="text-white">
                    Ne pas attendre les incidents. Mise en place de mesures préventives,
                    réponse structurée aux incidents et amélioration continue.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <GlobeHemisphereWest size={48} className="text-red-500 group-hover:text-orange-500 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Conformité Réglementaire
                  </h3>
                  <p className="text-white">
                    Accompagnement complet pour la conformité CRA (2025), NIS2,
                    RGPD et autres réglementations européennes et suisses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
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
                    <Trophy size={48} className="text-red-500 group-hover:text-orange-500 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Excellence Opérationnelle
                  </h3>
                  <p className="text-white">
                    Services managés 24/7 avec SLA garantis, reporting transparent
                    et amélioration continue basée sur les métriques de sécurité.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-gradient-to-r from-red-950/30 via-orange-950/20 to-red-950/30 rounded-xl border border-red-800/40"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                💡 Valeur Ajoutée MSSP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                  <div className="text-sm text-white">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">&lt;4h</div>
                  <div className="text-sm text-white">Temps de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">99.9%</div>
                  <div className="text-sm text-white">Disponibilité SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                  <div className="text-sm text-white">Confidentialité</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Professional Image Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                MSSP de Confiance en Suisse
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                En tant que <strong className="text-red-400">MSSP certifié</strong> basé à Bienne, je propose des services
                de cybersécurité complets et managés adaptés aux PME et entreprises suisses.
                Mon approche combine expertise technique, conformité réglementaire et
                accompagnement personnalisé.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-red-500" />
                  <span className="text-gray-300">MSSP certifié EC-Council & TryHackMe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Certificate size={20} className="text-red-500" />
                  <span className="text-gray-300">Expert en conformité CRA & NIS2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeHemisphereWest size={20} className="text-red-500" />
                  <span className="text-gray-300">Multilingue FR/EN/PT</span>
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
                <img
                  src={profileImage}
                  alt="Professionnel de Test d'intrusion."
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-red-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-xl mb-2 drop-shadow-lg">
                    Modesto - MSSP
                  </h4>
                  <p className="text-white/90 text-sm drop-shadow-lg">
                    Cybersécurité managée • Bienne, Suisse
                  </p>
                  <p className="text-white/90 text-xs drop-shadow-lg mt-1">
                    Protection complète • Conformité garantie
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>        {/* Why Choose MSSP Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Pourquoi Choisir un MSSP Professionnel ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
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
                    <Shield size={48} className="text-red-500 group-hover:text-orange-500 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Expertise Certifiée
                  </h3>
                  <p className="text-white">
                    Certifications EC-Council et TryHackMe validées, expérience
                    pratique dans tous les domaines de la cybersécurité managée.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <GlobeHemisphereWest size={48} className="text-red-500 group-hover:text-orange-500 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    Focus Suisse & Régional
                  </h3>
                  <p className="text-white">
                    Compréhension approfondie des réglementations suisses et européennes,
                    connaissance du marché local et adaptation aux besoins des PME.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section variants={itemVariants} className="text-center">
          <Card className="border-2 border-red-800/40 bg-gradient-to-br from-red-950/30 to-orange-950/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Prêt à Sécuriser Votre Entreprise avec un MSSP ?
              </h2>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                En tant que <strong className="text-red-400">MSSP professionnel</strong> basé en Suisse, je vous propose
                des services de cybersécurité managés complets et personnalisés.
                Contactez-moi pour discuter de vos besoins et obtenir un devis adapté.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate('contact')}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 cs-shadow-glow-red-20"
                  >
                    <EnvelopeSimple size={20} className="mr-2" />
                    Consultation MSSP Gratuite
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://linkedin.com/in/luismodesto" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="border-red-600/40 text-red-400 hover:bg-red-950/30 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <LinkedinLogo size={20} className="mr-2" />
                      LinkedIn Professionnel
                    </Button>
                  </a>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-red-500" />
                  <span>Devis sous 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-red-500" />
                  <span>RGPD Compliant</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-red-500" />
                  <span>Assurance Pro</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-red-500" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  )
}