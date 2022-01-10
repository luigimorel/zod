import React from 'react'

// Components
import Heading from './Heading'

// Assets
import SimpleIcon from './../../../assets/icons/Simple.svg'
import Excellence from './../../../assets/icons/Excellence.svg'
import Disruption from './../../../assets/icons/Disruption.svg'
import Loyalty from './../../../assets/icons/Loyalty.svg'
import Dependable from './../../../assets/icons/Dependable.svg'
import User from './../../../assets/icons/User.svg'

const IconsSection = () => {
 const iconCards = [
  {
   id: 1,
   heading: 'Excellence ',
   img: Excellence,
   text:
    'We aim at being excellent at delivering insightful value and data for our clients.',
  },
  {
   id: 2,
   heading: 'Simplicity ',
   img: SimpleIcon,
   text:
    'We prioritize simplicity over sophistication. A simple tool to use but delivers measurable value.',
  },
  {
   id: 3,
   heading: 'User Centricity ',
   img: User,
   text:
    'We place users at the forefront of whatever we do as we strive to satsify your needs.',
  },
  {
   id: 4,
   heading: 'Loyalty ',
   img: Loyalty,
   text:
    "We listen when you talk to us. Satsifying your construction company's is our mission.",
  },
  {
   id: 5,
   heading: 'Disruption ',
   img: Disruption,
   text:
    'Our goal is to make considerable impact on the daily operations in the construction industry are carried out. ',
  },
  {
   id: 6,
   heading: 'Dependable',
   img: Dependable,
   text:
    'We are eager to help in case of an emergency ALL the time. Please reach out to us.',
  },
 ]
 return (
  <div className=" mb-14">
   <Heading text=" OUR VALUES " className=" font-sans font-bold" />
   <p className=" text-xl sm:w-2/4 tab:w-2/3 w-full tab:mb-4 sm:px-20 font-sans px-4 mx-auto my-0">
    We have a set of values that guide our way of doing business. <b>WE{''}</b>{' '}
    are true to whatever we say we are.
   </p>

   <div className=" grid sm:grid-cols-3 tab:grid-cols-2 grid-rows-1  sm:px-20 px-4 mb-12">
    {iconCards.map((x) => (
     <div
      className="flex flex-col mr-0 py-8 mb-6 px-3 mx-4 hover:border-b-blue-700 hover:bg-gray-100  hover:border-b-2 hover:shadow-md  "
      key={x.id}
     >
      <img src={x.img} alt="" className=" items-center h-20 mb-4" />
      <h6 className=" text-center text-xl mb-4 sm:mb-0 font-bold text-[#212121]">
       {x.heading}
      </h6>
      <p className=" sm:py-6 sm:px-8 tab:px-0   text-lg">{x.text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default IconsSection
