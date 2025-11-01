import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HardDrive, Usb, Memory, MagnifyingGlass, Shield, Clock, CheckCircle, Database, Cpu, Eye, Envelope } from '@phosphor-icons/react'
import dataRecoveryImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'

interface DataRecoveryPageProps {
  onNavigate: (page: 'contact') => void
}

const recoveryServices = [
  {
    title: 'Récupération Disques Durs HDD/SSD',
    subtitle: 'Récupération Professionnelle',
    icon: HardDrive,
    description: 'Spécialistes en récupération de données sur tous types de disques durs et SSD',
    services: [
      'Pannes logiques - Système de fichiers corrompu, erreurs de partition',
      'Fichiers supprimés - Suppression accidentelle ou malveillante',
      'Partitions perdues - Tables de partition endommagées',
      'Formatage accidentel - Formatage rapide ou complet',
      'Secteurs défectueux - Bad sectors, zones défaillantes'
    ],
    features: ['Analyse gratuite', 'Devis détaillé', 'Confidentialité garantie', 'Succès jusqu\'à 95%']
  },
  {
    title: 'Récupération Clés USB',
    subtitle: 'Flash Drives & Périphériques',
    icon: Usb,
    description: 'Récupération de données sur clés USB et périphériques de stockage externes',
    services: [
      'Clés non reconnues - Problèmes de reconnaissance USB',
      'Erreurs de lecture - Corruption de données, virus',
      'Données effacées par erreur - Suppression accidentelle',
      'Formatage USB - Formatage involontaire',
      'Pannes électroniques - Circuiterie défaillante'
    ],
    features: ['Diagnostic rapide', 'Récupération express', 'Support multi-formats', 'Garantie satisfaction']
  },
  {
    title: 'Récupération Cartes SD/microSD',
    subtitle: 'Mémoire Flash & Appareils Photo',
    icon: Memory,
    description: 'Experts en récupération de photos, vidéos et données sur cartes mémoire',
    services: [
      'Photos/vidéos supprimées - Suppression accidentelle',
      'Carte corrompue - Corruption système de fichiers',
      'Carte formatée - Formatage complet ou partiel',
      'Carte illisible - Erreurs de lecture physique',
      'Problèmes appareils photo - Corruption interne'
    ],
    features: ['Spécialisation multimédia', 'Prévisualisation gratuite', 'Récupération sélective', 'Service 24/7']
  }
]

const recoveryProcess = [
  {
    step: '01',
    title: 'Diagnostic Gratuit',
    description: 'Analyse complète du support défaillant sans engagement',
    icon: MagnifyingGlass,
    details: ['Évaluation gratuite', 'Devis détaillé', 'Confidentialité assurée']
  },
  {
    step: '02',
    title: 'Analyse Technique',
    description: 'Investigation approfondie des dommages et possibilités de récupération',
    icon: Database,
    details: ['Imagerie forensique', 'Analyse des dommages', 'Évaluation des risques']
  },
  {
    step: '03',
    title: 'Récupération des Données',
    description: 'Extraction et reconstruction des données selon les meilleures pratiques',
    icon: Cpu,
    details: ['Techniques spécialisées', 'Récupération sélective', 'Vérification intégrité']
  },
  {
    step: '04',
    title: 'Restitution & Vérification',
    description: 'Livraison des données récupérées avec rapport complet',
    icon: CheckCircle,
    details: ['Vérification finale', 'Rapport détaillé', 'Support post-récupération']
  }
]

export default function DataRecoveryPage({ onNavigate }: DataRecoveryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO H1 invisible */}
      <h1 className="sr-only">Récupération de Données | HDD SSD USB SD | CyberSuisse Bienne</h1>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Récupération de Données • Service d'Urgence 24/7
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Récupération de <span className="text-primary">Données</span>
            <br />
            Professionnelle & Sécurisée
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experts certifiés en récupération de données sur disques durs, SSD, clés USB et cartes SD.
            Taux de succès jusqu'à 95% avec confidentialité absolue et service d'urgence 24/7.
            De la panne logique à la défaillance physique, nous récupérons vos données critiques.
          </p>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl"
            >
              <Clock size={20} className="mr-2" />
              Diagnostic Gratuit - Urgence 24/7
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
              src={dataRecoveryImage}
              alt="Récupération de données professionnelle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 via-blue-900/30 to-purple-900/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                Expertise Technique & Confidentialité
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Récupération de données sensibles avec sécurité maximale
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recovery Services */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services de Récupération Spécialisés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Couverture complète pour tous vos supports de stockage défaillants
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {recoveryServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div
                        className="p-4 bg-primary/10 rounded-xl"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <IconComponent size={32} className="text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                        <div className="text-sm font-medium text-accent mt-1">{service.subtitle}</div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Problèmes Couvert :</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Avantages :</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Recovery Process */}
      <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Processus de Récupération Professionnel
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Méthodologie éprouvée en 4 étapes pour maximiser les chances de récupération
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryProcess.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {index < recoveryProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                    )}
                  </div>

                  <div className="mb-4">
                    <IconComponent size={32} className="text-primary mx-auto mb-2" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle size={12} className="text-accent mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi Choisir Notre Service de Récupération ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez pourquoi des milliers de clients nous font confiance pour leurs données critiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Expertise Certifiée</h3>
            <p className="text-muted-foreground mb-4">
              Équipe d'experts certifiés avec plus de 15 ans d'expérience en récupération de données.
              Formation continue sur les dernières technologies et techniques de récupération.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Certifications internationales
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Technologies de pointe
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Recherche & développement
              </li>
            </ul>
          </motion.div>

          {/* Success Rate Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Taux de Succès Exceptionnel</h3>
            <p className="text-muted-foreground mb-4">
              Taux de récupération moyen de 95% grâce à notre approche méthodique et nos outils spécialisés.
              Même dans les cas les plus complexes, nous maximisons vos chances de récupérer vos données.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                95% taux de succès moyen
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Cas complexes acceptés
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Pas de succès, pas de frais
              </li>
            </ul>
          </motion.div>

          {/* Security Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-border/50"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Eye size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Confidentialité & Sécurité</h3>
            <p className="text-muted-foreground mb-4">
              Protection absolue de vos données sensibles. Environnements sécurisés, chiffrement,
              et destruction sécurisée. Conformité RGPD et standards de sécurité bancaire.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Chiffrement des données
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Conformité RGPD
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Destruction sécurisée
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Detailed Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-white rounded-xl p-8 shadow-xl border border-border/50"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Avantages Détaillés de Notre Service
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-2">🔧 Équipement Professionnel</h4>
                <p className="text-muted-foreground text-sm">
                  Laboratoires spécialisés avec salles blanches classe 100, outils de récupération
                  professionnels (PC-3000, DeepSpar, R-Studio), et chambres propres pour manipulation
                  de supports délicats. Investissement continu dans les dernières technologies.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-foreground mb-2">⚡ Service d'Urgence 24/7</h4>
                <p className="text-muted-foreground text-sm">
                  Disponibilité 24h/24 et 7j/7 pour les cas d'urgence. Intervention prioritaire
                  pour les entreprises, cabinets médicaux, et services essentiels. Réponse
                  garantie sous 2 heures pour les cas critiques.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-foreground mb-2">💰 Tarification Transparente</h4>
                <p className="text-muted-foreground text-sm">
                  Diagnostic gratuit et devis détaillé sans engagement. Tarification basée
                  sur la complexité technique, pas sur la valeur des données. Pas de frais
                  supplémentaires cachés, paiement uniquement en cas de succès.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-foreground mb-2">🎯 Récupération Spécialisée</h4>
                <p className="text-muted-foreground text-sm">
                  Spécialisation par type de support : HDD mécanique, SSD flash, cartes mémoire,
                  RAID, NAS, et supports exotiques. Expertise dans tous les systèmes de fichiers
                  (NTFS, FAT32, exFAT, ext4, HFS+, APFS, etc.).
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-foreground mb-2">📊 Reporting Complet</h4>
                <p className="text-muted-foreground text-sm">
                  Rapport détaillé de récupération avec inventaire complet des données récupérées,
                  statistiques de succès, recommandations de prévention, et certificat d'intégrité
                  des données. Documentation complète pour assurances et audits.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-foreground mb-2">🔄 Support Post-Récupération</h4>
                <p className="text-muted-foreground text-sm">
                  Accompagnement après récupération : conseils de sauvegarde, recommandations
                  de prévention, et support technique. Formation optionnelle sur les bonnes
                  pratiques de protection des données.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="grid md:grid-cols-4 gap-6 mt-12"
        >
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-sm text-muted-foreground">Taux de succès moyen</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Service d'urgence</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Années d'expérience</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Confidentialité garantie</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes - Récupération de Données
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos services de récupération de données
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">💰 Combien coûte la récupération de données ?</h3>
              <p className="text-muted-foreground">
                Le coût de récupération dépend de plusieurs facteurs : type de support, complexité du dommage,
                volume de données, et urgence de l'intervention. Chaque cas est analysé individuellement
                pour établir un devis précis et adapté. Diagnostic gratuit offert, paiement uniquement
                en cas de succès pour garantir votre satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">⏱️ Combien de temps prend la récupération ?</h3>
              <p className="text-muted-foreground">
                Pour les cas simples (suppression accidentelle), récupération possible en 24-48h.
                Les cas complexes (dommages physiques) peuvent nécessiter 3-7 jours. Les urgences
                bénéficient d'un traitement prioritaire avec réponse sous 2h. Vous êtes tenu informé
                de l'avancement en temps réel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🔍 Quels types de supports traitez-vous ?</h3>
              <p className="text-muted-foreground">
                Spécialisation complète : disques durs HDD/SSD, clés USB, cartes SD/microSD,
                cartes mémoire CompactFlash, XQD, CFexpress. Support pour tous les systèmes
                d'exploitation (Windows, macOS, Linux) et systèmes de fichiers (NTFS, FAT32,
                exFAT, ext4, HFS+, APFS, etc.).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">🛡️ Mes données sont-elles en sécurité ?</h3>
              <p className="text-muted-foreground">
                Sécurité maximale garantie : laboratoires sécurisés avec contrôle d'accès,
                chiffrement des données en transit et au repos, destruction sécurisée des
                originaux après récupération. Conformité RGPD et normes bancaires.
                Accords de confidentialité signés systématiquement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">📱 Puis-je récupérer des photos supprimées de ma carte SD ?</h3>
              <p className="text-muted-foreground">
                Oui, spécialisation en récupération de fichiers multimédias. Photos, vidéos,
                et fichiers supprimés peuvent généralement être récupérés même après formatage
                accidentel. Prévisualisation gratuite offerte pour évaluer les chances de succès.
                Taux de récupération excellent pour les cartes mémoire (jusqu'à 98%).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">💻 Mon disque dur fait du bruit, est-il récupérable ?</h3>
              <p className="text-muted-foreground">
                Les bruits inhabituels (cliquetis, grincements) indiquent souvent des dommages
                mécaniques graves. Ces cas sont complexes mais récupérables dans 70-80% des cas
                grâce à nos chambres propres et techniques spécialisées. Ne tentez pas de démonter
                vous-même le disque, contactez-nous immédiatement.
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
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Urgence Récupération de Données ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Ne risquez pas de perdre vos données définitivement. Notre équipe d'experts
              est disponible 24/7 pour intervenir rapidement et maximiser vos chances de récupération.
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
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl font-semibold"
                >
                  <Clock size={20} className="mr-2" />
                  Diagnostic Gratuit - Urgence 24/7
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
                  className="border-red-300 text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl font-semibold"
                >
                  <Envelope size={20} className="mr-2" />
                  Devis Personnalisé
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}