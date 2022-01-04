import React from 'react'
import Footer from '../common/Footer'
import Heading from '../common/Heading'

// Components
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
import Service from './../../../assets/images/service.png'

const Solutions = () => {
 return (
  <>
   <Navbar />
   <div className="pt-28">
    <Jumbotron
     header=" Here is the heading"
     leadingParagraph="Lorem ipsum dolor sit amet consectetur. "
    />

    <Heading
     text="Solutions we offer"
     className=" uppercase font-semibold mb-6"
    />

    <div className=" mb-20 sm:px-20">
     <div className="flex flex-col">
      <div className=" flex flex-row   items-center mb-12 px-32">
       <img src={Service} alt="" />
       <div className="flex flex-col sm:ml-20">
        <h2 className=" text-4xl text-blue-700 mb-8">Lorem, ipsum.</h2>
        <ul className=" list-disc">
         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>
        </ul>
       </div>
      </div>

      {/* this is the second image with the bullet points and the image */}

      <div className=" flex flex-row justify-between items-center mb-8 px-32    ">
       <div className="flex flex-col sm:mr-20">
        <h2 className=" text-4xl text-blue-700 mb-8">Lorem, ipsum.</h2>
        <ul className=" list-disc">
         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>

         <li className=" mb-2.5 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
         </li>
        </ul>
       </div>

       <img src={Service} alt="" />
      </div>
     </div>
    </div>
   </div>

   <Footer />
  </>
 )
}

export default Solutions
