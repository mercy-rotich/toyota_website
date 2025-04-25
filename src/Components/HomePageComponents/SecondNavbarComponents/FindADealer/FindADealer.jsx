import React, { useState, useEffect, useRef } from 'react';
import './FindADealer.css';
import dealerImage from '../../../../assets/glanza-image.jpg'; // You'll need to add this image to your assets

const FindADealer = () => {
  // Original state for form inputs
  const [searchType, setSearchType] = useState('location');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  // Add ref and state for scroll detection
  const dealerSectionRef = useRef(null);
  const [showMapButton, setShowMapButton] = useState(true);

  // Sample dealer data (this would come from your API in a real application)
  const sampleDealers = [
    {
      id: 1,
      name: "Toyota City Showroom",
      address: "123 Main Street, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560034",
      phone: "+91 98765 43210",
      email: "info@toyotacity.com",
      services: ["Sales", "Service", "Parts", "Body Shop"],
      rating: 4.8,
      openingHours: "10:00 AM - 8:00 PM",
      distance: "2.3 km"
    },
    {
      id: 2,
      name: "Premier Toyota",
      address: "456 Park Avenue, Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560038",
      phone: "+91 98765 12345",
      email: "contact@premiertoyota.com",
      services: ["Sales", "Service", "Parts"],
      rating: 4.5,
      openingHours: "9:00 AM - 7:00 PM",
      distance: "4.1 km"
    },
    {
      id: 3,
      name: "Toyota Express",
      address: "789 Brigade Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
      phone: "+91 98765 67890",
      email: "support@toyotaexpress.com",
      services: ["Sales", "Quick Service"],
      rating: 4.2,
      openingHours: "9:30 AM - 6:30 PM",
      distance: "5.7 km"
    }
  ];

  // States and cities data (this would typically come from an API)
  const statesData = [
    { value: "karnataka", label: "Karnataka" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "delhi", label: "Delhi" },
    { value: "tamilnadu", label: "Tamil Nadu" }
  ];

  const citiesData = {
    karnataka: [
      { value: "bangalore", label: "Bangalore" },
      { value: "mysore", label: "Mysore" },
      { value: "mangalore", label: "Mangalore" }
    ],
    maharashtra: [
      { value: "mumbai", label: "Mumbai" },
      { value: "pune", label: "Pune" },
      { value: "nagpur", label: "Nagpur" }
    ],
    delhi: [
      { value: "newdelhi", label: "New Delhi" },
      { value: "southdelhi", label: "South Delhi" }
    ],
    tamilnadu: [
      { value: "chennai", label: "Chennai" },
      { value: "coimbatore", label: "Coimbatore" },
      { value: "madurai", label: "Madurai" }
    ]
  };

  // Add scroll event listener to track when to hide the map button
  useEffect(() => {
    const handleScroll = () => {
      if (dealerSectionRef.current) {
        const rect = dealerSectionRef.current.getBoundingClientRect();
        // Check if the bottom of the dealer section is still visible
        const dealerSectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;
        
        // If the bottom of the dealer section is above the viewport, hide the button
        if (dealerSectionBottom <= 0) {
          setShowMapButton(false);
        } else {
          setShowMapButton(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update city options when state changes
  useEffect(() => {
    if (state) {
      setCityOptions(citiesData[state] || []);
      setCity('');
    } else {
      setCityOptions([]);
    }
  }, [state]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLocationError('');
    
    // Simulate API call with delay
    setTimeout(() => {
      setResults(sampleDealers);
      setIsLoading(false);
      setSearchPerformed(true);
    }, 1500);
  };

  // Function to get current location
  const getCurrentLocation = () => {
    setIsLoading(true);
    setLocationError('');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Here you would normally send these coordinates to your API
          // to get nearby dealers, but we'll just simulate it
          console.log("Location found:", position.coords.latitude, position.coords.longitude);
          
          setTimeout(() => {
            setResults(sampleDealers);
            setIsLoading(false);
            setSearchPerformed(true);
          }, 1500);
        },
        (error) => {
          setIsLoading(false);
          setLocationError('Unable to retrieve your location. Please allow location access or try another search method.');
          console.error("Error getting location:", error);
        }
      );
    } else {
      setIsLoading(false);
      setLocationError('Geolocation is not supported by your browser. Please try another search method.');
    }
  };

  // Function to render dealer card
  const renderDealerCard = (dealer) => {
    return (
      <div className="dealer-card" key={dealer.id}>
        <div className="dealer-header">
          <h3>{dealer.name}</h3>
          <div className="dealer-rating">
            <i className="fas fa-star"></i>
            <span>{dealer.rating}</span>
          </div>
        </div>
        
        <div className="dealer-details">
          <div className="dealer-address">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>{dealer.address}, {dealer.city}</p>
              <p>{dealer.state}, {dealer.pincode}</p>
              {dealer.distance && <p className="distance"><i className="fas fa-route"></i> {dealer.distance}</p>}
            </div>
          </div>
          
          <div className="dealer-contact">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>{dealer.phone}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{dealer.email}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>{dealer.openingHours}</span>
            </div>
          </div>
          
          <div className="dealer-services">
            <h4>Services Available</h4>
            <div className="service-tags">
              {dealer.services.map((service, index) => (
                <span key={index} className="service-tag">
                  {service === "Sales" && <i className="fas fa-car"></i>}
                  {service === "Service" && <i className="fas fa-tools"></i>}
                  {service === "Parts" && <i className="fas fa-cogs"></i>}
                  {service === "Body Shop" && <i className="fas fa-paint-roller"></i>}
                  {service === "Quick Service" && <i className="fas fa-tachometer-alt"></i>}
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="dealer-actions">
          <button className="action-btn directions-btn">
            <i className="fas fa-directions"></i> Get Directions
          </button>
          <button className="action-btn contact-btn">
            <i className="fas fa-phone-alt"></i> Contact
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="find-dealer-container" ref={dealerSectionRef}>
      <div className="dealer-header">
        <div className="dealer-logo">
          <div className="logo-icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div className="logo-text">
            <h2>FIND A DEALER</h2>
            <span>LOCATE A TOYOTA DEALER NEAR YOU</span>
          </div>
        </div>
      </div>

      <div className="dealer-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Find Your Nearest Toyota Dealer</h1>
            <p>Locate service centers, showrooms, and certified Toyota dealers in your area</p>
          </div>
          <div className="dealer-image-hero">
            <img src={dealerImage} alt="Toyota Dealership" />
          </div>
        </div>

        <div className="search-section card-panel">
          <h3 className="section-title">Search for Dealers</h3>
          
          <div className="search-options">
            <div 
              className={`search-option ${searchType === 'location' ? 'active' : ''}`}
              onClick={() => setSearchType('location')}
            >
              <i className="fas fa-location-arrow"></i>
              <span>Current Location</span>
            </div>
            <div 
              className={`search-option ${searchType === 'pincode' ? 'active' : ''}`}
              onClick={() => setSearchType('pincode')}
            >
              <i className="fas fa-map-pin"></i>
              <span>Pincode</span>
            </div>
            <div 
              className={`search-option ${searchType === 'city' ? 'active' : ''}`}
              onClick={() => setSearchType('city')}
            >
              <i className="fas fa-city"></i>
              <span>City</span>
            </div>
          </div>
          
          {searchType === 'location' && (
            <div className="location-search">
              <p>Let us find dealers near your current location</p>
              <button onClick={getCurrentLocation} className="location-btn">
                <i className="fas fa-crosshairs"></i> 
                Use My Current Location
              </button>
              {locationError && <p className="error-message">{locationError}</p>}
            </div>
          )}
          
          {searchType === 'pincode' && (
            <form onSubmit={handleSubmit} className="pincode-search">
              <div className="input-container full-width">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="Enter your 6-digit pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  pattern="[0-9]{6}"
                  maxLength="6"
                  required
                />
              </div>
              <div className="submit-section">
                <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`}>
                  {isLoading ? 'Searching...' : 'SEARCH'}
                </button>
              </div>
            </form>
          )}
          
          {searchType === 'city' && (
            <form onSubmit={handleSubmit} className="city-search">
              <div className="location-selection">
                <div className="dropdown-container">
                  <label htmlFor="state">State</label>
                  <select
                    className="select-dropdown"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="" disabled>SELECT STATE*</option>
                    {statesData.map(state => (
                      <option key={state.value} value={state.value}>{state.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="dropdown-container">
                  <label htmlFor="city">City</label>
                  <select
                    className="select-dropdown"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    disabled={!state}
                  >
                    <option value="" disabled>SELECT CITY*</option>
                    {cityOptions.map(city => (
                      <option key={city.value} value={city.value}>{city.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="submit-section">
                <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`}>
                  {isLoading ? 'Searching...' : 'SEARCH'}
                </button>
              </div>
            </form>
          )}
        </div>

        {isLoading && (
          <div className="loading-section">
            <div className="loading-spinner"></div>
            <p>Searching for dealers near you...</p>
          </div>
        )}
        
        {searchPerformed && !isLoading && (
          <div className="results-section">
            <h3 className="section-title">Dealers Near You</h3>
            {results.length > 0 ? (
              <div className="dealer-results">
                {results.map(dealer => renderDealerCard(dealer))}
              </div>
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No dealers found in your area. Please try a different search.</p>
              </div>
            )}
          </div>
        )}
        
        <div className="help-section card-panel">
          <h3 className="section-title">Need Help?</h3>
          <div className="help-content">
            <div className="help-item">
              <i className="fas fa-question-circle"></i>
              <div>
                <h4>Can't find a dealer?</h4>
                <p>Contact our support team for assistance</p>
                <a href="#" className="help-link">Get Support</a>
              </div>
            </div>
            <div className="help-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Call Us</h4>
                <p>Speak with our customer service</p>
                <a href="tel:1800-425-8888" className="help-link">1800-425-8888</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-overlay">
        <div className="map-container">
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Interactive Map</p>
            <span>Map will be displayed here with dealer locations</span>
          </div>
        </div>
        
        {/* Map button is only rendered when showMapButton is true */}
        {showMapButton && (
          <button className="map-toggle-btn">
            <i className="fas fa-map"></i> View Map
          </button>
        )}
      </div>
      
      <div className="disclaimer">
        <p><strong>Note:</strong> Dealer information and availability subject to change. Please contact dealers directly to confirm services and hours.</p>
      </div>
    </div>
  );
};

export default FindADealer;