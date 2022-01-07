import React from 'react'

// Assets
import LogoLight from './../../../assets/images/logo-dark.png'
import Twitter from './../../../assets/icons/Twitter.svg'
import FB from './../../../assets/icons/fB.svg'
import Linkedin from './../../../assets/icons/Linkedin.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
 return (
  <div className=" bg-cta sm:px-20 px-8 text-white">
   <div className="flex sm:flex-row flex-col justify-between sm:mr-20 mb-5">
    <div className=" mt-11">
     <Link to={'/'}>
      <img src={LogoLight} className=" mb-11 h-10 " alt="" />
     </Link>
     <p className=" text-white ">
      Make faster and more informed data-driven decisions, <br />
      stay on top of your project, and keep all stakeholders <br />
      informed
     </p>
    </div>

    <div className="flex flex-col mt-11">
     <h2 className=" text-2xl text-white mb-10">Company </h2>

     <Link to="/" className=" mb-4">
      Home
     </Link>
     <Link to="/accounts/login" className=" mb-4">
      Log In
     </Link>
     <Link to="/accounts/sign-up" className=" mb-4">
      Sign Up
     </Link>

     <Link to="/solutions" className=" mb-4">
      Solutions
     </Link>
     <Link to="/contact-us" className=" mb-4">
      Contact Us
     </Link>
    </div>

    <div className="flex flex-col mt-11">
     <h2 className=" text-2xl text-white mb-10">Resources </h2>

     {/* TO DO: Ask for these from the person in charge */}
     <Link to="#" className=" mb-4">
      Getting Started
     </Link>
     <Link to="#" className=" mb-4">
      FAQ
     </Link>
     <Link to="#" className=" mb-4">
      Become a partner
     </Link>
     <Link to="#" className=" mb-4">
      Terms
     </Link>
     <Link to="#" className=" mb-4">
      Privacy
     </Link>
    </div>
   </div>

   <hr className=" h-px bg-slate-300" />

   <div className=" flex sm:flex-row flex-col py-5 justify-between">
    <div className=" flex flex-row justify-center mb-4 sm:justify-start">
     <div className="border-white bg-black border-2 h-10 mr-8 w-10 justify-center rounded-full items-center flex">
      <img src={Twitter} alt="" className=" h-5" />
     </div>

     <div className="   border-white border-2 bg-black h-10 w-10 mr-8 justify-center rounded-full items-center flex">
      <img src={FB} alt="" className=" h-5" />
     </div>

     <div className="   border-white bg-black border-2 h-10 w-10 mr-8 justify-center rounded-full items-center flex">
      <img src={Linkedin} alt="" className=" h-5" />
     </div>
    </div>

    <p className=" flex sm:justify-end justify-center text-center">
     Built By
     <a
      href="https://luigimorel.me"
      className=" font-bold ml-4"
      target="_blank"
      rel="noreferrer noopenner"
     >
      Luigi Morel
     </a>
    </p>
   </div>
  </div>
 )
}

export default Footer
