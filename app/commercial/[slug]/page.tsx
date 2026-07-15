import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { commercialServices } from '@/lib/content/commercial'
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
  return commercialServices.map((service) => ({ slug: service.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = commercialServices.find((s) => s.slug === slug)
  if (!service) return {}

  const title = `${service.name} in Los Angeles | ${business.name}`
  const pageUrl = `${business.url}/commercial/${service.slug}`

  return {
    title,
    description: service.description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: service.description,
      url: pageUrl,
      siteName: business.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.description,
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

// ─── Section components ───────────────────────────────────────────────────────

function CommercialHero({ headline, subhead }: { headline: string; subhead: string }) {
  return (
    <section
      className="relative overflow-hidden bg-neutral-950"
      aria-labelledby="commercial-headline"
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
          id="commercial-headline"
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

function ChallengesSection({ uniqueChallenges }: { uniqueChallenges: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="challenges-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="challenges-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Industry-Specific Challenges
        </h2>
        <ul className="space-y-4" role="list">
          {uniqueChallenges.map((item, i) => (
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

function CommonPestsSection({ commonPests }: { commonPests: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="common-pests-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="common-pests-heading"
          className="font-display text-display-md text-neutral-950 mb-6"
        >
          Most Common Pests
        </h2>
        <div className="flex flex-wrap gap-2" role="list">
          {commonPests.map((pest) => (
            <span
              key={pest}
              role="listitem"
              className="text-sm bg-neutral-100 text-neutral-950 px-3 py-1.5 rounded-full font-medium"
            >
              {pest}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComplianceSection({ complianceInfo }: { complianceInfo: string }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="compliance-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="compliance-heading"
          className="font-display text-display-md text-neutral-950 mb-6"
        >
          Compliance &amp; Regulations
        </h2>
        {/* Info callout box */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 mb-6 flex gap-4 items-start">
          <span className="flex-shrink-0 text-neutral-400 mt-0.5" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Regulatory requirements vary by industry and municipality. OCP Pest Control provides
            documentation and reporting to support your compliance audits and health inspections.
          </p>
        </div>
        <div className="space-y-4 text-neutral-500 leading-relaxed">
          {complianceInfo.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function InspectionProcessSection({
  inspectionProcess,
}: {
  inspectionProcess: { step: string; detail: string }[]
}) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="inspection-process-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="inspection-process-heading"
          className="font-display text-display-md text-neutral-950 mb-10"
        >
          Our Inspection Process
        </h2>
        <ol className="space-y-8" role="list">
          {inspectionProcess.map((item, i) => (
            <li key={i} className="flex gap-5 items-start">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-950 text-white font-bold text-sm flex items-center justify-center font-display"
                aria-label={`Step ${i + 1}`}
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display font-bold text-neutral-950 text-lg mb-2">
                  {item.step}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ServicePlanSection({
  servicePlan,
  keyBenefits,
}: {
  servicePlan: string
  keyBenefits: string[]
}) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="service-plan-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-plan-heading"
          className="font-display text-display-md text-neutral-950 mb-6"
        >
          Service Plan
        </h2>
        <div className="space-y-4 text-neutral-500 leading-relaxed mb-8">
          {servicePlan.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>
        <h3 className="font-display font-bold text-neutral-950 text-lg mb-4">Key Benefits</h3>
        <ul className="space-y-4" role="list">
          {keyBenefits.map((item, i) => (
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

function Breadcrumb({ industryName }: { industryName: string }) {
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
            <a
              href="/commercial"
              className="hover:text-neutral-950 transition-colors duration-150"
            >
              Commercial
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
              {industryName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CommercialServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = commercialServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Commercial', item: `${business.url}/commercial` },
    { name: service.industry, item: `${business.url}/commercial/${service.slug}` },
  ])

  const relatedLinks = service.relatedServices.map((serviceSlug) => ({
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
      <JsonLd data={buildFAQPage(service.faqs)} />
      <JsonLd data={breadcrumbData} />

      {/* Breadcrumb nav */}
      <Breadcrumb industryName={service.industry} />

      {/* H1 hero */}
      <CommercialHero headline={service.heroHeadline} subhead={service.heroSubhead} />

      {/* Page sections */}
      <ChallengesSection uniqueChallenges={service.uniqueChallenges} />
      <CommonPestsSection commonPests={service.commonPests} />
      <ComplianceSection complianceInfo={service.complianceInfo} />
      <InspectionProcessSection inspectionProcess={service.inspectionProcess} />
      <ServicePlanSection servicePlan={service.servicePlan} keyBenefits={service.keyBenefits} />

      {/* FAQ */}
      <FAQAccordion
        faqs={service.faqs}
        heading={`${service.name} — Frequently Asked Questions`}
      />

      {/* Related services */}
      {relatedLinks.length > 0 && (
        <RelatedLinks heading="Related Services" links={relatedLinks} />
      )}

      {/* CTA */}
      <CTASection
        headline={`Commercial Pest Control for ${service.industry} in Los Angeles`}
        subhead="Call now for a same-day commercial inspection. Licensed, insured, and LA-based."
      />

      <Footer />
    </>
  )
}
