import { motion } from 'framer-motion'

// Composant pour générer le sitemap virtuel pour les moteurs de recherche
export const generateSitemap = () => {
  const baseUrl = 'https://cybersuisse.ch'
  const pages = [
    {
      url: `${baseUrl}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0',
      title: 'Expert Cybersécurité Bienne | Pentest & Audit CRA | CyberSuisse'
    },
    {
      url: `${baseUrl}/about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
      title: 'À propos - Modesto Expert Cybersécurité Bienne | Certifications'
    },
    {
      url: `${baseUrl}/pentest`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.9',
      title: 'Tests d\'Intrusion Pentest Bienne | Évaluation Sécurité Suisse'
    },
    {
      url: `${baseUrl}/surveillance`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.9',
      title: 'Surveillance Menaces Cybersécurité Bienne | Monitoring Sécurité'
    },
    {
      url: `${baseUrl}/audit-cra`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
      title: 'Audit CRA Cyber Resilience Act | Conformité Réglementaire Suisse'
    },
    {
      url: `${baseUrl}/developpement`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
      title: 'Développement Sécurisé Bienne | Applications Web Sécurisées'
    },
    {
      url: `${baseUrl}/dfir`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
      title: 'Services DFIR Bienne | Digital Forensics & Incident Response'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
      title: 'Contact Expert Cybersécurité Bienne | Devis Gratuit'
    }
  ]

  return pages
}

// Composant pour les breadcrumbs SEO
interface BreadcrumbsProps {
  items: Array<{
    label: string
    href?: string
    active?: boolean
  }>
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <motion.nav 
      className="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label="Breadcrumb"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href ? `https://cybersuisse.ch${item.href}` : undefined
          }))
        })}
      </script>
      
      <div className="sr-only">
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item.active ? item.label : <a href={item.href}>{item.label}</a>}
              {index < items.length - 1 && ' > '}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  )
}

// Métadonnées pour chaque page
export const pageMetadata = {
  home: {
    title: 'Expert Cybersécurité Bienne | Pentest, Audit CRA & Surveillance | CyberSuisse',
    description: 'Spécialiste cybersécurité freelance à Bienne/Biel. Services pentest, surveillance des menaces, audit CRA et développement sécurisé pour entreprises suisses.',
    keywords: 'cybersécurité Bienne, pentest Biel, expert sécurité Bienne, audit CRA Suisse, consultant cybersécurité'
  },
  about: {
    title: 'À propos - Modesto Expert Cybersécurité Bienne | Certifications & Expérience',
    description: 'Découvrez le profil de Modesto, expert cybersécurité à Bienne. Certifications, expérience et expertise en sécurité informatique pour entreprises suisses.',
    keywords: 'Modesto cybersécurité, expert sécurité Bienne profil, certifications cybersécurité Suisse'
  },
  pentest: {
    title: 'Tests d\'Intrusion Pentest Bienne | Évaluation Sécurité Entreprises Suisses',
    description: 'Services de tests d\'intrusion professionnels à Bienne. Pentest externe et interne, applications web, évaluation complète de la sécurité.',
    keywords: 'pentest Bienne, test intrusion Biel, évaluation sécurité Suisse, audit sécurité informatique'
  },
  surveillance: {
    title: 'Surveillance Menaces Cybersécurité Bienne | Monitoring Sécurité PME',
    description: 'Solution de surveillance légère et efficace pour PME. Monitoring ciblé des menaces cybersécurité, alertes pertinentes, détection intelligente.',
    keywords: 'surveillance menaces Bienne, monitoring sécurité PME, détection menaces Suisse'
  },
  'audit-cra': {
    title: 'Audit CRA Cyber Resilience Act | Conformité Réglementaire Suisse (Bientôt)',
    description: 'Service d\'audit CRA en développement. Conformité avec la nouvelle réglementation européenne Cyber Resilience Act pour entreprises suisses.',
    keywords: 'audit CRA Suisse, Cyber Resilience Act conformité, réglementation cybersécurité Europe'
  },
  developpement: {
    title: 'Développement Sécurisé Bienne | Applications Web Sécurisées Suisse',
    description: 'Développement d\'applications et sites web sécurisés à Bienne. Secure by design, code review sécurité, tests de vulnérabilités intégrés.',
    keywords: 'développement sécurisé Bienne, applications web sécurisées, secure by design Suisse'
  },
  dfir: {
    title: 'Services DFIR Bienne | Digital Forensics & Incident Response Suisse',
    description: 'Services DFIR professionnels à Bienne. Investigation numérique, réponse aux incidents cybersécurité, expertise judiciaire pour entreprises suisses.',
    keywords: 'DFIR Bienne, digital forensics Suisse, incident response, investigation numérique'
  },
  contact: {
    title: 'Contact Expert Cybersécurité Bienne | Modesto CyberSuisse | Devis Gratuit',
    description: 'Contactez Modesto, expert cybersécurité à Bienne. Devis gratuit pour pentest, audit CRA, surveillance des menaces. Téléphone: 078 208 95 45',
    keywords: 'contact cybersécurité Bienne, devis pentest gratuit, expert sécurité Bienne contact'
  }
}