import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Contact.module.css'
import contacts from './contact.json'

const Contact = (): React.JSX.Element => {
  const content = (
    contacts.map((contact, index) => (
      <a className={styles.anchor} key={index} title={contact.title} aria-label={contact.title} href={contact.href} target="_blank" rel="noopener noreferrer">
        <img className={styles.image} src={contact.src ?? './assets/images/placeholder.svg'} alt="" />
      </a>
    ))
  )

  return (
    <div className={appStyles.container}>
      <div className={appStyles.text}>
        <h1>Contact</h1>
        <p>You can contact me via one of the buttons below!</p>
      </div>
      <div className={styles.imagesContainer}>
        {content}
      </div>
    </div>
  )
}

export default Contact
