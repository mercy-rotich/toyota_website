import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ServiceNavbar.css';

const ServiceNavbar = () => {
  const location = useLocation();
  console.log("Current location:", location.pathname);
  
  // Service navigation items
  const serviceNavItems = [
    { title: ' HOME', path: '/services/home' },  // Changed to base services path
    { title: 'BOOK SERVICE APPOINTMENT', path: '/services/appointment' },
    { title: 'SERVICE CORNER', path: '/services/history' },
    { title: 'SHOP', path: '/services/maintenance' },
    { title: 'BUY TOYOTA ENGINE PARTS', path: '/services/warranty' },
    { title: 'PART DISTRIBUTOR', path: '/services/shop' },
    { title: 'CONTACT US', path: '/services/servicescontact' },
    
  ];

  return (
    <div className="service-navbar">
      <div className="service-nav-container">
        <div className="service-nav-items">
          {serviceNavItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className={`service-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceNavbar;