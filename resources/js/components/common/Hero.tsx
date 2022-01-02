import React from "react";

// Assets
import HeroImg from "./../../../assets/images/hero.jpg";

// Components
import Button from "./Button";

const Hero = () => {
    return (
        <>
            <div className=" flex flex-row justify-between h-screen w-full sm:px-24 tab:px-12 px-3 ">
                <div className=" w-1/2 mt-24 sm:mr-12">
                    <h3 className=" text-5xl mb-8 uppercase font-sans">
                        Revolutionizing monitoring in the construction industry.
                    </h3>

                    <p className=" mb-8 text-lg text-gray-700">
                        Pioneers of the constrution industry monitoring in the
                        Sub Saharan Africa Region.
                    </p>
                    <Button text="Sign Up" className="  " />
                </div>

                <div className=" w-1/2 ">
                    <img src={HeroImg} alt="" className=" h-4/5 w-full" />
                </div>
            </div>
        </>
    );
};

export default Hero;
