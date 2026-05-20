import { motion } from 'framer-motion'

// Génération du sitemap virtuel pour les moteurs de recherche
export const generateSitemap = () => {
  const baseUrl = 'https://cybersuisse.ch'
  const today = new Date().toISOString().split('T')[0]

  return [
    {
      url: `${baseUrl}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
      title: 'CyberSuisse — Cybersécurité de proximité pour PME | Biel/Bienne'
    },
    {
      url: `${baseUrl}/services`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.9',
      title: 'Prestations — CyberSuisse | Biel/Bienne'
    },
    {
      url: `${baseUrl}/premier-regard`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.9',
      title: 'Premier Regard offert — CyberSuisse'
    },
    {
      url: `${baseUrl}/a-propos`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
      title: 'À propos — Luís Modesto | CyberSuisse'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
      title: 'Contact — CyberSuisse | Biel/Bienne'
    }
  ]
}

// Breadcrumbs SEO
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
    title: 'CyberSuisse — Cybersécurité de proximité pour PME | Biel/Bienne',
    description: 'Consultant indépendant en cybersécurité à Biel/Bienne. Audit Microsoft 365, OSINT, sensibilisation, diagnostic GRC. Interlocuteur unique. Premier Regard offert.',
    keywords: 'cybersécurité PME Bienne, audit Microsoft 365 Biel, sensibilisation phishing Bienne, OSINT entreprise, consultant cybersécurité fiduciaire Suisse'
  },
  services: {
    title: 'Prestations — CyberSuisse | Biel/Bienne',
    description: 'M365 Security Check, Empreinte Numérique, Bouclier Humain, Cap Sécurité, création de sites web, récupération de données. Forfaits clairs pour PMEs.',
    keywords: 'audit Microsoft 365 Biel, OSINT entreprise, sensibilisation phishing Bienne, diagnostic cybersécurité PME, récupération données Biel, création site web Bienne'
  },
  'premier-regard': {
    title: 'Premier Regard offert — CyberSuisse',
    description: '45 minutes pour identifier vos 3 risques principaux. Gratuit, sans engagement, sans installation. Pour PMEs de Biel/Bienne.',
    keywords: 'audit cybersécurité gratuit Bienne, diagnostic cybersécurité PME, consultant cybersécurité Biel'
  },
  about: {
    title: 'À propos — Luís Modesto | CyberSuisse',
    description: 'Consultant indépendant en cybersécurité à Biel/Bienne. Approche humaine, pragmatique et locale pour les PMEs.',
    keywords: 'consultant cybersécurité Bienne, expert cybersécurité PME, Luís Modesto CyberSuisse'
  },
  contact: {
    title: 'Contact — CyberSuisse | Biel/Bienne',
    description: 'Contactez CyberSuisse à Biel/Bienne — 078 208 95 45 / modesto@cybersuisse.ch. Réponse sous 24 heures ouvrables.',
    keywords: 'contact cybersécurité Bienne, consultant cybersécurité Biel'
  }
}
