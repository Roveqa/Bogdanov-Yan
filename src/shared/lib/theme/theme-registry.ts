import type { ThemeContract } from '@themes/contracts/theme-contract'
import { darkPalette } from '@themes/dark/palette'
import { darkSemanticTokens } from '@themes/dark/semantic-tokens'
import { lightPalette } from '@themes/light/palette'
import { lightSemanticTokens } from '@themes/light/semantic-tokens'

const baseTypography = {
  families: {
    body: "'Suisse Intl', sans-serif",
    display: "'Editorial New', serif",
  },
  fontSizes: {
    bodyLg: '1.125rem',
    bodyMd: '1rem',
    bodySm: '0.875rem',
    caption: '0.75rem',
    displayLg: '4.5rem',
    displaySm: '3rem',
    titleMd: '2rem',
    titleSm: '1.5rem',
  },
  letterSpacing: {
    normal: '0',
    tight: '-0.03em',
    wide: '0.08em',
  },
  lineHeights: {
    base: 1.5,
    compact: 1.1,
    relaxed: 1.75,
  },
  weights: {
    medium: 500,
    regular: 400,
    semibold: 600,
  },
} as const

const baseSpacing = {
  '2xl': '4rem',
  lg: '1.5rem',
  md: '1rem',
  sm: '0.5rem',
  xl: '2rem',
  xs: '0.25rem',
} as const

const baseRadius = {
  lg: '1.5rem',
  md: '1rem',
  pill: '999px',
  sm: '0.5rem',
} as const

const baseShadows = {
  elevated: '0 24px 60px rgba(0, 0, 0, 0.16)',
  subtle: '0 12px 32px rgba(0, 0, 0, 0.08)',
} as const

const baseMotion = {
  base: 320,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  fast: 180,
  slow: 640,
} as const

const baseZIndex = {
  base: 1,
  header: 100,
  overlay: 200,
} as const

export const themeRegistry = {
  dark: {
    id: 'dark',
    motion: baseMotion,
    palette: darkPalette,
    radius: baseRadius,
    semanticColors: darkSemanticTokens,
    shadows: baseShadows,
    spacing: baseSpacing,
    typography: baseTypography,
    zIndex: baseZIndex,
  },
  light: {
    id: 'light',
    motion: baseMotion,
    palette: lightPalette,
    radius: baseRadius,
    semanticColors: lightSemanticTokens,
    shadows: baseShadows,
    spacing: baseSpacing,
    typography: baseTypography,
    zIndex: baseZIndex,
  },
} as const satisfies Record<'dark' | 'light', ThemeContract>
