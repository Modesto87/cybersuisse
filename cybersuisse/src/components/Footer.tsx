import Logo from './Logo'
import { Envelope, Phone, MapPin } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer className="bg-bg-inset border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-4" />
            <p className="text-fg-secondary text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-fg mb-4">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2 text-sm text-fg-secondary">
              <li className="hover:text-brand-amber transition-colors cursor-pointer">
                {t('footer.services.pentest')}
              </li>
              <li className="hover:text-brand-amber transition-colors cursor-pointer">
                {t('footer.services.redTeam')}
              </li>
              <li className="hover:text-brand-amber transition-colors cursor-pointer">
                {t('footer.services.secureDev')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-fg mb-4">{t('footer.contactTitle')}</h4>
            <div className="space-y-3 text-sm text-fg-secondary">
              <div className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                <Envelope size={16} className="text-brand-amber" />
                <span>modesto@cybersuisse.ch</span>
              </div>
              <div className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                <Phone size={16} className="text-brand-amber" />
                <span>+41 78 208 95 45</span>
              </div>
              <div className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                <MapPin size={16} className="text-brand-amber" />
                <span>Bienne/Biel, Canton de Berne, Suisse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-fg-secondary gap-4">
          <p>{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center gap-4">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('cgv')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  {t('footer.links.cgv')}
                </button>
                <button
                  onClick={() => onNavigate('politique-confidentialite')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  {t('footer.links.privacy')}
                </button>
                <button
                  onClick={() => onNavigate('mentions-legales')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  {t('footer.links.legal')}
                </button>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-brand-amber transition-colors duration-150 underline-offset-4 hover:underline"
                >
                  {t('footer.links.cookies')}
                </button>
              </>
            )}
            <span className="text-fg-secondary">{t('footer.badge')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
