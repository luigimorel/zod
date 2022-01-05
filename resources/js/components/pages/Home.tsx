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
   <Navbar />
   <div className="pt-28">
    <Hero />
   </div>
   <Verticals />

   <CallToAction />

   <div className=" mt-10">
    <IconsSection />
   </div>

   <div className=" mt-10">
    <ImageSection />
   </div>

   <Footer />
  </>
 )
}

export default Home
