import React from 'react';
import './ServiceShop.css';
import serviceshop_image1 from '../../../assets/serviceshop-image1.png'
import serviceshop_image2 from '../../../assets/serviceshop-image2.png'
import serviceshop_image3 from '../../../assets/serviceshop-image3.png'
import serviceshop_image4 from '../../../assets/serviceshop-image4.png'
import serviceshop_image5 from '../../../assets/serviceshop-image5.png'
import serviceshop_image6 from '../../../assets/serviceshop-image6.png'
import serviceshop_image7 from '../../../assets/serviceshop-image7.png'
import serviceshop_image8 from '../../../assets/serviceshop-image8.png'








const tSecureLogo = {serviceshop_image1};
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
      image: serviceshop_image1, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 2, 
      title: "T CLUB", 
      image: serviceshop_image2, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 3, 
      title: "T SMILES", 
      image: serviceshop_image3, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 4, 
      title: "Toyota Genuine Parts", 
      image: serviceshop_image4, 
      buttonType: "WEBSITE",
      description: ""
    },
    { 
      id: 5, 
      title: "Toyota Genuine Accessories", 
      image: serviceshop_image5, 
      buttonType: "WEBSITE",
      description: ""
    },
    { 
      id: 6, 
      title: "Tyre", 
      image: serviceshop_image6, 
      buttonType: "ENQUIRE",
      description: ""
    },
    { 
      id: 7, 
      title: "TGloss", 
      image: serviceshop_image7, 
      buttonType: "ENQUIRE",
      description: ""
    },
    
    { 
      id: 8, 
      title: "Part Distributor", 
      image: serviceshop_image8, 
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