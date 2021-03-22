import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

