import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Assets
import MenuIcon from './../../../assets/icons/Menu.svg'
import Logo from './../../../assets/images/logo-light.png'

// Components
import Button from './Button'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
 const [open, setOpen] = useState(false)

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
  <>
   <div className="flex flex-row justify-between   bg-white fixed shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6   ">
    <a href="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </a>

    {/* Menu icons for the mobile screens  */}
    <img
     onClick={() => setOpen(!open)}
     className=" sm:hidden"
     src={MenuIcon}
     alt=""
    />

    <div className="sm:flex hidden flex-row">
     <ul className="sm:flex flex-row justify-between items-center">
      {menuLinks.map((x) => (
       <a key={x.id} href={x.route}>
        <li className="mr-12 tab:mr-8 text-black font-semibold hover:text-blue-700 text-base">
         {x.linkText}
        </li>
       </a>
      ))}

      <Link to="/accounts/sign-up">
       <Button text="Sign Up" className="  " />
      </Link>
     </ul>
    </div>
   </div>
   {open && <MobileNavbar />}
  </>
 )
}

export default Navbar
