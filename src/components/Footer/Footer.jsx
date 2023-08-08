import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Asegúrate de importar los estilos del Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <Nav className="justify-content-center">
          <Nav.Link href="#link1" className="nav-link-item">
            Link 1
          </Nav.Link>
          <Nav.Link href="#link2" className="nav-link-item">
            Link 2
          </Nav.Link>
          <Nav.Link href="#link3" className="nav-link-item">
            Link 3
          </Nav.Link>
          <Nav.Link href="#link4" className="nav-link-item">
            Link 4
          </Nav.Link>
        </Nav>
      </div>
      <div className="footer-info">
        <p>123 Street, City</p>
        <p>Phone: (123) 456-7890</p>
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

