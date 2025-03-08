import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="toyota-footer">
      <div className="footer-container">
        {/* Top section with navigation links */}
        <div className="footer-nav-section">
          <div className="footer-column">
            <h4>New Vehicles</h4>
            <ul>
              <li><a href="#">All Vehicles</a></li>
              <li><a href="#">SUVs</a></li>
              <li><a href="#">MPVs</a></li>
              <li><a href="#">Sedans</a></li>
              <li><a href="#">Hatchbacks</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Shopping Tools</h4>
            <ul>
              <li><a href="#">Offers & Promotions</a></li>
              <li><a href="#">Request a Test Drive</a></li>
              <li><a href="#">Find a Dealer</a></li>
              <li><a href="#">Build Your Toyota</a></li>
              <li><a href="#">Finance Calculator</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Owners</h4>
            <ul>
              <li><a href="#">Service & Maintenance</a></li>
              <li><a href="#">Warranties</a></li>
              <li><a href="#">Genuine Parts</a></li>
              <li><a href="#">Owner's Manual</a></li>
              <li><a href="#">Roadside Assistance</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>About Toyota</h4>
            <ul>
              <li><a href="#">Company Information</a></li>
              <li><a href="#">Our Heritage</a></li>
              <li><a href="#">Environment & Sustainability</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Connect with Us</h4>
            <ul className="social-icons">
              <li><a href="#" className="icon facebook"></a></li>
              <li><a href="#" className="icon twitter"></a></li>
              <li><a href="#" className="icon instagram"></a></li>
              <li><a href="#" className="icon youtube"></a></li>
            </ul>
            <div className="download-apps">
              <h5>Download Our App</h5>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="/images/app-store.png" alt="App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="/images/play-store.png" alt="Play Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle section with newsletter subscription */}
        <div className="footer-newsletter">
          <h4>Stay in touch with Toyota</h4>
          <p>Subscribe to receive the latest news and promotions</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        
        {/* Bottom section with legal links and copyright */}
        <div className="footer-bottom">
          <div className="footer-legal-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-copyright">
            <p>© Toyota Motor Corporation India Pvt. Ltd. {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;