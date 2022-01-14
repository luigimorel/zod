import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbarAdminDashboard = () => {
 const menuLinks = [
  {
   id: 1,
   text: 'Overview',
   route: '/admin-dashboard',
  },
  {
   id: 2,
   text: 'Statistics',
   route: '/admin-dashboard',
  },
  {
   id: 3,
   text: 'Settings',
   route: '/admin-dashboard/settings',
  },
  {
   id: 4,
   text: 'Logout',
   route: '/admin-dashboard/settings',
  },
 ]

 return (
  <div className=" flex dropdown fixed w-full bg-[#212121] animation-container">
   <ul className="dropdown-menu   w-full">
    {menuLinks.map((x) => (
     <Link
      key={x.id}
      className="  text-white custom-animation w-full text-center custom-transform   minor-nav  text-base  py-2  mb-4 font-semibold  block whitespace-no-wrap"
      to={x.route}
     >
      {x.text}
     </Link>
    ))}
   </ul>
  </div>
 )
}

export default MobileNavbarAdminDashboard
