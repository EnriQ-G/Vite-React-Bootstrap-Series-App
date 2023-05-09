import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = ({ display }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between align-items-center px-5 align-items-center'>
      <ul className='navbar-nav d-flex align-items-center ml-auto'>
        <li className='nav-item mr-3'>
          <button className='navbar-hamburger' type='button' onClick={display}>
            <FaBars />
          </button>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/'>E-Motion a la Carte</NavLink>
        </li>
      </ul>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/series'>Series</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/peliculas'>Peliculas</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/historial'>Historial</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/milista'>Mi Lista</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
