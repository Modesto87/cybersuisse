import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { motion } from 'framer-motion'
import { Cookie, Shield, ChartBar, Wrench, Gear } from '@phosphor-icons/react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

// Extend Window interface for Google Analytics and Matomo
declare global {
  interface Window {
    _paq?: unknown[]
  }
  function gtag(...args: unknown[]): void
}

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface CookieManagerProps {
  onNavigate: (page: string) => void
}

const CookieManager = ({ onNavigate }: CookieManagerProps) => {
  const [cookiePreferences, setCookiePreferences] = useLocalStorage<CookiePreferences>('cookie-preferences', {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return
    
    setCookiePreferences(current => ({
      ...current,
      [key]: value
    }))

    // Mettre à jour Google Analytics et Matomo en temps réel
    if (typeof window !== 'undefined') {
      const newPrefs = { ...cookiePreferences, [key]: value }
      
      // Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: newPrefs.analytics ? 'granted' : 'denied',
          ad_storage: newPrefs.marketing ? 'granted' : 'denied',
          functionality_storage: newPrefs.functional ? 'granted' : 'denied',
          personalization_storage: newPrefs.functional ? 'granted' : 'denied'
        })
      }
      
      // Matomo Analytics
      if (window._paq) {
        if (newPrefs.analytics) {
          window._paq.push(['rememberCookieConsentGiven']);
        } else {
          window._paq.push(['forgetCookieConsentGiven']);
        }
      }
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setCookiePreferences(allAccepted)
    
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          functionality_storage: 'granted',
          personalization_storage: 'granted'
        })
      }
      
      // Matomo Analytics
      if (window._paq) {
        window._paq.push(['rememberCookieConsentGiven']);
      }
    }
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setCookiePreferences(onlyNecessary)
    
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied'
        })
      }
      
      // Matomo Analytics
      if (window._paq) {
        window._paq.push(['forgetCookieConsentGiven']);
      }
    }
  }

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: <Shield className="w-5 h-5" />,
      title: 'Cookies Nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site. Ils permettent les fonctionnalités de base comme la navigation sécurisée et l\'accès aux zones sécurisées du site web.',
      details: 'Inclut les cookies de session, d\'authentification et de sécurité CSRF.',
      required: true,
      color: 'from-green-400 to-emerald-500',
      emoji: '🛡️'
    },
    {
      key: 'functional' as keyof CookiePreferences,
      icon: <Wrench className="w-5 h-5" />,
      title: 'Cookies Fonctionnels',
      description: 'Ces cookies permettent d\'améliorer les fonctionnalités et la personnalisation du site, comme retenir vos préférences de langue et vos paramètres d\'affichage.',
      details: 'Stockent les préférences utilisateur et les paramètres personnalisés.',
      required: false,
      color: 'from-blue-400 to-cyan-500',
      emoji: '⚙️'
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: <ChartBar className="w-5 h-5" />,
      title: 'Cookies Analytiques',
      description: 'Ces cookies nous aident à comprendre comment vous utilisez notre site pour l\'améliorer. Toutes les données collectées sont anonymisées et utilisées uniquement à des fins statistiques.',
      details: 'Google Analytics avec anonymisation IP et données agrégées uniquement.',
      required: false,
      color: 'from-purple-400 to-pink-500',
      emoji: '📊'
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: <Cookie className="w-5 h-5" />,
      title: 'Cookies Marketing',
      description: 'Ces cookies sont utilisés pour vous proposer des contenus et publicités adaptés à vos intérêts sur ce site et d\'autres sites web partenaires.',
      details: 'Utilisés pour la personnalisation du contenu et le marketing ciblé.',
      required: false,
      color: 'from-orange-400 to-red-500',
      emoji: '🎯'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Cookie className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Gear className="w-3 h-3 text-white" />
              </motion.div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Centre de Contrôle des Cookies 🍪
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Votre tableau de bord personnalisé pour gérer vos préférences de cookies. 
              Chaque modification est appliquée instantanément !
            </p>
          </div>

          <Card className="mb-8 p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Sécurité et Confidentialité</h3>
                <p className="text-sm text-muted-foreground">
                  Nous respectons votre vie privée et utilisons uniquement les cookies nécessaires par défaut.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                Accepter tous les cookies
              </Button>
              <Button variant="outline" onClick={handleRejectAll}>
                Rejeter tous (sauf nécessaires)
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {type.emoji}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{type.title}</h3>
                        <motion.div whileTap={{ scale: 0.95 }}>
                          <Switch
                            checked={cookiePreferences[type.key]}
                            onCheckedChange={(checked) => updatePreference(type.key, checked)}
                            disabled={type.required}
                          />
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {type.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        {type.details}
                      </p>
                      {type.required && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-2 px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-full inline-block"
                        >
                          <p className="text-xs text-yellow-600 font-medium">
                            ⚡ Toujours actifs - Requis pour le fonctionnement
                          </p>
                        </motion.div>
                      )}
                      {!type.required && cookiePreferences[type.key] && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="mt-2 px-3 py-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-full inline-block"
                        >
                          <p className="text-xs text-green-600 font-medium">
                            ✅ Activé - Améliore votre expérience
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="font-semibold mb-3">Informations Supplémentaires</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• Les cookies sont stockés de manière sécurisée avec des paramètres de sécurité stricts</p>
              <p>• Aucune donnée personnelle identifiable n'est collectée sans votre consentement explicite</p>
              <p>• Vous pouvez effacer tous les cookies à tout moment dans les paramètres de votre navigateur</p>
              <p>• Les données analytiques sont anonymisées et utilisées uniquement pour améliorer nos services</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button 
                variant="outline" 
                onClick={() => onNavigate('politique-confidentialite')}
                className="text-sm"
              >
                Politique de Confidentialité
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onNavigate('mentions-legales')}
                className="text-sm"
              >
                Mentions Légales
              </Button>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="text-muted-foreground hover:text-foreground"
            >
              Retour à l'accueil
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CookieManager