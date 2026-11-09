import React from 'react'
import styles from './NavigationBar.module.css'

const NavigationBar = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <a className={styles.brand} href="#home">Davy de Haas</a>
        <ul className={styles.links}>
          <li><a className={styles.link} href="#projects">Projects</a></li>
          <li><a className={styles.link} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar
