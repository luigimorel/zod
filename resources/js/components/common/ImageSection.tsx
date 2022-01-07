import React from 'react'

// Assets
import Button from './Button'
import { Link } from 'react-router-dom'

const ImageSection = () => {
 return (
  <div>
   <div className=" flex flex-col sm:mb-24 mb-12 px-8">
    <div className=" sm:w-1/2 w-full mx-auto my-0">
     <h3 className=" mb-10 sm:text-center font-bold uppercase text-3xl text-gray-800">
      Create an account today
     </h3>

     <p className=" mb-20 text-lg">
      Make it easier to track the activities at your construction site by
      signing up on Denebolatech today!
     </p>

     <div className=" flex flex-row justify-center">
      <Link to="/accounts/sign-up">
       <Button text=" Sign up today" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ImageSection
