import React from 'react'
import AdminDashboardContainer from '../dashboard/admin/container.dashboard'

// Components
import SidebarDashboard from '../dashboard/admin/sidebar.dashboard'
import DashNav from '../dashboard/clients/dashNav'

const AdminDashboard = () => {
 return (
  <div>
   <div className=" mb-8 ">
    <DashNav />
   </div>

   <div className="flex flex-row">
    <div className=" w-64 ">
     <SidebarDashboard />
    </div>
    <AdminDashboardContainer />
   </div>
  </div>
 )
}

export default AdminDashboard
