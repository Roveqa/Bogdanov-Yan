export const supportedThemes = ['light', 'dark'] as const

export type AppTheme = (typeof supportedThemes)[number]

export const defaultTheme: AppTheme = 'light'

export function isSupportedTheme(value: string): value is AppTheme {
  return supportedThemes.includes(value as AppTheme)
}
