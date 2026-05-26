import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CaretLeft } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface Props {
  onNavigate: (page: string) => void
}

const SLUG = 'que-faire-apres-cyberattaque-pme-plan'
const TITLE = "Que faire après une cyberattaque ? Plan d'action PME suisse"
const DESCRIPTION =
  "Plan d'action concret pour les 72 premières heures après une cyberattaque dans une PME suisse. Étapes techniques, légales et communication."

export default function ArticleApresAttaque({ onNavigate }: Props) {
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
          name: "Plan d'action après cyberattaque",
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
          <button
            type="button"
            onClick={() => onNavigate('ressources' as never)}
            className="inline-flex items-center gap-1 text-sm text-fg-secondary hover:text-brand-amber transition-colors mb-6"
          >
            <CaretLeft size={14} /> Toutes les ressources
          </button>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-xs">Incident</Badge>
            <span className="text-xs text-fg-secondary inline-flex items-center gap-1">
              <Clock size={12} /> 10 min de lecture
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight">
            Que faire après une cyberattaque ? Plan d'action PME suisse
          </h1>

          <p className="mt-6 text-lg text-fg-secondary leading-relaxed">
            Une cyberattaque dans une PME, ce n'est presque jamais le film qu'on s'imagine. Pas d'écran rouge,
            pas de compte à rebours. Plutôt un comptable qui ne peut plus ouvrir ses fichiers, un client qui
            appelle pour signaler une facture étrange, une employée qui dit "mon mot de passe ne marche plus".
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            Les 72 premières heures décident très souvent du coût final. Ce plan d'action suit l'ordre que
            j'applique dans les interventions réelles avec mes clients. Il est volontairement orienté PME
            suisse : structure de 5 à 50 personnes, équipe IT légère ou externalisée, pas de SOC interne.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            <strong>Avertissement :</strong> ce plan ne remplace pas l'intervention d'un professionnel. Si
            vous êtes en train de subir une attaque <em>maintenant</em>, appelez quelqu'un. Ne lisez pas un
            article.
          </p>

          <div className="mt-12 space-y-12 text-fg-secondary leading-relaxed">

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Heure 0 à 1 — Endiguer
              </h2>
              <p>
                L'objectif de cette première heure n'est pas de comprendre, c'est d'<strong>arrêter
                l'hémorragie</strong>. Trop d'entreprises perdent un temps précieux à débattre de la nature
                de l'incident pendant que l'attaquant continue son travail.
              </p>
              <p className="mt-4">Actions immédiates :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Isoler les machines suspectes : couper le Wi-Fi, débrancher les câbles réseau. <strong>Ne pas éteindre</strong> — la mémoire vive est précieuse pour l'analyse.</li>
                <li>Suspendre les comptes utilisateurs visiblement compromis dans Microsoft 365 (révocation des sessions actives).</li>
                <li>Couper les accès distants (VPN, RDP) le temps de comprendre.</li>
                <li>Conserver les traces : ne pas supprimer d'email suspect, ne pas vider la corbeille.</li>
                <li>Documenter en temps réel : qui a fait quoi, à quelle heure. Un simple bloc-notes suffit.</li>
              </ul>
              <p className="mt-4">
                Si vous avez une cyber-assurance, c'est aussi à ce stade qu'il faut composer le numéro
                d'urgence figurant dans votre contrat. La plupart des assureurs imposent un partenaire
                de réponse à incident — autant l'enclencher vite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Heure 1 à 6 — Évaluer le périmètre
              </h2>
              <p>
                Une fois l'endiguement initial fait, il faut comprendre l'étendue. Trois questions guident
                cette phase :
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li><strong>Quels comptes sont compromis ?</strong> Consultez les journaux de connexion Microsoft 365 sur les 30 derniers jours. Cherchez les connexions depuis des pays inhabituels, les pics nocturnes, les agents utilisateurs étranges.</li>
                <li><strong>Quelles données ont pu être exfiltrées ?</strong> Cherchez les téléchargements massifs depuis SharePoint/OneDrive, les règles de transfert d'emails, les exports inhabituels.</li>
                <li><strong>L'attaquant est-il toujours présent ?</strong> Tant que la réponse n'est pas un "non" documenté, on considère que oui.</li>
              </ol>
              <p className="mt-4">
                C'est aussi le moment de geler les opérations financières sensibles : suspendre les
                paiements sortants jusqu'à validation manuelle multi-personnes. C'est dans cette fenêtre
                que les attaquants tentent les fraudes au virement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Heure 6 à 24 — Communiquer
              </h2>
              <p>
                La communication d'incident est un sujet à part entière. Quelques principes pratiques :
              </p>
              <p className="mt-4"><strong>En interne :</strong></p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Informer la direction dans l'heure qui suit la détection. Pas l'inverse.</li>
                <li>Donner aux collaborateurs un message court : ce qui s'est passé, ce qu'on fait, ce qu'on attend d'eux.</li>
                <li>Désigner <em>une</em> personne qui parle à l'extérieur. Une seule.</li>
              </ul>
              <p className="mt-4"><strong>Vers les autorités suisses :</strong></p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Signalement à l'<strong>OFCS</strong> (Office fédéral de la cybersécurité, ex-NCSC) : non obligatoire pour la plupart des PME, mais utile et rapide via le formulaire en ligne.</li>
                <li>Si des données personnelles sont concernées et qu'un risque pour les personnes existe : notification au <strong>PFPDT</strong> (Préposé fédéral à la protection des données) — à traiter dans la phase suivante.</li>
                <li>Dépôt de plainte pénale : à envisager via la police cantonale, surtout si fraude au virement.</li>
              </ul>
              <p className="mt-4"><strong>Vers les clients / partenaires :</strong></p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Si la compromission d'une boîte mail a pu envoyer des messages frauduleux à des contacts, prévenir <em>activement</em> et clairement.</li>
                <li>Ton factuel, pas d'embellissement. La transparence est ce qui sauve la relation client après un incident, pas l'inverse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Jour 1 à 3 — Notifications légales et restauration
              </h2>
              <p>
                Sous la nouvelle Loi suisse sur la protection des données (nLPD, en vigueur depuis septembre
                2023), les responsables de traitement doivent notifier au PFPDT les violations de données
                personnelles susceptibles d'entraîner un risque élevé pour les personnes concernées, dans
                les meilleurs délais.
              </p>
              <p className="mt-4">
                Concrètement, pour une PME :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Si vous avez une preuve raisonnable qu'un attaquant a accédé à des données personnelles (clients, employés, prospects) et que ces données sont sensibles (financières, santé, identité), la notification est attendue.</li>
                <li>Le PFPDT met à disposition un formulaire de notification en ligne. Le remplir ne déclenche pas automatiquement une sanction — l'absence de notification, oui.</li>
                <li>Si vous traitez aussi des données de résidents de l'UE, le RGPD impose une notification à l'autorité compétente sous 72 heures.</li>
              </ul>
              <p className="mt-4">
                <strong>Restauration technique</strong> en parallèle :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Réinitialiser <em>tous</em> les mots de passe utilisateurs et administrateurs. Pas seulement ceux qui semblent compromis.</li>
                <li>Vérifier qu'aucune règle de transfert ou délégation de boîte mail n'a été créée par l'attaquant.</li>
                <li>Restaurer depuis une sauvegarde antérieure à la compromission, jamais sans validation.</li>
                <li>Reformater les machines compromises plutôt que de "nettoyer". C'est plus rapide et plus sûr.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Erreurs fréquentes à éviter
              </h2>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Tout éteindre tout de suite.</strong> Vous perdez les traces volatiles indispensables à l'analyse.</li>
                <li><strong>Payer une rançon sans avoir évalué les sauvegardes.</strong> Souvent inutile et toujours risqué.</li>
                <li><strong>Cacher l'incident en interne.</strong> Les collaborateurs comprennent toujours ce qui se passe. L'opacité crée la défiance, pas la confiance.</li>
                <li><strong>Communiquer trop tôt vers l'extérieur.</strong> Annoncer dans les heures qui suivent quelque chose qu'on rétractera dans la semaine.</li>
                <li><strong>Réutiliser les machines compromises sans reformatage complet.</strong> L'attaquant a souvent laissé un accès persistant.</li>
                <li><strong>Ne rien documenter.</strong> Sans timeline écrite, vous perdez les leçons et vous pénalisez votre assureur.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Préparation préventive : ce qu'il faut avoir avant
              </h2>
              <p>
                Le moment où on construit son plan de réponse, ce n'est pas pendant l'incident. C'est avant.
                Pour une PME suisse, un plan minimal tient sur deux pages A4 et contient :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Une liste de contacts d'urgence (IT interne, IT externe, assureur, juriste, autorité, communication).</li>
                <li>Une procédure d'isolement réseau réalisable par n'importe qui sur place.</li>
                <li>Une liste des données les plus critiques et de leurs sauvegardes (où, comment, par qui restaurées).</li>
                <li>Un modèle de communication interne et externe pré-rédigé.</li>
                <li>Les identifiants d'accès aux services critiques stockés dans un coffre-fort indépendant du tenant principal.</li>
              </ul>
              <p className="mt-4">
                Ce travail prend une journée. Il est <em>infiniment</em> moins cher que de l'improviser à 22 h
                un vendredi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                En résumé
              </h2>
              <p>
                Les trois choses qui font la différence dans une réponse d'incident PME :
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li><strong>La rapidité</strong> de l'endiguement initial (la première heure compte triple).</li>
                <li><strong>La rigueur</strong> de la documentation au fur et à mesure.</li>
                <li><strong>La transparence</strong> de la communication, en interne comme en externe.</li>
              </ol>
              <p className="mt-4">
                Aucun de ces trois éléments ne s'improvise. Le <em>Cap Sécurité</em> est exactement ce qui vous
                permet de cartographier vos risques et de poser un plan de réponse avant l'incident.
              </p>
            </section>

            <section className="bg-bg-inset border border-white/10 rounded-lg p-6 lg:p-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-bold text-fg mb-3">
                Préparer votre PME avant l'incident
              </h2>
              <p className="text-fg-secondary leading-relaxed mb-6">
                Le <em>Cap Sécurité</em> livre un diagnostic complet, une feuille de route à 12 mois et un
                plan de réponse d'incident. Forfait 900 CHF.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => onNavigate('services')}
                  className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-medium"
                >
                  Voir le Cap Sécurité <ArrowRight size={16} className="ml-1.5" />
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
