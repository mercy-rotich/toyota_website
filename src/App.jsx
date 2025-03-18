import React from 'react'
import Navbar from './Components/Common/Navbar/Navbar'
import Footer from './Components/Common/Footer/Footer'
import { Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactUsPage from './Pages/ContactUs/ContactUs'
import MainServices from './Pages/Services/MainServices/MainServices'
import Shop from './Components/PageComponents/Shop/Shop'
import ServicesContact from './Components/PageComponents/ServicesContact/ServicesContact'


const App = () => {
  
  
  return (
    <div>

      
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        <Route path='/mainservices' element={<MainServices/>}/>
        <Route path='/serviceshome' element={<MainServices/>}/>
        <Route path='/service-corner' element={<MainServices/>}/>
        <Route path='/book-service' element={<MainServices/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/genuine-parts' element={<MainServices/>}/>
        <Route path='/part-distributor' element={<MainServices/>}/>
        <Route path='/faq' element={<MainServices/>}/>
        <Route path='/contact' element={<ServicesContact/>}/>
        
       

        
        

      </Routes>
      
      <Footer/>
      
      
    </div>
  )
}

export default App
