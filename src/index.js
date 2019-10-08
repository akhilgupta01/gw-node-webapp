import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LoginComponent from "./components/loginComponent";
import b2cauth from "react-azure-adb2c";

b2cauth.initialize({
  instance: "https://login.microsoftonline.com/tfp/",
  tenant: "dbgreenworld.onmicrosoft.com",
  signInPolicy: "B2C_1_signup",
  applicationId: "77d19cac-e013-4cf4-9e33-64a0ab29fbbe",
  cacheLocation: "sessionStorage",
  scopes: ["https://dbgreenworld.onmicrosoft.com/api/user_impersonation"],
  redirectUri: "http://localhost:3000",
  postLogoutRedirectUri: window.location.origin
});

b2cauth.run(() => {
  ReactDOM.render(<LoginComponent />, document.getElementById("root"));
  serviceWorker.unregister();
});
