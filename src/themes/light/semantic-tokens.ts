import type { SemanticColorTokens } from '@themes/contracts/color-contract'

import { lightPalette } from './palette'

export const lightSemanticTokens = {
  accent: {
    contrast: lightPalette.neutral[0],
    primary: lightPalette.accent[500],
    primaryHover: lightPalette.accent[700],
  },
  background: {
    canvas: lightPalette.neutral[50],
    elevated: lightPalette.neutral[0],
    inverse: lightPalette.neutral[900],
  },
  border: {
    default: lightPalette.neutral[200],
    strong: lightPalette.neutral[400],
  },
  text: {
    inverse: lightPalette.neutral[0],
    primary: lightPalette.neutral[900],
    secondary: lightPalette.neutral[700],
  },
} as const satisfies SemanticColorTokens
