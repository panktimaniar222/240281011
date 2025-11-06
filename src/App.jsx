import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AttendanceTracker from './component/Attendency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <AttendanceTracker/>
    </>
  )
}

export default App
