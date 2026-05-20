import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

const HomePage = lazy(() => import('./components/HomePage'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const PremierRegardPage = lazy(() => import('./components/PremierRegardPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const ContactPage = lazy(() => import('./components/ContactPage'))
const CGVPage = lazy(() => import('./components/CGVPage'))
const PolitiqueConfidentialitePage = lazy(() => import('./components/PolitiqueConfidentialitePage'))
const MentionsLegalesPage = lazy(() => import('./components/MentionsLegalesPage'))
const CookieManagerPage = lazy(() => import('./components/CookieManagerPage'))

const PageLoader = () => (
  <div className="min-h-screen bg-bg flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-amber"></div>
  </div>
)

type PageType =
  | 'home'
  | 'services'
  | 'premier-regard'
  | 'about'
  | 'contact'
  | 'cgv'
  | 'politique-confidentialite'
  | 'mentions-legales'
  | 'cookies'

export type NavigationFunction = (page: PageType) => void;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const routeMap: Record<PageType, string> = {
  'home': '/',
  'services': '/services',
  'premier-regard': '/premier-regard',
  'about': '/a-propos',
  'contact': '/contact',
  'cgv': '/cgv',
  'politique-confidentialite': '/politique-confidentialite',
  'mentions-legales': '/mentions-legales',
  'cookies': '/cookies'
}

const reverseRouteMap: Record<string, PageType> = {
  '/': 'home',
  '/services': 'services',
  '/premier-regard': 'premier-regard',
  '/a-propos': 'about',
  '/contact': 'contact',
  '/cgv': 'cgv',
  '/politique-confidentialite': 'politique-confidentialite',
  '/mentions-legales': 'mentions-legales',
  '/cookies': 'cookies'
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'fr'
    }
  }, [])

  const handleNavigate = (page: string) => {
    const target = routeMap[page as PageType]
    if (target) navigate(target)
  }

  const currentPage: PageType = reverseRouteMap[location.pathname] || 'home'

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
              <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
              <Route path="/premier-regard" element={<PremierRegardPage onNavigate={handleNavigate} />} />
              <Route path="/a-propos" element={<AboutPage onNavigate={handleNavigate} />} />
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
