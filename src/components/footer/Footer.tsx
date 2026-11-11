import React from 'react'

// Replaced with the build year by Vite (define in vite.config.ts), so pre-rendered HTML and the browser agree.
declare const BUILD_YEAR: number
const year = BUILD_YEAR

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="mx-auto max-w-page border-t border-line px-5 pt-6 pb-10 text-center text-sm text-muted">
      <p>© {year} Davy de Haas</p>
    </footer>
  )
}
