import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Contact.module.css'

const links = [
  { name: 'GitHub', href: 'https://github.com/davydehaas98', icon: '/assets/images/contact/github.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/davydehaas98', icon: '/assets/images/contact/linkedin.svg' },
]

const Contact = (): React.JSX.Element => {
  return (
    <section id="contact" className={appStyles.section} aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p>Find me on GitHub or get in touch on LinkedIn.</p>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.name}>
            <a className={styles.link} href={link.href} target="_blank" rel="noopener noreferrer">
              <img className={styles.icon} src={link.icon} alt="" width={28} height={28} />
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
