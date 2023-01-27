import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/a_font-awesome-5.9.0.css";
import "./assets/css/b_bootstrap.min.css";
import "./assets/css/c_magnific-popup.css";
import "./assets/css/d_flaticon.css";
import "./assets/css/e_slick.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
