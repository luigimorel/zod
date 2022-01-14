import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../assets/images/logo-light.png'
// @ts-ignore
import MenuIcon from './../../../assets/icons/Menu.svg'

// Components
import SidebarDashboard from '../dashboard/admin/sidebar.dashboard'
import DashNav from '../dashboard/admin/dashNav'
import AdminDashboardContainer from '../dashboard/admin/container.dashboard'
import MobileNavbarAdminDashboard from '../dashboard/admin/mobileNav.admin'

const AdminDashboard = () => {
 const [open, setOpen] = useState(false)

 return (
  <div className=" w-full">
   <div className=" mb-4 hidden sm:block ">
    <DashNav />
   </div>
   {/* Start of the mobile navbar */}
   <div className="flex flex-row justify-between sm:hidden   bg-white   shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6 navbar ">
    <Link to="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </Link>

    {/* Start of the menu icon for the mobile screens  */}
    <img src={MenuIcon} onClick={() => setOpen(!open)} className=" sm:hidden" />
   </div>

   {open && <MobileNavbarAdminDashboard />}

   <div className="flex flex-row w-full pt-4 sm:pt-20">
    <div className=" w-64 hidden tab:hidden sm:flex ">
     <SidebarDashboard />
    </div>
    <AdminDashboardContainer />
   </div>
  </div>
 )
}

export default AdminDashboard
