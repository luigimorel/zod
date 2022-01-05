import React from 'react'

interface ButtonProps {
 className?: string
 text: string
}
const Button = ({ className, text }: ButtonProps) => {
 return (
  <div className={className}>
   <button className="  text-center px-8 py-4 bg-red-700   rounded text-white hover:bg-red-600 ">
    {text}
   </button>
  </div>
 )
}

export default Button
