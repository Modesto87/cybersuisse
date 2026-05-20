import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Building, User, Shield, Envelope, Phone, Globe } from '@phosphor-icons/react'
import Logo from './Logo'
import { applyPageSeo } from '@/components/SEOHelpers'

interface MentionsLegalesPageProps {
  onNavigate: (page: string) => void
}

export default function MentionsLegalesPage({ onNavigate }: MentionsLegalesPageProps) {
  useEffect(() => {
    applyPageSeo({
      title: 'Mentions Légales — CyberSuisse',
      description: 'Mentions légales et informations réglementaires de CyberSuisse (Luís Modesto, consultant indépendant en cybersécurité à Biel/Bienne).',
      path: '/mentions-legales'
    })
  }, [])

  const copy = {
    back: "Retour à l'accueil",
    title: 'Mentions Légales',
    subtitle: 'Informations légales et réglementaires',
    editorTitle: 'Éditeur et Propriétaire du Site',
    editorNameLabel: 'Nom :',
    editorName: 'Luís Modesto',
    editorActivityLabel: 'Activité :',
    editorActivity: 'Consultant indépendant en cybersécurité',
    editorStatusLabel: 'Statut :',
    editorStatus: 'Indépendant',
    editorLocationLabel: 'Localisation :',
    editorLocation: 'Biel/Bienne, Suisse',
    editorEmailLabel: 'Email :',
    editorPhoneLabel: 'Téléphone :',
    editorWebLabel: 'Site web :',
    hostingTitle: 'Hébergement',
    hostingText: 'Ce site web est hébergé par un prestataire respectant les normes de sécurité et de confidentialité suisses et européennes.',
    hostingLocationLabel: 'Localisation des serveurs :',
    hostingLocation: 'Union Européenne',
    ipTitle: 'Propriété Intellectuelle',
    ipText1: "L'ensemble de ce site web (contenu, textes, images, logos, design, structure) est protégé par le droit d'auteur et constitue la propriété exclusive de Luís Modesto — CyberSuisse.",
    ipText2: "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.",
    ipText3: 'Marques et logos : CyberSuisse et son logo sont des marques déposées. Toute utilisation non autorisée est strictement interdite.',
    termsTitle: "Conditions d'Utilisation",
    termsText: "L'utilisation de ce site web implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.",
    accessTitle: 'Accès au site :',
    accessText: "L'accès au site est gratuit. Les frais d'accès et d'utilisation du réseau de télécommunication sont à la charge de l'utilisateur.",
    infoTitle: 'Utilisation des informations :',
    infoText: 'Les informations présentes sur ce site sont fournies à titre informatif. Elles ne constituent pas des conseils juridiques ou techniques personnalisés.',
    liabilityTitle: 'Limitation de Responsabilité',
    liabilityText1: "CyberSuisse s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
    liabilityText2: "L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.",
    availabilityTitle: 'Disponibilité du service :',
    availabilityText: "CyberSuisse ne peut garantir la disponibilité continue du site et décline toute responsabilité en cas d'interruption du service.",
    lawTitle: 'Droit Applicable et Juridiction',
    lawText1: 'Droit applicable : Les présentes mentions légales sont régies par le droit suisse.',
    lawText2: 'Juridiction compétente : En cas de litige, les tribunaux suisses seront seuls compétents.',
    lawText3: 'Langue : En cas de traduction des présentes mentions légales, seule la version française fait foi.',
    contactTitle: 'Contact et Mise à Jour',
    contactText: 'Pour toute question concernant ces mentions légales, vous pouvez nous contacter :',
    contactEmailLabel: 'Email :',
    contactPhoneLabel: 'Téléphone :',
    updated: 'Dernière mise à jour : Janvier 2024',
    updateNote: 'Ces mentions légales peuvent être modifiées à tout moment. Il est conseillé de les consulter régulièrement.',
    contactButton: 'Nous Contacter'
  }
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A0A0A] to-brand-amber-hover text-fg py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-6 text-gray-300 hover:bg-brand-amber/20 transition-all duration-300"
          >
            <ArrowLeft className="mr-2" />
            {copy.back}
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Logo className="mx-auto mb-6" size="md" />
            <h1 className="text-5xl font-bold mb-4">{copy.title}</h1>
            <p className="text-xl text-gray-400">{copy.subtitle}</p>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-fg">
                  <User className="mr-3 text-brand-amber" size={24} />
                  {copy.editorTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>{copy.editorNameLabel}</strong> {copy.editorName}</p>
                    <p><strong>{copy.editorActivityLabel}</strong> {copy.editorActivity}</p>
                    <p><strong>{copy.editorStatusLabel}</strong> {copy.editorStatus}</p>
                    <p><strong>{copy.editorLocationLabel}</strong> {copy.editorLocation}</p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <Envelope className="mr-2 text-brand-amber" size={16} />
                      <strong>{copy.editorEmailLabel}</strong> modesto@cybersuisse.ch
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 text-brand-amber" size={16} />
                      <strong>{copy.editorPhoneLabel}</strong> 078 208 95 45
                    </p>
                    <p className="flex items-center">
                      <Globe className="mr-2 text-brand-amber" size={16} />
                      <strong>{copy.editorWebLabel}</strong> cybersuisse.ch
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-fg">
                  <Building className="mr-3 text-brand-amber" size={24} />
                  {copy.hostingTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">{copy.hostingText}</p>
                <p>
                  <strong>{copy.hostingLocationLabel}</strong> {copy.hostingLocation}
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-fg">
                  <Shield className="mr-3 text-blue-400" size={24} />
                  {copy.ipTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.ipText1}</p>
                <p>{copy.ipText2}</p>
                <p>
                  <strong className="text-blue-400">{copy.ipText3}</strong>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-fg">
                  {copy.termsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.termsText}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-amber">{copy.accessTitle}</h4>
                  <p>{copy.accessText}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-amber">{copy.infoTitle}</h4>
                  <p>{copy.infoText}</p>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-fg">
                  {copy.liabilityTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.liabilityText1}</p>
                <p>{copy.liabilityText2}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-amber">{copy.availabilityTitle}</h4>
                  <p>{copy.availabilityText}</p>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-fg">
                  {copy.lawTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-brand-amber">{copy.lawText1.split(':')[0]}:</strong> {copy.lawText1.split(':').slice(1).join(':').trim()}
                </p>
                <p>
                  <strong className="text-brand-amber">{copy.lawText2.split(':')[0]}:</strong> {copy.lawText2.split(':').slice(1).join(':').trim()}
                </p>
                <p>
                  <strong className="text-brand-amber">{copy.lawText3.split(':')[0]}:</strong> {copy.lawText3.split(':').slice(1).join(':').trim()}
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-fg">
                  {copy.contactTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.contactText}</p>
                <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                  <p><strong className="text-brand-amber">{copy.contactEmailLabel}</strong> modesto@cybersuisse.ch</p>
                  <p><strong className="text-brand-amber">{copy.contactPhoneLabel}</strong> 078 208 95 45</p>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>{copy.updated}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  {copy.updateNote}
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
              className="bg-gradient-to-r from-brand-amber to-brand-amber-hover hover:from-brand-amber-hover hover:to-brand-amber-hover text-fg px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 "
            >
              <Envelope className="mr-2" />
              {copy.contactButton}
            </Button>
          </motion.div>

        </div>
      </div>
    </div>
  )
}