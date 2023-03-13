import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="/movies" className={({isActive}) => isActive ? "activeLink" : "nonActiveLink"}>Filmy</NavLink>
        <NavLink to="/serials">Seriály</NavLink>
      </nav>
        
    </header>
  )
}

export default Navbar