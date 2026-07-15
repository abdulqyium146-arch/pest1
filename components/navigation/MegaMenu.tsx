'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { business } from '@/lib/content/business'
import { Button } from '@/components/ui/Button'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string
  href: string
}

interface NavColumn {
  heading: string
  links: NavLink[]
}

interface MegaNavItem {
  kind: 'mega'
  label: string
  href: string
  columns: NavColumn[]
  footer: NavLink
}

interface DropdownNavItem {
  kind: 'dropdown'
  label: string
  href: string
  links: NavLink[]
}

interface SimpleNavItem {
  kind: 'link'
  label: string
  href: string
}

type NavItem = MegaNavItem | DropdownNavItem | SimpleNavItem

// ─── Navigation data ──────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    kind: 'link',
    label: 'Home',
    href: '/',
  },
  {
    kind: 'mega',
    label: 'Services',
    href: '/services',
    columns: [
      {
        heading: 'Insect Control',
        links: [
          { label: 'Bed Bug Extermination', href: '/services/bed-bug-extermination' },
          { label: 'Cockroach Control', href: '/services/cockroach-control' },
          { label: 'Ant Control', href: '/services/ant-control' },
          { label: 'Mosquito Control', href: '/services/mosquito-control' },
          { label: 'Wasp & Hornet Control', href: '/services/wasp-control' },
          { label: 'Flea Control', href: '/services/flea-control' },
          { label: 'Fly Control', href: '/services/fly-control' },
          { label: 'Spider Control', href: '/services/spider-control' },
          { label: 'Bee Removal', href: '/services/bee-removal' },
        ],
      },
      {
        heading: 'Rodent & Wildlife',
        links: [
          { label: 'Rat & Rodent Control', href: '/services/rat-rodent-control' },
          { label: 'Rodent Proofing & Exclusion', href: '/services/rodent-proofing' },
          { label: 'Wildlife Removal', href: '/services/wildlife-control' },
        ],
      },
      {
        heading: 'Termites & Specialty',
        links: [
          { label: 'Termite Control', href: '/services/termite-control' },
          { label: 'Fumigation Services', href: '/services/fumigation' },
          { label: 'Heat Treatment', href: '/services/heat-treatment' },
          { label: 'Crawl Space Treatment', href: '/services/crawl-space-treatment' },
        ],
      },
    ],
    footer: { label: 'View All Services →', href: '/services' },
  },
  {
    kind: 'mega',
    label: 'Pests',
    href: '/pests',
    columns: [
      {
        heading: 'Insects',
        links: [
          { label: 'Bed Bugs', href: '/pests/bed-bugs' },
          { label: 'Cockroaches', href: '/pests/cockroaches' },
          { label: 'Ants', href: '/pests/ants' },
          { label: 'Mosquitoes', href: '/pests/mosquitoes' },
          { label: 'Wasps', href: '/pests/wasps' },
          { label: 'Fleas', href: '/pests/fleas' },
          { label: 'Spiders', href: '/pests/spiders' },
          { label: 'Flies', href: '/pests/flies' },
        ],
      },
      {
        heading: 'Rodents & Wildlife',
        links: [
          { label: 'Rats', href: '/pests/rats' },
          { label: 'Mice', href: '/pests/mice' },
          { label: 'Wildlife', href: '/pests/wildlife' },
        ],
      },
      {
        heading: 'Wood-Destroying Organisms',
        links: [
          { label: 'Termites', href: '/pests/termites' },
        ],
      },
    ],
    footer: { label: 'View Pest Identification Guide →', href: '/pests' },
  },
  {
    kind: 'dropdown',
    label: 'Treatments',
    href: '/treatments',
    links: [
      { label: 'Heat Treatment', href: '/treatments/heat-treatment' },
      { label: 'Fumigation', href: '/treatments/fumigation' },
      { label: 'Liquid Treatment', href: '/treatments/liquid-treatment' },
      { label: 'Bait Stations', href: '/treatments/bait-stations' },
      { label: 'Exclusion', href: '/treatments/exclusion' },
      { label: 'Organic Pest Control', href: '/treatments/organic-pest-control' },
      { label: 'View All Treatments →', href: '/treatments' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'Commercial',
    href: '/commercial',
    links: [
      { label: 'Restaurant Pest Control', href: '/commercial/restaurant-pest-control' },
      { label: 'Hotel & Hospitality', href: '/commercial/hotel-pest-control' },
      { label: 'Warehouse & Distribution', href: '/commercial/warehouse-pest-control' },
      { label: 'Healthcare Facilities', href: '/commercial/healthcare-pest-control' },
      { label: 'Schools & Education', href: '/commercial/school-pest-control' },
      { label: 'Office Buildings', href: '/commercial/office-pest-control' },
      { label: 'Apartment Complexes', href: '/commercial/apartment-pest-control' },
      { label: 'Retail Stores', href: '/commercial/retail-pest-control' },
      { label: 'View All Commercial →', href: '/commercial' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'Locations',
    href: '/locations',
    links: [
      { label: 'Los Angeles', href: '/locations/los-angeles' },
      { label: 'Pasadena', href: '/locations/pasadena' },
      { label: 'Glendale', href: '/locations/glendale' },
      { label: 'Burbank', href: '/locations/burbank' },
      { label: 'Long Beach', href: '/locations/long-beach' },
      { label: 'Santa Monica', href: '/locations/santa-monica' },
      { label: 'Beverly Hills', href: '/locations/beverly-hills' },
      { label: 'Torrance', href: '/locations/torrance' },
      { label: 'All Service Areas →', href: '/locations' },
    ],
  },
  {
    kind: 'dropdown',
    label: 'Resources',
    href: '/resources',
    links: [
      { label: 'Pest Prevention Guides', href: '/prevention' },
      { label: 'Treatment Guides', href: '/treatments' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pest Identification Guide', href: '/pests' },
    ],
  },
]

// ─── ChevronDown icon ─────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="14"
      height="14"
      aria-hidden="true"
      className={`transition-transform duration-150 ease-in-out flex-shrink-0 ${open ? 'rotate-180' : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Phone SVG ────────────────────────────────────────────────────────────────

function PhoneSvg({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Hamburger / Close icon ───────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// ─── Desktop: Dropdown panel (simple list) ────────────────────────────────────

function DropdownPanel({ item }: { item: DropdownNavItem }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 z-50 min-w-[220px]">
      <div className="bg-white rounded-lg shadow-elevated border border-neutral-100 py-1.5 overflow-hidden">
        {item.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-sm text-neutral-600 hover:text-accent hover:bg-neutral-50 transition-colors duration-150 ease-in-out whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Desktop: Mega panel (multi-column) ──────────────────────────────────────

function MegaPanel({ item }: { item: MegaNavItem }) {
  return (
    <div className="fixed left-0 right-0 z-50 pt-2" style={{ top: 'var(--header-height, 64px)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-elevated border border-neutral-100 overflow-hidden">
          {/* Columns */}
          <div className="grid grid-cols-3 gap-0 divide-x divide-neutral-100 p-6">
            {item.columns.map((col) => (
              <div key={col.heading} className="px-6 first:pl-0 last:pr-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  {col.heading}
                </p>
                <ul className="space-y-1" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-sm text-neutral-600 hover:text-accent transition-colors duration-150 ease-in-out py-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Footer row */}
          <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-3">
            <Link
              href={item.footer.href}
              className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-150 ease-in-out"
            >
              {item.footer.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Mobile: Accordion item ───────────────────────────────────────────────────

function MobileAccordion({
  item,
  onClose,
}: {
  item: MegaNavItem | DropdownNavItem
  onClose: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const links: NavLink[] =
    item.kind === 'mega'
      ? item.columns.flatMap((col) => col.links)
      : item.links

  const footerLink: NavLink | null = item.kind === 'mega' ? item.footer : null

  const isActive = pathname.startsWith(item.href) && item.href !== '/'

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset ${
          isActive ? 'text-accent' : 'text-neutral-950'
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown open={expanded} />
      </button>

      {expanded && (
        <div className="pb-2">
          {item.kind === 'mega' ? (
            // Group by column heading in mobile view
            item.columns.map((col) => (
              <div key={col.heading} className="px-4 mb-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5 mt-1">
                  {col.heading}
                </p>
                <ul className="space-y-0.5" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`block text-sm py-1.5 transition-colors duration-150 ease-in-out ${
                          pathname === link.href
                            ? 'text-accent font-medium'
                            : 'text-neutral-600 hover:text-accent'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul className="px-4 space-y-0.5" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block text-sm py-1.5 transition-colors duration-150 ease-in-out ${
                      pathname === link.href
                        ? 'text-accent font-medium'
                        : 'text-neutral-600 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {footerLink && (
            <div className="px-4 pt-1">
              <Link
                href={footerLink.href}
                onClick={onClose}
                className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-150 ease-in-out"
              >
                {footerLink.label}
              </Link>
            </div>
          )}
        </div>
      )}
    </li>
  )
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  // Close drawer on route change
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-sm lg:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-elevated overflow-y-auto lg:hidden flex flex-col"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 flex-shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md"
            aria-label={`${business.name} — go to homepage`}
          >
            <div
              className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-white font-bold text-sm"
              aria-hidden="true"
            >
              OCP
            </div>
            <span className="font-display font-bold text-neutral-950 text-base">
              {business.name}
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50 transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav items */}
        <nav aria-label="Mobile navigation" className="flex-1 py-2">
          <ul role="list" className="divide-y divide-neutral-100">
            {NAV_ITEMS.map((item) => {
              if (item.kind === 'link') {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block px-4 py-3 text-base font-semibold transition-colors duration-150 ease-in-out ${
                        isActive ? 'text-accent' : 'text-neutral-950 hover:text-accent'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }
              return (
                <MobileAccordion key={item.href} item={item} onClose={onClose} />
              )
            })}
          </ul>
        </nav>

        {/* Drawer footer CTAs */}
        <div className="flex-shrink-0 border-t border-neutral-100 p-4 space-y-3">
          <a
            href={business.phone.tracking}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={`Call us at ${business.phone.display}`}
          >
            <PhoneSvg size={16} />
            {business.phone.display}
          </a>
          <Button variant="primary" size="sm" href="/contact" className="w-full">
            Free Inspection
          </Button>
        </div>
      </div>
    </>
  )
}

// ─── Desktop nav item ─────────────────────────────────────────────────────────

function DesktopNavItem({
  item,
  openKey,
  onOpen,
  onClose,
}: {
  item: NavItem
  openKey: string | null
  onOpen: (key: string) => void
  onClose: () => void
}) {
  const pathname = usePathname()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isOpen = openKey === item.href
  const isActive =
    item.href === '/'
      ? pathname === '/'
      : pathname.startsWith(item.href)

  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (item.kind !== 'link') onOpen(item.href)
  }, [item, onOpen])

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => {
      onClose()
    }, 120)
  }, [onClose])

  // Keyboard: escape closes
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  if (item.kind === 'link') {
    return (
      <li>
        <Link
          href={item.href}
          className={`text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm ${
            isActive
              ? 'text-accent'
              : 'text-neutral-500 hover:text-neutral-950'
          }`}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? onClose() : onOpen(item.href))}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm ${
          isActive || isOpen
            ? 'text-accent'
            : 'text-neutral-500 hover:text-neutral-950'
        }`}
      >
        {item.label}
        <ChevronDown open={isOpen} />
      </button>

      {isOpen && item.kind === 'mega' && <MegaPanel item={item} />}
      {isOpen && item.kind === 'dropdown' && <DropdownPanel item={item} />}
    </li>
  )
}

// ─── MegaMenu (main export) ───────────────────────────────────────────────────

export function MegaMenu() {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const handleOpen = useCallback((key: string) => setOpenKey(key), [])
  const handleClose = useCallback(() => setOpenKey(null), [])

  // Global escape key handler
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenKey(null)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // Close mega panel when clicking outside
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <header
      className="sticky top-0 z-40 bg-white border-b border-neutral-100 shadow-card"
      style={{ '--header-height': '64px' } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md flex-shrink-0"
            aria-label={`${business.name} — go to homepage`}
          >
            <div
              className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-white font-bold text-sm"
              aria-hidden="true"
            >
              OCP
            </div>
            <span className="font-display font-bold text-neutral-950 text-base sm:text-lg leading-tight hidden sm:block">
              {business.name}
            </span>
            <span className="font-display font-bold text-neutral-950 text-base sm:hidden">
              OCP
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            <ul role="list" className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.href}
                  item={item}
                  openKey={openKey}
                  onOpen={handleOpen}
                  onClose={handleClose}
                />
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={business.phone.tracking}
              className="flex items-center gap-1.5 text-sm font-semibold text-neutral-950 hover:text-accent transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Call us at ${business.phone.display}`}
            >
              <PhoneSvg size={16} />
              {business.phone.display}
            </a>
            <Button variant="primary" size="sm" href="/contact">
              Free Inspection
            </Button>
          </div>

          {/* Mobile right-side controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={business.phone.tracking}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label={`Call us at ${business.phone.display}`}
            >
              <PhoneSvg size={18} />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Open navigation menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50 transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <HamburgerIcon />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer (rendered inside header for stacking context, portal-like) */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
