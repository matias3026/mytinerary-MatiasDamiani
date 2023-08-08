// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'




// function App() {
  

//   return (
//     <div className='App'>
//       <Header
//         titulo='MyTinerary'
//       />
//     </div>
//   );
// }

// src/App.js
// src/App.js
// src/App.js
// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuLateral from './components/AsideMenu/MenuLateral';
import CallToAction from './components/calltoaction/CallToAction';
import Hero from './components/Hero/Hero'; // Asegúrate de tener la ruta correcta aquí
import Popup from './components/Popup/Popup';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ position: 'relative', backgroundImage: 'url("src/assets/santorini.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <CallToAction />
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 250px' }}>
              <MenuLateral />
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '0 0 auto', width: '220vh', marginLeft: '-206px', marginRight: '20px', paddingLeft: '20px' }}>
                <Hero /> {/* El componente Hero tomará el ancho completo incluyendo los márgenes negativos */}
              </div>
              <div style={{ flex: '1' }}>
                {/* Contenido principal aquí */}
              </div>
            </div>
          </div>
        </div>
        <Popup />
      </div>
      
    </Router>
  );
};

export default App;





