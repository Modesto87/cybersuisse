import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, MagnifyingGlass, FileText, Clock, Users, Warning } from '@phosphor-icons/react'
import dfirImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface DFIRPageProps {
  onNavigate: (page: 'contact') => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const services = [
  {
    icon: MagnifyingGlass,
    title: "Investigation Numérique",
    description: "Analyse approfondie des preuves numériques et reconstruction des événements de sécurité",
    features: ["Analyse de logs", "Récupération de données", "Timeline reconstruction", "Chain of custody"]
  },
  {
    icon: Shield,
    title: "Réponse aux Incidents",
    description: "Intervention rapide et coordonnée lors d'incidents de cybersécurité",
    features: ["Containment", "Éradication", "Recovery", "Post-incident analysis"]
  },
  {
    icon: FileText,
    title: "Expertise Judiciaire",
    description: "Support expert pour les procédures légales et expertises techniques",
    features: ["Rapports d'expertise", "Témoignage expert", "Conformité légale", "Documentation complète"]
  },
  {
    icon: Warning,
    title: "Analyse de Malware",
    description: "Reverse engineering et analyse comportementale des logiciels malveillants",
    features: ["Static analysis", "Dynamic analysis", "IOC extraction", "Attribution analysis"]
  }
]

const processSteps = [
  {
    step: "1",
    title: "Identification",
    description: "Détection et classification de l'incident de sécurité"
  },
  {
    step: "2", 
    title: "Préservation",
    description: "Sauvegarde et protection des preuves numériques"
  },
  {
    step: "3",
    title: "Collecte",
    description: "Acquisition des données selon les standards forensiques"
  },
  {
    step: "4",
    title: "Analyse",
    description: "Investigation approfondie et reconstruction des faits"
  },
  {
    step: "5",
    title: "Présentation",
    description: "Rapport détaillé et recommandations d'amélioration"
  }
]

export default function DFIRPage({ onNavigate }: DFIRPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 space-y-16"
      >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Services DFIR
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Digital Forensics & Incident Response - Investigation numérique et réponse aux incidents de cybersécurité
          </p>
        </div>
      </motion.section>

      {/* Image Hero */}
      <motion.section variants={itemVariants} className="relative">
        <div className="relative h-96 rounded-3xl overflow-hidden group">
          <img 
            src={dfirImage} 
            alt="Digital Forensics Investigation"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Investigation & Expertise Technique</h2>
            <p className="text-lg opacity-90">Solutions professionnelles pour la forensique numérique</p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Nos Services DFIR</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services spécialisés en forensique numérique et réponse aux incidents
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 bg-gradient-to-br from-card to-muted/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <service.icon size={24} weight="duotone" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Processus DFIR</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Méthodologie structurée suivant les standards internationaux de forensique numérique
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-12 w-24 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools & Technologies */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Outils & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Utilisation d'outils professionnels et de méthodologies éprouvées
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <MagnifyingGlass size={24} className="text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Forensique</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Autopsy, Volatility, SIFT, REMnux, FTK Imager
            </p>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-secondary/10 flex items-center justify-center">
                <Shield size={24} className="text-secondary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Incident Response</h3>
            <p className="text-sm text-muted-foreground mb-4">
              YARA, Splunk, ELK Stack, MISP, TheHive
            </p>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText size={24} className="text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Analysis</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Wireshark, IDA Pro, Ghidra, OllyDbg, x64dbg
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Certifications & Standards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conformité aux standards internationaux de forensique numérique
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {['ISO/IEC 27037', 'NIST SP 800-86', 'RFC 3227', 'ACPO Guidelines', 'SANS DFIR'].map((cert) => (
            <Badge key={cert} variant="outline" className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              {cert}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section variants={itemVariants} className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Questions Fréquentes - Services DFIR</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services de forensique numérique et réponse aux incidents
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">💰 Combien coûte une investigation DFIR ?</h3>
            <p className="text-muted-foreground">
              Le coût d'une investigation DFIR dépend de plusieurs facteurs : criticité de l'incident,
              volume de données à analyser, complexité technique, et urgence de l'intervention.
              Chaque mission est analysée individuellement pour établir un devis précis adapté
              à vos besoins spécifiques et contraintes budgétaires.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">⏱️ Combien de temps prend une investigation ?</h3>
            <p className="text-muted-foreground">
              La durée dépend de la complexité de l'incident : une analyse simple peut prendre 2-3 jours,
              tandis qu'une investigation complexe avec analyse de malware peut nécessiter 1-3 semaines.
              Les interventions d'urgence sont prioritaires avec réponse sous 24h.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">🔍 Quels sont vos domaines d'expertise ?</h3>
            <p className="text-muted-foreground">
              Spécialisation en investigation d'incidents cyber, analyse de malware, récupération de données,
              expertise judiciaire, et réponse aux incidents selon les standards ISO/IEC 27037 et NIST.
              Expertise technique combinée avec connaissance des aspects légaux et réglementaires.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">📋 Fournissez-vous des rapports d'expertise ?</h3>
            <p className="text-muted-foreground">
              Oui, tous nos rapports respectent les standards judiciaires : documentation complète
              de la chaîne de custody, méthodologie détaillée, conclusions techniques, et
              recommandations opérationnelles. Rapports admissibles en justice.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">🚨 Intervennez-vous en cas d'urgence ?</h3>
            <p className="text-muted-foreground">
              Service d'urgence 24/7 disponible pour les incidents critiques. Intervention
              sous 24h garantie avec équipe dédiée et outils spécialisés. Support prioritaire
              pour les secteurs réglementés (banques, santé, administration).
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md border border-border/50"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">🔒 Comment assurez-vous la confidentialité ?</h3>
            <p className="text-muted-foreground">
              Engagement de confidentialité absolue avec accords NDA. Toutes les données
              sont traitées dans des environnements sécurisés, avec chiffrement des données
              sensibles et destruction sécurisée des éléments après l'investigation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 space-y-6">
        <h2 className="text-3xl font-bold">Besoin d'une Investigation DFIR ?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Intervention rapide 24/7 pour vos incidents de sécurité. Contact immédiat pour une réponse professionnelle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => onNavigate('contact')}
            className="px-8 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Clock size={20} className="mr-2" />
            Urgence 24/7
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => onNavigate('contact')}
            className="px-8 hover:scale-105 transition-all duration-300"
          >
            <Users size={20} className="mr-2" />
            Consultation Gratuite
          </Button>
        </div>
      </motion.section>
      </motion.div>
    </div>
  )
}