// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';  // Importing CSS for Navbar
import logo from '../Assets/ushdan.png';  // Import the logo

const Navbar = () => {
  const location = useLocation(); // Get the current route location

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>History</Link></li>
        <li><Link to="/messages" className={`nav-link ${isActive('/messages') ? 'active' : ''}`}>Our Texts</Link></li>
        <li><Link to="/gifts" className={`nav-link ${isActive('/gifts') ? 'active' : ''}`}>Gifts</Link></li>
        <li><Link to="/photos" className={`nav-link ${isActive('/photos') ? 'active' : ''}`}>Photos</Link></li>
        <li><Link to="/anniversary" className={`nav-link ${isActive('/anniversary') ? 'active' : ''}`}>My Message</Link></li>
        <li style={{ paddingLeft: '200px' }}>I love you :)</li>
      </ul>
    </nav>
  );
};

export default Navbar;
