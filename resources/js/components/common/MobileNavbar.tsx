import React from "react";
import Button from "./Button";

const MobileNavbar = () => {
    const menuLinks = [
        {
            id: 1,
            linkText: "Home",
            route: "/",
        },
        {
            id: 2,
            linkText: "Solutions",
            route: "/businesses",
        },
        {
            id: 3,
            linkText: "Demo",
            route: "/contact-us",
        },
        {
            id: 4,
            linkText: "Contact Us ",
            route: "/contact-us",
        },
    ];

    return (
        <div className=" flex dropdown fixed mt-20 w-full animation-container">
            <ul className="dropdown-menu bg-black  w-full">
                {menuLinks.map((x) => (
                    <li key={x.id} className=" ">
                        <a
                            className="  text-white custom-animation w-full ml-24 bg-black custom-transform   minor-nav  text-base  py-2  mb-4 font-semibold  block whitespace-no-wrap"
                            href={x.route}
                        >
                            {x.linkText}
                        </a>
                    </li>
                ))}

                <Button text="Sign In" className="  " />
            </ul>
        </div>
    );
};

export default MobileNavbar;
