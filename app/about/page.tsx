import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/lib/content/business'
import { buildLocalBusiness, buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `About OCP Pest Control Los Angeles | Call (866) 755-1284`,
  description: `OCP Pest Control is a licensed, insured pest control company based in South Los Angeles. We eliminate bed bugs, termites, rodents, and all pests across LA County. Call (866) 755-1284.`,
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/about` },
  openGraph: {
    title: `About OCP Pest Control | Licensed LA Pest Control | (866) 755-1284`,
    description: `Licensed, insured pest control in South Los Angeles. Bed bugs, termites, rats, cockroaches, and all pests. Call (866) 755-1284.`,
    url: `${business.url}/about`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `About OCP Pest Control | (866) 755-1284`, description: `Licensed, insured pest control based in South Los Angeles. Call (866) 755-1284.` },
  robots: { index: true, follow: true },
}

const differentiators = [
  {
    title: 'Licensed by the State of California',
    body: 'All pest control in California requires licensure through the California Department of Pesticide Regulation (CDPR). OCP Pest Control carries current licensure and we provide documentation on request.',
  },
  {
    title: 'Fully Insured',
    body: 'We carry general liability and workers\' compensation insurance for every job. You\'re protected from the moment we arrive.',
  },
  {
    title: 'Local to South Los Angeles',
    body: `We operate from ${business.address.street} in University Park. We are not a national franchise routing calls to subcontractors — you reach us directly, every time.`,
  },
  {
    title: 'All Pest Types — One Company',
    body: 'From bed bugs and termites to roof rats, cockroaches, Africanized bees, and wildlife, we handle every pest type common to the Los Angeles environment.',
  },
  {
    title: 'Same-Day Inspection Availability',
    body: 'For priority situations — active bed bug infestations, rat activity, bee swarms — we offer same-day inspection. Call and we will confirm availability.',
  },
  {
    title: 'Residential & Commercial',
    body: 'We serve homeowners, landlords, property managers, restaurants, hotels, warehouses, healthcare facilities, schools, and apartment buildings throughout LA County.',
  },
]

export default function AboutPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'About', item: `${business.url}/about` },
  ])
  const webPage = buildWebPage({
    name: `About OCP Pest Control — Licensed Pest Control in Los Angeles`,
    description: `About OCP Pest Control, a licensed, insured pest control company in South Los Angeles serving all of LA County.`,
    url: `${business.url}/about`,
  })

  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPage} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
            <li><Link href="/" className="hover:text-neutral-950 transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><span className="text-neutral-950 font-medium">About</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-neutral-950 py-16 sm:py-24" aria-labelledby="about-headline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="about-headline" className="font-display text-display-lg text-white mb-5">
            About OCP Pest Control
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto">
            A licensed, insured pest control company based in South Los Angeles. We serve homeowners, renters, landlords, and businesses across LA County.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-16" aria-labelledby="who-we-are-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="who-we-are-heading" className="font-display text-display-md text-neutral-950 mb-6">
            Who We Are
          </h2>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              OCP Pest Control is a full-service pest control company operating out of University Park in South Los Angeles. We serve residential and commercial clients across Los Angeles County, including Pasadena, Glendale, Burbank, Long Beach, Santa Monica, Torrance, and Beverly Hills.
            </p>
            <p>
              Los Angeles presents unique pest challenges. The Mediterranean climate means no hard winter to suppress pest populations — termites, bed bugs, rats, and cockroaches remain active year-round. The city&apos;s dense, aging housing stock and high-turnover rental market create conditions that allow infestations to spread quickly between units and properties.
            </p>
            <p>
              We built OCP Pest Control to address these LA-specific conditions with treatments and protocols calibrated for the local environment. Every pest species we treat, every treatment method we use, and every service area we cover reflects years of experience working in this specific market.
            </p>
            <p>
              We are not a national franchise. When you call <a href={business.phone.tracking} className="text-accent font-semibold">{business.phone.display}</a>, you reach our team directly. We schedule, dispatch, and perform the work ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-neutral-50 py-16" aria-labelledby="why-ocp-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-ocp-heading" className="font-display text-display-md text-neutral-950 mb-10 text-center">
            Why Los Angeles Chooses OCP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-neutral-100 p-6">
                <h3 className="font-display font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP block */}
      <section className="bg-white py-14" aria-labelledby="location-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="location-heading" className="font-display text-display-md text-neutral-950 mb-6">
            Our Location
          </h2>
          <address className="not-italic text-neutral-600 space-y-1 mb-6">
            <p className="font-semibold text-neutral-950">{business.name}</p>
            <p>{business.address.street}</p>
            <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
            <p className="mt-3">
              <a href={business.phone.tracking} className="text-2xl font-bold text-accent hover:text-neutral-950 transition-colors duration-150">
                {business.phone.display}
              </a>
            </p>
          </address>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="px-5 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-150 text-sm">
              Contact Us
            </Link>
            <Link href="/locations" className="px-5 py-2 border border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-neutral-950 transition-colors duration-150 text-sm">
              View Service Areas
            </Link>
            <Link href="/services" className="px-5 py-2 border border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-neutral-950 transition-colors duration-150 text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Need Pest Control in Los Angeles?"
        subhead={`Call ${business.phone.display} for same-day inspection availability.`}
      />
      <Footer />
    </>
  )
}
