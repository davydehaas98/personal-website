import React from 'react'
import { toggleTheme, useTheme } from '../../theme'
import { MoonIcon, SunIcon } from '../icons/Icons'

const link = 'text-[0.9rem] text-muted underline-offset-4 hover:text-brand hover:underline xs:text-base'

// Name, three links and the theme button on one line, also on a phone.
const NavigationBar = (): React.JSX.Element => {
  const theme = useTheme()
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <header className="sticky top-0 z-10 border-b-2 border-accent bg-page">
      <nav className="mx-auto flex min-h-15 max-w-page items-center justify-between gap-2 px-4 xs:px-5" aria-label="Main">
        <a className="font-bold whitespace-nowrap" href="#home">Davy de Haas</a>
        <div className="flex items-center gap-2.5 xs:gap-3">
          <ul className="flex gap-2.5 xs:gap-5">
            <li><a className={link} href="#experience">Experience</a></li>
            <li><a className={link} href="#projects">Projects</a></li>
            <li><a className={link} href="#contact">Contact</a></li>
          </ul>
          <button
            className="grid size-8 cursor-pointer place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            type="button"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
          >
            {theme === 'dark' ? <SunIcon className="w-4.5" /> : <MoonIcon className="w-4.5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
