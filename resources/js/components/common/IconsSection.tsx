import React from 'react'

// Components
import Heading from './Heading'

// Assets
import PlusIcon from './../../../assets/PlusIcon.svg'

const IconsSection = () => {
 const iconCards = [
  {
   id: 1,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
  {
   id: 2,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
  {
   id: 3,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
  {
   id: 4,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
  {
   id: 5,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
  {
   id: 6,
   img: PlusIcon,
   text:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?',
  },
 ]
 return (
  <div className=" mb-14">
   <Heading text=" Our Values" />
   <p className=" mb-8 text-2xl sm:w-2/4 w-full sm:px-20 px-4 mx-auto my-0">
    Consequat faucibus tristique vitae vulputate tristique vitae vulputate
    tristique vitae faucibus tristique vitae vulputate tristique vitae
   </p>

   <div className=" grid sm:grid-cols-3 grid-rows-1  sm:px-20 px-4 mb-12">
    {iconCards.map((x) => (
     <div
      className="flex flex-col border mr-0 py-8 mb-6 px-3 mx-4 hover:bg-blue-700 hover:text-white "
      key={x.id}
     >
      <img src={x.img} alt="" className=" items-center h-20 mb-4" />
      <p className=" sm:py-6 sm:px-8   text-lg">{x.text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default IconsSection
