import React from 'react'

interface ButtonProps {
 className?: string
 text: string
}

const Button = ({ className, text }: ButtonProps) => {
 return (
  <div className={className}>
   <button className="  text-center px-8 py-4 bg-primary hover:bg-opacity-80  rounded text-white hover:bg-[#4caceb]">
    {text}
   </button>
  </div>
 )
}

export default Button
