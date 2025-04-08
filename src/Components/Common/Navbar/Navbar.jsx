
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
    { title: 'VIRTUAL SHOWROOM', link: '/virtualshowroom' },
    {
      title:'SERVICE',
      dropdown:[
        { title: 'service', link: '/services' },
        { title: 'T SHIELS & DIY', link: '/tshields' },
        { title: 'Safety Recall', link: '/safetyrecall' },
      ]
    },
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
      title: 'BUY ONLINE',
      dropdown: [
        { title: 'Buy online', link: '/buyonline', openInNew: true },
        { title: 'Buy accesories online', link: '/buyonline' },
        
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
    { title: 'USED CARS', link: '/usedcars' },
    
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
          <a href="/contactus" className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
  
  
  <svg x="12" y="-2" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
</svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;