import React from 'react'
import './MainServices.css'
import Shop from '../../../Components/PageComponents/Shop/Shop'

const MainServices = () => {
  return (
    <div>
        
        <div className="secondary-navbar">
        <div className="secondary-navbar-content">
          <div className="secondary-menu">
            <a href="#" className="secondary-menu-item">HOME</a>
            <a href="#" className="secondary-menu-item">SERVICE CORNER</a>
            <a href="#" className="secondary-menu-item">BOOK SERVICE APPOINTMENT</a>
            <a href="#" className="secondary-menu-item active">SHOP</a>
            <a href="#" className="secondary-menu-item">BUY TOYOTA GENUINE PARTS</a>
            <a href="#" className="secondary-menu-item">PART DISTRIBUTOR</a>
            <a href="#" className="secondary-menu-item">FAQ</a>
            <a href="#" className="secondary-menu-item">CONTACT US</a>
          </div>
        </div>
      </div>

      <Shop/>
    </div>
  )
}

export default MainServices
