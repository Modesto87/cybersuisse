import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, Shield, Target, MagnifyingGlass, Code, HardDrive, Envelope } from '@phosphor-icons/react'
import Logo from './Logo'

type PageType = 'home' | 'about' | 'pentest' | 'osint' | 'developpement' | 'data-recovery' | 'contact' | 'cgv' | 'politique-confidentialite' | 'mentions-legales' | 'cookies'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: PageType) => void
}

const navigationItems = [
  { id: 'home', label: 'Accueil', icon: Shield },
  { id: 'about', label: 'À Propos', icon: Shield },
  { id: 'pentest', label: 'Pentest', icon: Target },
  { id: 'osint', label: 'OSINT', icon: MagnifyingGlass },
  { id: 'developpement', label: 'Développement', icon: Code },
  { id: 'data-recovery', label: 'Récupération', icon: HardDrive },
  { id: 'contact', label: 'Contact', icon: Envelope }
] as const

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (page: typeof navigationItems[number]['id']) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-red-900/30 shadow-lg cs-shadow-nav-scrolled' 
            : 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-red-900/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="cursor-pointer"
              onClick={() => handleNavigation('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo size="md" showText={true} />
            </motion.div>

            {/* Desktop Navigation - RED TEAM */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-[#1A1A1A]/80 rounded-2xl p-2 backdrop-blur-sm border border-red-900/30 shadow-lg">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = currentPage === item.id
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => handleNavigation(item.id)}
                        className={`relative px-4 py-3 mx-1 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md hover:from-red-500 hover:to-red-600 cs-shadow-glow-red-20" 
                            : "hover:bg-red-950/50 text-gray-300 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 relative z-10">
                          <Icon 
                            size={18} 
                            className={`transition-transform duration-300 ${
                              isActive ? "scale-110 text-white" : "group-hover:scale-105 text-red-400"
                            }`}
                          />
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </div>
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl opacity-0 group-hover:opacity-100"
                          layoutId={isActive ? "activeTab" : undefined}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 w-1 h-1 bg-orange-400 rounded-full cs-shadow-glow-orange-8-strong"
                            layoutId="activeIndicator"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{ x: "-50%" }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button - RED TEAM */}
            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="relative bg-[#1A1A1A]/80 border-red-900/40 backdrop-blur-sm shadow-lg hover:bg-red-950/50 hover:border-red-600/50 transition-all duration-300"
                      aria-label="Ouvrir le menu de navigation"
                    >
                      <AnimatePresence mode="wait">
                        {mobileOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X size={20} className="text-red-400" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <List size={20} className="text-red-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                
                {/* Mobile Sheet - RED TEAM DARK */}
                <SheetContent 
                  side="right" 
                  className="w-80 p-0 bg-[#0A0A0A]/98 backdrop-blur-xl border-l border-red-900/30 shadow-2xl"
                >
                  <motion.div 
                    className="flex flex-col h-full"
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-red-900/30 bg-gradient-to-r from-red-950/30 to-transparent">
                      <Logo size="sm" showText={true} />
                      <motion.div
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileOpen(false)}
                          className="h-8 w-8 text-red-400 hover:bg-red-950/50"
                        >
                          <X size={16} />
                        </Button>
                      </motion.div>
                    </div>
                    
                    {/* Navigation Links - RED TEAM */}
                    <div className="flex flex-col p-6 flex-1 space-y-2">
                      <p className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                        Navigation
                      </p>
                      
                      {navigationItems.map((item, index) => {
                        const Icon = item.icon
                        const isActive = currentPage === item.id
                        
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.1 }}
                          >
                            <Button
                              variant="ghost"
                              onClick={() => handleNavigation(item.id)}
                              className={`w-full justify-start h-14 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                                isActive 
                                  ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg cs-shadow-glow-red-20-soft" 
                                  : "hover:bg-red-950/50 hover:translate-x-2 text-gray-300 hover:text-white"
                              }`}
                            >
                              <div className="flex items-center gap-4 relative z-10">
                                <div className={`p-2 rounded-lg transition-all duration-300 ${
                                  isActive 
                                    ? "bg-white/20" 
                                    : "bg-red-950/50 group-hover:bg-red-900/50"
                                }`}>
                                  <Icon 
                                    size={20} 
                                    className={`transition-all duration-300 ${
                                      isActive ? "scale-110 text-white" : "group-hover:scale-105 text-red-400"
                                    }`}
                                  />
                                </div>
                                <div className="flex-1">
                                  <span className="font-medium text-base">
                                    {item.label}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Active indicator */}
                              {isActive && (
                                <motion.div
                                  className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full cs-shadow-glow-orange-10"
                                  layoutId="mobileActiveIndicator"
                                  initial={{ scaleY: 0 }}
                                  animate={{ scaleY: 1 }}
                                />
                              )}
                              
                              {/* Hover background */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 rounded-xl"
                                transition={{ duration: 0.3 }}
                              />
                            </Button>
                          </motion.div>
                        )
                      })}
                    </div>
                    
                    {/* Footer - RED TEAM */}
                    <motion.div 
                      className="p-6 border-t border-red-900/30 bg-gradient-to-r from-red-950/30 to-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center space-y-2">
                        <p className="text-sm font-medium text-white">
                          Modesto Cybersécurité
                        </p>
                        <p className="text-xs text-gray-500">
                          Expert en sécurité offensive
                        </p>
                        <p className="text-xs text-gray-600">
                          © 2024 - Tous droits réservés
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}