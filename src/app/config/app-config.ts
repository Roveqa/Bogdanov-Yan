import { env } from './env'

export const appConfig = {
  baseUrl: env.baseUrl,
  defaultLocale: env.defaultLocale,
  name: env.appTitle,
} as const
