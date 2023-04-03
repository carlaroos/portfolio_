import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import logo from "../assets/Personal-logo.png";
import './NavBar.css'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="logo">
            <a href='/'><img src={logo} alt="Logo" className="logo" /></a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
                <li><a href="#projects">Projekt</a></li>
                <li><a href="#about" className='om-mig'>Om mig</a></li>
                <li><a href="#experience">Erfarenhet</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar