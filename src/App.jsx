import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Components/ServiceComponents/ContactUs/ContactUs";
import Services from "./Pages/ServicesPage/Services";
import Tshields from "./Pages/ServicesPage/Tshields/Tshields";
import SafetyRecall from "./Pages/ServicesPage/SafetyRecall/SafetyRecall";
import ExchangeCar from "./Components/HomePageComponents/SecondNavbarComponents/ExchangeCar/ExchangeCar";
import FindADealer from "./Components/HomePageComponents/SecondNavbarComponents/FindADealer/FindADealer";
import TestDrive from "./Components/HomePageComponents/SecondNavbarComponents/TestDrive/TestDrive";
import PriceList from "./Components/HomePageComponents/SecondNavbarComponents/PriceList/PriceList";

// Fallback component for debugging route issues
const NotFound = () => (
  <div style={{ padding: "100px 20px", textAlign: "center" }}>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        
        
        <Route path="/services/*" element={<Services />} />
        <Route path="/tshields" element={<Tshields/>} />
        <Route path="/safetyrecall" element={<SafetyRecall/>} />
        <Route path="/exchangecar" element={<ExchangeCar/>} />
        <Route path="/find-dealer" element={<FindADealer/>} />
        <Route path="/test-drive" element={<TestDrive/>} />
        <Route path="/price-list" element={<PriceList/>} />
        
        {/* Catch all for debugging */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;