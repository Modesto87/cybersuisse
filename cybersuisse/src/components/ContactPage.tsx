import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Envelope, Phone, MapPin, Shield, Clock, Warning, LinkedinLogo } from '@phosphor-icons/react'
import SEOContent from './SEOContent'

export default function ContactPage() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false)

  const email = useMemo(() => {
    const user = 'modesto'
    const domain = 'cybersuisse.ch'
    return `${user}@${domain}`
  }, [])

  const phoneE164 = '+41782089545'
  const phoneDisplay = '+41 78 208 95 45'
  const linkedinUrl = 'https://linkedin.com/in/luismodesto'

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneE164}`
  }

  return (
    <div className="min-h-screen cs-bg-redteam-diagonal">
      <SEOContent page="contact" />

      {/* H1 pour SEO - invisible mais présent */}
      <h1 className="sr-only">Contact - Expert Cybersécurité CyberSuisse</h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-fit bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <Envelope className="w-8 h-8 text-red-500" />
                  Contactez-moi
                </CardTitle>
                <p className="text-gray-400">
                  Expert en cybersécurité, je suis à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-red-950/40 rounded-lg border border-red-800/40">
                    <Envelope className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      {isEmailRevealed ? (
                        <button
                          type="button"
                          onClick={handleEmailClick}
                          className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                          {email}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsEmailRevealed(true)}
                          className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                          Afficher l’email
                        </button>
                      )}
                      <p className="text-sm text-gray-500">Réponse sous 24–48h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-950/40 rounded-lg border border-green-800/40">
                    <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Téléphone</p>
                      <p className="text-gray-300 font-medium">{phoneDisplay}</p>
                      <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-orange-950/40 rounded-lg border border-orange-800/40">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Localisation</p>
                      <p className="text-gray-300">Suisse</p>
                      <p className="text-sm text-gray-500">Interventions dans toute la Suisse</p>
                    </div>
                  </div>
                </div>

                {/* Temps de réponse */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-lg text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-bold text-lg">Temps de réponse</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>🟢 Normale</span>
                      <span className="font-semibold">24-48h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🟡 Élevée</span>
                      <span className="font-semibold">4-24h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🔴 Critique</span>
                      <span className="font-semibold">1-4h</span>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border border-red-500/50 cs-shadow-glow-red-20-soft"
                    size="lg"
                  >
                    <Envelope className="w-4 h-4 mr-2" />
                    Envoyer un Email
                  </Button>
                  
                  <Button 
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border border-red-500/50 cs-shadow-glow-red-20-soft"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">
                    Conseil sécurité : n’envoyez pas de mots de passe, clés API ou données sensibles par email.
                  </p>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <Button variant="outline" size="sm" className="border-red-600/40 text-red-400 hover:bg-red-950/30 hover:text-white">
                      <LinkedinLogo className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Section sécurité et explication */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <Shield className="w-8 h-8 text-red-500" />
                  Sécurité maximale
                </CardTitle>
                <p className="text-gray-400">
                  Pourquoi je privilégie le contact direct plutôt que les formulaires web.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Alerte sécurité */}
                <div className="bg-red-950/40 border border-red-800/40 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Warning className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-400 mb-2">Choix sécuritaire</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Les formulaires web constituent une zone d'attaque privilégiée par les cybercriminels. 
                        En tant qu'expert en cybersécurité, j'ai délibérément choisi de ne pas inclure 
                        de formulaire sur mon site pour éliminer cette surface d'attaque.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Avantages du contact direct */}
                <div className="space-y-4">
                  <h3 className="font-bold text-white text-lg">Avantages du contact direct :</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-950/40 rounded-lg border border-green-800/30">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-400">Sécurité renforcée</p>
                        <p className="text-gray-400 text-sm">Aucun risque d'injection SQL, XSS ou autres attaques via formulaire</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-blue-950/40 rounded-lg border border-blue-800/30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-blue-400">Communication directe</p>
                        <p className="text-gray-400 text-sm">Échange immédiat depuis votre client email sécurisé</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-purple-950/40 rounded-lg border border-purple-800/30">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-purple-400">Confidentialité</p>
                        <p className="text-gray-400 text-sm">Vos données transitent par vos propres canaux sécurisés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-orange-950/40 rounded-lg border border-orange-800/30">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-orange-400">Traçabilité</p>
                        <p className="text-gray-400 text-sm">Historique complet dans votre messagerie</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services disponibles */}
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]">
                  <h3 className="font-bold text-white mb-3">Services disponibles :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Pentest / Test d'intrusion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Audit CRA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Développement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>Formation & Conseil</span>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>

        </div>

        {/* Section sécurité globale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="border-red-800/40 bg-red-950/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Sécurité et Confidentialité</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <p className="font-medium text-red-400 mb-1">🔒 Chiffrement</p>
                  <p>Toutes les communications sont chiffrées via HTTPS/TLS</p>
                </div>
                <div>
                  <p className="font-medium text-red-400 mb-1">🛡️ Confidentialité</p>
                  <p>Vos données restent strictement confidentielles</p>
                </div>
                <div>
                  <p className="font-medium text-red-400 mb-1">✅ RGPD</p>
                  <p>Conformité totale avec le règlement européen</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
