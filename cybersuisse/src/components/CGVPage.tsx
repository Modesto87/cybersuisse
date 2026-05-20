import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, FileText, Clock, CreditCard } from '@phosphor-icons/react'

interface CGVPageProps {
  onNavigate: (page: string) => void
}

export default function CGVPage({ onNavigate }: CGVPageProps) {
  const copy = {
    back: "Retour à l'accueil",
    title: 'Conditions Générales de Vente',
    subtitle: 'Conditions applicables aux prestations de cybersécurité de CyberSuisse',
    updated: 'Dernière mise à jour : Janvier 2024',
    sections: {
      s1: {
        title: "1. Objet et champ d'application",
        p1: "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de cybersécurité proposées par Luís Modesto, consultant indépendant en cybersécurité opérant sous la dénomination CyberSuisse, établi à Biel/Bienne, Suisse.",
        p2: "Ces conditions s'appliquent à l'ensemble du catalogue de prestations défini à l'article 2."
      },
      s2: {
        title: '2. Services proposés',
        intro: 'CyberSuisse propose les prestations suivantes :',
        items: [
          { name: 'M365 Security Check', desc: 'Audit de la configuration de sécurité Microsoft 365.' },
          { name: 'Empreinte Numérique', desc: "Analyse de l'exposition publique du Client par sources ouvertes (OSINT)." },
          { name: 'Bouclier Humain', desc: 'Sensibilisation et formation des collaborateurs à la cybersécurité.' },
          { name: 'Cap Sécurité', desc: 'Diagnostic de posture de sécurité et feuille de route priorisée.' },
          { name: 'Création et refonte de sites web', desc: 'Conception, refonte et mise en ligne de sites web.' },
          { name: 'Récupération de données', desc: 'Récupération de données sur supports défaillants, dans la limite des possibilités techniques.' }
        ],
        note: 'Le détail de chaque prestation est précisé dans le devis ou la confirmation de commande.'
      },
      s3: {
        title: '3. Tarifs et modalités de paiement',
        p1: 'Les tarifs sont établis sur devis personnalisé en fonction de la complexité et de la durée de la mission. Chaque projet est évalué individuellement selon ses spécificités.',
        paymentTitle: 'Modalités de paiement :',
        paymentItems: [
          "Acompte de 30% à la commande selon l'importance de la mission",
          'Solde à 30 jours nets après remise du livrable final',
          'Paiement par virement bancaire ou selon accord préalable',
          'Pénalités de retard : 5% par mois de retard'
        ],
        note: "Tous les prix sont exprimés en francs suisses (CHF) et s'entendent hors TVA si applicable."
      },
      s4: {
        title: "4. Délais d'exécution",
        p1: "Les délais d'exécution sont fixés dans chaque devis et commencent à courir après :",
        items1: [
          'Signature du bon de commande ou acceptation écrite du devis',
          "Réception de l'acompte si requis",
          'Fourniture de tous les éléments nécessaires par le Client'
        ],
        p2: "En cas de retard imputable au Client, les délais sont prolongés d'autant. Les délais indicatifs typiques sont précisés dans chaque devis."
      },
      s5: {
        title: '5. Confidentialité et sécurité',
        p1: "CyberSuisse s'engage à respecter la plus stricte confidentialité concernant toutes les informations communiquées par le Client.",
        items: [
          "Signature d'un accord de confidentialité (NDA) si requis",
          'Stockage sécurisé de toutes les données Client',
          'Destruction des données sensibles après mission selon accord',
          'Respect des réglementations suisses et européennes (LPD/RGPD)'
        ],
        p2: "Les prestations techniques sont réalisées dans un cadre strictement défini et autorisé, sans risque pour les systèmes du Client."
      },
      s6: {
        title: '6. Limitation de responsabilité',
        p1: 'La responsabilité de CyberSuisse est limitée aux dommages directs et prévisibles. Elle ne saurait excéder le montant de la prestation concernée.',
        p2: 'CyberSuisse ne peut être tenu responsable :',
        items: [
          "Des dommages indirects, pertes d'exploitation ou de données",
          "De l'utilisation incorrecte des recommandations fournies",
          "Des incidents liés à l'infrastructure du Client",
          "De l'évolution des menaces postérieures à la mission"
        ],
        insurance: "Une assurance responsabilité civile professionnelle couvre l'activité."
      },
      s7: {
        title: '7. Propriété intellectuelle',
        p1: 'Les rapports, outils développés et méthodologies restent la propriété de CyberSuisse, sauf accord contraire écrit.',
        p2: "Le Client dispose d'un droit d'usage des livrables pour ses besoins propres. Toute reproduction ou diffusion à des tiers nécessite l'accord préalable de CyberSuisse."
      },
      s8: {
        title: '8. Droit applicable et juridiction',
        p1: 'Les présentes conditions sont régies par le droit suisse. Tout litige sera soumis à la juridiction des tribunaux du canton de Berne.',
        p2: 'En cas de divergence entre les versions linguistiques, la version française fait foi.'
      }
    },
    contactTitle: 'Questions sur nos CGV ?',
    contactText: "N'hésitez pas à nous contacter pour toute clarification (modesto@cybersuisse.ch — 078 208 95 45, Biel/Bienne, Suisse).",
    contactButton: 'Nous contacter'
  }
  return (
    <div className="min-h-screen bg-bg">
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
            className="hover:bg-brand-amber/20 text-gray-300 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            {copy.back}
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
            <div className="p-4 bg-brand-amber/10 rounded-full border border-brand-amber/40">
              <FileText size={48} className="text-brand-amber" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">{copy.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{copy.subtitle}</p>
          <div className="mt-4 text-sm text-gray-500">{copy.updated}</div>
        </motion.div>

        {/* Contenu des CGV */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section 1 - Objet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s1.title}</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-400 leading-relaxed mb-4">{copy.sections.s1.p1}</p>
                  <p className="text-gray-400 leading-relaxed">{copy.sections.s1.p2}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s2.title}</h2>
                <p className="text-gray-400 mb-4">{copy.sections.s2.intro}</p>
                <div className="space-y-4">
                  {copy.sections.s2.items.map((item) => (
                    <div key={item.name}>
                      <h3 className="font-semibold text-lg mb-2 text-brand-amber">{item.name}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4">{copy.sections.s2.note}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3 - Tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CreditCard size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s3.title}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s3.p1}</p>
                  <div>
                    <h3 className="font-semibold mb-2 text-brand-amber">{copy.sections.s3.paymentTitle}</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                      {copy.sections.s3.paymentItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-500 text-sm">{copy.sections.s3.note}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s4.title}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s4.p1}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s4.items1.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-400">{copy.sections.s4.p2}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s5.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s5.p1}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s5.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-400">{copy.sections.s5.p2}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s6.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s6.p1}</p>
                  <p className="text-gray-400">{copy.sections.s6.p2}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s6.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-sm">{copy.sections.s6.insurance}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s7.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s7.p1}</p>
                  <p className="text-gray-400">{copy.sections.s7.p2}</p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s8.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s8.p1}</p>
                  <p className="text-gray-400">{copy.sections.s8.p2}</p>
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
            <Card className="bg-gradient-to-br from-brand-amber to-orange-950/20 border-brand-amber/40">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-fg">{copy.contactTitle}</h3>
                <p className="text-gray-400 mb-6">{copy.contactText}</p>
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-brand-amber to-brand-amber-hover hover:from-brand-amber-hover hover:to-brand-amber-hover text-fg shadow-lg hover:shadow-xl transition-all duration-300 "
                >
                  {copy.contactButton}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}