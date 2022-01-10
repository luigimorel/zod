import React from 'react'

// Components
import Heading from './Heading'

// Assets
import Camera from './../../../assets/icons/Cameras.svg'
import Building from './../../../assets/icons/Building.svg'
import Plane from './../../../assets/icons/Plane.svg'

const Verticals = () => {
 return (
  <div className="">
   <div className=" mb-4">
    <Heading text="BUSINESS VERTICALS" className=" font-sans font-bold " />
   </div>

   <div className="flex sm:flex-row flex-col px-8 sm:px-0 justify-center   mb-20">
    {/* this is the first card  */}
    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-[#3aa6ef] ">
      <img src={Building} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Smart Construction Site
     </p>
    </div>

    {/* this is the second card */}

    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-yellow-500 ">
      <img src={Plane} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Artificial Intelligence
     </p>
    </div>

    {/* this is the third card  */}
    <div className=" flex flex-col ">
     <div className=" py-10 px-24 bg-[#3aa6ef] ">
      <img src={Camera} alt="" />
     </div>
     <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100 text-center sm:text-left  font-semibold">
      Actionable Insights
     </p>
    </div>
   </div>
  </div>
 )
}

export default Verticals
