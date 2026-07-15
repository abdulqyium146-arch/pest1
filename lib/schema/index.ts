import { business } from '@/lib/content/business'
import type { Service } from '@/lib/content/services'
import type { Pest } from '@/lib/content/pests'
import type { Treatment } from '@/lib/content/treatments'
import type { CommercialService } from '@/lib/content/commercial'
import type { LocationContent } from '@/lib/content/locations'

// ─── Types ───────────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string
  item: string
}

interface FAQItem {
  q: string
  a: string
}

interface HowToStep {
  name: string
  text: string
}

// ─── LocalBusiness / Organization ────────────────────────────────────────────

export function buildLocalBusiness(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization', 'PestControlService'],
    name: business.name,
    url: business.url,
    telephone: business.phone.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Los Angeles', sameAs: 'https://en.wikipedia.org/wiki/Los_Angeles' },
      { '@type': 'City', name: 'Pasadena' },
      { '@type': 'City', name: 'Glendale' },
      { '@type': 'City', name: 'Burbank' },
      { '@type': 'City', name: 'Long Beach' },
      { '@type': 'City', name: 'Santa Monica' },
      { '@type': 'City', name: 'Torrance' },
      { '@type': 'City', name: 'Beverly Hills' },
    ],
    priceRange: '$$',
    knowsAbout: [
      'Pest Control',
      'Bed Bug Extermination',
      'Termite Control',
      'Rodent Control',
      'Wildlife Removal',
      'Cockroach Control',
      'Ant Control',
      'Bee Removal',
      'Fumigation',
      'Heat Treatment',
    ],
    sameAs: [
      `${business.url}`,
    ],
    ...(business.googleRating !== null
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: business.googleRating,
          },
        }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pest Control Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Extermination' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Termite Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rat & Rodent Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bee Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cockroach Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ant Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mosquito Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wasp & Hornet Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fumigation Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wildlife Removal' } },
      ],
    },
  }
}

// ─── Service ─────────────────────────────────────────────────────────────────

export function buildService(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.schema.serviceType,
    description: service.schema.description,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone.display,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
    url: `${business.url}/services/${service.slug}`,
  }
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

export function buildBreadcrumb(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

// ─── WebSite ──────────────────────────────────────────────────────────────────

export function buildWebSite(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${business.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────

export function buildFAQPage(faqs: FAQItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

// ─── Article (for pest info and guide pages) ─────────────────────────────────

export function buildArticle(opts: {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    author: {
      '@type': 'Organization',
      name: business.name,
      url: business.url,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      url: business.url,
    },
    datePublished: opts.datePublished ?? new Date().toISOString().split('T')[0],
    dateModified: opts.dateModified ?? new Date().toISOString().split('T')[0],
  }
}

// ─── WebPage ──────────────────────────────────────────────────────────────────

export function buildWebPage(opts: {
  name: string
  description: string
  url: string
  breadcrumb?: BreadcrumbItem[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: {
      '@type': 'WebSite',
      name: business.name,
      url: business.url,
    },
    ...(opts.breadcrumb
      ? {
          breadcrumb: buildBreadcrumb(opts.breadcrumb),
        }
      : {}),
  }
}

// ─── HowTo ────────────────────────────────────────────────────────────────────

export function buildHowTo(opts: {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// ─── ServiceArea ─────────────────────────────────────────────────────────────

export function buildServiceArea(location: LocationContent): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Pest Control in ${location.displayName}`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone.display,
      url: business.url,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    serviceType: 'Pest Control',
    url: `${business.url}/locations/${location.slug}`,
  }
}

// ─── Pest Info (specialized service for pest ID pages) ───────────────────────

export function buildPestService(pest: Pest): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${pest.name} Control`,
    description: pest.schema.description,
    serviceType: `${pest.name} Extermination`,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone.display,
      url: business.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
    url: `${business.url}/pests/${pest.slug}`,
  }
}

// ─── Treatment schema ─────────────────────────────────────────────────────────

export function buildTreatmentService(treatment: Treatment): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: treatment.name,
    description: treatment.schema.description,
    serviceType: treatment.name,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone.display,
      url: business.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
    url: `${business.url}/treatments/${treatment.slug}`,
  }
}

// ─── Commercial service schema ────────────────────────────────────────────────

export function buildCommercialService(commercial: CommercialService): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: commercial.name,
    description: commercial.schema.description,
    serviceType: 'Commercial Pest Control',
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone.display,
      url: business.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
    url: `${business.url}/commercial/${commercial.slug}`,
  }
}

// ─── AggregateRating (standalone, for pages that show reviews) ───────────────

export function buildAggregateRating(opts: {
  ratingValue: number
  reviewCount: number
  itemName: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: opts.itemName,
    },
    ratingValue: opts.ratingValue,
    reviewCount: opts.reviewCount,
    bestRating: 5,
    worstRating: 1,
  }
}
