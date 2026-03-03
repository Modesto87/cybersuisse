import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Globe, Clock } from '@phosphor-icons/react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

interface PolitiqueConfidentialitePageProps {
  onNavigate: (page: string) => void
}

const PolitiqueConfidentialitePage = ({ onNavigate }: PolitiqueConfidentialitePageProps) => {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        title: 'Privacy Policy',
        subtitle: 'Your privacy is our priority. Learn how we protect your personal data.',
        updated: 'Last updated: January 1, 2024',
        introTitle: 'Introduction',
        introText: 'At CyberSuisse, we are committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, store, and protect your personal information when you use our cybersecurity services.',
        collectTitle: 'Data Collection',
        collectLead: 'We collect the following information:',
        collectItems: [
          'Identification information (name, surname, company)',
          'Contact details (email address, phone number)',
          'Technical information required for security audits',
          'Communication data during our exchanges',
          'Billing information (with your explicit consent)'
        ],
        useTitle: 'Use of Data',
        useLead: 'Your personal data is used only to:',
        useItems: [
          'Provide our cybersecurity services (pentest, audit)',
          'Communicate with you about our services',
          'Prepare quotes and invoices',
          'Comply with legal and regulatory obligations',
          'Improve the quality of our services'
        ],
        protectTitle: 'Data Protection',
        protectLead: 'As cybersecurity experts, we apply best security practices:',
        protectItems: [
          'Encryption of all sensitive data',
          'Access limited according to the principle of least privilege',
          'Continuous monitoring of security systems',
          'Secure and regular backups',
          'Regular security training'
        ],
        shareTitle: 'Data Sharing',
        shareLead: 'We do not sell, rent, or share your personal data with third parties, except in the following cases:',
        shareItems: [
          'With your explicit consent',
          'To comply with a legal obligation',
          'With our technical partners under a confidentiality agreement',
          'In the event of a merger, acquisition, or asset sale (with prior notice)'
        ],
        rightsTitle: 'Your Rights',
        rightsLead: 'In accordance with GDPR and Swiss data protection law, you have the following rights:',
        rightsItems: [
          ['Right of access:', 'Access the data we hold about you'],
          ['Right to rectification:', 'Correct inaccurate data'],
          ['Right to erasure:', 'Request deletion of your data'],
          ['Right to portability:', 'Retrieve your data in a structured format'],
          ['Right to object:', 'Object to the processing of your data'],
          ['Right to restriction:', 'Request limitation of processing']
        ],
        retentionTitle: 'Data Retention',
        retentionLead: 'We keep your personal data only as long as necessary for the purposes for which it was collected:',
        retentionItems: [
          'Client data: 10 years after the end of the contractual relationship',
          'Prospect data: 3 years maximum without interaction',
          'Technical audit data: according to regulatory requirements',
          'Billing data: 10 years according to Swiss legislation'
        ],
        cookiesTitle: 'Cookies and Similar Technologies',
        cookiesText: 'Our website uses strictly necessary cookies for site functionality. We do not use tracking or advertising cookies without your explicit consent.',
        contactTitle: 'Contact',
        contactText: 'For any questions about this privacy policy or to exercise your rights, contact us:',
        contactName: 'Modesto - CyberSuisse',
        contactEmail: 'Email: modesto@cybersuisse.ch',
        contactPhone: 'Phone: 078 208 95 45',
        contactRegion: 'Region: Biel/Bienne, Switzerland',
        changesTitle: 'Changes',
        changesText: 'We reserve the right to modify this privacy policy at any time. Changes will be published on this page with a new update date. We encourage you to review this page regularly.',
        back: 'Back to home'
      }
    : language === 'pt'
      ? {
          title: 'Política de Privacidade',
          subtitle: 'A sua privacidade é a nossa prioridade. Saiba como protegemos os seus dados pessoais.',
          updated: 'Última atualização: 1 de janeiro de 2024',
          introTitle: 'Introdução',
          introText: 'Na CyberSuisse, comprometemo-nos a proteger a sua privacidade e os seus dados pessoais. Esta política de privacidade explica como recolhemos, utilizamos, armazenamos e protegemos as suas informações pessoais quando utiliza os nossos serviços de cibersegurança.',
          collectTitle: 'Recolha de Dados',
          collectLead: 'Recolhemos as seguintes informações:',
          collectItems: [
            'Informações de identificação (nome, apelido, empresa)',
            'Dados de contacto (endereço de email, número de telefone)',
            'Informações técnicas necessárias para auditorias de segurança',
            'Dados de comunicação durante as nossas trocas',
            'Informações de faturação (com o seu consentimento explícito)'
          ],
          useTitle: 'Utilização dos Dados',
          useLead: 'Os seus dados pessoais são utilizados apenas para:',
          useItems: [
            'Prestar os nossos serviços de cibersegurança (pentest, auditoria)',
            'Comunicar consigo sobre os nossos serviços',
            'Elaborar orçamentos e faturas',
            'Cumprir obrigações legais e regulamentares',
            'Melhorar a qualidade dos nossos serviços'
          ],
          protectTitle: 'Proteção dos Dados',
          protectLead: 'Como especialistas em cibersegurança, aplicamos as melhores práticas de segurança:',
          protectItems: [
            'Encriptação de todos os dados sensíveis',
            'Acesso limitado segundo o princípio do menor privilégio',
            'Monitorização contínua dos sistemas de segurança',
            'Backups seguros e regulares',
            'Formação regular em segurança informática'
          ],
          shareTitle: 'Partilha de Dados',
          shareLead: 'Não vendemos, não alugamos, nem partilhamos os seus dados pessoais com terceiros, exceto nos seguintes casos:',
          shareItems: [
            'Com o seu consentimento explícito',
            'Para cumprir uma obrigação legal',
            'Com parceiros técnicos sob acordo de confidencialidade',
            'Em caso de fusão, aquisição ou venda de ativos (com aviso prévio)'
          ],
          rightsTitle: 'Os Seus Direitos',
          rightsLead: 'Em conformidade com o RGPD e a lei suíça de proteção de dados, dispõe dos seguintes direitos:',
          rightsItems: [
            ['Direito de acesso:', 'Consultar os dados que detemos sobre si'],
            ['Direito de retificação:', 'Corrigir dados incorretos'],
            ['Direito ao apagamento:', 'Solicitar a eliminação dos seus dados'],
            ['Direito de portabilidade:', 'Obter os seus dados num formato estruturado'],
            ['Direito de oposição:', 'Opor-se ao tratamento dos seus dados'],
            ['Direito de limitação:', 'Solicitar a limitação do tratamento']
          ],
          retentionTitle: 'Conservação dos Dados',
          retentionLead: 'Conservamos os seus dados pessoais apenas pelo tempo necessário às finalidades para as quais foram recolhidos:',
          retentionItems: [
            'Dados de clientes: 10 anos após o fim da relação contratual',
            'Dados de potenciais clientes: máximo 3 anos sem interação',
            'Dados técnicos de auditoria: conforme exigências regulamentares',
            'Dados de faturação: 10 anos conforme legislação suíça'
          ],
          cookiesTitle: 'Cookies e Tecnologias Semelhantes',
          cookiesText: 'O nosso website utiliza cookies estritamente necessários ao funcionamento do site. Não utilizamos cookies de rastreio ou publicidade sem o seu consentimento explícito.',
          contactTitle: 'Contacto',
          contactText: 'Para qualquer questão sobre esta política de privacidade ou para exercer os seus direitos, contacte-nos:',
          contactName: 'Modesto - CyberSuisse',
          contactEmail: 'Email: modesto@cybersuisse.ch',
          contactPhone: 'Telefone: 078 208 95 45',
          contactRegion: 'Região: Biel/Bienne, Suíça',
          changesTitle: 'Alterações',
          changesText: 'Reservamo-nos o direito de modificar esta política de privacidade a qualquer momento. As alterações serão publicadas nesta página com uma nova data de atualização. Recomendamos que consulte esta página regularmente.',
          back: 'Voltar ao início'
        }
      : {
          title: 'Politique de Confidentialité',
          subtitle: 'Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données personnelles.',
          updated: 'Dernière mise à jour : 1er janvier 2024',
          introTitle: 'Introduction',
          introText: 'Chez CyberSuisse, nous nous engageons à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez nos services de cybersécurité.',
          collectTitle: 'Collecte des Données',
          collectLead: 'Nous collectons les informations suivantes :',
          collectItems: [
            "Informations d'identification (nom, prénom, entreprise)",
            'Coordonnées (adresse e-mail, numéro de téléphone)',
            'Informations techniques nécessaires aux audits de sécurité',
            'Données de communication lors de nos échanges',
            'Informations de facturation (avec votre consentement explicite)'
          ],
          useTitle: 'Utilisation des Données',
          useLead: 'Vos données personnelles sont utilisées uniquement pour :',
          useItems: [
            'Fournir nos services de cybersécurité (pentest, audit)',
            'Communiquer avec vous concernant nos services',
            'Établir les devis et factures',
            'Respecter nos obligations légales et réglementaires',
            'Améliorer la qualité de nos services'
          ],
          protectTitle: 'Protection des Données',
          protectLead: 'En tant qu’expert en cybersécurité, nous appliquons les meilleures pratiques de sécurité :',
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
            'En cas de fusion, acquisition ou vente d’actifs (avec notification préalable)'
          ],
          rightsTitle: 'Vos Droits',
          rightsLead: 'Conformément au RGPD et à la loi suisse sur la protection des données, vous disposez des droits suivants :',
          rightsItems: [
            ['Droit d’accès :', 'Consulter les données que nous détenons sur vous'],
            ['Droit de rectification :', 'Corriger les données inexactes'],
            ['Droit à l’effacement :', 'Demander la suppression de vos données'],
            ['Droit de portabilité :', 'Récupérer vos données dans un format structuré'],
            ['Droit d’opposition :', 'Vous opposer au traitement de vos données'],
            ['Droit de limitation :', 'Demander la limitation du traitement']
          ],
          retentionTitle: 'Conservation des Données',
          retentionLead: 'Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :',
          retentionItems: [
            'Données clients : 10 ans après la fin de la relation contractuelle',
            'Données de prospects : 3 ans maximum sans interaction',
            'Données techniques d’audit : Selon les exigences réglementaires',
            'Données de facturation : 10 ans selon la législation suisse'
          ],
          cookiesTitle: 'Cookies et Technologies Similaires',
          cookiesText: 'Notre site web utilise des cookies strictement nécessaires au fonctionnement du site. Nous n’utilisons pas de cookies de suivi ou de publicité sans votre consentement explicite.',
          contactTitle: 'Contact',
          contactText: 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :',
          contactName: 'Modesto - CyberSuisse',
          contactEmail: 'E-mail : modesto@cybersuisse.ch',
          contactPhone: 'Téléphone : 078 208 95 45',
          contactRegion: 'Région : Bienne, Suisse',
          changesTitle: 'Modifications',
          changesText: 'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.',
          back: "Retour à l'accueil"
        })
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
              {copy.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-white cs-text-glow-red-30">{copy.title.split(' ').slice(-1)}</span>
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
            <Card className="shadow-2xl border border-[#333] bg-[#1A1A1A]/80 backdrop-blur-sm">
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
                      <Shield size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">{copy.introTitle}</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{copy.introText}</p>
                  </div>

                  {/* Collecte des données */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">{copy.collectTitle}</h2>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-red-400">{copy.collectLead}</h3>
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
                      <UserCheck size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">{copy.useTitle}</h2>
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
                      <Lock size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">{copy.protectTitle}</h2>
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
                      <Globe size={24} className="text-red-500" />
                      <h2 className="text-2xl font-semibold text-white">{copy.shareTitle}</h2>
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
                    <h2 className="text-2xl font-semibold text-white">{copy.rightsTitle}</h2>
                    <p className="text-gray-400">{copy.rightsLead}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      {copy.rightsItems.map(([label, text]) => (
                        <li key={label}>
                          <strong className="text-red-400">{label}</strong> {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conservation des données */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{copy.retentionTitle}</h2>
                    <p className="text-gray-400">{copy.retentionLead}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                      {copy.retentionItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Cookies */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{copy.cookiesTitle}</h2>
                    <p className="text-gray-400">{copy.cookiesText}</p>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{copy.contactTitle}</h2>
                    <p className="text-gray-400">{copy.contactText}</p>
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333]">
                      <p className="text-white"><strong className="text-red-400">{copy.contactName}</strong></p>
                      <p className="text-gray-400">{copy.contactEmail}</p>
                      <p className="text-gray-400">{copy.contactPhone}</p>
                      <p className="text-gray-400">{copy.contactRegion}</p>
                    </div>
                  </div>

                  {/* Modifications */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">{copy.changesTitle}</h2>
                    <p className="text-gray-400">{copy.changesText}</p>
                  </div>

                  {/* Bouton retour */}
                  <div className="pt-8 border-t border-[#333]">
                    <Button
                      onClick={() => onNavigate('home')}
                      variant="outline"
                      className="group border-red-600/40 text-red-400 hover:bg-red-950/30 hover:text-white transition-all duration-300"
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