import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceNavbar.css'

const ServiceNavbar = () => {
  return (
    <div>
      <div className="secondary-navbar">
        <div className="secondary-navbar-content">
          <div className="secondary-menu">
            <Link to="/serviceshomepage" className="secondary-menu-item">HOME</Link>
            <Link to="/service-corner" className="secondary-menu-item">SERVICE CORNER</Link>
            <Link to="/book-service" className="secondary-menu-item">BOOK SERVICE APPOINTMENT</Link>
            <Link to="/shop" className="secondary-menu-item active">SHOP</Link>
            <Link to="/genuine-parts" className="secondary-menu-item">BUY TOYOTA GENUINE PARTS</Link>
            <Link to="/part-distributor" className="secondary-menu-item">PART DISTRIBUTOR</Link>
            <Link to="/faq" className="secondary-menu-item">FAQ</Link>
            <Link to="/contactus" className="secondary-menu-item">CONTACT US</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceNavbar
