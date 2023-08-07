// src/components/Header/Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Importa el archivo de estilos personalizados Header.css
import logoImage from '@/assets/logonegro2.png'; // Utiliza @/ para acceder a la carpeta src


const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Navbar.Brand>
        <img className="log" src={logoImage} alt="logo de la app MyTinerary" /> 
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='linksvarios'>
        <Nav className="lin1234" > 
          <Nav.Link href="#link1" className="nav-link-item">Link 1</Nav.Link>
          <Nav.Link href="#link2" className="nav-link-item">Link 2</Nav.Link>
          <Nav.Link href="#link3" className="nav-link-item">Link 3</Nav.Link>
          <Nav.Link href="#link4" className="nav-link-item">Link 4</Nav.Link>
          
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>
            <FaUser size={10}  />
            Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


