import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/lib/content/business'
import { buildLocalBusiness, buildBreadcrumb, buildFAQPage, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Pest Control FAQ Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description: `Answers to the most common pest control questions for Los Angeles homeowners and businesses. Bed bugs, termites, rats, cockroaches, pricing, process, and safety. Call (866) 755-1284.`,
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/faq` },
  openGraph: {
    title: `Pest Control FAQ Los Angeles | (866) 755-1284 | OCP Pest Control`,
    description: `Answers to common pest control questions for Los Angeles homeowners. Bed bugs, termites, rats, cockroaches, pricing, safety. Call (866) 755-1284.`,
    url: `${business.url}/faq`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `Pest Control FAQ LA | (866) 755-1284`, description: `Common pest control questions answered for Los Angeles homeowners and businesses.` },
  robots: { index: true, follow: true },
}

const faqs = [
  // Service area
  {
    q: 'What areas of Los Angeles do you serve?',
    a: `OCP Pest Control is based in University Park in South Los Angeles and serves all of Los Angeles County. Our primary service cities include Los Angeles, Pasadena, Glendale, Burbank, Long Beach, Santa Monica, Torrance, and Beverly Hills. Call (866) 755-1284 to confirm service for your specific address.`,
  },
  {
    q: 'Do you serve apartment buildings and multi-unit properties?',
    a: 'Yes. We serve landlords, property managers, and HOAs in addition to individual tenants. Multi-unit bed bug treatment and rodent exclusion for apartment buildings are among our most common commercial calls. We can coordinate with building management and treat multiple units on the same visit.',
  },
  // Pricing
  {
    q: 'How much does pest control cost in Los Angeles?',
    a: `Pricing varies based on pest type, property size, severity of infestation, and treatment method. A basic cockroach or ant treatment for a standard apartment typically starts around $150–$250. Bed bug heat treatment for a one-bedroom unit typically ranges from $600–$1,200. Termite treatment pricing depends heavily on the extent of infestation and structure type. Call (866) 755-1284 for a free inspection and accurate quote — we do not charge to inspect and provide estimates.`,
  },
  {
    q: 'Do you offer free inspections?',
    a: `Yes. We provide free on-site inspections for most pest situations. During the inspection, we identify the pest species, assess the extent of infestation, and provide a written treatment recommendation and price estimate. Call (866) 755-1284 to schedule.`,
  },
  // Scheduling
  {
    q: 'How quickly can you come out?',
    a: `For most pest situations, we offer same-day or next-day inspection availability. Priority situations — active bed bug infestations, rat activity, bee swarms near occupied areas — are given same-day scheduling when possible. Call (866) 755-1284 and we will confirm availability for your address.`,
  },
  {
    q: 'Do you offer weekend appointments?',
    a: 'Yes. We schedule inspections and treatments Monday through Saturday, with limited Sunday availability for urgent situations. Call (866) 755-1284 to check current weekend availability.',
  },
  // Process
  {
    q: 'What should I do to prepare for a pest control treatment?',
    a: 'Preparation depends on the treatment type. For bed bug heat treatment: remove heat-sensitive items (candles, aerosols, houseplants) and bag clothing for laundering. For chemical treatments: clear under sinks and behind appliances, remove food from counters, and vacate the treatment area for 2–4 hours. For rodent exclusion: clear access to crawl spaces, attic hatches, and the building perimeter. We provide written prep instructions for every job before we arrive.',
  },
  {
    q: 'How long does a typical pest control treatment take?',
    a: 'Treatment duration varies by service. A cockroach or ant treatment for an average home typically takes 45–90 minutes. Bed bug heat treatment takes 6–8 hours. Termite fumigation (tenting) requires 3 days. Rodent exclusion depends on the number of entry points but usually takes 2–4 hours. We will give you a time estimate when you book.',
  },
  {
    q: 'Do I need to leave my home during treatment?',
    a: 'It depends on the treatment. Chemical spray treatments require you to vacate for 2–4 hours after application. Heat treatment for bed bugs requires all occupants (including pets) to vacate for the full treatment duration (6–8 hours). Rodent exclusion and most mechanical treatments do not require you to leave. We will tell you exactly what is required when you book.',
  },
  // Bed bugs
  {
    q: 'How do I know if I have bed bugs?',
    a: 'Common signs include: small rust-colored stains on your mattress or sheets (excrement or crushed bugs), tiny white eggs or shed skins along mattress seams, live bugs in mattress folds or behind the headboard, and waking up with itchy red bite marks in clusters. Bed bugs are excellent hiders — a professional inspection is the most reliable way to confirm an infestation. Call (866) 755-1284 for a same-day inspection.',
  },
  {
    q: 'Can bed bugs spread between apartments?',
    a: 'Yes. Bed bugs move through shared wall voids, plumbing chases, and electrical conduits in multi-unit buildings. In LA apartment buildings — particularly in University Park, Jefferson Park, and neighborhoods near USC — unit-to-unit spread is one of the most common reasons for widespread infestations. If you have bed bugs, adjacent units should also be inspected.',
  },
  // Termites
  {
    q: 'How do I know if I have termites?',
    a: 'Signs of termite activity include: mud tubes along your foundation or walls (subterranean termites), piles of small wings near windows and doors after a swarm, hollow-sounding wood when tapped, small holes in wood with frass (pellets) below (drywood termites), and buckling or sagging floors. Los Angeles has both drywood and subterranean termite species. Call (866) 755-1284 for a termite inspection.',
  },
  // Rodents
  {
    q: 'What is the difference between roof rats and Norway rats?',
    a: 'Roof rats (Rattus rattus) are the dominant rat species in Los Angeles. They are agile climbers and prefer to nest in attics, rafters, palm trees, and the upper structure of buildings. Norway rats (Rattus norvegicus) are larger, burrow underground, and are more common near water sources and waste sites. LA homes primarily deal with roof rats. The exclusion approach differs for each species — roof rat exclusion focuses on the roofline and upper entry points.',
  },
  {
    q: 'Will sealing entry points alone solve my rat problem?',
    a: 'Exclusion alone stops new entry but does not eliminate rats already inside. A complete program includes trapping or baiting to remove existing rodents, cleanup of contaminated insulation or debris, and then exclusion sealing to prevent re-entry. Skipping the removal phase and only sealing can trap rats inside walls, creating odor and secondary pest problems.',
  },
  // Safety
  {
    q: 'Are your treatments safe for children and pets?',
    a: 'The treatments we use are registered with the EPA and California Department of Pesticide Regulation. We follow all label-required re-entry intervals and use targeted application methods to minimize exposure. For most treatments, children and pets can return to treated areas after the re-entry interval (typically 2–4 hours). Heat treatment and exclusion work involve no chemicals at all. We will advise you on specific precautions when you book.',
  },
  {
    q: 'Do you use eco-friendly or organic treatments?',
    a: 'Yes. We offer organic and low-toxicity treatment options for clients who prefer them. These include diatomaceous earth, botanical insecticides, heat treatment (chemical-free), and exclusion (mechanical). Some pest situations respond well to organic approaches; others — particularly severe bed bug or termite infestations — may require conventional treatments for effective results. We will discuss your options at the inspection.',
  },
  // License / trust
  {
    q: 'Are you licensed to do pest control in California?',
    a: 'Yes. Pest control in California requires licensure through the California Department of Pesticide Regulation (CDPR). OCP Pest Control holds current licensure. We provide our license number and proof of insurance on request. Call (866) 755-1284 for details.',
  },
  {
    q: 'Do you offer any guarantee on your treatments?',
    a: 'Our warranty terms depend on the service and pest type. Most bed bug treatments include a follow-up visit to address any hatching nymphs missed in the initial treatment. Rodent exclusion includes a warranty against re-entry through sealed points. Specific guarantee terms will be outlined in your service agreement before work begins. Call (866) 755-1284 to ask about the warranty for your specific situation.',
  },
]

export default function FAQPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'FAQ', item: `${business.url}/faq` },
  ])
  const webPage = buildWebPage({
    name: `Pest Control FAQ — Los Angeles | OCP Pest Control`,
    description: `Answers to common pest control questions for Los Angeles homeowners and businesses.`,
    url: `${business.url}/faq`,
  })

  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPage} />
      <JsonLd data={buildFAQPage(faqs)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
            <li><Link href="/" className="hover:text-neutral-950 transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><span className="text-neutral-950 font-medium">FAQ</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="faq-headline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="faq-headline" className="font-display text-display-lg text-white mb-4">
            Pest Control FAQ — Los Angeles
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto">
            Answers to the questions we hear most from LA homeowners, renters, and property managers. Still have questions? Call <a href={business.phone.tracking} className="text-accent font-semibold">{business.phone.display}</a>.
          </p>
        </div>
      </section>

      {/* FAQ categories nav */}
      <section className="bg-white border-b border-neutral-100 py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            {['Service Area', 'Pricing', 'Scheduling', 'Process', 'Bed Bugs', 'Termites', 'Rodents', 'Safety'].map((cat) => (
              <span key={cat} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} heading="Frequently Asked Questions" />
        </div>
      </section>

      {/* Quick links to relevant service pages */}
      <section className="bg-white py-14" aria-labelledby="explore-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="explore-heading" className="font-display text-display-md text-neutral-950 mb-8">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              ['Bed Bug Extermination', '/services/bed-bug-extermination'],
              ['Termite Control', '/services/termite-control'],
              ['Rat & Rodent Control', '/services/rat-rodent-control'],
              ['Cockroach Control', '/services/cockroach-control'],
              ['Ant Control', '/services/ant-control'],
              ['Bee Removal', '/services/bee-removal'],
              ['Fumigation', '/services/fumigation'],
              ['Heat Treatment', '/services/heat-treatment'],
            ].map(([name, href]) => (
              <Link key={href} href={href} className="block px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:border-accent hover:text-accent transition-colors duration-150 text-center">
                {name}
              </Link>
            ))}
          </div>
          <Link href="/services" className="inline-block mt-6 text-sm text-accent hover:text-neutral-950 font-semibold transition-colors duration-150">
            View all 16 services →
          </Link>
        </div>
      </section>

      <CTASection
        headline="Still Have Questions?"
        subhead={`Call ${business.phone.display} — we answer fast and can schedule a free inspection.`}
      />
      <Footer />
    </>
  )
}
