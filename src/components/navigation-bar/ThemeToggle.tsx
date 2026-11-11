import React from 'react'
import { flushSync } from 'react-dom'

import { toggleTheme, useTheme } from '../../theme'
import { MoonIcon, SunIcon } from '../icons/Icons'

// Without View Transitions, or with reduced motion, the theme just switches. The circle itself is in index.css.
let current: ViewTransition | undefined

const switchTheme = (button: HTMLElement): void => {
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    toggleTheme()
    return
  }
  const { left, top, width, height } = button.getBoundingClientRect()
  const x = left + width / 2
  const y = top + height / 2
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
  const root = document.documentElement
  // Set through the CSSOM, which the CSP allows (a style attribute in the HTML would not be).
  root.style.setProperty('--theme-x', `${x}px`)
  root.style.setProperty('--theme-y', `${y}px`)
  root.style.setProperty('--theme-radius', `${radius}px`)
  root.dataset.themeSwitching = ''
  // flushSync, so the button's new icon is already in the snapshot of the new theme.
  const transition = document.startViewTransition(() => flushSync(toggleTheme))
  current = transition
  const cleanUp = (): void => {
    // A quick second click starts a new transition before this one ends; leave its settings alone.
    if (current !== transition) {
      return
    }
    delete root.dataset.themeSwitching
    root.style.removeProperty('--theme-x')
    root.style.removeProperty('--theme-y')
    root.style.removeProperty('--theme-radius')
  }
  transition.finished.then(cleanUp, cleanUp)
}

export const ThemeToggle = (): React.JSX.Element => {
  const theme = useTheme()
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      className="grid size-8 cursor-pointer place-items-center rounded-full border border-line text-ink/80 transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      type="button"
      onClick={(event) => switchTheme(event.currentTarget)}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <SunIcon className="w-4.5" /> : <MoonIcon className="w-4.5" />}
    </button>
  )
}
