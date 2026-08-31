import type { ThemePalette } from '@themes/contracts/color-contract'

export const lightPalette = {
  accent: {
    100: '#efe8da',
    300: '#d7c3a3',
    500: '#ad7a3a',
    700: '#6e4921',
  },
  neutral: {
    0: '#ffffff',
    50: '#f8f5ef',
    100: '#f1ece3',
    200: '#ddd4c5',
    400: '#9b907d',
    700: '#433c33',
    900: '#1b1916',
    1000: '#111111',
  },
} as const satisfies ThemePalette
