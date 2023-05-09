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
          <Link to='/movies' className='sidebar-link'>Movies</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/tvshows' className='sidebar-link'>TV Shows</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/actors' className='sidebar-link'>Actors</Link>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar
