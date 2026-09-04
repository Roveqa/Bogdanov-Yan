import {
  type AppLocale,
  defaultLocale,
  isSupportedLocale,
} from '@shared/constants/locales'

export const localeStorageKey = 'locale'

function normalizeLocale(value: string): AppLocale | null {
  const compactValue = value.toLowerCase()

  if (isSupportedLocale(compactValue)) {
    return compactValue
  }

  const baseLocale = compactValue.split('-')[0]

  return isSupportedLocale(baseLocale) ? baseLocale : null
}

function detectBrowserLocale(): AppLocale | null {
  if (typeof navigator === 'undefined') {
    return null
  }

  const candidates =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate)

    if (normalized) {
      return normalized
    }
  }

  return null
}

export function detectInitialLocale(): AppLocale {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(localeStorageKey)

    if (stored && isSupportedLocale(stored)) {
      return stored
    }
  }

  return detectBrowserLocale() ?? defaultLocale
}
