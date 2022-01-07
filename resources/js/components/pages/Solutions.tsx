import React from 'react'
import Footer from '../common/Footer'
import Heading from '../common/Heading'

// Components
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
import Edit from './../../../assets/images/edit-size.png'

const Solutions = () => {
 return (
  <div className=" px-4 sm:px-0">
   <Navbar />
   <div className="pt-28">
    <Jumbotron
     header=" Solutions"
     leadingParagraph="Check out the value that we offer to our esteemed cutomers. "
    />

    <div className=" mb-8">
     <Heading
      text="Solutions we offer"
      className=" uppercase font-semibold mb-6"
     />
    </div>

    <div className=" mb-20 sm:px-20">
     <div className="flex flex-col">
      <div className=" flex sm:flex-row flex-col    items-center mb-16  px-4">
       <img src={Edit} alt="" className=" sm:ml-20 sm:mr-20" />
       <div className="flex flex-col sm:ml-20">
        <h2 className=" text-3xl uppercase font-medium text-blue-700 mb-8">
         Works Monitoring{' '}
        </h2>
        <ul className=" list-disc ">
         <li className=" mb-2.5 text-gray-800">
          Email reports from the dashboard to other stakeholders{' '}
         </li>

         <li className=" mb-2.5 text-gray-800">
          Generate reports about the on-going projects
         </li>

         <li className=" mb-2.5 text-gray-800">
          Invite team members for report collaboration
         </li>
        </ul>
       </div>
      </div>

      {/* this is the second image with the bullet points and the image */}

      <div className=" flex sm:flex-row flex-col-reverse   items-center mb-16 sm:px-32 px-4">
       <div className="flex flex-col sm:mr-20">
        <h2 className=" text-3xl uppercase font-medium text-blue-700 mb-8">
         Drone Services
        </h2>
        <ul className=" list-disc">
         <li className=" mb-2.5 text-gray-800">Drone works monitoring. </li>

         <li className=" mb-2.5 text-gray-800">
          Drone thermal imaging for construction sites.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Risk assessment using drones.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Environmental protection compliance using drones.
         </li>
        </ul>
       </div>

       <img src={Edit} alt="" />
      </div>

      {/* this is the third section for the image section and bullet points  */}

      <div className=" flex sm:flex-row flex-col   items-center mb-16  px-4">
       <img src={Edit} alt="" className=" sm:ml-20 sm:mr-20" />
       <div className="flex flex-col ">
        <h2 className=" text-3xl font-medium uppercase text-blue-700 mb-8">
         Image data analysis
        </h2>
        <ul className=" list-disc">
         <li className=" mb-2.5 text-gray-800">
          Image report generation for construction companies.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Report conveyance to construction site managers.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Analyze data from video reports gathered from the site.
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>

   <Footer />
  </div>
 )
}

export default Solutions
