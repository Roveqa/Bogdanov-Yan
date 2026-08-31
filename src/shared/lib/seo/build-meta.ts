import { localeToOgLocale } from '@shared/constants/locales'

import type { ResolvedSeoMeta, SeoMetaInput } from './seo.types'

function createAbsoluteUrl(baseUrl: string, value: string) {
  return new URL(value, baseUrl).toString()
}

export function buildMeta(
  defaultMeta: ResolvedSeoMeta,
  input: SeoMetaInput = {},
): ResolvedSeoMeta {
  const locale = input.locale ?? defaultMeta.locale
  const canonicalUrl = input.canonicalPath
    ? createAbsoluteUrl(defaultMeta.canonicalUrl, input.canonicalPath)
    : defaultMeta.canonicalUrl
  const imageUrl = input.imagePath
    ? createAbsoluteUrl(defaultMeta.canonicalUrl, input.imagePath)
    : defaultMeta.imageUrl
  const title = input.title
    ? `${input.title} — ${defaultMeta.siteName}`
    : defaultMeta.title

  return {
    ...defaultMeta,
    canonicalUrl,
    description: input.description ?? defaultMeta.description,
    imageUrl,
    keywords: input.keywords ?? defaultMeta.keywords,
    locale,
    ogLocale: localeToOgLocale[locale],
    robots: input.noIndex ? 'noindex, nofollow' : defaultMeta.robots,
    title,
    type: input.type ?? defaultMeta.type,
  }
}
