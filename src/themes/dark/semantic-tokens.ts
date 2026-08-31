import type { SemanticColorTokens } from '@themes/contracts/color-contract'

import { darkPalette } from './palette'

export const darkSemanticTokens = {
  accent: {
    contrast: darkPalette.neutral[0],
    primary: darkPalette.accent[500],
    primaryHover: darkPalette.accent[700],
  },
  background: {
    canvas: darkPalette.neutral[0],
    elevated: darkPalette.neutral[100],
    inverse: darkPalette.neutral[1000],
  },
  border: {
    default: darkPalette.neutral[200],
    strong: darkPalette.neutral[400],
  },
  text: {
    inverse: darkPalette.neutral[0],
    primary: darkPalette.neutral[900],
    secondary: darkPalette.neutral[700],
  },
} as const satisfies SemanticColorTokens
