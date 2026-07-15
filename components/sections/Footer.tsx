import Link from 'next/link'
import { business } from '@/lib/content/business'
import { services } from '@/lib/content/services'
import { pests } from '@/lib/content/pests'
import { treatments } from '@/lib/content/treatments'
import { commercialServices } from '@/lib/content/commercial'
import { locations } from '@/lib/content/locations'

// ─── Shared link class ────────────────────────────────────────────────────────

const linkClass =
  'text-sm text-neutral-500 hover:text-white transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm'

// ─── Column heading ───────────────────────────────────────────────────────────

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
      {children}
    </p>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — comprehensive 7-column semantic footer for topical authority
// and internal PageRank distribution across all content silos.
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-50" aria-label="Site footer">

      {/* ── Row 1: Brand + NAP ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 border-b border-neutral-900">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

          {/* Logo / name */}
          <div className="max-w-sm">
            <p className="font-display font-bold text-xl text-white mb-2">
              {business.name}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Professional pest control serving Los Angeles and surrounding communities.
              Licensed, insured, LA-based.
            </p>
            {/* NAP — structured for local SEO */}
            <address className="not-italic text-sm text-neutral-500 leading-relaxed space-y-1">
              <p>{business.address.street}</p>
              <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
              <p className="mt-2">
                <a
                  href={business.phone.tracking}
                  className="text-accent font-semibold hover:text-white transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm"
                  aria-label={`Call us at ${business.phone.display}`}
                >
                  {business.phone.display}
                </a>
              </p>
            </address>
          </div>

          {/* License / trust signals */}
          <div className="text-xs text-neutral-600 sm:text-right space-y-1">
            <p>CA CDPR Licensed Pest Control</p>
            <p>License: {business.license}</p>
            <p>{business.insurance}</p>
          </div>

        </div>
      </div>

      {/* ── Row 2: 7-column link grid ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10">

          {/* ── Col 1: Pest Control Services ─────────────────────────────── */}
          <nav aria-label="Pest Control Services">
            <ColHeading>Pest Control Services</ColHeading>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 2: Pest Library ───────────────────────────────────────── */}
          <nav aria-label="Pest Library">
            <ColHeading>Pest Library</ColHeading>
            <ul className="space-y-2">
              {pests.map((pest) => (
                <li key={pest.slug}>
                  <Link href={`/pests/${pest.slug}`} className={linkClass}>
                    {pest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 3: Treatment Methods ──────────────────────────────────── */}
          <nav aria-label="Treatment Methods">
            <ColHeading>Treatment Methods</ColHeading>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment.slug}>
                  <Link href={`/treatments/${treatment.slug}`} className={linkClass}>
                    {treatment.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/organic-pest-control" className={linkClass}>
                  Eco-Friendly Pest Control
                </Link>
              </li>
              <li>
                <Link href="/services/pest-inspection" className={linkClass}>
                  Pest Inspection
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Col 4: Commercial Pest Control ───────────────────────────── */}
          <nav aria-label="Commercial Pest Control">
            <ColHeading>Commercial Pest Control</ColHeading>
            <ul className="space-y-2">
              {commercialServices.map((cs) => (
                <li key={cs.slug}>
                  <Link href={`/commercial/${cs.slug}`} className={linkClass}>
                    {cs.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 5: Service Areas ──────────────────────────────────────── */}
          <nav aria-label="Service Areas">
            <ColHeading>Service Areas</ColHeading>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/locations/${location.slug}`} className={linkClass}>
                    {location.displayName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className={linkClass}>
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Col 6: Resources ──────────────────────────────────────────── */}
          <nav aria-label="Resources">
            <ColHeading>Resources</ColHeading>
            <ul className="space-y-2">
              <li>
                <Link href="/prevention" className={linkClass}>
                  Pest Prevention Guide
                </Link>
              </li>
              <li>
                <Link href="/prevention/termite-prevention" className={linkClass}>
                  Termite Prevention
                </Link>
              </li>
              <li>
                <Link href="/prevention/bed-bug-prevention" className={linkClass}>
                  Bed Bug Prevention
                </Link>
              </li>
              <li>
                <Link href="/prevention/rodent-prevention" className={linkClass}>
                  Rodent Prevention
                </Link>
              </li>
              <li>
                <Link href="/pests" className={linkClass}>
                  Pest Identification Guide
                </Link>
              </li>
              <li>
                <Link href="/treatments" className={linkClass}>
                  Treatment Comparison Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className={linkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClass}>
                  Pest Control Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Col 7: Company ────────────────────────────────────────────── */}
          <nav aria-label="Company">
            <ColHeading>Company</ColHeading>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={linkClass}>
                  About OCP Pest Control
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Free Pest Inspection
                </Link>
              </li>
              <li>
                <Link href="/locations" className={linkClass}>
                  Locations Served
                </Link>
              </li>
              <li>
                <Link href="/commercial" className={linkClass}>
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className={linkClass}>
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>

      {/* ── Row 3: Bottom bar ──────────────────────────────────────────────── */}
      <div className="border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p className="text-center">
            Licensed Pest Control in California&nbsp;|&nbsp;CDPR Licensed
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm"
            >
              Terms
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 text-center text-xs text-neutral-600">
          <p>Serving Los Angeles County and surrounding areas</p>
        </div>
      </div>

    </footer>
  )
}
