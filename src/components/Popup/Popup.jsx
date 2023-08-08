import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaGlobe, FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import './Popup.css';

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShow(true);
    }, 5000); // Mostrar el popup después de 5 segundos

    const recurringTimer = setInterval(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000); // Ocultar el popup después de 3 segundos
    }, 30000); // Mostrar el popup cada 30 segundos

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringTimer);
    };
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Body className="popup">
        <FaPlane className="plane-icon" size={40} />
        <div className="popup-content">
          <h2>Find your perfect trip</h2>
          <p>Designed by insiders who know and love their cities!</p>
          <Button className="explore-button">Explore Cities</Button>
        </div>
        <FaMapMarkerAlt className="map-icon" size={30} />
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
