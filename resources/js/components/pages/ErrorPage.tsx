import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Button from '../common/Button'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

const ErrorPage = () => {
 return (
  <>
   <Navbar />
   <div className=" sm:mb-48 mb-20">
    <div className=" sm:w-1/3 tab:w-full mx-auto my-0 ">
     <div className=" sm:px-10 px-4 pb-10 pt-24  sm:pt-32">
      <h2 className=" text-center text-[#212121] font-semibold text-xl mb-10">
       Sorry, the page you requested for does not exist.😢
      </h2>
      <div className=" flex justify-center">
       <Link to={'/'}>
        <Button text="Back Home" />
       </Link>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </>
 )
}

export default ErrorPage
