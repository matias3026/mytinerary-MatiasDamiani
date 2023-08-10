import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import MenuLateral from '../AsideMenu/MenuLateral';
import CallToAction from '../calltoaction/CallToAction';
import CarouselComponent from '../CarouselComponent/CarouselComponent'; 
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import Hero from '../hero/hero';
import './HomeContent.css';

const HomeContent = () => {
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <div className='boxdiv1'>
      <Header />
      <Hero />       

      <audio ref={audioRef} controls autoPlay className='sound'>
        <source src="src/assets/AzulCristianCastro.mp3" type="audio/mpeg" />
        
      </audio>
      <Button onClick={toggleAudio} className="animate__animated animate__bounce buttoNCastro">      
        {audioPlaying ? 'Stop Music' : 'Reload Music'}
      </Button>   
        
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
