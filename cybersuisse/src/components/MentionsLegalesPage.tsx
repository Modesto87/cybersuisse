import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Building, User, Shield, Envelope, Phone, Globe } from '@phosphor-icons/react'
import Logo from './Logo'

interface MentionsLegalesPageProps {
  onNavigate: (page: string) => void
}

export default function MentionsLegalesPage({ onNavigate }: MentionsLegalesPageProps) {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0505 50%, #0A0A0A 100%)'}}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A0A0A] to-red-950/30 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-6 text-gray-300 hover:bg-red-950/50 transition-all duration-300"
          >
            <ArrowLeft className="mr-2" />
            Retour à l'accueil
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Logo className="mx-auto mb-6" size="md" />
            <h1 className="text-5xl font-bold mb-4">Mentions Légales</h1>
            <p className="text-xl text-gray-400">
              Informations légales et réglementaires
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          
          {/* Éditeur et propriétaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <User className="mr-3 text-red-500" size={24} />
                  Éditeur et Propriétaire du Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Nom :</strong> Modesto</p>
                    <p><strong>Activité :</strong> Expert en Cybersécurité</p>
                    <p><strong>Statut :</strong> Freelance indépendant</p>
                    <p><strong>Localisation :</strong> Région de Bienne/Biel, Suisse</p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <Envelope className="mr-2 text-red-500" size={16} />
                      <strong>Email :</strong> modesto@cybersuisse.ch
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 text-red-500" size={16} />
                      <strong>Téléphone :</strong> +41 78 208 95 45
                    </p>
                    <p className="flex items-center">
                      <Globe className="mr-2 text-red-500" size={16} />
                      <strong>Site web :</strong> cybersuisse.ch
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hébergement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Building className="mr-3 text-red-500" size={24} />
                  Hébergement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">
                  Ce site web est hébergé par un prestataire respectant les normes de sécurité 
                  et de confidentialité suisses et européennes.
                </p>
                <p>
                  <strong>Localisation des serveurs :</strong> Union Européenne
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Shield className="mr-3 text-blue-400" size={24} />
                  Propriété Intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  L'ensemble de ce site web (contenu, textes, images, logos, design, structure) 
                  est protégé par le droit d'auteur et constitue la propriété exclusive de Modesto - CyberSuisse.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout 
                  ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                  est interdite, sauf autorisation écrite préalable.
                </p>
                <p>
                  <strong className="text-blue-400">Marques et logos :</strong> CyberSuisse et son logo sont des marques 
                  déposées. Toute utilisation non autorisée est strictement interdite.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conditions d'utilisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  Conditions d'Utilisation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  L'utilisation de ce site web implique l'acceptation pleine et entière des 
                  conditions générales d'utilisation décrites ci-après.
                </p>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">Accès au site :</h4>
                  <p>
                    L'accès au site est gratuit. Les frais d'accès et d'utilisation du réseau 
                    de télécommunication sont à la charge de l'utilisateur.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">Utilisation des informations :</h4>
                  <p>
                    Les informations présentes sur ce site sont fournies à titre informatif. 
                    Elles ne constituent pas des conseils juridiques ou techniques personnalisés.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  Limitation de Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  CyberSuisse s'efforce de fournir des informations aussi précises que possible. 
                  Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes 
                  et des carences dans la mise à jour, qu'elles soient de son fait ou du fait 
                  des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                </p>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">Disponibilité du service :</h4>
                  <p>
                    CyberSuisse ne peut garantir la disponibilité continue du site et décline 
                    toute responsabilité en cas d'interruption du service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Droit applicable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  Droit Applicable et Juridiction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-red-400">Droit applicable :</strong> Les présentes mentions légales sont régies 
                  par le droit suisse.
                </p>
                <p>
                  <strong className="text-red-400">Juridiction compétente :</strong> En cas de litige, les tribunaux 
                  suisses seront seuls compétents.
                </p>
                <p>
                  <strong className="text-red-400">Langue :</strong> En cas de traduction des présentes mentions légales, 
                  seule la version française fait foi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact et mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  Contact et Mise à Jour
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                  <p><strong className="text-red-400">Email :</strong> modesto@cybersuisse.ch</p>
                  <p><strong className="text-red-400">Téléphone :</strong> +41 78 208 95 45</p>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Dernière mise à jour :</strong> Janvier 2024
                </p>
                <p className="text-sm text-gray-500">
                  Ces mentions légales peuvent être modifiées à tout moment. 
                  Il est conseillé de les consulter régulièrement.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bouton de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{boxShadow: '0 0 20px rgba(229,57,53,0.4)'}}
            >
              <Envelope className="mr-2" />
              Nous Contacter
            </Button>
          </motion.div>

        </div>
      </div>
    </div>
  )
}