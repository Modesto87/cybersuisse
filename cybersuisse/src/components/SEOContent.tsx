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
      case 'pentest':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.pentest.title')}</h1>
            <p>
              {description || t('seo.pentest.description')}
            </p>
            <p>
              {t('seo.pentest.zone')}
            </p>
            <p>
              {t('seo.pentest.deliverables')}
            </p>
          </div>
        )
      case 'audit-cra':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.auditCra.title')}</h1>
            <p>{description || t('seo.auditCra.description')}</p>
            <p>{t('seo.auditCra.extra')}</p>
          </div>
        )
      case 'osint':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.osint.title')}</h1>
            <p>
              {description || t('seo.osint.description')}
            </p>
            <p>
              {t('seo.osint.audience')}
            </p>
            <p>
              {t('seo.osint.useCases')}
            </p>
            <p>{t('seo.osint.conclusion')}</p>
          </div>
        )
      case 'developpement':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.development.title')}</h1>
            <p>
              {description || t('seo.development.description')}
            </p>
            <p>
              {t('seo.development.audience')}
            </p>
            <p>
              {t('seo.development.approach')}
            </p>
          </div>
        )
      case 'data-recovery':
        return (
          <div className="sr-only">
            <h1>{title || t('seo.dataRecovery.title')}</h1>
            <p>
              {description || t('seo.dataRecovery.description')}
            </p>
            <p>
              {t('seo.dataRecovery.commonCases')}
            </p>
            <p>
              {t('seo.dataRecovery.policy')}
            </p>
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