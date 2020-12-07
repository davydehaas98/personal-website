import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavigationBar from '../navigation-bar/NavigationBar'
import { StyledAppContainer } from './App.styles'
import { StylesProvider } from '@material-ui/core/styles'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'

const App = (): JSX.Element => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <StyledAppContainer>
          <NavigationBar />

          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </main>
        </StyledAppContainer>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
