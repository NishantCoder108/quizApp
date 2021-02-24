import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  rootElement
);
