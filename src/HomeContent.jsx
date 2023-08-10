import React from 'react';
import Header from './components/Header/Header';
import MenuLateral from './components/AsideMenu/MenuLateral';
import CallToAction from './components/calltoaction/CallToAction';

import CarouselComponent from './components/CarouselComponent/CarouselComponent'; 
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';
import Hero from './components/hero/hero';
import './HomeContent.css'

const HomeContent = () => {
  return (
    <div className='boxdiv1'>
      <Header />
      <Hero />       
        
      <div className='boxdiv2'>
        <div className='side'>
          <MenuLateral />
        </div>
          
        <div className='callto'> 
          <div className='calltoAction'>
            <CallToAction />              
          </div>  
          <CarouselComponent />                        
        </div>          
      </div>
        
      <Popup />
      <Footer />
    </div>
  );
};

export default HomeContent;
