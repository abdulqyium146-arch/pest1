import type { Metadata } from 'next'
import Link from 'next/link'

import { locations } from '@/lib/content/locations'
import { business } from '@/lib/content/business'
import { buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Pest Control Service Areas Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description:
    'OCP Pest Control serves Los Angeles, Pasadena, Glendale, Burbank, Long Beach, Santa Monica, Torrance, Beverly Hills, and surrounding LA County communities. Call (866) 755-1284.',
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/locations` },
  robots: { index: true, follow: true },
}

export default function LocationsPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Locations', item: `${business.url}/locations` },
  ])

  const webPageData = buildWebPage({
    name: `Pest Control Service Areas — Los Angeles County | ${business.name}`,
    description: 'OCP Pest Control serves communities across Los Angeles County. Find your city for local pest control information.',
    url: `${business.url}/locations`,
  })

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={webPageData} />

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
            <li><span className="text-neutral-950 font-medium" aria-current="page">Locations</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="locations-headline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="locations-headline" className="font-display text-display-lg text-white mb-5">
            Pest Control Service Areas
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto leading-relaxed">
            OCP Pest Control serves communities across Los Angeles County. Every city has its own pest pressures — we know each one.
          </p>
        </div>
      </section>

      {/* Location grid */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="cities-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cities-heading" className="font-display text-display-md text-neutral-950 mb-8">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group block p-5 bg-white rounded-xl border border-neutral-100 hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-neutral-950 text-lg group-hover:text-accent transition-colors duration-150">
                      {location.city}
                    </h3>
                    <p className="text-sm text-neutral-500">{location.county}</p>
                  </div>
                  <span className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" className="text-neutral-300 group-hover:text-accent transition-colors duration-150" aria-hidden="true">
                      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.477-.99 2.332-1.86C15.06 15.05 16.5 12.957 16.5 10a6.5 6.5 0 10-13 0c0 2.957 1.44 5.05 3.097 6.489a13.76 13.76 0 002.332 1.86 11.51 11.51 0 00.757.433 5.741 5.741 0 00.281.14l.018.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-3">
                  {location.heroSubhead}
                </p>
                <div className="flex flex-wrap gap-1">
                  {location.seasonalPestCalendar[1]?.primaryPests.slice(0, 2).map((pest) => (
                    <span key={pest} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full">
                      {pest.replace(' (peak season)', '').replace(' swarmers', '').replace(' (peak)', '')}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="local-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="local-heading" className="font-display text-display-md text-neutral-950 mb-6">
            Why Local Pest Control Knowledge Matters
          </h2>
          <div className="space-y-4 text-neutral-500 leading-relaxed">
            <p>
              Pest control in Los Angeles County is not one-size-fits-all. A Craftsman bungalow in Pasadena&apos;s Bungalow Heaven district faces different termite pressures than a mid-century ranch in Torrance, and both differ substantially from a canal home in Long Beach&apos;s Naples neighborhood. Climate, housing stock, wildlife corridors, soil conditions, and local vegetation all shape which pest species are present, how severe infestations become, and which treatments are most effective.
            </p>
            <p>
              OCP Pest Control has built location-specific knowledge across Los Angeles County. We understand the pest biology specific to each city&apos;s microclimate, the construction vulnerabilities common to each neighborhood&apos;s housing vintage, and the local wildlife corridors that drive urban pest pressure in each community.
            </p>
            <p>
              When you call us, you reach technicians who know your neighborhood — not a national call center routing you to a generic service provider.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Don't See Your City? Call Us."
        subhead="We serve communities throughout Los Angeles County. Call (866) 755-1284 to confirm service for your specific address."
      />

      <Footer />
    </>
  )
}
