import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from './Button'

const Hero = () => {
 return (
  <>
   <div className=" flex px-4  sm:flex-row tab:flex-col-reverse pt-12 flex-col-reverse items-center relative   justify-between  w-full sm:mb-20     ">
    <div className=" sm:w-1/2 w-full tab:w-full tab:mb-10  sm:pl-24 tab:pl-12 pl-3 tab:mr-0 tab:px-4  sm:mr-12">
     <h3 className=" sm:text-5xl text-3xl mb-8 font-sans font-semibold uppercase  ">
      CONSTRUCTION SITE MONITORING{' '}
      <span className=" text-red-700">
       SIMPLIFIED<span className=" text-primary">...</span>
      </span>
     </h3>

     <p className=" mb-12 text-lg sm:mr-4 text-gray-800">
      We are committed to helping construction industry investors, developers
      and project managers easily get their work done through real time
      monitoring of their construction sites.
     </p>
     <div className="flex justify-center mb-10 sm:justify-start">
      <Link to="/solutions">
       <Button text="Explore More" className="  " />
      </Link>
     </div>
    </div>

    <div className=" sm:w-1/2 w-full tab:w-full  tab:mb-20 mb-8 sm:mt-0 tab:mt-10 sm:mb-0 sm:border-cta tab:border-none border-none  rounded-3xl tab:rounded-3-xl tab:border-2 border-8 tab:mr-0 tab:px-8  sm:mr-12 ">
     <img
      src={
       'https://res.cloudinary.com/morelmiles/image/upload/v1641589820/contruction_img_gxsiok.jpg'
      }
      alt=""
      className=" w-full sm:h-3/5 h-auto tab:h-auto tab:mb-10 rounded-2xl"
     />
    </div>
   </div>
  </>
 )
}

export default Hero
