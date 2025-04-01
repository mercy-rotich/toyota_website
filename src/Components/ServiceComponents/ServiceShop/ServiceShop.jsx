import React from 'react';
import './ServiceShop.css';


const tSecureLogo = "/images/t-secure-logo.png";
const tClubLogo = "/images/t-club-logo.png";
const tSmileLogo = "/images/t-smile-logo.png";
const genuinePartsLogo = "/images/genuine-parts-logo.png";
const genuineAccessoriesLogo = "/images/genuine-accessories-logo.png";
const tyreLogo = "/images/tyre-logo.png";
const tGlossLogo = "/images/tgloss-logo.png";
const partDistributorLogo = "/images/part-distributor-logo.png";

const ServiceShop = () => {

  const topRowItems = [
    { 
      id: 1, 
      title: "T SECURE", 
      image: tSecureLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 2, 
      title: "T CLUB", 
      image: tClubLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 3, 
      title: "T SMILES", 
      image: tSmileLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 4, 
      title: "Toyota Genuine Parts", 
      image: genuinePartsLogo, 
      buttonType: "WEBSITE",
      description: ""
    },
    { 
      id: 5, 
      title: "Toyota Genuine Accessories", 
      image: genuineAccessoriesLogo, 
      buttonType: "WEBSITE",
      description: ""
    },
    { 
      id: 6, 
      title: "Tyre", 
      image: tyreLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 7, 
      title: "TGloss", 
      image: tGlossLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
    
    { 
      id: 9, 
      title: "Part Distributor", 
      image: partDistributorLogo, 
      buttonType: "ENQUIRE",
      description: ""
    },
  ];

  
  const renderShopItem = (item) => (
    <div className="shop-item" key={item.id}>
      <div className="shop-item-content">
        <div className="shop-item-image-container">
          <img src={item.image} alt={item.title} className="shop-item-image" />
        </div>
        <div className="shop-item-title">{item.title}</div>
        {item.description && <div className="shop-item-description">{item.description}</div>}
      </div>
      <div className="shop-item-button-container">
        <button className={`shop-item-button ${item.buttonType.toLowerCase()}`}>
          <span className="button-icon"></span>
          <span className="button-text">{item.buttonType}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="shop-page-container">
      <h1 className="shop-heading">Shop</h1>
      
      <div className="enquiries-link">
        <a href="#">ENQUIRIES</a>
      </div>
      
      <div className="shop-items-grid">
        <div className="shop-items-row">
          {topRowItems.map(item => renderShopItem(item))}
        </div>
        
      
      </div>
    </div>
  );
};

export default ServiceShop;