import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, Shield, Target, MagnifyingGlass, Code, HardDrive, Envelope, Star } from '@phosphor-icons/react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

type PageType =
  | 'home'
  | 'about'
  | 'pentest'
  | 'osint'
  | 'developpement'
  | 'data-recovery'
  | 'abonnements'
  | 'contact'
  | 'cgv'
  | 'politique-confidentialite'
  | 'mentions-legales'
  | 'cookies'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: PageType) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navigationItems = [
    { id: 'home', label: t('nav.home'), icon: Shield },
    { id: 'about', label: t('nav.about'), icon: Shield },
    { id: 'pentest', label: t('nav.pentest'), icon: Target },
    { id: 'osint', label: t('nav.osint'), icon: MagnifyingGlass },
    { id: 'developpement', label: t('nav.developpement'), icon: Code },
    { id: 'data-recovery', label: t('nav.dataRecovery'), icon: HardDrive },
    { id: 'abonnements', label: t('nav.abonnements'), icon: Star },
    { id: 'contact', label: t('nav.contact'), icon: Envelope },
  ] as const

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const handleNavigation = (page: PageType) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy border-b border-white/10">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavigation('home')}
              className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-md"
              aria-label={t('nav.home')}
            >
              <Logo size="sm" showText={true} />
            </button>

            {/* Desktop Navigation */}
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
                      isActive
                        ? 'text-fg'
                        : 'text-fg-secondary hover:text-fg',
                    ].join(' ')}
                  >
                    <Icon size={16} weight={isActive ? 'fill' : 'regular'} />
                    <span>{item.label}</span>
                    {/* 2px amber underline for active route */}
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

            {/* Right side: language switcher + mobile menu */}
            <div className="flex items-center gap-2">
              {/* Language switcher (desktop + tablet) */}
              <select
                aria-label={t('language.label')}
                value={currentLang}
                onChange={(event) => i18n.changeLanguage(event.target.value)}
                className="hidden md:block bg-bg-inset border border-white/10 text-fg text-sm rounded-md px-2 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              >
                <option value="fr">{t('language.fr')}</option>
                <option value="en">{t('language.en')}</option>
                <option value="pt">{t('language.pt')}</option>
              </select>

              {/* Mobile menu trigger */}
              <div className="lg:hidden">
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-bg-inset border-white/10 text-fg hover:bg-bg-overlay"
                      aria-label={t('nav.openMenu')}
                    >
                      {mobileOpen ? <X size={20} /> : <List size={20} />}
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    className="w-80 p-0 bg-bg border-l border-white/10"
                  >
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <Logo size="sm" showText={true} />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileOpen(false)}
                          className="h-8 w-8 text-fg-secondary hover:text-fg hover:bg-bg-overlay"
                          aria-label={t('nav.closeMenu', { defaultValue: 'Close menu' })}
                        >
                          <X size={16} />
                        </Button>
                      </div>

                      {/* Language switcher (mobile) */}
                      <div className="px-6 pt-4">
                        <select
                          aria-label={t('language.label')}
                          value={currentLang}
                          onChange={(event) => i18n.changeLanguage(event.target.value)}
                          className="w-full bg-bg-inset border border-white/10 text-fg text-sm rounded-md px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                        >
                          <option value="fr">{t('language.fr')}</option>
                          <option value="en">{t('language.en')}</option>
                          <option value="pt">{t('language.pt')}</option>
                        </select>
                      </div>

                      {/* Navigation Links */}
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

                      {/* Footer */}
                      <div className="p-6 border-t border-white/10">
                        <div className="text-center space-y-1">
                          <p className="text-sm font-medium text-fg">Modesto Cybersécurité</p>
                          <p className="text-xs text-fg-secondary">Expert en sécurité offensive</p>
                          <p className="text-xs text-fg-secondary">© 2024 — Tous droits réservés</p>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer matching nav height (h-16 = 64px) */}
      <div className="h-16" />
    </>
  )
}
