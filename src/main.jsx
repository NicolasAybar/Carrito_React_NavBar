import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { MenuPrincipal } from './components/menu/MenuPrincipal.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MenuPrincipal />
      
    </BrowserRouter>

  </StrictMode>,
)
