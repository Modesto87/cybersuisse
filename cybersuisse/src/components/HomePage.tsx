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

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'osint' | 'developpement' | 'contact' | 'data-recovery') => void
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
    id: 'osint' as const,
    icon: MagnifyingGlass,
    title: 'Investigations OSINT',
    description: 'Recherche et analyse d\'informations publiques pour investigations numériques professionnelles',
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
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEOContent
        page="home"
        title="Expert Cybersécurité Suisse | Protégez Votre Entreprise Contre les Cyberattaques | CyberSuisse"
        description="🔒 Besoin d'un expert en cybersécurité fiable en Suisse ? Tests d'intrusion, investigations OSINT et développement sécurisé. Freelance certifié basé à Bienne. Devis gratuit sous 24h."
      />
      {/* Hero Section Ultra-Impactante - RED TEAM */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center text-white"
        style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 25%, #2D0A0A 50%, #1A0000 75%, #0A0A0A 100%)' }}
      >
        {/* Abstract Tech Background Pattern - RED */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229,57,53,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
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
                  Expert Certifié
                </Badge>
                <Badge variant="secondary" className="bg-red-900/50 backdrop-blur-md text-white border border-red-500/50 hero-badge hover:bg-red-800/50 transition-colors">
                  <MapPin size={14} className="mr-1 text-orange-400" />
                  Suisse
                </Badge>
                <Badge variant="secondary" className="bg-red-900/50 backdrop-blur-md text-white border border-red-500/50 hero-badge hover:bg-red-800/50 transition-colors">
                  <Clock size={14} className="mr-1 text-orange-400" />
                  Réponse 24h
                </Badge>
              </div>

              {/* Main Headline - RED TEAM */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-lg block">RED TEAM</span>
                <span className="text-red-500 drop-shadow-lg block" style={{textShadow: '0 0 40px rgba(229,57,53,0.5)'}}>OFFENSIVE SECURITY</span>
                <span className="text-white drop-shadow-md block">PROTÉGEZ VOTRE</span>
                <span className="text-orange-500 drop-shadow-md block" style={{textShadow: '0 0 30px rgba(255,111,0,0.4)'}}>ENTREPRISE</span>
              </h2>

              {/* Subheadline - RED TEAM */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl hero-subtitle drop-shadow-md">
                🎯 <strong className="text-white">Expert en sécurité offensive en Suisse</strong>
                <br />
                <span className="text-gray-400">Tests d'intrusion, Red Team operations et développement sécurisé.</span><br />
                <span className="text-red-400 font-semibold">Attaquez avant d'être attaqué.</span>
              </p>

              {/* Pain Points - RED TEAM */}
              <div className="bg-red-950/60 border border-red-600/50 rounded-lg p-4 mb-8 backdrop-blur-sm" style={{boxShadow: '0 0 30px rgba(229,57,53,0.2)'}}>
                <div className="flex items-center mb-2">
                  <WaveTriangle className="text-red-500" size={20} />
                  <span className="text-white font-semibold ml-2">⚠️ Risques Réels</span>
                </div>
                <p className="text-red-200 text-sm">
                  Chaque jour, des entreprises suisses sont victimes de cyberattaques.
                  Ne soyez pas la prochaine victime !
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
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-red-500/40 transform transition-all duration-300 font-bold text-lg px-8 py-4 border border-red-500/50"
                    style={{boxShadow: '0 0 30px rgba(229,57,53,0.4)'}}
                  >
                    <Lightning className="mr-2" size={20} />
                    PROTÉGEZ-MOI MAINTENANT
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </motion.div>

                
              </div>

              {/* Social Proof - RED TEAM */}
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="text-orange-400" size={16} />
                  <span className="font-semibold text-white">4.9/5</span>
                  <span>(+10 avis)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Certificate className="text-red-400" size={16} />
                  <span>Certifié EC-Council</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="text-orange-400" size={16} />
                  <span>2+ ans expérience</span>
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
                  className="bg-red-950/60 backdrop-blur-sm border border-red-600/40 rounded-xl p-6 mb-4"
                  style={{boxShadow: '0 0 40px rgba(229,57,53,0.2)'}}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(229,57,53,0.5)'}}>
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
                    <div className="w-12 h-12 bg-red-950/80 border border-red-600/40 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(229,57,53,0.3)'}}>
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
              🚨 Votre Entreprise est-elle Vulnérable ?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez les risques courants et comment les entreprises suisses se protègent efficacement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Problems - RED */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6" style={{textShadow: '0 0 20px rgba(229,57,53,0.3)'}}>❌ Problèmes Courants</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-950/50 border border-red-800/40 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-400">Systèmes non testés</div>
                    <div className="text-red-300/70 text-sm">80% des entreprises n'ont jamais fait de pentest</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-950/50 border border-red-800/40 rounded-lg">
                  <WaveTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-400">Équipes sous-formées</div>
                    <div className="text-red-300/70 text-sm">Manque de compétences internes en cybersécurité</div>
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
              <h3 className="text-2xl font-bold text-green-500 mb-6" style={{textShadow: '0 0 20px rgba(34,197,94,0.3)'}}>✅ Mes Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-950/50 border border-green-800/40 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-400">Tests d'intrusion complets</div>
                    <div className="text-green-300/70 text-sm">Identification de toutes vos vulnérabilités</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-950/50 border border-green-800/40 rounded-lg">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-green-400">Formation et accompagnement</div>
                    <div className="text-green-300/70 text-sm">Renforcement de vos compétences internes</div>
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
              Services de <span className="text-red-500" style={{textShadow: '0 0 30px rgba(229,57,53,0.4)'}}>Sécurité Offensive</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                    className={`h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/60 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden relative ${service.popular ? 'ring-2 ring-red-500/50' : ''}`}
                    onClick={() => onNavigate(service.id)}
                    style={{boxShadow: service.popular ? '0 0 30px rgba(229,57,53,0.2)' : 'none'}}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg border-0">Plus demandé</Badge>
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
                          className="p-3 bg-red-600/40 backdrop-blur-sm rounded-lg group-hover:bg-red-500/50 transition-colors duration-300 border border-red-500/30"
                          whileHover={{ scale: 1.1 }}
                          style={{boxShadow: '0 0 15px rgba(229,57,53,0.3)'}}
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
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0" style={{boxShadow: '0 0 6px rgba(229,57,53,0.5)'}} />
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
              Ils me font confiance
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    🤔 Combien coûte un test d'intrusion ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Les prix varient selon la complexité : de 2'000 CHF pour un site web simple à 15'000 CHF pour une infrastructure complète.
                    Je propose toujours un devis gratuit et personnalisé.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    ⏱️ Combien de temps prend un audit ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Un audit complet prend généralement 2-4 semaines selon la taille de votre infrastructure.
                    Le rapport final avec recommandations est livré sous 5 jours ouvrés.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-white">
                    🛡️ Est-ce que je suis protégé après l'audit ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    L'audit identifie les vulnérabilités. Je vous fournis un plan d'action détaillé et peux vous accompagner
                    dans la mise en œuvre des correctifs pour une protection complète.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - RED TEAM */}
      <section className="py-20 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1A0000 0%, #2D0A0A 25%, #B71C1C 50%, #2D0A0A 75%, #1A0000 100%)'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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
                <div className="w-32 h-32 rounded-full border-4 border-red-500/50 overflow-hidden shadow-2xl" style={{boxShadow: '0 0 40px rgba(229,57,53,0.4)'}}>
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
              🚀 Prêt à <span className="text-red-300" style={{textShadow: '0 0 20px rgba(229,57,53,0.5)'}}>Protéger</span> Votre Entreprise ?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Ne laissez pas les cyberattaques ruiner votre business.
              Contactez-moi dès aujourd'hui pour une consultation gratuite.
            </p>

            {/* Urgency Elements - RED TEAM */}
            <div className="bg-black/30 border border-red-400/40 rounded-lg p-4 mb-8 max-w-md mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-orange-400 mr-2" size={20} />
                <span className="text-orange-300 font-semibold">Offre Limitée</span>
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
                  className="bg-white text-red-700 hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transform transition-all duration-300 font-bold text-lg px-8 py-4"
                  style={{boxShadow: '0 0 30px rgba(255,255,255,0.3)'}}
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
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-semibold px-8 py-4 bg-transparent"
                >
                  <Medal size={20} className="mr-2" />
                  En savoir plus sur moi
                </Button>
              </motion.div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-red-100">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>Expert certifié</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>RGPD compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>Assurance professionnelle</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-400" />
                <span>Confidentialité garantie</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}