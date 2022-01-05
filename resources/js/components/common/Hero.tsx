import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import HeroImg from './../../../assets/images/hero.jpg'

// Components
import Button from './Button'

const Hero = () => {
 return (
  <>
   <div className=" flex  sm:flex-row flex-col-reverse   justify-between h-screen w-full mb-20 sm:px-24 tab:px-12 px-3 ">
    <div className=" sm:w-1/2 w-full sm:mt-24 sm:mr-12">
     <h3 className=" sm:text-5xl text-3xl mb-8 uppercase font-sans">
      Revolutionizing monitoring in the construction industry.
     </h3>

     <p className=" mb-8 text-lg text-gray-700">
      Pioneers of the constrution industry monitoring in the Sub Saharan Africa
      Region.
     </p>

     <p className=" mb-8 text-lg text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam
      possimus, ipsa at consectetur accusantium? Voluptas aut sed suscipit quod!
     </p>

     <Link to="/solutions">
      <Button text="Explore More" className="  " />
     </Link>
    </div>

    <div className=" sm:w-1/2 w-full tab:w-full ">
     <img
      src={HeroImg}
      alt=""
      className=" sm:h-4/5 h-screen mt-28 sm:mt-0 w-full"
     />
    </div>
   </div>
  </>
 )
}

export default Hero
