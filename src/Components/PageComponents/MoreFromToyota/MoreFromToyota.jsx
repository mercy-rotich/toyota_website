import React, { useRef, useState, useEffect } from 'react';
import './MoreFromToyota.css';
import awesome_image1 from '../../../assets/awesome-image1.jpg'
import awesome_image2 from '../../../assets/awesome-image2.jpg'
import awesome_image3 from '../../../assets/awesome-image3.jpg'
import awesome_image4 from '../../../assets/awesome-image4.jpg'
import awesome_image5 from '../../../assets/awesome-image5.jpg'
import awesome_image6 from '../../../assets/awesome-image6.jpg'
import awesome_image7 from '../../../assets/awesome-image7.jpg'
import awesome_image8 from '../../../assets/awesome-image8.jpg'

const MoreFromToyota = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [currentItems, setCurrentItems] = useState([0, 1, 2, 3]); // Indices of currently visible items

  const featureItems = [
    {
      id: 1,
      image: awesome_image1,
      
    },
    {
      id: 2,
      image: awesome_image2,
     
    },
    {
      id: 3,
      image: awesome_image3,
      
    },
    {
      id: 4,
      image: awesome_image4,
      
    },
    {
      id: 5,
      image: awesome_image5,
      
    },
    {
      id: 6,
      image: awesome_image6,
     
    },
    {
      id: 7,
      image: awesome_image7,
      
    },
    {
      id: 8,
      image: awesome_image8,
    
    }
  ];

  const totalItems = featureItems.length;
  const itemWidth = 25; // Each item takes 25% of the container width

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [translateX]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Calculate the previous index with wrapping
    const prevIndex = (currentItems[0] - 1 + totalItems) % totalItems;
    
    // Shift each item's index by one to the right
    const newCurrentItems = [prevIndex, ...currentItems.slice(0, 3)];
    
    // Update the current items state
    setCurrentItems(newCurrentItems);
    
    // Start with a negative translateX value to position the new item off-screen to the left
    setTranslateX(-itemWidth);
    
    // After a brief delay, animate the slider to the right
    setTimeout(() => {
      setTranslateX(0);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 50);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Calculate the next index with wrapping
    const nextIndex = (currentItems[3] + 1) % totalItems;
    
    // Shift each item's index by one to the left
    const newCurrentItems = [...currentItems.slice(1), nextIndex];
    
    // Update the current items state
    setCurrentItems(newCurrentItems);
    
    
    setTranslateX(itemWidth);
    
    
    setTimeout(() => {
      setTranslateX(0);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 50);
  };

  return (
    <div className="whats-awesome-container">
      <h2 className="section-title">More from Toyota</h2>
      
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={handlePrev}
            aria-label="Previous items"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-items-container">
            <div className="carousel-items" ref={sliderRef}>
              {currentItems.map((itemIndex) => {
                const item = featureItems[itemIndex];
                return (
                  <div key={item.id} className="carousel-item">
                    <div className="carousel-image-container">
                      <img src={item.image} alt={item.title} className="carousel-image" />
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
          
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={handleNext}
            aria-label="Next items"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreFromToyota;