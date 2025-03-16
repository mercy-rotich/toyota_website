import React, { useState, useEffect, useRef } from 'react';
import './SecondNavbar.css';

const SecondNavbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const secondNavbarRef = useRef(null);
  const originalPositionRef = useRef(null);
  
  useEffect(() => {
    // Store the original position of the navbar when component mounts
    if (secondNavbarRef.current) {
      originalPositionRef.current = secondNavbarRef.current.getBoundingClientRect().top + window.scrollY;
      setPlaceholderHeight(secondNavbarRef.current.offsetHeight);
    }
    
    const mainNavbarHeight = 57.5; // Height of the main navbar
    
    // Function to determine if navbar should be fixed
    const handleScroll = () => {
      if (originalPositionRef.current === null || !secondNavbarRef.current) return;
      
      // The key is to calculate when the second navbar would touch the bottom of the main navbar
      const threshold = originalPositionRef.current - mainNavbarHeight;
      
      if (window.scrollY >= threshold) {
        if (!isFixed) setIsFixed(true);
      } else {
        if (isFixed) setIsFixed(false);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (secondNavbarRef.current) {
        // Update placeholder height on resize
        setPlaceholderHeight(secondNavbarRef.current.offsetHeight);
        
        // Only update original position if not fixed
        if (!isFixed) {
          originalPositionRef.current = secondNavbarRef.current.getBoundingClientRect().top + window.scrollY;
        }
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isFixed]);
  
  const navLinks = [
    { icon: "dealer-icon", text: "FIND A DEALER", link: "/find-dealer" },
    { icon: "test-drive-icon", text: "TEST DRIVE", link: "/test-drive" },
    { icon: "price-list-icon", text: "PRICE LIST", link: "/price-list" },
    { icon: "ebook-icon", text: "eBOOK", link: "/ebook" },
    { icon: "brochure-icon", text: "BROCHURE", link: "/brochure" },
    { icon: "exchange-icon", text: "EXCHANGE CAR", link: "/exchange-car" }
  ];

  return (
    <>
      {/* This div serves as a placeholder when the navbar becomes fixed */}
      {isFixed && <div style={{ height: `${placeholderHeight}px` }}></div>}
      
      <div 
        ref={secondNavbarRef}
        className={`second-navbar-container ${isFixed ? 'fixed' : ''}`}
      >
        <div className="second-navbar">
          {navLinks.map((item, index) => (
            <a key={index} href={item.link} className="second-nav-item">
              <div className={`second-nav-icon ${item.icon}`}>
                {/* Keep your existing SVG code here */}
              </div>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;