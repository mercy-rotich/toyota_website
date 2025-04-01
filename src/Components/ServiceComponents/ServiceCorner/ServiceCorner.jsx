import React, { useState } from 'react';
import './ServiceCorner.css';

// Import logo images for the white circles
import tglossLogo from '../../../assets/serviceshop-image1.png';
import tsecureLogo from '../../../assets/serviceshop-image1.png';
import tsmilesLogo from '../../../assets/serviceshop-image1.png';
import tclubLogo from '../../../assets/serviceshop-image1.png';
import xmainLogo from '../../../assets/serviceshop-image1.png';
import connectLogo from '../../../assets/serviceshop-image1.png';
// Import background images
import tglossBackground from '../../../assets/servicecorner-image1.jpg';
import tsecureBackground from '../../../assets/servicecorner-image1.jpg';
import tsmilesBackground from '../../../assets/servicecorner-image1.jpg';
import tyreBackground from '../../../assets/servicecorner-image1.jpg';
import bactaklenzBackground from '../../../assets/servicecorner-image1.jpg';
import partsBackground from '../../../assets/servicecorner-image1.jpg';

const ServiceCorner = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  // Map of logo images for the white circles
  const logoImages = {
    'TGLOSS': tglossLogo,
    'TSECURE': tsecureLogo,
    'TSMILES': tsmilesLogo,
    'TCLUB': tclubLogo,
    'XMAIN': xmainLogo,
    'CONNECT': connectLogo
  };

  // Map of background images for the tiles
  const backgroundImages = {
    'tgloss': tglossBackground,
    'tsecure': tsecureBackground,
    'tsmiles': tsmilesBackground,
    'tyre': tyreBackground,
    'bactaklenz': bactaklenzBackground,
    'parts': partsBackground
  };

  // First view services (limited)
  const limitedServices = [
    { 
      id: 'tgloss', 
      title: 'T GLOSS', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#ee1e39', 
      icon: 'TGLOSS',
      backgroundImage: true,
    },
    { 
      id: 'tsecure', 
      title: 'T SECURE', 
      subtitle: 'PROMISE UNMATCHED', 
      color: '#b10018', 
      icon: 'TSECURE',
      backgroundImage: true
    },
    { 
      id: 'parts', 
      title: 'TOYOTA PARTS CONNECT', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: 'CONNECT',
      backgroundImage: true
    },
    { 
      id: 'tsmiles', 
      title: 'T SMILES', 
      subtitle: 'SAVE FOR MILES', 
      color: '#b10018', 
      icon: 'TSMILES',
      backgroundImage: true
    },
    { 
      id: 'tyre', 
      title: 'TYRE PROGRAM', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'tclub', 
      title: 'T CLUB', 
      subtitle: 'UNLOCK CLUB BENEFITS', 
      color: '#b10018', 
      icon: 'TCLUB',
      backgroundImage: false
    },
    { 
      id: 'express', 
      title: 'TOYOTA EXPRESS MAINTENANCE', 
      subtitle: 'MAINTENANCE & SERVICE', 
      color: '#b10018', 
      icon: 'XMAIN',
      backgroundImage: false
    },
    { 
      id: 'bactaklenz', 
      title: 'TOYOTA BACTAKLENZ', 
      subtitle: 'HEALTH PRODUCTS', 
      color: '#b10018', 
      icon: null,
      backgroundImage: true
    },
    
    { 
      id: 'viewall', 
      title: 'VIEW ALL', 
      subtitle: '', 
      color: '#000000', 
      icon: null,
      backgroundImage: false
    },
  ];

  // All services for expanded view
  const allServices = [
    
    { 
      id: 'express', 
      title: 'TOYOTA EXPRESS MAINTENANCE', 
      subtitle: 'MAINTENANCE & SERVICE', 
      color: '#ff4b38', 
      icon: 'XMAIN',
      backgroundImage: false
    },
    { 
      id: 'tclub', 
      title: 'T CLUB', 
      subtitle: 'UNLOCK CLUB BENEFITS', 
      color: '#e7c272', 
      icon: 'TCLUB',
      backgroundImage: false
    },
    { 
      id: 'cost', 
      title: 'TOYOTA COST OF MAINTENANCE', 
      subtitle: 'MAINTENANCE & SERVICE', 
      color: '#ff4b38', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'body', 
      title: 'TOYOTA BODY & PAINT', 
      subtitle: 'BODY & PAINT', 
      color: '#ffd540', 
      icon: 'BODY',
      backgroundImage: true
    },
    { 
      id: 'tsmiles', 
      title: 'T SMILES', 
      subtitle: 'SAVE FOR MILES', 
      color: '#ff6e40', 
      icon: 'TSMILES',
      backgroundImage: true
    },
    { 
      id: 'tassist', 
      title: 'T ASSIST', 
      subtitle: 'CARE ON THE MOVE', 
      color: '#ff8c40', 
      icon: 'TASSIT',
      backgroundImage: false,
      new: true
    },
    { 
      id: 'bactaklenz', 
      title: 'TOYOTA BACTAKLENZ', 
      subtitle: 'HEALTH PRODUCTS', 
      color: '#e7c272', 
      icon: 'BACT',
      backgroundImage: true
    },
    { 
      id: 'caf', 
      title: 'TOYOTA CAF PM2.5', 
      subtitle: 'HEALTH PRODUCTS', 
      color: '#e7c272', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'sanitization', 
      title: 'TOYOTA CAR SANITIZATION', 
      subtitle: 'HEALTH PRODUCTS', 
      color: '#e7c272', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'oil', 
      title: 'TOYOTA MOTOR OIL', 
      subtitle: 'PERFORMANCE PRODUCTS', 
      color: '#ff8c40', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'tsecure', 
      title: 'T SECURE', 
      subtitle: 'PROMISE UNMATCHED', 
      color: '#ff6e40', 
      icon: 'TSECURE',
      backgroundImage: true
    },
    { 
      id: 'injector', 
      title: 'TOYOTA INJECTOR CLEANER', 
      subtitle: 'PERFORMANCE PRODUCTS', 
      color: '#ffb142', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'battery', 
      title: 'BATTERY PROGRAM', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: 'TGLOSS',
      backgroundImage: true
    },
    { 
      id: 'tgloss', 
      title: 'T GLOSS', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: 'TGLOSS',
      backgroundImage: true
    },
    { 
      id: 'tyre', 
      title: 'TYRE PROGRAM', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'essential', 
      title: 'CAR ESSENTIAL STORE', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'decals', 
      title: 'TOYOTA CAR DECALS', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'engine', 
      title: 'TOYOTA ENGINE FLUSH', 
      subtitle: 'PERFORMANCE PRODUCTS', 
      color: '#ff8c40', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'parts', 
      title: 'TOYOTA PARTS CONNECT', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: 'CONNECT',
      backgroundImage: true
    },
    { 
      id: 'accessories', 
      title: 'TOYOTA GENUINE ACCESSORIES', 
      subtitle: 'SERVICE SUPER MARKET', 
      color: '#b10018', 
      icon: 'CONNECT',
      backgroundImage: true
    },
    { 
      id: 'pickup', 
      title: 'PICK-UP AND DROP', 
      subtitle: 'CONVENIENCE', 
      color: '#ffd540', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'express-lite', 
      title: 'TOYOTA SERVICE EXPRESS LITE', 
      subtitle: 'CONVENIENCE', 
      color: '#ffd540', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'iconnect', 
      title: 'I-CONNECT', 
      subtitle: 'STAY CONNECTED', 
      color: '#e7c272', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'talk', 
      title: 'TALK TO TOYOTA', 
      subtitle: 'CONNECT WITH US', 
      color: '#e7c272', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'quick', 
      title: 'TOYOTA QUICK REPAIR', 
      subtitle: 'MAINTENANCE & SERVICE', 
      color: '#ff4b38', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'counterfeit', 
      title: 'NO TO COUNTERFEIT', 
      subtitle: 'FOR YOUR SAFETY', 
      color: '#ff8c40', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'tshield', 
      title: 'T SHIELD', 
      subtitle: 'FOR YOUR SAFETY', 
      color: '#ff8c40', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'manpower', 
      title: 'TOYOTA QUALIFIED MANPOWER', 
      subtitle: 'OUR FRONTLINERS', 
      color: '#ff8c40', 
      icon: null,
      backgroundImage: true
    },
    { 
      id: 'ttep', 
      title: 'TOYOTA TTEP', 
      subtitle: 'OUR FRONT LINERS', 
      color: '#ff6e40', 
      icon: null,
      backgroundImage: false
    },
    { 
      id: 'back', 
      title: '<BACK', 
      subtitle: '', 
      color: '#000000', 
      icon: null,
      backgroundImage: false
    },
  ];

  const renderIcon = (iconKey) => {
    if (!iconKey) return null;
    
    // If we have a logo image for this icon key, use it
    if (logoImages[iconKey]) {
      return (
        <div className="service-icon">
          <img src={logoImages[iconKey]} alt={iconKey} className="service-logo" />
        </div>
      );
    }
    
    // Fallback to text if no logo is available
    return (
      <div className="service-icon">
        <span>{iconKey}</span>
      </div>
    );
  };

  const renderServiceItems = (services) => {
    return services.map(service => (
      <div 
        key={service.id} 
        className={`service-item ${service.id === 'viewall' ? 'view-all' : ''} ${service.id === 'back' ? 'back-button' : ''} ${service.id === 'empty' ? 'empty-item' : ''} ${service.new ? 'new-item' : ''}`}
        style={{ 
          backgroundColor: service.color
        }}
        onClick={() => {
          if (service.id === 'viewall' || service.id === 'back') {
            toggleView();
          }
        }}
      >
        {service.backgroundImage && (
          <div 
            className="service-background-image" 
            style={{ 
              backgroundImage: backgroundImages[service.id] 
                ? `url(${backgroundImages[service.id]})` 
                : `url(/api/placeholder/400/320)` 
            }}
          ></div>
        )}
        {renderIcon(service.icon)}
        <div className="service-info">
          <h3>{service.title}</h3>
          {service.subtitle && <p>{service.subtitle}</p>}
        </div>
        {service.new && <div className="new-tag">NEW</div>}
      </div>
    ));
  };

  return (
    <div className="toyota-service-container">
      <div className="toyota-service-header">
        <h1>Toyota Service</h1>
      
      </div>

      <div className={`toyota-service-grid ${showAll ? 'expanded-view' : 'limited-view'}`}>
        {!showAll ? renderServiceItems(limitedServices) : renderServiceItems(allServices)}
      </div>
    </div>
  );
};

export default ServiceCorner;