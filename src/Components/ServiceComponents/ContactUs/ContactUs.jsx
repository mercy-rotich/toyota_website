import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <circle cx="12" cy="12" r="10" fill="#eb0a1e" />
            <path d="M8,10 L16,10 L12,15 L8,10" fill="#ffffff" />
            <path d="M7,7 L17,7 L17,14 C17,14.5523 16.5523,15 16,15 L8,15 C7.44772,15 7,14.5523 7,14 L7,7 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="header-text">
          <h1>CONTACT US</h1>
          <p>ENQUIRY. FEEDBACK. ASSISTANCE</p>
        </div>
      </div>

      <div className="contact-description">
        <p>Your complete satisfaction is of primary importance to us. Should you ever have questions or comments about your Toyota vehicle, we suggest you follow these steps so your concerns can be addressed as quickly and efficiently as possible.</p>
      </div>

      <div className="contact-sections">
        <div className="contact-section">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="#666666" />
            </svg>
          </div>
          <div className="section-content">
            <h2>Talk to Toyota</h2>
            <p>24x7 Call us for enquiry/ feedback at</p>
            <div className="phone-numbers">
              <p className="main-number">1800 309 0001<span className="toll-free">(Toll Free Number)</span></p>
              <p className="secondary-number">080 4505 9000</p>
            </div>
            <p>Write to us at <a href="mailto:voc@toyota-kirloskar.co.in" className="email-link">voc@toyota-kirloskar.co.in</a></p>
          </div>
        </div>

        <div className="contact-section">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
              <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" fill="#666666" />
            </svg>
          </div>
          <div className="section-content">
            <h2>Feedback/ Queries</h2>
            <p>Express your grievances and feedback to us</p>
            <a href="#" className="feedback-button">SUBMIT YOUR FEEDBACK</a>
          </div>
        </div>

        <div className="contact-section">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
              <path d="M18,15A3,3 0 0,1 21,18A3,3 0 0,1 18,21C16.69,21 15.58,20.17 15.17,19H14V17H15.17C15.58,15.83 16.69,15 18,15M18,17A1,1 0 0,0 17,18A1,1 0 0,0 18,19A1,1 0 0,0 19,18A1,1 0 0,0 18,17M18,8A1.43,1.43 0 0,0 19.43,6.57C19.43,5.78 18.79,5.14 18,5.14C17.21,5.14 16.57,5.78 16.57,6.57A1.43,1.43 0 0,0 18,8M18,2.57A4,4 0 0,1 22,6.57C22,9.56 18,14 18,14C18,14 14,9.56 14,6.57A4,4 0 0,1 18,2.57M8.83,17H10V19H8.83C8.42,20.17 7.31,21 6,21A3,3 0 0,1 3,18C3,16.69 3.83,15.58 5,15.17V14H7V15.17C7.85,15.47 8.53,16.15 8.83,17M6,17A1,1 0 0,0 5,18A1,1 0 0,0 6,19A1,1 0 0,0 7,18A1,1 0 0,0 6,17M6,3A3,3 0 0,1 9,6C9,7.31 8.17,8.42 7,8.83V10H5V8.83C3.83,8.42 3,7.31 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" fill="#666666" />
            </svg>
          </div>
          <div className="section-content">
            <h2>24x7 Roadside Assistance</h2>
            <div className="phone-numbers">
              <p className="main-number">1800 102 5001<span className="toll-free">(Toll Free Number)</span></p>
              <p className="secondary-number">0124 235 5001</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
              <path d="M12,2L4.5,20.29L5.21,21L18.79,21L19.5,20.29L12,2Z" fill="#666666" />
            </svg>
          </div>
          <div className="section-content">
            <h2>Other Touch Points</h2>
            <div className="touch-points">
              <a href="#" className="touch-point-link">Become a Dealer</a>
              <a href="#" className="touch-point-link">Careers</a>
              <a href="#" className="touch-point-link">Testimonials</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;