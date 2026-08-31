import type { AppLocale } from '@shared/constants/locales'

export interface SeoMetaInput {
  canonicalPath?: string
  description?: string
  imagePath?: string
  keywords?: string[]
  locale?: AppLocale
  noIndex?: boolean
  title?: string
  type?: 'article' | 'website'
}

export interface ResolvedSeoMeta {
  canonicalUrl: string
  description: string
  imageUrl: string
  keywords: string[]
  locale: AppLocale
  ogLocale: string
  robots: string
  siteName: string
  themeColor: string
  title: string
  type: 'article' | 'website'
}

export interface SeoContextValue {
  meta: ResolvedSeoMeta
  resetSeoMeta: () => void
  setSeoMeta: (meta: SeoMetaInput) => void
}
