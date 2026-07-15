import { Button } from '@/components/ui/Button'
import { business } from '@/lib/content/business'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CTASectionProps {
  headline?: string
  subhead?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — mid-page CTA strip, no interactivity needed
export function CTASection({
  headline = 'Ready to Solve Your Pest Problem?',
  subhead = 'Call now for same-day inspection availability in Los Angeles.',
}: CTASectionProps) {
  return (
    <section
      className="bg-neutral-900 py-14 sm:py-18"
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-display-md text-white mb-3">
          {headline}
        </h2>
        <p className="text-neutral-500 text-lg mb-8">{subhead}</p>

        {/* Phone number — visually dominant, largest CTA on the strip */}
        <a
          href={business.phone.tracking}
          className="block text-3xl sm:text-4xl font-display font-bold text-accent hover:text-white transition-colors duration-150 ease-in-out mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
          aria-label={`Call us at ${business.phone.display}`}
        >
          {business.phone.display}
        </a>

        <Button
          variant="phone"
          size="lg"
          href={business.phone.tracking}
          aria-label={`Call ${business.phone.display} now`}
        >
          Call Now — Free Inspection
        </Button>
      </div>
    </section>
  )
}
