import { useEffect, useState } from 'react'

// Light or dark: follows the system setting until the visitor picks one with the toggle,
// then that choice is stored in this browser and set as data-theme on <html> (see index.css).
export type Theme = 'light' | 'dark'

const storageKey = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'

export const getStoredTheme = (): Theme | null => {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Storage blocked (private mode, disabled cookies): just follow the system.
    return null
  }
}

const getSystemTheme = (): Theme => (window.matchMedia?.(darkQuery).matches ? 'dark' : 'light')

// Called before React renders, so a stored choice applies as early as the CSP allows (no inline script).
export const applyStoredTheme = (): void => {
  const theme = getStoredTheme()
  if (theme) {
    document.documentElement.dataset.theme = theme
  }
}

export const useTheme = (): [Theme, () => void] => {
  const [stored, setStored] = useState<Theme | null>(getStoredTheme)
  const [system, setSystem] = useState<Theme>(getSystemTheme)

  // Keep the button's icon right when the system setting changes while the page is open.
  useEffect(() => {
    const query = window.matchMedia?.(darkQuery)
    if (!query) {
      return undefined
    }
    const onChange = (event: MediaQueryListEvent): void => setSystem(event.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const theme = stored ?? system

  const toggle = (): void => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      window.localStorage.setItem(storageKey, next)
    } catch {
      // Not stored: the choice still applies until the page is closed.
    }
    setStored(next)
  }

  return [theme, toggle]
}
