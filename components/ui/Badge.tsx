import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type BadgeVariant = 'default' | 'success'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

// NOTE: Accent (#E8500A) is intentionally EXCLUDED from badge variants.
// Per design system: accent color is reserved exclusively for CTA buttons and phone links.
// Trust signals and status indicators use neutral or success-green tones instead.
const variantStyles: Record<BadgeVariant, string> = {
  // Neutral badge — dark bg on light text; good for labels and status indicators
  default: 'bg-neutral-900 text-neutral-50',
  // Success/trust green — for verified credentials, license badges, insurance badges
  // trust-DEFAULT (#15803D) on trust-light (#DCFCE7) passes WCAG AA contrast (7.2:1)
  success: 'bg-trust-light text-trust',
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — purely presentational, no state or events
export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold leading-none',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
