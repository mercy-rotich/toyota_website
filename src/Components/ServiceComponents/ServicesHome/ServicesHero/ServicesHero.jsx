import React, { useState, useEffect } from 'react';
import './ServicesHero.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import servicehero_image1 from '../../../../assets/servicehero-image1.jpg'
import servicehero_image2 from '../../../../assets/servicehero-image2.jpg'
import servicehero_image3 from '../../../../assets/servicehero-image3.jpg'
import servicehero_image4 from '../../../../assets/servicehero-image4.jpg'
import servicehero_image5 from '../../../../assets/servicehero-image5.jpg'
import servicehero_image6 from '../../../../assets/servicehero-image6.jpg'

const ServicesHero = () => {
  const backgroundImages = [
    servicehero_image1,
    servicehero_image2,
    servicehero_image3,
    servicehero_image4,
    servicehero_image5,
    servicehero_image6,
    
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
      className='services-hero'
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <button className="arrow-btn left-arrow" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      
      
      
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