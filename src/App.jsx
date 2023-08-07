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

import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import MenuLateral from './components/AsideMenu/MenuLateral';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 250px' }}>
          <MenuLateral /> {/* Aquí colocamos el menú lateral */}
        </div>
        <div style={{ flex: '1' }}>
          {/* Contenido principal de tu aplicación */}
          <h1>Contenido de la aplicación</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
