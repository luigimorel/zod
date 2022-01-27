import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from '../../../assets/images/logo-light.png'

// Components
import Button from '../common/Button'

const RecoverPassword = () => {
 return (
  <div className="  h-screen pt-16">
   <Link to="/">
    <img src={Logo} className=" mx-auto  h-10 mb-10" alt="" />
   </Link>

   <div className=" sm:w-1/3 tab:w-2/3 mx-auto my-0 ">
    <div className=" sm:px-10 px-4 pb-10 pt-10">
     <h2 className=" text-center text-blue-700 font-bold text-xl mb-10">
      Recover your account
     </h2>
     <p className=" sm:pb-8 pb-4">
      Please enter your email address. You will receive a password reset link in
      your inbox.
     </p>

     <form action="" method="post">
      <div className="flex flex-col">
       <input
        type="email"
        name="email"
        id="email"
        className=" w-full mb-6 py-3 bg-white focus:bg-white rounded-sm border-gray-400"
       />

       <div className="mx-auto">
        <Button text="Recover account" />
       </div>
      </div>
     </form>
    </div>
   </div>
  </div>
 )
}

export default RecoverPassword
