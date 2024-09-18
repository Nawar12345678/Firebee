import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="firebee logo" />
      </div>
      
      <div className="menu">
        <span>How It Works</span>
        <span>Signals</span>
        <span>Reviews</span>
        <span>Blog</span>
      </div>

      <div className="buy-now-button">
        <button>Buy Now</button>
      </div>

      <div className="user-icon">
        <img src={userIcon} alt="user" />
      </div>
    </div>
  );
};

export default Navbar;
