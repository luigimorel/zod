import React from 'react'
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2'
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
  labels: ['Registered', 'New Registered'],
  datasets: [
   {
    data: [300, 100],
    backgroundColor: ['#855CF8', '#CFD8DC'],
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
  <div className=" sm:ml-24">
   <div className=" flex flex-row justify-between">
    <div className=" mr-40 ">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      Users per payment plan
     </h5>
     <Pie
      data={data}
      height={600}
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
    <div className="  ">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      User registration
     </h5>
     <p>Registration sub-information</p>
     <Doughnut
      data={doughnutData}
      height={600}
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

   <div className=" flex flex-row justify-between">
    <div className=" mr-12 ">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      User accounts growth
     </h5>
     <p>Increase in user accounts</p>

     <Line
      data={barData}
      height={600}
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
    <div className="  ">
     <h5 className=" text-xl font-bold text-gray-700 mb-3">
      📊 Month’s difference
     </h5>
     <p>Differene between Nov & Dec</p>

     <Line
      data={lineData}
      height={600}
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
