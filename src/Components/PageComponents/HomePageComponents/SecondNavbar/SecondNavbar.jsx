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
    { 
      id: "dealer",
      text: "FIND A DEALER", 
      link: "/find-dealer",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#EB0A1E"/>
        </svg>
      )
    },
    { 
      id: "test-drive",
      text: "TEST DRIVE", 
      link: "/test-drive",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="#EB0A1E"/>
        </svg>
      )
    },
    { 
      id: "price-list",
      text: "PRICE LIST", 
      link: "/price-list",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z" fill="#EB0A1E"/>
        </svg>
      )
    },
    { 
      id: "ebook",
      text: "eBOOK", 
      link: "/ebook",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM17 17H11V15H17V17ZM17 13H11V11H17V13ZM17 9H11V7H17V9Z" fill="#EB0A1E"/>
        </svg>
      )
    },
    { 
      id: "brochure",
      text: "BROCHURE", 
      link: "/brochure",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V12H7V10ZM11 10H17V12H11V10ZM7 7H9V9H7V7ZM11 7H17V9H11V7ZM7 13H9V15H7V13ZM11 13H17V15H11V13ZM7 16H9V18H7V16ZM11 16H17V18H11V16Z" fill="#EB0A1E"/>
        </svg>
      )
    },
    { 
      id: "exchange",
      text: "EXCHANGE CAR", 
      link: "/exchange-car",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 21.5L9 20L5.5 16.5L9 13L7.5 11.5L2.5 16.5L7.5 21.5Z" fill="#EB0A1E"/>
          <path d="M16.5 21.5L21.5 16.5L16.5 11.5L15 13L18.5 16.5L15 20L16.5 21.5Z" fill="#EB0A1E"/>
          <path d="M20 8H4V6H20V8Z" fill="#EB0A1E"/>
          <path d="M17 12H7V10H17V12Z" fill="#EB0A1E"/>
        </svg>
      )
    }
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
            <React.Fragment key={item.id}>
              <a href={item.link} className="second-nav-item">
                <div className={`second-nav-icon`}>
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </a>
              {index < navLinks.length - 1 && <div className="nav-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;