import React from "react";
import { render } from "react-dom";

// Components
import App from "./components/App";

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
