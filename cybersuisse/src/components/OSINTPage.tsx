import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SEOContent from './SEOContent'
import { MagnifyingGlass, CheckCircle, Globe, FileText, TrendUp, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface OSINTPageProps {
  onNavigate: (page: 'contact') => void
}

export default function OSINTPage({ onNavigate }: OSINTPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = language === 'en'
    ? {
        seoTitle: 'OSINT Analysis & Attack Surface Monitoring for SMEs | Biel/Bienne | CyberSuisse',
        seoDescription:
          'Business-focused OSINT for SMEs in Biel/Bienne: public exposure visibility, external risk monitoring, and actionable monthly security reporting integrated in subscription plans.',
        badge: 'OSINT for SMEs • Biel/Bienne • Switzerland',
        title: 'OSINT Analysis & Attack Surface Monitoring for SMEs',
        subtitle:
          'Open-source intelligence (OSINT) helps monitor and analyze publicly available information on the Internet to identify risk vectors that can affect your business.',
            definitionTitle: 'OSINT – Open-source intelligence in service of cybersecurity',
            definitionParagraph1:
              'OSINT (Open Source Intelligence) is the collection, analysis and operational use of publicly available information to extract actionable cybersecurity insight.',
            definitionParagraph2:
              'In practice, this includes public profiles, web documents, social media, news sites and public databases to identify potential exposure and threat signals affecting an organization.',
            riskListTitle: 'In a cyber context, OSINT helps detect:',
            riskList: [
              'Unintentionally published information that can facilitate attacks (technical details, exposed emails, employee profiles)',
              'Possible signs of data leakage or exposed credentials',
              'Signals attackers may leverage for targeted phishing or social engineering'
            ],
        valueTitle: 'Why this matters for your company',
        valueItems: [
          'Improves visibility on external threats and exposed public signals',
          'Feeds monthly security reports with concrete, up-to-date findings',
          'Gives small businesses practical cyber visibility without heavy internal resources'
        ],
        modelTitle: 'How OSINT fits into subscription plans',
        plans: [
          {
            name: 'Protection PME Essentiel',
            text: 'Basic exposure visibility and initial public presence checks.'
          },
          {
            name: 'Protection PME Active',
            text: 'Targeted OSINT integrated into strategic monthly reporting.'
          },
          {
            name: 'Protection PME Premium',
            text: 'Deeper analysis and integrated intelligence insights for high-risk contexts.'
          }
        ],
        processTitle: 'How OSINT works in our services',
        processItems: [
          'Analysis of your infrastructure public presence',
          'Identification of mentions or potential sensitive information leaks',
          'Correlation with your cybersecurity risk profile',
          'Concrete recommendations in monthly reports'
        ],
        framing:
          'OSINT is not positioned as an isolated technical product. It is a continuous intelligence layer that strengthens your monthly reports and improves your overall protection strategy.',
        ctaTitle: 'Need OSINT visibility for your SME?',
        ctaText:
          'Start with a short diagnostic and we will define the right level of OSINT monitoring for your monthly protection cycle.',
          complementaryTitle: 'OSINT as a complementary service',
          complementaryText:
            'If you need an independent deep-dive OSINT analysis or a targeted review of your public footprint (reputation review, specific investigation), this can also be provided on demand with a detailed report and tailored recommendations.',
        ctaPrimary: 'Schedule a free security diagnostic',
        ctaSecondary: 'Discover subscription plans'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Análise OSINT e Monitorização da Superfície de Ataque para PME | Biel/Bienne | CyberSuisse',
          seoDescription:
            'OSINT orientado a negócio para PME em Biel/Bienne: visibilidade de exposição pública, monitorização de riscos externos e recomendações acionáveis integradas em relatórios mensais.',
          badge: 'OSINT para PME • Biel/Bienne • Suíça',
          title: 'Análise OSINT e Veille da Superfície de Ataque para PME',
          subtitle:
            'A inteligência de fontes abertas (OSINT) permite monitorizar e analisar informações públicas disponíveis na Internet para identificar vetores de risco que podem afetar a sua empresa.',
          definitionTitle: 'OSINT ao serviço da cibersegurança da empresa',
          definitionParagraph1:
            'OSINT (Open Source Intelligence) é a recolha, análise e exploração de informação publicamente acessível para gerar inteligência acionável orientada à cibersegurança.',
          definitionParagraph2:
            'Inclui perfis públicos, documentos online, redes sociais, sites de notícias e bases de dados públicas para identificar sinais de exposição e risco para a organização.',
          riskListTitle: 'Num contexto cyber, o OSINT permite detetar:',
          riskList: [
            'Informação publicada involuntariamente que pode facilitar ataques (detalhes técnicos, emails públicos, perfis de colaboradores)',
            'Sinais de fuga de dados ou credenciais expostas publicamente',
            'Elementos exploráveis para phishing direcionado ou engenharia social'
          ],
          valueTitle: 'Porque isto importa para a empresa',
          valueItems: [
            'Aumenta a visibilidade sobre ameaças externas e sinais de exposição',
            'Alimenta relatórios mensais com evidências concretas e atuais',
            'Ajuda pequenas empresas a gerir risco sem equipa interna dedicada'
          ],
          modelTitle: 'Onde o OSINT entra nos planos',
          plans: [
            {
              name: 'Protection PME Essentiel',
              text: 'Visão básica de exposição e verificação inicial da presença pública.'
            },
            {
              name: 'Protection PME Active',
              text: 'OSINT direcionado integrado em relatórios estratégicos mensais.'
            },
            {
              name: 'Protection PME Premium',
              text: 'Análises aprofundadas e insights integrados para contextos de maior risco.'
            }
          ],
          processTitle: 'Como o OSINT funciona nos nossos serviços',
          processItems: [
            'Análise da presença pública da sua infraestrutura',
            'Identificação de menções ou fugas de informação sensível',
            'Correlação com os riscos de cibersegurança do seu contexto',
            'Recomendações concretas nos relatórios mensais'
          ],
          framing:
            'O OSINT não é apresentado como serviço técnico isolado. É uma camada contínua de inteligência que reforça os relatórios mensais e melhora a estratégia global de proteção.',
          ctaTitle: 'Precisa de visibilidade OSINT para a sua PME?',
          ctaText:
            'Comece com um diagnóstico rápido e definimos o nível de monitorização OSINT adequado ao seu ciclo mensal de proteção.',
          complementaryTitle: 'OSINT como serviço complementar',
          complementaryText:
            'Se precisar de uma análise OSINT independente e aprofundada, ou de uma revisão específica da presença pública (reputação digital ou investigação direcionada), este serviço pode ser fornecido sob pedido com relatório detalhado e recomendações personalizadas.',
          ctaPrimary: 'Agendar diagnóstico de segurança gratuito',
          ctaSecondary: 'Descobrir planos de assinatura'
        }
      : {
          seoTitle: 'Analyse OSINT & Veille de surface d’attaque pour PME | Biel/Bienne | CyberSuisse',
          seoDescription:
            'OSINT orienté business pour PME à Biel/Bienne: visibilité sur les risques externes, intégration dans les rapports mensuels et recommandations actionnables.',
          badge: 'OSINT pour PME • Biel/Bienne • Suisse',
          title: 'Analyse OSINT & Veille de surface d’attaque pour PME',
          subtitle:
            'L’intelligence de sources ouvertes (OSINT) permet de surveiller et analyser les informations publiques disponibles sur Internet afin d’identifier les vecteurs de risque susceptibles d’affecter votre entreprise.',
          definitionTitle: 'OSINT – Intelligence de Sources Ouvertes au service de votre sécurité',
          definitionParagraph1:
            'L’OSINT (Open Source Intelligence) désigne la collecte, l’analyse et l’exploitation d’informations publiquement disponibles pour en extraire des renseignements exploitables orientés vers la cybersécurité.',
          definitionParagraph2:
            'Cela inclut l’examen de données accessibles en ligne — profils publics, documents web, réseaux sociaux, sites d’actualités ou bases de données publiques — afin d’identifier des risques potentiels et des indices d’exposition d’une organisation.',
          riskListTitle: 'Dans un contexte cyber, l’OSINT permet de repérer:',
          riskList: [
            'Des informations publiées involontairement pouvant faciliter une attaque (détails techniques, courriels publics, profils employés)',
            'Des signes de fuite de données ou d’identifiants exposés publiquement',
            'Des éléments exploitables pour du phishing ciblé ou des attaques d’ingénierie sociale'
          ],
          valueTitle: 'Valeur pour votre entreprise',
          valueItems: [
            'Améliore la visibilité sur les menaces externes et les signaux d’exposition',
            'Alimente les rapports de sécurité mensuels avec des faits concrets',
            'Reste pertinent même pour les petites PME sans équipe interne'
          ],
          modelTitle: 'Comment OSINT s’intègre à nos plans d’abonnement',
          plans: [
            {
              name: 'Protection PME Essentiel',
              text: 'Vision basique de l’exposition publique et premiers contrôles ciblés.'
            },
            {
              name: 'Protection PME Active',
              text: 'OSINT dirigé intégré dans les rapports stratégiques mensuels.'
            },
            {
              name: 'Protection PME Premium',
              text: 'Analyses approfondies et insights intégrés pour les contextes plus sensibles.'
            }
          ],
          processTitle: 'Comment OSINT fonctionne dans nos services',
          processItems: [
            'Analyse de la présence publique de votre infrastructure',
            'Identification des mentions ou fuites d’informations sensibles',
            'Corrélation avec vos risques de cybersécurité',
            'Recommandations concrètes dans les rapports'
          ],
          framing:
            'L’OSINT n’est pas un service isolé. C’est une couche d’intelligence continue qui renforce les rapports mensuels et améliore la protection globale de votre PME.',
          ctaTitle: 'Besoin de visibilité OSINT pour votre PME?',
          ctaText:
            'Commencez par un diagnostic court et nous définissons le bon niveau de veille OSINT dans votre cycle mensuel de protection.',
          complementaryTitle: 'OSINT comme service complémentaire',
          complementaryText:
            'Si vous souhaitez une analyse OSINT approfondie indépendante ou un examen spécifique de votre présence publique (revue de réputation numérique ou investigation ciblée), ce service peut aussi être réalisé sur demande avec un rapport détaillé et des recommandations personnalisées.',
          ctaPrimary: 'Planifier un diagnostic de sécurité gratuit',
          ctaSecondary: 'Découvrir nos plans d’abonnement'
        }

  useEffect(() => {
    document.title = copy.seoTitle

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }
    description.setAttribute('content', copy.seoDescription)
  }, [copy.seoDescription, copy.seoTitle])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 cs-bg-redteam-diagonal text-white"
    >
      <SEOContent page="osint" title={copy.seoTitle} description={copy.seoDescription} />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="text-center mb-14" aria-labelledby="osint-title">
          <Badge className="mb-4 bg-red-950/60 text-red-300 border border-red-600/40">{copy.badge}</Badge>
          <h1 id="osint-title" className="text-4xl md:text-5xl font-bold mb-6">{copy.title}</h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">{copy.subtitle}</p>
        </section>

        <section className="mb-14" aria-labelledby="definition-title">
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-6 md:p-8">
              <h2 id="definition-title" className="text-3xl font-bold mb-5 flex items-center gap-2">
                <MagnifyingGlass size={28} className="text-red-400" />
                {copy.definitionTitle}
              </h2>
              <p className="text-white leading-relaxed mb-4">{copy.definitionParagraph1}</p>
              <p className="text-white leading-relaxed mb-6">{copy.definitionParagraph2}</p>

              <h3 className="text-xl font-semibold mb-4 text-white">{copy.riskListTitle}</h3>
              <ul className="space-y-3">
                {copy.riskList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14" aria-labelledby="value-title">
          <h2 id="value-title" className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Globe size={28} className="text-red-400" />
            {copy.valueTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.valueItems.map((item) => (
              <Card key={item} className="bg-[#1A1A1A] border-[#333] h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                    <p className="text-white">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14" aria-labelledby="plans-title">
          <h2 id="plans-title" className="text-3xl font-bold mb-6 flex items-center gap-2">
            <TrendUp size={28} className="text-red-400" />
            {copy.modelTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.plans.map((plan) => (
              <Card key={plan.name} className="bg-[#1A1A1A] border-[#333] h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{plan.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14" aria-labelledby="process-title">
          <h2 id="process-title" className="text-3xl font-bold mb-6 flex items-center gap-2">
            <MagnifyingGlass size={28} className="text-red-400" />
            {copy.processTitle}
          </h2>
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {copy.processItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10" aria-labelledby="framing-title">
          <Card className="bg-red-950/20 border-red-600/40">
            <CardContent className="p-6 md:p-8">
              <h3 id="framing-title" className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={24} className="text-red-400" />
                Positionnement OSINT
              </h3>
              <p className="text-white leading-relaxed">{copy.framing}</p>
            </CardContent>
          </Card>
        </section>

        <section className="pb-8" aria-labelledby="cta-title">
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-8 text-center">
              <h2 id="cta-title" className="text-3xl font-bold mb-3">{copy.ctaTitle}</h2>
              <p className="text-white mb-6 max-w-3xl mx-auto">{copy.ctaText}</p>
              <p className="text-white mb-6 max-w-4xl mx-auto">
                <span className="font-semibold">{copy.complementaryTitle}:</span> {copy.complementaryText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-3d" onClick={() => onNavigate('contact')}>
                  <EnvelopeSimple size={18} className="mr-2" />
                  {copy.ctaPrimary}
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary-3d" asChild>
                  <a href="/abonnements/pro">
                    {copy.ctaSecondary}
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.div>
  )
}
