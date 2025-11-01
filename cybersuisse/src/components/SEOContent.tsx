import { motion } from 'framer-motion'

interface SEOContentProps {
  page: string
  title?: string
  description?: string
  keywords?: string[]
}

export default function SEOContent({ page, title, description, keywords }: SEOContentProps) {
  const getLocalContent = () => {
    switch (page) {
      case 'home':
        return (
          <div className="sr-only">
            <h1>{title || 'Expert Cybersécurité Bienne - CyberSuisse'}</h1>
            <p>{description || 'Services de cybersécurité professionnels à Bienne/Biel : pentest, surveillance des menaces, audit CRA, développement sécurisé'}</p>
            <p>Modesto, expert cybersécurité freelance en Suisse, Canton de Berne</p>
            <address>
              Expert Cybersécurité - Bienne/Biel, Canton de Berne, Suisse
              <br />Téléphone: +41 78 208 95 45
              <br />Email: modesto@cybersuisse.ch
            </address>
          </div>
        )
      case 'pentest':
        return (
          <div className="sr-only">
            <h1>{title || 'Services de Test de Pénétration (Pentest) Bienne'}</h1>
            <p>{description || 'Tests de pénétration professionnels pour entreprises suisses - Évaluation complète de la sécurité informatique'}</p>
            <p>Expert pentest certifié à Bienne, audit sécurité réseau et applications web</p>
          </div>
        )
      case 'surveillance':
        return (
          <div className="sr-only">
            <h1>{title || 'Surveillance des Menaces Cybersécurité Bienne'}</h1>
            <p>{description || 'Surveillance légère mais efficace des menaces cybersécurité pour PME suisses'}</p>
            <p>Monitoring sécurité informatique 24/7, détection des intrusions Bienne</p>
          </div>
        )
      case 'audit-cra':
        return (
          <div className="sr-only">
            <h1>{title || 'Audit CRA Cyber Resilience Act Suisse'}</h1>
            <p>{description || 'Audit de conformité CRA pour entreprises suisses - Service bientôt disponible'}</p>
            <p>Préparation Cyber Resilience Act UE, audit conformité cybersécurité</p>
          </div>
        )
      case 'developpement':
        return (
          <div className="sr-only">
            <h1>{title || 'Développement Applications Sécurisées Bienne'}</h1>
            <p>{description || 'Développement web et applications sécurisées par expert cybersécurité'}</p>
            <p>Sites web sécurisés, applications robustes contre cyberattaques</p>
          </div>
        )
      case 'dfir':
        return (
          <div className="sr-only">
            <h1>{title || 'Services DFIR Digital Forensics Incident Response Bienne'}</h1>
            <p>{description || 'Investigation numérique et réponse aux incidents cybersécurité'}</p>
            <p>Expert forensique digital Suisse, analyse post-incident sécurité</p>
          </div>
        )
      case 'about':
        return (
          <div className="sr-only">
            <h1>{title || 'À Propos - Modesto Expert Cybersécurité Bienne'}</h1>
            <p>{description || 'Consultant cybersécurité freelance certifié EC-Council et TryHackMe'}</p>
            <p>Expert sécurité informatique Bienne, spécialiste pentest et audit</p>
          </div>
        )
      case 'contact':
        return (
          <div className="sr-only">
            <h1>{title || 'Contact Expert Cybersécurité Bienne - CyberSuisse'}</h1>
            <p>{description || 'Contactez Modesto pour vos besoins en cybersécurité à Bienne'}</p>
            <address>
              Téléphone: +41 78 208 95 45
              <br />Email: modesto@cybersuisse.ch
              <br />Bienne/Biel, Canton de Berne, Suisse
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