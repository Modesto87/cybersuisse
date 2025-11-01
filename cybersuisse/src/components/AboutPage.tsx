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
      {/* SEO Content pour About */}
      <SEOContent 
        page="about"
        title="À propos - Modesto Expert Cybersécurité Bienne | Certifications & Expérience"
        description="Découvrez le profil de Modesto, expert cybersécurité à Bienne. Certifications EC-Council, TryHackMe, expertise pentest et développement sécurisé."
        keywords={[
          'Modesto cybersécurité', 'expert sécurité Bienne profil', 'certifications cybersécurité Suisse',
          'EC-Council certification', 'TryHackMe expert', 'pentest specialist Bienne',
          'développeur sécurité Biel', 'consultant cybersécurité expérience'
        ]}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            À Propos de Moi
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Expert freelance en cybersécurité basé en Suisse, certifié par EC-Council et TryHackMe. 
            Spécialisé dans les pentests, la surveillance des menaces, les audits CRA et le développement 
            d'applications sécurisées. Mon expertise combine sécurité offensive et développement web.
          </motion.p>
        </motion.div>



        {/* Certifications Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Certifications Professionnelles
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
                      <Badge variant="secondary" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2 text-sm">
                      {cert.description}
                    </p>
                    <p className="text-accent font-medium text-sm">
                      Délivré par {cert.issuer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Compétences Techniques
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

        {/* Professional Image Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Expertise Cybersécurité
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Spécialisé dans la protection des infrastructures critiques et la conformité 
                réglementaire, j'accompagne les entreprises suisses dans leur transformation 
                numérique sécurisée.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-accent" />
                  <span className="text-muted-foreground">5+ années d'expérience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Certificate size={20} className="text-accent" />
                  <span className="text-muted-foreground">Certifications internationales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeHemisphereWest size={20} className="text-accent" />
                  <span className="text-muted-foreground">Marché suisse & européen</span>
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
                  alt="Expert cybersécurité professionnel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-xl mb-2 drop-shadow-lg">
                    Expert Cybersécurité
                  </h4>
                  <p className="text-white/90 text-sm drop-shadow-lg">
                    Freelance basé en Suisse • Interventions internationales
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Me Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Pourquoi Me Choisir ?
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
                    <Trophy size={48} className="text-accent group-hover:text-primary transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Expertise Certifiée
                  </h3>
                  <p className="text-muted-foreground">
                    Certifications internationales reconnues et expérience pratique 
                    dans tous les domaines de la cybersécurité.
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
                    <GlobeHemisphereWest size={48} className="text-accent group-hover:text-primary transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Marché Suisse
                  </h3>
                  <p className="text-muted-foreground">
                    Connaissance approfondie des réglementations suisses et 
                    européennes, notamment la nouvelle loi CRA.
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
                    <Shield size={48} className="text-accent group-hover:text-primary transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Approche Holistique
                  </h3>
                  <p className="text-muted-foreground">
                    Solutions complètes combinant sécurité technique, 
                    conformité réglementaire et développement sécurisé.
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
                Prêt à Sécuriser Votre Infrastructure ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contactez-moi pour discuter de vos besoins en cybersécurité et 
                découvrir comment je peux vous aider à protéger votre entreprise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    onClick={() => onNavigate('contact')}
                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <EnvelopeSimple size={20} className="mr-2" />
                    Contactez-moi
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://linkedin.com/in/luismodesto" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                      <LinkedinLogo size={20} className="mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  )
}