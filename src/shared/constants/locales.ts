export const supportedLocales = ['en', 'ru'] as const

export type AppLocale = (typeof supportedLocales)[number]

export const defaultLocale: AppLocale = 'en'

export const localeLabels = {
  en: 'English',
  ru: 'Русский',
} as const satisfies Record<AppLocale, string>

export const localeToHtmlLang = {
  en: 'en',
  ru: 'ru',
} as const satisfies Record<AppLocale, string>

export const localeToOgLocale = {
  en: 'en_US',
  ru: 'ru_RU',
} as const satisfies Record<AppLocale, string>

export function isSupportedLocale(value: string): value is AppLocale {
  return supportedLocales.includes(value as AppLocale)
}
