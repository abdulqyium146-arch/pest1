import type { Metadata } from 'next'
import { business } from '@/lib/content/business'
import type { Service } from '@/lib/content/services'
import type { LocationContent } from '@/lib/content/locations'
import type { Pest } from '@/lib/content/pests'
import type { Treatment } from '@/lib/content/treatments'
import type { CommercialService } from '@/lib/content/commercial'

// ─── Shared helpers ───────────────────────────────────────────────────────────

function ogImage(path: string) {
  return [
    {
      url: `${business.url}/og${path}.png`,
      width: 1200,
      height: 630,
      alt: `${business.name} — ${business.address.city}, ${business.address.state}`,
    },
  ]
}

const baseRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

export function buildHomeMeta(): Metadata {
  const title = `OCP Pest Control Los Angeles | Call ${business.phone.display}`
  const description =
    `OCP Pest Control serves Los Angeles with bed bug extermination, termite control, rat removal, cockroach control, and more. Licensed, insured, LA-based. Call ${business.phone.display}.`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: business.url },
    openGraph: {
      title,
      description,
      url: business.url,
      siteName: business.name,
      images: ogImage('/home'),
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/home') },
    robots: baseRobots,
  }
}

// ─── Service pages ────────────────────────────────────────────────────────────

export function buildServiceMeta(service: Service): Metadata {
  const title = `${service.name} Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description = service.description
  const pageUrl = `${business.url}/services/${service.slug}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      images: ogImage(`/services/${service.slug}`),
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage(`/services/${service.slug}`) },
    robots: baseRobots,
  }
}

// ─── Services hub ─────────────────────────────────────────────────────────────

export function buildServicesHubMeta(): Metadata {
  const title = `All Pest Control Services Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description =
    `Complete pest control services in Los Angeles: bed bugs, termites, rodents, cockroaches, ants, mosquitoes, wasps, wildlife, fumigation, and more. Licensed, insured. Call ${business.phone.display}.`
  const pageUrl = `${business.url}/services`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: business.name, images: ogImage('/services'), locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/services') },
    robots: baseRobots,
  }
}

// ─── Pest pages ───────────────────────────────────────────────────────────────

export function buildPestMeta(pest: Pest): Metadata {
  const title = `${pest.name} in Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description = `${pest.description} Call ${business.phone.display}.`
  const pageUrl = `${business.url}/pests/${pest.slug}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      images: ogImage(`/pests/${pest.slug}`),
      locale: 'en_US',
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage(`/pests/${pest.slug}`) },
    robots: baseRobots,
  }
}

// ─── Pests hub ────────────────────────────────────────────────────────────────

export function buildPestsHubMeta(): Metadata {
  const title = `Pest Identification Guide Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description =
    `Identify common Los Angeles pests: termites, bed bugs, cockroaches, rats, mice, ants, mosquitoes, fleas, spiders, wasps, and wildlife. Expert LA pest identification guide. Call ${business.phone.display}.`
  const pageUrl = `${business.url}/pests`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: business.name, images: ogImage('/pests'), locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/pests') },
    robots: baseRobots,
  }
}

// ─── Treatment pages ──────────────────────────────────────────────────────────

export function buildTreatmentMeta(treatment: Treatment): Metadata {
  const title = `${treatment.name} Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description = `${treatment.description} Call ${business.phone.display}.`
  const pageUrl = `${business.url}/treatments/${treatment.slug}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      images: ogImage(`/treatments/${treatment.slug}`),
      locale: 'en_US',
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage(`/treatments/${treatment.slug}`) },
    robots: baseRobots,
  }
}

// ─── Treatments hub ───────────────────────────────────────────────────────────

export function buildTreatmentsHubMeta(): Metadata {
  const title = `Pest Control Treatment Methods Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description =
    `Pest control treatment options in Los Angeles: heat treatment, fumigation, liquid insecticides, bait stations, exclusion, and organic methods. Compare treatments and find the right approach. Call ${business.phone.display}.`
  const pageUrl = `${business.url}/treatments`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: business.name, images: ogImage('/treatments'), locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/treatments') },
    robots: baseRobots,
  }
}

// ─── Commercial service pages ─────────────────────────────────────────────────

export function buildCommercialMeta(commercial: CommercialService): Metadata {
  const title = `${commercial.name} | Call ${business.phone.display} | OCP Pest Control`
  const description = `${commercial.description} Call ${business.phone.display}.`
  const pageUrl = `${business.url}/commercial/${commercial.slug}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      images: ogImage(`/commercial/${commercial.slug}`),
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage(`/commercial/${commercial.slug}`) },
    robots: baseRobots,
  }
}

// ─── Commercial hub ───────────────────────────────────────────────────────────

export function buildCommercialHubMeta(): Metadata {
  const title = `Commercial Pest Control Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description =
    `Commercial pest control for restaurants, hotels, warehouses, healthcare facilities, schools, offices, and apartment buildings in Los Angeles. Licensed, insured, code-compliant. Call ${business.phone.display}.`
  const pageUrl = `${business.url}/commercial`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: business.name, images: ogImage('/commercial'), locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/commercial') },
    robots: baseRobots,
  }
}

// ─── Location pages ───────────────────────────────────────────────────────────

export function buildLocationMeta(location: LocationContent): Metadata {
  const title = `Pest Control ${location.displayName} | Call ${business.phone.display} | OCP Pest Control`
  const description = location.metaDescription
  const pageUrl = `${business.url}/locations/${location.slug}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      images: ogImage(`/locations/${location.slug}`),
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: ogImage(`/locations/${location.slug}`) },
    robots: baseRobots,
  }
}

// ─── Locations hub ────────────────────────────────────────────────────────────

export function buildLocationsHubMeta(): Metadata {
  const title = `Pest Control Service Areas Los Angeles | Call ${business.phone.display} | OCP Pest Control`
  const description =
    `OCP Pest Control serves Los Angeles, Pasadena, Glendale, Burbank, Long Beach, Santa Monica, Torrance, Beverly Hills, and surrounding LA County cities. Call ${business.phone.display}.`
  const pageUrl = `${business.url}/locations`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: business.name, images: ogImage('/locations'), locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description, images: ogImage('/locations') },
    robots: baseRobots,
  }
}
