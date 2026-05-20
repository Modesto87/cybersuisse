import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Gear, X, Shield, ChartBar, Wrench, Eye, Check } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

// Type definitions are now in src/types/analytics.d.ts

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const { i18n } = useTranslation()
  const [cookieConsent, setCookieConsent] = useLocalStorage<string | null>('cookie-consent', null)
  const [cookiePreferences, setCookiePreferences] = useLocalStorage<CookiePreferences>('cookie-preferences', {
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  })
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Show banner if consent hasn't been given
    if (cookieConsent === null) {
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1500) // Show after 1.5 seconds
      return () => clearTimeout(timer)
    }
  }, [cookieConsent])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: Date.now()
    }
    setCookieConsent('accepted')
    setCookiePreferences(consent)
    setShowBanner(false)
    updateTrackingConsent(consent)
  }

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: Date.now()
    }
    setCookieConsent('rejected')
    setCookiePreferences(consent)
    setShowBanner(false)
    updateTrackingConsent(consent)
  }

  const handleSavePreferences = () => {
    const consent = {
      ...cookiePreferences,
      timestamp: Date.now()
    }
    setCookieConsent('customized')
    setShowBanner(false)
    setShowSettings(false)
    updateTrackingConsent(consent)
  }

  const updateTrackingConsent = (consent: CookiePreferences) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: consent.analytics ? 'granted' : 'denied',
          ad_storage: consent.marketing ? 'granted' : 'denied',
          functionality_storage: consent.functional ? 'granted' : 'denied',
          personalization_storage: consent.marketing ? 'granted' : 'denied'
        })
      }
      
      // Matomo Analytics
      if (window._paq) {
        if (consent.analytics) {
          window._paq.push(['rememberCookieConsentGiven'])
        } else {
          window._paq.push(['forgetCookieConsentGiven'])
        }
      }

      // Notify static consent-gated loaders in index.html (GA, Metricool, ...).
      window.dispatchEvent(new CustomEvent('cookieConsent:granted', { detail: consent }))
    }
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return // Cannot disable necessary cookies
    
    setCookiePreferences(current => ({
      ...current,
      [key]: value
    }))
  }

  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        title: 'Cookie Management',
        description: 'We use cookies to ensure proper site operation, analyze traffic, and improve your experience.',
        acceptAll: 'Accept All',
        rejectAll: 'Reject All',
        customize: 'Customize Preferences',
        preferencesTitle: 'Cookie Preferences',
        required: 'Required',
        cookieLabel: 'cookie',
        cookiesLabel: 'cookies',
        categories: {
          necessary: {
            title: 'Necessary Cookies',
            description: 'Essential for secure website operation and cannot be disabled.'
          },
          analytics: {
            title: 'Analytics Cookies',
            description: 'Help us analyze site usage to improve our services. All data is anonymized.'
          },
          functional: {
            title: 'Functional Cookies',
            description: 'Improve site features and remember your preferences.'
          },
          marketing: {
            title: 'Marketing Cookies',
            description: 'Used to personalize ads and measure campaign effectiveness.'
          }
        }
      }
    : language === 'pt'
      ? {
          title: 'Gestão de Cookies',
          description: 'Usamos cookies para garantir o funcionamento do site, analisar o tráfego e melhorar a sua experiência.',
          acceptAll: 'Aceitar tudo',
          rejectAll: 'Rejeitar tudo',
          customize: 'Personalizar preferências',
          preferencesTitle: 'Preferências de Cookies',
          required: 'Obrigatório',
          cookieLabel: 'cookie',
          cookiesLabel: 'cookies',
          categories: {
            necessary: {
              title: 'Cookies Necessários',
              description: 'Essenciais para o funcionamento seguro do site e não podem ser desativados.'
            },
            analytics: {
              title: 'Cookies Analíticos',
              description: 'Ajudam-nos a analisar o uso do site para melhorar os nossos serviços. Todos os dados são anonimizados.'
            },
            functional: {
              title: 'Cookies Funcionais',
              description: 'Melhoram as funcionalidades do site e memorizam as suas preferências.'
            },
            marketing: {
              title: 'Cookies de Marketing',
              description: 'Usados para personalizar anúncios e medir a eficácia das campanhas.'
            }
          }
        }
      : {
          title: 'Gestion des Cookies',
          description: 'Nous utilisons des cookies pour assurer le bon fonctionnement de notre site, analyser notre trafic et améliorer votre expérience utilisateur.',
          acceptAll: 'Accepter Tout',
          rejectAll: 'Refuser Tout',
          customize: 'Personnaliser les Préférences',
          preferencesTitle: 'Préférences de Cookies',
          required: 'Requis',
          cookieLabel: 'cookie',
          cookiesLabel: 'cookies',
          categories: {
            necessary: {
              title: 'Cookies Nécessaires',
              description: 'Ces cookies sont essentiels au fonctionnement sécurisé du site web et ne peuvent pas être désactivés.'
            },
            analytics: {
              title: 'Cookies Analytiques',
              description: 'Nous permettent d\'analyser l\'utilisation du site pour améliorer nos services. Toutes les données sont anonymisées.'
            },
            functional: {
              title: 'Cookies Fonctionnels',
              description: 'Améliorent les fonctionnalités du site et permettent de mémoriser vos préférences.'
            },
            marketing: {
              title: 'Cookies Marketing',
              description: 'Utilisés pour personnaliser les publicités et mesurer l\'efficacité des campagnes publicitaires.'
            }
          }
        })

  const cookieCategories = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: copy.categories.necessary.title,
      description: copy.categories.necessary.description,
      required: true,
      count: 3
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: ChartBar,
      title: copy.categories.analytics.title,
      description: copy.categories.analytics.description,
      required: false,
      count: 2
    },
    {
      key: 'functional' as keyof CookiePreferences,
      icon: Wrench,
      title: copy.categories.functional.title,
      description: copy.categories.functional.description,
      required: false,
      count: 4
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Eye,
      title: copy.categories.marketing.title,
      description: copy.categories.marketing.description,
      required: false,
      count: 5
    }
  ]

  if (cookieConsent !== null && !showSettings) {
    return null
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-lg"
        >
          <Card className="bg-bg-inset border border-white/10 shadow-2xl shadow-gray-900/20">
            <AnimatePresence mode="wait">
              {!showSettings ? (
                <motion.div
                  key="banner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {copy.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {copy.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-primary hover:bg-primary/90 text-fg font-medium h-11"
                      >
                        <Check size={16} className="mr-2" />
                        {copy.acceptAll}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleRejectAll}
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-11"
                      >
                        {copy.rejectAll}
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(true)}
                      className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-10"
                    >
                      <Gear size={16} className="mr-2" />
                      {copy.customize}
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {copy.preferencesTitle}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(false)}
                      className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                    >
                      <X size={18} />
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                    {cookieCategories.map((category) => {
                      const Icon = category.icon
                      const isEnabled = cookiePreferences[category.key]
                      
                      return (
                        <div
                          key={category.key}
                          className="p-4 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <Icon size={18} className="text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900 text-sm">
                                  {category.title}
                                </h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded font-medium">
                                    {category.count} {category.count === 1 ? copy.cookieLabel : copy.cookiesLabel}
                                  </span>
                                  {category.required ? (
                                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded font-medium">
                                      {copy.required}
                                    </span>
                                  ) : (
                                    <Switch
                                      checked={isEnabled}
                                      onCheckedChange={(checked) => updatePreference(category.key, checked)}
                                      className="data-[state=checked]:bg-primary"
                                    />
                                  )}
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Button
                      variant="outline"
                      onClick={() => setShowSettings(false)}
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-11"
                    >
                      Annuler
                    </Button>
                    <Button
                      onClick={handleSavePreferences}
                      className="flex-1 bg-primary hover:bg-primary/90 text-fg h-11"
                    >
                      <Check size={16} className="mr-2" />
                      Confirmer
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}