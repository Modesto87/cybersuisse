import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Envelope, Phone, MapPin, Shield, Clock, Warning } from '@phosphor-icons/react'
import SEOContent from './SEOContent'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
            <Card className="h-fit card-enhanced">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Envelope className="w-8 h-8 text-orange-600" />
                  Contactez-moi
                </CardTitle>
                <p className="text-gray-600">
                  Expert en cybersécurité, je suis à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Envelope className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:modesto@cybersuisse.ch" className="text-orange-600 hover:text-orange-800 transition-colors font-medium">
                        modesto@cybersuisse.ch
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Téléphone</p>
                      <p className="text-gray-700 font-medium">+41 78 208 95 45</p>
                      <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Localisation</p>
                      <p className="text-gray-700">Suisse</p>
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
                    onClick={() => window.location.href = 'mailto:modesto@cybersuisse.ch'}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    size="lg"
                  >
                    <Envelope className="w-4 h-4 mr-2" />
                    Envoyer un Email
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = 'tel:+41782089545'}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
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
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="w-8 h-8 text-orange-600" />
                  Sécurité maximale
                </CardTitle>
                <p className="text-gray-600">
                  Pourquoi je privilégie le contact direct plutôt que les formulaires web.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Alerte sécurité */}
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Warning className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-orange-900 mb-2">Choix sécuritaire</h3>
                      <p className="text-orange-800 text-sm leading-relaxed">
                        Les formulaires web constituent une zone d'attaque privilégiée par les cybercriminels. 
                        En tant qu'expert en cybersécurité, j'ai délibérément choisi de ne pas inclure 
                        de formulaire sur mon site pour éliminer cette surface d'attaque.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Avantages du contact direct */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Avantages du contact direct :</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-900">Sécurité renforcée</p>
                        <p className="text-green-800 text-sm">Aucun risque d'injection SQL, XSS ou autres attaques via formulaire</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-blue-900">Communication directe</p>
                        <p className="text-blue-800 text-sm">Échange immédiat depuis votre client email sécurisé</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-purple-900">Confidentialité</p>
                        <p className="text-purple-800 text-sm">Vos données transitent par vos propres canaux sécurisés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-orange-900">Traçabilité</p>
                        <p className="text-orange-800 text-sm">Historique complet dans votre messagerie</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services disponibles */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Services disponibles :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Pentest / Test d'intrusion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Audit CRA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Surveillance & Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>Développement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>DFIR (Digital Forensics)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
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
          <Card className="border-orange-200 bg-orange-50 card-enhanced">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Sécurité et Confidentialité</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-orange-900 mb-1">🔒 Chiffrement</p>
                  <p>Toutes les communications sont chiffrées via HTTPS/TLS</p>
                </div>
                <div>
                  <p className="font-medium text-orange-900 mb-1">🛡️ Confidentialité</p>
                  <p>Vos données restent strictement confidentielles</p>
                </div>
                <div>
                  <p className="font-medium text-orange-900 mb-1">✅ RGPD</p>
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
