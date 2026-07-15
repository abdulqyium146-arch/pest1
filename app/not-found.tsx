import Link from 'next/link'
import { business } from '@/lib/content/business'
import { Footer } from '@/components/sections/Footer'

export default function NotFound() {
  return (
    <>
      <section className="bg-neutral-950 py-24 sm:py-32" aria-labelledby="not-found-headline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">404 — Page Not Found</p>
          <h1 id="not-found-headline" className="font-display text-display-lg text-white mb-5">
            That page doesn&apos;t exist.
          </h1>
          <p className="text-neutral-50/70 text-lg mb-10">
            The page you&apos;re looking for may have moved or been removed. Use the links below to find what you need, or call us directly.
          </p>
          <a
            href={business.phone.tracking}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white font-bold text-xl py-4 px-8 rounded-xl transition-colors duration-150 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {business.phone.display}
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-neutral-950 text-center mb-10">
            Find What You Need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl border border-neutral-100">
              <h3 className="font-display font-bold text-neutral-950 mb-3">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/bed-bug-extermination" className="text-neutral-500 hover:text-accent transition-colors duration-150">Bed Bug Extermination</Link></li>
                <li><Link href="/services/termite-control" className="text-neutral-500 hover:text-accent transition-colors duration-150">Termite Control</Link></li>
                <li><Link href="/services/rat-rodent-control" className="text-neutral-500 hover:text-accent transition-colors duration-150">Rat & Rodent Control</Link></li>
                <li><Link href="/services/cockroach-control" className="text-neutral-500 hover:text-accent transition-colors duration-150">Cockroach Control</Link></li>
                <li><Link href="/services" className="text-accent font-semibold hover:text-neutral-950 transition-colors duration-150">All 16 services →</Link></li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-neutral-100">
              <h3 className="font-display font-bold text-neutral-950 mb-3">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/los-angeles" className="text-neutral-500 hover:text-accent transition-colors duration-150">Los Angeles</Link></li>
                <li><Link href="/locations/pasadena" className="text-neutral-500 hover:text-accent transition-colors duration-150">Pasadena</Link></li>
                <li><Link href="/locations/glendale" className="text-neutral-500 hover:text-accent transition-colors duration-150">Glendale</Link></li>
                <li><Link href="/locations/long-beach" className="text-neutral-500 hover:text-accent transition-colors duration-150">Long Beach</Link></li>
                <li><Link href="/locations" className="text-accent font-semibold hover:text-neutral-950 transition-colors duration-150">All 8 cities →</Link></li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-neutral-100">
              <h3 className="font-display font-bold text-neutral-950 mb-3">Information</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pests" className="text-neutral-500 hover:text-accent transition-colors duration-150">Pest Identification Guide</Link></li>
                <li><Link href="/treatments" className="text-neutral-500 hover:text-accent transition-colors duration-150">Treatment Methods</Link></li>
                <li><Link href="/faq" className="text-neutral-500 hover:text-accent transition-colors duration-150">FAQ</Link></li>
                <li><Link href="/commercial" className="text-neutral-500 hover:text-accent transition-colors duration-150">Commercial Services</Link></li>
                <li><Link href="/contact" className="text-accent font-semibold hover:text-neutral-950 transition-colors duration-150">Contact Us →</Link></li>
              </ul>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link href="/" className="inline-block px-6 py-3 bg-neutral-950 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors duration-150 text-sm">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
