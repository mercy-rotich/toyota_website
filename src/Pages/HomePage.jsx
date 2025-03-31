import React from 'react'
import Hero from '../Components/HomePageComponents/Hero/Hero'
import Discover from '../Components/HomePageComponents/Discover/Discover'
import WhatsAwesome from '../Components/HomePageComponents/WhatsAwesome/WhatsAwesome'
import MoreFromToyota from '../Components/HomePageComponents/MoreFromToyota/MoreFromToyota'
import PressRelease from '../Components/HomePageComponents/PressRelease/PressRelease'
import SecondNavbar from '../Components/HomePageComponents/SecondNavbar/SecondNavbar'
import SecondHero from '../Components/HomePageComponents/SecondHero/SecondHero'

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
