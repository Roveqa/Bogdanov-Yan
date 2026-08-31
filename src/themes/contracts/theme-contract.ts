import type {
  SemanticColorTokens,
  ThemePalette,
} from './color-contract'
import type { TypographyContract } from './typography-contract'

export interface ThemeContract {
  id: 'dark' | 'light'
  motion: {
    base: number
    easing: string
    fast: number
    slow: number
  }
  palette: ThemePalette
  radius: {
    lg: string
    md: string
    pill: string
    sm: string
  }
  semanticColors: SemanticColorTokens
  shadows: {
    elevated: string
    subtle: string
  }
  spacing: {
    '2xl': string
    lg: string
    md: string
    sm: string
    xl: string
    xs: string
  }
  typography: TypographyContract
  zIndex: {
    base: number
    header: number
    overlay: number
  }
}
