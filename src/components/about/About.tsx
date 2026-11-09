import React from 'react'
import appStyles from '../../App.module.css'
import styles from './About.module.css'

const About = (): React.JSX.Element => {
  return (
    <div className={appStyles.container}>
      <div className={appStyles.text}>
        <h1>About</h1>
        <p>
          Enthusiastic software engineer with a great interest in DevOps,
          backend architectures and networking infrastructures.
        </p>
      </div>
      <img className={styles.image} src="./assets/images/vr.jpg" alt="" />
    </div>
  )
}

export default About
