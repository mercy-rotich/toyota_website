import React, { useState } from 'react';
// Import the external CSS file
import './ServiceCostCalculator.css';

const ServiceCostCalculator = () => {
  const [city, setCity] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [kilometer, setKilometer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { city, model, fuelType, kilometer });
    alert('Service cost calculation submitted successfully!');
  };

  return (
    <div className="service-cost-container">
      <div className="form-section">
        <div className="booking-header">
          <div className="calendar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"/>
            </svg>
          </div>
          <div>
            <h2>SERVICE COST CALCULATOR</h2>
            <p>SELECT THE OPTIONS BELOW TO CALCULATE</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="" disabled>Select City*</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </div>

          <div className="form-group">
            <select
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            >
              <option value="" disabled>Select Model*</option>
              <option value="camry">Camry</option>
              <option value="fortuner">Fortuner</option>
              <option value="innova">Innova Crysta</option>
              <option value="glanza">Glanza</option>
              <option value="urban-cruiser">Urban Cruiser</option>
            </select>
          </div>

          <div className="form-group">
            <select
              name="fuelType"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              required
            >
              <option value="" disabled>Select Fuel Type*</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div className="form-group">
            <select
              name="kilometer"
              value={kilometer}
              onChange={(e) => setKilometer(e.target.value)}
              required
            >
              <option value="" disabled>Select Kilometer*</option>
              <option value="10000">10,000 km</option>
              <option value="20000">20,000 km</option>
              <option value="30000">30,000 km</option>
              <option value="40000">40,000 km</option>
              <option value="50000">50,000 km</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">
              SUBMIT <span className="arrow">→</span>
            </button>
          </div>

          <p className="form-note">Please select your options and submit to get an estimate of your service cost.</p>
        </form>
      </div>

      <div className="info-section">
        <div className="info-image"></div>
        <div className="info-content">
          <h2>Did you know?</h2>
          <p>Toyota Motor Corporation started in 1937 as a division of Toyoda Automatic Loom Works. While the Toyota Group is now best known for its cars, they are still in the textile business as well.</p>
        </div>
        <div className="info-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCostCalculator;