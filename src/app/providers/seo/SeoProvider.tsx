import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { defaultSeoMeta } from '@seo/config/default-meta'
import { buildMeta } from '@shared/lib/seo/build-meta'
import type {
  SeoContextValue,
  SeoMetaInput,
} from '@shared/lib/seo/seo.types'

const seoContext = createContext<SeoContextValue | null>(null)

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const element =
    document.head.querySelector<HTMLMetaElement>(selector) ??
    document.createElement('meta')

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }

  if (!element.parentNode) {
    document.head.append(element)
  }
}

function upsertLink(
  selector: string,
  attributes: Record<string, string>,
) {
  const element =
    document.head.querySelector<HTMLLinkElement>(selector) ??
    document.createElement('link')

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }

  if (!element.parentNode) {
    document.head.append(element)
  }
}

export function SeoProvider({ children }: PropsWithChildren) {
  const [meta, setMeta] = useState(defaultSeoMeta)

  useEffect(() => {
    document.title = meta.title
    document.documentElement.lang = meta.locale

    upsertMeta('meta[name="description"]', {
      content: meta.description,
      name: 'description',
    })
    upsertMeta('meta[name="keywords"]', {
      content: meta.keywords.join(', '),
      name: 'keywords',
    })
    upsertMeta('meta[name="robots"]', {
      content: meta.robots,
      name: 'robots',
    })
    upsertMeta('meta[name="theme-color"]', {
      content: meta.themeColor,
      name: 'theme-color',
    })
    upsertMeta('meta[property="og:title"]', {
      content: meta.title,
      property: 'og:title',
    })
    upsertMeta('meta[property="og:description"]', {
      content: meta.description,
      property: 'og:description',
    })
    upsertMeta('meta[property="og:type"]', {
      content: meta.type,
      property: 'og:type',
    })
    upsertMeta('meta[property="og:url"]', {
      content: meta.canonicalUrl,
      property: 'og:url',
    })
    upsertMeta('meta[property="og:image"]', {
      content: meta.imageUrl,
      property: 'og:image',
    })
    upsertMeta('meta[property="og:site_name"]', {
      content: meta.siteName,
      property: 'og:site_name',
    })
    upsertMeta('meta[property="og:locale"]', {
      content: meta.ogLocale,
      property: 'og:locale',
    })
    upsertMeta('meta[name="twitter:card"]', {
      content: 'summary_large_image',
      name: 'twitter:card',
    })
    upsertMeta('meta[name="twitter:title"]', {
      content: meta.title,
      name: 'twitter:title',
    })
    upsertMeta('meta[name="twitter:description"]', {
      content: meta.description,
      name: 'twitter:description',
    })
    upsertMeta('meta[name="twitter:image"]', {
      content: meta.imageUrl,
      name: 'twitter:image',
    })
    upsertLink('link[rel="canonical"]', {
      href: meta.canonicalUrl,
      rel: 'canonical',
    })
  }, [meta])

  const setSeoMeta = useCallback((input: SeoMetaInput) => {
    setMeta(buildMeta(defaultSeoMeta, input))
  }, [])

  const resetSeoMeta = useCallback(() => {
    setMeta(defaultSeoMeta)
  }, [])

  const value = useMemo(
    () => ({
      meta,
      resetSeoMeta,
      setSeoMeta,
    }),
    [meta, resetSeoMeta, setSeoMeta],
  )

  return <seoContext.Provider value={value}>{children}</seoContext.Provider>
}

export function useSeo() {
  const context = useContext(seoContext)

  if (!context) {
    throw new Error('useSeo must be used within SeoProvider')
  }

  return context
}
