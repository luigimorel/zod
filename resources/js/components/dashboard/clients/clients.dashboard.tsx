import React from 'react'

// Assets
// @ts-ignore
import VideoOne from './../../../../assets/icons/VideoTwo.svg'
// @ts-ignore
import VideoTwo from './../../../../assets/icons/VideoOne.svg'

const ClientsDashboard = () => {
 return (
  <div className=" sm:px-20 px-4 w-full">
   <div className=" flex sm:flex-row flex-col mb-8 justify-between ">
    <div className=" mb-4">
     <h5 className=" text-xl mb-4">Today's Video</h5>
     <img src={VideoOne} alt="" />
    </div>
    {/* Start of the second video container  */}
    <div className=" mb-4">
     <h5 className=" text-xl mb-4">Yesterday's Video</h5>
     <img src={VideoTwo} alt="" />
    </div>
   </div>

   {/* Start of the table  */}

   <div className=" rounded border border-gray-400 mb-8 hidden sm:block">
    <div className=" px-10">
     <h4 className=" mt-10 font-bold text-[#858585] mb-11">
      Project’s overview
     </h4>

     <table className=" w-full">
      <tr className=" border-b-2 border-b-blue-200 pb-2.5">
       <th className=" text-left pl-3 ">Date</th>
       <th className=" text-left pl-3">Project ID</th>
       <th className=" text-left pl-3">Name</th>
       <th className=" text-left pl-3">Value</th>
       <th className=" text-left pl-3">Status</th>
       <th className=" text-left pl-3">Action</th>
      </tr>
      <tr>
       <td className=" px-3 py-3 font-semibold">04/01/2021</td>
       <td className=" px-3 py-3">us67dsx</td>
       <td className=" px-3 py-3">Gulu Mall Construction</td>
       <td className=" px-3 py-3">UGX 200m</td>
       <td className=" px-3 py-3">
        <p className=" bg-green-700 text-white text-center py-2 px-2">
         Completed
        </p>
       </td>
       <td className=" px-3 py-3">...</td>
      </tr>
      <tr>
       <td className=" px-3 py-3 font-semibold">06/01/2021</td>
       <td className=" px-3 py-3">sa893nw</td>
       <td className=" px-3 py-3">City Road</td>
       <td className=" px-3 py-3">UGX 100M</td>
       <td className=" px-3 py-3">
        <p className=" bg-yellow-600 text-white text-center py-2 px-2">
         In Progress
        </p>
       </td>
       <td className=" px-3 py-3">...</td>
      </tr>

      <tr>
       <td className=" px-3 py-3 font-semibold">14/06/2021</td>
       <td className=" px-3 py-3">ew32kl8</td>
       <td className=" px-3 py-3">Bidi School Construction</td>
       <td className=" px-3 py-3">UGX 54m</td>
       <td className=" px-3 py-3">
        <p className=" bg-blue-700 text-white text-center py-2 px-2">Paused</p>
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
