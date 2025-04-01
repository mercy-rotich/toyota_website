import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ServiceNavbar.css';

const ServiceNavbar = () => {
  const location = useLocation();
  console.log("Current location:", location.pathname);
  
  // Service navigation items
  const serviceNavItems = [
    { title: ' HOME', path: '/services/home' },  
    { title: 'BOOK SERVICE APPOINTMENT', path: '/services/serviceappointment' },
    { title: 'SERVICE CORNER', path: '/services/servicecorner' },
    { title: 'SHOP', path: '/services/shop' },
    { title: 'SERVICE COST CALCULATOR', path: '/services/warranty' },
    { title: 'SERVICE DEALER LOCATOR', path: '/services/servicedealerlocator' },
    { title: 'OWNERS MANUAL', path: '/services/ownersmanual' },
    { title: 'PART DISTRIBUTOR', path: '/services/partdistributor' },
    { title: 'FAQ', path: '/services/faq' },
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