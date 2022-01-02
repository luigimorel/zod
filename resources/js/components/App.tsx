import React from "react";
import ReactDOM from "react-dom";

// Components
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
