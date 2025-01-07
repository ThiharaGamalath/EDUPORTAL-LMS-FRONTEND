import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/im8.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header" aria-label="Website Header">
      <div className="logo" aria-label="Website Logo">
      <img src={logo} alt="EDUPORTAL Logo" style={{ width: '175px', height: 'auto' }} />

        
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Main Navigation">
        <ul>
          <li><a href="/home" aria-label="Home">Home</a></li>
          <li><a href="/about" aria-label="About Us">About</a></li>
          <li><a href="/login" aria-label="Login">Login</a></li>
          <li><a href="/gallery" aria-label="Gallery">Gallery</a></li>
          <li><a href="/policies" aria-label="Policies">Policies</a></li>
          <li><a href="/vacancies" aria-label="Vacancies">Vacancies</a></li>
          <li><a href="/contact" aria-label="Contact Us">Contact</a></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default Header;
