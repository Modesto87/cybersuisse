import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Envelope, Phone, MapPin, Shield, Clock, Warning, LinkedinLogo } from '@phosphor-icons/react'
import SEOContent from './SEOContent'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false)
  const { i18n } = useTranslation()

  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = (language === 'en'
    ? {
        srTitle: 'Contact - CyberSuisse Cybersecurity Expert',
        cardTitle: 'Contact me',
        cardDescription: 'Cybersecurity expert available to answer your questions and support your projects.',
        emailLabel: 'Email',
        emailReveal: 'Show email',
        emailResponse: 'Response within 24–48h',
        phoneLabel: 'Phone',
        phoneHours: 'Mon–Fri 9am–6pm',
        locationLabel: 'Location',
        locationValue: 'Switzerland',
        locationCoverage: 'Service across all of Switzerland',
        responseTitle: 'Response time',
        responseNormal: '🟢 Normal',
        responseNormalValue: '24–48h',
        responseHigh: '🟡 High',
        responseHighValue: '4–24h',
        responseCritical: '🔴 Critical',
        responseCriticalValue: '1–4h',
        emailButton: 'Send an Email',
        phoneButton: 'Call',
        securityTip: 'Security tip: do not send passwords, API keys, or sensitive data by email.',
        securityTitle: 'Maximum security',
        securitySubtitle: 'Why I prefer direct contact instead of web forms.',
        securityChoiceTitle: 'Security-first choice',
        securityChoiceText: 'Web forms are a common attack surface for cybercriminals. As a cybersecurity expert, I intentionally do not include a form on my site to eliminate this risk.',
        directBenefitsTitle: 'Benefits of direct contact:',
        benefitSecurityTitle: 'Stronger security',
        benefitSecurityText: 'No risk of SQL injection, XSS, or other form-based attacks',
        benefitDirectTitle: 'Direct communication',
        benefitDirectText: 'Immediate exchange from your secure email client',
        benefitConfTitle: 'Confidentiality',
        benefitConfText: 'Your data stays within your secured channels',
        benefitTraceTitle: 'Traceability',
        benefitTraceText: 'Full history in your mailbox',
        servicesTitle: 'Available services:',
        services: ['Pentest / Penetration test', 'CRA Audit', 'Secure development', 'Training & Advisory']
      }
    : language === 'pt'
      ? {
          srTitle: 'Contacto - Especialista de Cibersegurança CyberSuisse',
          cardTitle: 'Contacte-me',
          cardDescription: 'Especialista em cibersegurança disponível para responder às suas questões e apoiar os seus projetos.',
          emailLabel: 'Email',
          emailReveal: 'Mostrar email',
          emailResponse: 'Resposta em 24–48h',
          phoneLabel: 'Telefone',
          phoneHours: 'Seg–Sex 9h–18h',
          locationLabel: 'Localização',
          locationValue: 'Suíça',
          locationCoverage: 'Intervenções em toda a Suíça',
          responseTitle: 'Tempo de resposta',
          responseNormal: '🟢 Normal',
          responseNormalValue: '24–48h',
          responseHigh: '🟡 Alta',
          responseHighValue: '4–24h',
          responseCritical: '🔴 Crítica',
          responseCriticalValue: '1–4h',
          emailButton: 'Enviar email',
          phoneButton: 'Ligar',
          securityTip: 'Dica de segurança: não envie palavras-passe, chaves de API ou dados sensíveis por email.',
          securityTitle: 'Segurança máxima',
          securitySubtitle: 'Porque privilegio o contacto direto em vez de formulários web.',
          securityChoiceTitle: 'Escolha segura',
          securityChoiceText: 'Os formulários web são uma superfície de ataque privilegiada por cibercriminosos. Como especialista em cibersegurança, optei por não incluir um formulário no site para eliminar esse risco.',
          directBenefitsTitle: 'Vantagens do contacto direto:',
          benefitSecurityTitle: 'Segurança reforçada',
          benefitSecurityText: 'Sem risco de SQL injection, XSS ou outras ataques via formulário',
          benefitDirectTitle: 'Comunicação direta',
          benefitDirectText: 'Troca imediata a partir do seu cliente de email seguro',
          benefitConfTitle: 'Confidencialidade',
          benefitConfText: 'Os seus dados permanecem nos seus canais seguros',
          benefitTraceTitle: 'Rastreabilidade',
          benefitTraceText: 'Histórico completo no seu email',
          servicesTitle: 'Serviços disponíveis:',
          services: ['Pentest / Teste de intrusão', 'Auditoria CRA', 'Desenvolvimento seguro', 'Formação & Consultoria']
        }
      : {
          srTitle: 'Contact - Expert Cybersécurité CyberSuisse',
          cardTitle: 'Contactez-moi',
          cardDescription: 'Expert en cybersécurité, je suis à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.',
          emailLabel: 'Email',
          emailReveal: 'Afficher l’email',
          emailResponse: 'Réponse sous 24–48h',
          phoneLabel: 'Téléphone',
          phoneHours: 'Lun-Ven 9h-18h',
          locationLabel: 'Localisation',
          locationValue: 'Suisse',
          locationCoverage: 'Interventions dans toute la Suisse',
          responseTitle: 'Temps de réponse',
          responseNormal: '🟢 Normale',
          responseNormalValue: '24-48h',
          responseHigh: '🟡 Élevée',
          responseHighValue: '4-24h',
          responseCritical: '🔴 Critique',
          responseCriticalValue: '1-4h',
          emailButton: 'Envoyer un Email',
          phoneButton: 'Appeler',
          securityTip: 'Conseil sécurité : n’envoyez pas de mots de passe, clés API ou données sensibles par email.',
          securityTitle: 'Sécurité maximale',
          securitySubtitle: 'Pourquoi je privilégie le contact direct plutôt que les formulaires web.',
          securityChoiceTitle: 'Choix sécuritaire',
          securityChoiceText: "Les formulaires web constituent une zone d'attaque privilégiée par les cybercriminels. En tant qu'expert en cybersécurité, j'ai délibérément choisi de ne pas inclure de formulaire sur mon site pour éliminer cette surface d'attaque.",
          directBenefitsTitle: 'Avantages du contact direct :',
          benefitSecurityTitle: 'Sécurité renforcée',
          benefitSecurityText: "Aucun risque d'injection SQL, XSS ou autres attaques via formulaire",
          benefitDirectTitle: 'Communication directe',
          benefitDirectText: 'Échange immédiat depuis votre client email sécurisé',
          benefitConfTitle: 'Confidentialité',
          benefitConfText: 'Vos données transitent par vos propres canaux sécurisés',
          benefitTraceTitle: 'Traçabilité',
          benefitTraceText: 'Historique complet dans votre messagerie',
          servicesTitle: 'Services disponibles :',
          services: ["Pentest / Test d'intrusion", 'Audit CRA', 'Développement sécurisé', 'Formation & Conseil']
        })

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
    <div className="min-h-screen bg-bg">
      <SEOContent page="contact" />

      {/* H1 pour SEO - invisible mais présent */}
      <h1 className="sr-only">{copy.srTitle}</h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-fit bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-fg">
                  <Envelope className="w-8 h-8 text-brand-amber" />
                  {copy.cardTitle}
                </CardTitle>
                <p className="text-gray-400">{copy.cardDescription}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-brand-amber/10 rounded-lg border border-brand-amber/40">
                    <Envelope className="w-6 h-6 text-brand-amber flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-fg">{copy.emailLabel}</p>
                      {isEmailRevealed ? (
                        <button
                          type="button"
                          onClick={handleEmailClick}
                          className="text-brand-amber hover:text-brand-amber transition-colors font-medium"
                        >
                          {email}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsEmailRevealed(true)}
                          className="text-brand-amber hover:text-brand-amber transition-colors font-medium"
                        >
                          {copy.emailReveal}
                        </button>
                      )}
                      <p className="text-sm text-gray-500">{copy.emailResponse}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-950/40 rounded-lg border border-green-800/40">
                    <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-fg">{copy.phoneLabel}</p>
                      <p className="text-gray-300 font-medium">{phoneDisplay}</p>
                      <p className="text-sm text-gray-500">{copy.phoneHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-orange-950/40 rounded-lg border border-orange-800/40">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-fg">{copy.locationLabel}</p>
                      <p className="text-gray-300">{copy.locationValue}</p>
                      <p className="text-sm text-gray-500">{copy.locationCoverage}</p>
                    </div>
                  </div>
                </div>

                {/* Temps de réponse */}
                <div className="bg-gradient-to-r from-orange-600 to-brand-amber-hover p-6 rounded-lg text-fg">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-bold text-lg">{copy.responseTitle}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{copy.responseNormal}</span>
                      <span className="font-semibold">{copy.responseNormalValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{copy.responseHigh}</span>
                      <span className="font-semibold">{copy.responseHighValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{copy.responseCritical}</span>
                      <span className="font-semibold">{copy.responseCriticalValue}</span>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-brand-amber to-brand-amber-hover hover:from-brand-amber-hover hover:to-brand-amber-hover text-fg font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border border-brand-amber/40 "
                    size="lg"
                  >
                    <Envelope className="w-4 h-4 mr-2" />
                    {copy.emailButton}
                  </Button>
                  
                  <Button 
                    onClick={handlePhoneClick}
                    className="bg-gradient-to-r from-brand-amber to-brand-amber-hover hover:from-brand-amber-hover hover:to-brand-amber-hover text-fg font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border border-brand-amber/40 "
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {copy.phoneButton}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">
                    {copy.securityTip}
                  </p>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <Button variant="outline" size="sm" className="border-brand-amber/40 text-brand-amber hover:bg-brand-amber/20 hover:text-fg">
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
            <Card className="bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-fg">
                  <Shield className="w-8 h-8 text-brand-amber" />
                  {copy.securityTitle}
                </CardTitle>
                <p className="text-gray-400">{copy.securitySubtitle}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Alerte sécurité */}
                <div className="bg-brand-amber/10 border border-brand-amber/40 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Warning className="w-6 h-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-amber mb-2">{copy.securityChoiceTitle}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{copy.securityChoiceText}</p>
                    </div>
                  </div>
                </div>

                {/* Avantages du contact direct */}
                <div className="space-y-4">
                  <h3 className="font-bold text-fg text-lg">{copy.directBenefitsTitle}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-950/40 rounded-lg border border-green-800/30">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-400">{copy.benefitSecurityTitle}</p>
                        <p className="text-gray-400 text-sm">{copy.benefitSecurityText}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-blue-950/40 rounded-lg border border-blue-800/30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-blue-400">{copy.benefitDirectTitle}</p>
                        <p className="text-gray-400 text-sm">{copy.benefitDirectText}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-purple-950/40 rounded-lg border border-purple-800/30">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-purple-400">{copy.benefitConfTitle}</p>
                        <p className="text-gray-400 text-sm">{copy.benefitConfText}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-orange-950/40 rounded-lg border border-orange-800/30">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-orange-400">{copy.benefitTraceTitle}</p>
                        <p className="text-gray-400 text-sm">{copy.benefitTraceText}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services disponibles */}
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333]">
                  <h3 className="font-bold text-fg mb-3">{copy.servicesTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                    {copy.services.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-amber rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
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
          <Card className="border-brand-amber/40 bg-brand-amber/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-brand-amber" />
                <h3 className="text-lg font-semibold text-fg">Sécurité et Confidentialité</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <p className="font-medium text-brand-amber mb-1">🔒 Chiffrement</p>
                  <p>Toutes les communications sont chiffrées via HTTPS/TLS</p>
                </div>
                <div>
                  <p className="font-medium text-brand-amber mb-1">🛡️ Confidentialité</p>
                  <p>Vos données restent strictement confidentielles</p>
                </div>
                <div>
                  <p className="font-medium text-brand-amber mb-1">✅ RGPD</p>
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
