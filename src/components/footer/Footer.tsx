import React from 'react'
import styles from './Footer.module.css'

// Replaced with the build year by Vite (define in vite.config.ts), so pre-rendered HTML and the browser agree.
declare const BUILD_YEAR: number
const year = BUILD_YEAR

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>© {year} Davy de Haas</p>
    </footer>
  )
}

export default Footer
