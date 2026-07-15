import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/lib/content/business'
import { buildLocalBusiness, buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Contact OCP Pest Control Los Angeles | Call (866) 755-1284`,
  description: `Contact OCP Pest Control for same-day pest inspection in Los Angeles. Call (866) 755-1284 for bed bugs, termites, rats, cockroaches, and more. Licensed, insured, LA-based.`,
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/contact` },
  openGraph: {
    title: `Contact OCP Pest Control | Call (866) 755-1284`,
    description: `Call (866) 755-1284 for same-day pest control in Los Angeles. Licensed, insured, LA-based.`,
    url: `${business.url}/contact`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `Contact OCP Pest Control | Call (866) 755-1284`, description: `Call (866) 755-1284 for same-day pest control in Los Angeles.` },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Contact', item: `${business.url}/contact` },
  ])
  const webPage = buildWebPage({
    name: `Contact OCP Pest Control Los Angeles`,
    description: `Contact page — call (866) 755-1284 for same-day pest control in Los Angeles.`,
    url: `${business.url}/contact`,
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
            <li><span className="text-neutral-950 font-medium">Contact</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="contact-headline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-headline" className="font-display text-display-lg text-white mb-4">
            Contact OCP Pest Control
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto mb-8">
            Same-day inspection available for most pest situations in Los Angeles. The fastest way to reach us is by phone.
          </p>
          <a
            href={business.phone.tracking}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white font-bold text-2xl py-4 px-8 rounded-xl transition-colors duration-150"
            aria-label={`Call us at ${business.phone.display}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {business.phone.display}
          </a>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-white py-16" aria-labelledby="contact-details-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-details-heading" className="sr-only">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="text-center p-6 rounded-xl border border-neutral-100">
              <div className="text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="mx-auto">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-950 mb-1">Phone</h3>
              <a href={business.phone.tracking} className="text-xl font-bold text-accent hover:text-neutral-950 transition-colors duration-150">
                {business.phone.display}
              </a>
              <p className="text-sm text-neutral-500 mt-2">Available 7 days a week. Fastest response guaranteed.</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-neutral-100">
              <div className="text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="mx-auto">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.391 3.952-9.827A8.25 8.25 0 006 11.5c0 4.436 2.008 7.748 3.952 9.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM11.5 8.25a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-950 mb-1">Office Location</h3>
              <address className="not-italic text-neutral-600 text-sm">
                <p>{business.address.street}</p>
                <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
              </address>
              <p className="text-sm text-neutral-500 mt-2">South Los Angeles — serving all of LA County.</p>
            </div>

            <div className="text-center p-6 rounded-xl border border-neutral-100">
              <div className="text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="mx-auto">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-950 mb-1">Hours</h3>
              <p className="text-neutral-600 text-sm">Monday – Saturday: 7am – 7pm</p>
              <p className="text-neutral-600 text-sm">Sunday: 8am – 5pm</p>
              <p className="text-sm text-neutral-500 mt-2">Emergency calls accepted outside hours.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-neutral-50 py-14" aria-labelledby="service-areas-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="service-areas-heading" className="font-display text-display-md text-neutral-950 mb-4">
            Cities We Serve in Los Angeles County
          </h2>
          <p className="text-neutral-500 mb-8 max-w-2xl mx-auto">
            We serve communities throughout Los Angeles County. Call <a href={business.phone.tracking} className="text-accent font-semibold">{business.phone.display}</a> to confirm service for your specific address.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Los Angeles', 'Pasadena', 'Glendale', 'Burbank', 'Long Beach', 'Santa Monica', 'Torrance', 'Beverly Hills'].map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent hover:text-accent transition-colors duration-150"
              >
                {city}
              </Link>
            ))}
          </div>
          <Link href="/locations" className="inline-block mt-6 text-sm text-accent hover:text-neutral-950 font-semibold transition-colors duration-150">
            View all service areas →
          </Link>
        </div>
      </section>

      {/* Pests we treat quick list */}
      <section className="bg-white py-14" aria-labelledby="pests-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="pests-heading" className="font-display text-display-md text-neutral-950 mb-3">
            Pests We Eliminate
          </h2>
          <p className="text-neutral-500 mb-8">Whatever pest you are dealing with, call <a href={business.phone.tracking} className="text-accent font-semibold">{business.phone.display}</a> and we will assess and treat it.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              ['Bed Bugs', '/services/bed-bug-extermination'],
              ['Termites', '/services/termite-control'],
              ['Rats & Mice', '/services/rat-rodent-control'],
              ['Cockroaches', '/services/cockroach-control'],
              ['Ants', '/services/ant-control'],
              ['Bees & Wasps', '/services/bee-removal'],
              ['Mosquitoes', '/services/mosquito-control'],
              ['Fleas', '/services/flea-control'],
              ['Spiders', '/services/spider-control'],
              ['Flies', '/services/fly-control'],
              ['Wildlife', '/services/wildlife-control'],
              ['Fumigation', '/services/fumigation'],
            ].map(([name, href]) => (
              <Link key={href} href={href} className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700 hover:border-accent hover:text-accent transition-colors duration-150">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-display-md text-white mb-3">Ready for Same-Day Service?</h2>
          <p className="text-white/80 mb-6">Call now — we answer fast and can often dispatch the same day.</p>
          <a href={business.phone.tracking} className="inline-flex items-center gap-3 bg-white text-accent font-bold text-xl py-4 px-8 rounded-xl hover:bg-neutral-100 transition-colors duration-150">
            {business.phone.display}
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
