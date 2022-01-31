import React from 'react'

interface JumbotronProps {
 header: string
 leadingParagraph: string
}

const Jumbotron = ({ header, leadingParagraph }: JumbotronProps) => {
 return (
  <div className="  mb-20 bg-jumbo bg-cover bg-no-repeat">
   <div className=" sm:px-12 bg-overlay">
    <div className="  flex flex-col px-10 py-20 justify-center">
     <h1 className="text-center mb-10 text-2xl text-white font-semibold uppercase ">
      {header}
     </h1>
     <p className=" text-center font-medium text-xl mb-10 text-white">
      {leadingParagraph}
     </p>
    </div>
   </div>
  </div>
 )
}

export default Jumbotron
