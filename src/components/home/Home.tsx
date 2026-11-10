import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Home.module.css'

const Home = (): React.JSX.Element => {
  return (
    <section id="home" className={`${appStyles.section} ${styles.hero}`}>
      <img
        className={styles.photo}
        src="/assets/images/me.jpg"
        alt="Davy de Haas"
        width={168}
        height={168}
      />
      <div>
        <h1 className={styles.name}>Davy de Haas</h1>
        <p className={styles.role}>Software Engineer at iO, Campus Eindhoven.</p>
        <p className={styles.about}>
          Enthusiastic software engineer with a great interest in DevOps,
          backend architectures and networking infrastructures.
        </p>
      </div>
    </section>
  )
}

export default Home
