import type { Metadata } from 'next'
import Link from 'next/link'

import { pests } from '@/lib/content/pests'
import { business } from '@/lib/content/business'
import { buildBreadcrumb } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Footer } from '@/components/sections/Footer'

// ─── ISR — revalidate daily ───────────────────────────────────────────────────

export const revalidate = 86400

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Pest Identification Guide Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description:
    'Identify the pests in your Los Angeles home. Browse our guide to insects, rodents, wildlife, and arachnids common in LA — with photos, signs of infestation, and treatment options. Call (866) 755-1284.',
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/pests` },
  openGraph: {
    title: `Pest Identification Guide Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
    description:
      'Identify the pests in your Los Angeles home. Browse our guide to insects, rodents, wildlife, and arachnids common in LA. Call (866) 755-1284.',
    url: `${business.url}/pests`,
    siteName: business.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Pest Identification Guide Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
    description:
      'Identify the pests in your Los Angeles home. Browse our guide to insects, rodents, wildlife, and arachnids common in LA. Call (866) 755-1284.',
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

const CATEGORY_ORDER = ['Insects', 'Rodents', 'Wildlife', 'Arachnids']

function groupByCategory(pestList: typeof pests): Map<string, typeof pests> {
  const map = new Map<string, typeof pests>()

  for (const pest of pestList) {
    const cat = pest.category ?? 'Other'
    const existing = map.get(cat)
    if (existing) {
      existing.push(pest)
    } else {
      map.set(cat, [pest])
    }
  }

  return map
}

function sortedCategories(map: Map<string, typeof pests>): [string, typeof pests][] {
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
    name: 'Pest Identification Guide — Los Angeles',
    description:
      'A comprehensive guide to identifying common pests found in Los Angeles homes and properties.',
    url: `${business.url}/pests`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      url: business.url,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PestsHubPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Pest Guide', item: `${business.url}/pests` },
  ])

  const grouped = groupByCategory(pests)
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
                Pest Guide
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Page header */}
      <section
        className="relative overflow-hidden bg-neutral-950"
        aria-labelledby="pests-headline"
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
            id="pests-headline"
            className="font-display text-display-lg text-white mb-5 max-w-3xl mx-auto"
          >
            Pest Identification Guide — Los Angeles
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto leading-relaxed">
            Find out what pest is in your home. Browse our complete guide to insects, rodents,
            wildlife, and arachnids common in Los Angeles.
          </p>
        </div>
      </section>

      {/* Pest categories */}
      {categories.map(([category, categoryPests], groupIndex) => (
        <section
          key={category}
          className={groupIndex % 2 === 0 ? 'bg-white py-14 sm:py-18' : 'bg-neutral-50 py-14 sm:py-18'}
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
              {categoryPests.map((pest) => (
                <Link
                  key={pest.slug}
                  href={`/pests/${pest.slug}`}
                  className="flex items-start gap-3 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
                      {pest.name}
                    </p>
                    {pest.scientificName && (
                      <p className="text-xs text-neutral-400 italic mt-0.5">{pest.scientificName}</p>
                    )}
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed line-clamp-2">
                      {pest.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  )
}
