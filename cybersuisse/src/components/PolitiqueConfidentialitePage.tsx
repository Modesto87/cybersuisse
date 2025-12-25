import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Globe, Clock } from '@phosphor-icons/react'
import Logo from './Logo'

interface PolitiqueConfidentialitePageProps {
  onNavigate: (page: string) => void
}

const PolitiqueConfidentialitePage = ({ onNavigate }: PolitiqueConfidentialitePageProps) => {
  return (
    <div className="min-h-screen cs-bg-redteam-diagonal">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de <span className="text-white cs-text-glow-red-30">Confidentialité</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données personnelles.
            </p>
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
            <Card className="shadow-2xl border border-[#333] bg-[#1A1A1A]/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Date de mise à jour */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Dernière mise à jour : 1er janvier 2024</span>
                  </div>

                  {/* Introduction */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Chez CyberSuisse, nous nous engageons à protéger votre vie privée et vos données personnelles. 
                      Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et 
                      protégeons vos informations personnelles lorsque vous utilisez nos services de cybersécurité.
                    </p>
                  </div>

                  {/* Collecte des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">Collecte des Données</h2>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-red-400">Nous collectons les informations suivantes :</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Informations d'identification (nom, prénom, entreprise)</li>
                        <li>Coordonnées (adresse e-mail, numéro de téléphone)</li>
                        <li>Informations techniques nécessaires aux audits de sécurité</li>
                        <li>Données de communication lors de nos échanges</li>
                        <li>Informations de facturation (avec votre consentement explicite)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Utilisation des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">Utilisation des Données</h2>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-400">Vos données personnelles sont utilisées uniquement pour :</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Fournir nos services de cybersécurité (pentest, audit)</li>
                        <li>Communiquer avec vous concernant nos services</li>
                        <li>Établir les devis et factures</li>
                        <li>Respecter nos obligations légales et réglementaires</li>
                        <li>Améliorer la qualité de nos services</li>
                      </ul>
                    </div>
                  </div>

                  {/* Protection des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">Protection des Données</h2>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-400">
                        En tant qu'expert en cybersécurité, nous appliquons les meilleures pratiques de sécurité :
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Chiffrement de toutes les données sensibles</li>
                        <li>Accès limité aux données selon le principe du moindre privilège</li>
                        <li>Supervision continue des systèmes de sécurité</li>
                        <li>Sauvegardes sécurisées et régulières</li>
                        <li>Formations régulières en sécurité informatique</li>
                      </ul>
                    </div>
                  </div>

                  {/* Partage des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">Partage des Données</h2>
                    </div>
                    <p className="text-gray-400">
                      Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
                      sauf dans les cas suivants :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      <li>Avec votre consentement explicite</li>
                      <li>Pour respecter une obligation légale</li>
                      <li>Avec nos partenaires techniques sous accord de confidentialité</li>
                      <li>En cas de fusion, acquisition ou vente d'actifs (avec notification préalable)</li>
                    </ul>
                  </div>

                  {/* Droits des utilisateurs */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Vos Droits</h2>
                    <p className="text-gray-400">
                      Conformément au RGPD et à la loi suisse sur la protection des données, vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      <li><strong className="text-red-400">Droit d'accès :</strong> Consulter les données que nous détenons sur vous</li>
                      <li><strong className="text-red-400">Droit de rectification :</strong> Corriger les données inexactes</li>
                      <li><strong className="text-red-400">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                      <li><strong className="text-red-400">Droit de portabilité :</strong> Récupérer vos données dans un format structuré</li>
                      <li><strong className="text-red-400">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                      <li><strong className="text-red-400">Droit de limitation :</strong> Demander la limitation du traitement</li>
                    </ul>
                  </div>

                  {/* Conservation des données */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Conservation des Données</h2>
                    <p className="text-gray-400">
                      Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                      pour lesquelles elles ont été collectées :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      <li>Données clients : 10 ans après la fin de la relation contractuelle</li>
                      <li>Données de prospects : 3 ans maximum sans interaction</li>
                      <li>Données techniques d'audit : Selon les exigences réglementaires</li>
                      <li>Données de facturation : 10 ans selon la législation suisse</li>
                    </ul>
                  </div>

                  {/* Cookies */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Cookies et Technologies Similaires</h2>
                    <p className="text-gray-400">
                      Notre site web utilise des cookies strictement nécessaires au fonctionnement du site. 
                      Nous n'utilisons pas de cookies de suivi ou de publicité sans votre consentement explicite.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Contact</h2>
                    <p className="text-gray-400">
                      Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                      contactez-nous :
                    </p>
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <p className="text-white"><strong className="text-red-400">Modesto - CyberSuisse</strong></p>
                      <p className="text-gray-400">E-mail : modesto@cybersuisse.ch</p>
                      <p className="text-gray-400">Téléphone : 078 208 95 45</p>
                      <p className="text-gray-400">Région : Bienne, Suisse</p>
                    </div>
                  </div>

                  {/* Modifications */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Modifications</h2>
                    <p className="text-gray-400">
                      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                      Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. 
                      Nous vous encourageons à consulter régulièrement cette page.
                    </p>
                  </div>

                  {/* Bouton retour */}
                  <div className="pt-8 border-t border-[#333]">
                    <Button
                      onClick={() => onNavigate('home')}
                      variant="outline"
                      className="group border-red-600/40 text-red-400 hover:bg-red-950/30 hover:text-white transition-all duration-300"
                    >
                      <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                      Retour à l'accueil
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