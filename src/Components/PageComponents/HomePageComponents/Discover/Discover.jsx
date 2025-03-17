import React from 'react';
import './Discover.css'; 
import glanza_image from '../../../../assets/glanza-image.jpg';
import urbanCruser_image from '../../../../assets/urbanCruser-image.jpg';
import Rumion_image from '../../../../assets/Rumion-image.jpg';
import hyryder_image from '../../../../assets/hyryder-image.jpg';
import innovacrystar_image from '../../../../assets/innovacrysta-image.jpg';
import hycross_image from '../../../../assets/hycross-image.jpg';
import hilux_image from '../../../../assets/hilux-image.jpg';
import fortuner_image from '../../../../assets/fortuner-image.jpg';
import legender_image from '../../../../assets/legender-image.jpg';
import camry_image from '../../../../assets/camry-image.jpg';
import vellfire_image from '../../../../assets/vellfire-image.jpg';
import landcruiser_image from '../../../../assets/landcruiser-image.jpg';



const Discover= () => {
  try {
    // Car data with images, names and prices
    const carModels = [
      {
        id: 1,
        name: 'Glanza',
        price: 'From INR 6,90,000*',
        image: glanza_image

      },
      {
        id: 2,
        name: 'Urban Cruiser Taisor',
        price: 'From INR 7,74,000*',
        image: urbanCruser_image
      },
      {
        id: 3,
        name: 'Rumion',
        price: 'From INR 10,54,000*',
        image: Rumion_image
      },
      {
        id: 4,
        name: 'Urban Cruiser Hyryder',
        price: 'From INR 11,14,000*',
        image: hyryder_image
      },
      {
        id: 5,
        name: 'Innova Crysta',
        price: 'From INR 19,09,000*',
        image: innovacrystar_image
      },
      {
        id: 6,
        name: 'Innova Hycross',
        price: 'From INR 19,09,000*',
        image: hycross_image
      },
      {
        id: 7,
        name: 'Hilux',
        price: 'From INR 30,40,000*',
        image: hilux_image
      },
      {
        id: 8,
        name: 'Fortuner',
        price: 'From INR 48,00,000*',
        image: fortuner_image
      },
      {
        id: 9,
        name: 'Legender',
        price: 'From INR 44,11,000*',
        image: legender_image
      },
      {
        id: 10,
        name: 'Camry',
        price: 'From INR 48,00,000*',
        image: camry_image
      },
      {
        id: 11,
        name: 'Vellfire',
        price: 'From INR 1,22,30,000*',
        image: vellfire_image
      },
      {
        id: 12,
        name: 'Land Cruiser 300',
        price: 'From INR 2,31,00,000*',
        image: landcruiser_image
      },
    ];

    // Split the cars into two rows of 6 cars each
    const firstRowCars = carModels.slice(0, 6);
    const secondRowCars = carModels.slice(6, 12);

    return (
      <div className="toyota-section">
        <div className="toyota-container">
          {/* Section Heading */}
          <div className="toyota-heading">
            <h2>Discover the Toyota range</h2>
          </div>

          {/* First Row of Cars */}
          <div className="toyota-grid">
            {firstRowCars.map(car => (
              <div key={car.id} className="toyota-car-card">
                <img 
                  src={car.image} 
                  alt={car.name || 'Toyota car'} 
                  className="toyota-car-image" 
                />
                <h3 className="toyota-car-name">{car.name || 'Toyota Model'}</h3>
                <p className="toyota-car-price">{car.price || 'Price unavailable'}</p>
              </div>
            ))}
          </div>

          {/* Second Row of Cars */}
          <div className="toyota-grid">
            {secondRowCars.map(car => (
              <div key={car.id} className="toyota-car-card">
                <img 
                  src={car.image} 
                  alt={car.name || 'Toyota car'} 
                  className="toyota-car-image" 
                />
                <h3 className="toyota-car-name">{car.name || 'Toyota Model'}</h3>
                <p className="toyota-car-price">{car.price || 'Price unavailable'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ToyotaRangeSection component:", error);
    return (
      <div className="error-container" style={{ padding: '20px', textAlign: 'center' }}>
        <h2>We encountered an issue loading the Toyota range.</h2>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }
};

export default Discover;