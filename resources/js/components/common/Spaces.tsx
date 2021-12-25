import React from "react";

// Assets
import AddIcon from "./../../../assets/AddSpace.svg";
import Space from "./../../../assets/Space.svg";
import Discover from "./../../../assets/Discover.svg";

const Spaces = () => {
    const spacesPlaceholders = [
        {
            id: 1,
            text: "Startup steps",
        },
        {
            id: 2,
            text: "Entrepreneurs Lounge",
        },
        {
            id: 3,
            text: " Doge Coin",
        },
        {
            id: 4,
            text: " Startup step by step",
        },
        {
            id: 5,
            text: "Baby mamas",
        },
    ];
    // sohailsmerchant@gmail.com
    const footerMenu = [
        {
            id: 1,
            text: "About",
        },
        {
            id: 2,
            text: "Careers",
        },
        {
            id: 3,
            text: "Media",
        },
    ];

    const secondFooterMenu = [
        {
            id: 4,
            text: "Advertising",
        },
        {
            id: 5,
            text: "Marketing",
        },
    ];

    return (
        <div className=" flex flex-col w-52">
            <div className="flex flex-row bg-spaces p-2.5 w-full mb-3  ">
                <img src={AddIcon} alt="" className=" shadow-sm mr-8 h-6 w-6" />
                <h4 className=" text-gray-800 text-sm">Create Space</h4>
            </div>

            <div className=" flex flex-col">
                {spacesPlaceholders.map((x) => (
                    <div
                        className="flex flex-row hover:bg-spaces p-2.5 w-full mb-3  "
                        key={x.id}
                    >
                        <img src={Space} className=" h-5 mr-5" />
                        <h4 className=" text-sm text-black">{x.text}</h4>
                    </div>
                ))}
            </div>

            <div className="flex flex-row bg-spaces p-2.5 w-full mb-3  ">
                <img
                    src={Discover}
                    alt=""
                    className=" shadow-sm mr-8 h-6 w-6"
                />
                <h4 className=" text-gray-800 text-sm">Discover Spaces</h4>
            </div>

            <div className="grid grid-cols-3">
                {footerMenu.map((x) => (
                    <p className=" text-gray-700 text-sm" key={x.id}>
                        {x.text}
                    </p>
                ))}
            </div>

            {/* This is for the second menu */}
            <div className="grid grid-cols-2 mb-4">
                {secondFooterMenu.map((x) => (
                    <p className=" text-gray-700 text-sm" key={x.id}>
                        {x.text}
                    </p>
                ))}
            </div>

            <p className=" text-gray-500 text-center text-sm">
                &copy; Stacks 2021
            </p>
        </div>
    );
};

export default Spaces;
