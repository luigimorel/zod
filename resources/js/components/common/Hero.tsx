import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import HeroImg from './../../../assets/images/hero.jpg'

// Components
import Button from './Button'

const Hero = () => {
 return (
  <>
   <div className=" flex  sm:flex-row flex-col-reverse   justify-between h-screen w-full sm:mb-10     ">
    <div className=" sm:w-1/2 w-full sm:pt-20 sm:pl-24 tab:pl-12 pl-3  sm:mr-12">
     <h3 className=" sm:text-5xl text-3xl mb-8 font-semibold font-serif uppercase  ">
      Revolutionizing monitoring in the construction industry.
     </h3>

     <p className=" mb-8 text-lg font-medium text-gray-800">
      Pioneers of the constrution industry monitoring in the Sub Saharan Africa
      Region.
     </p>

     <p className=" mb-8 text-lg font-medium text-gray-800">
      We are committed to helping construction industry investors, developers
      and project managers easily get their work done through real time
      monitoring of their construction sites in real time.
     </p>
     <div className="flex justify-center sm:justify-start">
      <Link to="/solutions">
       <Button text="Explore More" className="  " />
      </Link>
     </div>
    </div>

    <div className=" sm:w-1/2 w-full tab:w-full ">
     <img
      src={HeroImg}
      alt=""
      className=" sm:h-5/6 h-screen mt-28 sm:mt-0 w-full"
     />
    </div>
   </div>
  </>
 )
}

export default Hero
