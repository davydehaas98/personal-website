import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from '../navigation-bar/NavigationBar'
import { StyledWrapper } from './App.styles'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <StyledWrapper>
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
      </StyledWrapper>
    </BrowserRouter>
  )
}

export default App
