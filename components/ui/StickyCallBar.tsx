'use client'

import { useState, useEffect } from 'react'
import { business } from '@/lib/content/business'

// ─── Component ────────────────────────────────────────────────────────────────

// Client Component — needs scroll listener and visibility state
// Mobile only: hidden on md+ via md:hidden
export function StickyCallBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }

    // Check on mount in case page is already scrolled (e.g., back-navigation)
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      // z-50 keeps this above all page content; md:hidden restricts to mobile only
      className={[
        'fixed bottom-0 left-0 right-0 z-50 md:hidden',
        'transition-transform duration-300 ease-in-out',
        visible ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
      aria-hidden={!visible}
    >
      <a
        href={business.phone.tracking}
        // Accent bg on phone CTA — permitted by design system (phone links = CTA)
        className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 px-6 transition-colors duration-150 ease-in-out"
        aria-label={`Call us at ${business.phone.display}`}
      >
        {/* Inline phone icon — no image dependency */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>Call Now — {business.phone.display}</span>
      </a>
    </div>
  )
}
