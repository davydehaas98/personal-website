import React from 'react'
import appStyles from '../../App.module.css'
import styles from './Home.module.css'

const Home = (): React.JSX.Element => {
  return (
    <div className={appStyles.container}>
      <div className={appStyles.text}>
        <h1>Davy de Haas</h1>
        <p>Java Software Engineer at iO, Campus Eindhoven.</p>
      </div>
      <img className={styles.image} src="./assets/images/me.jpg" alt="me" />
      <div className={styles.division}>
        <h1>Welcome!</h1>
        <p>This website is still under construction.</p>
      </div>
    </div>
  )
}

export default Home
