import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar ({ active }) {
  return (
    <div className={`bg-warning sidebar ${active ? 'active' : ''}`}>
      <div className='sidebar-header'>
        <h3>E-Motion a la Carte</h3>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-item'>
          <Link to='/' className='sidebar-link'>Home</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/series' className='sidebar-link'>Series</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/peliculas' className='sidebar-link'>Peliculas</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/milista' className='sidebar-link'>Mi Lista</Link>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar
