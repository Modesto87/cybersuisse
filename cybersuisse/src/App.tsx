import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import PentestPage from './components/PentestPage'
import SurveillancePage from './components/SurveillancePage'
import AuditCRAPage from './components/AuditCRAPage'
import DeveloppementPage from './components/DeveloppementPage'
import DFIRPage from './components/DFIRPage'
import DataRecoveryPage from './components/DataRecoveryPage'
import ContactPage from './components/ContactPage'
import CGVPage from './components/CGVPage'
import PolitiqueConfidentialitePage from './components/PolitiqueConfidentialitePage'
import MentionsLegalesPage from './components/MentionsLegalesPage'
import SecurityPage from './components/SecurityPage'
import CookieManagerPage from './components/CookieManagerPage'

type PageType = 'home' | 'about' | 'pentest' | 'surveillance' | 'audit-cra' | 'developpement' | 'dfir' | 'data-recovery' | 'contact' | 'cgv' | 'politique-confidentialite' | 'mentions-legales' | 'security' | 'cookies'

export type NavigationFunction = (page: PageType) => void;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  // Add wrapper function to handle string to PageType conversion
  const handleNavigate = (page: string) => {
    const pageType = page as PageType
    // Map page types to routes
    const routeMap: Record<PageType, string> = {
      'home': '/',
      'about': '/about',
      'pentest': '/pentest',
      'surveillance': '/surveillance',
      'audit-cra': '/audit-cra',
      'developpement': '/developpement',
      'dfir': '/dfir',
      'data-recovery': '/data-recovery',
      'contact': '/contact',
      'cgv': '/cgv',
      'politique-confidentialite': '/politique-confidentialite',
      'mentions-legales': '/mentions-legales',
      'security': '/security',
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
      '/surveillance': 'surveillance',
      '/audit-cra': 'audit-cra',
      '/developpement': 'developpement',
      '/dfir': 'dfir',
      '/data-recovery': 'data-recovery',
      '/contact': 'contact',
      '/cgv': 'cgv',
      '/politique-confidentialite': 'politique-confidentialite',
      '/mentions-legales': 'mentions-legales',
      '/security': 'security',
      '/cookies': 'cookies'
    }
    return routeMap[path] || 'home'
  }

  const currentPage = getCurrentPage()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1"
        >
          <Routes>
            <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
            <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
            <Route path="/pentest" element={<PentestPage onNavigate={handleNavigate} />} />
            <Route path="/surveillance" element={<SurveillancePage onNavigate={handleNavigate} />} />
            <Route path="/audit-cra" element={<AuditCRAPage onNavigate={handleNavigate} />} />
            <Route path="/developpement" element={<DeveloppementPage onNavigate={handleNavigate} />} />
            <Route path="/dfir" element={<DFIRPage onNavigate={handleNavigate} />} />
            <Route path="/data-recovery" element={<DataRecoveryPage onNavigate={handleNavigate} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cgv" element={<CGVPage onNavigate={handleNavigate} />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={handleNavigate} />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage onNavigate={handleNavigate} />} />
            <Route path="/security" element={<SecurityPage onNavigate={handleNavigate} />} />
            <Route path="/cookies" element={<CookieManagerPage onNavigate={handleNavigate} />} />
          </Routes>
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