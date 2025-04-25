import React, { useState, useRef } from 'react';
import './TestDrive.css';
import carImage from '../../../../assets/glanza-image.jpg';

const TestDrive = () => {
  // Add state to track the current active step (1, 2, or 3)
  const [activeStep, setActiveStep] = useState(1);
  // Add ref for progress tracking section
  const progressTrackingRef = useRef(null);
  
  const [formData, setFormData] = useState({
    title: 'mr',
    name: '',
    mobile: '',
    email: '',
    address1: '',
    address2: '',
    address3: '',
    state: '',
    city: '',
    pincode: '',
    carModel: '',
    dealership: '',
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    drivingLicense: '',
    comments: '',
    receiveUpdates: true,
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
      // Scroll to the progress tracking section
      if (progressTrackingRef.current) {
        progressTrackingRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Function to move to the previous step
  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      // Scroll to the progress tracking section
      if (progressTrackingRef.current) {
        progressTrackingRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < 3) {
      nextStep();
    } else {
      console.log('Test Drive Request Submitted:', formData);
      alert('Your test drive request has been submitted successfully!');
    }
  };

  const handleVerify = (field) => {
    alert(`Verification for ${field} would happen here`);
  };

  // Car models data
  const carModels = [
    { id: 'glanza', name: 'Glanza' },
    { id: 'urban-cruiser', name: 'Urban Cruiser Hyryder' },
    { id: 'innova', name: 'Innova Crysta' },
    { id: 'fortuner', name: 'Fortuner' },
    { id: 'camry', name: 'Camry' }
  ];

  // Generate time slots for selection
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 18; i++) {
      const hour = i > 12 ? i - 12 : i;
      const period = i >= 12 ? 'PM' : 'AM';
      slots.push({ 
        id: `${i}:00`, 
        time: `${hour}:00 ${period}` 
      });
      if (i < 18) {
        slots.push({ 
          id: `${i}:30`, 
          time: `${hour}:30 ${period}` 
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="testdrive-container">
      <div className="testdrive-header">
        <div className="testdrive-logo">
          <div className="testdrive-logo-icon">
            <i className="fas fa-car"></i>
          </div>
          <div className="testdrive-logo-text">
            <h2>TEST DRIVE</h2>
            <span>EXPERIENCE THE TOYOTA DIFFERENCE</span>
          </div>
        </div>
      </div>

      <div className="testdrive-content">
        <div className="testdrive-hero-section">
          <div className="testdrive-hero-text">
            <h1>Book Your Test Drive</h1>
            <p>Take the wheel and experience the excellence of Toyota vehicles firsthand</p>
          </div>
          <div className="testdrive-car-image">
            <img src={carImage} alt="Toyota Car" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Adding ref to the progress tracking section */}
          <div className="testdrive-form-progress" ref={progressTrackingRef}>
            <div className="testdrive-progress-bar">
              <div className={`testdrive-progress-step ${activeStep >= 1 ? 'active' : ''}`}>
                <div className="testdrive-step-circle">1</div>
                <div className="testdrive-step-label">Vehicle Selection</div>
              </div>
              <div className={`testdrive-progress-step ${activeStep >= 2 ? 'active' : ''}`}>
                <div className="testdrive-step-circle">2</div>
                <div className="testdrive-step-label">Personal Details</div>
              </div>
              <div className={`testdrive-progress-step ${activeStep >= 3 ? 'active' : ''}`}>
                <div className="testdrive-step-circle">3</div>
                <div className="testdrive-step-label">Schedule Drive</div>
              </div>
            </div>
          </div>

          {/* Step 1 - Vehicle Selection */}
          {activeStep === 1 && (
            <div className="testdrive-card-panel testdrive-vehicle-selection">
              <h3 className="testdrive-section-title">Select Your Toyota Model</h3>
              <p className="testdrive-section-subtitle">Choose which Toyota vehicle you'd like to experience</p>
              
              <div className="testdrive-car-models">
                {carModels.map((car) => (
                  <div 
                    key={car.id}
                    className={`testdrive-car-option ${formData.carModel === car.id ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, carModel: car.id})}
                  >
                    <div className="testdrive-car-icon">
                      <i className="fas fa-car"></i>
                    </div>
                    <div className="testdrive-car-name">{car.name}</div>
                    {formData.carModel === car.id && (
                      <div className="testdrive-car-selected">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h3 className="testdrive-section-title testdrive-location-title">Select Preferred Dealership</h3>
              
              <div className="testdrive-location-selection">
                <div className="testdrive-dropdown-container">
                  <label htmlFor="state">State</label>
                  <select 
                    className="testdrive-select-dropdown" 
                    id="state" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleInputChange} 
                    required
                  >
                    <option value="" disabled>SELECT STATE*</option>
                    <option value="delhi">Delhi</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                  </select>
                </div>

                <div className="testdrive-dropdown-container">
                  <label htmlFor="city">City</label>
                  <select 
                    className="testdrive-select-dropdown" 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange} 
                    required
                  >
                    <option value="" disabled>SELECT CITY*</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                </div>
              </div>

              <div className="testdrive-dropdown-container testdrive-full-width">
                <label htmlFor="dealership">Dealership</label>
                <select 
                  className="testdrive-select-dropdown" 
                  id="dealership" 
                  name="dealership" 
                  value={formData.dealership}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>SELECT DEALERSHIP*</option>
                  <option value="dealer1">Toyota Central - Downtown</option>
                  <option value="dealer2">Toyota Premium - Westside</option>
                  <option value="dealer3">Toyota Elite - East City</option>
                  <option value="dealer4">Toyota Prestige - North Point</option>
                </select>
              </div>
              
              <div className="testdrive-navigation-buttons">
                <div className="testdrive-submit-section">
                  <button type="button" className="testdrive-next-btn" onClick={nextStep}>NEXT</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 - Personal Details */}
          {activeStep === 2 && (
            <div className="testdrive-card-panel testdrive-form-section">
              <div className="testdrive-personal-info">
                <h3 className="testdrive-section-title">Personal Information</h3>
                <p className="testdrive-section-subtitle">Help us get to know you better</p>
                
                <div className="testdrive-personal-info-form">
                  <div className="testdrive-input-row">
                    <div className="testdrive-dropdown-container testdrive-title-dropdown">
                      <label htmlFor="title">Title</label>
                      <select 
                        className="testdrive-select-dropdown" 
                        id="title" 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                      >
                        <option value="mr">Mr.</option>
                        <option value="mrs">Mrs.</option>
                        <option value="ms">Ms.</option>
                        <option value="dr">Dr.</option>
                      </select>
                    </div>
                    
                    <div className="testdrive-input-container">
                      <label htmlFor="name">Full Name</label>
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

                  <div className="testdrive-input-container testdrive-mobile-container">
                    <label htmlFor="mobile">Mobile Number</label>
                    <div className="testdrive-input-with-button">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                      />
                      <button 
                        type="button" 
                        className="testdrive-verify-btn" 
                        onClick={() => handleVerify('mobile')}
                      >
                        VERIFY
                      </button>
                    </div>
                  </div>

                  <div className="testdrive-input-container testdrive-email-container">
                    <label htmlFor="email">Email Address</label>
                    <div className="testdrive-input-with-button">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <button 
                        type="button" 
                        className="testdrive-verify-btn" 
                        onClick={() => handleVerify('email')}
                      >
                        VERIFY
                      </button>
                    </div>
                  </div>

                  <div className="testdrive-input-container testdrive-full-width">
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

                  <div className="testdrive-input-container testdrive-full-width">
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

                  <div className="testdrive-input-container testdrive-full-width">
                    <label htmlFor="address3">Landmark</label>
                    <input
                      type="text"
                      id="address3"
                      name="address3"
                      placeholder="Nearby landmark"
                      value={formData.address3}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="testdrive-location-selection">
                    <div className="testdrive-dropdown-container">
                      <label htmlFor="state-address">State</label>
                      <select 
                        className="testdrive-select-dropdown" 
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
                        <option value="tamilnadu">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                      </select>
                    </div>

                    <div className="testdrive-dropdown-container">
                      <label htmlFor="city-address">City</label>
                      <select 
                        className="testdrive-select-dropdown" 
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
                        <option value="chennai">Chennai</option>
                        <option value="hyderabad">Hyderabad</option>
                      </select>
                    </div>
                  </div>

                  <div className="testdrive-input-container testdrive-full-width">
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

                  <div className="testdrive-input-container testdrive-full-width">
                    <label htmlFor="drivingLicense">Driving License Number</label>
                    <input
                      type="text"
                      id="drivingLicense"
                      name="drivingLicense"
                      placeholder="Enter your driving license number"
                      value={formData.drivingLicense}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="testdrive-navigation-buttons">
                <div className="testdrive-submit-section">
                  <button 
                    type="button" 
                    className="testdrive-back-btn" 
                    onClick={prevStep}
                  >
                    BACK
                  </button>
                  <button 
                    type="button" 
                    className="testdrive-next-btn" 
                    onClick={nextStep}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 - Schedule Drive */}
          {activeStep === 3 && (
            <div className="testdrive-card-panel testdrive-form-section">
              <h3 className="testdrive-section-title">Schedule Your Test Drive</h3>
              <p className="testdrive-section-subtitle">Select your preferred date and time</p>
              
              <div className="testdrive-schedule-container">
                <div className="testdrive-schedule-group">
                  <h4 className="testdrive-schedule-subtitle">Preferred Date & Time</h4>
                  
                  <div className="testdrive-schedule-row">
                    <div className="testdrive-input-container testdrive-date-container">
                      <label htmlFor="preferredDate">Date</label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="testdrive-dropdown-container">
                      <label htmlFor="preferredTime">Time</label>
                      <select 
                        className="testdrive-select-dropdown" 
                        id="preferredTime" 
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>SELECT TIME*</option>
                        {timeSlots.map(slot => (
                          <option key={slot.id} value={slot.id}>{slot.time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="testdrive-schedule-group">
                  <h4 className="testdrive-schedule-subtitle">Alternate Date & Time (Optional)</h4>
                  
                  <div className="testdrive-schedule-row">
                    <div className="testdrive-input-container testdrive-date-container">
                      <label htmlFor="alternateDate">Alternate Date</label>
                      <input
                        type="date"
                        id="alternateDate"
                        name="alternateDate"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.alternateDate}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="testdrive-dropdown-container">
                      <label htmlFor="alternateTime">Alternate Time</label>
                      <select 
                        className="testdrive-select-dropdown" 
                        id="alternateTime" 
                        name="alternateTime"
                        value={formData.alternateTime}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>SELECT TIME</option>
                        {timeSlots.map(slot => (
                          <option key={slot.id} value={slot.id}>{slot.time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="testdrive-input-container testdrive-full-width">
                  <label htmlFor="comments">Additional Comments</label>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="Any specific requirements or questions you might have"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="testdrive-consent-section">
                <div className="testdrive-checkbox-option">
                  <label className="testdrive-checkbox-label">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleInputChange}
                    />
                    <span className="testdrive-checkbox-custom"></span>
                    Yes, I wish to receive information about Toyota Products & Promotional Offers.
                  </label>
                </div>

                <div className="testdrive-checkbox-option">
                  <label className="testdrive-checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="testdrive-checkbox-custom"></span>
                    I hereby agree to the <a href="#" className="testdrive-terms-link">Terms & Conditions</a> and consent to Toyota processing my data for this test drive request.
                  </label>
                </div>
              </div>

              <div className="testdrive-navigation-buttons">
                <div className="testdrive-submit-section">
                  <button 
                    type="button" 
                    className="testdrive-back-btn" 
                    onClick={prevStep}
                  >
                    BACK
                  </button>
                  <button type="submit" className="testdrive-submit-btn">SUBMIT</button>
                </div>
              </div>
            </div>
          )}

          <div className="testdrive-disclaimer">
            <p><strong>Disclaimer:</strong> A valid driving license is required to be eligible for a test drive. Toyota reserves the right to refuse test drives at their discretion. Information provided will be used solely for processing your test drive request.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestDrive;