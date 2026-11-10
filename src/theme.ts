import { useSyncExternalStore } from 'react'

// Light or dark: follows the system setting until the visitor picks one with the toggle. The choice is stored in
// this browser and set as data-theme on <html> (index.css), also by public/theme.js before the page is first drawn.
export type Theme = 'light' | 'dark'

const storageKey = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'
const listeners = new Set<() => void>()

const getStoredTheme = (): Theme | null => {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Storage blocked (private mode, disabled cookies): just follow the system.
    return null
  }
}

const getTheme = (): Theme => getStoredTheme() ?? (window.matchMedia?.(darkQuery).matches ? 'dark' : 'light')

const subscribe = (onChange: () => void): (() => void) => {
  listeners.add(onChange)
  const query = window.matchMedia?.(darkQuery)
  query?.addEventListener('change', onChange)
  return () => {
    listeners.delete(onChange)
    query?.removeEventListener('change', onChange)
  }
}

export const toggleTheme = (): void => {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  try {
    window.localStorage.setItem(storageKey, next)
  } catch {
    // Not stored: the choice still applies until the page is closed.
  }
  listeners.forEach((listener) => listener())
}

// The pre-rendered HTML is built with 'light'; React then switches to the real theme right after hydrating,
// which only changes the toggle button (the colours themselves come from CSS and are right from the start).
export const useTheme = (): Theme => useSyncExternalStore(subscribe, getTheme, () => 'light')
