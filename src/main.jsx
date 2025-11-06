import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AttendanceTracker from './component/Attendency'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AttendanceTracker/>
  </StrictMode>,
)
