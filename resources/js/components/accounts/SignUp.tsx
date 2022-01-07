import React from 'react'

// Components
import Button from '../common/Button'
import Footer from '../common/Footer'
import Heading from '../common/Heading'
import Navbar from '../common/Navbar'

// Assets

const SignUp = () => {
 return (
  <>
   <Navbar />

   <div className=" mb-10 pt-28">
    <Heading text="Sign Up" className=" uppercase " />
   </div>
   <div className=" sm:w-2/5 mx-auto my-0 ">
    <div className=" sm:px-32 px-4 py-8 justify-center">
     <h2 className=" text-center text-blue-700 font-bold mb-10">
      Create an account today{' '}
     </h2>

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

      {/* Start of the password fields */}

      <div className="flex flex-col">
       <label htmlFor="tel  " className=" mb-2.5">
        Password <span className=" text-red-700">*</span>
       </label>

       <input
        type="password"
        name="password"
        required
        id="password"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Start of the password confirmation  */}
      <div className="flex flex-col">
       <label htmlFor="tel  " className=" mb-2.5">
        Confirm Password <span className=" text-red-700">*</span>
       </label>

       <input
        type="password"
        name="confirmPassword"
        required
        id="confirmPassword"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>
      <div className=" flex justify-center mb-12">
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
