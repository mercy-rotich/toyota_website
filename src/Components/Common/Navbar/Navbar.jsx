import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  const navItems = [
    { title: 'VIRTUAL SHOWROOM', link: '/virtualshowroom' },
    {
      title: 'SERVICE',
      dropdown: [
        { title: 'Service', link: '/services' },
        { title: 'T SHIELDS & DIY', link: '/tshields' },
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
        { title: 'Buy accessories online', link: '/buyaccessories', openInNew: true },
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
          <Link to="/">
            TOYOTA
          </Link>
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
            >
              {item.link ? (
                <Link to={item.link} className="nav-link">{item.title}</Link>
              ) : (
                <div 
                  className="nav-link dropdown-toggle"
                  onClick={() => handleDropdownToggle(index)}
                  onMouseEnter={() => window.innerWidth > 960 ? handleDropdownToggle(index) : null}
                  onMouseLeave={() => window.innerWidth > 960 ? closeDropdowns() : null}
                >
                  {item.title}
                  <span className="dropdown-arrow">▼</span>
                </div>
              )}
              
              {item.dropdown && (
                <div 
                  className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}
                  onMouseEnter={() => window.innerWidth > 960 ? setActiveDropdown(index) : null}
                  onMouseLeave={() => window.innerWidth > 960 ? closeDropdowns() : null}
                >
                  {item.dropdown.map((dropItem, dropIndex) => (
                    dropItem.openInNew ? (
                      <a 
                        key={dropIndex} 
                        href={dropItem.link} 
                        className="dropdown-item"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {dropItem.title}
                      </a>
                    ) : (
                      <Link 
                        key={dropIndex} 
                        to={dropItem.link} 
                        className="dropdown-item"
                        onClick={() => {
                          closeDropdowns();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {dropItem.title}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contactus" className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <svg x="12" y="-2" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;