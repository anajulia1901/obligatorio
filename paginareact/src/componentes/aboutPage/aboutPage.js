import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperclip, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="/imagenes/imagen3.jpg"
                alt=""
                className="img-thumbnail"
              />
            </Col>
            <Col md={6}>
              <h2>Hi guys!</h2>
              <p className="text-break">
                Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et
                rutrum eleifend sollicitudin lacinia justo id turpis. Nec
                convallis integer. Odio eget duis. Nulla aenean et. Blandit
                varius sollicitudin. Pellentesque leo primis neque urna magnis.
                Elit ut sollicitudin. Et est a nam dolores eget itaque sagittis
                et parturient duis est eleifend sociis rutrum odio viverra
                integer.
              </p>

              <Row>
                <div className="atributo">
                  <ul className="profile-list">
                    <li>Name:</li>
                    <li>Age :</li>
                    <li>Experience:</li>
                    <li>Country:</li>
                    <li>Location:</li>
                    <li>e-mail:</li>
                    <li>Phone:</li>
                    <li>Freelance:</li>
                  </ul>
                </div>
                <div className="respuestas">
                  <ul className="profile-list">
                    <li>Tom Saulnier</li>
                    <li>25 Years</li>
                    <li>4 Years</li>
                    <li>USA</li>
                    <li>San Francisco, CA</li>
                    <li>email@example.com</li>
                    <li>+ (00) 123 456 789</li>
                    <li>Available</li>
                  </ul>
                </div>
              </Row>

              <Row>
                <button type="button" className="btn btn-info" id="boton-page">
                  <FontAwesomeIcon icon={faPaperclip} />
                  DOWNLOAD RESUME
                </button>
                <button type="button" className="btn btn-danger">
                  <FontAwesomeIcon icon={faCommentAlt} />
                  CONTACT ME
                </button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
