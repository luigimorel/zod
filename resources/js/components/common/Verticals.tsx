import React from 'react'

// Components
import Heading from './Heading'

// Assets
import BranchLight from './../../../assets/Branch.svg'
import BranchDark from './../../../assets/BranchDark.svg'

const Verticals = () => {
 return (
  <div className="">
   <Heading text="Business Verticals" />

   <div className="flex sm:flex-row flex-col sm:px-40 px-8 mb-20">
    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-red-700 ">
      <img src={BranchLight} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Tech
     </p>
    </div>

    {/* this is the second card */}

    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-yellow-500 ">
      <img src={BranchDark} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Drones
     </p>
    </div>

    {/* this is the third card  */}
    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-red-700 ">
      <img src={BranchLight} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Cameras
     </p>
    </div>
   </div>
  </div>
 )
}

export default Verticals
