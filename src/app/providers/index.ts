import { createElement, type PropsWithChildren } from 'react'

import { I18nProvider } from '@app/providers/i18n'
import { SeoProvider } from '@app/providers/seo'
import { ThemeProvider } from '@app/providers/theme'

export function AppProviders({ children }: PropsWithChildren) {
  return createElement(
    ThemeProvider,
    null,
    createElement(
      I18nProvider,
      null,
      createElement(SeoProvider, null, children),
    ),
  )
}
