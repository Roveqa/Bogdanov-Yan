import { siteMeta } from '@content/site/site-meta'
import { defaultLocale, localeToOgLocale } from '@shared/constants/locales'
import type { ResolvedSeoMeta } from '@shared/lib/seo/seo.types'

function readBaseUrl(value: unknown) {
  return typeof value === 'string' && value.length > 0
    ? value
    : 'http://localhost:5173'
}

const baseUrl = readBaseUrl(import.meta.env.VITE_APP_BASE_URL)

export const defaultSeoMeta: ResolvedSeoMeta = {
  canonicalUrl: baseUrl,
  description: siteMeta.defaultDescription,
  imageUrl: new URL(siteMeta.defaultOgImagePath, baseUrl).toString(),
  keywords: ['portfolio', 'ui', 'ux', 'product design'],
  locale: defaultLocale,
  ogLocale: localeToOgLocale[defaultLocale],
  robots: 'index, follow',
  siteName: siteMeta.siteName,
  themeColor: '#f6f2eb',
  title: siteMeta.defaultTitle,
  type: 'website',
}
