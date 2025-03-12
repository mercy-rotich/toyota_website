import React from 'react'
import Navbar from './Components/Common/Navbar/Navbar'
import Footer from './Components/Common/Footer/Footer'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactUsPage from './Pages/ContactUs/ContactUs'
import MainServices from './Components/PageComponents/MainServices/MainServices'

const App = () => {
  return (
    <div>

      
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        <Route path='/mainservices' element={<MainServices/>}/>

      </Routes>
      <Footer/>
      
      
    </div>
  )
}

export default App
