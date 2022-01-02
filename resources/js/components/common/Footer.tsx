import React from "react";

// Assets
import LogoLight from "./../../../assets/images/logo-light.png";
import Twitter from "./../../../assets/icons/Twitter.svg";
import FB from "./../../../assets/icons/fB.svg";
import Linkedin from "./../../../assets/icons/Linkedin.svg";

const Footer = () => {
    return (
        <div className=" bg-cta px-20 text-white">
            <div className="flex flex-row justify-between mr-20 mb-5">
                <div className=" mt-11">
                    <img src={LogoLight} className=" mb-11 h-10 " alt="" />

                    <p className=" text-white ">
                        Make faster and more informed data-driven decisions,{" "}
                        <br />
                        stay on top of your project, and keep all stakeholders{" "}
                        <br />
                        informed
                    </p>
                </div>

                <div className="flex flex-col mt-11">
                    <h2 className=" text-2xl text-white mb-10">Company </h2>

                    <a href="#" className=" mb-4">
                        Home
                    </a>
                    <a href="#" className=" mb-4">
                        About Us
                    </a>
                    <a href="#" className=" mb-4">
                        Contact Us
                    </a>
                    <a href="#" className=" mb-4">
                        Terms
                    </a>
                    <a href="#" className=" mb-4">
                        Privacy
                    </a>
                </div>

                <div className="flex flex-col mt-11">
                    <h2 className=" text-2xl text-white mb-10">Resources </h2>

                    <a href="#" className=" mb-4">
                        Getting Started
                    </a>
                    <a href="#" className=" mb-4">
                        FAQ
                    </a>
                    <a href="#" className=" mb-4">
                        Become a partner
                    </a>
                </div>
            </div>

            <hr className=" h-px bg-slate-300" />

            <div className=" flex flex-row py-5 justify-between">
                <div className=" flex flex-row">
                    <div className="border-white bg-black border-2 h-10 mr-8 w-10 justify-center rounded-full items-center flex">
                        <img src={Twitter} alt="" className=" h-5" />
                    </div>

                    <div className="   border-white border-2 bg-black h-10 w-10 mr-8 justify-center rounded-full items-center flex">
                        <img src={FB} alt="" className=" h-5" />
                    </div>

                    <div className="   border-white bg-black border-2 h-10 w-10 mr-8 justify-center rounded-full items-center flex">
                        <img src={Linkedin} alt="" className=" h-5" />
                    </div>
                </div>

                <p>
                    Built By {"  "}
                    <a href="https://luigimorel.me" className=" font-bold">
                        Luigi Morel
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
