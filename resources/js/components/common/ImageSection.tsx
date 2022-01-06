import React from 'react'

// Components
import Heading from './Heading'

// Assets
import Service from './../../../assets/images/service.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const ImageSection = () => {
 return (
  <div>
   <div className=" sm:px-20 px-8 mb-32">
    <div className=" mb-16">
     <Heading text="Our Services" />
    </div>

    <div className="flex flex-col">
     <div className=" flex flex-col sm:flex-row justify-between items-center mb-20 sm:px-32   ">
      <img src={Service} alt="" className=" w-full" />
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

     <div className=" flex flex-col sm:flex-row justify-between items-center mb-12 sm:px-32   ">
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

      <img src={Service} alt="" className=" w-full" />
     </div>
    </div>
   </div>

   <div className=" flex flex-col sm:mb-24 mb-12 px-8">
    <div className=" sm:w-1/2 w-full mx-auto my-0">
     <h3 className=" mb-10 sm:text-center font-bold uppercase text-3xl text-gray-800">
      Mi orci nisl mauris nibh
     </h3>

     <p className=" mb-20 text-lg">
      Facilisis ultrices tristique urna nunc nunc, eu commodo auctor mattis
      tempor, sed accumsan, eu, in condimentum lacus et, pharetra mauris lectus
      et eleifend at lacus
     </p>

     <div className=" flex flex-row justify-center">
      <Link to="/accounts/sign-up">
       <Button text=" Sign Up for free" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ImageSection
