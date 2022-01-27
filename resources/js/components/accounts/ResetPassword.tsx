import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../assets/images/logo-light.png'

const ResetPassword = () => {
 return (
  <div>
   <Link to="/">
    <img src={Logo} className=" mx-auto mt-16 h-10 mb-10" alt="" />
   </Link>

   <div className=" sm:w-1/3 tab:w-2/3 mx-auto my-0 bg-white">
    <div className=" px-10 pb-10 pt-10">
     <h2 className=" text-center text-blue-700 font-bold text-xl mb-10">
      Choose a new password
     </h2>

     {/* Start of the form */}
     <form action="" method="post">
      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2">
        New Password
       </label>
       <input
        type="password"
        name="password"
        id="password"
        className=" w-full mb-3 rounded-sm border-gray-400"
       />
      </div>

      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2">
        Confirm New  Password
       </label>
       <input
        type="password"
        name="password"
        id="password"
        className=" w-full mb-8 rounded-sm border-gray-400"
       />
      </div>

      <div className=" flex justify-center mb-8 ">
       <button
        type="submit"
        className="  text-center px-8 py-3 w-full bg-primary hover:bg-opacity-80  rounded text-white hover:bg-[#4caceb]"
       >
        Reset Password
       </button>
      </div>
     </form>

     <p className=" text-center">
      Don't have an account?{'  '}
      <span className=" text-blue-700 font-bold">
       <Link to="/accounts/sign-up">Sign Up</Link>
      </span>
     </p>
    </div>
   </div>
  </div>
 )
}

export default ResetPassword
