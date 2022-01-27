import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from './Button'

const MobileNavbar = () => {
 const menuLinks = [
  {
   id: 1,
   linkText: 'Home',
   route: '/',
  },
  {
   id: 2,
   linkText: 'Solutions',
   route: '/solutions',
  },

  {
   id: 3,
   linkText: 'Contact Us ',
   route: '/contact-us',
  },
  {
   id: 4,
   linkText: 'Log In ',
   route: '/accounts/login',
  },
 ]

 return (
  <div className=" flex dropdown bg-white w-full animation-container">
   <ul className="dropdown-menu w-full ">
    {menuLinks.map((x) => (
     <li key={x.id} className=" ">
      <Link
       className="  text-black custom-animation w-full bg-white ml-4 custom-transform    text-base mb-4 font-semibold  block whitespace-no-wrap"
       to={x.route}
      >
       {x.linkText}
      </Link>
     </li>
    ))}

    <Link to="/accounts/sign-up">
     <button className="text-center ml-4 w-full mb-8 py-4 bg-primary hover:bg-opacity-80  rounded text-white hover:bg-[#4caceb]">
      Sign Up
     </button>
    </Link>
   </ul>
  </div>
 )
}

export default MobileNavbar
