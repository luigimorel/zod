import React from "react";

// Components
import Jumbotron from "../common/Jumbotron";
import Navbar from "../common/Navbar";

const Demo = () => {
    return (
        <>
            <Navbar />
            <div className="pt-28">
                <Jumbotron
                    header=" Here is the heading"
                    leadingParagraph="Here "
                />
            </div>
        </>
    );
};

export default Demo;
