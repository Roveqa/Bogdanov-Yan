import { useContext } from 'react'

import { themeContext } from '@shared/lib/theme/theme-context'

export function useTheme() {
  const context = useContext(themeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
