import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, FileText, Clock, CreditCard } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface CGVPageProps {
  onNavigate: (page: string) => void
}

export default function CGVPage({ onNavigate }: CGVPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]
  const copy = (language === 'en'
    ? {
        back: 'Back to home',
        title: 'Terms and Conditions of Sale',
        subtitle: 'Terms applicable to CyberSuisse cybersecurity services',
        updated: 'Last updated: January 2024',
        sections: {
          s1: {
            title: '1. Purpose and scope',
            p1: 'These Terms and Conditions of Sale govern all cybersecurity services provided by Modesto, a freelance cybersecurity expert operating under the CyberSuisse name in Switzerland.',
            p2: 'These conditions apply to all services offered: penetration testing (pentest), CRA audit, secure development, and any cybersecurity consulting services.'
          },
          s2: {
            title: '2. Service description',
            pentestTitle: 'Penetration testing (Pentest)',
            pentestText: 'Evaluation of information system security via controlled attack simulations, including a detailed report and recommendations.',
            craTitle: 'CRA Audit (Cyber Resilience Act)',
            craText: 'Service under development – compliance audit with the upcoming European cyber resilience regulation. Availability soon.',
            devTitle: 'Secure development',
            devText: 'Creation of secure applications and websites, code review, and integration of security best practices from the design phase.'
          },
          s3: {
            title: '3. Pricing and payment terms',
            p1: 'Prices are established via a tailored quote based on the complexity and duration of the assignment. Each project is evaluated individually according to its specifics.',
            paymentTitle: 'Payment terms:',
            paymentItems: [
              '30% deposit upon order depending on the scope of the assignment',
              'Balance due within 30 days after delivery of the final deliverable',
              'Payment by bank transfer or by prior agreement',
              'Late penalties: 5% per month of delay'
            ],
            note: 'All prices are in Swiss francs (CHF) and exclude VAT if applicable.'
          },
          s4: {
            title: '4. Delivery timelines',
            p1: 'Execution timelines are specified in each quote and start after:',
            items1: [
              'Signature of the order form or written acceptance of the quote',
              'Receipt of the deposit if required',
              'Provision of all necessary elements by the client'
            ],
            p2: 'In case of delay attributable to the client, timelines are extended accordingly. Typical indicative timelines:',
            items2: ['Simple pentest: 5–10 business days', 'Security audit: 10–15 business days', 'Development: according to specifications']
          },
          s5: {
            title: '5. Confidentiality and security',
            p1: 'CyberSuisse commits to the strictest confidentiality regarding all information communicated by the client.',
            items: [
              'Signing of a non-disclosure agreement (NDA) if required',
              'Secure storage of all client data',
              'Destruction of sensitive data after the assignment as agreed',
              'Compliance with Swiss and European regulations (GDPR/LPD)'
            ],
            p2: 'Penetration tests are carried out within a strictly defined and authorized scope, without risk to client systems.'
          },
          s6: {
            title: '6. Limitation of liability',
            p1: 'CyberSuisse liability is limited to direct and foreseeable damages and shall not exceed the amount of the related service.',
            p2: 'CyberSuisse cannot be held liable for:',
            items: [
              'Indirect damages, loss of business, or data loss',
              'Incorrect use of the recommendations provided',
              'Incidents related to the client’s infrastructure',
              'Evolution of threats after the assignment'
            ],
            pentestTitle: 'Regarding penetration tests (pentest):',
            pentestText: 'A penetration test certifies the presence or absence of vulnerabilities at a specific date. Due to evolving cyber threats and systems, CyberSuisse cannot guarantee that no new vulnerability will appear after the test date. Regular testing is recommended to maintain an optimal security level.',
            insurance: 'Professional liability insurance covers the activity.'
          },
          s7: {
            title: '7. Intellectual property',
            p1: 'Reports, developed tools, and methodologies remain the property of CyberSuisse unless otherwise agreed in writing.',
            p2: 'The client has the right to use deliverables for their own needs. Any reproduction or dissemination to third parties requires prior agreement from CyberSuisse.'
          },
          s8: {
            title: '8. Applicable law and jurisdiction',
            p1: 'These terms are governed by Swiss law. Any dispute will be subject to the jurisdiction of the courts of the Canton of Bern.',
            p2: 'In case of discrepancies between language versions, the French version shall prevail.'
          }
        },
        contactTitle: 'Questions about our terms?',
        contactText: 'Feel free to contact us for any clarification',
        contactButton: 'Contact us'
      }
    : language === 'pt'
      ? {
          back: 'Voltar ao início',
          title: 'Condições Gerais de Venda',
          subtitle: 'Condições aplicáveis aos serviços de cibersegurança da CyberSuisse',
          updated: 'Última atualização: Janeiro de 2024',
          sections: {
            s1: {
              title: '1. Objeto e âmbito',
              p1: 'As presentes Condições Gerais de Venda regulam todos os serviços de cibersegurança prestados por Modesto, especialista freelance em cibersegurança sob a denominação CyberSuisse, estabelecido na Suíça.',
              p2: 'Estas condições aplicam-se a todos os serviços: testes de intrusão (pentest), auditoria CRA, desenvolvimento seguro e quaisquer serviços de consultoria em cibersegurança.'
            },
            s2: {
              title: '2. Descrição dos serviços',
              pentestTitle: 'Testes de intrusão (Pentest)',
              pentestText: 'Avaliação da segurança de sistemas de informação por simulação de ataques controlados, incluindo relatório detalhado e recomendações.',
              craTitle: 'Auditoria CRA (Cyber Resilience Act)',
              craText: 'Serviço em desenvolvimento – auditoria de conformidade com o futuro regulamento europeu de ciber-resiliência. Disponível em breve.',
              devTitle: 'Desenvolvimento seguro',
              devText: 'Criação de aplicações e sites seguros, auditoria de código e integração de boas práticas de segurança desde a conceção.'
            },
            s3: {
              title: '3. Preços e condições de pagamento',
              p1: 'Os preços são definidos por orçamento personalizado em função da complexidade e duração da missão. Cada projeto é avaliado individualmente.',
              paymentTitle: 'Condições de pagamento:',
              paymentItems: [
                'Adiantamento de 30% no pedido, conforme a dimensão da missão',
                'Saldo a 30 dias após entrega do resultado final',
                'Pagamento por transferência bancária ou conforme acordo prévio',
                'Juros de mora: 5% ao mês de atraso'
              ],
              note: 'Todos os preços são em francos suíços (CHF) e excluem IVA se aplicável.'
            },
            s4: {
              title: '4. Prazos de execução',
              p1: 'Os prazos de execução são fixados em cada orçamento e contam a partir de:',
              items1: [
                'Assinatura da encomenda ou aceitação escrita do orçamento',
                'Receção do adiantamento, se necessário',
                'Fornecimento de todos os elementos necessários pelo cliente'
              ],
              p2: 'Em caso de atraso imputável ao cliente, os prazos são prolongados. Prazos indicativos típicos:',
              items2: ['Pentest simples: 5–10 dias úteis', 'Auditoria de segurança: 10–15 dias úteis', 'Desenvolvimento: conforme especificações']
            },
            s5: {
              title: '5. Confidencialidade e segurança',
              p1: 'A CyberSuisse compromete-se a respeitar a confidencialidade mais estrita relativamente a todas as informações comunicadas pelo cliente.',
              items: [
                'Assinatura de acordo de confidencialidade (NDA) se necessário',
                'Armazenamento seguro de todos os dados do cliente',
                'Destruição de dados sensíveis após a missão, conforme acordo',
                'Conformidade com regulamentos suíços e europeus (RGPD/LPD)'
              ],
              p2: 'Os testes de intrusão são realizados num âmbito estritamente definido e autorizado, sem risco para os sistemas do cliente.'
            },
            s6: {
              title: '6. Limitação de responsabilidade',
              p1: 'A responsabilidade da CyberSuisse limita-se a danos diretos e previsíveis e não pode exceder o valor do serviço em causa.',
              p2: 'A CyberSuisse não pode ser responsabilizada por:',
              items: [
                'Danos indiretos, perdas de exploração ou perda de dados',
                'Utilização incorreta das recomendações fornecidas',
                'Incidentes relacionados com a infraestrutura do cliente',
                'Evolução das ameaças após a missão'
              ],
              pentestTitle: 'Relativamente aos testes de intrusão (pentest):',
              pentestText: 'Um teste de intrusão certifica a presença ou ausência de vulnerabilidades numa data específica. Devido à natureza evolutiva das ameaças cibernéticas e dos sistemas informáticos, a CyberSuisse não pode garantir que não surjam novas vulnerabilidades após a data do teste. Recomenda-se a realização de testes regulares para manter um nível de segurança ideal.',
              insurance: 'Existe seguro de responsabilidade civil profissional para a atividade.'
            },
            s7: {
              title: '7. Propriedade intelectual',
              p1: 'Os relatórios, ferramentas desenvolvidas e metodologias permanecem propriedade da CyberSuisse, salvo acordo escrito em contrário.',
              p2: 'O cliente tem direito de uso dos entregáveis para as suas necessidades. Qualquer reprodução ou divulgação a terceiros requer acordo prévio da CyberSuisse.'
            },
            s8: {
              title: '8. Lei aplicável e jurisdição',
              p1: 'As presentes condições são regidas pela lei suíça. Qualquer litígio será submetido à jurisdição dos tribunais do Cantão de Berna.',
              p2: 'Em caso de divergência entre versões linguísticas, prevalece a versão francesa.'
            }
          },
          contactTitle: 'Dúvidas sobre as nossas CGV?',
          contactText: 'Contacte-nos para qualquer esclarecimento',
          contactButton: 'Contactar'
        }
      : {
          back: "Retour à l'accueil",
          title: 'Conditions Générales de Vente',
          subtitle: 'Conditions applicables aux prestations de cybersécurité de CyberSuisse',
          updated: 'Dernière mise à jour : Janvier 2024',
          sections: {
            s1: {
              title: "1. Objet et champ d'application",
              p1: "Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de cybersécurité proposées par Modesto, expert freelance en cybersécurité opérant sous la dénomination CyberSuisse, établi en Suisse.",
              p2: "Ces conditions s'appliquent à tous les services proposés : tests d'intrusion (pentest), audit CRA, développement sécurisé et toute prestation de conseil en cybersécurité."
            },
            s2: {
              title: '2. Description des prestations',
              pentestTitle: "Tests d'intrusion (Pentest)",
              pentestText: "Évaluation de la sécurité des systèmes informatiques par simulation d'attaques contrôlées, incluant rapport détaillé et recommandations.",
              craTitle: 'Audit CRA (Cyber Resilience Act)',
              craText: "Service en cours de développement - Audit de conformité avec le futur règlement européen sur la cyberrésilience. Disponibilité prochaine.",
              devTitle: 'Développement sécurisé',
              devText: "Création d'applications et sites web sécurisés, audit de code, intégration de bonnes pratiques de sécurité dès la conception."
            },
            s3: {
              title: '3. Tarifs et modalités de paiement',
              p1: "Les tarifs sont établis sur devis personnalisé en fonction de la complexité et de la durée de la mission. Chaque projet est évalué individuellement selon ses spécificités.",
              paymentTitle: 'Modalités de paiement :',
              paymentItems: [
                "Acompte de 30% à la commande selon l'importance de la mission",
                'Solde à 30 jours nets après remise du livrable final',
                'Paiement par virement bancaire ou selon accord préalable',
                'Pénalités de retard : 5% par mois de retard'
              ],
              note: 'Tous les prix sont exprimés en francs suisses (CHF) et s’entendent hors TVA si applicable.'
            },
            s4: {
              title: "4. Délais d'exécution",
              p1: "Les délais d'exécution sont fixés dans chaque devis et commencent à courir après :",
              items1: [
                'Signature du bon de commande ou acceptation écrite du devis',
                "Réception de l'acompte si requis",
                'Fourniture de tous les éléments nécessaires par le client'
              ],
              p2: 'En cas de retard imputable au client, les délais sont prolongés d’autant. Les délais indicatifs typiques :',
              items2: ['Pentest simple : 5-10 jours ouvrés', 'Audit de sécurité : 10-15 jours ouvrés', 'Développement : selon cahier des charges']
            },
            s5: {
              title: '5. Confidentialité et sécurité',
              p1: "CyberSuisse s'engage à respecter la plus stricte confidentialité concernant toutes les informations communiquées par le client.",
              items: [
                "Signature d'un accord de confidentialité (NDA) si requis",
                'Stockage sécurisé de toutes les données client',
                'Destruction des données sensibles après mission selon accord',
                'Respect des réglementations suisses et européennes (RGPD/LPD)'
              ],
              p2: "Les tests d'intrusion sont réalisés dans un cadre strictement défini et autorisé, sans risque pour les systèmes du client."
            },
            s6: {
              title: '6. Limitation de responsabilité',
              p1: 'La responsabilité de CyberSuisse est limitée aux dommages directs et prévisibles. Elle ne saurait excéder le montant de la prestation concernée.',
              p2: 'CyberSuisse ne peut être tenu responsable :',
              items: [
                "Des dommages indirects, pertes d'exploitation ou de données",
                "De l'utilisation incorrecte des recommandations fournies",
                "Des incidents liés à l'infrastructure du client",
                "De l'évolution des menaces après la mission"
              ],
              pentestTitle: "Concernant les tests d'intrusion (pentest) :",
              pentestText: "Un test d'intrusion certifie la présence ou l'absence de vulnérabilités à une date spécifique. En raison de la nature évolutive des menaces cybersécuritaires et des systèmes informatiques, CyberSuisse ne peut garantir qu'aucune nouvelle vulnérabilité n'apparaîtra après la date du test. Il est recommandé d'effectuer des tests réguliers pour maintenir un niveau de sécurité optimal.",
              insurance: 'Une assurance responsabilité civile professionnelle couvre l’activité.'
            },
            s7: {
              title: '7. Propriété intellectuelle',
              p1: "Les rapports, outils développés et méthodologies restent la propriété de CyberSuisse, sauf accord contraire écrit.",
              p2: "Le client dispose d'un droit d'usage des livrables pour ses besoins propres. Toute reproduction ou diffusion à des tiers nécessite l'accord préalable de CyberSuisse."
            },
            s8: {
              title: '8. Droit applicable et juridiction',
              p1: 'Les présentes conditions sont régies par le droit suisse. Tout litige sera soumis à la juridiction des tribunaux du canton de Berne.',
              p2: 'En cas de divergence entre les versions linguistiques, la version française fait foi.'
            }
          },
          contactTitle: 'Questions sur nos CGV ?',
          contactText: "N'hésitez pas à nous contacter pour toute clarification",
          contactButton: 'Nous contacter'
        })
  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-4 py-12">
        {/* Bouton retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="hover:bg-brand-amber/20 text-gray-300 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            {copy.back}
          </Button>
        </motion.div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-amber/10 rounded-full border border-brand-amber/40">
              <FileText size={48} className="text-brand-amber" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-4">{copy.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{copy.subtitle}</p>
          <div className="mt-4 text-sm text-gray-500">{copy.updated}</div>
        </motion.div>

        {/* Contenu des CGV */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section 1 - Objet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s1.title}</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-400 leading-relaxed mb-4">{copy.sections.s1.p1}</p>
                  <p className="text-gray-400 leading-relaxed">{copy.sections.s1.p2}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2 - Prestations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s2.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brand-amber">{copy.sections.s2.pentestTitle}</h3>
                    <p className="text-gray-400">{copy.sections.s2.pentestText}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brand-amber">{copy.sections.s2.craTitle}</h3>
                    <p className="text-gray-400">{copy.sections.s2.craText}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brand-amber">{copy.sections.s2.devTitle}</h3>
                    <p className="text-gray-400">{copy.sections.s2.devText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3 - Tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CreditCard size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s3.title}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s3.p1}</p>
                  <div>
                    <h3 className="font-semibold mb-2 text-brand-amber">{copy.sections.s3.paymentTitle}</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                      {copy.sections.s3.paymentItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-500 text-sm">{copy.sections.s3.note}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 4 - Délais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-brand-amber mr-3" />
                  <h2 className="text-2xl font-semibold text-fg">{copy.sections.s4.title}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s4.p1}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s4.items1.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-400">{copy.sections.s4.p2}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s4.items2.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 5 - Confidentialité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s5.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s5.p1}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s5.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-400">{copy.sections.s5.p2}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 6 - Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s6.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s6.p1}</p>
                  <p className="text-gray-400">{copy.sections.s6.p2}</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-400">
                    {copy.sections.s6.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-orange-950/30 border border-orange-800/40 rounded-lg">
                    <p className="text-orange-400 font-medium">
                      <strong>{copy.sections.s6.pentestTitle}</strong>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">{copy.sections.s6.pentestText}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{copy.sections.s6.insurance}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 7 - Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s7.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s7.p1}</p>
                  <p className="text-gray-400">{copy.sections.s7.p2}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 8 - Droit applicable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-[#1A1A1A] border-[#333] hover:border-brand-amber/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-fg">{copy.sections.s8.title}</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">{copy.sections.s8.p1}</p>
                  <p className="text-gray-400">{copy.sections.s8.p2}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center py-8"
          >
            <Card className="bg-gradient-to-br from-brand-amber to-orange-950/20 border-brand-amber/40">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-fg">{copy.contactTitle}</h3>
                <p className="text-gray-400 mb-6">{copy.contactText}</p>
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-brand-amber to-brand-amber-hover hover:from-brand-amber-hover hover:to-brand-amber-hover text-fg shadow-lg hover:shadow-xl transition-all duration-300 "
                >
                  {copy.contactButton}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}