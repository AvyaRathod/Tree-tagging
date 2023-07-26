import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
//import UserLoginStore from '../../contexts/UserLoginStore'

function Rootlayot() {
  return (
    <div className="rootlayot">
      <div className="content-container">
      <Navbar/>
      </div>
      <div className="container">
      
      
        <Outlet/>
     
      </div>
      <div className="footer-container">
      <Footer />
      </div>
        
    </div>
  )
}

export default Rootlayot