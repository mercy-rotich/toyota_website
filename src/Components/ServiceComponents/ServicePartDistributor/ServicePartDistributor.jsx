import { useState, useEffect } from 'react';
import './ServicePartDistributor.css';

export default function ServicePartDistributor() {
  // Fixed function name typo from 'ervicePartDistributor' to 'ServicePartDistributor'
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [activeMapView, setActiveMapView] = useState('Map');
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Mock states data
    setStates(['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana', 'West Bengal', 'Gujarat']);
  }, []);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    
    // Update cities based on selected state
    const stateCities = {
      'Delhi': ['New Delhi', 'Delhi NCR'],
      'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
      'Karnataka': ['Bangalore', 'Mysore', 'Mangalore'],
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
      'Telangana': ['Hyderabad', 'Warangal'],
      'West Bengal': ['Kolkata', 'Siliguri'],
      'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara']
    };
    
    setCities(state ? stateCities[state] || [] : []);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCurrentLocation = () => {
    // In a real implementation, this would use the Geolocation API
    console.log('Using current location...');
  };
  
  const toggleMapView = (view) => {
    setActiveMapView(view);
  };

  const toggleFullScreen = () => {
    const mapElement = document.querySelector('.map-panel');
    
    if (!isFullScreen) {
      if (mapElement.requestFullscreen) {
        mapElement.requestFullscreen();
      } else if (mapElement.mozRequestFullScreen) { /* Firefox */
        mapElement.mozRequestFullScreen();
      } else if (mapElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        mapElement.webkitRequestFullscreen();
      } else if (mapElement.msRequestFullscreen) { /* IE/Edge */
        mapElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    
    setIsFullScreen(!isFullScreen);
  };

  // Add fullscreen event listeners
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement || 
        document.mozFullScreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement
      );
    };
    
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  // Sample distributor locations for India
  const distributorLocations = [
    { lat: 28.6139, lng: 77.2090 }, // Delhi
    { lat: 19.0760, lng: 72.8777 }, // Mumbai
    { lat: 12.9716, lng: 77.5946 }, // Bangalore
    { lat: 17.3850, lng: 78.4867 }, // Hyderabad
    { lat: 13.0827, lng: 80.2707 }, // Chennai
    { lat: 22.5726, lng: 88.3639 }, // Kolkata
    { lat: 18.5204, lng: 73.8567 }, // Pune
    { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
    { lat: 26.9124, lng: 75.7873 }, // Jaipur
    { lat: 25.5941, lng: 85.1376 }, // Patna
    { lat: 30.7333, lng: 76.7794 }, // Chandigarh
    { lat: 21.1702, lng: 72.8311 }, // Surat
    { lat: 23.2599, lng: 77.4126 }, // Bhopal
    { lat: 26.8467, lng: 80.9462 }, // Lucknow
    { lat: 28.4595, lng: 77.0266 }  // Gurgaon
  ];

  return (
    <div className="toyota-distributor-page">
      <div className="content-wrapper">
        <div className="left-panel">
          <div className="parts-distributor-header">
            <div className="location-pin-icon">
              <svg viewBox="0 0 24 24" width="30" height="30">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#eb0a1e"/>
              </svg>
            </div>
            <div className="header-content">
              <h2>PARTS DISTRIBUTOR</h2>
              <p>SELECT THE CLOSEST DISTRIBUTOR IN YOUR LOCATION</p>
            </div>
          </div>
          
          <div className="select-area">
            <div className="select-group">
              <div className="select-wrapper">
                <select 
                  className="toyota-select"
                  value={selectedState} 
                  onChange={handleStateChange}
                >
                  <option value="" disabled>Select State*</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="select-group">
              <div className="select-wrapper">
                <select 
                  className="toyota-select"
                  value={selectedCity} 
                  onChange={handleCityChange}
                  disabled={!selectedState}
                >
                  <option value="" disabled>Select City*</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="current-location-option">
              <p>OR USE CURRENT LOCATION</p>
              <button className="location-btn" onClick={handleCurrentLocation}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <circle cx="12" cy="12" r="10" fill="white" stroke="#eb0a1e" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="#eb0a1e" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="map-panel">
          <div className="map-controls">
            <div className="map-toggle-buttons">
              <button 
                className={`map-toggle-btn ${activeMapView === 'Map' ? 'active' : ''}`}
                onClick={() => toggleMapView('Map')}
              >
                Map
              </button>
              <button 
                className={`map-toggle-btn ${activeMapView === 'Satellite' ? 'active' : ''}`}
                onClick={() => toggleMapView('Satellite')}
              >
                Satellite
              </button>
            </div>
            <button className="fullscreen-btn" onClick={toggleFullScreen}>
              <svg viewBox="0 0 24 24" width="16" height="16">
                {isFullScreen ? (
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="#333" />
                ) : (
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="#333" />
                )}
              </svg>
            </button>
          </div>
          
          <div className="map-area">
            <div className="map-container">
              {/* This would be where the actual Google Map goes */}
              
              {/* For demo purposes, create a simple map with markers */}
              <div className="india-map-container">
                <div className="india-map-background"></div>
                
                {/* Place markers */}
                {distributorLocations.map((location, index) => (
                  <div 
                    key={index}
                    className="map-marker"
                    style={{
                      left: `${((location.lng - 68) / 35) * 100}%`,
                      top: `${((35 - (location.lat - 8)) / 35) * 100}%`
                    }}
                  >
                    <svg width="26" height="40" viewBox="0 0 24 36">
                      <path d="M12 0C5.383 0 0 5.383 0 12c0 9.164 12 24 12 24s12-14.836 12-24C24 5.383 18.617 0 12 0zm0 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" 
                        fill="#eb0a1e" z-index="0"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}