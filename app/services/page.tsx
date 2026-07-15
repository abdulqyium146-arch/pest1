import type { Metadata } from 'next'
import Link from 'next/link'

import { services } from '@/lib/content/services'
import { business } from '@/lib/content/business'
import { buildBreadcrumb } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

// ─── ISR — revalidate daily ───────────────────────────────────────────────────

export const revalidate = 86400

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `All Pest Control Services Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description:
    'Browse all pest control services offered by OCP Pest Control in Los Angeles — bed bug extermination, termite control, rat removal, bee removal, and more. Licensed and insured. Call (866) 755-1284.',
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/services` },
  openGraph: {
    title: `All Pest Control Services Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
    description:
      'Browse all pest control services offered by OCP Pest Control in Los Angeles — bed bug extermination, termite control, rat removal, bee removal, and more. Call (866) 755-1284.',
    url: `${business.url}/services`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `All Pest Control Services in Los Angeles | ${business.name}`,
    description:
      'Browse all pest control services offered by OCP Pest Control in Los Angeles — bed bug extermination, termite control, rat removal, bee removal, and more.',
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

// ─── Category grouping ────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  'Insect Control',
  'Rodent Control',
  'Wildlife',
  'Wood-Destroying Pests',
  'Specialty Services',
]

function groupByCategory(serviceList: typeof services): Map<string, typeof services> {
  const map = new Map<string, typeof services>()

  for (const service of serviceList) {
    // Fall back to a generic category if the service doesn't have one defined
    const cat: string = (service as { category?: string }).category ?? 'General Services'
    const existing = map.get(cat)
    if (existing) {
      existing.push(service)
    } else {
      map.set(cat, [service])
    }
  }

  return map
}

function sortedCategories(map: Map<string, typeof services>): [string, typeof services][] {
  const entries = Array.from(map.entries())

  return entries.sort(([a], [b]) => {
    const ai = CATEGORY_ORDER.indexOf(a)
    const bi = CATEGORY_ORDER.indexOf(b)
    if (ai === -1 && bi === -1) return a.localeCompare(b)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })
}

// ─── Schema helpers ───────────────────────────────────────────────────────────

function buildWebPage(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'All Pest Control Services in Los Angeles',
    description:
      'Complete list of pest control services provided by OCP Pest Control in Los Angeles, CA.',
    url: `${business.url}/services`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      url: business.url,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesHubPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Services', item: `${business.url}/services` },
  ])

  const grouped = groupByCategory(services)
  const categories = sortedCategories(grouped)

  return (
    <>
      {/* Structured data */}
      <JsonLd data={buildWebPage()} />
      <JsonLd data={breadcrumbData} />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
            <li>
              <Link href="/" className="hover:text-neutral-950 transition-colors duration-150">
                Home
              </Link>
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
                Services
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Page header */}
      <section className="relative overflow-hidden bg-neutral-950" aria-labelledby="services-headline">
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
            id="services-headline"
            className="font-display text-display-lg text-white mb-5 max-w-3xl mx-auto"
          >
            Pest Control Services in Los Angeles
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto leading-relaxed">
            OCP Pest Control offers targeted solutions for every pest problem in Los Angeles.
            Licensed, insured, and LA-based.
          </p>
        </div>
      </section>

      {/* Service categories */}
      {categories.map(([category, categoryServices]) => (
        <section
          key={category}
          className="bg-white py-14 sm:py-18"
          aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, '-')}-heading`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id={`category-${category.toLowerCase().replace(/\s+/g, '-')}-heading`}
              className="font-display text-display-md text-neutral-950 mb-8"
            >
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-start gap-3 p-5 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="18"
                      height="18"
                      className="text-neutral-400 group-hover:text-accent transition-colors duration-150"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-950 group-hover:text-accent transition-colors duration-150">
                      {service.name}
                    </p>
                    <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Need Pest Control in Los Angeles?"
        subhead="Call now for a same-day inspection. Licensed, insured, and LA-based."
      />

      <Footer />
    </>
  )
}
