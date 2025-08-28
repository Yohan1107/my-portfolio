import React from 'react'
import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">My portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      <ThemeToggle/>
    </div>
  )
}

export default Navbar