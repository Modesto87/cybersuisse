import { motion } from 'framer-motion'

interface SEOContentProps {
  page: string
  title?: string
  description?: string
}

export default function SEOContent({ page, title, description }: SEOContentProps) {
  const getLocalContent = () => {
    switch (page) {
      case 'home':
        return (
          <div className="sr-only">
            <h1>{title || 'Modesto Cybersécurité | Expert MSSP Suisse & Pentest'}</h1>
            <p>{description || 'Expert en cybersécurité en Suisse. Services MSSP, tests d\'intrusion et OSINT. Protégez votre entreprise contre les cyberattaques.'}</p>
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
            <h1>{title || "Pentest Bienne/Biel (Suisse) – Tests d'intrusion Web, Infrastructure & Wi‑Fi"}</h1>
            <p>
              {description ||
                "Services de pentest à Bienne/Biel pour entreprises suisses : tests d'intrusion web (OWASP Top 10), infrastructure (externe/interne) et Wi‑Fi avec livrables actionnables."}
            </p>
            <p>
              Zone d’intervention : Bienne/Biel (Seeland), Canton de Berne et Suisse romande. Prestations adaptées PME,
              e-commerce, applications avec login, API, réseaux d’entreprise et environnements hybrides.
            </p>
            <p>
              Livrables : résumé exécutif (risques, impact, priorités), rapport technique (preuves, reproduction,
              recommandations) et plan de correction priorisé. Retest inclus selon le pack.
            </p>
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
      case 'osint':
        return (
          <div className="sr-only">
            <h1>{title || 'OSINT & Investigation Digitale à Bienne/Biel (Suisse)'}</h1>
            <p>
              {description ||
                "Services OSINT à Bienne/Biel et environs : investigation digitale via sources ouvertes, due diligence, vérification de profils/candidats, réputation en ligne et investigations cyber (fuites, surface d'attaque)."}
            </p>
            <p>
              Pour entreprises et particuliers en Suisse (Canton de Berne, Seeland, Suisse romande). Approche légale et éthique,
              centrée sur des faits, des sources et une synthèse exploitable.
            </p>
            <p>
              Cas d'usage : pré‑recrutement (cadre conforme), vérification de partenaires/fournisseurs, protection de la réputation,
              recherche de traces publiques et réduction de l'exposition.
            </p>
            <p>Confidentialité stricte, professionnalisme et discrétion maximale.</p>
          </div>
        )
      case 'developpement':
        return (
          <div className="sr-only">
            <h1>{title || 'Création de site web sécurisé à Bienne/Biel (Suisse) | Sans WordPress'}</h1>
            <p>
              {description ||
                "Création de sites web sécurisés à Bienne/Biel et en Suisse : code sur mesure (sans WordPress), revue et tests de sécurité avant livraison, durcissement contre les menaces courantes connues à la date de livraison."}
            </p>
            <p>
              Pour PME, indépendants et organisations en Suisse (Canton de Berne, Seeland, Suisse romande). Objectif : un site fiable,
              rapide, maintenable et construit avec une approche cybersécurité.
            </p>
            <p>
              Approche : security-by-design, réduction de la surface d'attaque, protection des formulaires et des accès sensibles,
              durcissement de configuration (headers/CSP) et recommandations d'exploitation (accès, sauvegardes, mises à jour).
            </p>
          </div>
        )
      case 'data-recovery':
        return (
          <div className="sr-only">
            <h1>{title || 'Récupération de données à Bienne/Biel (Suisse) | Disque, SSD, USB, carte SD'}</h1>
            <p>
              {description ||
                "Récupération de données à Bienne/Biel et en Suisse : fichiers supprimés, disque/SSD en panne, clé USB illisible, carte SD (photos), ordinateur qui ne démarre plus ou mot de passe Windows oublié. Service professionnel et respect de la vie privée."}
            </p>
            <p>
              Cas fréquents : photos supprimées sur carte SD/microSD, dossier effacé et corbeille vidée, disque externe non reconnu,
              clé USB qui demande un formatage, partition corrompue, PC bloqué. Le diagnostic vise à évaluer la faisabilité et à maximiser
              les chances sans promesses irréalistes.
            </p>
            <p>
              Important : la récupération n'est pas toujours possible (dommages, chiffrement, écrasement des données). Politique : si aucune
              donnée n'est récupérable (échec total), aucun frais de récupération.
            </p>
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