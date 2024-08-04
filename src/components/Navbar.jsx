import React, { useState } from 'react';
import '../styles/Navbar.css'; // Make sure to create and link your CSS file

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Vehicle Configurator
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Three lines icon */}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};
