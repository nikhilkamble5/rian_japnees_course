import React from 'react'
import { NavLink } from 'react-router-dom'
import  './Navbar.css'
const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light fw-bold">
        <NavLink to="" className='navbar-brand'><h1 className='text-warning'> Rian</h1></NavLink>

        <ul className='navbar-nav  m-auto '>
            <li className='nav-item mx-4'><NavLink to="/" className='nav-link '>Home</NavLink></li>
            <li className='nav-item mx-4'><NavLink to="/about" className='nav-link'>About</NavLink></li>
            <li className='nav-item mx-4'><NavLink to="/contact/rushi" className='nav-link'>Contact</NavLink></li>
            <li className='nav-item mx-4'><NavLink to="/service" className='nav-link'>Service</NavLink></li>
            {/* <li className='nav-item mx-4'><NavLink to="/" className='nav-link'>Faq</NavLink></li> */}

        </ul>
    </nav>

    </>
  )
}

export default Navbar