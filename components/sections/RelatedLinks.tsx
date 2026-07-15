import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RelatedLinksProps {
  heading: string
  links: { label: string; href: string; description: string }[]
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — renders a grid of related page cards with links
export function RelatedLinks({ heading, links }: RelatedLinksProps) {
  return (
    <section className="bg-neutral-50 py-14 sm:py-18" aria-labelledby="related-links-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="related-links-heading"
          className="font-display text-display-md text-neutral-950 mb-8"
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map(({ label, href, description }) => (
            <Link
              key={href}
              href={href}
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
                  {label}
                </p>
                <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
