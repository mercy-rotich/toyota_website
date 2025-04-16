import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BuyOnlineNavbar.css';

const BuyOnlineNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`standalone-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <div className="logo-container">
              <span className="logo-t">T</span>
              <span className="logo-web">WEB</span>
            </div>
            <span className="logo-subtitle">DREAM CAR ONLINE</span>
          </a>
        </div>

        <div className="navbar-desktop-menu">
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <a href="#" className="dropdown-toggle">Buy Online <span className="dropdown-arrow">▼</span></a>
              <ul className="dropdown-menu">
                <li><a href="/buyonline">Buy online</a></li>
                <li><a href="/accessories">Buy accessories online</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/how-it-works">How It Works</a>
            </li>
            <li className="nav-item">
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <a href="/my-toyota" className="my-toyota-link">
            MY Toyota <span className="user-icon">👤</span>
          </a>
          <a href="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li className="mobile-nav-item dropdown">
            <a href="#" className="mobile-dropdown-toggle">
              Buy Online <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="mobile-dropdown-menu">
              <li><a href="/buyonline">Buy online</a></li>
              <li><a href="/accessories">Buy accessories online</a></li>
            </ul>
          </li>
          <li className="mobile-nav-item">
            <a href="/how-it-works">How It Works</a>
          </li>
          <li className="mobile-nav-item">
            <a href="/signup">Sign Up</a>
          </li>
          <li className="mobile-nav-item">
            <a href="/my-toyota">MY Toyota</a>
          </li>
          <li className="mobile-nav-item">
            <a href="/cart">Cart (0)</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default BuyOnlineNavbar;