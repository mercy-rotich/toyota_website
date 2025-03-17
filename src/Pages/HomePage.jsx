import React from 'react'
import Hero from '../Components/PageComponents/HomePageComponents/Hero/Hero'
import Discover from '../Components/PageComponents/HomePageComponents/Discover/Discover'
import WhatsAwesome from '../Components/PageComponents/HomePageComponents/WhatsAwesome/WhatsAwesome'
import MoreFromToyota from '../Components/PageComponents/HomePageComponents/MoreFromToyota/MoreFromToyota'
import PressRelease from '../Components/PageComponents/HomePageComponents/PressRelease/PressRelease'
import SecondNavbar from '../Components/PageComponents/HomePageComponents/SecondNavbar/SecondNavbar'
import SecondHero from '../Components/PageComponents/HomePageComponents/SecondHero/SecondHero'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SecondNavbar/>
      <SecondHero/>
      <Discover/>
      <WhatsAwesome/>
      <PressRelease/>
      <MoreFromToyota/>

    </div>
  )
}

export default HomePage
