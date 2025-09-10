import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Navigation from './components/nav.jsx'
import Sidebar from './components/sidebar.jsx'
import Dashboard from './components/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <div className='container'>
      <Sidebar />
      <Dashboard />
    </div>
  </StrictMode>,
)
