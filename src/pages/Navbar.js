import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css'

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">PrepTime</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/flashcards" className="navbar-link">Flashcards</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login/Register</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;