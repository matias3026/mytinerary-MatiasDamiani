import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import './AsideMenu.css';


const MenuLateral = () => {
  return (
    <Nav className="flex-column lateral">
      <Nav.Link href="#link1" className="linklateral">
        <FaSuitcase size={15} />
        Link 1
      </Nav.Link>
      <Nav.Link href="#link2" className="linklateral">
        <FaSuitcase size={15} />
        Link 2
      </Nav.Link>
      <Nav.Link href="#link3" className="linklateral">
        <FaSuitcase size={15} />
        Link 3
      </Nav.Link>
      <Nav.Link href="#link4" className="linklateral">
        <FaSuitcase size={15} />
        Link 4
      </Nav.Link>
      <Nav.Link className="linklateral">
        <FaUser size={15} />
        Sign in
      </Nav.Link>
    </Nav>
  );
};

export default MenuLateral;

