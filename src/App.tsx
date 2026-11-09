import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavigationBar from './components/navigation-bar/NavigationBar'
import styles from './App.module.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <NavigationBar />
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
