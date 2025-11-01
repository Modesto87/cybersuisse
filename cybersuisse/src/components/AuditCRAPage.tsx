import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Shield, CheckCircle, Warning, Scales, Envelope, Calendar } from '@phosphor-icons/react'
import auditImage from '@/assets/images/pexels-pixabay-60504.jpg'
import complianceImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface AuditCRAPageProps {
  onNavigate: (page: 'contact') => void
}

const craRequirements = [
  {
    category: 'Conception Sécurisée',
    requirements: [
      'Analyse de risques cybersécurité',
      'Secure by design',
      'Gestion des vulnérabilités',
      'Processus de développement sécurisé'
    ],
    impact: 'Obligatoire'
  },
  {
    category: 'Gestion des Vulnérabilités',
    requirements: [
      'Identification et évaluation',
      'Processus de correction',
      'Communication aux utilisateurs',
      'Base de données des vulnérabilités'
    ],
    impact: 'Critique'
  },
  {
    category: 'Documentation & Conformité',
    requirements: [
      'Documentation technique complète',
      'Déclaration UE de conformité',
      'Manuel d\'utilisation sécurisé',
      'Marquage CE'
    ],
    impact: 'Obligatoire'
  }
]

const auditPhases = [
  {
    phase: '01',
    title: 'Analyse Préliminaire',
    description: 'Évaluation du scope et des produits concernés par le CRA',
    duration: '1-2 semaines',
    deliverable: 'Rapport de cadrage'
  },
  {
    phase: '02',
    title: 'Audit Technique',
    description: 'Vérification détaillée de la conformité aux exigences CRA',
    duration: '3-6 semaines',
    deliverable: 'Rapport d\'audit complet'
  },
  {
    phase: '03',
    title: 'Plan de Mise en Conformité',
    description: 'Roadmap détaillée pour corriger les non-conformités',
    duration: '1 semaine',
    deliverable: 'Plan d\'action priorisé'
  },
  {
    phase: '04',
    title: 'Accompagnement',
    description: 'Support continu pour la mise en œuvre des recommandations',
    duration: 'Sur mesure',
    deliverable: 'Certification de conformité'
  }
]

const timeline = [
  { date: 'Août 2024', event: 'Publication du règlement CRA' },
  { date: 'Octobre 2027', event: 'Entrée en vigueur pour nouveaux produits' },
  { date: 'Octobre 2030', event: 'Application à tous les produits existants' }
]

export default function AuditCRAPage({ onNavigate }: AuditCRAPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center gap-2 mb-4">
            <Badge variant="secondary">
              Cyber Resilience Act • Conformité UE
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
              Bientôt Disponible
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Audit
            <span className="text-primary"> CRA</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>Service bientôt disponible.</strong> Assurez la conformité de vos produits numériques avec le nouveau règlement européen 
            sur la cyber-résilience. Audit complet, plan de mise en conformité et accompagnement 
            vers la certification.
          </p>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Warning size={16} className="mr-2 text-accent" />
            Service en développement • Lancement prévu début 2026
          </div>
        </motion.div>

        {/* CRA Compliance Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <div className="relative w-full max-w-4xl h-80 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={auditImage} 
              alt="Audit CRA conformité cybersécurité"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-white">
                Conformité CRA
              </Badge>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                Cyber Resilience Act
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Nouvelle réglementation européenne pour la cybersécurité des produits numériques
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CRA Requirements */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exigences du CRA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principales catégories de conformité à vérifier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {craRequirements.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <Badge 
                      variant={category.impact === 'Critique' ? 'destructive' : 'default'}
                      className="text-xs"
                    >
                      {category.impact}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calendrier d'Application
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Étapes clés de mise en œuvre du CRA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} className="text-white" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                  )}
                </div>
                
                <div className="font-semibold text-primary mb-2">{item.date}</div>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Processus d'Audit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Méthodologie structurée pour assurer votre conformité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {auditPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">{phase.phase}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <FileText size={16} />
                    <span>Livrable : {phase.deliverable}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pourquoi se Préparer Maintenant ?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Éviter les Sanctions</h3>
                    <p className="text-muted-foreground">Amendes jusqu'à 15M€ ou 2.5% du CA annuel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Avantage Concurrentiel</h3>
                    <p className="text-muted-foreground">Différenciation sur le marché européen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Scales size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Conformité Proactive</h3>
                    <p className="text-muted-foreground">Temps de préparation suffisant avant 2027</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Documentation Complète</h3>
                    <p className="text-muted-foreground">Preuves de conformité pour les autorités</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={complianceImage} 
                  alt="Conformité réglementaire"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-accent/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg mb-1 drop-shadow-lg">
                    Conformité Garantie
                  </h4>
                  <p className="text-white/80 text-sm drop-shadow-lg">
                    Respect total des exigences CRA
                  </p>
                </div>
              </div>
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
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Besoin d'un Audit CRA ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Contactez-moi pour discuter de vos besoins en conformité CRA et obtenir un devis personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl font-semibold"
                >
                  <Envelope size={20} className="mr-2" />
                  Demander un devis
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}