import React from 'react'
import Navbar from './Components/Common/Navbar/Navbar'
import Footer from './Components/Common/Footer/Footer'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div>

      
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  )
}

export default App
