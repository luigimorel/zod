import React from "react";

// Components
import Spaces from "../common/Spaces";
import SpacesToFollow from "../common/SpacesToFollow";
import Feed from "../common/Feed";

const FeedContainer = () => {
    return (
        <div className=" flex flex-row px-40 justify-between mt-3">
            <Spaces />

            <Feed />

            <SpacesToFollow />
        </div>
    );
};

export default FeedContainer;
