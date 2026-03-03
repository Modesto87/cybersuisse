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
      title: 'Pentest Bienne/Biel (Suisse) | Tests d\'intrusion Web, Infra & Wi‑Fi'
    },
    {
      url: `${baseUrl}/osint`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
      title: 'OSINT Bienne/Biel (Suisse) | Investigation Digitale & Due Diligence'
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
      title: 'Création de Site Web Sécurisé Bienne/Biel (Suisse) | Sans WordPress'
    },
    {
      url: `${baseUrl}/data-recovery`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
      title: 'Récupération de données Bienne/Biel (Suisse) | Disque, SSD, USB, carte SD'
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
    title: 'Expert Cybersécurité Bienne | Pentest & Audit CRA | CyberSuisse',
    description: 'Spécialiste cybersécurité freelance à Bienne/Biel. Services pentest, audit CRA, développement sécurisé et OSINT pour entreprises suisses.',
    keywords: 'cybersécurité Bienne, pentest Biel, expert sécurité Bienne, audit CRA Suisse, consultant cybersécurité'
  },
  about: {
    title: 'À propos – Expert en cybersécurité pour PME à Biel/Bienne, Suisse',
    description: 'CyberSuisse est un expert en cybersécurité dédié aux PME de Biel/Bienne et Suisse romande, avec sécurité continue et rapports de sécurité mensuels clairs.',
    keywords: 'expertise en cybersécurité pour PME, sécurité continue, rapports de sécurité mensuels, cybersécurité Biel Bienne'
  },
  pentest: {
    title: "Pentest Bienne/Biel (Suisse) | Tests d'intrusion Web, Infrastructure & Wi‑Fi",
    description: "Pentest à Bienne/Biel pour entreprises suisses : tests d'intrusion web, infrastructure et Wi‑Fi. Livrables clairs (résumé exécutif, rapport technique, plan de correction) et retest selon pack.",
    keywords: 'pentest Bienne, pentest Biel, test intrusion Bienne, test d\'intrusion Biel, pentest Suisse, pentest Canton de Berne, pentest Suisse romande, pentest web Suisse, pentest infrastructure Suisse, audit Wi‑Fi Suisse, OWASP Top 10, test API sécurité'
  },
  osint: {
    title: 'OSINT & Investigation Digitale Bienne/Biel | Due Diligence & Recherche Discrète Suisse',
    description: "OSINT à Bienne/Biel et environs : investigation digitale via sources ouvertes, due diligence entreprise, vérification de profils/candidats, réputation en ligne et recherche cyber (fuites, surface d'attaque). Approche légale/éthique et confidentialité stricte.",
    keywords: "osint Bienne, osint Biel, investigation digitale Bienne, enquête digitale Suisse, due diligence Bienne, vérification candidat Suisse, pré-recrutement osint, réputation en ligne Suisse, sources ouvertes Suisse, investigation privée digitale, cybersécurité osint, fuites de données Suisse"
  },
  'audit-cra': {
    title: 'Audit CRA Cyber Resilience Act | Conformité Réglementaire Suisse (Bientôt)',
    description: 'Service d\'audit CRA en développement. Conformité avec la nouvelle réglementation européenne Cyber Resilience Act pour entreprises suisses.',
    keywords: 'audit CRA Suisse, Cyber Resilience Act conformité, réglementation cybersécurité Europe'
  },
  developpement: {
    title: 'Création de site web sécurisé à Bienne/Biel (Suisse) | Sans WordPress | CyberSuisse',
    description: "Création de sites web sécurisés à Bienne/Biel et en Suisse : code sur mesure (sans WordPress), revue & tests de sécurité avant livraison, durcissement contre les menaces courantes à la date de livraison.",
    keywords: 'création site web sécurisé Bienne, création site web sécurisé Biel, site web sécurisé Suisse, site vitrine sécurisé Bienne, e-commerce sécurisé Suisse, développeur cybersécurité Bienne, site sur mesure sans WordPress, sécurité OWASP Top 10, CSP headers, durcissement site web'
  },
  'data-recovery': {
    title: 'Récupération de données à Bienne/Biel (Suisse) | Disque, SSD, USB, carte SD | CyberSuisse',
    description: "Récupération de données à Bienne/Biel et en Suisse : fichiers supprimés, disque/SSD en panne, clé USB, carte SD (photos), PC qui ne démarre plus ou mot de passe Windows oublié. Diagnostic professionnel et respect de la vie privée.",
    keywords: 'récupération de données Bienne, récupération de données Biel, récupération de données Suisse, disque dur panne, SSD panne, clé USB illisible, carte SD photos supprimées, fichiers supprimés, mot de passe Windows oublié, récupération fichiers, récupération disque externe, confidentialité'
  },
  contact: {
    title: 'Contact Expert Cybersécurité Bienne | Modesto CyberSuisse | Devis Gratuit',
    description: 'Contactez Modesto, expert cybersécurité à Bienne. Devis gratuit pour pentest, audit CRA, développement sécurisé et OSINT. Téléphone: 078 208 95 45',
    keywords: 'contact cybersécurité Bienne, devis pentest gratuit, expert sécurité Bienne contact'
  }
}