import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
class AboutResume extends Component {
  render() {
    return (
      <div className="about-resume">
        <Container>
          <Row>
            <Col md={6}>
              <div className="EDUCATION">
                <ul className="timeline">
                  <li className="titulo-icono">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      id="iconoExperience"
                    />

                    <h className=" title">EXPERIENCE</h>
                  </li>

                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Bsc In CSE - Yale University
                      </h6>

                      <span>2012 - 2016</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Higher Secondary School - San Francisco College
                      </h6>

                      <span>2010 - 2012</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Secondary School - Labratory High School
                      </h6>

                      <span>2005 - 2010</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="EDUCATION">
                <ul className="timeline">
                  <li className="titulo-icono">
                    <FontAwesomeIcon icon={faBriefcase} id="iconoEducation" />

                    <h className=" title">EDUCATION</h>
                  </li>
                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Bsc In CSE - Yale University
                      </h6>

                      <span>2012 - 2016</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Higher Secondary School - San Francisco College
                      </h6>

                      <span>2010 - 2012</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h6 className="line-title">
                        Secondary School - Labratory High School
                      </h6>

                      <span>2005 - 2010</span>
                      <p className="line-text">
                        Expenses as material breeding insisted building to in.
                        Continual so distrusts pronounce by unwilling listening.
                        Thing do taste on we manor.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutResume;
