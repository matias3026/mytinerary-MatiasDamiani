import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import './call.css';

const CallToAction = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <animated.div className="call-to-action" style={animation}>
      <FaGlobe size={60} className="cta-icon earth" />
      <h2>Find your perfect trip</h2>
      <p>Designed by insiders who know and love their cities!</p>
      <div className="button1">
        <Button className="animate__animated animate__bounce">Explore Cities</Button>
        <FaMapMarkerAlt size={40} className="cta-icon earth1" />
      </div>
    </animated.div>
  );
};

export default CallToAction;
