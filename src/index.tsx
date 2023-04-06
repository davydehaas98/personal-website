import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'

const domNode = document.getElementById('root') as HTMLElement
createRoot(domNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
