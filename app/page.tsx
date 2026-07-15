import type { Metadata } from 'next'

import { buildHomeMeta } from '@/lib/seo/metadata'
import { buildFAQPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Hero } from '@/components/sections/Hero'
import { TrustRow } from '@/components/sections/TrustRow'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Footer } from '@/components/sections/Footer'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildHomeMeta()

// ─── Homepage FAQs — LA-specific, not service-specific ────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* FAQPage JSON-LD for homepage FAQ section */}
      <JsonLd data={buildFAQPage(homepageFaqs)} />

      {/* H1 is inside Hero — one H1 per page */}
      <Hero
        headline="Los Angeles Pest Control — Complete Pest & Wildlife Solutions"
        subhead="OCP Pest Control eliminates bed bugs, termites, rodents, cockroaches, ants, bees, and more in LA homes and businesses. Licensed, insured, and based in South Los Angeles."
        showTrustLine
      />

      {/* Trust signals directly below hero — high visual weight */}
      <TrustRow />

      {/* Services in priority order */}
      <ServiceGrid />

      {/* Mid-page CTA strip */}
      <CTASection
        headline="Pest Problem in Los Angeles? We Can Help Today."
        subhead="Same-day inspection available for bed bugs, rats, termites, and bees."
      />

      {/* LA-relevant FAQ accordion — Client Component for open/close state */}
      <FAQAccordion
        faqs={homepageFaqs}
        heading="Common Questions About LA Pest Control"
      />

      <Footer />
    </>
  )
}
