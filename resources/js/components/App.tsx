import React from "react";
import ReactDOM from "react-dom";
import Feed from "./common/Feed";
import Navbar from "./common/Navbar";

function App() {
    return (
        <div className=" flex flex-col">
            <Navbar />

            <Feed />
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
