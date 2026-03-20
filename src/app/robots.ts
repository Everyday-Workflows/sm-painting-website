import { MetadataRoute } from 'next'
import { resolvePublicSiteUrl } from '@/lib/siteUrl'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resolvePublicSiteUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
