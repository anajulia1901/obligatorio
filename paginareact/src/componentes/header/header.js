import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="menubar fixed-top">
        <Container>
          <Row>
            <button
              className="col-2 mr-auto btn btn-link"
              type="button"
              id="homeButton"
            ></button>
            <ul className="nav col-auto justify-content-end clearfix">
              <li className="nav-item">
                <a className="nav-link " href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#services">
                  SERVIVES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#resume">
                  RESUME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
