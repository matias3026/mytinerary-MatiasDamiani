import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cities.css';
import citiesData from '../CarouselComponent/cities.json'; // Ruta relativa al archivo cities.json

const Cities = () => {
  return (
    <body className="cities">
      <header>
        <Header />
      </header>
      <main className="cities2">
        <h2 className="h2">Cities</h2>
        <div className="city-cards">
          {citiesData.map((city, index) => (
            <div key={index} className="city-card">
              <h3>{city.name}</h3>
              <p>Capital: {city.capital}</p>
              <p>{city.description}</p>
              <img src={city.image} alt={`${city.name} Image`} /> {/* Renderizar la imagen */}
              <button>Discover the City</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Cities;

