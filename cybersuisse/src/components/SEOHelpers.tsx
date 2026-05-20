import { motion } from 'framer-motion'

const SITE_URL = 'https://cybersuisse.ch'

const upsertMetaByName = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const upsertMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const upsertLink = (selector: string, attrs: Record<string, string>) => {
  let el = document.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
    return
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

export interface PageSeoOptions {
  title: string
  description: string
  path: string
}

export const applyPageSeo = ({ title, description, path }: PageSeoOptions) => {
  if (typeof document === 'undefined') return
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const url = `${SITE_URL}${normalizedPath}`

  document.title = title
  upsertMetaByName('description', description)

  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: url })
  upsertMetaByProperty('og:url', url)
  upsertLink('link[rel="alternate"][hreflang="fr-CH"]', {
    rel: 'alternate',
    hreflang: 'fr-CH',
    href: url
  })
  upsertLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: 'alternate',
    hreflang: 'x-default',
    href: url
  })
}

export const DEFAULT_ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

export const setRobotsMeta = (content: string) => {
  if (typeof document === 'undefined') return
  upsertMetaByName('robots', content)
}

/**
 * Inject (or remove) a page-scoped JSON-LD <script> tag in <head>, identified by `id`.
 * Idempotent: replaces existing content on re-call. Pass `null` to remove (cleanup).
 */
export function setStructuredData(id: string, data: object | null) {
  if (typeof document === 'undefined') return
  const selector = `script[type="application/ld+json"][data-page="${id}"]`
  let el = document.querySelector(selector) as HTMLScriptElement | null
  if (data === null) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-page', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

// Génération du sitemap virtuel pour les moteurs de recherche
export const generateSitemap = () => {
  const baseUrl = SITE_URL
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
    description: 'Consultant indépendant en cybersécurité à Biel/Bienne. Audit Microsoft 365, OSINT, sensibilisation, diagnostic GRC. Interlocuteur unique. Premier Regard offert.'
  },
  services: {
    title: 'Prestations — CyberSuisse | Biel/Bienne',
    description: 'M365 Security Check, Empreinte Numérique, Bouclier Humain, Cap Sécurité, création de sites web, récupération de données. Forfaits clairs pour PMEs.'
  },
  'premier-regard': {
    title: 'Premier Regard offert — CyberSuisse',
    description: '45 minutes pour identifier vos 3 risques principaux. Gratuit, sans engagement, sans installation. Pour PMEs de Biel/Bienne.'
  },
  about: {
    title: 'À propos — Luís Modesto | CyberSuisse',
    description: 'Consultant indépendant en cybersécurité à Biel/Bienne. Approche humaine, pragmatique et locale pour les PMEs.'
  },
  contact: {
    title: 'Contact — CyberSuisse | Biel/Bienne',
    description: 'Contactez CyberSuisse à Biel/Bienne — 078 208 95 45 / modesto@cybersuisse.ch. Réponse sous 24 heures ouvrables.'
  }
}
