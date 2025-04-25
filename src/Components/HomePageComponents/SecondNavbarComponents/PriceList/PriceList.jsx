import React, { useState, useEffect } from 'react';
import './PriceList.css'; // Using your existing CSS
import carimage from '../../../../assets/glanza-image.jpg'

const PriceList = () => {
  
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [carModel, setCarModel] = useState('');
  const [priceRange, setPriceRange] = useState(50000);
  const [fuelTypes, setFuelTypes] = useState([]);
  
 
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);
  
 
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  // State for expanded variants - initialize as empty object
  const [expandedCards, setExpandedCards] = useState({});
  
 
  const toggleCardExpand = (carId) => {
    console.log("Toggle clicked for car ID:", carId); 
    setExpandedCards(prev => {
      const newState = {
        ...prev,
        [carId]: !prev[carId]
      };
      console.log("New expanded state:", newState); 
      return newState;
    });
  };
  
  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    
    const statesData = ['New York', 'California', 'Texas', 'Florida'];
    setStates(statesData);
    
    // Mock car data
    const carsData = [
      {
        id: 1,
        name: 'Sedan XR',
        category: 'Sedan',
        priceRange: '25,000 - 35,000',
        basePrice: 25000,
        image: carimage,
        fuelType: 'Gasoline',
        features: ['Autopilot', 'Leather Seats', 'Navigation'],
        variants: [
          { name: 'Sedan XR Base', price: '25,000', engine: '2.0L', transmission: 'Auto' },
          { name: 'Sedan XR Sport', price: '30,000', engine: '2.5L', transmission: 'Auto' },
          { name: 'Sedan XR Luxury', price: '35,000', engine: '3.0L', transmission: 'Auto' }
        ]
      },
      {
        id: 2,
        name: 'SUV Pro',
        category: 'SUV',
        priceRange: '35,000 - 45,000',
        basePrice: 35000,
        image: carimage,
        fuelType: 'Hybrid',
        features: ['AWD', 'Panoramic Roof', '360° Camera'],
        variants: [
          { name: 'SUV Pro Base', price: '35,000', engine: '2.5L', transmission: 'Auto' },
          { name: 'SUV Pro Premium', price: '40,000', engine: '3.0L', transmission: 'Auto' },
          { name: 'SUV Pro Elite', price: '45,000', engine: '3.5L', transmission: 'Auto' }
        ]
      },
      {
        id: 3,
        name: 'Compact EX',
        category: 'Compact',
        priceRange: '18,000 - 24,000',
        basePrice: 18000,
        image: carimage,
        fuelType: 'Electric',
        features: ['Keyless Entry', 'Apple CarPlay', 'Lane Assist'],
        variants: [
          { name: 'Compact EX Base', price: '18,000', engine: 'Electric', transmission: 'Auto' },
          { name: 'Compact EX Sport', price: '21,000', engine: 'Electric', transmission: 'Auto' },
          { name: 'Compact EX Premium', price: '24,000', engine: 'Electric', transmission: 'Auto' }
        ]
      },
      {
        id: 4,
        name: 'Truck Force',
        category: 'Truck',
        priceRange: '38,000 - 52,000',
        basePrice: 38000,
        image: carimage,
        fuelType: 'Diesel',
        features: ['Towing Package', 'Off-road Capability', 'Bed Liner'],
        variants: [
          { name: 'Truck Force Work', price: '38,000', engine: '3.0L Diesel', transmission: 'Auto' },
          { name: 'Truck Force Adventure', price: '45,000', engine: '3.5L Diesel', transmission: 'Auto' },
          { name: 'Truck Force Platinum', price: '52,000', engine: '4.0L Diesel', transmission: 'Auto' }
        ]
      }
    ];
    
    setCars(carsData);
    
    
    const modelNames = [...new Set(carsData.map(car => car.name))];
    setAvailableModels(modelNames);
    
   
    const fuelTypeOptions = [...new Set(carsData.map(car => car.fuelType))];
    setFuelTypes(fuelTypeOptions);
  }, []);
  

  useEffect(() => {
    if (state) {
     
      const citiesData = {
        'New York': ['New York City', 'Buffalo', 'Albany'],
        'California': ['Los Angeles', 'San Francisco', 'San Diego'],
        'Texas': ['Houston', 'Austin', 'Dallas'],
        'Florida': ['Miami', 'Orlando', 'Tampa']
      };
      
      setCities(citiesData[state] || []);
    } else {
      setCities([]);
    }
  }, [state]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    let filtered = [...cars];
    
    
    filtered = filtered.filter(car => car.basePrice <= priceRange);
    
   
    if (carModel) {
      filtered = filtered.filter(car => car.name === carModel);
    }
    
    setFilteredCars(filtered);
    
   
    setExpandedCards({});
    
    setShowResults(true);
    
    
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  // Reset filters
  const handleReset = () => {
    setState('');
    setCity('');
    setCarModel('');
    setPriceRange(50000);
    setShowResults(false);
    setExpandedCards({});
  };
  
 
  const formatCurrency = (price) => {
    if (state === 'California' || state === 'New York') {
      return `$${price}`;
    } else if (state === 'Texas') {
      return `$${price} USD`;
    } else {
      return `$${price}`;
    }
  };
  
  return (
    <div className="tpl-price-list-container">
      {/* Header */}
      <div className="tpl-header">
        <div className="tpl-logo">
          <div className="tpl-logo-icon">
            <i className="fas fa-car"></i>
          </div>
          <div className="tpl-logo-text">
            <h2>AUTO PRICE LIST</h2>
            <span>FIND YOUR PERFECT VEHICLE</span>
          </div>
        </div>
      </div>
      
      <div className="tpl-content">
        {/* Hero Section */}
        <div className="tpl-hero-section">
          <div className="tpl-hero-text">
            <h1>Find Your Dream Car</h1>
            <p>Enter your location and preferences to see personalized pricing for vehicles available in your area.</p>
          </div>
        </div>
        
        {/* Filter Form */}
        <div className="tpl-card-panel">
          <div className="tpl-filter-toggle">
            <h3>Search Vehicles</h3>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="tpl-filter-options">
              <div className="tpl-filter-row">
                <div className="tpl-filter-group">
                  <label htmlFor="state">State</label>
                  <select 
                    id="state" 
                    className="tpl-select-dropdown" 
                    value={state} 
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                
                <div className="tpl-filter-group">
                  <label htmlFor="city">City</label>
                  <select 
                    id="city" 
                    className="tpl-select-dropdown" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!state}
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="tpl-filter-row">
                <div className="tpl-filter-group">
                  <label htmlFor="carModel">Car Model (Optional)</label>
                  <select 
                    id="carModel" 
                    className="tpl-select-dropdown" 
                    value={carModel} 
                    onChange={(e) => setCarModel(e.target.value)}
                  >
                    <option value="">All Models</option>
                    {availableModels.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
                
                <div className="tpl-filter-group">
                  <label htmlFor="priceRange">
                    Maximum Price: {formatCurrency(priceRange)}
                  </label>
                  <input 
                    type="range" 
                    id="priceRange" 
                    className="tpl-range-slider" 
                    min="10000" 
                    max="100000" 
                    step="1000" 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="tpl-range-labels">
                    <span>{formatCurrency(10000)}</span>
                    <span>{formatCurrency(100000)}</span>
                  </div>
                </div>
              </div>
              
              <div className="tpl-filter-row">
                <div className="tpl-filter-group tpl-full-width">
                  <button type="submit" className="tpl-test-drive-btn">
                    <i className="fas fa-search"></i> Find Vehicles
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        {/* Results Section */}
        {showResults && (
          <div id="results-section">
            <div className="tpl-card-panel">
              <div className="tpl-filter-toggle">
                <h3>Available Vehicles in {city}, {state}</h3>
                <button onClick={handleReset} className="tpl-enquiry-btn">
                  <i className="fas fa-redo"></i> Reset
                </button>
              </div>
              
              {filteredCars.length > 0 ? (
                <div className="tpl-models-list">
                  {filteredCars.map(car => (
                    <div key={car.id} className="tpl-car-card tpl-card-panel">
                      <div className="tpl-car-layout">
                        <div className="tpl-car-image-section">
                          <div className="tpl-car-image">
                            <img src={car.image} alt={car.name} />
                            <div className="tpl-car-category">{car.category}</div>
                          </div>
                        </div>
                        
                        <div className="tpl-car-content-section">
                          <div className="tpl-car-header-section">
                            <div className="tpl-car-title-section">
                              <h3 className="tpl-car-name">{car.name}</h3>
                              <div className="tpl-car-price-range">
                                <p>{formatCurrency(car.priceRange)}</p>
                              </div>
                            </div>
                            
                            <div className="tpl-car-tags-section">
                              <span className="tpl-fuel-type">{car.fuelType}</span>
                              <div className="tpl-car-price-note">*Ex-showroom price in {city}</div>
                            </div>
                          </div>
                          
                          <div className="tpl-car-features">
                            {car.features.map((feature, idx) => (
                              <span key={idx} className="tpl-feature-tag">
                                <i className="fas fa-check-circle"></i> {feature}
                              </span>
                            ))}
                          </div>
                          
                          <div className="tpl-car-actions">
                            <button className="tpl-view-details-btn">
                              <i className="fas fa-info-circle"></i> Details
                            </button>
                            <button className="tpl-test-drive-btn">
                              <i className="fas fa-car"></i> Test Drive
                            </button>
                            <button 
                              className={`tpl-variants-toggle-btn ${expandedCards[car.id] ? 'active' : ''}`}
                              onClick={() => toggleCardExpand(car.id)}
                              type="button"
                            >
                              <i className={`fas fa-chevron-${expandedCards[car.id] ? 'up' : 'down'}`}></i> 
                              {expandedCards[car.id] ? 'Hide' : 'Show'} Variants
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Display variants based on expanded state */}
                      {expandedCards[car.id] && (
                        <div className="tpl-car-variants">
                          <div className="tpl-variants-table">
                            <div className="tpl-table-header">
                              <div className="tpl-cell">Variant</div>
                              <div className="tpl-cell">Price</div>
                              <div className="tpl-cell">Engine</div>
                              <div className="tpl-cell">Transmission</div>
                              <div className="tpl-cell tpl-action-cell"></div>
                            </div>
                            
                            {car.variants.map((variant, idx) => (
                              <div key={idx} className="tpl-table-row">
                                <div className="tpl-cell">{variant.name}</div>
                                <div className="tpl-cell">{formatCurrency(variant.price)}</div>
                                <div className="tpl-cell">{variant.engine}</div>
                                <div className="tpl-cell">{variant.transmission}</div>
                                <div className="tpl-cell tpl-action-cell">
                                  <button className="tpl-enquiry-btn">Enquire</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="tpl-no-results">
                  <i className="fas fa-car-crash"></i>
                  <p>No vehicles match your current criteria. Please adjust your filters and try again.</p>
                  <button onClick={handleReset} className="tpl-reset-btn">
                    <i className="fas fa-redo"></i> Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="tpl-cta-section">
          <div className="tpl-cta-content">
            <h2>Ready to Take the Next Step?</h2>
            <p>Visit a dealership near you or schedule a test drive to experience your favorite vehicle in person.</p>
            <div className="tpl-cta-buttons">
              <button className="tpl-locate-dealer-btn">
                <i className="fas fa-map-marker-alt"></i> Find a Dealer
              </button>
              <button className="tpl-test-drive-cta">
                <i className="fas fa-car"></i> Schedule Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="tpl-disclaimer">
        <p>
          *All prices mentioned are ex-showroom and may vary based on location. 
          Additional charges like registration, insurance, and accessories are extra. 
          Please contact your nearest dealer for final quotation.
        </p>
      </div>
    </div>
  );
};

export default PriceList;