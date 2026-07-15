import type { Metadata } from 'next'
import Link from 'next/link'

import { buildHomeMeta } from '@/lib/seo/metadata'
import { buildFAQPage, buildLocalBusiness } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Hero } from '@/components/sections/Hero'
import { TrustRow } from '@/components/sections/TrustRow'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Footer } from '@/components/sections/Footer'
import { business } from '@/lib/content/business'
import { pests } from '@/lib/content/pests'
import { locations } from '@/lib/content/locations'
import { treatments } from '@/lib/content/treatments'
import { commercialServices } from '@/lib/content/commercial'

export const metadata: Metadata = buildHomeMeta()

const homepageFaqs = [
  {
    q: 'Do you serve all of Los Angeles or just certain neighborhoods?',
    a: 'We are based in University Park in South LA and serve Los Angeles and surrounding neighborhoods. Our primary service area includes University Park, Jefferson Park, Historic South-Central, Exposition Park, Vermont Square, and West Adams. Contact us at (866) 755-1284 to confirm service for your specific address.',
  },
  {
    q: 'How quickly can you respond to a pest emergency in Los Angeles?',
    a: 'We offer same-day inspection availability in Los Angeles for most pest situations. Bed bug infestations, active rat problems, and bee swarms with safety concerns are treated as priority calls. Contact us directly by phone at (866) 755-1284 for the fastest response — we can often schedule an inspection the same day or the following morning.',
  },
  {
    q: 'What is the most common pest problem in South LA apartment buildings?',
    a: 'Bed bugs are consistently the most common pest call we receive from the apartment buildings in University Park, Jefferson Park, and the surrounding neighborhoods. The dense housing stock, high turnover near USC, and shared building infrastructure (wall voids, plumbing chases) make multi-unit buildings in this area particularly susceptible to bed bug spread between units. Roof rats are a close second, especially in properties with mature trees and aging rooflines.',
  },
  {
    q: 'Are you licensed and insured to do pest control in California?',
    a: 'Yes. All pest control work in California requires a license from the California Department of Pesticide Regulation (CDPR). We carry the required licensure and insurance. License details are available on request — contact us and we will provide our current license number and proof of insurance.',
  },
  {
    q: 'What should I do while waiting for a pest control appointment?',
    a: 'For bed bugs: avoid moving furniture or sleeping in different rooms, which spreads the infestation. For rats: seal any food in hard-sided containers and do not handle droppings without gloves. For bees: do not attempt to seal the entry point or spray commercial insecticides — this aggravates the colony. For termites: document and photograph any swarmers or frass you find, but do not disturb the area. We will provide specific prep instructions when you book your appointment.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd data={buildFAQPage(homepageFaqs)} />

      <Hero
        headline="Los Angeles Pest Control — Complete Pest & Wildlife Solutions"
        subhead="OCP Pest Control eliminates bed bugs, termites, rodents, cockroaches, ants, bees, and more in LA homes and businesses. Licensed, insured, and based in South Los Angeles."
        showTrustLine
      />

      <TrustRow />

      {/* All 16 services */}
      <ServiceGrid />

      {/* ── Entity: All pest types ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="pests-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="pests-heading" className="font-display text-display-md text-neutral-950 mb-3">
              Every Pest Type. One Call.
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              We identify and eliminate every pest species common to the Los Angeles environment — from subterranean termites to Africanized bees.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {pests.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pests/${pest.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-accent hover:bg-accent/5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-neutral-700 group-hover:text-accent transition-colors duration-150">
                  {pest.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/pests"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-neutral-950 transition-colors duration-150"
            >
              View full pest identification guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Entity: Treatment methods ──────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-14 sm:py-16" aria-labelledby="treatments-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="treatments-heading" className="font-display text-display-md text-neutral-950 mb-3">
              How We Treat
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Six proven treatment approaches, matched to your specific pest and situation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-neutral-100 hover:border-accent hover:shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="text-xs font-semibold text-neutral-500 group-hover:text-accent transition-colors duration-150 uppercase tracking-wide leading-snug">
                  {t.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/treatments" className="text-sm font-semibold text-accent hover:text-neutral-950 transition-colors duration-150">
              Compare all treatment methods →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Pest Problem in Los Angeles? We Can Help Today."
        subhead={`Same-day inspection available. Call ${business.phone.display} now.`}
      />

      {/* ── Entity: Commercial services ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="commercial-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Commercial Pest Control</p>
              <h2 id="commercial-heading" className="font-display text-display-md text-neutral-950 mb-4">
                We Serve LA Businesses Too
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                From Grade A restaurant compliance and hotel bed bug response to warehouse rodent control and apartment building IPM programs — we deliver commercial pest control that meets California code and industry regulations.
              </p>
              <Link
                href="/commercial"
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white font-semibold rounded-lg text-sm hover:bg-neutral-800 transition-colors duration-150"
              >
                View commercial services
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {commercialServices.slice(0, 6).map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/commercial/${cs.slug}`}
                  className="p-4 rounded-xl border border-neutral-100 hover:border-accent hover:bg-accent/5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <p className="text-sm font-semibold text-neutral-950 leading-snug">{cs.industry}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Entity: Service locations ──────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="locations-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="locations-heading" className="font-display text-display-md text-white mb-3">
            Serving Los Angeles County
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">
            We cover 8 cities across LA County with the same licensed, insured team. Local knowledge for local pest pressures.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group block p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-accent hover:bg-neutral-800 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <p className="font-display font-bold text-white group-hover:text-accent transition-colors duration-150 text-base mb-1">
                  {loc.city}
                </p>
                <p className="text-xs text-neutral-500">{loc.county}</p>
              </Link>
            ))}
          </div>
          <a
            href={business.phone.tracking}
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors duration-150 text-sm"
          >
            Call {business.phone.display} to confirm service for your address
          </a>
        </div>
      </section>

      {/* ── Entity: Why OCP (differentiators for AI/GEO) ──────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="why-ocp-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="why-ocp-heading" className="font-display text-display-md text-neutral-950 mb-3">
              Why Los Angeles Chooses OCP Pest Control
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Licensed, local, and ready the same day. Here is what separates us from national chains.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'California CDPR Licensed',
                body: 'All technicians hold current California Department of Pesticide Regulation licensure. We carry proof of license and insurance on every job.',
              },
              {
                title: 'South LA Based — Not a Franchise',
                body: `We operate from ${business.address.city}. When you call ${business.phone.display}, you reach us directly — not a national call center.`,
              },
              {
                title: 'Same-Day Inspections Available',
                body: 'For bed bugs, active rat activity, and bee swarms, we offer same-day inspection and often same-day treatment in Los Angeles.',
              },
              {
                title: 'All Pests — All Treatment Types',
                body: 'From heat treatment and fumigation to exclusion and organic methods — we use the right approach for your specific pest and situation.',
              },
              {
                title: 'Residential & Commercial',
                body: 'We serve homeowners, renters, landlords, property managers, restaurants, hotels, warehouses, and healthcare facilities across LA County.',
              },
              {
                title: 'LA-Calibrated Expertise',
                body: "LA's Mediterranean climate, dense housing stock, and year-round pest pressure require local knowledge. We know these pests in this city.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-neutral-100">
                <h3 className="font-display font-bold text-neutral-950 mb-2 text-base">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="text-sm font-semibold text-accent hover:text-neutral-950 transition-colors duration-150">
              Learn more about OCP Pest Control →
            </Link>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={homepageFaqs}
        heading="Common Questions About LA Pest Control"
      />

      <Footer />
    </>
  )
}
