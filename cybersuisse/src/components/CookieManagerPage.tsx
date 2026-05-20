import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { motion } from 'framer-motion'
import { Cookie, Shield, ChartBar, Wrench, Gear } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useTranslation } from 'react-i18next'
import { applyPageSeo, setRobotsMeta, DEFAULT_ROBOTS } from '@/components/SEOHelpers'

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
  const { i18n } = useTranslation()
  const [cookiePreferences, setCookiePreferences] = useLocalStorage<CookiePreferences>('cookie-preferences', {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    applyPageSeo({
      title: 'Gestion des cookies — CyberSuisse',
      description: 'Gérez vos préférences en matière de cookies sur le site CyberSuisse (analytique, marketing, fonctionnel).',
      path: '/cookies'
    })
    setRobotsMeta('noindex, nofollow')
    return () => {
      setRobotsMeta(DEFAULT_ROBOTS)
    }
  }, [])

  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        title: 'Cookie Control Center 🍪',
        subtitle: 'Your personalized dashboard to manage cookie preferences. Every change is applied instantly!',
        securityTitle: 'Security and Privacy',
        securityText: 'We respect your privacy and use only necessary cookies by default.',
        acceptAll: 'Accept all cookies',
        rejectAll: 'Reject all (except necessary)',
        alwaysActive: 'Always active - Required for operation',
        enabled: 'Enabled - Improves your experience',
        moreInfoTitle: 'Additional Information',
        moreInfo: [
          'Cookies are stored securely with strict security settings',
          'No personally identifiable data is collected without your explicit consent',
          'You can clear all cookies at any time in your browser settings',
          'Analytics data is anonymized and used only to improve our services'
        ],
        privacyLink: 'Privacy Policy',
        cgvLink: 'Terms and Conditions',
        categories: {
          necessary: {
            title: 'Necessary Cookies',
            description: 'These cookies are essential for the site to function. They enable basic features such as secure navigation and access to secure areas of the website.',
            details: 'Includes session, authentication, and CSRF security cookies.',
            emoji: '🛡️'
          },
          functional: {
            title: 'Functional Cookies',
            description: 'These cookies improve features and personalization, such as remembering your language preferences and display settings.',
            details: 'Stores user preferences and customized settings.',
            emoji: '⚙️'
          },
          analytics: {
            title: 'Analytics Cookies',
            description: 'These cookies help us understand how you use our site to improve it. All collected data is anonymized and used only for statistics.',
            details: 'Google Analytics with IP anonymization and aggregated data only.',
            emoji: '📊'
          },
          marketing: {
            title: 'Marketing Cookies',
            description: 'These cookies are used to show content and ads tailored to your interests on this site and partner sites.',
            details: 'Used for content personalization and targeted marketing.',
            emoji: '🎯'
          }
        }
      }
    : language === 'pt'
      ? {
          title: 'Centro de Controlo de Cookies 🍪',
          subtitle: 'O seu painel personalizado para gerir preferências de cookies. Cada alteração é aplicada instantaneamente!',
          securityTitle: 'Segurança e Privacidade',
          securityText: 'Respeitamos a sua privacidade e usamos apenas cookies necessários por defeito.',
          acceptAll: 'Aceitar todos os cookies',
          rejectAll: 'Rejeitar todos (exceto necessários)',
          alwaysActive: 'Sempre ativo - Necessário para o funcionamento',
          enabled: 'Ativado - Melhora a sua experiência',
          moreInfoTitle: 'Informações Adicionais',
          moreInfo: [
            'Os cookies são armazenados de forma segura com definições rigorosas',
            'Nenhum dado pessoal identificável é recolhido sem consentimento explícito',
            'Pode apagar todos os cookies a qualquer momento nas definições do navegador',
            'Os dados analíticos são anonimizados e usados apenas para melhorar os serviços'
          ],
          privacyLink: 'Política de Privacidade',
          cgvLink: 'Termos e Condições',
          categories: {
            necessary: {
              title: 'Cookies Necessários',
              description: 'Estes cookies são essenciais para o funcionamento do site. Permitem funcionalidades básicas como navegação segura e acesso a áreas protegidas.',
              details: 'Inclui cookies de sessão, autenticação e segurança CSRF.',
              emoji: '🛡️'
            },
            functional: {
              title: 'Cookies Funcionais',
              description: 'Estes cookies melhoram funcionalidades e personalização, como lembrar preferências de idioma e de visualização.',
              details: 'Armazenam preferências do utilizador e definições personalizadas.',
              emoji: '⚙️'
            },
            analytics: {
              title: 'Cookies Analíticos',
              description: 'Ajudam-nos a entender como utiliza o site para melhorá-lo. Todos os dados são anonimizados e usados apenas para estatísticas.',
              details: 'Google Analytics com anonimização de IP e dados agregados apenas.',
              emoji: '📊'
            },
            marketing: {
              title: 'Cookies de Marketing',
              description: 'Estes cookies são usados para apresentar conteúdos e anúncios adaptados aos seus interesses neste site e em sites parceiros.',
              details: 'Usados para personalização de conteúdo e marketing direcionado.',
              emoji: '🎯'
            }
          }
        }
      : {
          title: 'Centre de Contrôle des Cookies 🍪',
          subtitle: 'Votre tableau de bord personnalisé pour gérer vos préférences de cookies. Chaque modification est appliquée instantanément !',
          securityTitle: 'Sécurité et Confidentialité',
          securityText: 'Nous respectons votre vie privée et utilisons uniquement les cookies nécessaires par défaut.',
          acceptAll: 'Accepter tous les cookies',
          rejectAll: 'Rejeter tous (sauf nécessaires)',
          alwaysActive: 'Toujours actifs - Requis pour le fonctionnement',
          enabled: 'Activé - Améliore votre expérience',
          moreInfoTitle: 'Informations Supplémentaires',
          moreInfo: [
            'Les cookies sont stockés de manière sécurisée avec des paramètres de sécurité stricts',
            'Aucune donnée personnelle identifiable n\'est collectée sans votre consentement explicite',
            'Vous pouvez effacer tous les cookies à tout moment dans les paramètres de votre navigateur',
            'Les données analytiques sont anonymisées et utilisées uniquement pour améliorer nos services'
          ],
          privacyLink: 'Politique de Confidentialité',
          cgvLink: 'CGV',
          categories: {
            necessary: {
              title: 'Cookies Nécessaires',
              description: "Ces cookies sont essentiels au fonctionnement du site. Ils permettent les fonctionnalités de base comme la navigation sécurisée et l'accès aux zones sécurisées du site web.",
              details: "Inclut les cookies de session, d'authentification et de sécurité CSRF.",
              emoji: '🛡️'
            },
            functional: {
              title: 'Cookies Fonctionnels',
              description: "Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site, comme retenir vos préférences de langue et vos paramètres d'affichage.",
              details: 'Stockent les préférences utilisateur et les paramètres personnalisés.',
              emoji: '⚙️'
            },
            analytics: {
              title: 'Cookies Analytiques',
              description: "Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer. Toutes les données collectées sont anonymisées et utilisées uniquement à des fins statistiques.",
              details: 'Google Analytics avec anonymisation IP et données agrégées uniquement.',
              emoji: '📊'
            },
            marketing: {
              title: 'Cookies Marketing',
              description: "Ces cookies sont utilisés pour vous proposer des contenus et publicités adaptés à vos intérêts sur ce site et d'autres sites web partenaires.",
              details: 'Utilisés pour la personnalisation du contenu et le marketing ciblé.',
              emoji: '🎯'
            }
          }
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
      title: copy.categories.necessary.title,
      description: copy.categories.necessary.description,
      details: copy.categories.necessary.details,
      required: true,
      color: 'from-green-400 to-emerald-500',
      emoji: copy.categories.necessary.emoji
    },
    {
      key: 'functional' as keyof CookiePreferences,
      icon: <Wrench className="w-5 h-5" />,
      title: copy.categories.functional.title,
      description: copy.categories.functional.description,
      details: copy.categories.functional.details,
      required: false,
      color: 'from-blue-400 to-cyan-500',
      emoji: copy.categories.functional.emoji
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: <ChartBar className="w-5 h-5" />,
      title: copy.categories.analytics.title,
      description: copy.categories.analytics.description,
      details: copy.categories.analytics.details,
      required: false,
      color: 'from-purple-400 to-pink-500',
      emoji: copy.categories.analytics.emoji
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: <Cookie className="w-5 h-5" />,
      title: copy.categories.marketing.title,
      description: copy.categories.marketing.description,
      details: copy.categories.marketing.details,
      required: false,
      color: 'from-orange-400 to-brand-amber-hover',
      emoji: copy.categories.marketing.emoji
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
                <Cookie className="w-8 h-8 text-fg" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Gear className="w-3 h-3 text-fg" />
              </motion.div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {copy.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.subtitle}
            </p>
          </div>

          <Card className="mb-8 p-6 bg-card border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{copy.securityTitle}</h3>
                <p className="text-sm text-muted-foreground">{copy.securityText}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                {copy.acceptAll}
              </Button>
              <Button variant="outline" onClick={handleRejectAll}>
                {copy.rejectAll}
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
                <Card className="p-6 bg-card border-border/50 hover:bg-card/70 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-fg text-xl shadow-lg`}
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
                            ● {copy.alwaysActive}
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
                            ✅ {copy.enabled}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-card border-border/50">
            <h3 className="font-semibold mb-3">{copy.moreInfoTitle}</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              {copy.moreInfo.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button 
                variant="outline" 
                onClick={() => onNavigate('politique-confidentialite')}
                className="text-sm"
              >
                {copy.privacyLink}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onNavigate('mentions-legales')}
                className="text-sm"
              >
                {language === 'en' ? 'Legal Notice' : language === 'pt' ? 'Aviso Legal' : 'Mentions Légales'}
              </Button>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="text-muted-foreground hover:text-foreground"
            >
              {language === 'en' ? 'Back to home' : language === 'pt' ? 'Voltar ao início' : "Retour à l'accueil"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CookieManager
