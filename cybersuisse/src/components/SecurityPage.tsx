import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Lock, 
  FileText, 
  Warning, 
  CheckCircle, 
  Eye,
  Clock,
  Envelope,
  Certificate,
  Globe
} from '@phosphor-icons/react'
import SEOContent from './SEOContent'

interface SecurityPageProps {
  onNavigate: (page: 'contact') => void
}

const securityMeasures = [
  {
    icon: Shield,
    title: 'Chiffrement HTTPS',
    description: 'Toutes les communications sont chiffrées avec TLS 1.3',
    status: 'Actif'
  },
  {
    icon: Lock,
    title: 'Headers de Sécurité',
    description: 'Protection contre XSS, CSRF et autres attaques communes',
    status: 'Actif'
  },
  {
    icon: Eye,
    title: 'Audit de Sécurité',
    description: 'Scans automatisés et tests de vulnérabilités réguliers',
    status: 'Continu'
  },
  {
    icon: FileText,
    title: 'Conformité GDPR',
    description: 'Respect strict des réglementations européennes sur les données',
    status: 'Certifié'
  }
]

const craCompliance = [
  {
    requirement: 'Conception Sécurisée',
    description: 'Architecture suivant les principes de "Security by Design"',
    status: 'Conforme',
    details: 'Implémentation de CSP, headers sécurisés, et chiffrement bout-en-bout'
  },
  {
    requirement: 'Gestion des Vulnérabilités',
    description: 'Processus de détection, évaluation et correction',
    status: 'Conforme',
    details: 'Scans automatisés, monitoring continu, et patches de sécurité'
  },
  {
    requirement: 'Documentation de Sécurité',
    description: 'Documentation complète des mesures de sécurité',
    status: 'Conforme',
    details: 'Cette page constitue notre documentation de conformité CRA'
  },
  {
    requirement: 'Divulgation Responsable',
    description: 'Processus clair pour signaler les vulnérabilités',
    status: 'Conforme',
    details: 'Canal sécurisé et processus de réponse défini'
  }
]

export default function SecurityPage({ onNavigate }: SecurityPageProps) {
  return (
    <div className="min-h-screen">
      {/* SEO Content */}
      <SEOContent 
        page="security"
        title="Sécurité et Conformité CRA - CyberSuisse | Protection des Données Suisse"
        description="Découvrez nos mesures de sécurité et notre conformité au Cyber Resilience Act (CRA). Protection des données, chiffrement, audits de sécurité en Suisse."
        keywords={[
          'conformité CRA Suisse', 'sécurité website cybersécurité', 'protection données Bienne',
          'Cyber Resilience Act conformité', 'GDPR compliance Suisse', 'audit sécurité web',
          'chiffrement HTTPS Suisse', 'divulgation vulnérabilités responsable'
        ]}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Sécurité & Conformité • CRA Compliant
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sécurité et
            <span className="text-primary"> Conformité</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            CyberSuisse s'engage à maintenir les plus hauts standards de sécurité et de conformité.
            Notre infrastructure respecte le Cyber Resilience Act (CRA) de l'UE et les réglementations 
            suisses et européennes en matière de protection des données.
          </p>
        </motion.div>
      </section>

      {/* CRA Compliance */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conformité Cyber Resilience Act (CRA)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respect des exigences européennes en matière de cyber-résilience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {craCompliance.map((item, index) => (
            <motion.div
              key={item.requirement}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{item.requirement}</CardTitle>
                    <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle size={14} className="mr-1" />
                      {item.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Détails:</strong> {item.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Measures */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mesures de Sécurité Techniques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Protection multi-couches pour garantir la sécurité de vos données
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMeasures.map((measure, index) => {
              const IconComponent = measure.icon
              return (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <motion.div 
                        className="p-3 bg-primary/10 rounded-lg mx-auto w-fit mb-3"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <IconComponent size={32} className="text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg">{measure.title}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto">
                        {measure.status}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {measure.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Divulgation Responsable de Vulnérabilités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processus sécurisé pour signaler les vulnérabilités
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Warning size={28} className="text-accent mr-3" />
                  Signaler une Vulnérabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Envelope size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Contact Sécurisé</p>
                    <p className="text-sm text-muted-foreground">modesto@cybersuisse.ch</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Délai de Réponse</p>
                    <p className="text-sm text-muted-foreground">24-48 heures maximum</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Certificate size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Reconnaissance</p>
                    <p className="text-sm text-muted-foreground">Crédit public pour les découvertes légitimes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Processus de Traitement
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-muted-foreground">Réception et accusé de réception (24h)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-muted-foreground">Évaluation et validation (48-72h)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-muted-foreground">Correction et déploiement (selon criticité)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <span className="text-muted-foreground">Notification et reconnaissance publique</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications et Conformité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respect des standards internationaux de sécurité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cyber Resilience Act</h3>
              <p className="text-sm text-muted-foreground">
                Conformité aux exigences européennes de cyber-résilience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Respect intégral des réglementations européennes sur les données
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Certificate size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">ISO 27001 Ready</h3>
              <p className="text-sm text-muted-foreground">
                Processus alignés avec les standards de sécurité ISO
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Questions sur Notre Sécurité ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions 
              concernant nos mesures de sécurité et notre conformité.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl"
              >
                <Envelope size={20} className="mr-2" />
                Nous Contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
