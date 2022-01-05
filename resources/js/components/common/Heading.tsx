import React from "react";
<<<<<<< HEAD
import clsx from "clsx";

interface HeadingProps {
    text: string;
    className?: string;
}

const Heading = ({ text, className }: HeadingProps) => {
    return (
        <div className="mb-6">
            <h2 className={clsx(className, "text-center  text-3xl text-minor")}>
                {text}
            </h2>
=======

interface HeadingProps {
    text: string;
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div className="mb-6">
            <h2 className="text-center  text-3xl text-minor mb-2">{text}</h2>
>>>>>>> adc64e7bc696ed74e3e8d9595b83dd8a4f781d29
            <div className=" bg-yellow-500 h-0.5 w-20 my-0 mx-auto"></div>
        </div>
    );
};

export default Heading;
