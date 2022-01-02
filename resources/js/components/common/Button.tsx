import React from "react";

interface ButtonProps {
    className?: string;
    text: string;
}
const Button = ({ className, text }: ButtonProps) => {
    return (
        <div className={className}>
            <button className="  text-center px-8 py-4 bg-red-700 font-bold  rounded text-white hover:bg-black hover:text-blue-700">
                {text}
            </button>
        </div>
    );
};

export default Button;
