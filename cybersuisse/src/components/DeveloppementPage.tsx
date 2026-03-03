import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SEOContent from '@/components/SEOContent'
import { CheckCircle, Shield, Globe, ChartLineUp, Envelope, ArrowRight, Wrench } from '@phosphor-icons/react'
import developmentImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'
import { useTranslation } from 'react-i18next'

interface DeveloppementPageProps {
  onNavigate: (page: 'contact') => void
}

export default function DeveloppementPage({ onNavigate }: DeveloppementPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = language === 'en'
    ? {
        seoTitle: 'Secure Web Development for SMEs in Biel/Bienne | CyberSuisse',
        seoDescription:
          'Professional website creation with built-in cybersecurity from day one. Secure architecture, HTTPS/SSL, vulnerability mitigation, SEO and performance for SMEs.',
        imageAlt: 'Secure web development and responsive design for businesses in Biel/Bienne',
        badge: 'Secure Web Conception • SME-focused',
        title: 'Secure Web Development for SMEs',
        subtitle: 'Build a professional website with security integrated from the design phase.',
        intro:
          'A website is not only about aesthetics — it must resist common attacks, protect customer data in compliance with the new Swiss FADP (nLPD), and support safe online growth for your business. We help companies in Biel/Bienne and across Switzerland build reliable digital foundations.',
        whyTitle: 'Why create a secure website for your SME?',
        whyItems: [
          'An insecure website can expose customer data, brand reputation and business continuity.',
          'SMEs are regularly targeted through predictable vulnerabilities (XSS, injection, weak access controls).',
          'Security at development time costs less than emergency fixes after incidents.'
        ],
        doTitle: 'Our secure web creation and development services',
        doItems: [
          'Secure-by-design architecture from the start',
          'Basic vulnerability review and mitigation',
          'Correct HTTPS/SSL configuration',
          'Protection against common attacks (SQL injection, XSS, CSRF)',
          'SEO and performance fundamentals for SME growth',
          'Update and maintenance recommendations, with optional security tooling'
        ],
        offerTitle: 'À la carte service options',
        offerSubtitle: 'Indicative pricing based on scope and technical complexity.',
        options: [
          {
            name: 'Option 1 — Secure Showcase Website',
            price: 'CHF 500 – 1,250',
            target: 'For SMEs needing a secure and professional digital presence.',
            features: [
              'Up to 5 pages',
              'Responsive design (mobile/tablet/desktop)',
              'Security best practices in development',
              'HTTPS/SSL setup',
              'Basic SEO (titles, URLs, meta tags)',
              'Secure contact form',
              'Hosting & maintenance optional'
            ]
          },
          {
            name: 'Option 2 — SME Professional Website + Security & SEO',
            price: 'CHF 1,250 – 3,000',
            target: 'For SMEs that want a complete, optimized site with stronger security.',
            features: [
              'Consulting and requirements definition',
              'Up to ~10 pages',
              'Custom design + light branding',
              'Enhanced security (XSS/injection mitigation, secure configuration)',
              'Local SME SEO optimization (keywords, Google Business, sitemap)',
              'CMS training for content updates',
              'Secure hosting option with maintenance'
            ]
          },
          {
            name: 'Option 3 — Secure & High-Performance Web Solution',
            price: 'CHF 3,000 – 6,000+',
            target: 'For ambitious SMEs or projects with advanced requirements.',
            features: [
              'Pre-project audit and web strategy',
              'Full custom design',
              'Professional CMS + security extensions',
              'Advanced features (blog, multilingual, custom modules)',
              'Deep security hardening and permission review',
              'Advanced SEO + analytics setup',
              'Optional monthly maintenance/support'
            ]
          }
        ],
        integrationTitle: 'Integration with CyberSuisse Protect™',
        integrationText:
          'This service complements monthly security plans: a secure website foundation is reinforced by continuous risk monitoring and recurring actionable reports.',
        integrationPoints: [
          'Essentiel: baseline visibility and basic controls',
          'Active: strategic follow-up with prioritized adjustments',
          'Premium: advanced risk alignment and deeper protection support'
        ],
        ctaTitle: 'Ready to build a secure website for your SME?',
        ctaText: 'Start with a free diagnostic to define scope, priorities, and the right secure development option.',
        ctaPrimary: 'Schedule free security diagnostic',
        ctaSecondary: 'Discover subscription plans'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Desenvolvimento Web Seguro para PME em Biel/Bienne | CyberSuisse',
          seoDescription:
            'Criação de websites profissionais com cibersegurança integrada desde o início. Arquitetura segura, HTTPS/SSL, mitigação de vulnerabilidades, SEO e performance para PME.',
          imageAlt: 'Desenvolvimento web seguro e design responsivo para empresas em Biel/Bienne',
          badge: 'Conceção Web Segura • Foco PME',
          title: 'Desenvolvimento Web Seguro para PME',
          subtitle: 'Crie um website profissional com segurança integrada desde a fase de conceção.',
          intro:
            'Um website não é apenas estética — deve resistir a ataques, proteger dados de clientes de acordo com a nova lei suíça de proteção de dados (nLPD) e permitir crescimento online com segurança. Apoiamos empresas em Biel/Bienne e em toda a Suíça na criação de bases digitais sólidas.',
          whyTitle: 'Porquê criar um website seguro para a sua PME?',
          whyItems: [
            'Um site inseguro pode expor dados, reputação e continuidade do negócio.',
            'PME são alvo frequente de vulnerabilidades previsíveis (XSS, injeções, acessos fracos).',
            'Aplicar segurança no desenvolvimento é mais eficiente do que corrigir após incidentes.'
          ],
          doTitle: 'Os nossos serviços de criação e desenvolvimento web',
          doItems: [
            'Arquitetura secure by design desde o início',
            'Revisão e mitigação de vulnerabilidades básicas',
            'Configuração correta de HTTPS/SSL',
            'Proteção contra ataques comuns (injeção SQL, XSS, CSRF)',
            'SEO e performance essenciais para PME',
            'Recomendações de atualização/manutenção e ferramentas opcionais de segurança'
          ],
          offerTitle: 'Prestation à la carte',
          offerSubtitle: 'Preço indicativo conforme escopo e complexidade técnica.',
          options: [
            {
              name: 'Option 1 — Site Vitrine Sécurisé',
              price: 'CHF 500 – 1 250',
              target: 'Ideal para PME que precisam de presença digital profissional e segura.',
              features: [
                'Site vitrine até 5 páginas',
                'Design responsive (mobile/tablet/desktop)',
                'Boas práticas de segurança de base',
                'Configuração HTTPS/SSL',
                'SEO de base (títulos, URLs, meta tags)',
                'Formulário de contacto seguro',
                'Alojamento e manutenção opcionais'
              ]
            },
            {
              name: 'Option 2 — Site PME Professionnel + Sécurité & SEO',
              price: 'CHF 1 250 – 3 000',
              target: 'Para PME que querem um site completo e otimizado com segurança integrada.',
              features: [
                'Conselho e definição de necessidades',
                'Site até ~10 páginas',
                'Design personalizado + branding leve',
                'Segurança reforçada (XSS/injeções/configurações seguras)',
                'SEO local para PME (keywords, Google Business, sitemap)',
                'Formação CMS para gestão de conteúdo',
                'Opção de alojamento seguro com manutenção'
              ]
            },
            {
              name: 'Option 3 — Solution Web Sécurisée & Performante',
              price: 'CHF 3 000 – 6 000+',
              target: 'Para PME ambiciosas ou necessidades web específicas.',
              features: [
                'Auditoria prévia e estratégia web',
                'Design totalmente personalizado',
                'CMS profissional + extensões de segurança',
                'Funcionalidades avançadas (blog, multi-idioma, módulos)',
                'Segurança aprofundada e revisão de permissões',
                'SEO otimizado + analytics configurado',
                'Opção de manutenção mensal / suporte'
              ]
            }
          ],
          integrationTitle: 'Intégration avec CyberSuisse Protect™',
          integrationText:
            'Este serviço complementa os planos mensais: a base web segura é reforçada por monitorização contínua e relatórios periódicos acionáveis.',
          integrationPoints: [
            'Essentiel: visibilidade base e controlos iniciais',
            'Active: acompanhamento estratégico com ajustes priorizados',
            'Premium: alinhamento de risco avançado e proteção reforçada'
          ],
          ctaTitle: 'Pronto para criar um site seguro para a sua PME?',
          ctaText: 'Comece com um diagnóstico gratuito para definir escopo, prioridades e a opção certa.',
          ctaPrimary: 'Agendar diagnóstico de segurança gratuito',
          ctaSecondary: 'Descobrir planos de assinatura'
        }
      : {
          seoTitle: 'Développement Web Sécurisé pour PME à Biel/Bienne | CyberSuisse',
          seoDescription:
            'Conception web sécurisée pour PME: sites professionnels, performants et protégés dès la conception avec bonnes pratiques cybersécurité, SEO et maintenance recommandée.',
          imageAlt: 'Développement web sécurisé et design responsive pour entreprises à Bienne/Biel',
          badge: 'Conception Web Sécurisée • PME',
          title: 'Développement Web Sécurisé pour PME',
          subtitle: 'Créer un site web professionnel avec sécurité intégrée dès la conception.',
          intro:
            'Un site web n’est pas seulement esthétique — il doit être conçu pour résister aux attaques, protéger les données de vos clients selon la nouvelle loi suisse sur la protection des données (nLPD) et faciliter une croissance sûre de votre activité en ligne. Nous accompagnons les PME de Bienne/Biel et de toute la Suisse dans la création de fondations digitales fiables.',
          whyTitle: 'Pourquoi créer un site web sécurisé pour votre PME ?',
          whyItems: [
            'Un site vulnérable peut impacter la réputation, la continuité d’activité et la confiance client.',
            'Les PME sont ciblées par des attaques opportunistes sur des failles connues (XSS, injections, accès faibles).',
            'Intégrer la sécurité pendant le développement réduit les coûts de correction après incident.'
          ],
          doTitle: 'Nos services de création et développement web sécurisés',
          doItems: [
            'Architecture secure by design dès le départ',
            'Revue et mitigation des vulnérabilités de base',
            'Configuration HTTPS/SSL correcte',
            'Protection contre les attaques courantes (injection SQL, XSS, CSRF)',
            'SEO et performance adaptés aux objectifs PME',
            'Recommandations de mises à jour/maintenance et outils de sécurité optionnels'
          ],
          offerTitle: 'Prestation à la carte',
          offerSubtitle: 'Prix indicatifs selon périmètre, complexité et besoins métier.',
          options: [
            {
              name: '🟢 Option 1 — Site Vitrine Sécurisé',
              price: 'CHF 500 – 1 250',
              target: 'Idéal pour PME qui ont besoin d’une présence digitale professionnelle et sécurisée.',
              features: [
                'Site vitrine jusqu’à 5 pages',
                'Design responsive (mobile, tablette, desktop)',
                'Développement avec bonnes pratiques de sécurité de base',
                'Configuration HTTPS/SSL',
                'SEO de base (titres, URLs, balises meta)',
                'Formulaire de contact sécurisé',
                'Hébergement & maintenance optionnels'
              ]
            },
            {
              name: '🔵 Option 2 — Site PME Professionnel + Sécurité & SEO',
              price: 'CHF 1 250 – 3 000',
              target: 'Pour PME qui veulent un site plus complet, optimisé et sécurisé.',
              features: [
                'Conseils et définition de besoins',
                'Site jusqu’à ~10 pages',
                'Design personnalisé + branding léger',
                'Sécurité renforcée (XSS, injections, configurations sécurisées)',
                'SEO PME local (mots-clés, Google Business, sitemap)',
                'Formation CMS pour mise à jour de contenu',
                'Option hébergement sécurisé avec maintenance'
              ]
            },
            {
              name: '🔴 Option 3 — Solution Web Sécurisée & Performante',
              price: 'CHF 3 000 – 6 000+',
              target: 'Pour PME ambitieuses ou sites avec besoins spécifiques.',
              features: [
                'Audit préalable et stratégie web',
                'Design sur mesure complet',
                'CMS professionnel + extensions de sécurité',
                'Fonctionnalités avancées (blog, multi-langue, modules personnalisés)',
                'Sécurité approfondie (mitigation, revue permissions, protections appliquées)',
                'SEO optimisé + analytics configurés',
                'Option maintenance mensuelle / support technique'
              ]
            }
          ],
          integrationTitle: 'Intégration avec CyberSuisse Protect™',
          integrationText:
            'Le développement web sécurisé complète directement nos abonnements mensuels: la base technique du site est renforcée ensuite par une surveillance continue et des rapports de sécurité actionnables.',
          integrationPoints: [
            'Plan Essentiel: contrôles de base et visibilité initiale des risques',
            'Plan Active: suivi stratégique avec priorités de correction',
            'Plan Premium: analyse avancée et accompagnement renforcé'
          ],
          ctaTitle: 'Prêt à lancer un site web sécurisé pour votre PME ?',
          ctaText: 'Planifiez un diagnostic gratuit pour cadrer le périmètre, le budget et l’option la plus adaptée.',
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
      <SEOContent page="developpement" title={copy.seoTitle} description={copy.seoDescription} />

      <div className="container mx-auto px-4 max-w-6xl">
        <section className="text-center mb-14" aria-labelledby="dev-title">
          <Badge className="mb-4 bg-red-950/60 text-red-300 border border-red-600/40">{copy.badge}</Badge>
          <h1 id="dev-title" className="text-4xl md:text-5xl font-bold mb-6">{copy.title}</h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-4">{copy.subtitle}</p>
          <p className="text-white max-w-4xl mx-auto leading-relaxed">{copy.intro}</p>
        </section>

        <section className="mb-14">
          <div className="relative w-full max-w-5xl mx-auto h-80 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={developmentImage}
              alt={copy.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-transparent" />
          </div>
        </section>

        <section className="mb-14" aria-labelledby="why-title">
          <h2 id="why-title" className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Shield size={28} className="text-red-400" />
            {copy.whyTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.whyItems.map((item) => (
              <Card key={item} className="bg-[#1A1A1A] border-[#333] h-full">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                  <p className="text-white">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14" aria-labelledby="what-title">
          <h2 id="what-title" className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Wrench size={28} className="text-red-400" />
            {copy.doTitle}
          </h2>
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {copy.doItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14" aria-labelledby="offers-title">
          <h2 id="offers-title" className="text-3xl font-bold mb-3 flex items-center gap-2">
            <ChartLineUp size={28} className="text-red-400" />
            {copy.offerTitle}
          </h2>
          <p className="text-white mb-6">{copy.offerSubtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {copy.options.map((option) => (
              <Card key={option.name} className="bg-[#1A1A1A] border-[#333] h-full">
                <CardHeader>
                  <h3 className="text-white text-xl font-semibold leading-none tracking-tight">{option.name}</h3>
                  <p className="text-red-300 font-semibold">{option.price}</p>
                  <p className="text-white text-sm">{option.target}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-white text-sm">
                        <CheckCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" weight="fill" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="integration-title">
          <Card className="bg-red-950/20 border-red-600/40">
            <CardContent className="p-6 md:p-8">
              <h2 id="integration-title" className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Globe size={28} className="text-red-400" />
                {copy.integrationTitle}
              </h2>
              <p className="text-white leading-relaxed mb-5">{copy.integrationText}</p>
              <ul className="space-y-2">
                {copy.integrationPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-red-400 mt-1 flex-shrink-0" weight="fill" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="pb-8" aria-labelledby="cta-title">
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-8 text-center">
              <h2 id="cta-title" className="text-3xl font-bold mb-3">{copy.ctaTitle}</h2>
              <p className="text-white mb-6 max-w-3xl mx-auto">{copy.ctaText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary-3d" onClick={() => onNavigate('contact')}>
                  <Envelope size={18} className="mr-2" />
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
