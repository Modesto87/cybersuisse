import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, FileText, Clock, CreditCard } from '@phosphor-icons/react'

interface CGVPageProps {
  onNavigate: (page: string) => void
}

export default function CGVPage({ onNavigate }: CGVPageProps) {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0505 50%, #0A0A0A 100%)'}}>
      <div className="container mx-auto px-4 py-12">
        {/* Bouton retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="hover:bg-red-950/50 text-gray-300 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </Button>
        </motion.div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-950/50 rounded-full border border-red-800/40">
              <FileText size={48} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conditions applicables aux prestations de cybersécurité de CyberSuisse
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Dernière mise à jour : Janvier 2024
          </div>
        </motion.div>

        {/* Contenu des CGV */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section 1 - Objet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield size={24} className="text-red-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">1. Objet et champ d'application</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations 
                    de cybersécurité proposées par Modesto, expert freelance en cybersécurité opérant sous 
                    la dénomination CyberSuisse, établi en Suisse.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Ces conditions s'appliquent à tous les services proposés : tests d'intrusion (pentest), 
                    audit CRA, développement sécurisé et 
                    toute prestation de conseil en cybersécurité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2 - Prestations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Description des prestations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-400">Tests d'intrusion (Pentest)</h3>
                    <p className="text-gray-400">
                      Évaluation de la sécurité des systèmes informatiques par simulation d'attaques contrôlées, 
                      incluant rapport détaillé et recommandations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-400">Audit CRA (Cyber Resilience Act)</h3>
                    <p className="text-gray-400">
                      Service en cours de développement - Audit de conformité avec le futur règlement européen 
                      sur la cyberrésilience. Disponibilité prochaine.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-400">Développement sécurisé</h3>
                    <p className="text-gray-400">
                      Création d'applications et sites web sécurisés, audit de code, intégration de bonnes 
                      pratiques de sécurité dès la conception.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3 - Tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CreditCard size={24} className="text-red-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">3. Tarifs et modalités de paiement</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Les tarifs sont établis sur devis personnalisé en fonction de la complexité et de la durée 
                    de la mission. Chaque projet est évalué individuellement selon ses spécificités.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2 text-red-400">Modalités de paiement :</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                      <li>Acompte de 30% à la commande selon l'importance de la mission</li>
                      <li>Solde à 30 jours nets après remise du livrable final</li>
                      <li>Paiement par virement bancaire ou selon accord préalable</li>
                      <li>Pénalités de retard : 5% par mois de retard</li>
                    </ul>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Tous les prix sont exprimés en francs suisses (CHF) et s'entendent hors TVA si applicable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 4 - Délais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-red-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">4. Délais d'exécution</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Les délais d'exécution sont fixés dans chaque devis et commencent à courir après :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    <li>Signature du bon de commande ou acceptation écrite du devis</li>
                    <li>Réception de l'acompte si requis</li>
                    <li>Fourniture de tous les éléments nécessaires par le client</li>
                  </ul>
                  <p className="text-gray-400">
                    En cas de retard imputable au client, les délais sont prolongés d'autant. 
                    Les délais indicatifs typiques :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    <li>Pentest simple : 5-10 jours ouvrés</li>
                    <li>Audit de sécurité : 10-15 jours ouvrés</li>
                    <li>Développement : selon cahier des charges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 5 - Confidentialité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Confidentialité et sécurité</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    CyberSuisse s'engage à respecter la plus stricte confidentialité concernant 
                    toutes les informations communiquées par le client.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    <li>Signature d'un accord de confidentialité (NDA) si requis</li>
                    <li>Stockage sécurisé de toutes les données client</li>
                    <li>Destruction des données sensibles après mission selon accord</li>
                    <li>Respect des réglementations suisses et européennes (RGPD/LPD)</li>
                  </ul>
                  <p className="text-gray-400">
                    Les tests d'intrusion sont réalisés dans un cadre strictement défini et autorisé, 
                    sans risque pour les systèmes du client.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 6 - Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation de responsabilité</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    La responsabilité de CyberSuisse est limitée aux dommages directs et prévisibles. 
                    Elle ne saurait excéder le montant de la prestation concernée.
                  </p>
                  <p className="text-gray-400">
                    CyberSuisse ne peut être tenu responsable :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    <li>Des dommages indirects, pertes d'exploitation ou de données</li>
                    <li>De l'utilisation incorrecte des recommandations fournies</li>
                    <li>Des incidents liés à l'infrastructure du client</li>
                    <li>De l'évolution des menaces après la mission</li>
                  </ul>
                  <div className="mt-4 p-4 bg-orange-950/30 border border-orange-800/40 rounded-lg">
                    <p className="text-orange-400 font-medium">
                      <strong>Concernant les tests d'intrusion (pentest) :</strong>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Un test d'intrusion certifie la présence ou l'absence de vulnérabilités à une date spécifique. 
                      En raison de la nature évolutive des menaces cybersécuritaires et des systèmes informatiques, 
                      CyberSuisse ne peut garantir qu'aucune nouvelle vulnérabilité n'apparaîtra après la date 
                      du test. Il est recommandé d'effectuer des tests réguliers pour maintenir un niveau de 
                      sécurité optimal.
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Une assurance responsabilité civile professionnelle couvre l'activité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 7 - Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Propriété intellectuelle</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Les rapports, outils développés et méthodologies restent la propriété de CyberSuisse, 
                    sauf accord contraire écrit.
                  </p>
                  <p className="text-gray-400">
                    Le client dispose d'un droit d'usage des livrables pour ses besoins propres. 
                    Toute reproduction ou diffusion à des tiers nécessite l'accord préalable de CyberSuisse.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 8 - Droit applicable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-red-600/40">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Droit applicable et juridiction</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Les présentes conditions sont régies par le droit suisse. 
                    Tout litige sera soumis à la juridiction des tribunaux du canton de Berne.
                  </p>
                  <p className="text-gray-400">
                    En cas de divergence entre les versions linguistiques, la version française fait foi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center py-8"
          >
            <Card className="bg-gradient-to-br from-red-950/30 to-orange-950/20 border-red-800/40">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Questions sur nos CGV ?</h3>
                <p className="text-gray-400 mb-6">
                  N'hésitez pas à nous contacter pour toute clarification
                </p>
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{boxShadow: '0 0 20px rgba(229,57,53,0.4)'}}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}