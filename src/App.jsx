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
// ...importaciones necesarias...

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuLateral from './components/AsideMenu/MenuLateral';
import CallToAction from './components/calltoaction/CallToAction';
import CarouselComponent from './components/CarouselComponent/CarouselComponent'; 
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/hero/hero';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Hero />
        
        <div style={{ backgroundImage: 'url("src/assets/santorini.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div>
              <MenuLateral />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '55px' }}>
              <CallToAction />
              <CarouselComponent />
            </div>
          </div>
          
        </div>
        
        <Popup />
        <Footer />
      </div>
    </Router>
  );
};

export default App;




