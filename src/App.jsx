import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RoutesIndex from './routes/Index'
import Sidebar from './components/Sidebar'
import { FavoritesProvider } from './context/FavoritesContext'

function App () {
  const [sidebarActive, setSidebarActive] = useState(false)

  function toggleSidebar () {
    setSidebarActive(!sidebarActive)
  }

  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar display={toggleSidebar} />
          <Sidebar active={sidebarActive} />
          <RoutesIndex />
        </BrowserRouter>
      </FavoritesProvider>
    </>
  )
}

export default App
