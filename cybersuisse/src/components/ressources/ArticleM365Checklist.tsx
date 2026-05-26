import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CaretLeft } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface Props {
  onNavigate: (page: string) => void
}

const SLUG = 'm365-checklist-securite-pme-suisse'
const TITLE = 'Checklist sécurité Microsoft 365 pour PME suisses (2026)'
const DESCRIPTION =
  '12 points concrets à vérifier sur votre tenant Microsoft 365 : MFA, partages externes, droits, alertes. Checklist pragmatique pour PME suisses.'

export default function ArticleM365Checklist({ onNavigate }: Props) {
  useEffect(() => {
    applyPageSeo({
      title: `${TITLE} — CyberSuisse`,
      description: DESCRIPTION,
      path: `/ressources/${SLUG}`
    })

    setStructuredData(`article-${SLUG}-blogposting`, {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: TITLE,
      description: DESCRIPTION,
      image: 'https://cybersuisse.ch/og-image.jpg',
      datePublished: '2026-05-20',
      dateModified: '2026-05-20',
      author: { '@id': 'https://cybersuisse.ch/a-propos#luis-modesto' },
      publisher: { '@id': 'https://cybersuisse.ch/#business' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://cybersuisse.ch/ressources/${SLUG}`
      },
      inLanguage: 'fr-CH'
    })

    setStructuredData(`article-${SLUG}-breadcrumb`, {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cybersuisse.ch/' },
        { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://cybersuisse.ch/ressources' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Checklist sécurité Microsoft 365',
          item: `https://cybersuisse.ch/ressources/${SLUG}`
        }
      ]
    })

    return () => {
      setStructuredData(`article-${SLUG}-blogposting`, null)
      setStructuredData(`article-${SLUG}-breadcrumb`, null)
    }
  }, [])

  return (
    <article className="bg-bg">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb visible */}
          <button
            type="button"
            onClick={() => onNavigate('ressources' as never)}
            className="inline-flex items-center gap-1 text-sm text-fg-secondary hover:text-brand-amber transition-colors mb-6"
          >
            <CaretLeft size={14} /> Toutes les ressources
          </button>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-xs">Microsoft 365</Badge>
            <span className="text-xs text-fg-secondary inline-flex items-center gap-1">
              <Clock size={12} /> 8 min de lecture
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight">
            Checklist sécurité Microsoft 365 pour PME suisses (2026)
          </h1>

          <p className="mt-6 text-lg text-fg-secondary leading-relaxed">
            Microsoft 365 est aujourd'hui la colonne vertébrale numérique de la majorité des PME suisses :
            emails, fichiers, agendas, Teams. Et c'est aussi, presque par défaut, leur principal point d'entrée
            pour un attaquant.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            La bonne nouvelle, c'est que Microsoft fournit déjà la plupart des verrous nécessaires. La moins bonne,
            c'est qu'aucun de ces verrous n'est activé automatiquement quand on signe son abonnement. Cette checklist
            liste douze points concrets à vérifier sur votre tenant, dans l'ordre où je les regarde chez mes clients.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            Vous pouvez la parcourir vous-même si vous avez accès au Centre d'administration. Sinon, c'est exactement
            ce que je couvre dans un <em>M365 Security Check</em>.
          </p>

          {/* Article body */}
          <div className="mt-12 space-y-12 text-fg-secondary leading-relaxed">

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Pourquoi Microsoft 365 est une cible privilégiée
              </h2>
              <p>
                Quand un attaquant cible une PME, il cherche le chemin le plus court. Microsoft 365 coche toutes
                les cases : tout le monde l'utilise, beaucoup de comptes sont protégés par un simple mot de passe,
                et un seul compte compromis ouvre l'accès à la messagerie, aux fichiers SharePoint et à OneDrive.
              </p>
              <p className="mt-4">
                Concrètement, j'ai vu trois scénarios revenir en boucle dans des PME locales :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Un comptable d'une fiduciaire à Bienne dont la boîte mail a servi à émettre de fausses factures pendant trois jours.</li>
                <li>Un cabinet d'avocats dont les documents confidentiels ont été synchronisés via OneDrive sur un PC personnel infecté.</li>
                <li>Un bureau d'architectes dont le compte administrateur — sans MFA — a été utilisé pour créer une règle de transfert silencieuse.</li>
              </ul>
              <p className="mt-4">
                Aucun de ces incidents n'aurait demandé un investissement majeur pour être évité. Juste de la configuration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                1. MFA et accès conditionnel
              </h2>
              <p>
                La première vérification, et de loin la plus rentable : <strong>l'authentification multifacteur (MFA)
                doit être active sur tous les comptes, sans exception</strong>. Pas seulement sur les administrateurs.
                Pas seulement sur les comptes "sensibles". Tous.
              </p>
              <p className="mt-4">À vérifier précisément :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>MFA active pour 100 % des utilisateurs, y compris les boîtes partagées via leurs délégués.</li>
                <li>Méthode privilégiée : application Microsoft Authenticator avec notification, plutôt que SMS.</li>
                <li>Authentification "legacy" (POP, IMAP, SMTP basique) désactivée. Ces protocoles contournent la MFA.</li>
                <li>Idéalement, une politique d'accès conditionnel qui bloque les connexions depuis l'étranger si votre activité est purement suisse.</li>
              </ul>
              <blockquote className="mt-6 border-l-4 border-brand-amber pl-4 py-2 italic text-fg-secondary">
                Si vous ne deviez activer qu'une seule chose après avoir lu cet article, ce serait la MFA partout.
                C'est ce qui bloque la grande majorité des intrusions opportunistes.
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                2. Partages externes OneDrive et SharePoint
              </h2>
              <p>
                Par défaut, un utilisateur de votre tenant peut partager n'importe quel fichier avec n'importe
                qui sur Internet, via un simple lien "toute personne disposant du lien". C'est pratique. C'est
                aussi exactement comme cela que des documents internes finissent indexés par Google.
              </p>
              <p className="mt-4">À vérifier :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Politique de partage externe : limiter à "utilisateurs invités existants" ou à des domaines autorisés.</li>
                <li>Durée de validité des liens : 30 jours maximum par défaut.</li>
                <li>Liens "Anyone" désactivés, ou à minima réservés à certaines bibliothèques.</li>
                <li>Notification quand un utilisateur partage avec un domaine externe inhabituel.</li>
              </ul>
              <p className="mt-4">
                Faites le test : connectez-vous comme un utilisateur lambda et essayez de partager un document
                sensible à une adresse Gmail. Si ça passe sans friction, vous avez un sujet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                3. Comptes administrateur
              </h2>
              <p>
                Les comptes administrateur global sont la cible numéro un. Quelques principes non négociables :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Pas de licence Office sur un compte admin global.</strong> Pas d'email, pas de Teams, pas de Word. Ces comptes servent uniquement à administrer.</li>
                <li>Au moins deux comptes admin global, pour ne pas vous verrouiller dehors si l'un est compromis ou perdu.</li>
                <li>MFA obligatoire avec une méthode forte (Authenticator + biométrie).</li>
                <li>Connexions admin auditées : qui se connecte, depuis où, quand.</li>
                <li>Le compte que vous utilisez pour lire vos emails au quotidien n'est <em>jamais</em> un compte administrateur.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                4. Règles de boîte mail suspectes
              </h2>
              <p>
                Quand un attaquant prend le contrôle d'une boîte mail, le premier réflexe est rarement de tout
                vider. Il crée une <strong>règle de transfert silencieuse</strong> : tous les emails reçus sont
                copiés vers une adresse externe, ou les emails contenant le mot "facture" sont déplacés dans un
                dossier caché. L'utilisateur ne se rend compte de rien pendant des semaines.
              </p>
              <p className="mt-4">À vérifier régulièrement (idéalement automatiquement) :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Aucune règle de transfert externe (forwarding) active.</li>
                <li>Aucune règle qui déplace ou supprime des emails contenant des mots-clés financiers.</li>
                <li>Aucune règle créée hors heures de bureau ou depuis un pays inhabituel.</li>
              </ul>
              <p className="mt-4">
                Microsoft propose une alerte native pour cela. Encore faut-il l'avoir activée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                5. Audit logs et alertes
              </h2>
              <p>
                Sans journal d'audit, vous ne saurez pas ce qui s'est passé après un incident. Vérifiez que
                l'audit unifié est activé sur votre tenant (il l'est par défaut depuis 2023, mais à confirmer
                sur les tenants anciens) et que les journaux sont conservés au moins 90 jours.
              </p>
              <p className="mt-4">Alertes minimales à configurer :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Connexion réussie depuis un pays inhabituel.</li>
                <li>Connexions multiples échouées (tentative de brute force).</li>
                <li>Élévation de privilèges (ajout d'un compte au rôle admin).</li>
                <li>Création de règle de transfert externe.</li>
                <li>Téléchargement massif depuis OneDrive ou SharePoint.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                6. Sauvegarde tierce
              </h2>
              <p>
                Microsoft sauvegarde son infrastructure. Microsoft <strong>ne sauvegarde pas vos données</strong>
                au sens où une PME l'entend. Un employé qui supprime un dossier SharePoint, un ransomware qui
                chiffre OneDrive, une compromission qui dure trois mois : la rétention native ne vous sauvera pas.
              </p>
              <p className="mt-4">
                Une PME suisse sérieuse a une solution de sauvegarde tierce dédiée à Microsoft 365 (Veeam,
                AvePoint, Acronis, Datto, etc.), avec rétention longue durée et restauration granulaire. Ce
                n'est plus du luxe en 2026.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Conclusion : par où commencer ?
              </h2>
              <p>
                Si vous ne disposez que d'une demi-journée, attaquez dans cet ordre :
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li>MFA pour tout le monde.</li>
                <li>Désactiver les protocoles legacy.</li>
                <li>Auditer les règles de boîte mail existantes.</li>
                <li>Restreindre les partages externes.</li>
              </ol>
              <p className="mt-4">
                Ces quatre actions bloquent l'écrasante majorité des scénarios d'intrusion réels que je vois
                dans les PME romandes.
              </p>
              <p className="mt-4">
                Si vous préférez ne pas gérer ça en interne, le <em>M365 Security Check</em> couvre exactement
                cette checklist, en livrant un rapport de 15 à 25 pages avec un plan d'action priorisé. Forfait
                fixe, 750 CHF, sous 5 à 7 jours ouvrables.
              </p>
            </section>

            <section className="bg-bg-inset border border-white/10 rounded-lg p-6 lg:p-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-bold text-fg mb-3">
                Faire auditer votre tenant Microsoft 365
              </h2>
              <p className="text-fg-secondary leading-relaxed mb-6">
                Un rapport clair, un plan d'action priorisé, une restitution d'une heure. Pas d'abonnement,
                pas de commission sur des produits. Forfait 750 CHF.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => onNavigate('services')}
                  className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-medium"
                >
                  Voir le M365 Security Check <ArrowRight size={16} className="ml-1.5" />
                </Button>
                <Button
                  onClick={() => onNavigate('premier-regard')}
                  variant="outline"
                  className="border-white/20 text-fg hover:bg-bg-overlay"
                >
                  Réserver un Premier Regard offert
                </Button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </article>
  )
}
