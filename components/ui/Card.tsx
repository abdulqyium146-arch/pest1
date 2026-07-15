import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

// Server Component — no interactivity needed, hover handled via Tailwind group/hover
export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={[
        'bg-white rounded-xl shadow-card',
        // Hover: elevate shadow + slight upward translate, 150ms ease per design system
        hover
          ? 'transition-all duration-150 ease-in-out hover:shadow-elevated hover:-translate-y-0.5'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
