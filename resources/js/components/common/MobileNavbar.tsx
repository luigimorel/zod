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
   linkText: 'Our Solution',
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
  <div className=" flex dropdown fixed mt-14 w-full animation-container">
   <ul className="dropdown-menu bg-black   w-full">
    {menuLinks.map((x) => (
     <li key={x.id} className=" ">
      <Link
       className="  text-white custom-animation w-full ml-24 bg-black custom-transform   minor-nav  text-base  py-2  mb-4 font-semibold  block whitespace-no-wrap"
       to={x.route}
      >
       {x.linkText}
      </Link>
     </li>
    ))}

    <Link to="/accounts/sign-up">
     <Button text="Sign Up" className="  ml-24 pb-4" />
    </Link>
   </ul>
  </div>
 )
}

export default MobileNavbar
