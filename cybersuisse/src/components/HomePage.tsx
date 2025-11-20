import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Eye,
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
import cyberSecurityImage4 from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'
import bbbImage from '@/assets/images/bbb.jpg'

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'surveillance' | 'osint' | 'developpement' | 'dfir' | 'contact' | 'data-recovery') => void
}

const services = [
  {
    id: 'pentest' as const,
    icon: Shield,
    title: 'Tests d\'Intrusion',
    description: 'Évaluation complète de la sécurité de vos systèmes avec méthodologie éprouvée',
    features: ['Pentest externe et interne', 'Applications web et mobiles', 'Rapport détaillé avec recommandations'],
    image: cyberSecurityImage1,
    popular: true
  },
  {
    id: 'surveillance' as const,
    icon: Eye,
    title: 'Surveillance de Menaces',
    description: 'Solution de surveillance légère et efficace adaptée aux PME et structures moyennes',
    features: ['Monitoring ciblé', 'Alertes pertinentes', 'Détection intelligente'],
    image: cyberSecurityImage2,
    popular: false
  },
  {
    id: 'osint' as const,
    icon: MagnifyingGlass,
    title: 'Investigations OSINT',
    description: 'Recherche et analyse d\'informations publiques pour investigations numériques professionnelles',
    features: ['Recherche avancée', 'Analyse de données', 'Rapports détaillés'],
    image: cyberSecurityImage3,
    popular: false
  },
  {
    id: 'dfir' as const,
    icon: MagnifyingGlass,
    title: 'Services DFIR',
    description: 'Digital Forensics & Incident Response - Investigation et réponse aux incidents',
    features: ['Investigation numérique', 'Réponse aux incidents', 'Expertise judiciaire'],
    image: cyberSecurityImage4,
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
]

const stats = [
  { number: "2+", label: "Années d'expérience", icon: Clock },
  { number: "10+", label: "Entreprises sécurisées", icon: Users },
  { number: "99%", label: "Taux de succès", icon: TrendUp },
  { number: "50+", label: "Vulnérabilités identifiées", icon: Medal }
]

const testimonials = [
  {
    name: "Marie Dubois",
    text: "Service exceptionnel ! Notre système était vulnérable et maintenant nous dormons tranquilles.",
    rating: 5
  },
  {
    name: "Pierre Martin",
    text: "Expert compétent et à l'écoute. Recommande vivement pour les PME.",
    rating: 5
  }
]

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOContent
        page="home"
        title="Expert Cybersécurité Suisse | Protégez Votre Entreprise Contre les Cyberattaques | CyberSuisse"
        description="🔒 Besoin d'un expert en cybersécurité fiable en Suisse ? Tests d'intrusion, surveillance menaces, investigations OSINT, développement sécurisé. Freelance certifié basé à Bienne. Devis gratuit sous 24h."
      />
      {/* Hero Section Ultra-Impactante */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: `url(${bbbImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Background Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hero-badge">
                  <CheckCircle size={14} className="mr-1" />
                  Expert Certifié
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hero-badge">
                  <MapPin size={14} className="mr-1" />
                  Suisse
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hero-badge">
                  <Clock size={14} className="mr-1" />
                  Réponse 24h
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight hero-title hero-glow">
                <span className="text-red-400">STOP</span>
                <br />
                <span className="text-orange-400">AUX CYBERATTAQUES</span>
                <br />
                <span className="text-white">PROTÉGEZ VOTRE</span>
                <br />
                <span className="text-blue-400">ENTREPRISE</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-2xl hero-subtitle">
                🛡️ <strong className="text-white">Vous cherchez un expert cybersécurité fiable en Suisse ?</strong>
                <br />
                <span className="text-white">Tests d'intrusion, surveillance menaces, investigations OSINT, développement sécurisé.</span><br />
                <span className="text-white font-semibold">Protection complète pour votre entreprise.</span>
              </p>

              {/* Pain Points */}
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-8">
                <div className="flex items-center mb-2">
                  <WaveTriangle className="text-white mr-2" size={20} />
                  <span className="text-white font-semibold">⚠️ Risques Réels</span>
                </div>
                <p className="text-white text-sm">
                  Chaque jour, des entreprises suisses sont victimes de cyberattaques.
                  Ne soyez pas la prochaine victime !
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => onNavigate('contact')}
                                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-2xl hover:shadow-orange-500/25 transform transition-all duration-300 font-bold text-lg px-8 py-4"
                  >
                    <Lightning className="mr-2" size={20} />
                    PROTÉGEZ-MOI MAINTENANT
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </motion.div>

                
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm text-white">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400" size={16} />
                  <span className="font-semibold">4.9/5</span>
                  <span>(+10 avis)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Certificate className="text-white" size={16} />
                  <span>Certifié EC-Council</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="text-white" size={16} />
                  <span>2+ ans expérience</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Cards */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Système Protégé</div>
                      <div className="text-white text-sm">Sécurité maximale</div>
                    </div>
                  </div>
                  <div className="text-white text-sm font-medium">✓ 0 vulnérabilités détectées</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Eye className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Monitoring 24/7</div>
                      <div className="text-white text-sm">Surveillance continue</div>
                    </div>
                  </div>
                  <div className="text-white text-sm font-medium">✓ 15 menaces bloquées ce mois</div>
                </motion.div>
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

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🚨 Votre Entreprise est-elle Vulnérable ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les risques courants et comment les entreprises suisses se protègent efficacement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Problèmes Courants</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-100 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-800">Systèmes non testés</div>
                    <div className="text-red-700 text-sm">80% des entreprises n'ont jamais fait de pentest</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-100 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-800">Surveillance insuffisante</div>
                    <div className="text-red-700 text-sm">Les attaques passent inaperçues pendant des semaines</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-100 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-800">Équipes sous-formées</div>
                    <div className="text-red-700 text-sm">Manque de compétences internes en cybersécurité</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ Mes Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-100 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-800">Tests d'intrusion complets</div>
                    <div className="text-green-700 text-sm">Identification de toutes vos vulnérabilités</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-100 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-800">Monitoring intelligent</div>
                    <div className="text-green-700 text-sm">Détection proactive des menaces 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-100 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-800">Formation et accompagnement</div>
                    <div className="text-green-700 text-sm">Renforcement de vos compétences internes</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services de Cybersécurité Complets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la prévention à la réponse aux incidents, je couvre tous vos besoins en cybersécurité
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
                    className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/20 overflow-hidden relative ${service.popular ? 'ring-2 ring-orange-500/50' : ''}`}
                    onClick={() => onNavigate(service.id)}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-orange-500 text-white">Plus demandé</Badge>
                      </div>
                    )}

                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <motion.div
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors duration-300"
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
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
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
                          className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                        >
                          En savoir plus
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils me font confiance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de clients satisfaits qui ont sécurisé leur entreprise
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
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section for AI Search */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Réponses aux questions que vous vous posez sur la cybersécurité
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-left text-lg">
                    🤔 Combien coûte un test d'intrusion ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les prix varient selon la complexité : de 2'000 CHF pour un site web simple à 15'000 CHF pour une infrastructure complète.
                    Je propose toujours un devis gratuit et personnalisé.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-left text-lg">
                    ⏱️ Combien de temps prend un audit ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Un audit complet prend généralement 2-4 semaines selon la taille de votre infrastructure.
                    Le rapport final avec recommandations est livré sous 5 jours ouvrés.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-left text-lg">
                    🛡️ Est-ce que je suis protégé après l'audit ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    L'audit identifie les vulnérabilités. Je vous fournis un plan d'action détaillé et peux vous accompagner
                    dans la mise en œuvre des correctifs pour une protection complète.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🚀 Prêt à Protéger Votre Entreprise ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ne laissez pas les cyberattaques ruiner votre business.
              Contactez-moi dès aujourd'hui pour une consultation gratuite.
            </p>

            {/* Urgency Elements */}
            <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-4 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-red-400 mr-2" size={20} />
                <span className="text-red-300 font-semibold">Offre Limitée</span>
              </div>
              <p className="text-white text-sm">
                📅 Réponse garantie sous 24h • 📞 Consultation gratuite
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
                  className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transform transition-all duration-300 font-bold text-lg px-8 py-4"
                >
                  <Envelope size={20} className="mr-2" />
                  OBTENIR MON DEVIS GRATUIT
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
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold px-8 py-4"
                >
                  <Medal size={20} className="mr-2" />
                  En savoir plus sur moi
                </Button>
              </motion.div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} />
                <span>Expert certifié</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} />
                <span>RGPD compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} />
                <span>Assurance professionnelle</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} />
                <span>Confidentialité garantie</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}