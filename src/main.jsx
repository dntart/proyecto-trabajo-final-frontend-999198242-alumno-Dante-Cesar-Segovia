import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login'
import { RouterApp } from './router/RouterApp'
import "./styles/index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterApp/>
  </StrictMode>,
)
