import React, { useState } from 'react';
import './MainServicesHomePage.css'

const MainServicesHomePage = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="service-page-container">
      {/* Top service options */}
      <div className="service-options">
        <div className="service-option active">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--toyota-red)"/>
            </svg>
          </div>
          <div className="option-text">
            <div>SERVICE DEALER</div>
            <div>LOCATOR</div>
          </div>
        </div>

        <div className="service-option">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" fill="var(--toyota-black)"/>
            </svg>
          </div>
          <div className="option-text">
            <div>SERVICE COST</div>
            <div>CALCULATOR</div>
          </div>
        </div>

        <div className="service-option">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" fill="var(--toyota-black)"/>
            </svg>
          </div>
          <div className="option-text">
            <div>BOOK SERVICE</div>
            <div>APPOINTMENT</div>
          </div>
        </div>

        <div className="service-option">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z" fill="var(--toyota-black)"/>
            </svg>
          </div>
          <div className="option-text">
            <div>OWNER'S</div>
            <div>MANUAL</div>
          </div>
        </div>

        <div className="service-option">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="var(--toyota-black)"/>
            </svg>
          </div>
          <div className="option-text">
            <div>PARTS DISTRIBUTOR</div>
          </div>
        </div>
      </div>

      {/* Dealer Locator Form */}
      <div className="dealer-locator-container">
        <div className="dealer-locator-header">
          <div className="icon-large">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--toyota-red)"/>
            </svg>
          </div>
          <div className="dealer-header-text">
            <h2>SERVICE DEALER LOCATOR</h2>
            <p>SELECT THE CLOSEST DEALER IN YOUR LOCATION</p>
          </div>
        </div>

        <div className="dealer-locator-form">
          <div className="form-group">
            <div className="dropdown-container">
              <select 
                className="form-control" 
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="" disabled>Select State*</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamil-nadu">Tamil Nadu</option>
              </select>
              <div className="dropdown-arrow">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <div className="dropdown-container">
              <select 
                className="form-control" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!state}
              >
                <option value="" disabled>Select City*</option>
                {state === 'delhi' && (
                  <>
                    <option value="new-delhi">New Delhi</option>
                    <option value="south-delhi">South Delhi</option>
                  </>
                )}
                {state === 'maharashtra' && (
                  <>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                  </>
                )}
              </select>
              <div className="dropdown-arrow">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="current-location-option">
            <span>OR USE CURRENT LOCATION</span>
            <button className="location-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="var(--toyota-red)"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServicesHomePage;