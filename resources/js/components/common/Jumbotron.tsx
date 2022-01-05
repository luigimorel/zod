import React from "react";

interface JumbotronProps {
    header: string;
    leadingParagraph: string;
}

const Jumbotron = ({ header, leadingParagraph }: JumbotronProps) => {
    return (
<<<<<<< HEAD
        <div
            style={{
                backgroundImage: `url("https://res.cloudinary.com/morelmiles/image/upload/v1641151093/jumboo_r70wt2.png") cover no-repeat`,
            }}
            className="  mb-20"
        >
            <div className=" sm:px-12 bg-overlay">
                <div className="  flex flex-col px-10 py-20 justify-center">
                    <h1 className="text-center mb-10 text-xl text-white ">
                        {header}
                    </h1>
                    <p className=" text-center mb-10 text-white">
=======
        <div className="pt-20 bg-cover h-40 bg-jumbo mb-20">
            <div className="sm:px-12">
                <div className="  flex flex-col px-10 py-20 justify-center">
                    <h1 className="text-center mb-10 text-xl text-black">
                        {header}
                    </h1>
                    <p className="text-black text-center mb-10">
>>>>>>> adc64e7bc696ed74e3e8d9595b83dd8a4f781d29
                        {leadingParagraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
