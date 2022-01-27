import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../assets/images/logo-light.png'

const SignIn = () => {
 return (
  <div>
   <Link to="/">
    <img src={Logo} className=" mx-auto mt-16 h-10 mb-10" alt="" />
   </Link>

   <div className=" sm:w-1/3 tab:w-2/3 mx-auto my-0 border  border-gray-400">
    <div className=" px-10 pb-10 pt-10">
     <h2 className=" text-center text-blue-700 font-bold text-xl mb-10">
      Log In
     </h2>

     {/* Start of the form */}
     <form action="" method="post">
      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2">
        Email
       </label>
       <input
        type="email"
        name="email"
        id="email"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2">
        Password
       </label>
       <input
        type="password"
        name="password"
        id="password"
        className=" w-full mb-3 rounded-sm border-gray-400"
       />
      </div>

      <div className="flex justify-end flex-row mb-4">
       <p>
        <Link to={'/accounts/recover-account'} className=" text-blue-700">
         Forgot password?
        </Link>
       </p>
      </div>

      <div className=" flex justify-center mb-8 ">
       <button className="  text-center px-8 py-3 w-full bg-primary hover:bg-opacity-80  rounded text-white hover:bg-[#4caceb]">
        Log In
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

export default SignIn
