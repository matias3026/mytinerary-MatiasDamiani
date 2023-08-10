import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import './AsideMenu.css';
import linksData from '../Header/links.json';

const renderLinks = () => {
  return linksData.map(link => (
    <Nav.Link key={link.id} href={link.href} className="linklateral">
      <FaSuitcase size={15} />
      {link.text}
    </Nav.Link>
  ));
};

const MenuLateral = () => {
  return (
    <Nav className="flex-column lateral">
      {renderLinks()}
      <Nav.Link className="linklateral">
        <FaUser size={15} />
        Sign in
      </Nav.Link>
    </Nav>
  );
};

export default MenuLateral;
