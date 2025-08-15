import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Team from './pages/team'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Team/>
  </StrictMode>,
)
