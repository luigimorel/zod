import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../../assets/images/logo-light.png'

// Components
import DashNav from '../admin/dashNav'
import SidebarDashboard from '../admin/sidebar.dashboard'
import MobileNavbarAdminDashboard from '../admin/mobileNav.admin'

const AdminSettings = () => {
 const [open, setOpen] = useState(false)

 return (
  <>
   <div className=" pb-10 hidden fixed w-full sm:block ">
    <DashNav />
   </div>

   <div className="flex flex-row justify-between sm:hidden   bg-white   shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6 navbar ">
    <Link to="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </Link>
    <p onClick={() => setOpen(!open)} className=" sm:hidden">
     Menu
    </p>

    {open && <MobileNavbarAdminDashboard />}
   </div>

   <div className="flex flex-row w-full pt-4 sm:pt-20">
    <div className=" w-64 hidden sm:flex ">
     <SidebarDashboard />
    </div>
    {/* Start of the form  */}
    <div className=" sm:w-1/3   mx-auto flex justify-center flex-col">
     <p className=" mb-5 text-gray-800 text-lg mt-4 text-center font-bold">
      Admin Details Change
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
       <button className=" bg-sidebar text-center px-8 py-4 text-white ">
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
