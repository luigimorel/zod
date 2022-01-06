import React, { useState } from 'react'

// Assets
import Logo from './../../../assets/images/logo.png'

// Components
import SidebarDashboard from '../dashboard/admin/sidebar.dashboard'
import DashNav from '../dashboard/admin/dashNav'
import AdminDashboardContainer from '../dashboard/admin/container.dashboard'
import MobileNavbarAdminDashboard from '../dashboard/admin/mobileNav.admin'

const AdminDashboard = () => {
 const [open, setOpen] = useState(false)

 return (
  <div>
   <div className=" mb-4 hidden sm:block ">
    <DashNav />
   </div>
   {/* Start of the mobile navbar */}
   <div className="flex flex-row justify-between sm:hidden   bg-white   shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6 navbar ">
    <a href="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </a>
    <p onClick={() => setOpen(!open)} className=" sm:hidden">
     Menu
    </p>

    {open && <MobileNavbarAdminDashboard />}
   </div>
   <div className="flex flex-row w-full pt-4 sm:pt-20">
    <div className=" w-64 hidden sm:flex ">
     <SidebarDashboard />
    </div>
    <AdminDashboardContainer />
   </div>
  </div>
 )
}

export default AdminDashboard
