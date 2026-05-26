import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CaretLeft } from '@phosphor-icons/react'
import { applyPageSeo, setStructuredData } from '@/components/SEOHelpers'

interface Props {
  onNavigate: (page: string) => void
}

const SLUG = 'rgpd-vs-lpd-suisse-pme-2026'
const TITLE = 'RGPD vs LPD suisse : ce qui change pour votre PME en 2026'
const DESCRIPTION =
  'Différences pratiques entre RGPD européen et nLPD suisse pour les PME. Obligations concrètes, sanctions, registre des traitements.'

export default function ArticleRgpdLpd({ onNavigate }: Props) {
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
          name: 'RGPD vs LPD suisse',
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
            <Badge variant="secondary" className="text-xs">Conformité</Badge>
            <span className="text-xs text-fg-secondary inline-flex items-center gap-1">
              <Clock size={12} /> 9 min de lecture
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight">
            RGPD vs LPD suisse : ce qui change pour votre PME en 2026
          </h1>

          <p className="mt-6 text-lg text-fg-secondary leading-relaxed">
            La nouvelle Loi suisse sur la protection des données (nLPD) est entrée en vigueur le 1<sup>er</sup>
            septembre 2023. Près de trois ans plus tard, beaucoup de PME suisses se demandent encore concrètement
            ce qui les concerne, et où la nLPD diffère vraiment du RGPD européen.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            Cet article fait le point pratique : champ d'application, obligations concrètes pour une PME basée
            en Suisse, et différences les plus importantes avec le RGPD. Sans jargon, et sans annoncer la
            catastrophe à chaque paragraphe.
          </p>

          <p className="mt-4 text-fg-secondary leading-relaxed">
            <strong>Disclaimer :</strong> je ne suis pas avocat. Cet article donne une lecture pragmatique pour
            une PME, pas un avis juridique. Si votre cas comporte une dimension internationale ou un risque
            réglementaire élevé, parlez-en avec un juriste spécialisé.
          </p>

          <div className="mt-12 space-y-12 text-fg-secondary leading-relaxed">

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Champ d'application : qui est concerné ?
              </h2>
              <p>
                Première différence importante :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>nLPD</strong> : s'applique à tout traitement de données personnelles effectué en Suisse, et aux traitements qui produisent des effets en Suisse. Elle protège uniquement les <em>personnes physiques</em> (les données des personnes morales ne sont plus protégées par la nLPD, contrairement à l'ancienne LPD).</li>
                <li><strong>RGPD</strong> : s'applique à tout traitement de données de personnes situées dans l'UE, peu importe où est établi le responsable de traitement.</li>
              </ul>
              <p className="mt-4">
                Pour une PME suisse, cela signifie en pratique :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Si vous traitez des données de clients ou prospects résidant en Suisse → nLPD.</li>
                <li>Si vous traitez des données de personnes résidant dans l'UE (newsletter, e-commerce, prestation transfrontalière) → RGPD <em>en plus</em>.</li>
                <li>Beaucoup de PME suisses tombent dans les deux régimes, et doivent appliquer le plus exigeant des deux sur chaque sujet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Bases légales du traitement
              </h2>
              <p>
                Les deux textes partagent la même logique : pour traiter des données personnelles, il faut une
                base légale claire.
              </p>
              <p className="mt-4">Bases courantes pour une PME :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Exécution d'un contrat</strong> (un client commande, vous traitez son adresse).</li>
                <li><strong>Obligation légale</strong> (conservation comptable, déclarations sociales).</li>
                <li><strong>Intérêt légitime</strong> (sécurité informatique, prévention de la fraude, marketing direct dans certaines limites).</li>
                <li><strong>Consentement</strong>, qui doit être libre, spécifique, éclairé et révocable.</li>
              </ul>
              <p className="mt-4">
                <strong>Différence concrète :</strong> le RGPD impose une base légale parmi six explicitement
                listées. La nLPD est plus souple sur la qualification, mais exige toujours une justification
                réelle et une information transparente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Droits des personnes
              </h2>
              <p>
                Les deux textes accordent essentiellement les mêmes droits aux personnes concernées : accès,
                rectification, effacement, opposition, portabilité. Quelques nuances :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Délai de réponse à une demande d'accès : 30 jours dans les deux cas, prolongeable de manière motivée.</li>
                <li>La nLPD reconnaît explicitement le droit à la remise des données dans un format usuel et lisible par machine.</li>
                <li>Le droit à l'effacement n'est jamais absolu, ni en LPD ni en RGPD : les obligations légales de conservation priment (10 ans pour la comptabilité en Suisse, par exemple).</li>
              </ul>
              <p className="mt-4">
                Pour une PME, l'essentiel est d'<strong>avoir un processus écrit</strong> pour traiter une
                demande quand elle arrive. Une demande mal traitée est ce qui finit en plainte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Registre des traitements
              </h2>
              <p>
                C'est probablement l'obligation la moins glamour, mais la plus regardée en cas de contrôle.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>nLPD</strong> : registre obligatoire pour le responsable de traitement et le sous-traitant. <em>Exception</em> : les PME de moins de 250 collaborateurs peuvent en être dispensées si leurs traitements ne présentent pas de risque élevé pour les personnes (pas de données sensibles à large échelle, pas de profilage à haut risque).</li>
                <li><strong>RGPD</strong> : registre obligatoire dès qu'il y a traitement régulier, ou traitement de données sensibles, ou traitement à risque élevé.</li>
              </ul>
              <p className="mt-4">
                Concrètement, pour une PME suisse de 30 personnes qui fait de la facturation, du marketing
                léger et de la gestion RH, je recommande toujours de tenir un registre, même quand
                l'exception théorique pourrait s'appliquer. C'est ce document qui vous sauve en cas de
                contrôle ou d'incident. Un tableur bien tenu suffit largement pour la plupart des PME.
              </p>
              <p className="mt-4">Ce que le registre doit contenir, au minimum :</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Le responsable du traitement (votre entreprise).</li>
                <li>Les finalités (pourquoi vous traitez ces données).</li>
                <li>Les catégories de données et de personnes concernées.</li>
                <li>Les destinataires (y compris les sous-traitants).</li>
                <li>Les transferts hors de Suisse / hors UE, le cas échéant.</li>
                <li>Les durées de conservation prévues.</li>
                <li>Les mesures de sécurité techniques et organisationnelles.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Notification de violation
              </h2>
              <p>
                C'est l'un des changements les plus concrets pour les PME suisses depuis 2023.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>nLPD</strong> : notification au PFPDT « dans les meilleurs délais » en cas de violation susceptible d'entraîner un risque élevé pour la personnalité ou les droits fondamentaux des personnes concernées. Pas de délai chiffré explicite dans la loi, mais l'esprit reste rapide.</li>
                <li><strong>RGPD</strong> : notification à l'autorité compétente sous 72 heures après en avoir pris connaissance.</li>
              </ul>
              <p className="mt-4">
                Côté communication aux personnes concernées, les deux textes l'imposent si le risque pour
                elles est élevé.
              </p>
              <p className="mt-4">
                <strong>Conseil pratique :</strong> documentez chaque incident, même ceux que vous décidez
                de ne pas notifier. La trace écrite de l'analyse de risque qui justifie la non-notification
                fait partie de votre conformité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Sanctions
              </h2>
              <p>
                Différence structurelle importante :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>RGPD</strong> : sanctions administratives prononcées contre l'<em>entreprise</em>, pouvant atteindre des montants significatifs en pourcentage du chiffre d'affaires mondial. Plafonds élevés, prévus pour avoir un effet dissuasif.</li>
                <li><strong>nLPD</strong> : sanctions <em>pénales</em>, prononcées contre la <em>personne physique</em> responsable de l'infraction (typiquement un dirigeant ou un responsable hiérarchique). Plafond à l'amende personnelle, et non un pourcentage du CA.</li>
              </ul>
              <p className="mt-4">
                Cette différence est moins anodine qu'elle en a l'air. En Suisse, une violation grave de la
                LPD peut concerner directement et personnellement le dirigeant, pas seulement la société.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Cas pratiques pour une PME suisse
              </h2>
              <p>
                <strong>Fiduciaire à Bienne, 12 collaborateurs.</strong> Traite des données financières et
                fiscales de clients (PME et particuliers). Doit tenir un registre, formaliser sa politique
                de confidentialité, encadrer ses sous-traitants (logiciel comptable cloud, hébergeur), et
                avoir un plan de réponse à incident. Le risque "données sensibles" rend l'exception PME
                inopérante.
              </p>
              <p className="mt-4">
                <strong>Bureau d'architectes à Neuchâtel, 8 collaborateurs.</strong> Traite essentiellement
                des données B2B et des coordonnées de clients privés. Obligations plus légères, mais une
                politique de confidentialité publique sur le site, des contrats de sous-traitance écrits
                (notamment pour les outils cloud) et un registre simplifié restent attendus.
              </p>
              <p className="mt-4">
                <strong>PME industrielle à Granges, 35 collaborateurs, clients en France et Allemagne.</strong>
                Tombe sous nLPD <em>et</em> RGPD. Doit en pratique appliquer le RGPD (plus exigeant) sur la
                plupart des sujets : registre, information transparente, encadrement strict des transferts,
                notification de violation sous 72 heures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-fg mb-4">
                Par où commencer concrètement
              </h2>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li>Lister vos traitements principaux (facturation, RH, marketing, support client, sécurité IT).</li>
                <li>Identifier vos sous-traitants (M365, comptabilité cloud, hébergement, e-mailing) et signer un contrat de sous-traitance avec chacun.</li>
                <li>Publier ou mettre à jour votre politique de confidentialité sur votre site web.</li>
                <li>Désigner une personne référente en interne pour les demandes liées aux données.</li>
                <li>Documenter votre processus de notification de violation.</li>
                <li>Auditer une fois par an que ce qui est écrit correspond à ce qui se fait.</li>
              </ol>
              <p className="mt-4">
                La conformité n'est pas un état, c'est un entretien. Une PME qui fait sérieusement ces six
                étapes est <em>très</em> loin du tout-venant.
              </p>
            </section>

            <section className="bg-bg-inset border border-white/10 rounded-lg p-6 lg:p-8 mt-12">
              <h2 className="text-xl lg:text-2xl font-bold text-fg mb-3">
                Mettre en place une conformité réaliste
              </h2>
              <p className="text-fg-secondary leading-relaxed mb-6">
                Le <em>Cap Sécurité</em> inclut un volet conformité nLPD / RGPD adapté à votre taille, sans
                vous faire signer dix politiques que personne ne lira. Forfait 900 CHF.
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
