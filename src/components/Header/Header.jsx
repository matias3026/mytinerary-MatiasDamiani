import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logoImage from '@/assets/MYTEN.png';
import { Link } from 'react-router-dom'; // Importa el componente Link
import linksData from './links.json'; // Importa el archivo JSON

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand>
        <img className="log" src={logoImage} alt="logo de la app MyTinerary" /> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='linksvarios'>
        <Nav className="lin1234">
          {linksData.map(link => (
            <Nav.Link
              key={link.id}
              as={Link} // Usa el componente Link en lugar de href
              to={link.href} // Usa la propiedad 'to' para definir la ruta
              className="nav-link-item"
            >
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className='login'>
            <FaUser size={25} className='icon' />
            <p className='sign'>Sign In</p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
