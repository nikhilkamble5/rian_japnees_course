// src/Components/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';  // Import the CSS file for custom styles

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We provide high-quality language courses to help you achieve your goals. Our mission is to offer comprehensive and engaging learning experiences.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-light">Home</NavLink></li>
              <li><NavLink to="/about" className="text-light">About</NavLink></li>
              <li><NavLink to="/service" className="text-light">Services</NavLink></li>
              <li><NavLink to="/contact" className="text-light">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: sales@rian.io</p>
            <p>Phone: +91 89561 26959</p>
            <div>
              <a href="https://www.facebook.com/RianTranslations/" className="text-light me-2" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-2" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/rikaian_technology/" className="text-light me-2" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/rian-io/" className="text-light" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">© {new Date().getFullYear()} Rian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
