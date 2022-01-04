import React from 'react'

// Components
import Button from '../common/Button'
import Footer from '../common/Footer'
import Heading from '../common/Heading'
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
import HeroImg from './../../../assets/images/hero.jpg'

const SignUp = () => {
 return (
  <>
   <Navbar />

   <div className=" mb-10 pt-28">
    <Heading text="We are here to help" className=" uppercase " />
   </div>
   <div className=" flex  sm:flex-row flex-col px-4  sm:px-20 sm:mb-20">
    <div className=" w-1/2 mr-16 h-auto">
     <img src={HeroImg} className=" w-full h-auto" alt="" />
    </div>

    <div className=" sm:w-1/2 w-full justify-center">
     <form action="" method="post">
      <div className="flex flex-col">
       <label htmlFor="firstName" className=" mb-2.5">
        First Name <span className=" text-red-700">*</span>{' '}
       </label>
       <input
        type="text"
        name="firstName"
        required
        id="firstName"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
       <label htmlFor="lastName" className=" mb-2.5">
        Last Name <span className=" text-red-700">*</span>{' '}
       </label>
       <input
        type="text"
        name="lastName"
        required
        id="lastName"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Company Name  */}

      {/* Last Name */}
      <div className="flex flex-col">
       <label htmlFor="companyName" className=" mb-2.5">
        Company Name <span className=" text-red-700">*</span>{' '}
       </label>
       <input
        type="text"
        required
        name="companyName"
        id="companyName"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Email */}
      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2.5">
        Business Email <span className=" text-red-700">*</span>
       </label>
       <input
        type="email"
        name="email"
        required
        id="email"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Name */}
      <div className="flex flex-col">
       <label htmlFor="tel  " className=" mb-2.5">
        Business Phone Number <span className=" text-red-700">*</span>
       </label>

       <input
        type="tel"
        name="tel"
        required
        id="tel"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      <div className=" flex justify-center ">
       <Button text="Submit" />
      </div>
     </form>
    </div>
   </div>

   <Footer />
  </>
 )
}

export default SignUp
