import React from 'react'

// Components
import Button from '../common/Button'
import Footer from '../common/Footer'
import Heading from '../common/Heading'
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
// @ts-ignore
import LocationIcon from './../../../assets/icons/Location.svg'
// @ts-ignore
import EmailIcon from './../../../assets/icons/Email.svg'
// @ts-ignore
import PhoneIcon from './../../../assets/icons/Phone.svg'

const Contact = () => {
 return (
  <>
   <Navbar />
   <div className="">
    <Jumbotron
     leadingParagraph="In case of any queries, please get in touch with us. We'll be gald to help"
     header="Contact us today"
    />
   </div>

   <div className=" mb-10">
    <Heading text="We are here to help" className=" uppercase " />
   </div>

   <div className=" flex  sm:flex-row tab:flex-col flex-col px-4  sm:px-20 sm:mb-20">
    <div className=" sm:w-1/2 w-full tab:w-full tab:mb-8">
     <div className=" flex flex-col">
      <div className=" mb-10">
       <h1 className=" text-2xl mb-4 text-gray-700 font-sans">
        Get in touch now...
       </h1>

       <p className=" text-base text-gray-800 mb-4 ">
        Fill in the form with any query and we wil get back to
        <br className="sm:block hidden" /> you as soon as possible.
       </p>

       <p className=" text-base italic text-gray-700">
        Fields marked with <span className=" text-red-600">*</span> are
        required.
       </p>
      </div>

      <div className=" flex flex-col sm:m-0 mb-8">
       <div className="flex flex-row mb-4">
        <img src={LocationIcon} className=" mr-4" alt="" />
        <p>Plot 5, Kampala Rd. </p>
       </div>

       <div className="flex flex-row mb-4">
        <img src={EmailIcon} className=" mr-4" alt="" />
        <p>info@denebolatech.com </p>
       </div>

       <div className="flex flex-row mb-4">
        <img src={PhoneIcon} className=" mr-4" alt="" />
        <p>+256 775 828940 </p>
       </div>
      </div>
     </div>
    </div>

    <div className=" sm:w-1/2 tab:w-full w-full">
     <form action="" method="post">
      <div className="flex flex-col">
       <label htmlFor="email" className=" mb-2.5 text-gray-600">
        Email <span className=" text-red-600">*</span>
       </label>
       <input
        type="email"
        name="email"
        required
        id="email"
        className=" w-full mb-8 rounded-sm border-gray-400"
       />
      </div>

      {/* Name */}
      <div className="flex flex-col">
       <label htmlFor="name  " className=" mb-2.5 text-gray-600">
        Name <span className=" text-red-600">*</span>
       </label>

       <input
        type="text"
        name="name"
        id="name"
        required
        className=" w-full mb-8 rounded-sm border-gray-400"
       />
      </div>

      {/* Message */}
      <div className="flex flex-col mb-10">
       <label htmlFor="name" className=" mb-2.5 text-gray-600">
        Message <span className=" text-red-600">*</span>
       </label>
       <textarea
        name="message"
        required
        id="message"
        cols={20}
        rows={10}
        className=" rounded-sm border-gray-400"
       />
      </div>

      <div className=" flex justify-center mb-12 ">
       <Button text="Submit" />
      </div>
     </form>
    </div>
   </div>

   <Footer />
  </>
 )
}

export default Contact
