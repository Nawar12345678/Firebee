import React from 'react';
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/Union.png';

const Footer = () => {
    return (
        <footer className="footer-box">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Activate</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Find Us On</h4>
                    <div className="social-icons">
                        <FaYoutube className="icon" />
                        <FaTwitter className="icon" />
                        <FaFacebookF className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterestP className="icon" />
                    </div>
                </div>
            </div>
            <div className="footer-img">
            <div className="footer-bottom">
                <img src={logo} alt="Firebee Logo" className="footer-logo" />
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</p>
                <p>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
