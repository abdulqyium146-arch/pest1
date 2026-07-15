'use client'

import Link from 'next/link'
import type { ReactNode, MouseEventHandler } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = 'primary' | 'secondary' | 'phone'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none'

const variantStyles: Record<Variant, string> = {
  // CTA accent (#E8500A) bg — ONLY on primary buttons per design system
  primary:
    'bg-accent text-white hover:bg-accent-hover hover:scale-105 hover:shadow-elevated active:scale-100',
  // Border-only variant for secondary actions — keeps accent off decorative elements
  secondary:
    'bg-transparent border-2 border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white hover:scale-105 active:scale-100',
  // Phone variant: accent bg, large text, phone icon — for persistent phone CTAs
  phone:
    'bg-accent text-white hover:bg-accent-hover hover:scale-105 hover:shadow-elevated active:scale-100 font-bold tracking-wide',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

// ─── Phone icon (inline SVG, no image dependency) ─────────────────────────────

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {variant === 'phone' && <PhoneIcon />}
      {children}
    </>
  )

  // Render as <a> / Next.js Link when href is provided
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  // Render as <button> when no href
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
