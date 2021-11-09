// import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import RouteSub from "./components/RouteSub";
import routes from "./routes";
ReactDOM.render(
  <BrowserRouter>
    <RouteSub routes={routes} />
  </BrowserRouter>,
  document.getElementById("root")
);
