import React from 'react'
import clsx from 'clsx'

interface HeadingProps {
 text: string
 className?: string
}

const Heading = ({ text, className }: HeadingProps) => {
 return (
  <div className="mb-10">
   <h2
    className={clsx(className, 'text-center  sm:text-3xl text-2xl text-minor')}
   >
    {text}
   </h2>
  </div>
 )
}

export default Heading
