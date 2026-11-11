import React from 'react'

import { toggleTheme, useTheme } from '../../theme'
import { MoonIcon, SunIcon } from '../icons/Icons'

export const ThemeToggle = (): React.JSX.Element => {
  const theme = useTheme()
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      className="grid size-8 cursor-pointer place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <SunIcon className="w-4.5" /> : <MoonIcon className="w-4.5" />}
    </button>
  )
}
