import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Assets
// @ts-ignore

import MenuIcon from './../../../assets/icons/Menu.svg'
// @ts-ignore
import Logo from './../../../assets/images/logo-light.png'

// Components
import Button from './Button'
import MobileNavbar from './MobileNavbar'

const menuLinks = [
 {
  id: 1,
  text: 'Home',
  route: '/',
 },
 {
  id: 2,
  text: 'Solutions',
  route: '/solutions',
 },
 {
  id: 3,
  text: 'Contact Us',
  route: '/contact-us',
 },
 {
  id: 4,
  text: 'Log In',
  route: '/accounts/login',
 },
]
const Navbar = () => {
 const [open, setOpen] = useState(false)
 const router = useLocation()

 return (
  <>
   <div className="flex flex-row justify-between   bg-white tab:relative shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6   ">
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
      {menuLinks.map((x) => (
       <NavLink
        key={x.id}
        to={x.route}
        className={
         router.pathname === x.route
          ? 'mr-12 tab:mr-8 py-2 font-semibold text-blue-700 border-blue-400 border-b-2 text-base'
          : 'mr-12 tab:mr-8 py-2 text-black font-semibold hover:border-blue-400 text-base'
        }
       >
        {x.text}
       </NavLink>
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
