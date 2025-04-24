import React, { useState } from 'react';
import './ExchangeCar.css';
import carImage from '../../../../assets/glanza-image.jpg';

const ExchangeCar = () => {
  // Add state to track the current active step (1, 2, or 3)
  const [activeStep, setActiveStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '',
    address1: '',
    address2: '',
    address3: '',
    state: '',
    city: '',
    pincode: '',
    mobile: '',
    email: '',
    preferredContactMethod: 'phone',
    preferredMeetingTime: '',
    currentOwnedCar: '',
    nextCarPurchaseDuration: '',
    avail: false,
    exchange: true,
    carMake: '',
    carModel: '',
    expectedPrice: '',
    receivePromos: true,
    agreeToTerms: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Function to move to the next step
  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
      // Scroll to top of the form when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to move to the previous step
  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      // Scroll to top of the form when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < 3) {
      nextStep();
    } else {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const handleVerify = (field) => {
    alert(`Verification for ${field} would happen here`);
  };

  return (
    <div className="exchange-container">
      <div className="exchange-header">
        <div className="exchange-logo">
          <div className="logo-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="logo-text">
            <h2>EXCHANGE NOW</h2>
            <span>OPEN FOR ALL CAR OWNERS</span>
          </div>
        </div>
      </div>

      <div className="exchange-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Trade In Your Vehicle</h1>
            <p>Get the best value for your current car and upgrade to a new Toyota</p>
          </div>
          <div className="car-image-hero">
            <img src={carImage} alt="Toyota Urban Cruiser Hyryder" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-progress">
            <div className="progress-bar">
              <div className={`progress-step ${activeStep >= 1 ? 'active' : ''}`}>
                <div className="step-circle">1</div>
                <div className="step-label">Vehicle Selection</div>
              </div>
              <div className={`progress-step ${activeStep >= 2 ? 'active' : ''}`}>
                <div className="step-circle">2</div>
                <div className="step-label">Personal Details</div>
              </div>
              <div className={`progress-step ${activeStep >= 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <div className="step-label">Exchange Details</div>
              </div>
            </div>
          </div>

          {/* Step 1 - Vehicle Selection */}
          {activeStep === 1 && (
            <div className="car-selection-section card-panel">
              <h3 className="section-title">Select Your Toyota Model</h3>
              <div className="dropdown-container">
                <select className="select-dropdown" defaultValue="">
                  <option value="" disabled>URBAN CRUISER HYRYDER</option>
                </select>
              </div>

              <div className="location-selection">
                <div className="dropdown-container">
                  <label htmlFor="state">State</label>
                  <select className="select-dropdown" id="state" name="state" value={formData.state} onChange={handleInputChange} required>
                    <option value="" disabled>SELECT STATE*</option>
                    <option value="delhi">Delhi</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                  </select>
                </div>

                <div className="dropdown-container">
                  <label htmlFor="city">City</label>
                  <select className="select-dropdown" id="city" name="city" value={formData.city} onChange={handleInputChange} required>
                    <option value="" disabled>SELECT CITY*</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>
              </div>

              <div className="dropdown-container full-width">
                <label htmlFor="dealer">Dealer</label>
                <select className="select-dropdown" id="dealer" name="dealer" defaultValue="" required>
                  <option value="" disabled>SELECT DEALER*</option>
                  <option value="dealer1">Dealer 1</option>
                  <option value="dealer2">Dealer 2</option>
                  <option value="dealer3">Dealer 3</option>
                </select>
              </div>
              
              <div className="submit-section">
                <button type="button" className="submit-btn" onClick={nextStep}>NEXT</button>
              </div>
            </div>
          )}

          {/* Step 2 - Personal Details */}
          {activeStep === 2 && (
            <div className="form-section card-panel">
              <div className="personal-info">
                <h3 className="section-title">Personal Information</h3>
                <p className="section-subtitle">Please provide your complete mailing address</p>
                
                <div className="personal-info-form">
                  <div className="input-row">
                    <div className="dropdown-container title-dropdown">
                      <label htmlFor="title">Title</label>
                      <select className="select-dropdown" id="title" name="title">
                        <option value="mr">Mr.</option>
                        <option value="mrs">Mrs.</option>
                        <option value="ms">Ms.</option>
                      </select>
                    </div>
                    
                    <div className="input-container">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="input-container full-width">
                    <label htmlFor="address1">Address Line 1</label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      placeholder="Street address"
                      value={formData.address1}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-container full-width">
                    <label htmlFor="address2">Address Line 2</label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      placeholder="Apartment, suite, unit, etc."
                      value={formData.address2}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-container full-width">
                    <label htmlFor="address3">Address Line 3</label>
                    <input
                      type="text"
                      id="address3"
                      name="address3"
                      placeholder="Landmark"
                      value={formData.address3}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="location-selection">
                    <div className="dropdown-container">
                      <label htmlFor="state-address">State</label>
                      <select 
                        className="select-dropdown" 
                        id="state-address" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>SELECT STATE*</option>
                        <option value="delhi">Delhi</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                      </select>
                    </div>

                    <div className="dropdown-container">
                      <label htmlFor="city-address">City</label>
                      <select 
                        className="select-dropdown" 
                        id="city-address" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>SELECT CITY*</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-container full-width">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      placeholder="Enter pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-container mobile-container">
                    <label htmlFor="mobile">Mobile Number</label>
                    <div className="input-with-button">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="button" className="verify-btn" onClick={() => handleVerify('mobile')}>
                        VERIFY
                      </button>
                    </div>
                  </div>

                  <div className="input-container email-container">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-with-button">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="button" className="verify-btn" onClick={() => handleVerify('email')}>
                        VERIFY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="navigation-buttons">
                <div className="submit-section" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button type="button" className="back-btn" onClick={prevStep} style={{ backgroundColor: '#aaa' }}>BACK</button>
                  <button type="button" className="submit-btn" onClick={nextStep}>NEXT</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 - Exchange Details */}
          {activeStep === 3 && (
            <div className="form-section card-panel">
              <h3 className="section-title">Exchange Details</h3>

              <div className="contact-preference">
                <p>How would you like us to contact you?</p>
                <div className="radio-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="phone"
                      checked={formData.preferredContactMethod === 'phone'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    Phone
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="email"
                      checked={formData.preferredContactMethod === 'email'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    E-Mail
                  </label>
                </div>
              </div>

              <div className="dropdown-container full-width">
                <label htmlFor="preferredMeetingTime">Preferred Meeting Time</label>
                <select 
                  className="select-dropdown" 
                  id="preferredMeetingTime" 
                  name="preferredMeetingTime"
                  value={formData.preferredMeetingTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>SELECT YOUR PREFERRED MEETING TIME*</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>

              <div className="input-container full-width">
                <label htmlFor="currentOwnedCar">Current Owned Car</label>
                <input
                  type="text"
                  id="currentOwnedCar"
                  name="currentOwnedCar"
                  placeholder="Enter model and year"
                  value={formData.currentOwnedCar}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="purchase-timeline">
                <p>When are you planning to buy the next car?</p>
                
                <div className="dropdown-container full-width">
                  <label htmlFor="nextCarPurchaseDuration">Purchase Timeline</label>
                  <select 
                    className="select-dropdown" 
                    id="nextCarPurchaseDuration"
                    name="nextCarPurchaseDuration"
                    value={formData.nextCarPurchaseDuration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>SELECT DURATION*</option>
                    <option value="immediately">Immediately</option>
                    <option value="3months">Within 3 months</option>
                    <option value="6months">Within 6 months</option>
                    <option value="1year">Within 1 year</option>
                  </select>
                </div>
              </div>

              <div className="checkbox-option">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="avail"
                    checked={formData.avail}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  Would you like to avail loan from Toyota Financial Services?
                </label>
              </div>

              <div className="checkbox-option">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="exchange"
                    checked={formData.exchange}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  Would you like to exchange your car?
                </label>
              </div>

              {formData.exchange && (
                <>
                  <div className="car-details-row">
                    <div className="dropdown-container">
                      <label htmlFor="carMake">Car Make</label>
                      <select 
                        className="select-dropdown" 
                        id="carMake"
                        name="carMake"
                        value={formData.carMake}
                        onChange={handleInputChange}
                        required={formData.exchange}
                      >
                        <option value="" disabled>SELECT MAKE*</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="maruti">Maruti</option>
                      </select>
                    </div>

                    <div className="dropdown-container">
                      <label htmlFor="carModel">Car Model</label>
                      <select 
                        className="select-dropdown" 
                        id="carModel"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleInputChange}
                        required={formData.exchange}
                      >
                        <option value="" disabled>SELECT MODEL*</option>
                        <option value="innova">Innova</option>
                        <option value="fortuner">Fortuner</option>
                        <option value="glanza">Glanza</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-container full-width">
                    <label htmlFor="expectedPrice">Expected Price</label>
                    <input
                      type="text"
                      id="expectedPrice"
                      name="expectedPrice"
                      placeholder="Enter expected price"
                      value={formData.expectedPrice}
                      onChange={handleInputChange}
                      required={formData.exchange}
                    />
                  </div>
                </>
              )}

              <div className="consent-section">
                <div className="checkbox-option">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="receivePromos"
                      checked={formData.receivePromos}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-custom"></span>
                    Yes, I wish to receive information about Toyota Products & Promotional Offers.
                  </label>
                </div>

                <div className="checkbox-option">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkbox-custom"></span>
                    I hereby agree to receive emails, calls and SMS related to promotional activities and services, by or on behalf of TKM. <a href="#" className="terms-link">Know More</a>
                  </label>
                </div>
              </div>

              <div className="navigation-buttons">
                <div className="submit-section" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button type="button" className="back-btn" onClick={prevStep} style={{ backgroundColor: '#aaa' }}>BACK</button>
                  <button type="submit" className="submit-btn">SUBMIT</button>
                </div>
              </div>
            </div>
          )}

          <div className="disclaimer">
            <p><strong>Disclaimer:</strong> The information that you submit will not be used or distributed for any reason other than to fulfill your request.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExchangeCar;