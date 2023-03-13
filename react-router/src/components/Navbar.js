import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "activeLink" : "nonActiveLink"}>Domů</NavLink><br />
        <NavLink to="/movies">Filmy</NavLink><br />
        <NavLink to="/serials">Seriály</NavLink><br />
      </nav>
        
    </header>
  )
}

export default Navbar