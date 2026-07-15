import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface KorayLink {
  label: string
  href: string
  description: string
}

export interface KorayLinkCategory {
  id: string
  heading: string
  icon: 'service' | 'pest' | 'treatment' | 'location' | 'commercial' | 'prevention' | 'guide' | 'faq'
  links: KorayLink[]
}

export interface KorayLinksProps {
  heading?: string
  categories: KorayLinkCategory[]
}

// ─── Badge color map ──────────────────────────────────────────────────────────

const badgeClasses: Record<KorayLinkCategory['icon'], string> = {
  service:    'bg-neutral-200 text-neutral-900',
  pest:       'bg-amber-100 text-amber-800',
  treatment:  'bg-blue-100 text-blue-800',
  location:   'bg-emerald-100 text-emerald-800',
  commercial: 'bg-purple-100 text-purple-800',
  prevention: 'bg-green-100 text-green-800',
  guide:      'bg-orange-100 text-orange-800',
  faq:        'bg-neutral-100 text-neutral-600',
}

const badgeLabels: Record<KorayLinkCategory['icon'], string> = {
  service:    'RELATED SERVICES',
  pest:       'RELATED PESTS',
  treatment:  'TREATMENT METHODS',
  location:   'SERVICE AREAS',
  commercial: 'COMMERCIAL',
  prevention: 'PREVENTION',
  guide:      'GUIDES',
  faq:        'FAQ',
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="18"
      height="18"
      className="text-neutral-400 group-hover:text-accent transition-colors duration-150 flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Single category block ────────────────────────────────────────────────────

function KorayCategory({ category }: { category: KorayLinkCategory }) {
  const headingId = `koray-cat-${category.id}`
  const badge = badgeClasses[category.icon]
  const badgeLabel = badgeLabels[category.icon]

  return (
    <section aria-labelledby={headingId} className="mb-10 last:mb-0">
      {/* Badge */}
      <span
        className={`inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md mb-3 ${badge}`}
      >
        {badgeLabel}
      </span>

      {/* Category heading */}
      <h3
        id={headingId}
        className="font-display font-bold text-lg text-neutral-950 mb-5"
      >
        {category.heading}
      </h3>

      {/* Link cards — 2-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.links.map(({ label, href, description }) => (
          <Link
            key={href}
            href={href}
            className="flex items-start gap-3 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-300 hover:shadow-card transition-all duration-150 ease-in-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <ArrowIcon />
            <div>
              <p className="font-semibold text-neutral-950 group-hover:text-accent transition-colors duration-150 leading-snug">
                {label}
              </p>
              <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — multi-category entity links implementing Koray Tuğberk's
// cross-silo internal linking framework for topical authority.
export function KorayLinks({ heading, categories }: KorayLinksProps) {
  return (
    <section
      className="bg-neutral-50 py-14 sm:py-18"
      aria-label={heading ?? 'Related content'}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Optional section heading */}
        {heading && (
          <h2 className="font-display text-display-md text-neutral-950 mb-10">
            {heading}
          </h2>
        )}

        {/* Category blocks */}
        {categories.map((category) => (
          <KorayCategory key={category.id} category={category} />
        ))}

      </div>
    </section>
  )
}
