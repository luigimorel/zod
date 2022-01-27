import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from '../../../assets/images/logo-light.png'

// Components
import Button from '../common/Button'

const RecoveryAccountSuccess = () => {
 return (
  <div className="  h-screen pt-16">
   <Link to="/">
    <img src={Logo} className=" mx-auto  h-10 mb-10" alt="" />
   </Link>

   <div className=" sm:w-1/3 tab:w-full mx-auto my-0 ">
    <div className=" sm:px-10 px-4 pb-10 pt-10  sm:pt-32">
     <h2 className=" text-center text-blue-700 font-semibold text-xl mb-10">
      Email has been sent 🚀
     </h2>
     <p className=" text-center sm:pb-8 pb-4">
      Please check your email inbox for the password recovery link.
     </p>
    </div>
   </div>
  </div>
 )
}

export default RecoveryAccountSuccess
