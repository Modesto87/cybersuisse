import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CaretLeft } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface Props {
  onNavigate: (page: string) => void
}

const SLUG = 'reconnaitre-email-phishing-30-secondes'
const TITLE = 'Reconnaître un email de phishing en 30 secondes'
const DESCRIPTION =
  "5 signaux qui démasquent un email de phishing en moins de 30 secondes. Méthode simple, utilisable par tous vos collaborateurs."

export default function ArticlePhishing30s({ onNavigate }: Props) {
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
          name: 'Reconnaître un email de phishing',
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
            <Badge variant="secondary" className="text-xs">Sensibilisation</Badge>
            <span className="text-xs text-fg-secondary inline-flex items-center gap-1">
              <Clock size={12} /> 6 min de lecture
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight">
            Reconnaître un email de phishing en 30 secondes
          </h1>

          <p className="mt-6 text-lg text-fg-secondary leading-relaxed">
            La plupart des attaques contre les PME suisses commencent par un email. Pas un email sophistiqué :
            un email basique, qui aurait pu être démasqué en moins d'une minute si quelqu'un avait pris le
            temps de regarder cinq choses précises.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            Cet article décrit cette méthode. Elle tient sur une carte de visite, et c'est exactement le genre
            de chose que je donne aux équipes lors d'un <em>Bouclier Humain</em>. Vous pouvez la transmettre
            à vos collaborateurs telle quelle.
          </p>

          <div className="mt-12 space-y-12 text-fg-secondary leading-relaxed">

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Signal 1 — L'expéditeur réel
              </h2>
              <p>
                Le nom affiché ne veut rien dire. N'importe qui peut envoyer un email signé "Crédit Suisse"
                ou "Direction générale". Ce qui compte, c'est l'adresse réelle après le @.
              </p>
              <p className="mt-4">À regarder en 5 secondes :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Le domaine après @ correspond-il à l'organisation prétendue ?</li>
                <li>Y a-t-il un caractère manipulé (un <code>0</code> à la place du <code>o</code>, un <code>rn</code> qui imite un <code>m</code>) ?</li>
                <li>L'extension est-elle inhabituelle (<code>.info</code>, <code>.xyz</code>, <code>.ru</code> pour une banque suisse) ?</li>
              </ul>
              <p className="mt-4">
                Sur un téléphone, l'adresse est souvent masquée. Apprenez à vos équipes à appuyer longuement
                sur l'expéditeur pour la voir en entier <em>avant</em> de cliquer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Signal 2 — Urgence ou peur
              </h2>
              <p>
                Un phishing efficace ne vous laisse pas le temps de réfléchir. Il vous met sous pression :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>« Votre compte sera bloqué dans 24 heures. »</li>
                <li>« Action urgente requise — paiement à effectuer aujourd'hui. »</li>
                <li>« Le directeur attend votre virement pour midi, c'est confidentiel. »</li>
                <li>« Votre colis ne pourra pas être livré sans confirmation. »</li>
              </ul>
              <p className="mt-4">
                <strong>Règle simple : plus l'urgence est forte, plus il faut prendre son temps.</strong> Une
                vraie urgence se vérifie par téléphone, sur le numéro habituel — jamais celui indiqué dans
                l'email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Signal 3 — Les liens
              </h2>
              <p>
                Un lien dans un email peut afficher n'importe quel texte et pointer vers n'importe où. Le texte
                <code> www.postfinance.ch</code> peut très bien rediriger vers un site russe.
              </p>
              <p className="mt-4">Méthode : <strong>survol sans cliquer</strong>.</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Sur ordinateur, passez la souris sur le lien sans cliquer. L'URL réelle apparaît en bas de l'écran.</li>
                <li>Sur mobile, appuyez longuement sur le lien : une prévisualisation s'affiche.</li>
                <li>Si l'URL réelle ne correspond pas au texte affiché, c'est un signal très fort.</li>
                <li>Méfiez-vous des raccourcisseurs (<code>bit.ly</code>, <code>tinyurl</code>) dans un contexte professionnel.</li>
              </ul>
              <p className="mt-4">
                Dans le doute, n'utilisez jamais le lien. Tapez l'adresse vous-même dans votre navigateur, ou
                passez par votre favori habituel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Signal 4 — Les pièces jointes
              </h2>
              <p>
                Une pièce jointe inattendue est un signal d'alerte par défaut, même si elle vient d'un contact
                connu. Et il y a quelques types de fichiers qui devraient déclencher une vraie pause :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><code>.exe</code>, <code>.bat</code>, <code>.cmd</code>, <code>.scr</code> : jamais légitimes dans un email professionnel.</li>
                <li><code>.zip</code> protégé par mot de passe : technique classique pour échapper aux antivirus.</li>
                <li>Documents Office qui demandent d'activer les macros : refus systématique.</li>
                <li>PDF qui ouvrent une page de connexion : très souvent du phishing.</li>
              </ul>
              <p className="mt-4">
                Si vous attendiez vraiment un document, mais que la pièce jointe vous paraît bizarre, appelez
                l'expéditeur avant d'ouvrir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Signal 5 — Les incohérences contextuelles
              </h2>
              <p>
                C'est le signal le plus difficile à apprendre, mais le plus fiable. Posez-vous trois questions :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Attendais-je ce message ?</strong> Une facture d'un fournisseur avec qui je n'ai pas de relation. Un colis que je n'ai pas commandé. Un changement de RIB que mon comptable n'a jamais évoqué.</li>
                <li><strong>Le ton correspond-il à l'expéditeur ?</strong> Mon patron ne signe jamais "Cordialement, M. Dupont". Mon partenaire commercial ne demande jamais un virement en CHF urgents par email.</li>
                <li><strong>Le canal est-il habituel ?</strong> Si une demande passe normalement par un portail ou un téléphone, pourquoi arrive-t-elle par email cette fois ?</li>
              </ul>
              <blockquote className="mt-6 border-l-4 border-brand-amber pl-4 py-2 italic">
                Le phishing exploite le pilote automatique. Cinq secondes de "pourquoi est-ce que je reçois ça
                maintenant ?" suffisent souvent à le démasquer.
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Que faire si vous avez cliqué ?
              </h2>
              <p>
                Personne n'est à l'abri. Si vous avez cliqué sur un lien suspect ou saisi vos identifiants sur
                une fausse page, voici l'ordre des actions :
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li><strong>Ne paniquez pas, ne supprimez rien.</strong> Les traces sont précieuses pour l'analyse.</li>
                <li>Déconnectez le poste du réseau (Wi-Fi coupé, câble débranché).</li>
                <li>Changez immédiatement le mot de passe du compte concerné, depuis un autre appareil.</li>
                <li>Activez (ou revérifiez) la MFA sur ce compte.</li>
                <li>Prévenez votre responsable IT ou votre prestataire. Plus c'est rapide, moins ça coûte.</li>
                <li>Si une fraude financière est en cours, contactez immédiatement la banque pour bloquer l'opération.</li>
              </ol>
              <p className="mt-4">
                En Suisse, vous pouvez également signaler l'incident à l'OFCS (Office fédéral de la cybersécurité) :
                cela ne déclenche pas d'enquête lourde, mais contribue à la cartographie nationale des menaces.
              </p>
            </section>

            <section className="bg-bg-inset border border-white/10 rounded-lg p-6 lg:p-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-bold text-fg mb-3">
                Former vos équipes en 90 minutes
              </h2>
              <p className="text-fg-secondary leading-relaxed mb-6">
                Le <em>Bouclier Humain</em> reprend cette méthode et l'ancre dans des exemples concrets, en
                présentiel ou en visio. Dès 550 CHF jusqu'à 10 participants. Aide-mémoire à afficher au bureau
                fourni.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => onNavigate('services')}
                  className="bg-brand-amber text-brand-navy hover:bg-brand-amber/90 font-medium"
                >
                  Voir le Bouclier Humain <ArrowRight size={16} className="ml-1.5" />
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
