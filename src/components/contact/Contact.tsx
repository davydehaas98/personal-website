import React from 'react'
import { siGithub } from 'simple-icons'
import appStyles from '../../App.module.css'
import { BrandIcon } from '../icons/Icons'
import styles from './Contact.module.css'

// Simple Icons dropped LinkedIn's logo at LinkedIn's request, so its path is kept here.
const linkedIn = {
  title: 'LinkedIn',
  path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
}

const links = [
  { href: 'https://github.com/davydehaas98', icon: siGithub },
  { href: 'https://www.linkedin.com/in/davydehaas98', icon: linkedIn },
]

const Contact = (): React.JSX.Element => {
  return (
    <section id="contact" className={appStyles.section} aria-labelledby="contact-title">
      <h2 id="contact-title" className={appStyles.title}>Contact</h2>
      <p className={appStyles.lead}>You can find me on GitHub and LinkedIn.</p>
      <ul className={styles.links}>
        {links.map(({ href, icon }) => (
          <li key={icon.title}>
            <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
              <BrandIcon icon={icon} className={styles.icon} />
              {icon.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
