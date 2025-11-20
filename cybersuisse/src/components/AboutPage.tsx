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
import profileImage from '@/assets/images/pexels-cottonbro-5483064.jpg'

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
  "Cloud Security",
  "Security Architecture",
  "Threat Intelligence",
  "Secure Development"
]


export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12"
    >
      {/* SEO Content optimisé pour IA et buscas MSSP */}
      <SEOContent
        page="about"
        title="Modesto - MSSP Cybersécurité Suisse | Expert Sécurité IT Bienne | Services Managés"
        description="🔒 MSSP professionnel suisse basé à Bienne. Services de cybersécurité managés : pentest, surveillance 24/7, audit CRA, développement sécurisé. Multilingue FR/EN/PT/ES. Devis gratuit."
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            <span className="text-primary">MSSP</span> Cybersécurité Professionnel
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6"
          >
            🛡️ <strong>Managed Security Service Provider</strong> suisse basé à Bienne.
            Services de cybersécurité complets et managés pour PME et entreprises :
            surveillance 24/7, tests d'intrusion, audits de conformité CRA,
            développement sécurisé et réponse aux incidents.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <GlobeHemisphereWest size={16} className="mr-2" />
              Multilingue FR/EN/PT/ES
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Shield size={16} className="mr-2" />
              MSSP Certifié
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Certificate size={16} className="mr-2" />
              EC-Council & TryHackMe
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Eye size={16} className="mr-2" />
              Surveillance 24/7
            </Badge>
          </motion.div>
        </motion.div>

        {/* Multilíngue Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Expertise Multilingue & Internationale
          </h2>

          <Card className="border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                >
                  <div className="text-3xl mb-2">🇫🇷</div>
                  <h3 className="font-semibold text-blue-800">Français</h3>
                  <p className="text-sm text-blue-600">Langue maternelle</p>
                  <p className="text-xs text-blue-500 mt-1">Communication client suisse</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
                >
                  <div className="text-3xl mb-2">🇵🇹</div>
                  <h3 className="font-semibold text-green-800">Português</h3>
                  <p className="text-sm text-green-600">Langue maternelle</p>
                  <p className="text-xs text-green-500 mt-1">Marché lusophone</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
                >
                  <div className="text-3xl mb-2">🇬🇧</div>
                  <h3 className="font-semibold text-purple-800">English</h3>
                  <p className="text-sm text-purple-600">Professionnel (C1)</p>
                  <p className="text-xs text-purple-500 mt-1">Standards internationaux</p>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center text-muted-foreground">
                  🌍 <strong>Avantage concurrentiel :</strong> Communication fluide avec clients internationaux,
                  documentation technique en plusieurs langues, et compréhension des réglementations
                  locales (RGPD Suisse, CRA européen, etc.)
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Certifications Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Certifications & Qualifications Professionnelles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-2xl border-2 hover:border-accent/30 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <cert.icon size={32} className="text-accent group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {cert.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-accent font-medium text-sm">
                        🏛️ {cert.issuer}
                      </p>
                      <Badge variant="outline" className="text-xs">
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
            className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                🎯 Formation Continue & Mise à Jour
              </h3>
              <p className="text-muted-foreground text-sm">
                Engagement dans la formation continue avec suivi des dernières menaces,
                techniques d'attaque et évolutions réglementaires (CRA 2025, NIS2, etc.)
              </p>
            </div>
          </motion.div>
        </motion.section>        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Services MSSP Complets
          </h2>
          
          <Card className="border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
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
                                        <div className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md">
                      <CheckCircle size={16} className="text-accent group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Approche Stratégique MSSP
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <Shield size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Prévention Proactive
                  </h3>
                  <p className="text-muted-foreground">
                    Ne pas attendre les incidents. Mise en place de mesures préventives,
                    surveillance continue et réponse automatisée aux menaces.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <GlobeHemisphereWest size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Conformité Réglementaire
                  </h3>
                  <p className="text-muted-foreground">
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
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <Trophy size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Excellence Opérationnelle
                  </h3>
                  <p className="text-muted-foreground">
                    Services managés 24/7 avec SLA garantis, reporting transparent
                    et amélioration continue basée sur les métriques de sécurité.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                💡 Valeur Ajoutée MSSP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Surveillance continue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;4h</div>
                  <div className="text-sm text-muted-foreground">Temps de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Disponibilité SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Confidentialité</div>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                MSSP de Confiance en Suisse
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                En tant que <strong>MSSP certifié</strong> basé à Bienne, je propose des services
                de cybersécurité complets et managés adaptés aux PME et entreprises suisses.
                Mon approche combine expertise technique, conformité réglementaire et
                accompagnement personnalisé.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-primary" />
                  <span className="text-muted-foreground">MSSP certifié EC-Council & TryHackMe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Certificate size={20} className="text-primary" />
                  <span className="text-muted-foreground">Expert en conformité CRA & NIS2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeHemisphereWest size={20} className="text-primary" />
                  <span className="text-muted-foreground">Multilingue FR/EN/PT/ES</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye size={20} className="text-primary" />
                  <span className="text-muted-foreground">Services managés 24/7</span>
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
                  alt="MSSP cybersécurité professionnel suisse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Pourquoi Choisir un MSSP Professionnel ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <Shield size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Expertise Certifiée
                  </h3>
                  <p className="text-muted-foreground">
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
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <GlobeHemisphereWest size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Focus Suisse & Régional
                  </h3>
                  <p className="text-muted-foreground">
                    Compréhension approfondie des réglementations suisses et européennes,
                    connaissance du marché local et adaptation aux besoins des PME.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="inline-block mb-4"
                  >
                    <Eye size={48} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Services Managés 24/7
                  </h3>
                  <p className="text-muted-foreground">
                    Surveillance continue, réponse aux incidents et maintenance
                    préventive avec SLA garantis et reporting transparent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section variants={itemVariants} className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Prêt à Sécuriser Votre Entreprise avec un MSSP ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                En tant que <strong>MSSP professionnel</strong> basé en Suisse, je vous propose
                des services de cybersécurité managés complets et personnalisés.
                Contactez-moi pour discuter de vos besoins et obtenir un devis adapté.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate('contact')}
                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <EnvelopeSimple size={20} className="mr-2" />
                    Consultation MSSP Gratuite
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://linkedin.com/in/luismodesto" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <LinkedinLogo size={20} className="mr-2" />
                      LinkedIn Professionnel
                    </Button>
                  </a>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Devis sous 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>RGPD Compliant</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Assurance Pro</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
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