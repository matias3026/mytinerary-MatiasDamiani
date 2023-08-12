import citiesData from '../CarouselComponent/cities.json'; // Ruta relativa al archivo cities.json
import React from 'react';



const SearchInput = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              aria-label="Buscar"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;