import { useSyncExternalStore } from 'react'

// Light or dark: dark until the visitor picks one with the toggle. The choice is stored in this browser and set as
// data-theme on <html> (index.css), also by public/theme.js before the page is first drawn.
export type Theme = 'light' | 'dark'

const storageKey = 'theme'
const listeners = new Set<() => void>()

const getStoredTheme = (): Theme | null => {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Storage blocked (private mode, disabled cookies): stay dark.
    return null
  }
}

const getTheme = (): Theme => getStoredTheme() ?? 'dark'

const subscribe = (onChange: () => void): (() => void) => {
  listeners.add(onChange)
  return () => {
    listeners.delete(onChange)
  }
}

export const toggleTheme = (): void => {
  const next: Theme = getTheme() === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  // The browser's toolbar colour on phones (--color-bg in index.css; public/theme.js does the same on load).
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#ffffff' : '#0a0a0b')
  try {
    window.localStorage.setItem(storageKey, next)
  } catch {
    // Not stored: the choice still applies until the page is closed.
  }
  listeners.forEach((listener) => listener())
}

// The pre-rendered HTML is built with 'dark'; React then switches to a saved light choice right after hydrating,
// which only changes the toggle button (the colours themselves come from CSS and are right from the start).
export const useTheme = (): Theme => useSyncExternalStore(subscribe, getTheme, () => 'dark')
