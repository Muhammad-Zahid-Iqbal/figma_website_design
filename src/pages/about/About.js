import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Introduction from '../../components/how-we-are/Introduction'
import Whychooseus from '../../components/why-choose-us/Whychooseus'
import Detailabout from '../../components/about-detail/Detailabout'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='about_main'>
            <h2>About</h2>
        </div>
        <Introduction/>
        <Whychooseus/>
        <Detailabout/>
        <Footer/>
    </div>
  )
}

export default About