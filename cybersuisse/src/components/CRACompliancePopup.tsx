import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, Shield, CheckCircle, Warning, ArrowRight } from '@phosphor-icons/react'

interface CRACompliancePopupProps {
  onNavigateToContact: () => void
}

export default function CRACompliancePopup({ onNavigateToContact }: CRACompliancePopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar se já foi mostrado nesta sessão
    const wasShown = sessionStorage.getItem('cra-popup-shown')
    if (!wasShown) {
      // Mostrar após 3 segundos na página
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('cra-popup-shown', 'true')
  }

  const handleContactClick = () => {
    handleClose()
    onNavigateToContact()
    // Scroll to contact form with delay
    setTimeout(() => {
      const contactForm = document.querySelector('#contact-form')
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleNotNow = () => {
    handleClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full z-50"
          >
            <Card className="border-2 border-blue-200 shadow-2xl bg-white relative overflow-hidden">
              {/* Header avec gradient */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-xl font-bold">CRA Compliance</h3>
                </div>
                <p className="text-blue-100 text-sm">
                  Cyber Resilience Act - Nouvelle réglementation européenne
                </p>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Message principal */}
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900 mb-1">
                        ✅ Ce site est conforme CRA
                      </p>
                      <p className="text-sm text-green-700">
                        Notre plateforme respecte déjà les exigences de cybersécurité du futur règlement européen CRA (2025-2027).
                      </p>
                    </div>
                  </div>

                  {/* Question marketing */}
                  <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <Warning className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-orange-900 mb-1">
                        🤔 Et votre entreprise ?
                      </p>
                      <p className="text-sm text-orange-700">
                        Êtes-vous prêts pour les nouvelles obligations de cybersécurité ? 
                        Les entreprises ont jusqu'à <strong>2027</strong> pour se conformer.
                      </p>
                    </div>
                  </div>

                  {/* Points clés CRA */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      📋 Points clés du CRA :
                    </h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Sécurité des produits connectés</li>
                      <li>• Tests de vulnérabilités obligatoires</li>
                      <li>• Documentation de cybersécurité</li>
                      <li>• Gestion des incidents de sécurité</li>
                    </ul>
                  </div>

                  {/* Boutons d'action */}
                  <div className="space-y-3 pt-2">
                    <Button 
                      onClick={handleContactClick}
                      className="w-full btn-primary-3d btn-icon-enhanced"
                      size="lg"
                    >
                      <Shield className="w-4 h-4" />
                      Audit CRA gratuit
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleNotNow}
                      className="w-full btn-secondary-3d"
                    >
                      Plus tard
                    </Button>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                      🎯 <strong>Offre limitée :</strong> Premier audit CRA gratuit pour les 10 premières entreprises
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
