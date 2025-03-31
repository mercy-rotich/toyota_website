import React from 'react';
import './SecondHero.css';
import secondhero_image from '../../../assets/secondhero-image.jpg'

const SecondHero = () => {
    return (
      <div className="hero-container">
        <img src={secondhero_image} alt="Toyota hero" className="hero-image" />
        <div className="overlay"></div>
        <div className="hero-content">
          
         
        </div>
      </div>
    );
  };

export default SecondHero;