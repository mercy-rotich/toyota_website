// ToyotaRecallPage.jsx
import React, { useState } from 'react';
import './Tshields.css';

const Tshields = () => {
  const [vin, setVin] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted VIN:', vin, 'Captcha:', captcha);
    alert('Vehicle information submitted successfully!');
    setVin('');
    setCaptcha('');
  };

  return (
    <div className="tshields-page-container">
      <div className="header-section">
        <div className="header-content">
          <div className="icon-container">
            <div className="car-icon">
              <div className="car-icon-inner"></div>
            </div>
          </div>
          <div className="header-text">
            <h1>RECALL, SPECIAL SERVICE & OTHER CAMPAIGNS</h1>
            <p>Get the information of current running Recall, Special Service & Other Campaigns</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <p className="form-instruction">
          If you would like to find out if your vehicle is affected by a Recall or Special Service campaign, please enter your Vehicle Identification Number:
        </p>

        <div className="form-container">
          <div className="input-label">
            <h3>VEHICLE IDENTIFICATION NUMBER (VIN) / FRAME NUMBER</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                className="vin-input"
                placeholder="ENTER VIN / FRAME NUMBER"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                required
              />
            </div>

            <div className="captcha-container">
              <div className="captcha-image">
                <span>Bk20gm</span>
                <button type="button" className="refresh-captcha">
                  <i className="refresh-icon"></i>
                </button>
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  className="captcha-input"
                  placeholder="ENTER CAPTCHA"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tshields;