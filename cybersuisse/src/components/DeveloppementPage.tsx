import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Shield, Lock, Globe, Database, Envelope, CheckCircle, Cpu, Eye } from '@phosphor-icons/react'
import developmentImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface DeveloppementPageProps {
  onNavigate: (page: 'contact') => void
}

const developmentServices = [
  {
    title: 'Applications Web Sécurisées',
    subtitle: 'Développement Full-Stack',
    description: 'Sites web et applications web développés avec sécurité intégrée dès la conception',
    features: ['Architecture sécurisée', 'Protection XSS/CSRF', 'Chiffrement des données', 'Tests de sécurité intégrés']
  },
  {
    title: 'APIs Robustes',
    subtitle: 'Backend Sécurisé',
    description: 'APIs REST et GraphQL avec authentification forte et protection contre les attaques courantes',
    features: ['Authentification JWT/OAuth', 'Rate limiting', 'Validation des entrées', 'Logs d\'audit complets']
  },
  {
    title: 'Applications Mobiles',
    subtitle: 'Sécurité Mobile',
    description: 'Apps iOS/Android avec sécurité renforcée et protection contre le reverse engineering',
    features: ['Chiffrement local', 'Certificate pinning', 'Détection de jailbreak/root', 'Mises à jour sécurisées']
  }
]

export default function DeveloppementPage({ onNavigate }: DeveloppementPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO H1 invisible */}
      <h1 className="sr-only">Développement Sécurisé | Applications Web & Mobile | CyberSuisse Bienne</h1>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Développement Sécurisé • Security by Design
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Développement <span className="text-primary">Sécurisé</span>
            <br />
            Applications & Sites Web
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Développement d'applications web et mobiles avec sécurité intégrée dès la conception.
            Expertise unique combinant développement full-stack et cybersécurité pour des solutions
            robustes et conformes aux standards internationaux.
          </p>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
            >
              <Envelope size={20} className="mr-2" />
              Démarrer votre projet sécurisé
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
              src={developmentImage}
              alt="Développement sécurisé applications web"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-indigo-900/30 to-purple-900/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                Code Sécurisé & Performant
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Développement avec expertise cybersécurité intégrée
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Development Services */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services de Développement Sécurisé
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes pour vos besoins digitaux avec sécurité intégrée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20">
          {developmentServices.map((service, index) => (
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
          {/* Web Applications Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">🌐 Applications Web Sécurisées</h3>
                <p className="text-green-800 mb-6 leading-relaxed">
                  Développement d'applications web modernes avec React, Vue.js ou Angular, intégrant
                  les meilleures pratiques de sécurité : Content Security Policy, protection XSS,
                  gestion sécurisée des sessions et chiffrement des données sensibles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Frameworks modernes (React/Vue/Angular)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Protection XSS et CSRF intégrée</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Authentification multi-facteurs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-green-600 mr-3" />
                    <span>Tests de sécurité automatisés</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-green-600" />
                </div>
                <p className="text-sm text-green-700 font-medium">Full-Stack Sécurisé</p>
              </div>
            </div>
          </div>

          {/* API Development Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🔌 APIs Sécurisées & Robustes</h3>
                <p className="text-blue-800 mb-6 leading-relaxed">
                  Développement d'APIs REST et GraphQL avec sécurité renforcée : authentification JWT,
                  rate limiting, validation stricte des entrées, et protection contre les attaques
                  courantes comme les injections SQL et les attaques par déni de service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Authentification JWT/OAuth2</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Rate limiting et throttling</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Validation et sanitisation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-blue-600 mr-3" />
                    <span>Logs d'audit complets</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database size={32} className="text-blue-600" />
                </div>
                <p className="text-sm text-blue-700 font-medium">APIs Enterprise-Grade</p>
              </div>
            </div>
          </div>

          {/* Mobile Apps Section */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">📱 Applications Mobiles Sécurisées</h3>
                <p className="text-purple-800 mb-6 leading-relaxed">
                  Développement d'applications mobiles natives avec sécurité renforcée : chiffrement
                  des données locales, certificate pinning, détection de jailbreak/root, et protection
                  contre le reverse engineering et les attaques man-in-the-middle.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Chiffrement des données locales</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Certificate pinning SSL</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Détection jailbreak/root</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-purple-600 mr-3" />
                    <span>Biométrie et 2FA</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye size={32} className="text-purple-600" />
                </div>
                <p className="text-sm text-purple-700 font-medium">Sécurité Mobile Avancée</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Security Principles */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Principes de Sécurité Intégrés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Approche méthodique pour intégrer la sécurité à chaque étape du développement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Shield size={32} className="text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl">Security by Design</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Sécurité intégrée dès la conception, pas ajoutée après coup. Chaque composant est pensé
                  pour être sécurisé par défaut, éliminant 90% des vulnérabilités courantes.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-accent/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Lock size={32} className="text-accent" />
                  </motion.div>
                  <CardTitle className="text-xl">Chiffrement End-to-End</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Protection des données en transit et au repos avec les algorithmes de chiffrement
                  les plus robustes. Gestion sécurisée des clés et certificats.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-secondary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <CheckCircle size={32} className="text-secondary" />
                  </motion.div>
                  <CardTitle className="text-xl">Tests Automatisés</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Sécurité validée à chaque déploiement avec tests automatisés SAST, DAST et SCA.
                  Intégration continue avec vérification de sécurité à chaque commit.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-destructive/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Database size={32} className="text-destructive" />
                  </motion.div>
                  <CardTitle className="text-xl">Gestion des Secrets</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Stockage et rotation sécurisés des clés API, mots de passe et certificats.
                  Intégration avec vaults sécurisés et gestion automatique des secrets.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Choisir le Développement Sécurisé ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez pourquoi les entreprises choisissent le développement avec sécurité intégrée
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expertise Double Compétence</h3>
              <p className="text-muted-foreground mb-4">
                Rare combinaison d'expertise en développement full-stack et cybersécurité.
                Chaque ligne de code est revue sous l'angle sécurité avant d'être déployée.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Développement + Cybersécurité
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Code review sécurité intégré
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Tests de sécurité automatisés
                </li>
              </ul>
            </motion.div>

            {/* Zero-Vuln Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Prévention des Vulnérabilités</h3>
              <p className="text-muted-foreground mb-4">
                Éliminez 90% des vulnérabilités courantes grâce à l'approche Security by Design.
                OWASP Top 10, injections SQL, XSS, CSRF - tout est prévenu dès la conception.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  -90% de vulnérabilités évitées
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  OWASP Top 10 couvert
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-accent mr-2" />
                  Conformité réglementaire
                </li>
              </ul>
            </motion.div>

            {/* Performance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Performance & Sécurité</h3>
              <p className="text-muted-foreground mb-4">
                Sécurité sans compromis sur les performances. Optimisation du code et architecture
                sécurisée pour des applications rapides et robustes. ROI démontré sur la durée.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  Performance optimale
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  Architecture scalable
                </li>
                <li className="flex items-center">
                  <CheckCircle size={14} className="text-secondary mr-2" />
                  Maintenance facilitée
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Detailed Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="bg-white rounded-xl p-8 shadow-xl border border-border/50"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Avantages Détaillés du Développement Sécurisé
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">🛡️ Prévention des Cyberattaques</h4>
                  <p className="text-muted-foreground text-sm">
                    Évitez les coûteuses cyberattaques en intégrant la sécurité dès la conception.
                    Le coût moyen d'une faille de sécurité découverte en production est 10x supérieur
                    à celui d'une correction pendant le développement.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-foreground mb-2">⚖️ Conformité Réglementaire</h4>
                  <p className="text-muted-foreground text-sm">
                    Applications prêtes pour RGPD, PCI DSS, ISO 27001 et bientôt CRA.
                    Documentation de sécurité complète et audits de conformité facilités.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-foreground mb-2">💰 ROI Exceptionnel</h4>
                  <p className="text-muted-foreground text-sm">
                    Réduction drastique des coûts de maintenance et correction post-déploiement.
                    Applications plus stables, moins de downtime et meilleure satisfaction client.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-4">
                  <h4 className="font-bold text-foreground mb-2">🔒 Sécurité Zero-Trust</h4>
                  <p className="text-muted-foreground text-sm">
                    Architecture zero-trust intégrée : chaque requête est authentifiée et autorisée,
                    même entre microservices internes. Protection contre les mouvements latéraux.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-foreground mb-2">📊 Observabilité Complète</h4>
                  <p className="text-muted-foreground text-sm">
                    Logging, monitoring et alerting intégrés pour détecter anomalies et incidents
                    en temps réel. Tableau de bord de sécurité pour suivi continu.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-foreground mb-2">🚀 Déploiement Sécurisé</h4>
                  <p className="text-muted-foreground text-sm">
                    CI/CD pipelines avec tests de sécurité automatisés. Déploiement blue/green
                    et rollback sécurisé en cas de problème détecté.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-muted-foreground">Vulnérabilités évitées</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">-70%</div>
              <p className="text-sm text-muted-foreground">Coûts de maintenance</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring intégré</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-destructive mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Conformité réglementaire</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Standards */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies & Standards de Sécurité
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stack technologique moderne avec sécurité intégrée et conformité aux standards internationaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-green-900 mb-2">OWASP</h3>
              <p className="text-sm text-green-700">Top 10 & Cheat Sheet</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-blue-900 mb-2">ISO 27001</h3>
              <p className="text-sm text-blue-700">Management de la sécurité</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-purple-900 mb-2">RGPD Compliant</h3>
              <p className="text-sm text-purple-700">Protection des données</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.3 }}
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
            transition={{ duration: 0.6, delay: 2.4 }}
            className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-border/50"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Sécurité Intégrée par Technologie
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">🔐 Authentification & Autorisation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• OAuth 2.0 / OpenID Connect</li>
                  <li>• JWT avec rotation automatique</li>
                  <li>• Multi-Factor Authentication</li>
                  <li>• Role-Based Access Control</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">🛡️ Protection des Données</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chiffrement AES-256 au repos</li>
                  <li>• TLS 1.3 en transit</li>
                  <li>• Hashing sécurisé (bcrypt/Argon2)</li>
                  <li>• Tokenization des données sensibles</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">🔍 Monitoring & Logging</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Structured logging sécurisé</li>
                  <li>• SIEM integration</li>
                  <li>• Alerting temps réel</li>
                  <li>• Audit trails complets</li>
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
            transition={{ duration: 0.6, delay: 2.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes - Développement Sécurisé
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur le développement d'applications sécurisées
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">💰 Combien coûte le développement d'une application sécurisée ?</h3>
              <p className="text-muted-foreground">
                Le coût du développement sécurisé dépend de plusieurs facteurs : complexité fonctionnelle,
                exigences de sécurité spécifiques, intégrations nécessaires, et contraintes réglementaires.
                Chaque projet est analysé individuellement pour établir un devis précis et adapté à vos besoins.
                L'approche sécurisée représente un investissement initial mais génère des économies significatives
                sur les coûts de maintenance et réduit drastiquement les risques de cyberattaques coûteuses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">⏱️ Combien de temps prend le développement ?</h3>
              <p className="text-muted-foreground">
                Un MVP sécurisé prend 4-8 semaines, une application complète 3-6 mois selon la complexité.
                L'approche Security by Design ajoute du temps à la phase de conception mais accélère
                le développement final et réduit drastiquement les retards dus aux corrections de sécurité.
                Livraison avec tests de sécurité complets et documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🔒 Quelle différence avec un développement "normal" ?</h3>
              <p className="text-muted-foreground">
                Un développement "normal" ajoute la sécurité après coup, créant des failles et complexifiant
                la maintenance. Security by Design intègre la sécurité dès l'architecture : chaque choix
                technique considère les implications sécurité, éliminant 90% des vulnérabilités courantes
                (OWASP Top 10) et facilitant la conformité réglementaire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">📱 Développez-vous des applications mobiles ?</h3>
              <p className="text-muted-foreground">
                Oui, spécialisation en applications mobiles sécurisées natives (iOS/Android) et cross-platform
                (React Native/Flutter). Sécurité renforcée : chiffrement local, certificate pinning,
                détection jailbreak/root, biométrie avancée, et protection contre le reverse engineering.
                Conformité App Store et Google Play Store.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🔄 Comment gérez-vous les mises à jour de sécurité ?</h3>
              <p className="text-muted-foreground">
                Mises à jour de sécurité incluses dans le service : monitoring continu des vulnérabilités,
                patches de sécurité automatisés, et recommandations d'évolution. Architecture conçue
                pour faciliter les mises à jour sans interruption de service. Support technique
                pour migration et upgrade de sécurité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">📋 Fournissez-vous de la documentation de sécurité ?</h3>
              <p className="text-muted-foreground">
                Documentation complète incluse : architecture de sécurité, matrice des menaces,
                guide de déploiement sécurisé, procédures d'incident response, et documentation
                pour audits de conformité. Tout est préparé pour faciliter vos certifications
                ISO 27001, RGPD, et futurs audits CRA.
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
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Développons Votre Application Sécurisée
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              De l'idée au déploiement sécurisé - expertise complète en développement et cybersécurité.
              Applications robustes, conformes et prêtes pour l'avenir.
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
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl font-semibold"
                >
                  <Envelope size={20} className="mr-2" />
                  Démarrer le projet sécurisé
                </Button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}