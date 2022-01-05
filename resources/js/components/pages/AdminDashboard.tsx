import React from 'react'
import AdminDashboardContainer from '../dashboard/admin/container.dashboard'

// Components
import SidebarDashboard from '../dashboard/admin/sidebar.dashboard'
import DashNav from '../dashboard/clients/dashNav'

const AdminDashboard = () => {
 return (
  <div>
   <div className=" mb-4 hidden sm:block ">
    <DashNav />
   </div>

   <div className="flex flex-row w-full pt-20">
    <div className=" w-64 hidden sm:flex ">
     <SidebarDashboard />
    </div>
    <AdminDashboardContainer />
   </div>
  </div>
 )
}

export default AdminDashboard
