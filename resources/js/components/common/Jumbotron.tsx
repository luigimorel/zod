import React from 'react'

interface JumbotronProps {
 header: string
 leadingParagraph: string
}

const Jumbotron = ({ header, leadingParagraph }: JumbotronProps) => {
 return (
  <div className="  mb-20">
   <div className=" sm:px-12 bg-overlay">
    <div className="  flex flex-col px-10 py-20 justify-center">
     <h1 className="text-center mb-10 text-xl text-white uppercase ">
      {header}
     </h1>
     <p className=" text-center mb-10 text-white uppercase">
      {leadingParagraph}
     </p>
    </div>
   </div>
  </div>
 )
}

export default Jumbotron
