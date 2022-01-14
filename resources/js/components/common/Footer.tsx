import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import LogoLight from './../../../assets/images/logo-dark.png'
// @ts-ignore
import Twitter from './../../../assets/icons/Twitter.svg'
// @ts-ignore
import FB from './../../../assets/icons/fB.svg'
// @ts-ignore
import Linkedin from './../../../assets/icons/Linkedin.svg'

const Footer = () => {
 return (
  <div className=" bg-cta sm:px-20 tab:px-10 px-8 text-white">
   <div className="flex sm:flex-row flex-col justify-between sm:mr-20 tab:mr-0 mb-5">
    <div className=" mt-11">
     <Link to={'/'}>
      <img src={LogoLight} className=" mb-11 h-10 " alt="" />
     </Link>
     <p className=" text-white ">
      Make faster and more informed data-driven{' '}
      <br className=" sm:flex hidden tab:flex" /> decisions, stay on top of your
      project, <br className=" sm:flex hidden tab:flex" /> and keep all
      stakeholders informed
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
     <h2 className=" text-2xl text-white mb-10">Stay in touch </h2>

     {/* TO DO: Ask for these from the person in charge */}
     <div className=" flex flex-col justify-center mb-4 sm:justify-start">
      <div className="border-white bg-black border-2 h-10 mb-4 w-10 justify-center rounded-full items-center flex">
       <a href="http://" target="_blank" rel="noreferrer noopener">
        <img src={Twitter} alt="" className=" h-5" />{' '}
       </a>
      </div>

      <div className="   border-white border-2 bg-black h-10 w-10 mb-4 justify-center rounded-full items-center flex">
       <a href="http://" target="_blank" rel="noreferrer noopener">
        <img src={FB} alt="" className=" h-5" />
       </a>
      </div>

      <div className="   border-white bg-black border-2 h-10 w-10 mb-4 justify-center rounded-full items-center flex">
       <a href="http://" target="_blank" rel="noreferrer noopener">
        <img src={Linkedin} alt="" className=" h-5" />
       </a>
      </div>
     </div>
    </div>
   </div>

   <hr className=" h-px bg-slate-300" />

   <div className=" flex sm:flex-row flex-col py-5 justify-between">
    <p className=" flex sm:justify-end justify-center text-center">
     © Denebolatech {new Date().getFullYear()}. All rights reserved.
    </p>
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
