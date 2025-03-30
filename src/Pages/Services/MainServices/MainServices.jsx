import React from 'react';
import { Routes } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import ServicesContact from '../../../Components/PageComponents/ServicesContact/ServicesContact';
import ServiceNavbar from '../../../Components/Common/ServiceNavbar/ServiceNavbar';
import MainServicesHomePage from './MainServicesHomePage/MainServicesHomePage';


const MainServices = () => {
  return (
    <div>
      <ServiceNavbar/>
      <Routes>
        {/* Default redirect to services home page */}
        <Route index element={<MainServicesHomePage/>}/>
        <Route path="serviceshome" element={<MainServicesHomePage/>}/>
        <Route path="/contact" element={<ServicesContact/>}/>
      </Routes>
    </div>
  );
};

export default MainServices;