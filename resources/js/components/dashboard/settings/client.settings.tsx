import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../../assets/images/logo-light.png'
// @ts-ignore
import MenuIcon from './../../../../assets/icons/Menu.svg'

// Components
import DashNav from '../admin/dashNav'
import SidebarDashboard from '../clients/sidebar.dashboard'
import MobileNavbarClientsDashboard from '../clients/mobileNav.clients'

const AdminSettings = () => {
 const [open, setOpen] = useState(false)

 return (
  <>
   <div className="hidden fixed tab:hidden w-full sm:block ">
    <DashNav />
   </div>
   <div className="flex flex-row justify-between sm:hidden tab:block   bg-white   shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6 navbar ">
    <Link to="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </Link>
    <img
     onClick={() => setOpen(!open)}
     className=" sm:hidden tab:block"
     src={MenuIcon}
    />
   </div>

   {open && <MobileNavbarClientsDashboard />}

   <div className="flex flex-row w-full pt-4 sm:pt-20">
    <div className=" w-64 hidden tab:hidden sm:flex ">
     <SidebarDashboard />
    </div>

    {/* Start of the form  */}
    <div className=" sm:w-1/3   mx-auto flex justify-center flex-col">
     <p className=" mb-5 text-gray-800 text-lg mt-4 text-center font-bold">
      Account Details' Change
     </p>
     <form action="" method="post">
      <div className="flex flex-col">
       <label htmlFor="firstName" className=" mb-2.5">
        First Name
       </label>
       <input
        type="text"
        name="firstName"
        required
        id="firstName"
        className="   mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
       <label htmlFor="lastName" className=" mb-2.5">
        Last Name
       </label>
       <input
        type="text"
        name="lastName"
        required
        id="lastName"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>
      {/* Company Name  */}

      {/* Last Name */}
      <div className="flex flex-col">
       <label htmlFor="companyName" className=" mb-2.5">
        Company Name
       </label>
       <input
        type="text"
        required
        name="companyName"
        id="companyName"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>
      {/* Email */}
      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2.5">
        Business Email
       </label>
       <input
        type="email"
        name="email"
        required
        readOnly
        id="email"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>
      {/* Name */}
      <div className="flex flex-col">
       <label htmlFor="tel  " className=" mb-2.5">
        Business Phone Number
       </label>

       <input
        type="tel"
        name="tel"
        required
        id="tel"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>

      {/* Change password */}
      {/* Name */}
      <div className="flex flex-col">
       <label htmlFor="tel  " className=" mb-2.5">
        Change Password
       </label>

       <input
        type="tel"
        name="tel"
        required
        id="tel"
        className=" w-full mb-4 rounded-sm border-gray-400"
       />
      </div>
      <div className=" flex justify-center mb-12">
       <button className=" bg-primary text-center px-8 py-4 text-white ">
        Save Changes
       </button>
      </div>
     </form>
    </div>
   </div>
  </>
 )
}

export default AdminSettings
