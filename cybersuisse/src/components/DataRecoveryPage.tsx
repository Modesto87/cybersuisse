import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SEOContent from '@/components/SEOContent'
import { HardDrive, Usb, Memory, MagnifyingGlass, Shield, Clock, CheckCircle, Database, Cpu, Eye, Envelope, Lock } from '@phosphor-icons/react'
import dataRecoveryImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'
import { useTranslation } from 'react-i18next'

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
    features: ['Analyse gratuite', 'Devis détaillé', 'Confidentialité stricte', 'Chances optimisées (selon cas)']
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
    features: ['Diagnostic rapide', 'Récupération prioritaire', 'Support multi-formats', 'Restitution sur support sain']
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
    features: ['Spécialisation multimédia', 'Prévisualisation (si possible)', 'Récupération sélective', 'Traitement urgent possible']
  },
  {
    title: 'Accès & Mot de passe oublié',
    subtitle: 'Windows / PC / Compte local',
    icon: Lock,
    description: "Quand l'accès au PC est bloqué (mot de passe oublié), l'objectif est de récupérer vos fichiers ou de rétablir un accès — uniquement sur un appareil qui vous appartient ou avec autorisation.",
    services: [
      'Mot de passe Windows oublié (cas légitimes / propriété)',
      'Récupération de fichiers sans connexion (selon chiffrement)',
      'Compte verrouillé / profil corrompu',
      'Ordinateur qui ne démarre plus',
      'Conseils pour éviter la perte définitive (BitLocker, clés, sauvegardes)'
    ],
    features: ['Cadre légal & autorisation', 'Respect de la vie privée', 'Diagnostic rapide', 'Pas de fausses promesses']
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
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        seoTitle: 'Data Recovery in Biel/Bienne (Switzerland) | HDD, SSD, USB, SD | CyberSuisse',
        seoDescription: 'Professional data recovery in Biel/Bienne and Switzerland: deleted files, failed HDD/SSD, USB drives, SD cards, PC not booting, or forgotten Windows password. Privacy-respecting service and professional tooling.',
        heroBadge: 'Data Recovery • Biel/Bienne & Switzerland',
        heroTitle: 'Professional & Secure Data Recovery',
        heroText: 'Professional data recovery service in Biel/Bienne and across Switzerland: deleted files, failed HDD/SSD, unreadable USB, SD cards with lost photos, a PC that won’t boot, or a forgotten Windows password. Privacy-respecting work with professional tooling. If recovery is impossible, you do not pay.',
        cta: 'Free diagnosis - Request an analysis',
        servicesTitle: 'Specialized Recovery Services',
        servicesSubtitle: 'Media and scenarios covered with a careful, honest diagnosis.',
        services: [
          { title: 'HDD/SSD Recovery', description: 'Recovery from logical failures, deleted files, partitions, or bad sectors.' },
          { title: 'USB Recovery', description: 'Unreadable USB drives, corruption, accidental deletion or formatting.' },
          { title: 'SD/microSD Recovery', description: 'Photo/video recovery and corrupted memory cards.' },
          { title: 'Access & Forgotten Passwords', description: 'File recovery or access restoration on your own authorized device.' }
        ]
      }
    : language === 'pt'
      ? {
          seoTitle: 'Recuperação de dados em Biel/Bienne (Suíça) | HDD, SSD, USB, SD | CyberSuisse',
          seoDescription: 'Recuperação profissional de dados em Biel/Bienne e Suíça: ficheiros apagados, HDD/SSD avariado, USB, cartões SD, PC que não arranca ou palavra‑passe Windows esquecida. Serviço profissional e confidencial.',
          heroBadge: 'Recuperação de Dados • Biel/Bienne & Suíça',
          heroTitle: 'Recuperação de dados profissional e segura',
          heroText: 'Serviço profissional em Biel/Bienne e em toda a Suíça: ficheiros apagados, HDD/SSD avariado, USB ilegível, cartão SD com fotos perdidas, PC que não arranca ou palavra‑passe Windows esquecida. Privacidade respeitada e ferramentas profissionais. Se não for possível recuperar, não paga.',
          cta: 'Diagnóstico gratuito - Pedir análise',
          servicesTitle: 'Serviços de recuperação especializados',
          servicesSubtitle: 'Suportes e cenários cobertos com diagnóstico prudente e honesto.',
          services: [
            { title: 'Recuperação HDD/SSD', description: 'Falhas lógicas, ficheiros apagados, partições ou bad sectors.' },
            { title: 'Recuperação USB', description: 'USB não reconhecido, corrupção, apagamento ou formatação.' },
            { title: 'Recuperação SD/microSD', description: 'Recuperação de fotos/vídeos e cartões corrompidos.' },
            { title: 'Acesso e palavra‑passe esquecida', description: 'Recuperar ficheiros ou acesso no seu dispositivo autorizado.' }
          ]
        }
      : {
          seoTitle: 'Récupération de données à Bienne/Biel (Suisse) | Disque, SSD, USB, carte SD | CyberSuisse',
          seoDescription: 'Récupération de données à Bienne/Biel et en Suisse : fichiers supprimés, disque/SSD en panne, clé USB, carte SD (photos), PC qui ne démarre plus ou mot de passe Windows oublié. Service professionnel, respect de la vie privée, outils du marché.',
          heroBadge: 'Récupération de Données • Bienne/Biel & Suisse',
          heroTitle: 'Récupération de Données Professionnelle & Sécurisée',
          heroText: "Service professionnel de récupération de données à Bienne/Biel et dans toute la Suisse : fichiers supprimés, disque dur/SSD en panne, clé USB illisible, carte SD avec photos perdues, ordinateur qui ne démarre plus, ou même mot de passe Windows oublié. Travail sérieux, respect de la vie privée et outils professionnels du marché. Important : ce n'est pas toujours possible — mais si aucune donnée n'est récupérable (échec total), vous ne payez rien.",
          cta: 'Diagnostic gratuit - Demander une analyse',
          servicesTitle: 'Services de Récupération Spécialisés',
          servicesSubtitle: 'Supports et scénarios couverts (avec un diagnostic honnête et une approche prudente)',
          services: []
        })

  if (language !== 'fr') {
    return (
      <div className="min-h-screen cs-bg-redteam-diagonal">
        <SEOContent page="data-recovery" title={copy.seoTitle} description={copy.seoDescription} />
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-red-950/60 text-red-400 border border-red-600/40">
              {copy.heroBadge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{copy.heroTitle}</h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">{copy.heroText}</p>
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-xl border border-red-500/50 cs-shadow-glow-red-30"
            >
              <Clock size={20} className="mr-2" />
              {copy.cta}
            </Button>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{copy.servicesTitle}</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{copy.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.services.map((service) => (
              <Card key={service.title} className="h-full bg-[#1A1A1A] border-[#333]">
                <CardHeader>
                  <CardTitle className="text-xl text-red-500">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    )
  }
  return (
    <div className="min-h-screen cs-bg-redteam-diagonal">
      <SEOContent
        page="data-recovery"
        title="Récupération de données à Bienne/Biel (Suisse) | Disque, SSD, USB, carte SD | CyberSuisse"
        description="Récupération de données à Bienne/Biel et en Suisse : fichiers supprimés, disque/SSD en panne, clé USB, carte SD (photos), PC qui ne démarre plus ou mot de passe Windows oublié. Service professionnel, respect de la vie privée, outils du marché."
      />

      {/* SEO H1 invisible */}
      <h1 className="sr-only">Récupération de données à Bienne/Biel (Suisse) | HDD, SSD, USB, carte SD | CyberSuisse</h1>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-red-950/60 text-red-400 border border-red-600/40">
            Récupération de Données • Bienne/Biel & Suisse
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Récupération de <span className="text-white cs-text-glow-red-30">Données</span>
            <br />
            Professionnelle & Sécurisée
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Service professionnel de récupération de données à Bienne/Biel et dans toute la Suisse :
            fichiers supprimés, disque dur/SSD en panne, clé USB illisible, carte SD avec photos perdues,
            ordinateur qui ne démarre plus, ou même mot de passe Windows oublié.
            Travail sérieux, respect de la vie privée et outils professionnels du marché.
            Important : ce n'est pas toujours possible — mais si aucune donnée n'est récupérable (échec total), vous ne payez rien.
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
              <Clock size={20} className="mr-2" />
              Diagnostic gratuit - Demander une analyse
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
                Récupération technique & confidentialité
              </h3>
              <p className="text-white/90 text-lg drop-shadow-lg">
                Pour particuliers, entreprises et besoins d'investigation
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services de Récupération Spécialisés
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Supports et scénarios couverts (avec un diagnostic honnête et une approche prudente)
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
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
                  <CardHeader className="bg-gradient-to-r from-red-950/30 to-[#1A1A1A]">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div
                        className="p-4 bg-red-950/50 rounded-xl cs-preserve-3d"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                      >
                        <IconComponent size={32} className="text-red-500" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl text-red-500">{service.title}</CardTitle>
                        <div className="text-sm font-medium text-orange-400 mt-1">{service.subtitle}</div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Problèmes Couvert :</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle size={16} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Avantages :</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-red-950/50 text-red-400 border border-red-600/40">
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

      {/* Common Examples */}
      <section className="py-20 cs-bg-redteam-vertical-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exemples fréquents (cas réels)</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Quelques situations typiques que je traite à Bienne/Biel et en Suisse. Le bon réflexe : arrêter d'utiliser le support et demander un diagnostic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Card className="h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-white">📸 Carte SD : photos supprimées</CardTitle>
                  <CardDescription className="text-gray-400">
                    Carte SD/microSD formatée ou photos effacées par erreur (appareil photo, drone, téléphone).
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Préservation + récupération sélective si possible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Restitution sur un support sain</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <Card className="h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-white">🗑️ Dossier supprimé / corbeille vidée</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fichiers effacés sur PC, disque externe ou NAS : l'action rapide augmente les chances.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Analyse des traces restantes (selon usage du support)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Conseils immédiats pour éviter d'écraser les données</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <Card className="h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-white">🔑 Mot de passe Windows oublié</CardTitle>
                  <CardDescription className="text-gray-400">
                    Accès bloqué : objectif = récupérer vos fichiers ou restaurer l'accès (uniquement si vous êtes propriétaire / autorisé).
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Évaluation du chiffrement (ex: BitLocker) et faisabilité</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Solutions propres, sans promesses irréalistes</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              <Card className="h-full bg-[#1A1A1A] border-[#333] hover:border-red-600/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-white">💥 Disque qui ne démarre plus</CardTitle>
                  <CardDescription className="text-gray-400">
                    PC qui ne démarre plus, disque non reconnu, erreurs de lecture : priorité à la préservation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Imagerie et travail sur copie quand c'est possible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red-500 mt-0.5" />
                    <span>Rapport clair : ce qui est récupérable / ce qui ne l'est pas</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 cs-bg-redteam-diagonal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Processus de Récupération Professionnel
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
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
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg cs-shadow-glow-red-30">
                      {step.step}
                    </div>
                    {index < recoveryProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-red-600 to-orange-600"></div>
                    )}
                  </div>

                  <div className="mb-4">
                    <IconComponent size={32} className="text-red-500 mx-auto mb-2" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{step.description}</p>

                  <ul className="space-y-1 text-xs text-gray-500">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle size={12} className="text-red-500 mr-2" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi passer par un professionnel ?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Parce qu'une mauvaise manipulation peut dégrader un support et réduire les chances de récupération.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg border border-[#333] hover:border-red-600/40 transition-all"
          >
            <div className="w-12 h-12 bg-red-950/50 rounded-lg flex items-center justify-center mb-4">
              <Shield size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expertise Certifiée</h3>
            <p className="text-gray-400 mb-4">
              Approche structurée inspirée des méthodes forensiques : diagnostic, préservation, extraction,
              vérification et restitution. Chaque cas est traité avec prudence et transparence.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-300">
                <CheckCircle size={14} className="text-red-500 mr-2" />
                Méthodologie rigoureuse
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle size={14} className="text-red-500 mr-2" />
                Outils professionnels du marché
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle size={14} className="text-red-500 mr-2" />
                Diagnostic honnête
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
            <h3 className="text-xl font-bold mb-3 text-black">Taux de Succès Exceptionnel</h3>
            <p className="text-slate-600 mb-4">
              La récupération dépend du support, de l'usage après la perte, et du niveau de dommages.
              L'objectif est simple : maximiser vos chances, sans vendre du rêve.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Évaluation claire de la faisabilité
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Priorisation possible (urgence)
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-accent mr-2" />
                Échec total = aucun frais de récupération
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
            <h3 className="text-xl font-bold mb-3 text-black">Confidentialité & Sécurité</h3>
            <p className="text-slate-600 mb-4">
              Respect strict de la vie privée : vos données restent vos données. Manipulation prudente,
              accès limité, et restitution sur support sain. Pour les demandes d'investigation, une traçabilité
              peut être mise en place selon le contexte.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Confidentialité stricte
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Approche conforme (RGPD / droit suisse)
              </li>
              <li className="flex items-center">
                <CheckCircle size={14} className="text-secondary mr-2" />
                Restitution contrôlée
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
          <h3 className="text-2xl font-bold text-center mb-8 text-black">
            Avantages Détaillés du Service
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-slate-900 mb-2">🔧 Équipement Professionnel</h4>
                <p className="text-slate-600 text-sm">
                  Laboratoires spécialisés avec salles blanches classe 100, outils de récupération
                  professionnels (PC-3000, DeepSpar, R-Studio), et chambres propres pour manipulation
                  de supports délicats. Investissement continu dans les dernières technologies.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-slate-900 mb-2">⚡ Traitement prioritaire (si urgence)</h4>
                <p className="text-slate-600 text-sm">
                  Possibilité de prioriser un dossier selon votre urgence (professionnelle ou personnelle).
                  Objectif : éviter l'aggravation et démarrer rapidement les étapes de préservation/diagnostic.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-slate-900 mb-2">💰 Tarification Transparente</h4>
                <p className="text-slate-600 text-sm">
                  Diagnostic gratuit et devis détaillé sans engagement. Tarification basée
                  sur la complexité technique, pas sur la valeur des données. Pas de frais
                  supplémentaires cachés. En cas d'échec total (aucune donnée récupérable), aucun frais de récupération.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">🎯 Récupération Spécialisée</h4>
                <p className="text-slate-600 text-sm">
                  Spécialisation par type de support : HDD mécanique, SSD flash, cartes mémoire,
                  RAID, NAS, et supports exotiques. Expertise dans tous les systèmes de fichiers
                  (NTFS, FAT32, exFAT, ext4, HFS+, APFS, etc.).
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">📊 Reporting Complet</h4>
                <p className="text-slate-600 text-sm">
                  Rapport clair : ce qui a été récupéré, ce qui est manquant, et les limites techniques observées.
                  Recommandations de prévention (sauvegardes, chiffrement, bonnes pratiques) selon votre contexte.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-slate-900 mb-2">🔄 Support Post-Récupération</h4>
                <p className="text-slate-600 text-sm">
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
            <div className="text-3xl font-bold text-primary mb-2">Diagnostic</div>
            <p className="text-sm text-slate-600">Analyse + faisabilité transparente</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-accent mb-2">Urgence</div>
            <p className="text-sm text-slate-600">Traitement prioritaire possible</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-secondary mb-2">Outils pro</div>
            <p className="text-sm text-slate-600">Imagerie, analyse, extraction</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-red-500 mb-2">0 CHF</div>
            <p className="text-sm text-slate-600">Si échec total (0 donnée récupérable)</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20 faq-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Questions Fréquentes - Récupération de Données
            </h2>
            <p className="text-lg text-black text-slate-600 max-w-3xl mx-auto">
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
              <h3 className="text-lg font-bold mb-3 text-black">💰 Combien coûte la récupération de données ?</h3>
              <p className="text-slate-600">
                Le coût de récupération dépend de plusieurs facteurs : type de support, complexité du dommage,
                volume de données, et urgence de l'intervention. Chaque cas est analysé individuellement
                pour établir un devis précis et adapté. Diagnostic gratuit offert, paiement uniquement
                en cas de données récupérables. En cas d'échec total (aucune donnée récupérable), aucun frais de récupération.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold mb-3 text-black">⏱️ Combien de temps prend la récupération ?</h3>
              <p className="text-slate-600">
                Pour les cas simples (suppression accidentelle), une récupération peut parfois être rapide.
                Les cas complexes (panne matérielle, mémoire dégradée, chiffrement) peuvent nécessiter plusieurs jours.
                Les urgences peuvent être priorisées selon la charge et la faisabilité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold mb-3 text-black">🔍 Quels types de supports traitez-vous ?</h3>
              <p className="text-slate-600">
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
              <h3 className="text-lg font-bold mb-3 text-black">🛡️ Mes données sont-elles en sécurité ?</h3>
              <p className="text-slate-600">
                Vos données sont traitées avec confidentialité stricte : accès limité au strict nécessaire,
                conservation minimale et restitution sur support sain. Un accord de confidentialité (NDA)
                peut être fourni sur demande selon le contexte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold mb-3 text-black">📱 Puis-je récupérer des photos supprimées de ma carte SD ?</h3>
              <p className="text-slate-600">
                Souvent oui, selon l'usage du support après la suppression/formatage. Plus vous arrêtez
                d'utiliser la carte rapidement, plus les chances augmentent. Une prévisualisation peut être
                possible pour évaluer la faisabilité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-border/50"
            >
              <h3 className="text-lg font-bold mb-3 text-black">💻 Mon disque dur fait du bruit, est-il récupérable ?</h3>
              <p className="text-slate-600">
                Les bruits inhabituels (cliquetis, grincements) indiquent souvent des dommages
                mécaniques graves. Ces cas peuvent parfois être récupérables, mais chaque minute d'utilisation
                peut aggraver la situation. Ne tentez pas de démonter vous-même le disque : arrêtez l'appareil
                et demandez un diagnostic.
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
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Besoin de récupérer des données ?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Le bon réflexe : arrêter d'utiliser le support et demander une analyse.
              Je vous donne un avis clair sur la faisabilité et les options.
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
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl font-semibold"
                >
                  <Clock size={20} className="mr-2" />
                  Diagnostic gratuit - Demander une analyse
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cs-preserve-3d"
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