import React from 'react'
import NavigationBar from './components/navigation-bar/NavigationBar'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = (): React.JSX.Element => {
  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
