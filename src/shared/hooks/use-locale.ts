import { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import {
  type AppLocale,
  defaultLocale,
  isSupportedLocale,
  supportedLocales,
} from '@shared/constants/locales'

export function useLocale() {
  const { i18n } = useTranslation()
  const resolvedLanguage = i18n.resolvedLanguage ?? ''

  const currentLocale: AppLocale = isSupportedLocale(resolvedLanguage)
    ? resolvedLanguage
    : defaultLocale

  const setLocale = useCallback(
    (locale: AppLocale) => {
      void i18n.changeLanguage(locale)
    },
    [i18n],
  )

  return {
    currentLocale,
    locales: supportedLocales,
    setLocale,
  } as const
}
