import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { type AppTheme,defaultTheme } from '@shared/constants/themes'
import { getThemeContract, resolveTheme } from '@shared/lib/theme/resolve-theme'
import { themeContext } from '@shared/lib/theme/theme-context'
import { themeStorageKey } from '@themes/model/theme.constants'

function getSystemTheme(): AppTheme {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return defaultTheme
}

function getInitialTheme(): AppTheme {
  if (typeof window === 'undefined') {
    return defaultTheme
  }

  const persistedTheme = window.localStorage.getItem(themeStorageKey)

  return persistedTheme ? resolveTheme(persistedTheme) : getSystemTheme()
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
    window.localStorage.setItem(themeStorageKey, currentTheme)
  }, [currentTheme])

  const setTheme = useCallback((theme: AppTheme) => {
    setCurrentTheme(theme)
  }, [])

  const toggleTheme = useCallback(() => {
    setCurrentTheme((value) => (value === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(
    () => ({
      currentTheme,
      setTheme,
      theme: getThemeContract(currentTheme),
      toggleTheme,
    }),
    [currentTheme, setTheme, toggleTheme],
  )

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>
}
