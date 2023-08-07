// src/components/Header/Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-between px-3">
      <Navbar.Brand>
        <FaSuitcase size={30} style={{ marginRight: '10px' }} />
        Viajes
      </Navbar.Brand>
      <Nav className="d-flex">
        <Nav.Link href="#link1" className="mr-3">Link 1</Nav.Link>
        <Nav.Link href="#link2" className="mr-3">Link 2</Nav.Link>
        <Nav.Link href="#link3" className="mr-3">Link 3</Nav.Link>
        <Nav.Link href="#link4">Link 4</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>
          <FaUser size={20} style={{ marginRight: '5px' }} />
          Ingresar
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;


