import { createContext } from 'react'

import type { ThemeContextValue } from './theme.types'

export const themeContext = createContext<ThemeContextValue | null>(null)
