import React from 'react'

// Components
import CallToAction from '../common/CallToAction'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import IconsSection from '../common/IconsSection'
import ImageSection from '../common/ImageSection'
import Navbar from '../common/Navbar'
import Verticals from '../common/Verticals'

const Home = () => {
 return (
  <>
   <div className="tab:mb-20">
    <Navbar />
   </div>

   <div className="pt-28 mb-20 sm:mb-0">
    <Hero />
   </div>
   <Verticals />

   <CallToAction />

   <div className=" pt-10 bg-white ">
    <IconsSection />
   </div>

   <div className="mt-14">
    <ImageSection />
   </div>

   <Footer />
  </>
 )
}

export default Home
