import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from '../../../assets/images/logo-light.png'
import Button from '../common/Button'

const PasswordResetSuccess = () => {
 return (
  <div className="  h-screen pt-16">
   <Link to="/">
    <img src={Logo} className=" mx-auto  h-10 mb-10" alt="" />
   </Link>

   <div className=" sm:w-1/3 tab:w-full mx-auto my-0 ">
    <div className=" sm:px-10 px-4 pb-10 pt-10  sm:pt-32">
     <h2 className=" text-center text-[#212121] font-semibold text-xl mb-10">
      Password has been reset
     </h2>

     <div className=" flex justify-center">
      <Link to={'/accounts/login'}>
       <Button text={'Click here to login'} />
      </Link>
     </div>
    </div>
   </div>
  </div>
 )
}

export default PasswordResetSuccess
