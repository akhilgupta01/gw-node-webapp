import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LoginComponent from "./components/loginComponent";

ReactDOM.render(<LoginComponent />, document.getElementById("root"));
serviceWorker.unregister();
