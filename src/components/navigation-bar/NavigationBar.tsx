import React from 'react'
import { NavLink } from 'react-router'
import styles from './NavigationBar.module.css'

const NavigationBar = (props: React.ComponentProps<'nav'>): React.JSX.Element => {
  return (
    <nav {...props} className={styles.nav}>
      <NavLink className={styles.navLink} to="/">Davy de Haas</NavLink>
      <NavLink className={styles.navLink} to="/about">About</NavLink>
      <NavLink className={styles.navLink} to="/projects">Projects</NavLink>
      <NavLink className={styles.navLink} to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavigationBar
