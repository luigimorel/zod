import React from 'react'
import { Pie, Doughnut, Line } from 'react-chartjs-2'
import 'chart.js/auto'

// Start of the component
const AdminDashboardContainer = () => {
 const data = {
  datasets: [
   {
    label: 'Users per payment plan ',
    data: [12, 19, 2, 3],
    backgroundColor: ['#855CF8', '#855CF8', '#263238', '#E289F2'],
    borderColor: ['#855CF8', '#855CF8', '#263238', '#E289F2'],
    labels: ['Basic', 'Deluxe', 'Premium', 'Custom'],
   },
  ],
 }

 const doughnutData = {
  labels: ['Registered', 'New Registered'],
  datasets: [
   {
    data: [300, 100],
    backgroundColor: ['#855CF8', '#CFD8DC'],
    hoverOffset: 4,
   },
  ],
 }

 const lineData = {
  labels: ['Registered', 'New Registered', 'deleted', 'upcoming', 'zero'],
  datasets: [
   {
    data: [300, 100, 200, 20, 32],
    backgroundColor: ['#855CF8', '#CFD8DC', '#C238DC', '#CacdeC', '#CFD8DC'],
    hoverOffset: 4,
   },
  ],
 }

 const barData = {
  labels: ['Registered', 'New Registered'],
  datasets: [
   {
    data: [300, 100],
    backgroundColor: ['#855CF8', '#CFD8DC'],
    hoverOffset: 4,
   },
  ],
 }

 return (
  <div className=" sm:mx-24 mx-4 w-full">
   <div className=" flex sm:flex-row flex-col justify-between">
    <div className=" sm:mb-10 mb-5">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      💰 Users per payment plan
     </h5>

     <p className=" mb-4 font-semibold">Plans that users are paying for. </p>

     <Pie
      data={data}
      height={300}
      options={{
       plugins: {
        legend: {
         display: true,
         position: 'bottom',
        },
       },
      }}
     />
    </div>

    {/* Start of the doughnut chart  */}
    <div className=" sm:mb-10 mb-5">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      📊 User registration
     </h5>
     <p className=" mb-4 font-semibold">Registration sub-information</p>
     <Doughnut
      data={doughnutData}
      height={300}
      options={{
       plugins: {
        legend: {
         display: true,
         position: 'bottom',
        },
       },
      }}
     />
    </div>
   </div>

   <div className=" flex sm:flex-row flex-col justify-between">
    <div className=" sm:mb-10 mb-5">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      📈 User accounts growth
     </h5>
     <p className=" mb-4 font-semibold">Increase in user accounts</p>

     <Line
      // @ts-ignore

      data={barData}
      height={300}
      options={{
       plugins: {
        legend: {
         display: true,
         position: 'bottom',
        },
       },
      }}
     />
    </div>

    {/* Start of the doughnut chart  */}
    <div className=" sm:mb-10 mb-5">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      ⏰ Month’s difference
     </h5>
     <p className=" mb-4 font-semibold">Differene between Nov & Dec</p>

     <Line
      // @ts-ignore
      data={lineData}
      height={300}
      options={{
       plugins: {
        legend: {
         display: true,
         position: 'bottom',
        },
       },
      }}
     />
    </div>
   </div>
  </div>
 )
}

export default AdminDashboardContainer
