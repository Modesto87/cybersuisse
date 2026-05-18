import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SEOContent from '@/components/SEOContent'
import { 
  CheckCircle, Shield, HardDrive, Usb, DeviceMobile, 
  Database, Clock, Wrench, Handshake, Envelope 
} from '@phosphor-icons/react'
import dataRecoveryImage from '@/assets/images/pexels-tima-miroshnichenko-5380664.jpg'
import { useTranslation } from 'react-i18next'

interface DataRecoveryPageProps {
  onNavigate: (page: 'contact') => void
}

export default function DataRecoveryPage({ onNavigate }: DataRecoveryPageProps) {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0]

  const copy = language === 'en'
    ? {
        seoTitle: 'Data Recovery in Switzerland (Biel/Bienne) | HDD, SSD, USB | CyberSuisse',
        seoDescription: 'Professional data recovery service for SMEs and individuals. Hard drives (HDD/SSD), USB flash drives, SD cards, and smartphones locally in Switzerland.',
        imageAlt: 'Professional lab data recovery services in Switzerland',
        badge: 'Data Emergency • Switzerland',
        title: 'Professional Data Recovery in Switzerland',
        subtitle: 'Lost crucial business files or precious personal photos? A clicking hard drive, an unreadable USB stick, or a damaged smartphone doesn\'t necessarily mean your data is gone forever. We recover your information using state-of-the-art techniques.',
        ctaPrimary: 'Request free diagnostic',
        ctaSecondary: 'Contact for quote',
        
        benefitsTitle: 'Why trust our team with your data?',
        benefitsIntro: 'This service is dedicated to physical or logical device failures, independent of cyberattacks. Whether from a physical drop or accidental formatting, our top priority is the secure extraction of your information.',
        benefits: [
          { title: 'Absolute Confidentiality', text: 'Data handling in strict compliance with the new Swiss Data Protection Act (FADP). Only you will have access to your recovered files.', icon: LockIcon },
          { title: 'Advanced Technology', text: 'Intervention on logical failures (corrupted partitions) and physical damages (damaged circuits, read heads).', icon: WrenchIcon },
          { title: 'Transparent Quotes', text: 'A clear feasibility diagnostic before any major billing takes place.', icon: HandshakeIcon }
        ],

        devicesTitle: 'Supported Media and Devices',
        devices: [
          { name: 'Hard Drives (HDD) & SSD', desc: 'Mechanical failures, abnormal noises, or unrecognized SSDs. We provide hard drive recovery for Geneva, Zurich, and all of Switzerland.', icon: HardDriveIcon },
          { name: 'Flash Media (USB & SD Cards)', desc: 'Broken connectors, "disk needs to be formatted" errors. Ideal for recovering SD card photos in Biel/Bienne and surroundings.', icon: UsbIcon },
          { name: 'Smartphones & Tablets', desc: 'Black screens, water damage (oxidation), or boot loop issues (iOS and Android).', icon: MobileIcon },
          { name: 'RAID & NAS Systems', desc: 'Reconstruction of damaged RAID arrays and enterprise servers for SMEs.', icon: DatabaseIcon }
        ],

        processTitle: 'A simple and secure recovery process',
        processSteps: [
          { step: '1', title: 'Intake (Drop-off or Ship)', text: 'Bring your failing media to our office in Biel/Bienne or send it via secure package from anywhere in Switzerland.' },
          { step: '2', title: 'Diagnostic', text: 'Our technicians assess the extent of the damage (logical, electronic, or mechanical) to determine the chances of success.' },
          { step: '3', title: 'Quote and Extraction', text: 'You receive a detailed offer. With your approval, we proceed with temporary repairs and bit-by-bit cloning of your data.' },
          { step: '4', title: 'Return', text: 'Your recovered files are delivered to you on a new, secure storage device, ready to use.' }
        ],

        pricingTitle: 'How much does data recovery cost?',
        pricingIntro: 'The exact cost depends on the media type, the complexity of the failure (hardware requiring a cleanroom vs. basic logical failure), and urgency. Here are indicative price ranges for the Swiss market:',
        pricingOptions: [
          { tag: 'Logical Failures', target: 'USB Sticks, Memory Cards', price: '~CHF 100 – 400', includes: ['Accidentally deleted files', 'Corrupted partitions', 'Non-destructive viruses'] },
          { tag: 'Standard Damage', target: 'Hard Drives (HDD) & SSDs', price: '~CHF 400 – 1,500', includes: ['PCB electronic board damage', 'Corrupted firmware', 'Light bad sectors'] },
          { tag: 'Complex Interventions', target: 'Cleanrooms, Smartphones, RAID', price: 'CHF 1,500 – 3,400+', includes: ['Crashed read heads', 'Desoldered memory chips', 'Advanced smartphone deoxidation'] }
        ],

        faqTitle: 'Frequently Asked Questions (FAQ)',
        faqs: [
          { q: 'What should I do immediately after data loss?', a: 'Turn off the device immediately. Do not attempt to restart it or use free internet software, as this threatens to permanently overwrite the data or worsen physical damage.' },
          { q: 'What is the average time to recover my files?', a: 'A diagnostic usually takes 24 to 48 hours. Full recovery depends on severity, ranging from a few days for standard service, up to 24-72h in emergency mode (with a surcharge).' },
          { q: 'Do I pay if no data is recoverable?', a: 'At CyberSuisse, transparency comes first. If damage makes extraction impossible right from the diagnostic, billing is strictly limited to the basic diagnostic fee.' }
        ],

        finalTitle: 'Don\'t let your data disappear permanently.',
        finalSubtitle: 'Act fast. Get an expert opinion today before your device\'s situation worsens.',
        ctaFormBtn: 'Send my diagnostic request'
      }
    : language === 'pt'
      ? {
          seoTitle: 'Recuperação de Dados na Suíça (Biel/Bienne) | HDD, SSD, USB | CyberSuisse',
          seoDescription: 'Serviço profissional de recuperação de dados para PME e particulares. Discos rígidos (HDD/SSD), Pen drives USB, cartões SD e smartphones em toda a Suíça.',
          imageAlt: 'Serviços profissionais de recuperação de dados em laboratório na Suíça',
          badge: 'Emergência de Dados • Suíça',
          title: 'Recuperação de Dados Profissional na Suíça',
          subtitle: 'Perdeu ficheiros cruciais da sua empresa ou fotos pessoais preciosas? Um disco que faz barulho, uma pen USB ilegível ou um smartphone danificado não significa necessariamente o fim dos seus dados. Recuperamos a sua informação com técnicas avançadas.',
          ctaPrimary: 'Pedir diagnóstico gratuito',
          ctaSecondary: 'Contactar para orçamento',
          
          benefitsTitle: 'Porquê confiar os seus dados à nossa equipa?',
          benefitsIntro: 'Este serviço é dedicado a falhas físicas ou lógicas de dispositivos, independentemente de ciberataques. Seja uma queda de material ou formatação acidental, a nossa prioridade é a extração segura da sua informação.',
          benefits: [
            { title: 'Confidencialidade Absoluta', text: 'Tratamento de dados em estrita conformidade com a nova Lei suíça de proteção de dados (nLPD). Só você terá acesso aos ficheiros recuperados.', icon: LockIcon },
            { title: 'Tecnologia de Ponta', text: 'Intervenção em falhas lógicas (partições corrompidas) e materiais (circuitos danificados, cabeças de leitura).', icon: WrenchIcon },
            { title: 'Orçamento Transparente', text: 'Um diagnóstico claro de viabilidade antes de qualquer faturação maior.', icon: HandshakeIcon }
          ],

          devicesTitle: 'Meios e aparelhos suportados',
          devices: [
            { name: 'Discos Rígidos (HDD) & SSD', desc: 'Falhas mecânicas, ruídos anormais ou SSDs não reconhecidos. Asseguramos a recuperação de discos para Genebra, Zurique e toda a Suíça.', icon: HardDriveIcon },
            { name: 'Material Flash (USB & Cartões SD)', desc: 'Conectores partidos, erro "o disco precisa de ser formatado". Ideal para recuperar fotos em cartões SD em Biel/Bienne e arredores.', icon: UsbIcon },
            { name: 'Smartphones & Tablets', desc: 'Ecrãs negros, telemóveis caídos na água (oxidação) ou bloqueados no arranque (iOS e Android).', icon: MobileIcon },
            { name: 'Sistemas RAID & NAS', desc: 'Para PME, reconstrução de matrizes RAID danificadas e servidores de empresas.', icon: DatabaseIcon }
          ],

          processTitle: 'Um processo de recuperação simples e seguro',
          processSteps: [
            { step: '1', title: 'Receção (Entrega ou Envio)', text: 'Entregue o seu suporte nos nossos escritórios em Biel/Bienne ou envie por correio seguro de qualquer ponto da Suíça.' },
            { step: '2', title: 'Diagnóstico', text: 'Os nossos técnicos avaliam a extensão dos danos (lógica, eletrónica ou mecânica) para determinar as hipóteses de sucesso.' },
            { step: '3', title: 'Orçamento e Extração', text: 'Recebe uma oferta detalhada. Com o seu acordo, procedemos à reparação temporária e à cópia bit a bit dos seus dados.' },
            { step: '4', title: 'Devolução', text: 'Os seus ficheiros recuperados são entregues num novo suporte de armazenamento seguro, prontos a usar.' }
          ],

          pricingTitle: 'Quanto custa uma recuperação de dados?',
          pricingIntro: 'O custo exato depende do tipo de meio, da complexidade da avaria (necessidade de quarto limpo vs. falha lógica básica) e da urgência. Eis as faixas de preços indicativas para o mercado suíço:',
          pricingOptions: [
            { tag: 'Falhas Lógicas', target: 'Pen Drives USB, Cartões Memória', price: '~CHF 100 – 400', includes: ['Ficheiros apagados por erro', 'Partições corrompidas', 'Vírus não destrutivos'] },
            { tag: 'Danos Standard', target: 'Discos Rígidos (HDD) & SSDs', price: '~CHF 400 – 1.500', includes: ['Danos na placa eletrónica (PCB)', 'Firmware corrompido', 'Setores defeituosos leves'] },
            { tag: 'Intervenções Complexas', target: 'Quartos limpos, Smartphones, RAID', price: 'CHF 1.500 – 3.400+', includes: ['Cabeças de leitura danificadas', 'Chips de memória dessoldados', 'Desoxidação avançada de smartphones'] }
          ],

          faqTitle: 'Perguntas Frequentes (FAQ)',
          faqs: [
            { q: 'O que devo fazer imediatamente após perder dados?', a: 'Desligue o aparelho imediatamente. Não tente reiniciar nem usar software gratuito da internet, o risco de reescrever dados permanentemente ou gravar danos físicos é elevado.' },
            { q: 'Qual é o prazo médio para recuperar os meus ficheiros?', a: 'Um diagnóstico leva geralmente 24 ou 48 horas. A recuperação completa depende da gravidade da avaria, podendo variar de alguns dias no serviço standard, até 24/72h em urgência (com custo adicional).' },
            { q: 'Pago se não for possível recuperar dados?', a: 'Na CyberSuisse, a transparência é essencial. Se os danos impossibilitarem qualquer extração desde o diagnóstico, a faturação limita-se à taxa de diagnóstico básica.' }
          ],

          finalTitle: 'Não deixe os seus dados desaparecerem definitivamente.',
          finalSubtitle: 'Aja rápido. Obtenha a opinião de um especialista hoje antes que a situação do aparelho piore.',
          ctaFormBtn: 'Enviar o meu pedido de diagnóstico'
        }
      : {
          seoTitle: 'Récupération de Données en Suisse (Biel/Bienne) | Disque Dur, SSD, USB | CyberSuisse',
          seoDescription: 'Service professionnel de récupération de données pour PME et particuliers. Récupération sur disques durs (HDD/SSD), clés USB, cartes SD et smartphones.',
          imageAlt: 'Service professionnel de récupération de données en laboratoire en Suisse',
          badge: 'Urgence Données • Suisse',
          title: 'Récupération de Données Professionnelle en Suisse',
          subtitle: 'Vous avez perdu des fichiers cruciaux pour votre entreprise ou des photos précieuses personnelles ? Un disque dur qui claque, une clé USB illisible ou un smartphone endommagé ne signifie pas forcément la fin de vos données. Nous récupérons vos informations avec des techniques de pointe.',
          ctaPrimary: 'Demandez un diagnostic gratuit',
          ctaSecondary: 'Contactez-nous pour devis',
          
          benefitsTitle: 'Pourquoi confier vos données à notre équipe ?',
          benefitsIntro: 'Ce service est dédié aux pannes physiques ou logiques d\'appareils, indépendamment des cyberattaques. Qu\'il s\'agisse d\'une chute matérielle ou d\'un formatage accidentel, notre priorité est l\'extraction sécurisée de vos informations.',
          benefits: [
            { title: 'Confidentialité Absolue', text: 'Traitement des données en stricte conformité avec la nouvelle Loi suisse sur la protection des données (nLPD). Vous seul aurez accès à vos fichiers récupérés.', icon: LockIcon },
            { title: 'Technologie de Pointe', text: 'Intervention sur les pannes logiques (partitions corrompues) et matérielles (circuits endommagés, têtes de lecture).', icon: WrenchIcon },
            { title: 'Devis Transparent', text: 'Un diagnostic clair de la faisabilité avant toute facturation majeure.', icon: HandshakeIcon }
          ],

          devicesTitle: 'Médias et appareils pris en charge',
          devices: [
            { name: 'Disques Durs (HDD) & SSD', desc: 'Pannes mécaniques, bruits anormaux, ou disques SSD non reconnus. Nous assurons la récupération de disque dur pour Genève, Zurich et dans toute la Suisse.', icon: HardDriveIcon },
            { name: 'Matériel Flash (Clés USB & Cartes SD)', desc: 'Connecteurs cassés, erreur "le disque doit être formaté". Idéal pour récupérer des photos sur carte SD à Biel/Bienne et environs.', icon: UsbIcon },
            { name: 'Smartphones & Tablettes', desc: 'Écrans noirs, téléphones tombés dans l\'eau (oxydation) ou bloqués en boucle de démarrage (iOS et Android).', icon: MobileIcon },
            { name: 'Systèmes RAID & NAS', desc: 'Pour les PME, reconstruction de matrices RAID endommagées et serveurs d\'entreprise.', icon: DatabaseIcon }
          ],

          processTitle: 'Un processus de récupération simple et sécurisé',
          processSteps: [
            { step: '1', title: 'Prise en charge (Dépôt ou Envoi)', text: 'Apportez-nous votre support défectueux à notre bureau de Biel/Bienne ou envoyez-le par colis sécurisé depuis toute la Suisse.' },
            { step: '2', title: 'Diagnostic', text: 'Nos techniciens évaluent l\'étendue des dégâts (panne logique, électronique ou mécanique) pour déterminer vos chances de succès.' },
            { step: '3', title: 'Devis et Extraction', text: 'Vous recevez une offre détaillée. Avec votre accord, nous procédons à la réparation temporaire et à la copie bit-à-bit de vos données.' },
            { step: '4', title: 'Restitution', text: 'Vos fichiers récupérés vous sont remis sur un nouveau support de stockage sécurisé, prêts à être utilisés.' }
          ],

          pricingTitle: 'Combien coûte une récupération de données ?',
          pricingIntro: 'Le coût exact dépend du type de média, de la complexité de la panne (matérielle nécessitant une salle blanche vs. panne logique de base) et de l\'urgence. Voici des tranches tarifaires indicatives pour le marché suisse :',
          pricingOptions: [
            { tag: 'Pannes Logiques', target: 'Clés USB, Cartes Mémoires', price: '~CHF 100 à CHF 400', includes: ['Fichiers effacés par erreur', 'Partition corrompue', 'Virus non-destructif'] },
            { tag: 'Dommages Standards', target: 'Disques Durs (HDD) & SSD', price: '~CHF 400 à CHF 1 500', includes: ['Dommages de la carte électronique (PCB)', 'Firmware corrompu', 'Secteurs défectueux légers'] },
            { tag: 'Interventions Complexes', target: 'Salles blanches, Smartphones, RAID', price: 'CHF 1 500 à ~CHF 3 400+', includes: ['Têtes de lecture crashées', 'Puces mémoire dessoudées', 'Désoxydation avancée de smartphones'] }
          ],

          faqTitle: 'Questions Fréquentes (FAQ)',
          faqs: [
            { q: 'Que dois-je faire immédiatement après la perte de données ?', a: 'Éteignez immédiatement l\'appareil. Ne tentez pas de le redémarrer ou d\'utiliser des logiciels gratuits sur internet, cela risquerait d\'écraser définitivement les données ou d\'aggraver les dommages physiques.' },
            { q: 'Quel est le délai moyen pour récupérer mes fichiers ?', a: 'Un diagnostic prend généralement 24 à 48 heures. La récupération complète dépend de la gravité de la panne, allant de quelques jours en service standard, jusqu\'à 24/72h en mode urgence (avec surcoût).' },
            { q: 'Payé-je si aucune donnée n\'est récupérable ?', a: 'Chez CyberSuisse, la transparence prime. Si les dommages (comme la destruction physique des plateaux en verre) rendent toute extraction impossible dès le diagnostic, la facture se limite au strict diagnostic de base.' }
          ],

          finalTitle: 'Ne laissez pas vos données disparaître définitivement.',
          finalSubtitle: 'Agissez vite. Obtenez l\'avis d\'un expert dès aujourd\'hui avant que la situation de votre appareil ne s\'aggrave.',
          ctaFormBtn: 'Envoyer ma demande de diagnostic'
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
      className="min-h-screen py-12 bg-bg text-fg"
    >
      <SEOContent page="data-recovery" title={copy.seoTitle} description={copy.seoDescription} />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* HERO SECTION */}
        <section className="text-center mb-16" aria-labelledby="hero-title">
          <Badge className="mb-4 bg-brand-amber/10 text-brand-amber border border-brand-amber/40">{copy.badge}</Badge>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold mb-6">{copy.title}</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-8">{copy.subtitle}</p>
          
          <div className="relative w-full max-w-5xl mx-auto h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl mb-10">
            <img
              src={dataRecoveryImage}
              alt={copy.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-amber to-black/60" />
            
            <div className="absolute bottom-6 left-0 right-0 flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="btn-primary" onClick={() => onNavigate('contact')}>
                <Shield size={18} className="mr-2" />
                {copy.ctaPrimary}
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary bg-black/70 border-white/20 text-fg hover:bg-white/10" onClick={() => onNavigate('contact')}>
                <Envelope size={18} className="mr-2" />
                {copy.ctaSecondary}
              </Button>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">{copy.benefitsTitle}</h2>
          <p className="text-center text-zinc-300 max-w-3xl mx-auto mb-10">{copy.benefitsIntro}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.benefits.map((benefit, idx) => (
              <Card key={idx} className="bg-[#1A1A1A] border-[#333]">
                <CardContent className="p-6">
                  <benefit.icon className="text-brand-amber w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold text-fg mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SUPPORTED DEVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <HardDrive size={32} className="text-brand-amber" />
            {copy.devicesTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.devices.map((device, idx) => (
              <Card key={idx} className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border-[#444] hover:border-brand-amber/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <device.icon className="mx-auto text-brand-amber w-12 h-12 mb-4" />
                  <h3 className="text-lg font-bold text-fg mb-3">{device.name}</h3>
                  <p className="text-zinc-400 text-sm">{device.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">{copy.processTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Horizontal line connector for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-brand-amber/10 z-0" />
            
            {copy.processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-amber flex items-center justify-center text-2xl font-bold text-fg mb-4 shadow-[0_0_15px_rgba(229,57,53,0.4)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-fg mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm px-2">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
            <CheckCircle size={32} className="text-brand-amber" />
            {copy.pricingTitle}
          </h2>
          <p className="text-zinc-300 mb-8 max-w-4xl">{copy.pricingIntro}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {copy.pricingOptions.map((opt, idx) => (
              <Card key={idx} className="bg-[#1A1A1A] border-[#333] flex flex-col">
                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-1">{opt.tag}</div>
                  <h3 className="text-xl font-bold text-fg">{opt.target}</h3>
                  <div className="mt-4 text-2xl font-bold text-fg">{opt.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-500 font-medium mb-3">Exemples inclus :</p>
                    {opt.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-brand-amber mt-1 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{inc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{copy.faqTitle}</h2>
          <Card className="bg-[#1A1A1A] border-[#333]">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {copy.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-[#333]">
                    <AccordionTrigger className="text-left text-fg font-semibold hover:text-brand-amber hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* FINAL CTA */}
        <section className="mb-8">
          <Card className="bg-gradient-to-br from-brand-amber to-black border-brand-amber/40 shadow-2xl">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4">{copy.finalTitle}</h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">{copy.finalSubtitle}</p>
              
              <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto" onClick={() => onNavigate('contact')}>
                <Clock size={24} className="mr-3" />
                {copy.ctaFormBtn}
              </Button>
            </CardContent>
          </Card>
        </section>

      </div>
    </motion.div>
  )
}

function LockIcon(props: any) { return <Shield {...props} /> }
function WrenchIcon(props: any) { return <Wrench {...props} /> }
function HandshakeIcon(props: any) { return <Handshake {...props} /> }
function HardDriveIcon(props: any) { return <HardDrive {...props} /> }
function UsbIcon(props: any) { return <Usb {...props} /> }
function MobileIcon(props: any) { return <DeviceMobile {...props} /> }
function DatabaseIcon(props: any) { return <Database {...props} /> }
