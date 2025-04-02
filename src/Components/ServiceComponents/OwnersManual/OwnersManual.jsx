import React, { useState } from 'react'
import './OwnersManual.css'

const OwnersManual = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    vehicleNumber: '',
    model: '',
    serviceType: '',
    state: '',
    city: '',
    dealer: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="owners-manual-container">
      <div className="form-section">
        <div className="booking-header">
          <div className="calendar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"/>
            </svg>
          </div>
          <div>
            <h2>OWNER'S MANUAL</h2>
            <p>KNOW YOUR VEHICLE BETTER</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="ENTER VIN/CHASSIS NUMBER*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="mobile"
              placeholder="MMYY (MONTH & YEAR OF MANUFACTURING*"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              placeholder="ENTER phone number"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          

        

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span>I hereby agree to receive emails, calls and SMS related to promotional activities and services, by or on behalf of 
                <span className="toyota-text"> TOYOTA</span>
              </span>
            </label>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">
              SUBMIT <span className="arrow">→</span>
            </button>
          </div>

          <p className="form-note">Please fill the form and submit. So that our dealer person will get in touch shortly.</p>
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

export default OwnersManual;