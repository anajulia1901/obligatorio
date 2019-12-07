import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Container>
          <div className=" col-auto mr-auto text-center">
            <h6 className="primertitulo">Hi this is</h6>
            <h2 className="segundotitulo">TOM SAULNIER</h2>
            <h2 className="tercertitulo">
              Front- end Web Developer and Grapic Designer
            </h2>
            <div className="socialmedia">
              <FontAwesomeIcon icon={faFacebook} id="social-icon" />
              <FontAwesomeIcon icon={faTwitter} id="social-icon" />
              <FontAwesomeIcon icon={faInstagram} id="social-icon" />
              <FontAwesomeIcon icon={faLinkedin} id="social-icon" />
              <FontAwesomeIcon icon={faGoogle} id="social-icon" />
            </div>
            <button type="button" className="btn btn-info">
              GET A FREE QUOTE
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
