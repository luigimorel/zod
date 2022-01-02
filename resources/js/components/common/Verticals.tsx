import React from "react";

// Components
import Heading from "./Heading";

// Assets
import BranchLight from "./../../../assets/Branch.svg";
import BranchDark from "./../../../assets/BranchDark.svg";

const Verticals = () => {
    return (
        <>
            <Heading text="Business Verticals" />

            <div className="flex flex-row px-40 mb-20">
                <div className=" flex flex-col ">
                    <div className=" py-10 px-24 bg-red-700 ">
                        <img src={BranchLight} alt="" />
                    </div>
                    <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100  font-semibold">
                        Tech
                    </p>
                </div>

                {/* this is the second card */}

                <div className=" flex flex-col ">
                    <div className=" py-10 px-24 bg-yellow-500 ">
                        <img src={BranchDark} alt="" />
                    </div>
                    <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100  font-semibold">
                        Drones
                    </p>
                </div>

                {/* this is the third card  */}
                <div className=" flex flex-col ">
                    <div className=" py-10 px-24 bg-red-700 ">
                        <img src={BranchLight} alt="" />
                    </div>
                    <p className=" text-xl text-gray-800 py-4 pl-3 bg-gray-100  font-semibold">
                        Cameras
                    </p>
                </div>
            </div>
        </>
    );
};

export default Verticals;
