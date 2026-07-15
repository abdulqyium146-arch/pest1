import type { MetadataRoute } from 'next'
import { business } from '@/lib/content/business'

// ─── Robots.txt — allow all crawlers, point to sitemap ────────────────────────

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any internal next.js paths that shouldn't be indexed
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${business.url}/sitemap.xml`,
  }
}
