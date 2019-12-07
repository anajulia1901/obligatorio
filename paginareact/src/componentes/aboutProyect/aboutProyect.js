import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faCheckCircle,
  faGem,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
class AboutProyect extends Component {
  render() {
    return (
      <div className="about-project">
        <img
          className="about-project-fondo"
          src="/imagenes/imagenfondo2.jpg"
          atr=""
        />

        <Container>
          <Row>
            <Col md={3} className="contador text-center">
              <div className="icono">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="letra">250</div>
              <p>PROJECT WORKING</p>
            </Col>

            <Col md={3} className="contador text-center">
              <div className="icono">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="letra">950</div>
              <p>PROJECT DONE</p>
            </Col>

            <Col md={3} className="contador text-center">
              <div className="icono">
                <FontAwesomeIcon icon={faGem} />
                <i className="far fa-gem"></i>
              </div>
              <div className="letra">150</div>
              <p>AWARDS RECEIVED</p>
            </Col>

            <Col md={3} className="contador text-center">
              <div className="icono">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="letra">299</div>
              <p>HAPPY CLIENTS</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutProyect;
