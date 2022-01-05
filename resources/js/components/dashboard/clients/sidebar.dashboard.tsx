import React from 'react'

// Assets
import Eye from './../../../../assets/icons/Eye.svg'
import Settings from './../../../../assets/icons/Settings.svg'
import Graph from './../../../../assets/icons/Graph.svg'
import SignOut from './../../../../assets/icons/SignOut.svg'

const sidebarNav = [
 {
  id: 1,
  text: 'Overview',
  icon: Eye,
 },
 {
  id: 2,
  text: 'Progress Reports',
  icon: Graph,
 },
 {
  id: 3,
  text: 'Projects',
  icon: Graph,
 },
 {
  id: 4,
  text: 'Settings',
  icon: Settings,
 },
 {
  id: 5,
  text: 'Log Out',
  icon: SignOut,
 },
]
const SidebarDashboard = () => {
 return (
  <div className=" w-64 border-r fixed h-full flex flex-col">
   <div className=" mb-20">
    {sidebarNav.map((x) => (
     <div
      key={x.id}
      className={
       x.id === 1
        ? ' ml-10 flex flex-row mb-4 bg-sidebar items-center py-4 rounded-r-full pl-5 text-white font-bold '
        : ' ml-10 flex flex-row mb-4  items-center py-4  pl-5    '
      }
     >
      <img src={x.icon} alt="" />

      <p className=" ml-2.5">{x.text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default SidebarDashboard
