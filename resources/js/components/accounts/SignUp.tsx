import React from 'react'
import { Link } from 'react-router-dom'

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

   <div className=" mb-5 sm:pt-32 pt-20 tab:pt-4">
    <Heading text="Sign Up" className=" mb-0 uppercase " />
   </div>
   <div className=" sm:w-3/5 tab:w-4/5 mx-auto my-0 ">
    <div className=" sm:px-32 tab:px-12 px-4 py-8 justify-center">
     <h2 className=" text-center  font-medium mb-10">
      Create an account today on Denebolatech today.
      <br />
      <span className=" font-normal">
       Already have an account?{' '}
       <Link to="/accounts/login" className=" text-primary">
        Log In{' '}
       </Link>
      </span>
     </h2>

     <form action="" method="post">
      <div className="flex sm:flex-row tab:flex-col flex-col justify-between">
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
      </div>

      {/* Company Name */}
      <div className="flex justify-between tab:flex-col flex-col sm:flex-row">
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
