import React from 'react'
import DashNav from '../dashboard/clients/dashNav'
import SidebarDashboard from '../dashboard/clients/sidebar.dashboard'
import ClientsDashboard from '../dashboard/clients/clients.dashboard'

const ClientDashboard = () => {
 return (
  <div className=" min-w-full">
   <div>
    <div className=" mb-8 ">
     <DashNav />
    </div>

    <div className="flex flex-row">
     <div className=" w-64 ">
      <SidebarDashboard />
     </div>
     <ClientsDashboard />
    </div>
   </div>
  </div>
 )
}

export default ClientDashboard
