import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { toast } from 'sonner'
import { Envelope, Phone, MapPin, PaperPlaneTilt, Shield, Clock, CheckCircle, Warning } from '@phosphor-icons/react'
import Logo from './Logo'
import SEOContent from './SEOContent'
import emailjs from '@emailjs/browser'

// ✅ EMAILJS CONFIGURATION - Configurar em https://emailjs.com
const EMAILJS_CONFIG = {
  serviceId: 'service_cybersuisse',    // Substituir pela SERVICE_ID
  templateId: 'template_contact',      // Substituir pela TEMPLATE_ID  
  publicKey: 'YOUR_PUBLIC_KEY'         // Substituir pela PUBLIC_KEY
}

interface FormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  entreprise: string
  service: string
  budget: string
  message: string
  urgence: 'normale' | 'elevee' | 'critique'
}

interface ContactPageProps {
  onNavigate: (page: 'home' | 'about' | 'pentest' | 'surveillance' | 'audit-cra' | 'developpement' | 'dfir') => void
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    budget: '',
    message: '',
    urgence: 'normale'
  })
  
  // Estados simplificados para EmailJS
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  // Validação básica
  const validateForm = (data: FormData): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []

    if (!data.prenom.trim()) errors.push('Le prénom est requis')
    if (!data.nom.trim()) errors.push('Le nom est requis')
    if (!data.email.trim()) errors.push('L\'email est requis')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Format d\'email invalide')
    }
    if (!data.message.trim()) errors.push('Le message est requis')

    return { isValid: errors.length === 0, errors }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationErrors([])
    
    // Validação básica
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      toast.error('Veuillez corriger les erreurs dans le formulaire.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // 📧 ENVIAR COM EMAILJS - 100% CONFIÁVEL!
      const templateParams = {
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: formData.email,
        telephone: formData.telephone,
        entreprise: formData.entreprise,
        service: formData.service,
        budget: formData.budget,
        urgence: formData.urgence,
        message: formData.message,
        to_email: 'modesto@cybersuisse.ch',
        reply_to: formData.email
      }

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        
        // Mensagem de sucesso baseada na urgência
        if (formData.urgence === 'critique') {
          toast.success('🚨 Message urgent envoyé! Nous vous contacterons dans les 4 heures.')
        } else if (formData.urgence === 'elevee') {
          toast.success('⚡ Message prioritaire envoyé! Réponse sous 24 heures.')
        } else {
          toast.success('✅ Message envoyé avec succès! Nous vous répondrons rapidement.')
        }

        // Reset form
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          entreprise: '',
          service: '',
          budget: '',
          message: '',
          urgence: 'normale'
        })
      }
      
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Limpar erros quando o usuário corrige
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const resetForm = () => {
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      entreprise: '',
      service: '',
      budget: '',
      message: '',
      urgence: 'normale'
    })
    setValidationErrors([])
    setIsSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOContent 
        page="contact"
        description="Contactez CyberSuisse pour vos besoins en cybersécurité. Pentesting, audit CRA, surveillance, développement sécurisé et DFIR. Réponse rapide garantie."
        keywords={["contact cybersécurité", "consultation pentest", "audit CRA contact", "surveillance cyber", "DFIR Suisse"]}
      />

      {/* Header avec Logo */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Accueil', key: 'home' },
                { name: 'À propos', key: 'about' },
                { name: 'Pentest', key: 'pentest' },
                { name: 'Surveillance', key: 'surveillance' },
                { name: 'Audit CRA', key: 'audit-cra' },
                { name: 'Développement', key: 'developpement' },
                { name: 'DFIR', key: 'dfir' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key as any)}
                  className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Envelope className="w-8 h-8 text-blue-600" />
                  Contactez-nous
                </CardTitle>
                <p className="text-gray-600">
                  Notre équipe d'experts en cybersécurité est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <Envelope className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:modesto@cybersuisse.ch" className="text-blue-600 hover:text-blue-800 transition-colors">
                        modesto@cybersuisse.ch
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Téléphone</p>
                      <p className="text-gray-700">+41 XX XXX XX XX</p>
                      <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Localisation</p>
                      <p className="text-gray-700">Suisse</p>
                      <p className="text-sm text-gray-500">Interventions dans toute la Suisse</p>
                    </div>
                  </div>
                </div>

                {/* Temps de réponse */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
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

              </CardContent>
            </Card>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <PaperPlaneTilt className="w-8 h-8 text-blue-600" />
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-gray-600">
                  Décrivez votre projet ou vos besoins, nous vous répondrons rapidement avec une solution adaptée.
                </p>
              </CardHeader>
              <CardContent>
                
                {/* Alertes d'erreur */}
                {validationErrors.length > 0 && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <Warning className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <ul className="list-disc list-inside space-y-1">
                        {validationErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Message de succès */}
                {isSubmitted && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <div className="flex justify-between items-center">
                        <span>Message envoyé avec succès! Nous vous contacterons rapidement.</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={resetForm}
                          className="ml-4"
                        >
                          Nouveau message
                        </Button>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {!isSubmitted && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Nom et Prénom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <Input
                          value={formData.prenom}
                          onChange={(e) => handleInputChange('prenom', e.target.value)}
                          placeholder="Votre prénom"
                          className="w-full"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <Input
                          value={formData.nom}
                          onChange={(e) => handleInputChange('nom', e.target.value)}
                          placeholder="Votre nom"
                          className="w-full"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Email et Téléphone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre@email.com"
                          className="w-full"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          value={formData.telephone}
                          onChange={(e) => handleInputChange('telephone', e.target.value)}
                          placeholder="+41 XX XXX XX XX"
                          className="w-full"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Entreprise */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise / Organisation
                      </label>
                      <Input
                        value={formData.entreprise}
                        onChange={(e) => handleInputChange('entreprise', e.target.value)}
                        placeholder="Nom de votre entreprise"
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Service et Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service demandé
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger disabled={isSubmitting}>
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pentest">Pentest / Test d'intrusion</SelectItem>
                            <SelectItem value="audit-cra">Audit CRA (Cyber Resilience Act)</SelectItem>
                            <SelectItem value="surveillance">Surveillance & Monitoring</SelectItem>
                            <SelectItem value="developpement">Développement sécurisé</SelectItem>
                            <SelectItem value="dfir">DFIR (Digital Forensics)</SelectItem>
                            <SelectItem value="formation">Formation en cybersécurité</SelectItem>
                            <SelectItem value="conseil">Conseil & Stratégie</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget estimé
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger disabled={isSubmitting}>
                            <SelectValue placeholder="Sélectionnez un budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under5k">&lt; 5'000 CHF</SelectItem>
                            <SelectItem value="5k-15k">5'000 - 15'000 CHF</SelectItem>
                            <SelectItem value="15k-50k">15'000 - 50'000 CHF</SelectItem>
                            <SelectItem value="50k+">50'000+ CHF</SelectItem>
                            <SelectItem value="not-defined">À définir</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Urgence */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Niveau d'urgence
                      </label>
                      <Select value={formData.urgence} onValueChange={(value) => handleInputChange('urgence', value as FormData['urgence'])}>
                        <SelectTrigger disabled={isSubmitting}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normale">🟢 Normale (24-48h)</SelectItem>
                          <SelectItem value="elevee">🟡 Élevée (4-24h)</SelectItem>
                          <SelectItem value="critique">🔴 Critique (1-4h)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        className="w-full min-h-[120px]"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Bouton d'envoi */}
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>

                  </form>
                )}

              </CardContent>
            </Card>
          </motion.div>

        </div>

        {/* Section sécurité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Sécurité et Confidentialité</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-blue-900 mb-1">🔒 Chiffrement</p>
                  <p>Toutes les communications sont chiffrées via HTTPS/TLS</p>
                </div>
                <div>
                  <p className="font-medium text-blue-900 mb-1">🛡️ Confidentialité</p>
                  <p>Vos données restent strictement confidentielles</p>
                </div>
                <div>
                  <p className="font-medium text-blue-900 mb-1">✅ RGPD</p>
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
