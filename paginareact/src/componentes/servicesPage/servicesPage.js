import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCommentAlt,
  faThLarge,
  faLayerGroup,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
class ServicesPage extends Component {
  render() {
    return (
      <div className="services-page">
        <div className="fondo-services">
          <Container>
            <div className="service-title text-center">
              <h2 className="titulo">What I do</h2>

              <Row>
                <Col md={3} className=" cuadrado mb-5 white">
                  <div className="icono">
                    <FontAwesomeIcon icon={faThLarge} />
                  </div>
                  <h6>FRONT-END DEVELOPEMENT</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi.
                  </p>
                </Col>

                <Col md={3} className="cuadrado  mb-5 white">
                  <div className="icono">
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </div>
                  <h6>GRAPHIC DESIGN</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi
                  </p>
                </Col>
                <Col md={3} className=" cuadrado mb-5 white">
                  <div className="icono">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h6>BUSINESS BRANDING</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi
                  </p>
                </Col>
                <Col md={3} className="cuadrado mb-5 white">
                  <div className="icono">
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </div>
                  <h6>CONSULTANCY</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse condi
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default ServicesPage;
