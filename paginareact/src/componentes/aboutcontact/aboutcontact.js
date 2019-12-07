import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
class AboutContact extends Component {
  render() {
    return (
      <div className="about-contact">
        <div className="container p-5">
          <Row>
            <Col md={12}>
              <Row className="white p-10">
                <Col md={6}>
                  <h6 className="contact-title">CONTACT FORM</h6>
                  <form>
                    <div className="form-row">
                      <Col md={6} className="form-group">
                        <input
                          type="name"
                          className="form-control"
                          id="inputName4"
                          placeholder="Name"
                        />
                      </Col>
                      <Col md={6} className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder="Email"
                        />
                      </Col>
                    </div>

                    <div className="form-row">
                      <Col md={12} justify-content-left className="form-group">
                        <input
                          type="text"
                          className="form-control Subject"
                          id="inputSubject"
                          placeholder="Subject"
                        />
                      </Col>
                    </div>

                    <div className="form-group">
                      <textarea
                        placeholder="Your message"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="6"
                      ></textarea>
                    </div>
                    <button type="button" className="  btn btn-info">
                      SEND MESSAGE
                    </button>
                  </form>
                </Col>

                <Col md={6}>
                  <h6 className="contact-title">CONTACT ADRESS</h6>
                  <div className="card">
                    <div className="footer-right-contactos">
                      <div className="card-body">
                        <p className="card-text"></p>
                        <div className="contactos">
                          <Row>
                            <Col md={1}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </Col>
                            <Col md={11}>
                              <p>San Fransisco, Ca</p>
                            </Col>
                          </Row>
                        </div>
                        <Row>
                          <Col md={1}>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </Col>
                          <Col md={11}>
                            <p>hello@Tom.com</p>
                            <p>tomsaulnier@gmail.com</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={1}>
                            <FontAwesomeIcon icon={faPhone} />
                          </Col>
                          <Col md={11}>
                            <p>+ (00) 123 456 789 </p>
                            <p>+(00) 123 344 789</p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <img src="/imagenes/mapa.png" className="image-fluid" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutContact;
