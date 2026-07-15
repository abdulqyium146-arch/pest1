import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { treatments } from '@/lib/content/treatments'
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
  return treatments.map((treatment) => ({ slug: treatment.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const treatment = treatments.find((t) => t.slug === slug)
  if (!treatment) return {}

  const title = `${treatment.name} in Los Angeles | ${business.name}`
  const pageUrl = `${business.url}/treatments/${treatment.slug}`

  return {
    title,
    description: treatment.description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: treatment.description,
      url: pageUrl,
      siteName: business.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: treatment.description,
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

function TreatmentHero({ headline, subhead }: { headline: string; subhead: string }) {
  return (
    <section
      className="relative overflow-hidden bg-neutral-950"
      aria-labelledby="treatment-headline"
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
          id="treatment-headline"
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

function HowItWorksSection({
  overview,
  howItWorks,
}: {
  overview: string
  howItWorks: string
}) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="how-it-works-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="how-it-works-heading"
          className="font-display text-display-md text-neutral-950 mb-6"
        >
          How It Works
        </h2>
        <div className="space-y-4 text-neutral-500 leading-relaxed">
          {overview.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
          {howItWorks.split('\n\n').map((paragraph, i) => (
            <p key={`how-${i}`}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function TargetPestsSection({ targetPests }: { targetPests: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="target-pests-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="target-pests-heading"
          className="font-display text-display-md text-neutral-950 mb-6"
        >
          What Pests It Targets
        </h2>
        <div className="flex flex-wrap gap-2" role="list">
          {targetPests.map((pest) => (
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

function ProcessSection({ process }: { process: { step: string; detail: string }[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="process-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="process-heading" className="font-display text-display-md text-neutral-950 mb-10">
          Treatment Process
        </h2>
        <ol className="space-y-8" role="list">
          {process.map((item, i) => (
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

function ProsConsSection({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="pros-cons-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="pros-cons-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Pros &amp; Cons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-white rounded-xl border border-neutral-100 p-6">
            <h3 className="font-display font-bold text-neutral-950 text-base mb-4 flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full bg-neutral-950 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="11"
                  height="11"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Advantages
            </h3>
            <ul className="space-y-3" role="list">
              {pros.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-neutral-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-white rounded-xl border border-neutral-100 p-6">
            <h3 className="font-display font-bold text-neutral-950 text-base mb-4 flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="11"
                  height="11"
                  className="text-neutral-500"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </span>
              Limitations
            </h3>
            <ul className="space-y-3" role="list">
              {cons.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-neutral-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CostFactorsSection({ costFactors }: { costFactors: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="cost-factors-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="cost-factors-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          Pricing Factors
        </h2>
        <ul className="space-y-4" role="list">
          {costFactors.map((item, i) => (
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

function PreparationSection({ preparation }: { preparation: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="preparation-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="preparation-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          How to Prepare
        </h2>
        <ul className="space-y-4" role="list">
          {preparation.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-1 text-neutral-500" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
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

function Breadcrumb({ treatmentName }: { treatmentName: string }) {
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
              href="/treatments"
              className="hover:text-neutral-950 transition-colors duration-150"
            >
              Treatments
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
              {treatmentName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const treatment = treatments.find((t) => t.slug === slug)

  if (!treatment) {
    notFound()
  }

  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Treatments', item: `${business.url}/treatments` },
    { name: treatment.name, item: `${business.url}/treatments/${treatment.slug}` },
  ])

  const relatedLinks = treatment.relatedServices.map((serviceSlug) => ({
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
      <JsonLd data={buildFAQPage(treatment.faqs)} />
      <JsonLd data={breadcrumbData} />

      {/* Breadcrumb nav */}
      <Breadcrumb treatmentName={treatment.name} />

      {/* H1 hero */}
      <TreatmentHero headline={treatment.heroHeadline} subhead={treatment.heroSubhead} />

      {/* Page sections */}
      <HowItWorksSection overview={treatment.overview} howItWorks={treatment.howItWorks} />
      <TargetPestsSection targetPests={treatment.targetPests} />
      <ProcessSection process={treatment.process} />
      <ProsConsSection pros={treatment.pros} cons={treatment.cons} />
      <CostFactorsSection costFactors={treatment.costFactors} />
      <PreparationSection preparation={treatment.preparation} />

      {/* FAQ */}
      <FAQAccordion
        faqs={treatment.faqs}
        heading={`${treatment.name} — Frequently Asked Questions`}
      />

      {/* Related services */}
      {relatedLinks.length > 0 && (
        <RelatedLinks heading="Related Services" links={relatedLinks} />
      )}

      {/* CTA */}
      <CTASection
        headline={`Need ${treatment.name} in Los Angeles?`}
        subhead="Call now for a same-day inspection. Licensed, insured, and LA-based."
      />

      <Footer />
    </>
  )
}
