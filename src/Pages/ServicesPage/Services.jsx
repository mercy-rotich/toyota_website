import React, { useEffect } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import ServiceNavbar from '../../Components/Common/ServiceNavbar/ServiceNavbar';
import ServicesHome from '../../Components/ServiceComponents/ServicesHome/ServicesHome';
import ContactUs from '../../Components/ServiceComponents/ContactUs/ContactUs';

// Simple fallback components for missing components
const BookAppointment = () => <div className="service-page">Book Appointment Page</div>;
const ServiceShop = () => <div className="service-page">Service Shop Page</div>;

// Layout component that will always render the navbar inside services pages
const ServicesLayout = () => {
  useEffect(() => {
    console.log("ServicesLayout mounted");
  }, []);

  return (
    <div className="services-layout">
      <div style={{ marginTop: "112px" }}>  
        <ServiceNavbar />
        <div className="services-content" style={{ padding: "20px" }}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

// Fallback component in case none of the child routes match
const ServicesFallback = () => (
  <div>
    <h2>Services Home</h2>
    <p>Welcome to the Toyota Service Center. Please select an option from the menu above.</p>
  </div>
);

const Services = () => {
  useEffect(() => {
    console.log("Services component mounted");
  }, []);

  return (
    <div>
      <Routes>
        <Route element={<ServicesLayout />}>
          <Route index element={<ServicesFallback />} />
          <Route path="home" element={<ServicesHome />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="appointment" element={<BookAppointment />} />
          <Route path="shop" element={<ServiceShop />} />
          <Route path="*" element={<ServicesFallback />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Services;