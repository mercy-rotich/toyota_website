// ToyotaExchangePage.jsx
import React, { useState } from 'react';
import './ExchangeCar.css';
import carImage from '../../../../assets/glanza-image.jpg'; // You'll need to add your image to assets

const ExchangeCar = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
    alert('Form submitted successfully!');
  };

  const handleVerify = (field) => {
    alert(`Verification for ${field} would happen here`);
  };

  return (
    <div className="exchange-container">
      <div className="exchange-header">
        <div className="exchange-logo">
          <img src="https://via.placeholder.com/50x50" alt="Exchange Logo" />
          <h2>EXCHANGE NOW</h2>
          <span>OPEN FOR ALL CAR OWNERS</span>
        </div>
      </div>

      <div className="exchange-content">
        <form onSubmit={handleSubmit}>
          <div className="car-selection-section">
            <div className="dropdown-container">
              <select className="select-dropdown" defaultValue="">
                <option value="" disabled>URBAN CRUISER HYRYDER</option>
              </select>
            </div>

            <div className="location-selection">
              <div className="dropdown-container">
                <select className="select-dropdown" name="state" value={formData.state} onChange={handleInputChange}>
                  <option value="" disabled>SELECT STATE*</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>

              <div className="dropdown-container">
                <select className="select-dropdown" name="city" value={formData.city} onChange={handleInputChange}>
                  <option value="" disabled>SELECT CITY*</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
            </div>

            <div className="dropdown-container full-width">
              <select className="select-dropdown" name="dealer" defaultValue="">
                <option value="" disabled>SELECT DEALER*</option>
                <option value="dealer1">Dealer 1</option>
                <option value="dealer2">Dealer 2</option>
                <option value="dealer3">Dealer 3</option>
              </select>
            </div>
          </div>

          <div className="form-container">
            <div className="form-section">
              <div className="personal-info">
                <h3>PERSONAL INFORMATION: PROVIDE COMPLETE MAILING ADDRESS</h3>
                
                <div className="personal-info-form">
                  <div className="dropdown-container title-dropdown">
                    <select className="select-dropdown" name="title">
                      <option value="mr">Mr.</option>
                      <option value="mrs">Mrs.</option>
                      <option value="ms">Ms.</option>
                    </select>
                  </div>
                  
                  <div className="input-container">
                    <input
                      type="text"
                      name="name"
                      placeholder="NAME*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-container full-width">
                    <input
                      type="text"
                      name="address1"
                      placeholder="ADDRESS LINE 1"
                      value={formData.address1}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-container full-width">
                    <input
                      type="text"
                      name="address2"
                      placeholder="ADDRESS LINE 2"
                      value={formData.address2}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-container full-width">
                    <input
                      type="text"
                      name="address3"
                      placeholder="ADDRESS LINE 3"
                      value={formData.address3}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="location-selection">
                    <div className="dropdown-container">
                      <select className="select-dropdown" name="state" value={formData.state} onChange={handleInputChange}>
                        <option value="" disabled>SELECT STATE*</option>
                        <option value="delhi">Delhi</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                      </select>
                    </div>

                    <div className="dropdown-container">
                      <select className="select-dropdown" name="city" value={formData.city} onChange={handleInputChange}>
                        <option value="" disabled>SELECT CITY*</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-container full-width">
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PINCODE*"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-container mobile-container">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="MOBILE*"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                    <button type="button" className="verify-btn" onClick={() => handleVerify('mobile')}>
                      VERIFY
                    </button>
                  </div>

                  <div className="input-container email-container">
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL*"
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

            <div className="car-image-container">
              <img src={carImage} alt="Toyota Urban Cruiser Hyryder" />
            </div>

            <div className="form-section additional-info">
              <h3>ADDITIONAL INFORMATION</h3>

              <div className="contact-preference">
                <p>How would you like us to contact you?</p>
                <div className="radio-options">
                  <label>
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="phone"
                      checked={formData.preferredContactMethod === 'phone'}
                      onChange={handleInputChange}
                    />
                    Phone
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="email"
                      checked={formData.preferredContactMethod === 'email'}
                      onChange={handleInputChange}
                    />
                    E-Mail
                  </label>
                </div>
              </div>

              <div className="dropdown-container full-width">
                <select 
                  className="select-dropdown" 
                  name="preferredMeetingTime"
                  value={formData.preferredMeetingTime}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>SELECT YOUR PREFERRED MEETING TIME*</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>

              <div className="input-container full-width">
                <input
                  type="text"
                  name="currentOwnedCar"
                  placeholder="CURRENT OWNED CAR"
                  value={formData.currentOwnedCar}
                  onChange={handleInputChange}
                />
              </div>

              <p>When are you planning to buy the next car?</p>
              
              <div className="dropdown-container full-width">
                <select 
                  className="select-dropdown" 
                  name="nextCarPurchaseDuration"
                  value={formData.nextCarPurchaseDuration}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>SELECT DURATION*</option>
                  <option value="immediately">Immediately</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="1year">Within 1 year</option>
                </select>
              </div>

              <div className="checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    name="avail"
                    checked={formData.avail}
                    onChange={handleInputChange}
                  />
                  Would you like to avail loan from Toyota Financial Services?
                </label>
              </div>

              <div className="checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    name="exchange"
                    checked={formData.exchange}
                    onChange={handleInputChange}
                  />
                  Would you like to exchange your car?
                </label>
              </div>

              <div className="car-details-row">
                <div className="dropdown-container">
                  <select 
                    className="select-dropdown" 
                    name="carMake"
                    value={formData.carMake}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>SELECT MAKE*</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="maruti">Maruti</option>
                  </select>
                </div>

                <div className="dropdown-container">
                  <select 
                    className="select-dropdown" 
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>SELECT MODEL*</option>
                    <option value="innova">Innova</option>
                    <option value="fortuner">Fortuner</option>
                    <option value="glanza">Glanza</option>
                  </select>
                </div>
              </div>

              <div className="input-container full-width">
                <input
                  type="text"
                  name="expectedPrice"
                  placeholder="EXPECTED PRICE"
                  value={formData.expectedPrice}
                  onChange={handleInputChange}
                />
              </div>

              <div className="checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    name="receivePromos"
                    checked={formData.receivePromos}
                    onChange={handleInputChange}
                  />
                  Yes, I wish to receive information about Toyota Products & Promotional Offers.
                </label>
              </div>

              <div className="checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  I hereby agree to receive emails, calls and SMS related to promotional activities and services, by or on behalf of TKM. Know More
                </label>
              </div>

              <div className="submit-section">
                <button type="submit" className="submit-btn">SUBMIT</button>
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <p>Disclaimer:</p>
            <p>The information that you submit will not be used or distributed for any reason other than to fulfill your request.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExchangeCar;