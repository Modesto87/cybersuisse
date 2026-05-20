import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Globe, Clock } from '@phosphor-icons/react'
import Logo from './Logo'

interface PolitiqueConfidentialitePageProps {
  onNavigate: (page: string) => void
}

const PolitiqueConfidentialitePage = ({ onNavigate }: PolitiqueConfidentialitePageProps) => {
  const copy = {
    title: 'Politique de Confidentialité',
    subtitle: 'Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données personnelles.',
    updated: 'Dernière mise à jour : 1er janvier 2024',
    introTitle: 'Introduction',
    introText: 'Chez CyberSuisse, nous nous engageons à protéger votre vie privée et vos données personnelles. Cette politique explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez nos prestations de cybersécurité.',
    collectTitle: 'Collecte des Données',
    collectLead: 'Nous collectons les informations suivantes :',
    collectItems: [
      "Informations d'identification (nom, prénom, entreprise)",
      'Coordonnées (adresse e-mail, numéro de téléphone)',
      'Informations techniques nécessaires aux prestations de cybersécurité',
      'Données de communication lors de nos échanges',
      'Informations de facturation (avec votre consentement explicite)'
    ],
    useTitle: 'Utilisation des Données',
    useLead: 'Vos données personnelles sont utilisées uniquement pour :',
    useItems: [
      'Fournir nos prestations de cybersécurité',
      'Communiquer avec vous concernant nos services',
      'Établir les devis et factures',
      'Respecter nos obligations légales et réglementaires',
      'Améliorer la qualité de nos services'
    ],
    protectTitle: 'Protection des Données',
    protectLead: "En tant qu'expert en cybersécurité, nous appliquons les meilleures pratiques de sécurité :",
    protectItems: [
      'Chiffrement de toutes les données sensibles',
      'Accès limité aux données selon le principe du moindre privilège',
      'Supervision continue des systèmes de sécurité',
      'Sauvegardes sécurisées et régulières',
      'Formations régulières en sécurité informatique'
    ],
    shareTitle: 'Partage des Données',
    shareLead: 'Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :',
    shareItems: [
      'Avec votre consentement explicite',
      'Pour respecter une obligation légale',
      'Avec nos partenaires techniques sous accord de confidentialité',
      "En cas de fusion, acquisition ou vente d'actifs (avec notification préalable)"
    ],
    rightsTitle: 'Vos Droits',
    rightsLead: 'Conformément au RGPD et à la loi suisse sur la protection des données, vous disposez des droits suivants :',
    rightsItems: [
      ["Droit d'accès :", 'Consulter les données que nous détenons sur vous'],
      ['Droit de rectification :', 'Corriger les données inexactes'],
      ["Droit à l'effacement :", 'Demander la suppression de vos données'],
      ['Droit de portabilité :', 'Récupérer vos données dans un format structuré'],
      ["Droit d'opposition :", 'Vous opposer au traitement de vos données'],
      ['Droit de limitation :', 'Demander la limitation du traitement']
    ] as [string, string][],
    retentionTitle: 'Conservation des Données',
    retentionLead: 'Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :',
    retentionItems: [
      'Données clients : 10 ans après la fin de la relation contractuelle',
      'Données de prospects : 3 ans maximum sans interaction',
      "Données techniques d'audit : selon les exigences réglementaires",
      'Données de facturation : 10 ans selon la législation suisse'
    ],
    cookiesTitle: 'Cookies et Technologies Similaires',
    cookiesText: "Notre site web utilise des cookies strictement nécessaires au fonctionnement du site. Nous n'utilisons pas de cookies de suivi ou de publicité sans votre consentement explicite.",
    contactTitle: 'Contact',
    contactText: 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :',
    contactName: 'Luís Modesto — CyberSuisse',
    contactEmail: 'E-mail : modesto@cybersuisse.ch',
    contactPhone: 'Téléphone : 078 208 95 45',
    contactRegion: 'Région : Biel/Bienne, Suisse',
    changesTitle: 'Modifications',
    changesText: 'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.',
    back: "Retour à l'accueil"
  }
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Logo size="lg" showText={false} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">
              {copy.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-fg ">{copy.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{copy.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-2xl border border-[#333] bg-[#1A1A1A]">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Date de mise à jour */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>{copy.updated}</span>
                  </div>

                  {/* Introduction */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield size={24} className="text-brand-amber" />
                      <h2 className="text-2xl font-semibold text-fg">{copy.introTitle}</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{copy.introText}</p>
                  </div>

                  {/* Collecte des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye size={24} className="text-brand-amber" />
                      <h2 className="text-2xl font-semibold text-fg">{copy.collectTitle}</h2>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-brand-amber">{copy.collectLead}</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        {copy.collectItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Utilisation des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck size={24} className="text-brand-amber" />
                      <h2 className="text-2xl font-semibold text-fg">{copy.useTitle}</h2>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-400">{copy.useLead}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        {copy.useItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Protection des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock size={24} className="text-brand-amber" />
                      <h2 className="text-2xl font-semibold text-fg">{copy.protectTitle}</h2>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-400">{copy.protectLead}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        {copy.protectItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Partage des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe size={24} className="text-brand-amber" />
                      <h2 className="text-2xl font-semibold text-fg">{copy.shareTitle}</h2>
                    </div>
                    <p className="text-gray-400">{copy.shareLead}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      {copy.shareItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Droits des utilisateurs */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fg">{copy.rightsTitle}</h2>
                    <p className="text-gray-400">{copy.rightsLead}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      {copy.rightsItems.map(([label, text]) => (
                        <li key={label}>
                          <strong className="text-brand-amber">{label}</strong> {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conservation des données */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fg">{copy.retentionTitle}</h2>
                    <p className="text-gray-400">{copy.retentionLead}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      {copy.retentionItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Cookies */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fg">{copy.cookiesTitle}</h2>
                    <p className="text-gray-400">{copy.cookiesText}</p>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fg">{copy.contactTitle}</h2>
                    <p className="text-gray-400">{copy.contactText}</p>
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <p className="text-fg"><strong className="text-brand-amber">{copy.contactName}</strong></p>
                      <p className="text-gray-400">{copy.contactEmail}</p>
                      <p className="text-gray-400">{copy.contactPhone}</p>
                      <p className="text-gray-400">{copy.contactRegion}</p>
                    </div>
                  </div>

                  {/* Modifications */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fg">{copy.changesTitle}</h2>
                    <p className="text-gray-400">{copy.changesText}</p>
                  </div>

                  {/* Bouton retour */}
                  <div className="pt-8 border-t border-[#333]">
                    <Button
                      onClick={() => onNavigate('home')}
                      variant="outline"
                      className="group border-brand-amber/40 text-brand-amber hover:bg-brand-amber/20 hover:text-fg transition-all duration-300"
                    >
                      <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                      {copy.back}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PolitiqueConfidentialitePage