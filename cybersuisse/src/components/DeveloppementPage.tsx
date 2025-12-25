import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SEOContent from '@/components/SEOContent'
import { Code, Shield, Lock, Globe, Database, Envelope, CheckCircle, Cpu, Eye } from '@phosphor-icons/react'
import developmentImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface DeveloppementPageProps {
  onNavigate: (page: 'contact') => void
}

const developmentServices = [
  {
    title: 'Site Vitrine Sécurisé',
    subtitle: 'Présence en ligne professionnelle',
    description: 'Création d\'un site web rapide, fiable et durci contre les attaques courantes (à la date de livraison).',
    features: ['Sans WordPress (code sur mesure)', 'Formulaires protégés (anti-abus)', 'HTTPS/TLS + bonnes pratiques CSP', 'Revue & tests de sécurité avant livraison']
  },
  {
    title: 'Site E‑commerce Sécurisé',
    subtitle: 'Vente en ligne & paiements',
    description: 'Boutique en ligne avec parcours sécurisé, protection des comptes et réduction des risques de fraude.',
    features: ['Protection OWASP Top 10 (XSS, injections, etc.)', 'Gestion sûre des sessions & comptes', 'Durcissement configuration & déploiement', 'Plan de remédiation si points à corriger']
  },
  {
    title: 'Refonte & Sécurisation',
    subtitle: 'Modernisation sans rupture',
    description: 'Amélioration de la sécurité d\'un site existant : réduction de la surface d\'attaque et durcissement des points faibles.',
    features: ['Audit technique + priorisation', 'Corrections ciblées + durcissement', 'Revue de code & configuration', 'Conseils d\'exploitation (sauvegardes, accès, mises à jour)']
  }
]

export default function DeveloppementPage({ onNavigate }: DeveloppementPageProps) {
  return (
    <div className="min-h-screen cs-bg-redteam-diagonal">
      <SEOContent
        page="developpement"
        title="Création de site web sécurisé à Bienne/Biel (Suisse) | Sans WordPress | CyberSuisse"
        description="Création de sites web sécurisés à Bienne/Biel et en Suisse : code sur mesure (sans WordPress), revue & tests de sécurité avant livraison, durcissement contre les menaces courantes à la date de livraison."
      />

      {/* SEO H1 invisible */}
      <h1 className="sr-only">Création de site web sécurisé à Bienne/Biel (Suisse) | Sans WordPress | CyberSuisse</h1>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-red-950/60 text-red-400 border border-red-600/40">
            Création de sites web sécurisés • Security by Design
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Création de <span className="text-white cs-text-glow-red-30">sites web</span>
            <br />
            réellement sécurisés
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Basé à Bienne/Biel, je conçois des sites web sur mesure (sans WordPress) avec une approche
            cybersécurité intégrée : le code est écrit, revu et testé par moi avant livraison.
            L'IA peut m'assister (accélération, idées, boilerplate), mais la validation reste humaine et responsable.
            Objectif : livrer un site durci contre les menaces courantes connues à la date de livraison.
          </p>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.95 }}
            className="cs-preserve-3d"
          >
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-xl border border-red-500/50 cs-shadow-glow-red-30"
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
              alt="Création de site web sécurisé à Bienne/Biel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-indigo-900/30 to-purple-900/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                Site web sécurisé & maîtrisé
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Code sur mesure, revue et tests avant livraison
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Offres de création de site web sécurisé
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pour PME, indépendants et organisations en Suisse : un site clair, rapide, et surtout durci.
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                <CardHeader>
                  <CardTitle className="text-xl text-red-500">{service.title}</CardTitle>
                  <div className="text-sm font-medium text-orange-400 mb-2">{service.subtitle}</div>
                  <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle size={16} className="text-red-500 mr-3 flex-shrink-0" />
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
          {/* Website Section */}
          <div className="bg-gradient-to-r from-green-950/50 to-emerald-950/50 rounded-xl p-8 border border-green-800/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">🌐 Site vitrine sécurisé (sur mesure)</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Idéal pour présenter votre activité, inspirer confiance et convertir. Le site est construit
                  avec une surface d'attaque minimale : formulaires protégés, configurations durcies et bonnes pratiques
                  de sécurité appliquées dès l'architecture.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mr-3" />
                    <span>Sans WordPress (code sur mesure, maîtrisé)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mr-3" />
                    <span>Protection des formulaires & anti-abus</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mr-3" />
                    <span>Durcissement (headers, CSP, configuration)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 mr-3" />
                    <span>Revue & tests de sécurité avant livraison</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-950/50 border border-green-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-green-400" />
                </div>
                <p className="text-sm text-green-300 font-medium">Site clair, rapide, durci</p>
              </div>
            </div>
          </div>

          {/* E-commerce Section */}
          <div className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 rounded-xl p-8 border border-blue-800/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">🛒 Site e‑commerce sécurisé</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Un e‑commerce est une cible : comptes clients, formulaires, paiements, paniers, promo-codes.
                  L'approche security-by-design vise à réduire les risques de fraude, de prise de compte
                  et de compromission, tout en gardant une expérience fluide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3" />
                    <span>Protection OWASP Top 10 (XSS, injections, etc.)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3" />
                    <span>Gestion sûre des sessions & des comptes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3" />
                    <span>Durcissement déploiement & configuration</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3" />
                    <span>Revue & tests de sécurité avant livraison</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-950/50 border border-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock size={32} className="text-blue-400" />
                </div>
                <p className="text-sm text-blue-300 font-medium">Comptes & parcours durcis</p>
              </div>
            </div>
          </div>

          {/* Hardening Section */}
          <div className="bg-gradient-to-r from-purple-950/50 to-violet-950/50 rounded-xl p-8 border border-purple-800/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">🛡️ Refonte & durcissement de site</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Votre site existe déjà mais vous doutez de sa robustesse ? On identifie les points faibles
                  (formulaires, accès admin, configuration, dépendances, exposition) puis on corrige et on durcit.
                  Vous gagnez en confiance, en stabilité et en maîtrise.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-purple-400 mr-3" />
                    <span>Audit technique + priorisation des risques</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-purple-400 mr-3" />
                    <span>Corrections ciblées + durcissement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-purple-400 mr-3" />
                    <span>Revue de code & configuration</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-purple-400 mr-3" />
                    <span>Conseils d'exploitation & accès</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-950/50 border border-purple-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye size={32} className="text-purple-400" />
                </div>
                <p className="text-sm text-purple-300 font-medium">Réduction surface d'attaque</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Principes de Sécurité Intégrés
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Une méthode simple : construire un site web robuste, vérifier, puis livrer durci.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-red-950/50 rounded-lg cs-preserve-3d"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <Shield size={32} className="text-red-500" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">Security by Design</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-400">
                  Sécurité intégrée dès la conception, pas ajoutée après coup. Chaque choix (pages, formulaires,
                  accès, hébergement) est évalué sous l'angle risque.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-blue-600/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-blue-950/50 rounded-lg cs-preserve-3d"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <Lock size={32} className="text-blue-400" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">Chiffrement End-to-End</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-400">
                  HTTPS/TLS, bonnes pratiques de configuration et protection des données sensibles.
                  Objectif : éviter les fuites, les interceptions et les erreurs de configuration.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-green-600/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-green-950/50 rounded-lg cs-preserve-3d"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <CheckCircle size={32} className="text-green-400" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">Tests Automatisés</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-400">
                  Revue de code + tests de sécurité avant livraison (scan dépendances, contrôles de base, vérifications
                  ciblées). L'important : trouver les failles avant vos visiteurs.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-orange-600/40">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-3 bg-orange-950/50 rounded-lg cs-preserve-3d"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <Database size={32} className="text-orange-400" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">Gestion des Secrets</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-400">
                  Gestion propre des accès, secrets et paramètres (admin, emails, clés). Réduction des risques liés
                  aux identifiants exposés et aux mauvaises configurations.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SEO Rich Content Section */}
      <section className="py-20 cs-bg-redteam-diagonal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi un site web réellement sécurisé ?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Parce qu'un site "vite fait" peut coûter très cher : données, réputation, clients et interruptions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg border border-[#333] hover:border-red-600/40 transition-all"
            >
              <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expertise Double Compétence</h3>
              <p className="text-gray-400 mb-4">
                Création de site web + cybersécurité. Le code est écrit sur mesure (sans WordPress)
                et revu sous l'angle sécurité avant mise en ligne.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-red-500 mr-2" />
                  Développement + Cybersécurité
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-red-500 mr-2" />
                  Code review sécurité intégré
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-red-500 mr-2" />
                  Tests de sécurité automatisés
                </li>
              </ul>
            </motion.div>

            {/* Zero-Vuln Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg border border-[#333] hover:border-orange-600/40 transition-all"
            >
              <div className="w-12 h-12 bg-orange-950/50 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prévention des Vulnérabilités</h3>
              <p className="text-gray-400 mb-4">
                Réduisez fortement les vulnérabilités courantes grâce à l'approche Security by Design.
                OWASP Top 10, injections, XSS, CSRF : l'objectif est de fermer les portes les plus utilisées.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-orange-500 mr-2" />
                  -90% de vulnérabilités évitées
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-orange-500 mr-2" />
                  OWASP Top 10 couvert
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-orange-500 mr-2" />
                  Conformité réglementaire
                </li>
              </ul>
            </motion.div>

            {/* Performance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg border border-[#333] hover:border-blue-600/40 transition-all"
            >
              <div className="w-12 h-12 bg-blue-950/50 rounded-lg flex items-center justify-center mb-4">
                <Cpu size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance & Sécurité</h3>
              <p className="text-gray-400 mb-4">
                Sécurité sans sacrifier la performance. Un site rapide inspire confiance, convertit mieux
                et réduit aussi certains vecteurs d'attaque (surface et complexité maîtrisées).
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-blue-500 mr-2" />
                  Performance optimale
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-blue-500 mr-2" />
                  Architecture scalable
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle size={14} className="text-blue-500 mr-2" />
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
            className="bg-[#1A1A1A] rounded-xl p-8 shadow-xl border border-[#333]"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">
                Ce que vous obtenez concrètement
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-white mb-2">🛡️ Prévention des Cyberattaques</h4>
                  <p className="text-gray-400 text-sm">
                    Réduction de l'exposition aux attaques les plus fréquentes (formulaires, injections, XSS,
                    comptes). Objectif : éviter les mauvaises surprises après la mise en ligne.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-white mb-2">⚖️ Conformité Réglementaire</h4>
                  <p className="text-gray-400 text-sm">
                    Bonnes pratiques orientées RGPD (minimisation, sécurité des données, accès),
                    avec documentation utile et traçable.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-white mb-2">💰 ROI Exceptionnel</h4>
                  <p className="text-gray-400 text-sm">
                    Moins de correctifs en urgence et de temps perdu. Un site bien construit est plus stable,
                    plus simple à faire évoluer et plus économique sur la durée.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-white mb-2">🔒 Accès & administration durcis</h4>
                  <p className="text-gray-400 text-sm">
                    Mesures concrètes : séparation des accès, durcissement des pages sensibles,
                    contrôle des permissions et réduction de l'exposition de l'admin.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-white mb-2">📊 Visibilité & journaux utiles</h4>
                  <p className="text-gray-400 text-sm">
                    Journaux utiles pour diagnostiquer et investiguer (sans exposer de données sensibles).
                    En option : recommandations de monitoring et d'alerting.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-bold text-white mb-2">🚀 Livraison durcie (menaces actuelles)</h4>
                  <p className="text-gray-400 text-sm">
                    Objectif : livrer un site protégé contre les menaces courantes connues à la date de livraison.
                    Les nouvelles vulnérabilités futures nécessitent des mises à jour et une maintenance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Props Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333]">
              <div className="text-3xl font-bold text-red-500 mb-2">No WP</div>
              <p className="text-sm text-gray-400">Sans WordPress</p>
            </div>
            <div className="text-center bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333]">
              <div className="text-3xl font-bold text-orange-500 mb-2">Review</div>
              <p className="text-sm text-gray-400">Code revu & testé</p>
            </div>
            <div className="text-center bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333]">
              <div className="text-3xl font-bold text-blue-500 mb-2">CSP</div>
              <p className="text-sm text-gray-400">Headers & durcissement</p>
            </div>
            <div className="text-center bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333]">
              <div className="text-3xl font-bold text-green-500 mb-2">Livraison</div>
              <p className="text-sm text-gray-400">Menaces courantes</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Standards */}
      <section className="py-20 cs-bg-redteam-vertical-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies & Standards de Sécurité
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Stack technologique moderne avec sécurité intégrée et conformité aux standards internationaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-center p-6 bg-gradient-to-br from-green-950/50 to-green-900/30 rounded-xl border border-green-800/40"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-green-400 mb-2">OWASP</h3>
              <p className="text-sm text-green-300/80">Top 10 & Cheat Sheet</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-950/50 to-blue-900/30 rounded-xl border border-blue-800/40"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-blue-400 mb-2">ISO 27001</h3>
              <p className="text-sm text-blue-300/80">Management de la sécurité</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="text-center p-6 bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-xl border border-purple-800/40"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-purple-400 mb-2">RGPD</h3>
              <p className="text-sm text-purple-300/80">Bonnes pratiques données</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="text-center p-6 bg-gradient-to-br from-orange-950/50 to-orange-900/30 rounded-xl border border-orange-800/40"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-orange-400 mb-2">Préparation CRA</h3>
              <p className="text-sm text-orange-300/80">Cyber Resilience Act</p>
            </motion.div>
          </div>

          {/* Standards List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="bg-[#1A1A1A] rounded-xl p-8 border border-[#333]"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Sécurité Intégrée par Technologie
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-red-400 mb-3">🔐 Accès & administration</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Séparation des accès (admin / public)</li>
                  <li>• Durcissement des pages sensibles</li>
                  <li>• MFA si espace client / admin</li>
                  <li>• Gestion des rôles si nécessaire</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-blue-400 mb-3">🛡️ Protection des Données</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• HTTPS/TLS en transit</li>
                  <li>• Stockage minimal des données</li>
                  <li>• Hashing sécurisé des mots de passe si comptes</li>
                  <li>• Protection des formulaires & uploads</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-400 mb-3">🔍 Monitoring & Logging</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Logs utiles et non sensibles</li>
                  <li>• Aide à l'investigation en cas d'incident</li>
                  <li>• Recommandations d'alerting</li>
                  <li>• Traçabilité sur actions critiques</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 cs-bg-redteam-diagonal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions Fréquentes - Site web sécurisé
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Réponses claires sur la création de site web sécurisé (Bienne/Biel et Suisse)
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">💰 Combien coûte un site web sécurisé ?</h3>
              <p className="text-gray-400">
                Le prix dépend du périmètre (vitrine, e‑commerce, espace client), du contenu, des intégrations
                et des exigences de sécurité (comptes, paiement, données). Je propose un cadrage rapide pour
                établir un devis clair et un plan de livraison.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">⏱️ Combien de temps prend le développement ?</h3>
              <p className="text-gray-400">
                Selon la complexité : un site vitrine peut être livré en quelques semaines, un e‑commerce
                ou un site sur mesure prend davantage de temps. La sécurité est intégrée dès le départ
                pour éviter les retours en arrière et livrer proprement (tests et revue avant mise en ligne).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">🔒 Quelle différence avec un développement "normal" ?</h3>
              <p className="text-gray-400">
                Beaucoup de sites sont livrés sans réflexion sécurité (formulaires, accès admin, configuration,
                dépendances). Security by Design intègre la sécurité dès l'architecture : chaque choix
                technique est évalué pour réduire les risques et éviter les failles les plus courantes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">🧱 Travaillez-vous avec WordPress ?</h3>
              <p className="text-gray-400">
                Non. Je ne propose pas de sites WordPress : je privilégie un code sur mesure, maîtrisé et
                plus simple à durcir. Cela réduit la dépendance à des plugins et limite la surface d'attaque.
                Si vous avez déjà un site WordPress, je peux vous orienter sur une stratégie de refonte ou
                de sécurisation selon votre contexte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">🔄 Comment gérez-vous les mises à jour de sécurité ?</h3>
              <p className="text-gray-400">
                À la livraison : configuration durcie et dépendances à jour contre les menaces courantes connues.
                Ensuite, comme tout logiciel, un site nécessite des mises à jour et un suivi. Je peux proposer
                un accompagnement (maintenance / correctifs) ou vous fournir un plan d'exploitation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.1 }}
              className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#333] hover:border-red-600/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">📋 Fournissez-vous de la documentation de sécurité ?</h3>
              <p className="text-gray-400">
                Oui : guide de déploiement et d'exploitation (accès, sauvegardes, configuration),
                points de sécurité appliqués, et recommandations. L'objectif est que vous gardiez la maîtrise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cs-bg-redteam-vertical-dark-reverse">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Créons votre site web sécurisé
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              De l'idée à la mise en ligne : un site sur mesure, sans WordPress, avec revue & tests de sécurité.
              Basé à Bienne/Biel, prestations pour toute la Suisse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cs-preserve-3d"
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl font-semibold cs-shadow-glow-red-30-strong"
                >
                  <Envelope size={20} className="mr-2" />
                  Demander un devis site sécurisé
                </Button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}