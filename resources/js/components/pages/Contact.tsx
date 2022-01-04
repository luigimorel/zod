import React from 'react'

// Components
import Button from '../common/Button'
import Footer from '../common/Footer'
import Heading from '../common/Heading'
import Jumbotron from '../common/Jumbotron'
import Navbar from '../common/Navbar'

// Assets
import LocationIcon from './../../../assets/icons/Location.svg'
import EmailIcon from './../../../assets/icons/Email.svg'
import PhoneIcon from './../../../assets/icons/Phone.svg'

const Contact = () => {
	return (
		<>
			<Navbar />
			<div className=" pt-28">
				<Jumbotron
					leadingParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, numquam?"
					header="Contact us today"
				/>
			</div>

			<div className=" mb-10">
				<Heading text="We are here to help" className=" uppercase " />
			</div>

			<div className=" flex  sm:flex-row flex-col px-4  sm:px-20 sm:mb-20">
				<div className=" sm:w-1/2 w-full">
					<div className=" flex flex-col">
						<div className=" mb-10">
							<h1 className=" text-2xl mb-4 text-gray-700">
								Please do not hesistate to get in <br /> touch with us.
							</h1>

							<p className=" text-base">
								Fill in the form with any query and we wil get back to you as soon as
								possible.
							</p>
						</div>

						<div className=" flex flex-col">
							<div className="flex flex-row mb-4">
								<img src={LocationIcon} className=" mr-4" alt="" />
								<p>Plot 5, Kampala Rd. </p>
							</div>

							<div className="flex flex-row mb-4">
								<img src={EmailIcon} className=" mr-4" alt="" />
								<p>info@zodon.com </p>
							</div>

							<div className="flex flex-row mb-4">
								<img src={PhoneIcon} className=" mr-4" alt="" />
								<p>+256 701 234 433 </p>
							</div>
						</div>
					</div>
				</div>

				<div className=" w-1/2">
					<form action="" method="post">
						<div className="flex flex-col">
							<label htmlFor="email" className=" mb-2.5">
								Email
							</label>
							<input
								type="email"
								name="email"
                                required
								id="email"
								placeholder="Your email"
								className=" w-full mb-8 rounded-sm border-gray-400"
							/>
						</div>

						{/* Name */}
						<div className="flex flex-col">
							<label htmlFor="name  " className=" mb-2.5">
								Name
							</label>

							<input
								type="text"
								name="name"
								id="name"
                                required
								placeholder="Your name"
								className=" w-full mb-8 rounded-sm border-gray-400"
							/>
						</div>

						{/* Message */}
						<div className="flex flex-col mb-10">
							<label htmlFor="name" className=" mb-2.5">
								Your Message
							</label>
							<textarea
								name="message"
								id="message"
								cols={20}
								rows={10}
								className=" rounded-sm border-gray-400"
							></textarea>
						</div>

						<div className=" flex justify-center ">
							<Button text="Submit" />
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Contact
