import React from 'react'
import Footer from '../common/Footer'
import Heading from '../common/Heading'

// Components
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
// @ts-ignore
import Edit from './../../../assets/images/edit-size.png'

const Solutions = () => {
 return (
  <>
   <Navbar />

   <div className="">
    <Jumbotron
     header=" Solutions"
     leadingParagraph="Check out the value that we offer to our esteemed cutomers. "
    />
   </div>
   <div className=" px-4 sm:px-0">
    <div className=" ">
     <div className=" mb-8">
      <Heading
       text="Solutions we offer"
       className=" uppercase font-semibold mb-2"
      />

      <p className=" text-xl sm:w-2/4 tab:w-2/3 w-full tab:mb-4 sm:px-20 font-sans px-4 mx-auto my-0">
       We have a set of values that guide our way of doing business.{' '}
       <b>WE{''}</b> are true to whatever we say we are.
      </p>
     </div>

     <div className=" mb-20 ">
      <div className="flex flex-col">
       <div className=" flex sm:flex-row flex-col tab:flex-col    items-center mb-16  px-4">
        <img src={Edit} alt="" className=" sm:mx-20 mb-10 " />
        <div className="flex flex-col tab:ml-8 sm:ml-20">
         <h2 className=" text-3xl uppercase font-semibold text-blue-700 mb-8">
          Construction Works Monitoring
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

       <div className=" flex sm:flex-row flex-col-reverse tab:flex-col-reverse   items-center mb-16  px-4">
        <div className="flex flex-col sm:ml-20">
         <h2 className=" text-3xl font-semibold uppercase text-blue-700 mb-8">
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
        <img src={Edit} alt="" className=" sm:mx-20 mb-10 " />
       </div>

       {/* this is the third section for the image section and bullet points  */}

       <div className=" flex sm:flex-row flex-col tab:flex-col   items-center mb-16  px-4">
        <img src={Edit} alt="" className=" sm:mx-20 mb-10  " />
        <div className="flex flex-col ">
         <h2 className=" text-3xl font-semibold uppercase text-blue-700 mb-8">
          A.I assisted inspection
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

       {/* this is the 4th image section */}
       <div className=" flex sm:flex-row flex-col-reverse tab:flex-col-reverse    items-center mb-16  px-4">
        <div className="flex flex-col sm:ml-20">
         <h2 className=" text-3xl font-semibold uppercase text-blue-700 mb-8">
          Report and progress charts' generation
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
        <img src={Edit} alt="" className=" sm:mx-20 mb-10 " />
       </div>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </>
 )
}

export default Solutions
