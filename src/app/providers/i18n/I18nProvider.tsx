import { useEffect } from 'react'

import type { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'

import {
  isSupportedLocale,
  localeToHtmlLang,
} from '@shared/constants/locales'
import { i18n } from '@shared/lib/i18n/init-i18n'

export function I18nProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const applyHtmlLang = (locale: string) => {
      const htmlLang = isSupportedLocale(locale)
        ? localeToHtmlLang[locale]
        : localeToHtmlLang.en

      document.documentElement.lang = htmlLang
    }

    applyHtmlLang(i18n.resolvedLanguage ?? 'en')
    i18n.on('languageChanged', applyHtmlLang)

    return () => {
      i18n.off('languageChanged', applyHtmlLang)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
