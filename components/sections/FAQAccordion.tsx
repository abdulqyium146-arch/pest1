'use client'

import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  heading?: string
}

// ─── Single accordion item ─────────────────────────────────────────────────────

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const id = `faq-answer-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 py-5 px-0 text-left font-semibold text-neutral-950 text-base sm:text-lg hover:text-accent transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
        >
          <span>{faq.q}</span>
          {/* Chevron icon rotates on open — CSS transform, no JS animation lib */}
          <span
            className={[
              'flex-shrink-0 mt-0.5 text-neutral-500 transition-transform duration-150 ease-in-out',
              isOpen ? 'rotate-180' : 'rotate-0',
            ].join(' ')}
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </h3>

      {/* Answer panel — hidden via CSS height/overflow for smooth animation */}
      <div
        id={id}
        role="region"
        aria-labelledby={buttonId}
        className={[
          'overflow-hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <p className="text-neutral-500 text-base leading-relaxed pb-5">{faq.a}</p>
      </div>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

// Client Component — needs useState for open/close state per accordion item
export function FAQAccordion({ faqs, heading = 'Frequently Asked Questions' }: FAQAccordionProps) {
  // Track which item index is open; null = all collapsed
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-display-md text-neutral-950 mb-10 text-center"
        >
          {heading}
        </h2>

        <div role="list" className="divide-y divide-neutral-100 rounded-xl bg-white shadow-card px-6">
          {faqs.map((faq, index) => (
            <div role="listitem" key={index}>
              <AccordionItem
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
