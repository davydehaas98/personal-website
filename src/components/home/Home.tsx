import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Home.module.css'

const Home = (): React.JSX.Element => {
  return (
    <section id="home" className={appStyles.section}>
      <img
        className={styles.photo}
        src="/assets/images/me.jpg"
        alt="Davy de Haas"
        width={240}
        height={240}
      />
      <h1 className={styles.name}>Davy de Haas</h1>
      <p className={styles.role}>Java Software Engineer at iO, Campus Eindhoven.</p>
      <p className={styles.about}>
        Enthusiastic software engineer with a great interest in DevOps,
        backend architectures and networking infrastructures.
      </p>
    </section>
  )
}

export default Home
