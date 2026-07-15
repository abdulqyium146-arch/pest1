import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { pests } from '@/lib/content/pests'
import { business } from '@/lib/content/business'
import { buildBreadcrumb, buildFAQPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Footer } from '@/components/sections/Footer'
import { RelatedLinks } from '@/components/sections/RelatedLinks'

// ─── ISR — revalidate daily ───────────────────────────────────────────────────

export const revalidate = 86400

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return pests.map((pest) => ({ slug: pest.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pest = pests.find((p) => p.slug === slug)
  if (!pest) return {}

  const title = `${pest.name} in Los Angeles | ${business.name}`
  const pageUrl = `${business.url}/pests/${pest.slug}`

  return {
    title,
    description: pest.description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: pest.description,
      url: pageUrl,
      siteName: business.name,
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: pest.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ─── Schema helpers ───────────────────────────────────────────────────────────

function buildArticleSchema(pest: { slug: string; schema: { name: string; description: string } }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pest.schema.name,
    description: pest.schema.description,
    author: {
      '@type': 'Organization',
      name: business.name,
      url: business.url,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      url: business.url,
    },
    url: `${business.url}/pests/${pest.slug}`,
  }
}

// ─── Section components ───────────────────────────────────────────────────────

function PestHero({ headline, subhead }: { headline: string; subhead: string }) {
  return (
    <section
      className="relative overflow-hidden bg-neutral-950"
      aria-labelledby="pest-headline"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,80,10,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1
          id="pest-headline"
          className="font-display text-display-lg text-white mb-5 max-w-3xl mx-auto"
        >
          {headline}
        </h1>
        <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="phone"
            size="lg"
            href={business.phone.tracking}
            aria-label={`Call OCP at ${business.phone.display}`}
          >
            {business.phone.display}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
            className="border-white text-white hover:bg-white hover:text-neutral-950"
          >
            Get Free Inspection
          </Button>
        </div>
        <p className="mt-6 text-sm text-neutral-50/50 tracking-wide uppercase">
          Licensed&nbsp;·&nbsp;Insured&nbsp;·&nbsp;LA-Based
        </p>
      </div>
    </section>
  )
}

function OverviewSection({ overview }: { overview: string }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="overview-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="overview-heading" className="font-display text-display-md text-neutral-950 mb-6">
          Overview
        </h2>
        <div className="space-y-4 text-neutral-500 leading-relaxed">
          {overview.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function IdentificationSection({
  pestName,
  identification,
}: {
  pestName: string
  identification: string[]
}) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="identification-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="identification-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          How to Identify {pestName}
        </h2>
        <ul className="space-y-4" role="list">
          {identification.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="12"
                  height="12"
                  className="text-neutral-950"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-neutral-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HabitatSection({ habitat }: { habitat: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="habitat-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="habitat-heading" className="font-display text-display-md text-neutral-950 mb-8">
          Where They Hide in LA Homes
        </h2>
        <ul className="space-y-4" role="list">
          {habitat.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400"
                aria-hidden="true"
              />
              <span className="text-neutral-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HealthRisksSection({ healthRisks }: { healthRisks: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="health-risks-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="health-risks-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Health Risks
        </h2>
        <ul className="space-y-4" role="list">
          {healthRisks.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-0.5 text-amber-600" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-neutral-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PropertyDamageSection({ propertyDamage }: { propertyDamage: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="property-damage-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="property-damage-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Property Damage
        </h2>
        <ul className="space-y-4" role="list">
          {propertyDamage.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400"
                aria-hidden="true"
              />
              <span className="text-neutral-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PreventionTipsSection({ preventionTips }: { preventionTips: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="prevention-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="prevention-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Prevention Tips
        </h2>
        <ol className="space-y-8" role="list">
          {preventionTips.map((item, i) => (
            <li key={i} className="flex gap-5 items-start">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-950 text-white font-bold text-sm flex items-center justify-center font-display"
                aria-label={`Tip ${i + 1}`}
              >
                {i + 1}
              </span>
              <p className="pt-1.5 text-neutral-500 leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Breadcrumb({ pestName }: { pestName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
          <li>
            <a href="/" className="hover:text-neutral-950 transition-colors duration-150">
              Home
            </a>
          </li>
          <li aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <a href="/pests" className="hover:text-neutral-950 transition-colors duration-150">
              Pests
            </a>
          </li>
          <li aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <span className="text-neutral-950 font-medium" aria-current="page">
              {pestName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pest = pests.find((p) => p.slug === slug)

  if (!pest) {
    notFound()
  }

  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Pests', item: `${business.url}/pests` },
    { name: pest.name, item: `${business.url}/pests/${pest.slug}` },
  ])

  const relatedLinks = pest.relatedServices.map((serviceSlug) => ({
    label: serviceSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    href: `/services/${serviceSlug}`,
    description: `Professional ${serviceSlug.replace(/-/g, ' ')} services in Los Angeles.`,
  }))

  return (
    <>
      {/* Structured data */}
      <JsonLd data={buildFAQPage(pest.faqs)} />
      <JsonLd data={buildArticleSchema(pest)} />
      <JsonLd data={breadcrumbData} />

      {/* Breadcrumb nav */}
      <Breadcrumb pestName={pest.name} />

      {/* H1 hero */}
      <PestHero headline={pest.heroHeadline} subhead={pest.heroSubhead} />

      {/* Page sections */}
      <OverviewSection overview={pest.overview} />
      <IdentificationSection pestName={pest.name} identification={pest.identification} />
      <HabitatSection habitat={pest.habitat} />
      <HealthRisksSection healthRisks={pest.healthRisks} />
      <PropertyDamageSection propertyDamage={pest.propertyDamage} />
      <PreventionTipsSection preventionTips={pest.preventionTips} />

      {/* FAQ */}
      <FAQAccordion
        faqs={pest.faqs}
        heading={`${pest.name} — Frequently Asked Questions`}
      />

      {/* Related services */}
      {relatedLinks.length > 0 && (
        <RelatedLinks heading="Related Services" links={relatedLinks} />
      )}

      {/* CTA */}
      <CTASection
        headline={`${pest.name} Problem in Los Angeles?`}
        subhead="Call now for a same-day inspection. Licensed, insured, and LA-based."
      />

      <Footer />
    </>
  )
}
