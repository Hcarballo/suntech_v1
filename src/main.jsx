import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InfoPaneles from './componentes/SeccionPaneles/InfoPaneles.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/info' element={<InfoPaneles />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)

