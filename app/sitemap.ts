import type { MetadataRoute } from 'next'
import { business } from '@/lib/content/business'
import { services } from '@/lib/content/services'
import { locations } from '@/lib/content/locations'
import { pests } from '@/lib/content/pests'
import { treatments } from '@/lib/content/treatments'
import { commercialServices } from '@/lib/content/commercial'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()

  // Homepage
  const home: MetadataRoute.Sitemap[number] = {
    url: base,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  }

  // Hub pages
  const hubs: MetadataRoute.Sitemap = [
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/pests`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/treatments`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/commercial`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Pest identification pages
  const pestPages: MetadataRoute.Sitemap = pests.map((p) => ({
    url: `${base}/pests/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Treatment method pages
  const treatmentPages: MetadataRoute.Sitemap = treatments.map((t) => ({
    url: `${base}/treatments/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Commercial service pages
  const commercialPages: MetadataRoute.Sitemap = commercialServices.map((c) => ({
    url: `${base}/commercial/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Location pages (dynamic + static Los Angeles covered by /locations/[slug])
  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    home,
    ...hubs,
    ...servicePages,
    ...pestPages,
    ...treatmentPages,
    ...commercialPages,
    ...locationPages,
  ]
}
