function readEnvValue(value: unknown, fallback: string) {
  return typeof value === 'string' && value.length > 0 ? value : fallback
}

export const env = {
  appTitle: readEnvValue(import.meta.env.VITE_APP_TITLE, 'Premium Portfolio'),
  baseUrl: readEnvValue(
    import.meta.env.VITE_APP_BASE_URL,
    'http://localhost:5173',
  ),
  defaultLocale: readEnvValue(import.meta.env.VITE_DEFAULT_LOCALE, 'en'),
} as const
