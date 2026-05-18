import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, X } from '@phosphor-icons/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

interface Props {
  onNavigate: (page: string) => void
}

type PlanId = 'essentiel' | 'active' | 'premium'

interface ComparisonRow {
  label: string
  essentiel: boolean | string
  active: boolean | string
  premium: boolean | string
}

interface FaqItem {
  q: string
  a: string
}

const PLAN_ORDER: PlanId[] = ['essentiel', 'active', 'premium']

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check size={20} weight="bold" className="text-brand-amber" />
        <span className="sr-only">Inclus</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <X size={20} weight="bold" className="text-fg-secondary/50" />
        <span className="sr-only">Non inclus</span>
      </span>
    )
  }
  return <span className="text-fg text-sm">{value}</span>
}

interface PlanCardProps {
  planId: PlanId
  highlighted: boolean
  onCTAClick: () => void
}

function PlanCard({ planId, highlighted, onCTAClick }: PlanCardProps) {
  const { t } = useTranslation()
  const features = t(`plans.${planId}.features`, { returnObjects: true }) as string[]

  return (
    <div
      id={planId}
      className={[
        'relative flex flex-col rounded-lg border p-6 md:p-8 scroll-mt-24',
        highlighted
          ? 'border-brand-amber bg-bg-inset shadow-[0_0_0_1px_var(--color-brand-amber)]'
          : 'border-white/10 bg-bg-inset',
      ].join(' ')}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-amber px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-navy">
          {t('plans.page.mostChosen')}
        </span>
      )}

      <h3 className="font-heading text-2xl text-fg">
        {t(`plans.${planId}.name`)}
      </h3>
      <p className="mt-2 text-sm text-fg-secondary">
        {t(`plans.${planId}.target`)}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-5xl text-fg">
          {t(`plans.${planId}.price`)}
        </span>
        <span className="text-sm text-fg-secondary">CHF</span>
        <span className="ml-1 text-sm text-fg-secondary">
          {t('plans.page.perMonth')}
        </span>
      </div>

      <p className="mt-4 text-sm text-fg-secondary">
        {t(`plans.${planId}.tagline`)}
      </p>

      <ul className="mt-6 space-y-3 text-sm text-fg">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check
              size={18}
              weight="bold"
              className="mt-0.5 shrink-0 text-brand-amber"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onCTAClick}
        className={['mt-8', highlighted ? 'btn-primary' : 'btn-secondary'].join(' ')}
      >
        {t('plans.page.chooseCta')}
      </button>
    </div>
  )
}

export default function AbonnementsPage({ onNavigate }: Props) {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const tableRef = useRef<HTMLDivElement | null>(null)

  const rows = useMemo(
    () => t('plans.comparison.rows', { returnObjects: true }) as ComparisonRow[],
    [t, i18n.language],
  )
  const faqs = useMemo(
    () => t('plans.faq', { returnObjects: true }) as FaqItem[],
    [t, i18n.language],
  )

  useEffect(() => {
    const hash = location.hash.replace('#', '') as PlanId | ''
    if (hash && PLAN_ORDER.includes(hash as PlanId)) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.hash])

  // SEO: title, meta description, canonical, JSON-LD
  useEffect(() => {
    const previousTitle = document.title
    document.title = t('plans.page.seoTitle')

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
      return el
    }
    const desc = ensureMeta('description', t('plans.page.seoDescription'))

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const createdCanonical = !canonical
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://cybersuisse.ch/abonnements')

    const planJsonLd = PLAN_ORDER.map((planId) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: t(`plans.${planId}.name`),
      description: t(`plans.${planId}.tagline`),
      brand: { '@type': 'Brand', name: 'CyberSuisse Protect™' },
      offers: {
        '@type': 'Offer',
        price: t(`plans.${planId}.price`),
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
      },
    }))
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.page = 'abonnements'
    script.text = JSON.stringify(planJsonLd)
    document.head.appendChild(script)

    return () => {
      document.title = previousTitle
      script.remove()
      desc.setAttribute('content', '')
      if (createdCanonical && canonical?.parentNode) {
        canonical.parentNode.removeChild(canonical)
      }
    }
  }, [t, i18n.language])

  const handleSelectPlan = (_planId: PlanId) => {
    onNavigate('contact')
  }

  const heroAnimation = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' as const },
      }

  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Hero */}
      <section className="border-b border-white/10 bg-bg">
        <motion.div
          {...heroAnimation}
          className="mx-auto max-w-6xl px-6 py-16 md:py-24"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brand-amber">
            {t('plans.page.heroEyebrow')}
          </p>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-fg">
            {t('plans.page.heroTitle')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fg-secondary">
            {t('plans.page.heroSubtitle')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PLAN_ORDER.map((planId) => (
              <a
                key={planId}
                href={`#${planId}`}
                className="rounded-full border border-white/10 bg-bg-inset px-4 py-2 text-sm text-fg hover:border-brand-amber hover:text-brand-amber transition-colors"
              >
                {t(`plans.${planId}.name`)}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Plan cards */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
            {PLAN_ORDER.map((planId) => (
              <PlanCard
                key={planId}
                planId={planId}
                highlighted={planId === 'active'}
                onCTAClick={() => handleSelectPlan(planId)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-white/10 bg-bg-inset py-16" ref={tableRef}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-fg">
            {t('plans.page.compareTitle')}
          </h2>

          {/* Desktop table */}
          <div className="mt-8 hidden md:block overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-4 text-sm font-medium text-fg-secondary">
                    {t('plans.page.featureLabel')}
                  </th>
                  {PLAN_ORDER.map((planId) => (
                    <th
                      key={planId}
                      className={[
                        'py-4 px-4 text-center',
                        planId === 'active' ? 'bg-bg' : '',
                      ].join(' ')}
                    >
                      <div className="font-heading text-lg text-fg">
                        {t(`plans.${planId}.name`)}
                      </div>
                      <div className="mt-1 text-xs text-fg-secondary">
                        {t(`plans.${planId}.price`)} CHF{' '}
                        {t('plans.page.perMonth')}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="py-4 pr-4 text-sm text-fg">{row.label}</td>
                    {PLAN_ORDER.map((planId) => (
                      <td
                        key={planId}
                        className={[
                          'py-4 px-4 text-center',
                          planId === 'active' ? 'bg-bg' : '',
                        ].join(' ')}
                      >
                        <CellValue value={row[planId]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards per plan */}
          <div className="mt-8 grid gap-6 md:hidden">
            {PLAN_ORDER.map((planId) => (
              <div
                key={planId}
                className={[
                  'rounded-lg border p-5',
                  planId === 'active'
                    ? 'border-brand-amber bg-bg'
                    : 'border-white/10 bg-bg',
                ].join(' ')}
              >
                <div className="mb-4">
                  <div className="font-heading text-lg text-fg">
                    {t(`plans.${planId}.name`)}
                  </div>
                  <div className="text-xs text-fg-secondary">
                    {t(`plans.${planId}.price`)} CHF {t('plans.page.perMonth')}
                  </div>
                </div>
                <dl className="space-y-3 text-sm">
                  {rows.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-4 border-b border-white/5 pb-2 last:border-b-0"
                    >
                      <dt className="text-fg-secondary">{row.label}</dt>
                      <dd className="shrink-0 text-right">
                        <CellValue value={row[planId]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-fg">FAQ</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-fg hover:text-brand-amber">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-fg-secondary">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-royal py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-fg-on-dark">
            {t('plans.page.finalCtaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fg-on-dark/90">
            {t('plans.page.finalCtaText')}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn-primary mt-8"
          >
            {t('plans.page.finalCtaButton')}
          </button>
        </div>
      </section>
    </div>
  )
}
