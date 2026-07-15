import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'

import { business } from '@/lib/content/business'
import { buildLocalBusiness, buildWebSite } from '@/lib/schema'
import { JsonLd } from '@/components/schema/JsonLd'
import { StickyCallBar } from '@/components/ui/StickyCallBar'
import { MegaMenu } from '@/components/navigation/MegaMenu'

// ─── Fonts ────────────────────────────────────────────────────────────────────

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// ─── Root metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `OCP Pest Control Los Angeles | Call (866) 755-1284`,
    template: `%s | OCP Pest Control`,
  },
  description:
    'OCP Pest Control — professional pest control in Los Angeles. Bed bugs, termites, rodents, cockroaches, ants, mosquitoes, wildlife, fumigation, and more. Licensed, insured. Call (866) 755-1284.',
  robots: {
    index: true,
    follow: true,
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable}`}
    >
      <head>
        <JsonLd data={buildLocalBusiness()} />
        <JsonLd data={buildWebSite()} />
      </head>
      <body className="font-body antialiased bg-neutral-50 text-neutral-950 min-h-screen">
        <MegaMenu />
        <main id="main-content">
          {children}
        </main>
        <StickyCallBar />
      </body>
    </html>
  )
}
