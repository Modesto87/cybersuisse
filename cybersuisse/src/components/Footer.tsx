import Logo from './Logo'
import { Envelope, Phone, MapPin } from '@phosphor-icons/react'

interface FooterProps {
  onNavigate?: (page: string) => void
}

const navLinks: Array<{ id: string; label: string }> = [
  { id: 'home', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'premier-regard', label: 'Premier Regard' },
  { id: 'about', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
]

const serviceLinks = [
  'M365 Security Check',
  'Empreinte Numérique',
  'Bouclier Humain',
  'Cap Sécurité',
  'Création de sites web',
  'Récupération de données',
]

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-bg-inset border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identité */}
          <div>
            <Logo size="md" showText={true} className="mb-4" />
            <div className="space-y-3 text-sm text-fg-secondary">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-amber" />
                <span>Biel/Bienne, Suisse</span>
              </div>
              <a
                href="tel:+41782089545"
                className="flex items-center gap-2 hover:text-brand-amber transition-colors"
              >
                <Phone size={16} className="text-brand-amber" />
                <span>078 208 95 45</span>
              </a>
              <a
                href="mailto:modesto@cybersuisse.ch"
                className="flex items-center gap-2 hover:text-brand-amber transition-colors"
              >
                <Envelope size={16} className="text-brand-amber" />
                <span>modesto@cybersuisse.ch</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-fg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-fg-secondary">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(item.id)}
                    className="hover:text-brand-amber transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h4 className="font-semibold text-fg mb-4">Prestations</h4>
            <ul className="space-y-2 text-sm text-fg-secondary">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.('services')}
                    className="hover:text-brand-amber transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-fg-secondary gap-4">
          <p className="text-center md:text-left">
            © 2025 CyberSuisse — Luís Modesto / Consultant indépendant en cybersécurité / Biel/Bienne, Suisse
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('cgv')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  CGV
                </button>
                <button
                  onClick={() => onNavigate('politique-confidentialite')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  Politique de confidentialité
                </button>
                <button
                  onClick={() => onNavigate('mentions-legales')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  Mentions légales
                </button>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  Cookies
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
