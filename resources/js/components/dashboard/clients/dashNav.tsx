import React from 'react'
import { Link } from 'react-router-dom'

// Assets
// @ts-ignore
import Logo from './../../../../assets/images/logo-light.png'
// @ts-ignore
import User from './../../../../assets/images/User.png'
// @ts-ignore
import Notify from './../../../../assets/icons/Notify.svg'

// Components
const DashNav = () => {
 return (
  <div className=" sm:px-20 sm:mt-8  h-8 fixed w-full  ">
   <div className=" flex flex-row items-center shadow-sm justify-between ">
    <Link to={'/'}>
     <img src={Logo} className=" h-10" alt="" />
    </Link>
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
        className=" bg-primary rounded  text-white -ml-1  w-20 py-3"
       >
        Search
       </button>
      </div>
     </label>
    </form>

    <div className="flex flex-row items-center">
     <img src={User} alt="" className=" mr-3" />
     <p className=" text-gray-700 pl-3 ">John Doe </p>
     <div className=" pl-10">
      <img src={Notify} alt="" className=" ml-10" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default DashNav
