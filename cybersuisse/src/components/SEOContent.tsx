import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface SEOContentProps {
  page: string
  title?: string
  description?: string
}

export default function SEOContent({ page, title, description }: SEOContentProps) {
  const { t } = useTranslation()

  const getLocalContent = () => {
    switch (page) {
      case 'home':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.home.title')}</h1>
            <p>{description || t('seo.home.description')}</p>
            <p>{t('seo.home.extra')}</p>
            <address>
              {t('seo.contact.address')}
              <br />{t('seo.contact.phoneLabel')}: +41 78 208 95 45
              <br />{t('seo.contact.emailLabel')}: modesto@cybersuisse.ch
            </address>
          </div>
        )
      case 'about':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.about.title')}</h1>
            <p>{description || t('seo.about.description')}</p>
            <p>{t('seo.about.extra')}</p>
          </div>
        )
      case 'contact':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.contact.title')}</h1>
            <p>{description || t('seo.contact.description')}</p>
            <address>
              {t('seo.contact.phoneLabel')}: +41 78 208 95 45
              <br />{t('seo.contact.emailLabel')}: modesto@cybersuisse.ch
              <br />{t('seo.contact.location')}
            </address>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      {getLocalContent()}
    </motion.div>
  )
}
