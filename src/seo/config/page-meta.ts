import type { SeoMetaInput } from '@shared/lib/seo/seo.types'

export const pageMeta = {
  about: {
    title: 'About',
    type: 'website',
  },
  'case-study': {
    title: 'Case Study',
    type: 'article',
  },
  home: {
    title: 'Home',
    type: 'website',
  },
  'not-found': {
    noIndex: true,
    title: 'Page Not Found',
    type: 'website',
  },
  works: {
    title: 'Works',
    type: 'website',
  },
} as const satisfies Record<string, SeoMetaInput>
