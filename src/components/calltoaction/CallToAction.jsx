// src/components/CallToAction.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import './call.css';

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2>Find your perfect trip</h2>
      <p>Designed by insiders who know and love their cities!</p>
      <Button variant="primary" size="lg">Explore Cities</Button>
    </div>
  );
};

export default CallToAction;

