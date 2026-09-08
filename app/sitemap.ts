import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().toString().replace(/\/$/, '')
  const lastModified = new Date()

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/de`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
