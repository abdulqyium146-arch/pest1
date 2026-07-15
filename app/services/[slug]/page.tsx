import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { services } from '@/lib/content/services'
import { business } from '@/lib/content/business'
import { buildServiceMeta } from '@/lib/seo/metadata'
import { buildService, buildBreadcrumb, buildFAQPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Footer } from '@/components/sections/Footer'

// ─── ISR — revalidate daily ───────────────────────────────────────────────────

export const revalidate = 86400

// ─── Static params — generate all service pages at build time ─────────────────

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return buildServiceMeta(service)
}

// ─── Section components (server-side, no state) ───────────────────────────────

function ServiceHero({ headline, subhead }: { headline: string; subhead: string }) {
  return (
    <section
      className="relative overflow-hidden bg-neutral-950"
      aria-labelledby="service-headline"
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
          id="service-headline"
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

function SymptomsSection({ symptoms }: { symptoms: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="symptoms-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="symptoms-heading" className="font-display text-display-md text-neutral-950 mb-8">
          Signs You Have a Problem
        </h2>
        <ul className="space-y-4" role="list">
          {symptoms.map((symptom, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="12" height="12" className="text-neutral-950">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-neutral-500 leading-relaxed">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProcessSection({ process }: { process: { step: string; detail: string }[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="process-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="process-heading" className="font-display text-display-md text-neutral-950 mb-10">
          Our Treatment Process
        </h2>
        <ol className="space-y-8" role="list">
          {process.map((item, i) => (
            <li key={i} className="flex gap-5 items-start">
              {/* Step number — neutral dark, NOT accent (not a CTA) */}
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-950 text-white font-bold text-sm flex items-center justify-center font-display"
                aria-label={`Step ${i + 1}`}
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display font-bold text-neutral-950 text-lg mb-2">{item.step}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function SafetyPrepSection({ safetyPrep }: { safetyPrep: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-18" aria-labelledby="prep-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="prep-heading" className="font-display text-display-md text-neutral-950 mb-8">
          How to Prepare for Treatment
        </h2>
        <ul className="space-y-4" role="list">
          {safetyPrep.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-1 text-neutral-500" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
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

function AftercareSection({ aftercare }: { aftercare: string[] }) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="aftercare-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="aftercare-heading" className="font-display text-display-md text-neutral-950 mb-8">
          After Treatment: What to Expect
        </h2>
        <ul className="space-y-4" role="list">
          {aftercare.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400" aria-hidden="true" />
              <span className="text-neutral-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── Breadcrumb component ─────────────────────────────────────────────────────

function Breadcrumb({ serviceName }: { serviceName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
          <li>
            <a href="/" className="hover:text-neutral-950 transition-colors duration-150">Home</a>
          </li>
          <li aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </li>
          <li>
            <span className="text-neutral-950 font-medium" aria-current="page">{serviceName}</span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: service.name, item: `${business.url}/services/${service.slug}` },
  ])

  return (
    <>
      {/* Structured data */}
      <JsonLd data={buildService(service)} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={buildFAQPage(service.faqs)} />

      {/* Breadcrumb nav */}
      <Breadcrumb serviceName={service.name} />

      {/* H1 inside service hero */}
      <ServiceHero headline={service.heroHeadline} subhead={service.heroSubhead} />

      {/* Page sections — heading levels h2 only below h1 */}
      <SymptomsSection symptoms={service.symptoms} />
      <ProcessSection process={service.process} />
      <SafetyPrepSection safetyPrep={service.safetyPrep} />
      <AftercareSection aftercare={service.aftercare} />

      {/* Service-specific FAQ */}
      <FAQAccordion faqs={service.faqs} heading={`${service.name} — Frequently Asked Questions`} />

      {/* CTA */}
      <CTASection
        headline={`Need ${service.name} in Los Angeles?`}
        subhead="Call now for a same-day inspection. Licensed, insured, and LA-based."
      />

      <Footer />
    </>
  )
}
