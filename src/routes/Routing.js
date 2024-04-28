import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Appointment from '../components/appointment/Appointment'
import Services from '../components/services/Services'
import Phonereparing from '../components/phone-reparing/Phonereparing'
import Ourself from '../components/how-we-are/Ourself'
import Footer from '../components/footer/Footer'
import Testimonial from '../components/testimonial/Testimonial'
import About from '../pages/about/About'
import Banner from '../components/banner-area/Banner'
import Introduction from '../components/how-we-are/Introduction'
import Contact from '../pages/contact/Contact'

const Routing = () => {
  return (
    <div>
        <Routes>
        {/* <Route path='/' element={<Banner/>}/> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/phonereparing' element={<Phonereparing/>}/>
            <Route path='/ourself' element={<Ourself/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/testimonial' element={<Testimonial/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/introduction' element={<Introduction/>}/>
        </Routes>
    </div>
  )
}

export default Routing