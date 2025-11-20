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

const osintServices = [
  {
    icon: User,
    title: 'Investigation de Personnes',
    description: 'Recherche approfondie d\'informations sur individus, profils sociaux, historique numérique et activités en ligne.',
    features: [
      'Analyse de profils sociaux (LinkedIn, Facebook, Twitter, Instagram)',
      'Recherche d\'emails et numéros de téléphone',
      'Historique professionnel et académique',
      'Analyse de réputation en ligne'
    ],
    popular: true
  },
  {
    icon: Buildings,
    title: 'Due Diligence Entreprise',
    description: 'Évaluation complète de sociétés, dirigeants et partenaires commerciaux via sources ouvertes.',
    features: [
      'Analyse de structure corporate',
      'Vérification de dirigeants et actionnaires',
      'Évaluation des risques réputationnels',
      'Analyse concurrentielle'
    ],
    popular: false
  },
  {
    icon: Network,
    title: 'Investigation Cyber',
    description: 'Détection de fuites de données, exposition d\'infrastructure et analyse de surface d\'attaque.',
    features: [
      'Détection de données exposées (breaches)',
      'Cartographie d\'infrastructure',
      'Analyse de surface d\'attaque',
      'Monitoring de dark web'
    ],
    popular: false
  },
  {
    icon: Fingerprint,
    title: 'Analyse de Menaces',
    description: 'Identification et analyse de menaces potentielles via intelligence de sources ouvertes.',
    features: [
      'Surveillance de menaces ciblées',
      'Analyse de campagnes de désinformation',
      'Évaluation de risques géopolitiques',
      'Alertes personnalisées'
    ],
    popular: false
  }
]

const osintTools = [
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
]

const methodologies = [
  {
    phase: 'Planification',
    icon: Target,
    description: 'Définition des objectifs, périmètre et méthodologie adaptée à votre besoin spécifique.',
    steps: ['Analyse des exigences', 'Définition du scope', 'Sélection des sources', 'Plan de collecte']
  },
  {
    phase: 'Collecte',
    icon: Database,
    description: 'Récupération systématique d\'informations via sources ouvertes et techniques OSINT avancées.',
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
    description: 'Présentation des résultats dans un rapport structuré avec recommandations d\'actions.',
    steps: ['Rapport détaillé', 'Visualisations', 'Recommandations', 'Support post-analyse']
  }
]

const benefits = [
  {
    icon: Eye,
    title: 'Visibilité Complète',
    description: 'Découvrez ce qui est visible de votre organisation ou de vos cibles via sources ouvertes.'
  },
  {
    icon: Shield,
    title: 'Prévention des Risques',
    description: 'Identifiez les menaces potentielles avant qu\'elles ne deviennent problématiques.'
  },
  {
    icon: Target,
    title: 'Décisions Éclairées',
    description: 'Basez vos décisions sur des informations vérifiées et actualisées.'
  },
  {
    icon: Clock,
    title: 'Temps Réel',
    description: 'Surveillance continue des changements et évolutions en temps réel.'
  }
]

export default function OSINTPage({ onNavigate }: OSINTPageProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12"
    >
      {/* SEO Content optimisé pour IA et buscas OSINT */}
      <SEOContent
        page="osint"
        title="Investigation OSINT Suisse | Open Source Intelligence | Recherche Cyber | Modesto"
        description="🔍 Expert OSINT Suisse - Investigation open source intelligence, recherche cyber, due diligence entreprise. Analyse profils sociaux, fuites données, menaces. Bienne, Suisse."
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Investigation <span className="text-primary">OSINT</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6"
          >
            🔍 <strong>Open Source Intelligence</strong> - Maîtrisez l'art de l'investigation numérique.
            Découvrez ce qui est visible de votre entreprise, vos partenaires ou concurrents via
            sources ouvertes. De la recherche de personnes à l'analyse de menaces cyber.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Binoculars size={16} className="mr-2" />
              Investigation Avancée
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Database size={16} className="mr-2" />
              Sources Multiples
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Shield size={16} className="mr-2" />
              RGPD Compliant
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock size={16} className="mr-2" />
              Rapports 48h
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Qu'est-ce que l'OSINT ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                L'<strong>Open Source Intelligence (OSINT)</strong> consiste à collecter,
                analyser et interpréter des informations disponibles publiquement.
                Contrairement aux méthodes traditionnelles d'investigation, l'OSINT
                utilise uniquement des sources légales et accessibles à tous.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">Sources Publiques</div>
                    <div className="text-muted-foreground text-sm">Sites web, réseaux sociaux, bases de données publiques</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">Réseaux Sociaux</div>
                    <div className="text-muted-foreground text-sm">LinkedIn, Twitter, Facebook, Instagram, TikTok</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">Bases de Données</div>
                    <div className="text-muted-foreground text-sm">Registres commerciaux, WHOIS, brevets, publications</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">Infrastructure</div>
                    <div className="text-muted-foreground text-sm">Analyse de surface d'attaque, fuites de données</div>
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
                    <p className="text-muted-foreground">Intelligence des Sources Ouvertes</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-xl mb-2 drop-shadow-lg">
                    Investigation Éthique
                  </h4>
                  <p className="text-white/90 text-sm drop-shadow-lg">
                    Méthodes légales • Sources publiques • RGPD compliant
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services OSINT */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Services d'Investigation OSINT
          </h2>

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
                  <Card className={`h-full transition-all duration-300 hover:shadow-2xl border-2 hover:border-accent/30 bg-gradient-to-br from-card to-card/50 overflow-hidden relative ${service.popular ? 'ring-2 ring-primary/50' : ''}`}>
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-primary text-primary-foreground">Plus demandé</Badge>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent size={32} className="text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
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
                          className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300"
                        >
                          Demander un devis
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
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
                  <Card className="h-full text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="inline-block mb-4"
                      >
                        <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent size={40} className="text-primary" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {phase.phase}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {phase.description}
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center justify-center">
                            <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Tools & Technologies */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Outils & Technologies OSINT
          </h2>

          <Card className="border-2 border-primary/10 bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {osintTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="font-semibold text-foreground text-sm mb-1">
                      {tool.name}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center text-muted-foreground text-sm">
                  🔧 <strong>Outils spécialisés :</strong> Utilisation d'outils professionnels et frameworks
                  open source pour maximiser l'efficacité des investigations tout en respectant
                  les contraintes légales et éthiques.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Benefits Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
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
                  <Card className="h-full text-center border-2 hover:border-accent/20 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="inline-block mb-4"
                      >
                        <IconComponent size={48} className="text-accent group-hover:text-primary transition-colors" />
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
                    <li>• Due diligence avant acquisition</li>
                    <li>• Analyse de concurrents</li>
                    <li>• Vérification de partenaires</li>
                    <li>• Évaluation des risques</li>
                    <li>• Protection de la réputation</li>
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
                    <li>• Recherche de personnes</li>
                    <li>• Vérification d'identité</li>
                    <li>• Analyse de réputation</li>
                    <li>• Investigations personnelles</li>
                    <li>• Protection vie privée</li>
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