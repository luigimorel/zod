import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbarClientsDashboard = () => {
 const menuLinks = [
  {
   id: 1,
   text: 'Overview',
   route: '/client-dashboard',
  },
  {
   id: 2,
   text: 'Progress Reports',
   route: '/client-dashboard',
  },
  {
   id: 3,
   text: 'Projects',
   route: '/client-dashboard',
  },
  {
   id: 4,
   text: 'Settings',
   route: '/client-dashboard/settings',
  },
  {
   id: 5,
   text: 'Log Out',
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

export default MobileNavbarClientsDashboard
