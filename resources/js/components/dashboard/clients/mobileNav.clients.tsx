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
   route: '/',
  },
 ]

 return (
  <div className=" flex dropdown fixed w-full bg-[#212121] animation-container">
   <ul className="dropdown-menu   w-full">
    {menuLinks.map((x) => (
     <li>
      <Link
       key={x.id}
       className="  text-white custom-animation w-full text-center custom-transform   minor-nav  text-base  py-2  mb-4 font-semibold  block whitespace-no-wrap"
       to={x.route}
      >
       {x.text}
      </Link>
     </li>
    ))}
   </ul>
  </div>
 )
}

export default MobileNavbarClientsDashboard
