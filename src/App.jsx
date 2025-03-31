import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import ServiceNavbar from "./Components/Common/ServiceNavbar/ServiceNavbar";
import Footer from "./Components/Common/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Components/ServiceComponents/ContactUs/ContactUs";
import Services from "./Pages/ServicesPage/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <ServiceNavbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/services/*" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
