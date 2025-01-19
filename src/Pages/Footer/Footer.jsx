import React from 'react';

import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-title">FashionDesk</h3>
          <p className="footer-description">
            Creating beautiful digital experiences that inspire and connect people.
          </p>
          <div className="social-media-icons">
            <a href="#" className="social-icon">
            <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
            <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" className="social-icon">
            <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <Link to="/">
              <li>Shop</li>
            </Link>
            <Link to="/mens">
              <li>Male Page</li>
            </Link>
            <Link to="/womens">
              <li>Female Page</li>
            </Link>
            <Link to="/child">
              <li>Child Page</li>
            </Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p>Email: kanakanelapati00@gmail.com</p>
          <p>Phone: +6304650601</p>
          <p>Address: Kandukur, AP</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FashionDesk. All rights reserved.</p>
        <div className="footer-credit">
          <span className='dark'>Made with</span>
          --
          <span className='lite'>by Your Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
