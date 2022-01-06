import React from 'react'

// Assets
import Video from './../../../../assets/images/video.png'

const ClientsDashboard = () => {
 return (
  <div className=" sm:px-24 px-4 w-full">
   <div className=" flex sm:flex-row flex-col mb-8 justify-between ">
    <div className=" mb-4">
     <h5 className=" text-xl mb-4">Today's Video</h5>
     <img src={Video} alt="" />
    </div>
    {/* Start of the second video container  */}
    <div className=" mb-4">
     <h5 className=" text-xl mb-4">Yesterday's Video</h5>
     <img src={Video} alt="" />
    </div>
   </div>

   {/* Start of the table  */}

   <div className=" rounded border border-gray-400 mb-8 hidden sm:block">
    <div className=" px-10">
     <h4 className=" mt-10 font-bold text-[#858585] mb-11">
      Project’s overview
     </h4>

     <table className=" w-full">
      <tr>
       <th>Date</th>
       <th>Project ID</th>
       <th>Name</th>
       <th>Value</th>
       <th>Status</th>
       <th>Action</th>
      </tr>
      <tr>
       <td className=" px-3 py-3">14/01/2021</td>
       <td className=" px-3 py-3">12345678</td>
       <td className=" px-3 py-3">Gulu Mall Construction</td>
       <td className=" px-3 py-3">$10m</td>
       <td className=" px-3 py-3">
        <p className=" bg-green-700 text-white py-2 px-3">Completed</p>
       </td>
       <td className=" px-3 py-3">...</td>
      </tr>
      <tr>
       <td className=" px-3 py-3">14/01/2021</td>
       <td className=" px-3 py-3">12345678</td>
       <td className=" px-3 py-3">Gulu Mall Construction</td>
       <td className=" px-3 py-3">$10m</td>
       <td className=" px-3 py-3">
        <p className=" bg-yellow-700 text-white py-2 px-3">In Progress</p>
       </td>
       <td className=" px-3 py-3">...</td>
      </tr>

      <tr>
       <td className=" px-3 py-3">14/01/2021</td>
       <td className=" px-3 py-3">12345678</td>
       <td className=" px-3 py-3">Gulu Mall Construction</td>
       <td className=" px-3 py-3">$10m</td>
       <td className=" px-3 py-3">
        <p className=" bg-blue-700 text-white py-2 px-3">Paused</p>
       </td>
       <td className=" px-3 py-3">...</td>
      </tr>
     </table>
    </div>
   </div>
  </div>
 )
}

export default ClientsDashboard
