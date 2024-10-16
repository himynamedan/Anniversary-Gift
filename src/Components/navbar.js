// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  // Importing CSS for Navbar
import logo from '../Assets/ushdan.png';  // Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li><Link to="/" className="nav-link">History</Link></li>
        <li><Link to="/messages" className="nav-link">Our Texts</Link></li>
        <li><Link to="/gifts" className="nav-link">Gifts</Link></li>
        <li><Link to="/flower" className="nav-link">Flower</Link></li>
        <li><Link to="/photos" className="nav-link">Photos</Link></li>
        <li><Link to="/anniversary" className="nav-link">My Message</Link></li>
        <li style={{paddingLeft: "200px"}}>I love you :)</li>
      </ul>
    </nav>
  );
};

export default Navbar;
