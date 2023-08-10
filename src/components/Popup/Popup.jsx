import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaGlobe, FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa Link
import './Popup.css';

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShow(true);
    }, 5000);

    const recurringTimer = setInterval(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 30000);

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
          <Link to="/cities"> {/* Usar Link en lugar de Button */}
            <Button className="explore-button">Explore Cities</Button>
          </Link>
        </div>
        <FaMapMarkerAlt className="map-icon" size={30} />
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
