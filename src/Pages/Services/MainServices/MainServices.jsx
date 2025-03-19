import React from 'react';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import './MainServices.css';
import Shop from '../../../Components/PageComponents/Shop/Shop';
import ServicesContact from '../../../Components/PageComponents/ServicesContact/ServicesContact';
import MainServicesHomePage from './MainServicesHomePage/MainServicesHomePage';

const MainServices = () => {
  return (
    <div>
        <div className="secondary-navbar">
        <div className="secondary-navbar-content">
          <div className="secondary-menu">
            <Link to="/serviceshomepage" className="secondary-menu-item">HOME</Link>
            <Link to="/service-corner" className="secondary-menu-item">SERVICE CORNER</Link>
            <Link to="/book-service" className="secondary-menu-item">BOOK SERVICE APPOINTMENT</Link>
            <Link to="/shop" className="secondary-menu-item active">SHOP</Link>
            <Link to="/genuine-parts" className="secondary-menu-item">BUY TOYOTA GENUINE PARTS</Link>
            <Link to="/part-distributor" className="secondary-menu-item">PART DISTRIBUTOR</Link>
            <Link to="/faq" className="secondary-menu-item">FAQ</Link>
            <Link to="/contact" className="secondary-menu-item">CONTACT US</Link>
          </div>
        </div>
      </div>
      


      
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      <ServicesContact/>
    </div>
  );
};

export default MainServices;