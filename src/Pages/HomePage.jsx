import React from 'react'
import Hero from '../Components/PageComponents/Hero/Hero'
import Discover from '../Components/PageComponents/Discover/Discover'
import WhatsAwesome from '../Components/PageComponents/WhatsAwesome/WhatsAwesome'
import MoreFromToyota from '../Components/PageComponents/MoreFromToyota/MoreFromToyota'
import PressRelease from '../Components/PageComponents/PressRelease/PressRelease'
import SecondNavbar from '../Components/PageComponents/SecondNavbar/SecondNavbar'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SecondNavbar/>
      <Discover/>
      <WhatsAwesome/>
      <PressRelease/>
      <MoreFromToyota/>

    </div>
  )
}

export default HomePage
