import {
  type AppLocale,
  defaultLocale,
  isSupportedLocale,
} from '@shared/constants/locales'

function normalizeLocale(value: string): AppLocale | null {
  const compactValue = value.toLowerCase()

  if (isSupportedLocale(compactValue)) {
    return compactValue
  }

  const baseLocale = compactValue.split('-')[0]

  return isSupportedLocale(baseLocale) ? baseLocale : null
}

export function detectInitialLocale(): AppLocale {
  return defaultLocale
}
