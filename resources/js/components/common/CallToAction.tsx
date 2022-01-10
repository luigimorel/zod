import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'
import Button from './Button'

const CallToAction = () => {
 return (
  <div className=" bg-cta mb-8">
   <div className=" sm:px-32 px-8 tab:px-16 flex flex-col">
    <p className=" text-xl text-white mb-12 mt-8">
     Built for construction site monitoring
    </p>

    <p className=" text-4xl text-white mb-7">
     Speed, flexibility and accuracy...
    </p>

    <p className=" text-white text-base mb-12">
     Make faster and more informed data-driven decisions, stay on top of your
     project, and keep all stakeholders{' '}
     <br className=" sm:block hidden tab:hidden" /> informed while reducing
     surprises, delays, cost overruns and claims.
    </p>

    <div className="mb-4">
     <Link to="/accounts/sign-up">
      <Button text=" Sign Up" />
     </Link>
    </div>

    <div className=" w-full content-center flex flex-row justify-center mb-24">
     <ReactPlayer url={'https://www.youtube.com/watch?v=Tm3NXhGLvuU'} />
    </div>
   </div>
  </div>
 )
}

export default CallToAction
