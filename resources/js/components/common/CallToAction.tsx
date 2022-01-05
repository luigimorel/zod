import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'
import Button from './Button'

const CallToAction = () => {
	return (
		<div className=" bg-cta">
			<div className=" sm:px-32 flex flex-col">
				<p className=" text-xl text-white mb-12 mt-8">
					Built for construction site oversight
				</p>

				<p className=" text-4xl text-white mb-7">Speed, flexibility and accuracy</p>

				<p className=" text-white text-base mb-12">
					Make faster and more informed data-driven decisions, stay on top of your
					project, and keep all stakeholders informed while reducing surprises,
					delays, cost overruns, and claims.
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
