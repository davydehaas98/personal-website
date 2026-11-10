import React from 'react'
import { toggleTheme, useTheme } from '../../theme'
import { MoonIcon, SunIcon } from '../icons/Icons'
import styles from './NavigationBar.module.css'

const NavigationBar = (): React.JSX.Element => {
  const theme = useTheme()
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <a className={styles.brand} href="#home">Davy de Haas</a>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li><a className={styles.link} href="#experience">Experience</a></li>
            <li><a className={styles.link} href="#projects">Projects</a></li>
            <li><a className={styles.link} href="#contact">Contact</a></li>
          </ul>
          <button className={styles.toggle} type="button" onClick={toggleTheme} aria-label={label} title={label}>
            {theme === 'dark' ? <SunIcon className={styles.toggleIcon} /> : <MoonIcon className={styles.toggleIcon} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
