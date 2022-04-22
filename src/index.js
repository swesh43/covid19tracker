import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AboutUs from "./AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={AboutUs} />
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
