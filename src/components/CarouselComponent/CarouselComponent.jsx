import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap'; // Agregamos Button de react-bootstrap
import citiesData from './cities.json';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Popular Mytineraries</h2>      
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
        interval={2000} // Cambia la velocidad de cambio automático (en milisegundos)
      >
        {citiesData.map((city, index) => (
          index % 4 === 0 && (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                {citiesData.slice(index, index + 4).map((city, subIndex) => (
                  <div key={subIndex} className="city-card">
                    <img
                      className="city-image"
                      src={city.image}
                      alt={city.name}
                    />
                    <p className="city-name">{city.name}</p>
                    <Button variant="primary">Travel to {city.name} !</Button> 
                  </div>
                ))}
              </div>
            </Carousel.Item>
          )
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
