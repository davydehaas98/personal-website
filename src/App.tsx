import React from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import NavigationBar from './components/navigation-bar/NavigationBar'
import { StyledWrapper } from './App.styles'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'

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
