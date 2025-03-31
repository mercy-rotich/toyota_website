import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import { FaArrowDown } from "react-icons/fa6";
import hero_image1 from '../../../assets/hero-image1.jpg'
import hero_image2 from '../../../assets/hero-image2.jpg'
import hero_image3 from '../../../assets/hero-image3.jpg'
import hero_image4 from '../../../assets/hero-image4.jpg'
import hero_image5 from '../../../assets/hero-image5.jpg'
import hero_image6 from '../../../assets/hero-image6.jpg'
import hero_image7 from '../../../assets/hero-image7.jpg'

const ServicesHero = () => {
  const backgroundImages = [
    hero_image1,
    hero_image2,
    hero_image3,
    hero_image4,
    hero_image5,
    hero_image6,
    hero_image7,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  // automatic slideshow functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); 

    return () => clearInterval(slideInterval);
  }, []); 

  return (
    <div 
      className='hero'
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <button className="arrow-btn left-arrow" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      
      <div className="hero-content">
        SCROLL DOWN <FaArrowDown className='scroll-down-btn'/>
       
      </div>
      
      <button className="arrow-btn right-arrow" onClick={nextSlide}>
        <FaChevronRight />
      </button>
      
      <div className="dots-container">
        {backgroundImages.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesHero;