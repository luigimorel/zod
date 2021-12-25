import React from "react";
import ReactDOM from "react-dom";
import FeedContainer from "./pages/FeedContainer";
import Navbar from "./common/Navbar";

function App() {
    return (
        <div className=" flex flex-col">
            <Navbar />

            <FeedContainer />
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
