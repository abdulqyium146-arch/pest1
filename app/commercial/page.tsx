import type { Metadata } from 'next'
import Link from 'next/link'

import { commercialServices } from '@/lib/content/commercial'
import { business } from '@/lib/content/business'
import { buildBreadcrumb } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

// ─── ISR — revalidate daily ───────────────────────────────────────────────────

export const revalidate = 86400

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Commercial Pest Control Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description:
    'Commercial pest control in Los Angeles for restaurants, offices, warehouses, schools, healthcare facilities, and multi-unit housing. Licensed, insured, and LA-based. Call (866) 755-1284.',
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/commercial` },
  openGraph: {
    title: `Commercial Pest Control Los Angeles | ${business.name}`,
    description:
      'Commercial pest control in Los Angeles for restaurants, offices, warehouses, schools, healthcare facilities, and multi-unit housing.',
    url: `${business.url}/commercial`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Commercial Pest Control Los Angeles | ${business.name}`,
    description:
      'Commercial pest control in Los Angeles for restaurants, offices, warehouses, schools, healthcare facilities, and multi-unit housing.',
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

// ─── Schema helpers ───────────────────────────────────────────────────────────

function buildWebPage(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Commercial Pest Control in Los Angeles',
    description:
      'Commercial pest control services for all industries in Los Angeles, CA — provided by OCP Pest Control.',
    url: `${business.url}/commercial`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      url: business.url,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommercialHubPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Commercial', item: `${business.url}/commercial` },
  ])

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
                Commercial
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Page header */}
      <section
        className="relative overflow-hidden bg-neutral-950"
        aria-labelledby="commercial-headline"
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
            id="commercial-headline"
            className="font-display text-display-lg text-white mb-5 max-w-3xl mx-auto"
          >
            Commercial Pest Control in Los Angeles
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto leading-relaxed">
            Industry-specific pest management for Los Angeles businesses. Compliance-ready
            documentation, flexible scheduling, and discreet service. Licensed and insured.
          </p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="bg-white py-14 sm:py-18" aria-labelledby="industries-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="industries-heading"
            className="font-display text-display-md text-neutral-950 mb-4"
          >
            Industries We Serve
          </h2>
          <p className="text-neutral-500 text-lg mb-8 max-w-2xl">
            Every industry faces unique pest pressures. Select your industry below for tailored
            pest control solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commercialServices.map((service) => (
              <Link
                key={service.slug}
                href={`/commercial/${service.slug}`}
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
                    {service.industry}
                  </p>
                  <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed line-clamp-2">
                    {service.uniqueChallenges[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Commercial Pest Control in Los Angeles"
        subhead="Call now for a same-day commercial inspection. Compliance documentation available."
      />

      <Footer />
    </>
  )
}
