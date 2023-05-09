import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RoutesIndex from './routes/Index'
import Sidebar from './components/Sidebar'

function App () {
  const [sidebarActive, setSidebarActive] = useState(false)

  function toggleSidebar () {
    setSidebarActive(!sidebarActive)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar display={toggleSidebar} />
        <Sidebar active={sidebarActive} />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
