import React from "react";

interface HeadingProps {
    text: string;
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div className="mb-6">
            <h2 className="text-center  text-3xl text-minor mb-2">{text}</h2>
            <div className=" bg-yellow-500 h-0.5 w-20 my-0 mx-auto"></div>
        </div>
    );
};

export default Heading;
