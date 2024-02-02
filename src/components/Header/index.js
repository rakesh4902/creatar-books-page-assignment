import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <Link to="/" className="nav-link"> 
          <img
            className="website-logo"
            src="https://i.ibb.co/z5BnL41/Picture1.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">Home</Link> 
          </li>
          <li className="nav-menu-item">
            <Link to="/bookmarketplace" className="nav-link">Book Marketplace</Link> 
          </li>
          <li className="nav-menu-item">
            <Link to="/submission" className="nav-link">Submit Your Poem</Link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
