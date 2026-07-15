import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/lib/content/business'
import { buildBreadcrumb, buildWebPage } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { Footer } from '@/components/sections/Footer'

export const revalidate = 86400

export const metadata: Metadata = {
  title: `Privacy Policy | OCP Pest Control Los Angeles`,
  description: `Privacy policy for OCP Pest Control. How we collect, use, and protect information submitted through our website. Questions? Call (866) 755-1284.`,
  metadataBase: new URL(business.url),
  alternates: { canonical: `${business.url}/privacy` },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', item: business.url },
    { name: 'Privacy Policy', item: `${business.url}/privacy` },
  ])
  const webPage = buildWebPage({
    name: `Privacy Policy — OCP Pest Control`,
    description: `Privacy policy for ocppestcontrol.com.`,
    url: `${business.url}/privacy`,
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
            <li><span className="text-neutral-950 font-medium">Privacy Policy</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-neutral-950 py-12" aria-labelledby="privacy-headline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="privacy-headline" className="font-display text-display-md text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <div className="space-y-8 text-neutral-600 leading-relaxed">

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">1. Who We Are</h2>
              <p>OCP Pest Control (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates this website at {business.url}. We are a licensed pest control company located at {business.address.full}. Questions about this policy may be directed to us at <a href={business.phone.tracking} className="text-accent">{business.phone.display}</a>.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information when you use our website or contact us:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Contact information:</strong> Name, phone number, email address, and service address when you submit a contact form or request an inspection.</li>
                <li><strong>Service information:</strong> Details about your pest situation as you describe it to us.</li>
                <li><strong>Usage data:</strong> Standard web server logs including IP address, browser type, pages visited, and referring URL, collected automatically when you visit our site.</li>
                <li><strong>Cookies:</strong> We use cookies for basic site functionality and analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Respond to your inspection requests and service inquiries</li>
                <li>Schedule and confirm appointments</li>
                <li>Communicate about your service, including follow-up and warranties</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">4. Call Tracking</h2>
              <p>Phone calls to our business may be tracked for quality assurance and service improvement purposes. Call tracking records the fact that a call was made and its duration; we do not record call audio without disclosure.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">5. Analytics</h2>
              <p>We use website analytics services to understand how visitors use our site. These services may use cookies and similar tracking technologies. Analytics data is aggregated and does not identify you personally.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">6. Data Security</h2>
              <p>We take reasonable steps to protect information you provide to us. Our website uses HTTPS encryption. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">7. California Privacy Rights</h2>
              <p>California residents have the right to request information about the personal data we have collected about them and to request deletion of that data under the California Consumer Privacy Act (CCPA). To make such a request, contact us at <a href={business.phone.tracking} className="text-accent">{business.phone.display}</a> or {business.address.full}.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">8. Children&apos;s Privacy</h2>
              <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent update. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-neutral-950 mb-3">10. Contact Us</h2>
              <p>For privacy-related questions, contact OCP Pest Control at:</p>
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
