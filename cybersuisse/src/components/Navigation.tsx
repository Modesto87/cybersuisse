import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, House, Briefcase, Eye, BookOpen, User, Envelope } from '@phosphor-icons/react'
import Logo from './Logo'

type PageType =
  | 'home'
  | 'services'
  | 'premier-regard'
  | 'ressources'
  | 'about'
  | 'contact'
  | 'cgv'
  | 'politique-confidentialite'
  | 'mentions-legales'
  | 'cookies'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: PageType) => void
}

const navigationItems = [
  { id: 'home' as const, label: 'Accueil', icon: House },
  { id: 'services' as const, label: 'Services', icon: Briefcase },
  { id: 'premier-regard' as const, label: 'Premier Regard', icon: Eye },
  { id: 'ressources' as const, label: 'Ressources', icon: BookOpen },
  { id: 'about' as const, label: 'À propos', icon: User },
  { id: 'contact' as const, label: 'Contact', icon: Envelope },
]

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigation = (page: PageType) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-white/10">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              type="button"
              onClick={() => handleNavigation('home')}
              className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-md"
              aria-label="Accueil"
            >
              <Logo size="sm" showText={true} />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md',
                      'transition-colors duration-150',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber',
                      isActive ? 'text-fg' : 'text-fg-secondary hover:text-fg',
                    ].join(' ')}
                  >
                    <Icon size={16} weight={isActive ? 'fill' : 'regular'} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-amber rounded-full"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-bg-inset border-white/10 text-fg hover:bg-bg-overlay"
                    aria-label="Ouvrir le menu de navigation"
                  >
                    {mobileOpen ? <X size={20} /> : <List size={20} />}
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-80 p-0 bg-bg border-l border-white/10"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                      <Logo size="sm" showText={true} />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(false)}
                        className="h-8 w-8 text-fg-secondary hover:text-fg hover:bg-bg-overlay"
                        aria-label="Fermer le menu"
                      >
                        <X size={16} />
                      </Button>
                    </div>

                    <div className="flex flex-col p-6 flex-1 space-y-1">
                      <p className="text-xs font-semibold text-fg-secondary mb-4 uppercase tracking-wider">
                        Navigation
                      </p>

                      {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = currentPage === item.id
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleNavigation(item.id)}
                            aria-current={isActive ? 'page' : undefined}
                            className={[
                              'w-full flex items-center gap-3 px-3 py-3 rounded-md text-left text-sm font-medium',
                              'transition-colors duration-150',
                              'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber',
                              isActive
                                ? 'bg-bg-overlay text-fg border-l-2 border-brand-amber'
                                : 'text-fg-secondary hover:text-fg hover:bg-bg-inset',
                            ].join(' ')}
                          >
                            <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
                            <span>{item.label}</span>
                          </button>
                        )
                      })}
                    </div>

                    <div className="p-6 border-t border-white/10">
                      <div className="text-center space-y-1">
                        <p className="text-sm font-medium text-fg">CyberSuisse</p>
                        <p className="text-xs text-fg-secondary">Luís Modesto — Biel/Bienne</p>
                        <p className="text-xs text-fg-secondary">© 2025 — Tous droits réservés</p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16" />
    </>
  )
}
