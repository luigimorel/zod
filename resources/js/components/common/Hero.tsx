import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import HeroImg from './../../../assets/images/hero.jpg'

// Components
import Button from './Button'

const Hero = () => {
 return (
  <>
   <div className=" flex sm:-mt-12  sm:flex-row flex-col-reverse items-center   justify-between h-screen w-full sm:mb-10     ">
    <div className=" sm:w-1/2 w-full   sm:pl-24 tab:pl-12 pl-3  sm:mr-12">
     <h3 className=" sm:text-5xl text-3xl mb-8 font-sans font-semibold uppercase  ">
      CONSTRUCTION SITE MONITORING SIMPLIFIED
     </h3>

     <p className=" mb-8 text-lg text-gray-800">
      We are committed to helping construction industry investors, developers
      and project managers easily get their work <br /> done through real time
      monitoring of their <br /> construction sites in real time.
     </p>
     <div className="flex justify-center sm:justify-start">
      <Link to="/solutions">
       <Button text="Explore More" className="  " />
      </Link>
     </div>
    </div>

    <div className=" sm:w-1/2 w-full tab:w-full mr-12 ">
     <img
      src={
       'https://res.cloudinary.com/morelmiles/image/upload/v1641589820/contruction_img_gxsiok.jpg'
      }
      alt=""
      className=" rounded w-auto h-3/5"
     />
    </div>
   </div>
  </>
 )
}

export default Hero
