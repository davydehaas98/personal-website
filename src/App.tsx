import React from 'react'

import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Footer } from './components/footer/Footer'
import { Home } from './components/home/Home'
import { NavigationBar } from './components/navigation-bar/NavigationBar'
import { Projects } from './components/projects/Projects'

export const App = (): React.JSX.Element => {
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
