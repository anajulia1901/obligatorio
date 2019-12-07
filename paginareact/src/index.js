import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./componentes/header/header.js";
import Home from "./componentes/home/home.js";
import AboutPage from "./componentes/aboutPage/aboutPage.js";
import ServicesPage from "./componentes/servicesPage/servicesPage.js";
import AboutResume from "./componentes/aboutResume/aboutResume.js";
import AboutWork from "./componentes/aboutWork/aboutWork.js";
import AboutProyect from "./componentes/aboutProyect/aboutProyect";
import AboutContact from "./componentes/aboutcontact/aboutcontact";
import Partefinal from "./componentes/partefinal/partefinal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Paginareact = props => (
  <div>
    <Header />
    <Home />
    <AboutPage />
    <ServicesPage />
    <AboutResume />
    <AboutWork />
    <AboutProyect />
    <AboutContact />
    <Partefinal />
  </div>
);

ReactDOM.render(<Paginareact />, document.getElementById("root"));
