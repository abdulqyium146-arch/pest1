import type { Metadata } from 'next'
import Link from 'next/link'

import { treatments } from '@/lib/content/treatments'
import { business } from '@/lib/content/business'
import { buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Pest Control Treatment Methods Los Angeles | Call (866) 755-1284 | OCP Pest Control`,
  description:
    'Pest control treatment options in Los Angeles: heat treatment, fumigation, liquid insecticides, bait stations, exclusion, and organic methods. Compare and find the right approach. Call (866) 755-1284.',
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/treatments` },
  robots: { index: true, follow: true },
}

const CATEGORY_LABELS: Record<string, string> = {
  thermal: 'Thermal Treatments',
  chemical: 'Chemical Treatments',
  mechanical: 'Mechanical / Physical',
  biological: 'Biological Methods',
  integrated: 'Integrated Pest Management',
}

const CATEGORY_ORDER = ['thermal', 'chemical', 'mechanical', 'biological', 'integrated']

export default function TreatmentsPage() {
  const breadcrumbData = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Treatments', item: `${business.url}/treatments` },
  ])

  const webPageData = buildWebPage({
    name: `Pest Control Treatment Methods — Los Angeles | ${business.name}`,
    description: 'Compare pest control treatment methods used in Los Angeles: heat, fumigation, liquid, baiting, exclusion, and organic options.',
    url: `${business.url}/treatments`,
  })

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof treatments[number][]>>((acc, cat) => {
    const items = treatments.filter((t) => t.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {})

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
            <li><span className="text-neutral-950 font-medium" aria-current="page">Treatments</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="treatments-headline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="treatments-headline" className="font-display text-display-lg text-white mb-5">
            Pest Control Treatment Methods
          </h1>
          <p className="text-lg text-neutral-50/75 max-w-2xl mx-auto leading-relaxed">
            Not every pest problem needs the same approach. Understanding treatment options helps you make the right decision for your property, your family, and your budget.
          </p>
        </div>
      </section>

      {/* Treatment categories */}
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="py-12 sm:py-16 even:bg-white odd:bg-neutral-50" aria-labelledby={`cat-${category}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id={`cat-${category}`} className="font-display text-display-sm text-neutral-950 mb-8">
              {CATEGORY_LABELS[category] ?? category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  className="group block p-5 bg-white rounded-xl border border-neutral-100 hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <h3 className="font-display font-bold text-neutral-950 text-base mb-2 group-hover:text-accent transition-colors duration-150">
                    {treatment.name}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-3">{treatment.overview}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {treatment.targetPests.slice(0, 3).map((pest) => (
                      <span key={pest} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full">
                        {pest}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-950 group-hover:text-accent transition-colors duration-150">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Not Sure Which Treatment Is Right for Your Situation?"
        subhead="Call us and describe what you're seeing. We'll recommend the most effective approach for your specific infestation."
      />

      <Footer />
    </>
  )
}
