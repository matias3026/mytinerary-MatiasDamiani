// src/AsideMenu/MenuLateral.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaSuitcase, FaUser } from 'react-icons/fa';
import './AsideMenu.css';

const MenuLateral = () => {
  return (   
    <Nav defaultActiveKey="/home"  className="lateral" >
      <Nav.Link href="#link1" className='linklateral'>Link 1 
      
      </Nav.Link>
      <Nav.Link href="#link2" className='linklateral'>Link 2</Nav.Link>
      <Nav.Link href="#link3" className='linklateral'>Link 3</Nav.Link>
      <Nav.Link href="#link4" className='linklateral'>Link 4</Nav.Link>
      <Nav.Link className='linklateral'>
        <FaUser size={15}    />
        Sign in
      </Nav.Link>
    </Nav>
  );
};

export default MenuLateral;
