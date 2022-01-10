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

 return (
  <>
   <div className="flex flex-row justify-between   bg-white fixed tab:relative shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6   ">
    <Link to="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </Link>

    {/* Menu icons for the mobile screens  */}
    <img
     onClick={() => setOpen(!open)}
     className=" sm:hidden tab:inline-block "
     src={MenuIcon}
     alt=""
    />

    <div className="sm:flex tab:hidden hidden flex-row">
     <ul className="sm:flex flex-row justify-between items-center">
      <Link to={'/'}>
       <li className="mr-12 tab:mr-8 text-black font-semibold hover:text-blue-700 text-base">
        Home
       </li>
      </Link>

      <Link to={'/solutions'}>
       <li className="mr-12 tab:mr-8 text-black font-semibold hover:text-blue-700 text-base">
        Solutions{' '}
       </li>
      </Link>
      <Link to={'/contact-us'}>
       <li className="mr-12 tab:mr-8 text-black font-semibold hover:text-blue-700 text-base">
        Contact Us
       </li>
      </Link>
      <Link to={'/accounts/login'}>
       <li className="mr-12 tab:mr-8 text-black font-semibold hover:text-blue-700 text-base">
        Log In{' '}
       </li>
      </Link>

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
