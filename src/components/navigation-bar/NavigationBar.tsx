import React from 'react'

import { ThemeToggle } from './ThemeToggle'

const sections = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

// Name, the section links and the theme button on one line, also on a phone.
export const NavigationBar = (): React.JSX.Element => (
  <header className="sticky top-0 z-10 border-b-2 border-accent bg-page">
    <nav className="mx-auto flex min-h-15 max-w-page items-center justify-between gap-2 px-4 xs:px-5" aria-label="Main">
      <a className="font-bold whitespace-nowrap" href="#home">
        Davy de Haas
      </a>
      <div className="flex items-center gap-2.5 xs:gap-3">
        <ul className="flex gap-2.5 xs:gap-5">
          {sections.map(({ href, label }) => (
            <li key={href}>
              <a
                className="text-[0.9rem] text-muted underline-offset-4 hover:text-brand hover:underline xs:text-base"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  </header>
)
