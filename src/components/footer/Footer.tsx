import React from 'react'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>© {year} Davy de Haas</p>
    </footer>
  )
}

export default Footer
