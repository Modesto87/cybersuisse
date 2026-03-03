import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Building, User, Shield, Envelope, Phone, Globe } from '@phosphor-icons/react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

interface MentionsLegalesPageProps {
  onNavigate: (page: string) => void
}

export default function MentionsLegalesPage({ onNavigate }: MentionsLegalesPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        back: 'Back to home',
        title: 'Legal Notice',
        subtitle: 'Legal and regulatory information',
        editorTitle: 'Publisher and Site Owner',
        editorNameLabel: 'Name:',
        editorName: 'Modesto',
        editorActivityLabel: 'Activity:',
        editorActivity: 'Cybersecurity Expert',
        editorStatusLabel: 'Status:',
        editorStatus: 'Independent freelancer',
        editorLocationLabel: 'Location:',
        editorLocation: 'Biel/Bienne region, Switzerland',
        editorEmailLabel: 'Email:',
        editorPhoneLabel: 'Phone:',
        editorWebLabel: 'Website:',
        hostingTitle: 'Hosting',
        hostingText: 'This website is hosted by a provider complying with Swiss and European security and privacy standards.',
        hostingLocationLabel: 'Server location:',
        hostingLocation: 'European Union',
        ipTitle: 'Intellectual Property',
        ipText1: 'All content of this website (content, text, images, logos, design, structure) is protected by copyright and is the exclusive property of Modesto - CyberSuisse.',
        ipText2: 'Any reproduction, representation, modification, publication, adaptation of all or part of the site elements, by any means or process, is prohibited unless prior written authorization is obtained.',
        ipText3: 'Trademarks and logos: CyberSuisse and its logo are registered trademarks. Any unauthorized use is strictly prohibited.',
        termsTitle: 'Terms of Use',
        termsText: 'Using this website implies full acceptance of the terms of use described below.',
        accessTitle: 'Site access:',
        accessText: 'Access to the site is free. Network access and usage costs are the user’s responsibility.',
        infoTitle: 'Use of information:',
        infoText: 'The information on this site is provided for informational purposes only. It does not constitute legal or technical advice tailored to your situation.',
        liabilityTitle: 'Limitation of Liability',
        liabilityText1: 'CyberSuisse strives to provide information as accurate as possible. However, it cannot be held responsible for omissions, inaccuracies, or failures to update, whether on its own part or on the part of third-party partners providing such information.',
        liabilityText2: 'The user acknowledges using this information under their sole responsibility.',
        availabilityTitle: 'Service availability:',
        availabilityText: 'CyberSuisse cannot guarantee continuous availability of the site and declines any responsibility in case of service interruption.',
        lawTitle: 'Applicable Law and Jurisdiction',
        lawText1: 'Applicable law: These legal notices are governed by Swiss law.',
        lawText2: 'Competent jurisdiction: In case of dispute, Swiss courts shall have exclusive jurisdiction.',
        lawText3: 'Language: In case of translation, only the French version is authoritative.',
        contactTitle: 'Contact and Updates',
        contactText: 'For any questions regarding these legal notices, you may contact us:',
        contactEmailLabel: 'Email:',
        contactPhoneLabel: 'Phone:',
        updated: 'Last updated: January 2024',
        updateNote: 'These legal notices may be modified at any time. It is recommended to consult them regularly.',
        contactButton: 'Contact us'
      }
    : language === 'pt'
      ? {
          back: 'Voltar ao início',
          title: 'Aviso Legal',
          subtitle: 'Informações legais e regulamentares',
          editorTitle: 'Editor e Proprietário do Site',
          editorNameLabel: 'Nome:',
          editorName: 'Modesto',
          editorActivityLabel: 'Atividade:',
          editorActivity: 'Especialista em Cibersegurança',
          editorStatusLabel: 'Estatuto:',
          editorStatus: 'Freelancer independente',
          editorLocationLabel: 'Localização:',
          editorLocation: 'Região de Biel/Bienne, Suíça',
          editorEmailLabel: 'Email:',
          editorPhoneLabel: 'Telefone:',
          editorWebLabel: 'Website:',
          hostingTitle: 'Alojamento',
          hostingText: 'Este website é alojado por um prestador que respeita as normas de segurança e confidencialidade suíças e europeias.',
          hostingLocationLabel: 'Localização dos servidores:',
          hostingLocation: 'União Europeia',
          ipTitle: 'Propriedade Intelectual',
          ipText1: 'Todo o conteúdo deste website (conteúdo, textos, imagens, logótipos, design, estrutura) é protegido por direitos de autor e é propriedade exclusiva de Modesto - CyberSuisse.',
          ipText2: 'Qualquer reprodução, representação, modificação, publicação ou adaptação de todo ou parte dos elementos do site, por qualquer meio, é proibida sem autorização escrita prévia.',
          ipText3: 'Marcas e logótipos: CyberSuisse e o seu logótipo são marcas registadas. Qualquer utilização não autorizada é estritamente proibida.',
          termsTitle: 'Condições de Utilização',
          termsText: 'A utilização deste website implica a aceitação plena e integral das condições de utilização descritas abaixo.',
          accessTitle: 'Acesso ao site:',
          accessText: 'O acesso ao site é gratuito. Os custos de acesso e utilização da rede de telecomunicações são da responsabilidade do utilizador.',
          infoTitle: 'Utilização das informações:',
          infoText: 'As informações presentes neste site são fornecidas a título informativo. Não constituem aconselhamento jurídico ou técnico personalizado.',
          liabilityTitle: 'Limitação de Responsabilidade',
          liabilityText1: 'A CyberSuisse esforça-se por fornecer informações tão precisas quanto possível. No entanto, não pode ser responsabilizada por omissões, imprecisões ou falhas de atualização, quer por si própria quer por terceiros parceiros que forneçam essas informações.',
          liabilityText2: 'O utilizador reconhece utilizar estas informações sob sua exclusiva responsabilidade.',
          availabilityTitle: 'Disponibilidade do serviço:',
          availabilityText: 'A CyberSuisse não pode garantir a disponibilidade contínua do site e declina qualquer responsabilidade em caso de interrupção do serviço.',
          lawTitle: 'Lei Aplicável e Jurisdição',
          lawText1: 'Lei aplicável: as presentes informações legais são regidas pela lei suíça.',
          lawText2: 'Jurisdição competente: em caso de litígio, os tribunais suíços serão exclusivamente competentes.',
          lawText3: 'Língua: em caso de tradução, apenas a versão francesa faz fé.',
          contactTitle: 'Contacto e Atualizações',
          contactText: 'Para qualquer questão sobre este aviso legal, pode contactar-nos:',
          contactEmailLabel: 'Email:',
          contactPhoneLabel: 'Telefone:',
          updated: 'Última atualização: Janeiro de 2024',
          updateNote: 'Este aviso legal pode ser alterado a qualquer momento. Recomenda-se a consulta regular.',
          contactButton: 'Contactar'
        }
      : {
          back: "Retour à l'accueil",
          title: 'Mentions Légales',
          subtitle: 'Informations légales et réglementaires',
          editorTitle: 'Éditeur et Propriétaire du Site',
          editorNameLabel: 'Nom :',
          editorName: 'Modesto',
          editorActivityLabel: 'Activité :',
          editorActivity: 'Expert en Cybersécurité',
          editorStatusLabel: 'Statut :',
          editorStatus: 'Freelance indépendant',
          editorLocationLabel: 'Localisation :',
          editorLocation: 'Région de Bienne/Biel, Suisse',
          editorEmailLabel: 'Email :',
          editorPhoneLabel: 'Téléphone :',
          editorWebLabel: 'Site web :',
          hostingTitle: 'Hébergement',
          hostingText: 'Ce site web est hébergé par un prestataire respectant les normes de sécurité et de confidentialité suisses et européennes.',
          hostingLocationLabel: 'Localisation des serveurs :',
          hostingLocation: 'Union Européenne',
          ipTitle: 'Propriété Intellectuelle',
          ipText1: "L'ensemble de ce site web (contenu, textes, images, logos, design, structure) est protégé par le droit d'auteur et constitue la propriété exclusive de Modesto - CyberSuisse.",
          ipText2: "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.",
          ipText3: 'Marques et logos : CyberSuisse et son logo sont des marques déposées. Toute utilisation non autorisée est strictement interdite.',
          termsTitle: "Conditions d'Utilisation",
          termsText: "L'utilisation de ce site web implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.",
          accessTitle: 'Accès au site :',
          accessText: "L'accès au site est gratuit. Les frais d'accès et d'utilisation du réseau de télécommunication sont à la charge de l'utilisateur.",
          infoTitle: 'Utilisation des informations :',
          infoText: 'Les informations présentes sur ce site sont fournies à titre informatif. Elles ne constituent pas des conseils juridiques ou techniques personnalisés.',
          liabilityTitle: 'Limitation de Responsabilité',
          liabilityText1: "CyberSuisse s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
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
        })
  return (
    <div className="min-h-screen cs-bg-redteam-diagonal">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A0A0A] to-red-950/30 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-6 text-gray-300 hover:bg-red-950/50 transition-all duration-300"
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <User className="mr-3 text-red-500" size={24} />
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
                      <Envelope className="mr-2 text-red-500" size={16} />
                      <strong>{copy.editorEmailLabel}</strong> modesto@cybersuisse.ch
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 text-red-500" size={16} />
                      <strong>{copy.editorPhoneLabel}</strong> +41 78 208 95 45
                    </p>
                    <p className="flex items-center">
                      <Globe className="mr-2 text-red-500" size={16} />
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Building className="mr-3 text-red-500" size={24} />
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  {copy.termsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.termsText}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">{copy.accessTitle}</h4>
                  <p>{copy.accessText}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">{copy.infoTitle}</h4>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  {copy.liabilityTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.liabilityText1}</p>
                <p>{copy.liabilityText2}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-red-400">{copy.availabilityTitle}</h4>
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
            <Card className="bg-[#1A1A1A] border-[#333] shadow-lg hover:shadow-xl hover:border-red-600/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  {copy.lawTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-red-400">{copy.lawText1.split(':')[0]}:</strong> {copy.lawText1.split(':').slice(1).join(':').trim()}
                </p>
                <p>
                  <strong className="text-red-400">{copy.lawText2.split(':')[0]}:</strong> {copy.lawText2.split(':').slice(1).join(':').trim()}
                </p>
                <p>
                  <strong className="text-red-400">{copy.lawText3.split(':')[0]}:</strong> {copy.lawText3.split(':').slice(1).join(':').trim()}
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
                  {copy.contactTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>{copy.contactText}</p>
                <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                  <p><strong className="text-red-400">{copy.contactEmailLabel}</strong> modesto@cybersuisse.ch</p>
                  <p><strong className="text-red-400">{copy.contactPhoneLabel}</strong> +41 78 208 95 45</p>
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
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cs-shadow-glow-red-20"
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