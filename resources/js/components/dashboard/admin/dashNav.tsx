import React from 'react'

// Assets
import Logo from './../../../../assets/images/logo.png'
import User from './../../../../assets/images/User.png'
import Notify from './../../../../assets/icons/Notify.svg'

const DashNav = () => {
 return (
  <div className=" sm:px-12 mt-8 ">
   <div className=" flex flex-row items-center shadow-sm justify-between ">
    <img src={Logo} className=" h-10" alt="" />
    <form action="" className="">
     <label htmlFor="search">
      <div className="flex w-full">
       <input
        type="search"
        name="search"
        id="search"
        className=" border border-gray-400 rounded  py-3 "
        placeholder="Search e.g progress"
       />
       <button
        type="submit"
        className=" bg-sidebar rounded  text-white -ml-1  w-20 py-3"
       >
        Search
       </button>
      </div>
     </label>
    </form>
    <div className="flex flex-row items-center">
     <img src={User} alt="" className=" mr-3" />
     <p className=" text-gray-700 pl-3 ">Client User </p>
     <div className=" pl-10">
      <img src={Notify} alt="" className=" ml-10" />
     </div>{' '}
    </div>
   </div>
  </div>
 )
}

export default DashNav
