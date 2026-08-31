import type { AppTheme } from '@shared/constants/themes'
import type { ThemeContract } from '@themes/contracts/theme-contract'

export interface ThemeContextValue {
  currentTheme: AppTheme
  setTheme: (theme: AppTheme) => void
  theme: ThemeContract
  toggleTheme: () => void
}
