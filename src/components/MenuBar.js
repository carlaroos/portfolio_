import React from "react";
import { Link } from "react-router-dom";
import './MenuBar.css'
import logo from '../assets/Personal-logo.png';

function MenuBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/about">Om mig</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default MenuBar;