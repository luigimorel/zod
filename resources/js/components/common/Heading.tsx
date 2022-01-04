import React from "react";
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
            <div className=" bg-yellow-500 h-0.5 w-20 my-0 mx-auto"></div>
        </div>
    );
};

export default Heading;
