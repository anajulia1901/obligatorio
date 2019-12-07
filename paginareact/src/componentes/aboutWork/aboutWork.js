import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
class AboutWork extends Component {
  render() {
    return (
      <div className="about-work">
        <Container>
          <div className="service-title text-center">
            <h2 className="titulo">My Remarcable Works</h2>
          </div>
          <div className="work-buttons col-auto text-center justify-content-center">
            <a className="btn btn-info" href="#" role="button">
              ALL
            </a>
            <button className="btn btn-info" type="submit">
              DESIGN
            </button>
            <input
              className="btn btn-info"
              type="button"
              value="DEVELOPEMENT"
            />
            <input className="btn btn-info" type="submit" value="PRINT" />
          </div>
          <Row className="mb-1">
            <Col md={4}>
              <img
                src="/imagenes/imagen.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>
            <Col md={4}>
              <img
                src="/imagenes/imagen1.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>{" "}
            <Col md={4}>
              <img
                src="/imagenes/imagen2.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>
            <Col md={4}>
              <img
                src="/imagenes/imagenvaso.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>
            <Col md={4}>
              <img
                src="/imagenes/imagenmesa.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>
            <Col md={4}>
              <img
                src="/imagenes/imagencompu.jpg"
                className="image-fluid col-12 pb-1"
                alt="..."
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutWork;
