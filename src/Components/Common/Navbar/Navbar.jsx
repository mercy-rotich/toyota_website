
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    {
      title: 'MODELS',
      dropdown: [
        { title: 'All Models', link: '/models' },
        { title: 'Hyryder', link: '/models/hyryder' },
        { title: 'Innova HyCross', link: '/models/innova-hycross' },
        { title: 'Innova Crysta', link: '/models/innova-crysta' },
        { title: 'Fortuner', link: '/models/fortuner' },
        { title: 'Glanza', link: '/models/glanza' },
        { title: 'Legender', link: '/models/legender' },
        { title: 'Rumion', link: '/models/rumion' },
        { title: 'Vellfire', link: '/models/vellfire' },
        { title: 'LC300', link: '/models/lc300' },
      ]
    },
    {
      title: 'BUY',
      dropdown: [
        { title: 'Find a Dealer', link: '/dealers' },
        { title: 'Book a Test Drive', link: '/test-drive' },
        { title: 'Download Brochure', link: '/brochures' },
        { title: 'Price List', link: '/price-list' },
        { title: 'Finance', link: '/finance' },
        { title: 'Toyota Insurance', link: '/insurance' },
      ]
    },
    {
      title: 'OWNERS',
      dropdown: [
        { title: 'Service Booking', link: '/service' },
        { title: 'Genuine Parts', link: '/parts' },
        { title: 'Accessories', link: '/accessories' },
        { title: 'Warranty', link: '/warranty' },
        { title: 'Owners\' Manual', link: '/manuals' },
        { title: 'Toyota Connect', link: '/connect' },
      ]
    },
    {
      title: 'DISCOVER',
      dropdown: [
        { title: 'About Toyota', link: '/about' },
        { title: 'Toyota Hybrid', link: '/hybrid' },
        { title: 'Toyota Safety', link: '/safety' },
        { title: 'Toyota Environmental Challenge', link: '/environmental' },
        { title: 'Corporate Social Responsibility', link: '/csr' },
        { title: 'News & Events', link: '/news' },
      ]
    },
    { title: 'CONTACT US', link: '/contact' },
  ];

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <div className="logo-container">
          <a href="/">
            TOYOTA
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-items ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeDropdown === index ? 'active' : ''}`}
              onMouseEnter={() => handleDropdownToggle(index)}
              onMouseLeave={closeDropdowns}
            >
              {item.link ? (
                <a href={item.link} className="nav-link">{item.title}</a>
              ) : (
                <div className="nav-link dropdown-toggle">
                  {item.title}
                  <span className="dropdown-arrow">▼</span>
                </div>
              )}
              
              {item.dropdown && (
                <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                  {item.dropdown.map((dropItem, dropIndex) => (
                    <a key={dropIndex} href={dropItem.link} className="dropdown-item">
                      {dropItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <a href="/search" className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;