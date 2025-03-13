import React from 'react';
import './ServicesContact.css';

const ToyotaContactPage = () => {
  return (
    <div className="toyota-contact-page">
      {/* Main content area */}
      <div className="contact-banner">
        <div className="banner-text">
          <h1>Customer Support and Assistance</h1>
        </div>
      </div>

      <div className="contact-content-container">
        <div className="contact-content">
          <div className="contact-message">
            <p>
              <span className="red-bullet">•</span> Your complete satisfaction is of primary importance to us. Should you ever have questions or comments about
              your Toyota vehicle, we suggest you follow these steps so your concerns can be addressed as quickly and
              efficiently as possible.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-option">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" fill="currentColor" />
                </svg>
              </div>
              <div className="option-details">
                <h3 className="option-title">Talk to Toyota</h3>
                <p>24x7 Call us for enquiry/ feedback at 1800 309 0001 (Toll Free Number)</p>
                <p>080 4505 9000</p>
              </div>
            </div>

            <div className="contact-option">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor" />
                </svg>
              </div>
              <div className="option-details">
                <h3 className="option-title">Feedback/ Queries</h3>
                <p>Express your grievances and feedback to us <span className="submit-link">SUBMIT YOUR FEEDBACK</span></p>
              </div>
            </div>

            <div className="contact-option">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" fill="currentColor" />
                </svg>
              </div>
              <div className="option-details">
                <h3 className="option-title">Other Touch Points</h3>
                <p className="touch-point">Become a Dealer</p>
                <p className="touch-point">Careers</p>
                <p className="touch-point">Testimonials</p>
              </div>
            </div>

            <div className="contact-option">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
                </svg>
              </div>
              <div className="option-details">
                <h3 className="option-title">24x7 Roadside Assistance</h3>
                <p>1800 102 5001 (Toll Free Number)</p>
                <p>0124 235 5001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyotaContactPage;