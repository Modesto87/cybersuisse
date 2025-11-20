import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Shield, WindowsLogo, Envelope, CheckCircle, Cloud } from '@phosphor-icons/react'
import surveillanceImage from '@/assets/images/pexels-pixabay-60504.jpg'

interface SurveillancePageProps {
  onNavigate: (page: 'contact') => void
}

const defenderFeatures = [
  {
    title: 'Installation Complète',
    subtitle: 'Déploiement Clé en Main',
    description: 'Installation et configuration complète de Microsoft Defender for Business sur tous vos appareils',
    features: ['Installation automatisée', 'Configuration optimisée', 'Intégration seamless', 'Formation utilisateur']
  },
  {
    title: 'Monitoring 24/7',
    subtitle: 'Surveillance Continue',
    description: 'Monitoring constant de votre infrastructure avec alertes en temps réel et réponse proactive',
    features: ['Surveillance 24h/24', 'Alertes automatiques', 'Analyse comportementale', 'Rapports quotidiens']
  },
  {
    title: 'Gestion à Distance',
    subtitle: 'Support Externalisé',
    description: 'Gestion complète des alertes et maintenance à distance - vous n\'avez rien à faire',
    features: ['Gestion des alertes', 'Maintenance préventive', 'Mises à jour automatiques', 'Support technique']
  }
]

export default function SurveillancePage({ onNavigate }: SurveillancePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO H1 invisible */}
      <h1 className="sr-only">Surveillance Microsoft Defender | Monitoring 24/7 | CyberSuisse Bienne</h1>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Microsoft Defender for Business
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Surveillance <span className="text-primary">24/7</span> avec
            <br />
            Microsoft Defender
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Service complet de surveillance cybersécurité avec Microsoft Defender for Business.
            Installation, configuration et gestion à distance des alertes. Solution clé en main
            pour PME suisses - vous vous concentrez sur votre business, nous nous occupons de votre sécurité.
          </p>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
            >
              <Envelope size={20} className="mr-2" />
              Démarrer la surveillance Defender
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <div className="relative w-full max-w-4xl h-80 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={surveillanceImage}
              alt="Microsoft Defender surveillance cybersécurité"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-indigo-900/30 to-purple-900/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                Protection Microsoft 24/7
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Surveillance intelligente sans effort pour votre entreprise
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Microsoft Defender Services */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Complet Microsoft Defender
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'installation à la gestion quotidienne - tout est pris en charge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20">
          {defenderFeatures.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <div className="text-sm font-medium text-accent mb-2">{service.subtitle}</div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-12"
        >
          {/* Installation Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🔧 Installation & Configuration Complète</h3>
                <p className="text-blue-800 mb-6 leading-relaxed">
                  Déploiement professionnel de Microsoft Defender for Business sur tous vos appareils Windows,
                  serveurs et appareils mobiles. Configuration optimisée selon les meilleures pratiques Microsoft
                  et adaptée à votre environnement spécifique.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Déploiement automatisé sur tous les endpoints</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Configuration des politiques de sécurité</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Intégration avec Microsoft 365</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Formation des utilisateurs</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WindowsLogo size={32} className="text-blue-600" />
                </div>
                <p className="text-sm text-blue-700 font-medium">Compatible Windows 10/11 & Serveurs</p>
              </div>
            </div>
          </div>

          {/* Monitoring Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">👁️ Monitoring 24/7 Externalisé</h3>
                <p className="text-green-800 mb-6 leading-relaxed">
                  Surveillance continue de votre infrastructure avec analyse en temps réel des menaces.
                  Notre équipe traite toutes les alertes et prend les mesures nécessaires avant qu'elles
                  n'impactent votre business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Monitoring des endpoints 24h/24</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Détection avancée des menaces (EDR)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Analyse comportementale automatisée</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Rapports de sécurité quotidiens</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye size={32} className="text-green-600" />
                </div>
                <p className="text-sm text-green-700 font-medium">Réponse en moins de 15 minutes</p>
              </div>
            </div>
          </div>

          {/* Remote Management Section */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🎯 Gestion à Distance Complète</h3>
                <p className="text-purple-800 mb-6 leading-relaxed">
                  Vous n'avez rien à faire ! Notre équipe gère complètement Microsoft Defender :
                  mises à jour, optimisation des règles, traitement des faux positifs, et maintenance
                  préventive. Concentrez-vous sur votre cœur de métier.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Traitement quotidien des alertes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Mises à jour et patches de sécurité</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Optimisation des performances</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Support technique prioritaire</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud size={32} className="text-purple-600" />
                </div>
                <p className="text-sm text-purple-700 font-medium">Zero intervention de votre côté</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Choisir Notre Service Microsoft Defender ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez pourquoi des centaines d'entreprises suisses nous font confiance pour leur surveillance 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expertise Microsoft Certifiée</h3>
              <p className="text-muted-foreground mb-4">
                Spécialistes certifiés Microsoft Defender avec des années d'expérience en déploiement
                et gestion d'environnements de sécurité d'entreprise. Formation continue sur les dernières menaces.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Certification Microsoft Security
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Expérience terrain 10+ ans
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Support Microsoft direct
                </li>
              </ul>
            </motion.div>

            {/* Zero-Touch Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Gestion 100% Externalisée</h3>
              <p className="text-muted-foreground mb-4">
                Solution "zero-touch" pour votre équipe IT. Nous gérons tout : installation, monitoring,
                alertes, mises à jour et optimisation. Vous recevez uniquement les rapports importants.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Installation sans interruption
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Maintenance invisible
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Support 24/7 inclus
                </li>
              </ul>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Résultats Prouvés</h3>
              <p className="text-muted-foreground mb-4">
                Nos clients voient une réduction de 95% des incidents de sécurité grâce à notre surveillance
                proactive. Temps de réponse moyen : 12 minutes contre plusieurs heures sans monitoring.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  -95% d'incidents critiques
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  Réponse en 12 min moyenne
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  ROI de 400% sur 2 ans
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Detailed Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white rounded-xl p-8 shadow-xl border border-border/50"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Avantages Détaillés du Service Microsoft Defender
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">🛡️ Protection Microsoft Entreprise</h4>
                  <p className="text-muted-foreground text-sm">
                    Bénéficiez de la puissance de Microsoft Defender for Endpoint, utilisé par 90% des
                    entreprises Fortune 500. Même niveau de protection que les plus grandes entreprises.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-foreground mb-2">⚡ Détection en Temps Réel</h4>
                  <p className="text-muted-foreground text-sm">
                    Intelligence artificielle avancée pour détecter les menaces zero-day et comportements
                    suspects en temps réel. Analyse comportementale et apprentissage automatique.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-foreground mb-2">💰 Coût Optimisé</h4>
                  <p className="text-muted-foreground text-sm">
                    Solution économique pour PME : pas besoin d'investir dans une équipe SOC coûteuse.
                    Notre service externalisé coûte moins qu'un salaire IT annuel.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-4">
                  <h4 className="font-bold text-foreground mb-2">🔄 Intégration Seamless</h4>
                  <p className="text-muted-foreground text-sm">
                    S'intègre parfaitement avec votre environnement Microsoft 365 existant.
                    Pas de changement dans vos habitudes de travail.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-foreground mb-2">📊 Rapports Transparents</h4>
                  <p className="text-muted-foreground text-sm">
                    Rapports hebdomadaires détaillés sur l'état de votre sécurité, menaces détectées,
                    actions prises et recommandations d'amélioration.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-foreground mb-2">🤝 Support Suisse</h4>
                  <p className="text-muted-foreground text-sm">
                    Support en français par des experts locaux. Respect total du RGPD et des réglementations
                    suisses en matière de protection des données.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Réduction des incidents</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">12 min</div>
              <p className="text-sm text-muted-foreground">Temps de réponse moyen</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-secondary mb-2">400%</div>
              <p className="text-sm text-muted-foreground">ROI sur 2 ans</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-destructive mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring continu</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Microsoft Defender Standards */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Standards Microsoft & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre service respecte les plus hauts standards de sécurité Microsoft et les réglementations internationales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <WindowsLogo size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Microsoft Defender</h3>
              <p className="text-sm text-blue-700">for Business Certified</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-green-900 mb-2">ISO 27001</h3>
              <p className="text-sm text-green-700">Management de la sécurité</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-purple-900 mb-2">RGPD Compliant</h3>
              <p className="text-sm text-purple-700">Protection des données</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-orange-900 mb-2">CRA Ready</h3>
              <p className="text-sm text-orange-700">Cyber Resilience Act</p>
            </motion.div>
          </div>

          {/* Standards List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-border/50"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Technologies & Standards Intégrés
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">🔒 Fonctionnalités Defender</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Endpoint Detection & Response (EDR)</li>
                  <li>• Antivirus nouvelle génération</li>
                  <li>• Protection contre les ransomwares</li>
                  <li>• Sécurité web et email intégrée</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">📊 Intelligence Microsoft</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Microsoft Defender Threat Intelligence</li>
                  <li>• Azure AD Identity Protection</li>
                  <li>• Microsoft Secure Score</li>
                  <li>• Intune Device Management</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">🎯 Conformité Réglementaire</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• RGPD (Règlement Général)</li>
                  <li>• ISO 27001/27002</li>
                  <li>• CRA (Cyber Resilience Act)</li>
                  <li>• NIS2 Directive (préparation)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes - Microsoft Defender
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur notre service de surveillance Microsoft Defender
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">💰 Quel est le coût du service Microsoft Defender ?</h3>
              <p className="text-muted-foreground">
                Notre service complet inclut la licence Microsoft Defender for Business,
                plus notre gestion externalisée à partir de 150 CHF/mois selon la taille de votre infrastructure.
                Cela représente un coût total inférieur à un salaire IT annuel pour une protection 24/7 professionnelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">⏱️ Combien de temps prend l'installation ?</h3>
              <p className="text-muted-foreground">
                L'installation complète prend généralement 1-2 jours selon la taille de votre infrastructure.
                Nous travaillons en dehors des heures de bureau pour minimiser l'impact sur votre activité.
                Le monitoring commence immédiatement après l'installation et vous êtes protégé dès le premier jour.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🔒 Mes données sont-elles sécurisées ?</h3>
              <p className="text-muted-foreground">
                Absolument. Microsoft Defender respecte les plus hauts standards de sécurité et est conforme RGPD.
                Toutes les données restent en Suisse ou dans l'Union Européenne. Nous signons un accord de confidentialité
                strict et n'accédons à vos données que pour des raisons de sécurité. Aucun accès à vos fichiers métier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">📱 Est-ce compatible avec nos appareils existants ?</h3>
              <p className="text-muted-foreground">
                Microsoft Defender for Business est compatible avec Windows 10/11, serveurs Windows, et appareils mobiles
                (iOS/Android via Intune). Si vous utilisez déjà Microsoft 365, l'intégration est seamless. Pour les
                appareils non-Windows, nous pouvons proposer des solutions complémentaires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🚨 Que se passe-t-il en cas d'alerte ?</h3>
              <p className="text-muted-foreground">
                Dès qu'une alerte critique est détectée, notre équipe l'analyse en moins de 15 minutes.
                Nous prenons les mesures nécessaires (isolement, nettoyage, etc.) et vous informons uniquement
                si une action de votre côté est requise. Les alertes mineures sont traitées automatiquement
                et rapportées dans votre résumé hebdomadaire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">📊 Quels rapports recevrai-je ?</h3>
              <p className="text-muted-foreground">
                Vous recevez un rapport hebdomadaire détaillé avec les menaces détectées, actions prises,
                score de sécurité de votre environnement, et recommandations d'amélioration. En cas d'incident
                majeur, vous êtes informé immédiatement. Un tableau de bord en ligne est également disponible
                pour consulter l'état de votre sécurité en temps réel.
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
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Protégez Votre Entreprise 24/7 avec Microsoft Defender
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Installation complète, monitoring externalisé, gestion des alertes - tout est pris en charge.
              Concentrez-vous sur votre business, nous nous occupons de votre cybersécurité.
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
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl font-semibold"
                >
                  <Envelope size={20} className="mr-2" />
                  Obtenir un devis Defender
                </Button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}