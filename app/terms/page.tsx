import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/lib/content/business'
import { buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Terms of Service | OCP Pest Control Los Angeles`,
  description: `Terms of service for OCP Pest Control. Service terms, payment, cancellation, and warranty information. Questions? Call (866) 755-1284.`,
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/terms` },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Terms of Service', item: `${business.url}/terms` },
  ])
  const webPage = buildWebPage({
    name: `Terms of Service — OCP Pest Control`,
    description: `Terms of service for OCP Pest Control pest control services in Los Angeles.`,
    url: `${business.url}/terms`,
  })

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={webPage} />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500" role="list">
            <li><Link href="/" className="hover:text-neutral-950 transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><span className="text-neutral-950 font-medium">Terms of Service</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-neutral-950 py-12" aria-labelledby="terms-headline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="terms-headline" className="font-display text-display-md text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-neutral-600 leading-relaxed">

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">1. Agreement to Terms</h2>
              <p>By using the website at {business.url} or engaging OCP Pest Control for pest control services, you agree to these Terms of Service. OCP Pest Control is located at {business.address.full}.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">2. Services</h2>
              <p>OCP Pest Control provides professional pest control services in Los Angeles County, California. Services are performed by licensed technicians holding current California Department of Pesticide Regulation (CDPR) licensure. The scope of each service engagement is defined in the written service agreement provided prior to treatment.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">3. Payment Terms</h2>
              <p>Payment is due at the time of service unless a separate payment arrangement has been established in writing. We accept major credit cards and cash. Returned checks or declined payments are subject to a processing fee. Overdue accounts may be referred to collections.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">4. Cancellations and Rescheduling</h2>
              <p>We request at least 24 hours notice for cancellations or reschedules. Same-day cancellations for services requiring preparation (heat treatment, fumigation) may be subject to a cancellation fee to cover preparation costs. We will communicate any applicable cancellation fees at the time of booking.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">5. Client Responsibilities</h2>
              <p>Effective pest control requires client cooperation. Clients are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Following all pre-treatment preparation instructions provided by our technicians</li>
                <li>Disclosing known infestation history and any previous treatments</li>
                <li>Providing access to all areas requiring treatment</li>
                <li>Vacating the premises for the required re-entry period after chemical treatments</li>
                <li>Notifying us of any medical conditions, sensitivities, or special circumstances affecting occupants or pets</li>
              </ul>
              <p className="mt-3">Failure to complete required preparation may reduce treatment effectiveness and may void warranty terms.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">6. Warranties and Re-treatments</h2>
              <p>Warranty terms are specific to each service type and are outlined in the written service agreement. In general, warranties cover re-treatment of the same pest at the same property within the warranty period if the infestation persists or returns. Warranties do not cover new infestations introduced after treatment, failure to complete preparation requirements, or conditions outside our control (such as re-introduction from neighboring units in multi-unit buildings).</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">7. Limitation of Liability</h2>
              <p>OCP Pest Control carries general liability insurance. Our liability for any claim arising from our services is limited to the amount paid for the service in question. We are not liable for consequential, incidental, or indirect damages. We are not liable for damage to items improperly disclosed or prepared for treatment.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">8. Website Use</h2>
              <p>The content on this website is provided for informational purposes only. Pest identification information is general in nature and should not substitute for a professional inspection. We make no warranties regarding the accuracy or completeness of information provided on this site.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">9. Governing Law</h2>
              <p>These terms are governed by the laws of the State of California. Any disputes shall be resolved in Los Angeles County, California.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">10. Contact</h2>
              <p>Questions about these terms? Contact us:</p>
              <address className="not-italic mt-2">
                <p>{business.name}</p>
                <p>{business.address.full}</p>
                <p><a href={business.phone.tracking} className="text-accent">{business.phone.display}</a></p>
              </address>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
