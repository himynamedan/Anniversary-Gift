// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  // Importing CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="nav-link">History</Link></li>
        <li><Link to="/messages" className="nav-link">Our Texts</Link></li>
        <li><Link to="/gifts" className="nav-link">Gifts</Link></li>
        <li><Link to="/photos" className="nav-link">Photos</Link></li>
        <li><Link to="/anniversary" className="nav-link">My Message</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
