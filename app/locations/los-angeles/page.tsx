import type { Metadata } from 'next'
import Link from 'next/link'

import { locations } from '@/lib/content/locations'
import { services } from '@/lib/content/services'
import { business } from '@/lib/content/business'
import { buildLocationMeta } from '@/lib/seo/metadata'
import { buildLocalBusiness, buildBreadcrumb } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

// ─── Metadata ─────────────────────────────────────────────────────────────────

const la = locations[0]

export const metadata: Metadata = buildLocationMeta(la)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LosAngelesPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Los Angeles', item: `${business.url}/locations/los-angeles` },
  ])

  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd data={breadcrumbData} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
            <li><Link href="/" className="hover:text-neutral-950 transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </li>
            <li><span className="text-neutral-950 font-medium" aria-current="page">Los Angeles</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950" aria-labelledby="location-headline">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,80,10,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 id="location-headline" className="font-display text-display-lg text-white mb-5 max-w-3xl mx-auto">
            {la.heroHeadline}
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto mb-8 leading-relaxed">
            {la.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="phone"
              size="lg"
              href={business.phone.tracking}
              aria-label={`Call us at ${business.phone.display}`}
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
            Based at {business.address.full}
          </p>
        </div>
      </section>

      {/* Services we offer in LA */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="la-services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="la-services-heading" className="font-display text-display-md text-neutral-950 mb-4">
            Pest Control Services in Los Angeles
          </h2>
          <p className="text-neutral-500 text-lg mb-8 max-w-2xl">
            We provide targeted pest control for the infestations that most commonly affect Los Angeles homes and multi-unit buildings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" className="text-neutral-400 group-hover:text-accent transition-colors duration-150" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-neutral-950 group-hover:text-accent transition-colors duration-150">{service.name}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{service.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LA Climate & Pest Context */}
      <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="climate-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="climate-heading" className="font-display text-display-md text-neutral-950 mb-6">
            Why LA Has Year-Round Pest Pressure
          </h2>
          <div className="prose-equivalent space-y-4 text-neutral-500 leading-relaxed">
            {la.climateOverview.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Housing Stock */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="housing-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="housing-heading" className="font-display text-display-md text-neutral-950 mb-6">
            LA&apos;s Housing Stock and Pest Vulnerability
          </h2>
          <div className="space-y-4 text-neutral-500 leading-relaxed">
            {la.housingStockOverview.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="neighborhoods-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="neighborhoods-heading" className="font-display text-display-md text-neutral-950 mb-8">
            Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {la.neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-display font-bold text-neutral-950 text-base mb-2">{n.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Pest Calendar */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="calendar-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="calendar-heading" className="font-display text-display-md text-neutral-950 mb-8">
            Los Angeles Pest Calendar
          </h2>
          <div className="space-y-6">
            {la.seasonalPestCalendar.map((entry) => (
              <div key={entry.season} className="rounded-xl border border-neutral-100 overflow-hidden">
                <div className="bg-neutral-950 px-5 py-3">
                  <h3 className="font-display font-bold text-white text-base">
                    {entry.season} <span className="font-normal text-neutral-500 text-sm ml-2">{entry.months}</span>
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm text-neutral-500 leading-relaxed">{entry.conditions}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Active Pest Pressure</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.primaryPests.map((pest) => (
                        <span key={pest} className="text-xs bg-neutral-100 text-neutral-950 px-2.5 py-1 rounded-full font-medium">
                          {pest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 italic">{entry.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LA is Different */}
      <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="why-la-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-la-heading" className="font-display text-display-md text-neutral-950 mb-8">
            What Makes Los Angeles Pest Control Different
          </h2>
          <ul className="space-y-5" role="list">
            {la.whyLAIsDifferent.map((item, i) => {
              const [boldPart, ...rest] = item.split(':')
              return (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-950 text-white text-xs font-bold flex items-center justify-center font-display" aria-hidden="true">
                    {i + 1}
                  </span>
                  <p className="text-neutral-500 leading-relaxed">
                    <strong className="text-neutral-950">{boldPart}:</strong>
                    {rest.join(':')}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Address / Contact block */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-heading" className="font-display text-display-md text-neutral-950 mb-4">
            Our Los Angeles Location
          </h2>
          <address className="not-italic text-neutral-500 text-lg mb-6 space-y-1">
            <p className="font-semibold text-neutral-950">{business.name}</p>
            <p>{business.address.street}</p>
            <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
          </address>
          <p className="text-neutral-500 text-base mb-8 max-w-lg mx-auto">
            {la.serviceAreaNote}
          </p>
          <a
            href={business.phone.tracking}
            className="block text-3xl sm:text-4xl font-display font-bold text-accent hover:text-neutral-950 transition-colors duration-150 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Call us at ${business.phone.display}`}
          >
            {business.phone.display}
          </a>
        </div>
      </section>

      <CTASection
        headline="Ready for Pest-Free Living in Los Angeles?"
        subhead="Same-day inspection available. Call now to schedule."
      />

      <Footer />
    </>
  )
}
