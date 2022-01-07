import React, { useState } from 'react'

// Assets
import Logo from './../../../assets/images/logo-light.png'
import MenuIcon from './../../../assets/icons/Menu.svg'

// Components
import DashNav from '../dashboard/clients/dashNav'
import SidebarDashboard from '../dashboard/clients/sidebar.dashboard'
import ClientsDashboard from '../dashboard/clients/clients.dashboard'
import MobileNavbarClientsDashboard from '../dashboard/clients/mobileNav.clients'

const ClientDashboard = () => {
 const [open, setOpen] = useState(false)

 return (
  <div className=" w-full">
   <div className=" mb-4 -ml-8 hidden sm:flex ">
    <DashNav />
   </div>
   <div className="flex flex-row justify-between sm:hidden   bg-white   shadow-sm   w-full sm:px-24 tab:px-12 px-3  items-center py-6 navbar ">
    <a href="/">
     <img src={Logo} alt="" className=" sm:h-10 h-5" />
    </a>

    <img src={MenuIcon} onClick={() => setOpen(!open)} className=" sm:hidden" />
   </div>

   {open && <MobileNavbarClientsDashboard />}

   <div className="flex flex-row w-full pt-4 sm:pt-20">
    <div className=" w-64 hidden sm:flex ">
     <SidebarDashboard />
    </div>
    <ClientsDashboard />
   </div>
  </div>
 )
}

export default ClientDashboard
