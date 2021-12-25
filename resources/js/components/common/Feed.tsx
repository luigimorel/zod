import React from "react";
import Luigi from "./../../../assets/Luigi.png";

const Feed = () => {
    return (
        <div className=" w-2/3 flex flex-col px-8">
            <div className=" flex flex-row border-2 mb-4">
                <img src={Luigi} alt="" className=" mr-8 ml-4 py-4" />

                <input
                    type="text"
                    placeholder="What’s your question?"
                    className=" w-full border-0"
                />
            </div>
            {/* This is the start of the feed cards */}
            <div className=" flex flex-row border-2 mb-4">
                <p>Hello from the feed card </p>
            </div>
        </div>
    );
};

export default Feed;
