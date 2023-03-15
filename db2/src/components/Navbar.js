import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Domů</NavLink>
            <NavLink to="/movies">Filmy</NavLink>
            <NavLink to="/form">Přidat film</NavLink>
        </nav>
    </header>
  )
}

export default Navbar