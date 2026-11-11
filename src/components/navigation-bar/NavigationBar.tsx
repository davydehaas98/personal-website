import React from 'react'

import { ThemeToggle } from './ThemeToggle'

const sections = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const NavigationBar = (): React.JSX.Element => (
  <header className="sticky top-0 z-10 border-b-2 border-accent bg-page">
    <nav
      className="mx-auto flex min-h-15 max-w-page sm:min-h-16 items-center justify-between gap-2 px-4 xs:px-5"
      aria-label="Main"
    >
      <a className="font-bold whitespace-nowrap sm:text-[1.25rem]" href="#home">
        Davy de Haas
      </a>
      <div className="flex items-center gap-2.5 xs:gap-3">
        <ul className="flex gap-2 xs:gap-5 sm:gap-1">
          {sections.map(({ href, label }) => (
            <li key={href}>
              <a
                className="rounded-full py-1 text-[0.9rem] text-ink/80 transition-colors hover:bg-accent/15 hover:text-brand xs:text-base sm:px-3 sm:text-lg"
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
