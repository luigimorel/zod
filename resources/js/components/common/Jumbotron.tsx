import React from "react";

interface JumbotronProps {
    header: string;
    leadingParagraph: string;
}

const Jumbotron = ({ header, leadingParagraph }: JumbotronProps) => {
    return (
        <div className="pt-20 bg-cover h-40 bg-jumbo mb-20">
            <div className="sm:px-12">
                <div className="  flex flex-col px-10 py-20 justify-center">
                    <h1 className="text-center mb-10 text-xl text-black">
                        {header}
                    </h1>
                    <p className="text-black text-center mb-10">
                        {leadingParagraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
