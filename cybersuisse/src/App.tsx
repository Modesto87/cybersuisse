import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import { useTranslation } from 'react-i18next'

// Lazy loading components
const HomePage = lazy(() => import('./components/HomePage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const PentestPage = lazy(() => import('./components/PentestPage'))
const OSINTPage = lazy(() => import('./components/OSINTPage'))
const DeveloppementPage = lazy(() => import('./components/DeveloppementPage'))
const DataRecoveryPage = lazy(() => import('./components/DataRecoveryPage'))
const AbonnementsPage = lazy(() => import('./components/AbonnementsPage'))
const ProtectionPmeEssentielPage = lazy(() => import('./components/ProtectionPmeEssentielPage'))
const ProtectionPmeActivePage = lazy(() => import('./components/ProtectionPmeActivePage'))
const ProtectionPmePremiumPage = lazy(() => import('./components/ProtectionPmePremiumPage'))
const ContactPage = lazy(() => import('./components/ContactPage'))
const CGVPage = lazy(() => import('./components/CGVPage'))
const PolitiqueConfidentialitePage = lazy(() => import('./components/PolitiqueConfidentialitePage'))
const MentionsLegalesPage = lazy(() => import('./components/MentionsLegalesPage'))
const CookieManagerPage = lazy(() => import('./components/CookieManagerPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-bg flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-amber"></div>
  </div>
)

type PageType = 'home' | 'about' | 'pentest' | 'osint' | 'developpement' | 'data-recovery' | 'abonnements' | 'protection-pme-essentiel' | 'protection-pme-active' | 'protection-pme-premium' | 'contact' | 'cgv' | 'politique-confidentialite' | 'mentions-legales' | 'cookies'

export type NavigationFunction = (page: PageType) => void;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const { i18n } = useTranslation()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language || 'fr'
    }
  }, [i18n.language])

  // Add wrapper function to handle string to PageType conversion
  const handleNavigate = (page: string) => {
    const pageType = page as PageType
    // Map page types to routes
    const routeMap: Record<PageType, string> = {
      'home': '/',
      'about': '/about',
      'pentest': '/pentest',
      'osint': '/osint',
      'developpement': '/developpement',
      'data-recovery': '/data-recovery',
      'abonnements': '/abonnements',
      'protection-pme-essentiel': '/abonnements/essentiel',
      'protection-pme-active': '/abonnements/pro',
      'protection-pme-premium': '/abonnements/premium',
      'contact': '/contact',
      'cgv': '/cgv',
      'politique-confidentialite': '/politique-confidentialite',
      'mentions-legales': '/mentions-legales',
      'cookies': '/cookies'
    }
    navigate(routeMap[pageType])
  }

  // Get current page from location
  const getCurrentPage = (): PageType => {
    const path = location.pathname
    const routeMap: Record<string, PageType> = {
      '/': 'home',
      '/about': 'about',
      '/pentest': 'pentest',
      '/osint': 'osint',
      '/developpement': 'developpement',
      '/data-recovery': 'data-recovery',
      '/abonnements': 'abonnements',
      '/abonnements/essentiel': 'protection-pme-essentiel',
      '/abonnements/pro': 'protection-pme-active',
      '/abonnements/premium': 'protection-pme-premium',
      '/contact': 'contact',
      '/cgv': 'cgv',
      '/politique-confidentialite': 'politique-confidentialite',
      '/mentions-legales': 'mentions-legales',
      '/cookies': 'cookies'
    }
    return routeMap[path] || 'home'
  }

  const currentPage = getCurrentPage()

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={reduce ? undefined : pageVariants}
          initial={reduce ? false : "initial"}
          animate={reduce ? undefined : "animate"}
          exit={reduce ? undefined : "exit"}
          transition={reduce ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
          className="flex-1"
        >
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
              <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
              <Route path="/pentest" element={<PentestPage onNavigate={handleNavigate} />} />
              <Route path="/osint" element={<OSINTPage onNavigate={handleNavigate} />} />
              <Route path="/developpement" element={<DeveloppementPage onNavigate={handleNavigate} />} />
              <Route path="/data-recovery" element={<DataRecoveryPage onNavigate={handleNavigate} />} />
              <Route path="/abonnements" element={<AbonnementsPage onNavigate={handleNavigate} />} />
              <Route path="/abonnements/essentiel" element={<ProtectionPmeEssentielPage onNavigate={handleNavigate} />} />
              <Route path="/abonnements/pro" element={<ProtectionPmeActivePage onNavigate={handleNavigate} />} />
              <Route path="/abonnements/premium" element={<ProtectionPmePremiumPage onNavigate={handleNavigate} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cgv" element={<CGVPage onNavigate={handleNavigate} />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={handleNavigate} />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage onNavigate={handleNavigate} />} />
              <Route path="/cookies" element={<CookieManagerPage onNavigate={handleNavigate} />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      
      <Footer onNavigate={handleNavigate} />
      <CookieConsent />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App