import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa Link
import './call.css';

const CallToAction = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.div className="call-to-action" style={animation}>
      <FaGlobe  className="cta-icon earth" />
      <h2>Find your perfect trip</h2>
      <p>Designed by insiders who know and love their cities!</p>
      <div className="button1">
        <Link to="/cities"> 
          <Button className="animate__animated animate__bounce blue">Explore Cities</Button>
        </Link>
        <FaMapMarkerAlt  className="cta-icon earth1" />
      </div>
    </animated.div>
  );
};

export default CallToAction;
