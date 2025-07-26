import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1: import BrowserRouter
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // wrap the entire App component with Browser Router to enable routing
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
