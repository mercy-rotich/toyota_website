import React from 'react'
import './ServicesContact.css'

const ServicesContact = () => {
  return (
    <div className="contact-hero-container">
      <div className="contact-hero-content">
        <div className="contact-hero-header">
          <h1>Enquiry, Feedback and Assistance</h1>
        </div>
        
        <div className="contact-info-box">
          <div className="customer-satisfaction-message">
            <span className="red-dot">•</span>
            <p>Your complete satisfaction is of primary importance to us. Should you ever have questions or comments about your Toyota vehicle, we suggest you follow these steps so your concerns can be addressed as quickly and efficiently as possible.</p>
          </div>
          
          <div className="support-options-container">
            <div className="support-option">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" className="headset-icon">
                  <path d="M12,1C7,1,3,5,3,10v7c0,1.66,1.34,3,3,3h1v-8H5v-2c0-3.87,3.13-7,7-7s7,3.13,7,7v2h-2v8h1c1.66,0,3-1.34,3-3v-7C21,5,17,1,12,1z M10,15c0,1.1-0.9,2-2,2s-2-0.9-2-2v-4c0-1.1,0.9-2,2-2s2,0.9,2,2V15z M18,15c0,1.1-0.9,2-2,2s-2-0.9-2-2v-4c0-1.1,0.9-2,2-2s2,0.9,2,2V15z"/>
                </svg>
              </div>
              <div className="support-content">
                <h3>Talk to Toyota</h3>
                <p>24x7 Call us for enquiry/ feedback at 1800 309 0001 (Toll Free Number)</p>
                <p>080 4505 9000</p>
              </div>
            </div>
            
            <div className="support-option">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" className="feedback-icon">
                  <path d="M20,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h4v3c0,0.55,0.45,1,1,1h0.5c0.25,0,0.5-0.1,0.7-0.29L13.9,18H20c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18,14H13.08L12,15.08V14H6V6h12V14z"/>
                  <rect x="8" y="8" width="8" height="1"/>
                  <rect x="8" y="10" width="6" height="1"/>
                </svg>
              </div>
              <div className="support-content">
                <h3>Feedback/ Queries</h3>
                <p>Express your grievances and feedback to us <span className="submit-link">SUBMIT YOUR FEEDBACK</span></p>
              </div>
            </div>
            
            <div className="support-option">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" className="roadside-icon">
                  <path d="M18.92,6.01C18.72,5.42,18.16,5,17.5,5h-11c-0.66,0-1.21,0.42-1.42,1.01L3,12v8c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-8L18.92,6.01z M6.85,7h10.29l1.08,3.11H5.77L6.85,7z M19,15H5v-2h14V15z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <div className="support-content">
                <h3 className="red-text">24x7 Roadside Assistance</h3>
                <p>1800 102 5001 (Toll Free Number)</p>
                <p>0124 235 5001</p>
              </div>
            </div>
            
            <div className="support-option">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" className="touch-points-icon">
                  <path d="M12,2L4.5,20.29l0.71,0.71L12,17l6.79,4l0.71-0.71L12,2z"/>
                </svg>
              </div>
              <div className="support-content">
                <h3>Other Touch Points</h3>
                <p>Become a Dealer</p>
                <p>Careers</p>
                <p>Testimonials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesContact
