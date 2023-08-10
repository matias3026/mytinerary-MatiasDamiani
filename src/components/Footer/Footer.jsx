import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import linksData from '../Header/links.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <Nav className="justify-content-center">
          {linksData.map(link => (
            <Nav.Link key={link.id} href={link.href} className="nav-link-item">
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      <div className="footer-info">
        <p>123 Street, City</p>
        <p>Phone: (011) 6225-3128</p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
