import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
class ParteFinal extends Component {
  render() {
    return (
      <div className="fondo-negro">
        <div className=" text-center">
          <div className="parte-final">
            <div className="icono-final">
              <FontAwesomeIcon icon={faFacebook} id="social-icon" />
              <FontAwesomeIcon icon={faTwitter} id="social-icon" />
              <FontAwesomeIcon icon={faInstagram} id="social-icon" />
              <FontAwesomeIcon icon={faLinkedin} id="social-icon" />
              <FontAwesomeIcon icon={faGoogle} id="social-icon" />
            </div>
          </div>
          <div className="copyright">
            Copyright © 2018 UIdeck All Right Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default ParteFinal;
