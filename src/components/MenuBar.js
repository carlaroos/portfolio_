import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";
import logo from "../assets/Personal-logo.png";

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button
        className={`menu-button ${menuOpen ? "menu-open" : ""}`}
        onClick={handleClick}
      >
        <span className="menu-icon"></span>
      </button>
      <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
