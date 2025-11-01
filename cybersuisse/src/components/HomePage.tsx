import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, FileText, Code, MagnifyingGlass, ArrowRight, MapPin, Envelope } from '@phosphor-icons/react'
import Logo from './Logo'
import SEOContent from './SEOContent'
import CRACompliancePopup from './CRACompliancePopup'
import cyberSecurityImage1 from '@/assets/images/pexels-cottonbro-5474285.jpg'
import cyberSecurityImage2 from '@/assets/images/pexels-cottonbro-5483064.jpg'
import cyberSecurityImage3 from '@/assets/images/pexels-pixabay-60504.jpg'
import cyberSecurityImage4 from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface HomePageProps {
  onNavigate: (page: 'about' | 'pentest' | 'surveillance' | 'audit-cra' | 'developpement' | 'dfir' | 'contact') => void
}

const services = [
  {
    id: 'pentest' as const,
    icon: Shield,
    title: 'Tests d\'Intrusion',
    description: 'Évaluation complète de la sécurité de vos systèmes avec méthodologie éprouvée',
    features: ['Pentest externe et interne', 'Applications web et mobiles', 'Rapport détaillé avec recommandations'],
    image: cyberSecurityImage1
  },
  {
    id: 'surveillance' as const,
    icon: Eye,
    title: 'Surveillance de Menaces',
    description: 'Solution de surveillance légère et efficace adaptée aux PME et structures moyennes',
    features: ['Monitoring ciblé', 'Alertes pertinentes', 'Détection intelligente'],
    image: cyberSecurityImage2
  },
  {
    id: 'audit-cra' as const,
    icon: FileText,
    title: 'Audit CRA (Bientôt)',
    description: 'Service en développement - Conformité avec la nouvelle réglementation européenne Cyber Resilience Act',
    features: ['Audit de conformité (2025)', 'Documentation complète', 'Accompagnement certification'],
    image: cyberSecurityImage3
  },
  {
    id: 'dfir' as const,
    icon: MagnifyingGlass,
    title: 'Services DFIR',
    description: 'Digital Forensics & Incident Response - Investigation et réponse aux incidents',
    features: ['Investigation numérique', 'Réponse aux incidents', 'Expertise judiciaire'],
    image: cyberSecurityImage4
  },
  {
    id: 'developpement' as const,
    icon: Code,
    title: 'Développement Sécurisé',
    description: 'Applications et sites web développés avec les meilleures pratiques de sécurité',
    features: ['Secure by design', 'Code review sécurité', 'Tests de vulnérabilités intégrés'],
    image: cyberSecurityImage1
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
      {/* CRA Compliance Popup */}
      <CRACompliancePopup onNavigateToContact={() => onNavigate('contact')} />
      
      {/* SEO Content optimisé pour Bienne */}
      <SEOContent 
        page="home"
        title="Expert Cybersécurité Bienne | Pentest, Audit CRA & Surveillance | CyberSuisse"
        description="Spécialiste cybersécurité freelance à Bienne/Biel. Services pentest, surveillance des menaces, audit CRA et développement sécurisé pour entreprises suisses."
        keywords={[
          'cybersécurité Bienne', 'pentest Biel', 'expert sécurité Bienne', 'audit CRA Suisse',
          'consultant cybersécurité Bienne', 'test intrusion Biel', 'surveillance menaces Suisse',
          'développement sécurisé Bienne', 'DFIR Biel', 'sécurité informatique Canton Berne'
        ]}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo central */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Logo size="xl" showText={true} />
          </motion.div>
          
          <Badge variant="secondary" className="mb-4">
            Expert Cybersécurité Freelance • Suisse
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-red-600 font-black">STOP</span> aux 
            <span className="text-red-600 font-bold"> cyberattaques</span>
            <br />
            <span className="text-orange-600 font-black">SÉCURISEZ</span> votre 
            <span className="text-primary font-bold"> entreprise</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Services spécialisés en cybersécurité : tests d'intrusion, surveillance de menaces, 
            audit CRA et développement sécurisé. Basé en Suisse avec une expertise internationale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  // Scroll to services section
                  const servicesSection = document.querySelector('#services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform transition-all duration-200"
              >
                Découvrir mes services
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('about')}
                className="shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Mon profil
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="border-2 hover:bg-accent/10 hover:border-accent transition-all duration-200"
              >
                <Envelope size={20} className="mr-2" />
                Me contacter
              </Button>
            </motion.div>
          </div>
          
          <div className="flex items-center justify-center mt-6 text-muted-foreground">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">Basé en Suisse • Interventions internationales</span>
          </div>
        </motion.div>
      </section>

      {/* Visual Security Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cybersécurité à l'Ère Numérique
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Protégez votre infrastructure avec une expertise suisse reconnue
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={cyberSecurityImage1} 
                  alt="Cybersécurité et protection"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary/90 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Tests d'Intrusion</h3>
                  <p className="text-white/80 text-sm">Évaluation complète de vos vulnérabilités</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={cyberSecurityImage2} 
                  alt="Surveillance et monitoring"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent group-hover:from-secondary/90 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Surveillance Efficace</h3>
                  <p className="text-white/80 text-sm">Monitoring léger et intelligent</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={cyberSecurityImage3} 
                  alt="Audit et conformité"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent group-hover:from-accent/90 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Audit CRA (Bientôt)</h3>
                  <p className="text-white/80 text-sm">Conformité réglementaire européenne</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={cyberSecurityImage4} 
                  alt="Développement sécurisé"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary/90 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Développement Sécurisé</h3>
                  <p className="text-white/80 text-sm">Applications robustes et sécurisées</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services de Cybersécurité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche complète pour sécuriser vos systèmes et assurer votre conformité réglementaire
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/20 overflow-hidden"
                  onClick={() => onNavigate(service.id)}
                >
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
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        style={{ transformStyle: "preserve-3d" }}
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
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prêt à sécuriser votre infrastructure ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Discutons de vos besoins en cybersécurité et trouvons ensemble la solution adaptée à votre entreprise.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transform transition-all duration-200 font-semibold"
              >
                <Envelope size={20} className="mr-2" />
                Demander un devis gratuit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}