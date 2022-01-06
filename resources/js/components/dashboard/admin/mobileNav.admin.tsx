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
  <div className=" flex dropdown   w-full animation-container">
   <ul className="dropdown-menu   w-full">
    {menuLinks.map((x) => (
     <a
      key={x.id}
      className="  text-black custom-animation w-full ml-24 bg-white custom-transform   minor-nav  text-base  py-2  mb-4 font-semibold  block whitespace-no-wrap"
      href={x.route}
     >
      {x.text}
     </a>
    ))}
   </ul>
  </div>
 )
}

export default MobileNavbarAdminDashboard
