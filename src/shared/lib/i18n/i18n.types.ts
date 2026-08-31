import type { AppLocale } from '@shared/constants/locales'

export const i18nNamespaces = [
  'common',
  'home',
  'about',
  'works',
  'case-study',
  'seo',
] as const

export type I18nNamespace = (typeof i18nNamespaces)[number]

export type I18nResourceTree = Record<
  AppLocale,
  Record<I18nNamespace, Record<string, unknown>>
>
