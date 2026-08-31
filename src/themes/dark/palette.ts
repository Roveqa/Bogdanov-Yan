import type { ThemePalette } from '@themes/contracts/color-contract'

export const darkPalette = {
  accent: {
    100: '#352718',
    300: '#7c5c35',
    500: '#d7b07a',
    700: '#f0dcc1',
  },
  neutral: {
    0: '#0d0d0d',
    50: '#131313',
    100: '#191919',
    200: '#232323',
    400: '#767676',
    700: '#c9c4bb',
    900: '#f1ede5',
    1000: '#ffffff',
  },
} as const satisfies ThemePalette
