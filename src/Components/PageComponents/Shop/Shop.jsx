import React from 'react'
import './Shop.css'

const Shop = () => {
  return (
    <div className="app-container">
      {/* Top Navbar
      <div className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="logo-container">
            <a href="/" className="logo">TOYOTA</a>
          </div>

          <div className="desktop-menu">
            {['PRODUCTS', 'VIRTUAL SHOWROOM', 'SERVICE', 'T-CARE', 'USED CARS', 'MOBILITY', 'BUY ONLINE', 'TOYOTA IN INDIA'].map((item, index) => (
              <div key={index} className="menu-item-container">
                <div 
                  className="menu-item"
                  onClick={() => toggleDropdown(index)}
                >
                  {item}
                  {index < 7 && <span className={`dropdown-arrow ${activeDropdown === index ? 'rotated' : ''}`}>▼</span>}
                </div>
                
                {index < 7 && (
                  <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
                    <a href="#" className="dropdown-item">Item 1</a>
                    <a href="#" className="dropdown-item">Item 2</a>
                    <a href="#" className="dropdown-item">Item 3</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="navbar-actions">
            <a href="#" className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <div className="hamburger-menu">
              <button onClick={toggleMobileMenu} className="hamburger-button">
                <span className={`hamburger-line ${mobileMenuOpen ? 'line1-active' : ''}`}></span>
                <span className={`hamburger-line ${mobileMenuOpen ? 'line2-active' : ''}`}></span>
                <span className={`hamburger-line ${mobileMenuOpen ? 'line3-active' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Secondary Navbar */}
      
      {/* Main Content */}
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Shop</h1>
          <div>
            <button className="enquiries-button">ENQUIRES</button>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="product-grid">
          {/* T SECURE */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo">
                <span className="toyota-red">T</span>SECURE
              </div>
            </div>
            <h3 className="product-title">T SECURE</h3>
            <div className="card-footer">
              <button className="enquire-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                ENQUIRE
              </button>
            </div>
          </div>
          
          {/* T CLUB */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo">
                <span className="toyota-red">T</span>CLUB
              </div>
            </div>
            <h3 className="product-title">T CLUB</h3>
            <div className="card-footer">
              <button className="enquire-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                ENQUIRE
              </button>
            </div>
          </div>
          
          {/* T SMILES */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo">
                <span className="toyota-red">T</span>SMILE
              </div>
            </div>
            <h3 className="product-title">T SMILES</h3>
            <div className="card-footer">
              <button className="enquire-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                ENQUIRE
              </button>
            </div>
          </div>
          
          {/* Toyota Genuine Parts */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo toyota-red">
                TOYOTA GENUINE PARTS
              </div>
            </div>
            <h3 className="product-title">Toyota Genuine Parts</h3>
            <div className="card-footer">
              <button className="website-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </span>
                WEBSITE
              </button>
            </div>
          </div>
          
          {/* Toyota Genuine Accessories */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo toyota-red">
                TOYOTA GENUINE ACCESSORIES
              </div>
            </div>
            <h3 className="product-title">Toyota Genuine Accessories</h3>
            <div className="card-footer">
              <button className="website-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </span>
                WEBSITE
              </button>
            </div>
          </div>
          
          {/* Tyre */}
          <div className="product-card">
            <div className="product-image">
              <img src="/api/placeholder/150/150" alt="Toyota Tyre" className="product-img" />
            </div>
            <h3 className="product-title">Tyre</h3>
            <div className="card-footer">
              <button className="enquire-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                ENQUIRE
              </button>
            </div>
          </div>

          {/* Car Essential Store */}
          <div className="product-card">
            <div className="product-image">
              <div className="product-logo">
                Car Essential Store
              </div>
            </div>
            <h3 className="product-title">Car Essential Store</h3>
            <div className="card-footer">
              <button className="enquire-button">
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                ENQUIRE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <button className="floating-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button className="floating-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button className="floating-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="floating-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Shop
