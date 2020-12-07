import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import NavigationBar from './components/navigation-bar/NavigationBar'
import './App.css'
import { StylesProvider } from '@material-ui/core/styles'

const App = (): JSX.Element => {
    return (
        <StylesProvider injectFirst>
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App
