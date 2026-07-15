import { Button } from '@/components/ui/Button'
import { business } from '@/lib/content/business'

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroProps {
  headline: string
  subhead: string
  showTrustLine?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — no state or browser APIs needed
export function Hero({ headline, subhead, showTrustLine = true }: HeroProps) {
  return (
    <section
      // Near-black bg with subtle radial gradient — no stock photos at this stage
      // Gradient adds depth without imagery; center-to-edge creates natural focus on headline
      className="relative overflow-hidden bg-neutral-950"
      aria-labelledby="hero-headline"
    >
      {/* Radial gradient overlay for subtle depth — pure CSS, no image required */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,80,10,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        {/* Single H1 per page — display size, high contrast white on dark */}
        <h1
          id="hero-headline"
          className="font-display text-display-lg text-white mb-6 max-w-3xl mx-auto"
        >
          {headline}
        </h1>

        {/* Subhead — muted white for contrast hierarchy without competing with H1 */}
        <p className="text-lg sm:text-xl text-neutral-50/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subhead}
        </p>

        {/* CTA group — phone (primary) + inspection (secondary) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="phone"
            size="lg"
            href={business.phone.tracking}
            aria-label={`Call OCP Bed Bug Exterminator at ${business.phone.display}`}
          >
            {business.phone.display}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
            // Override secondary on dark bg: white border + white text
            className="border-white text-white hover:bg-white hover:text-neutral-950"
          >
            Get Free Inspection
          </Button>
        </div>

        {/* Trust signal line — placeholder tokens visible until client provides data */}
        {showTrustLine && (
          <p className="mt-8 text-sm text-neutral-50/60 tracking-wide uppercase">
            Licensed&nbsp;·&nbsp;Insured&nbsp;·&nbsp;LA-Based
          </p>
        )}
      </div>
    </section>
  )
}
