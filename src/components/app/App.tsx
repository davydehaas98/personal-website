import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>

        <Footer />
      </StyledWrapper>
    </BrowserRouter>
  )
}

export default App
