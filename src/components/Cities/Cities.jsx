import React from 'react';
import Header from '../Header/Header'; // Ruta relativa a Header
import './Cities.css';
const Cities = () => {
  return (
    <div>
      <Header /> {/* Incluye el Header en Cities */}
      <h2 className='h2'>Cities </h2>
      <p className='p'>Aca habria una pagina de Ciudades ... <span>SI TUVIESE UNA !</span> </p>
    
      
    </div>
  );
};

export default Cities;
