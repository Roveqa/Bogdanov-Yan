import { type AppTheme,defaultTheme, isSupportedTheme } from '@shared/constants/themes'

import { themeRegistry } from './theme-registry'

export function resolveTheme(value: string | null | undefined): AppTheme {
  return value && isSupportedTheme(value) ? value : defaultTheme
}

export function getThemeContract(theme: AppTheme) {
  return themeRegistry[theme]
}
