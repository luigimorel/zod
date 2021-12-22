import React from "react";

// Assets
import Logo from "./../../../assets/Stacks.svg";
import Home from "./../../../assets/Home.svg";
import Write from "./../../../assets/Write.svg";
import User from "./../../../assets/User.svg";
import Bell from "./../../../assets/Bell.svg";
import Search from "./../../../assets/Search.svg";
import Luigi from "./../../../assets/Luigi.svg";

const Navbar = () => {
    return (
        <div className=" flex px-40 flex-row items-center py-3 justify-between shadow-md max-w-full ">
            <div className="  ">
                <img src={Logo} alt="" />
            </div>

            <div className=" flex flex-row items-center">
                <img src={Home} className=" sm:mr-16" alt="" />
                <img src={Write} className=" sm:mr-16" alt="" />
                <img src={User} className=" sm:mr-16" alt="" />
                <img src={Bell} className=" sm:mr-16" alt="" />
            </div>

            <form action="">
                <label htmlFor="search" className=" flex flex-row">
                    <img
                        src={Search}
                        alt=""
                        className=" absolute pointer-events-none mt-3 ml-3"
                    />
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className=" pl-10 border border-gray-400"
                        placeholder="Search Stacks"
                    />
                </label>
            </form>

            <div className=" flex flex-row  ">
                <img src={Luigi} alt="" className=" h-12 mr-8" />

                <button className=" bg-main text-white font-semibold px-4 py-2 rounded">
                    Add a post
                </button>
            </div>
        </div>
    );
};

export default Navbar;
