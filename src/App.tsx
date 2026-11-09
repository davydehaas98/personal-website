import React, { useEffect } from 'react'
import NavigationBar from './components/navigation-bar/NavigationBar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = (): React.JSX.Element => {
  // The sections only exist after React renders, so the browser's own jump to #section on load misses them.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) {
      document.getElementById(id)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
