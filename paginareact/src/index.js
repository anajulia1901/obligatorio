import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Row } from "react-bootstrap";

class Paginareact extends React.Component {
  render() {
    return (
      <div>
        <header class="menubar fixed-top">
          <Container>
            <Row>
              <button
                class="col-2 mr-auto btn btn-link"
                type="button"
                id="homeButton"
              >
                <img src="Imagenes/imagenlogo.png" />
              </button>
              <ul class="nav col-auto justify-content-end clearfix">
                <li class="nav-item">
                  <a class="nav-link " href="#home">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active " href="#about">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#services">
                    SERVIVES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#resume">
                    RESUME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#work">
                    WORK
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </Row>
          </Container>
        </header>

        <section class="home-page">
          <img
            class="home-page-fondo"
            src="imagenes/imagengrande.jpg"
            atr="homepage"
          />
          <Container>
            <div class=" col-auto mr-auto text-center">
              <h6 class="primertitulo">Hi this is</h6>
              <h2 class="segundotitulo">TOM SAULNIER</h2>
              <h2 class="tercertitulo">
                Front- end Web Developer and Grapic Designer
              </h2>
              <div class="socialmedia">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-google"></i>
              </div>
              <button type="button" class="btn btn-info">
                GET A FREE QUOTE
              </button>
            </div>
          </Container>
        </section>

        <section class="about-page">
          <Container>
            <Row>
              <div class="col-6">
                <img src="imagenes/imagen3.jpg" alt="" class="img-thumbnail" />
              </div>
              <div class="col-6">
                <h2>Hi guys!</h2>
                <p class="text-break">
                  Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et
                  rutrum eleifend sollicitudin lacinia justo id turpis. Nec
                  convallis integer. Odio eget duis. Nulla aenean et. Blandit
                  varius sollicitudin. Pellentesque leo primis neque urna
                  magnis. Elit ut sollicitudin. Et est a nam dolores eget itaque
                  sagittis et parturient duis est eleifend sociis rutrum odio
                  viverra integer.
                </p>

                <Row>
                  <div class="atributo">
                    <ul class="profile-list">
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
                  <div class="respuestas">
                    <ul class="profile-list">
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
                  <div class="col-10">
                    <button type="button" class="btn btn-primary">
                      <i class="fas fa-paperclip"></i>DOWNLOAD RESUME
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i class="far fa-comment-alt"></i>CONTACT ME
                    </button>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </section>
        <section class="services-page">
          <div class="fondo-services">
            <Container>
              <div class="service-title text-center">
                <h2 class="titulo">What I do</h2>

                <Row>
                  <div class="cuadrado col-3 text-center white">
                    <div class="icono">
                      <i class="fas fa-th-large"></i>
                    </div>
                    <h6>FRONT-END DEVELOPEMENT</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse condi.
                    </p>
                  </div>

                  <div class="cuadrado col-3 text-center white">
                    <div class="icono">
                      <i class="fas fa-layer-group"></i>
                    </div>
                    <h6>GRAPHIC DESIGN</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse condi
                    </p>
                  </div>
                  <div class="cuadrado col-3 text-center white">
                    <div class="icono">
                      <i class="fas fa-briefcase"></i>
                    </div>
                    <h6>BUSINESS BRANDING</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse condi
                    </p>
                  </div>
                  <div class="cuadrado col-3 text-center white">
                    <div class="icono">
                      <i class="far fa-comment"></i>
                    </div>
                    <h6>CONSULTANCY</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse condi
                    </p>
                  </div>
                </Row>
              </div>
            </Container>
          </div>
        </section>
        <section class="about-resume">
          <Container>
            <Row>
              <div class=" columna col-lg-6 col-md-6 col-sm-6 ">
                <div class="EDUCATION">
                  <ul class="timeline">
                    <li class="titulo-icono">
                      <i class="linea-icono fas fa-graduation-cap"></i>
                      <h class=" title">EXPERIENCE</h>
                    </li>

                    <li>
                      <div class="content-text">
                        <h6 class="line-title">Bsc In CSE - Yale University</h6>

                        <span>2012 - 2016</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li class>
                      <div class="content-text">
                        <h6 class="line-title">
                          Higher Secondary School - San Francisco College
                        </h6>

                        <span>2010 - 2012</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li class>
                      <div class="content-text">
                        <h6 class="line-title">
                          Secondary School - Labratory High School
                        </h6>

                        <span>2005 - 2010</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class=" columna col-lg-6 col-md-6 col-sm-6 ">
                <div class="EDUCATION">
                  <ul class="timeline">
                    <li class="titulo-icono">
                      <i class="linea-icono fas fa-briefcase"></i>
                      <h class=" title">EDUCATION</h>
                    </li>
                    <li>
                      <div class="content-text">
                        <h6 class="line-title">Bsc In CSE - Yale University</h6>

                        <span>2012 - 2016</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="content-text">
                        <h6 class="line-title">
                          Higher Secondary School - San Francisco College
                        </h6>

                        <span>2010 - 2012</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="content-text">
                        <h6 class="line-title">
                          Secondary School - Labratory High School
                        </h6>

                        <span>2005 - 2010</span>
                        <p class="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section class="about-work">
          <Container>
            <div class="service-title text-center">
              <h2 class="titulo">My Remarcable Works</h2>
            </div>
            <div class="work-buttons col-auto text-center justify-content-center">
              <a class="btn btn-info" href="#" role="button">
                ALL
              </a>
              <button class="btn btn-info" type="submit">
                DESIGN
              </button>
              <input class="btn btn-info" type="button" value="DEVELOPEMENT" />
              <input class="btn btn-info" type="submit" value="PRINT" />
            </div>
            <Row className="mb-1">
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagen.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagen1.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagen2.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagenvaso.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagenmesa.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
              <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <img
                  src="imagenes/imagencompu.jpg"
                  class="image-fluid col-12 pb-1"
                  alt="..."
                />
              </div>
            </Row>
          </Container>
        </section>
        <section class="about-project">
          <img
            class="about-project-fondo"
            src="imagenes/imagenfondo2.jpg"
            atr=""
          />

          <Container>
            <Row>
              <div class="contador col-3 text-center">
                <div class="icono">
                  <i class="fas fa-briefcase"></i>
                </div>
                <div class="letra">250</div>
                <p>PROJECT WORKING</p>
              </div>

              <div class="contador col-3 text-center">
                <div class="icono">
                  <i class="far fa-check-circle"></i>
                </div>
                <div class="letra">950</div>
                <p>PROJECT DONE</p>
              </div>

              <div class="contador col-3 text-center">
                <div class="icono">
                  <i class="far fa-gem"></i>
                </div>
                <div class="letra">150</div>
                <p>AWARDS RECEIVED</p>
              </div>

              <div class="contador col-3 text-center">
                <div class="icono">
                  <i class="far fa-heart"></i>
                </div>
                <div class="letra">299</div>
                <p>HAPPY CLIENTS</p>
              </div>
            </Row>
          </Container>
        </section>
        <section class="about-contact gray">
          <div class="container p-5">
            <Row className=" gray">
              <div class="col-12">
                <Row className="white p-10">
                  <div class="col-6">
                    <h6 class="contact-title">CONTACT FORM</h6>
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input
                            type="name"
                            class="form-control"
                            id="inputName4"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-12 mr-auto justify-content-left ">
                          <input
                            type="text"
                            class="form-control Subject"
                            id="inputSubject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <textarea
                          placeholder="Your message"
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="6"
                        ></textarea>
                      </div>
                      <button type="button" class="  btn btn-info">
                        SEND MESSAGE
                      </button>
                    </form>
                  </div>

                  <div class="col-6">
                    <h6 class="contact-title">CONTACT ADRESS</h6>
                    <div class="card">
                      <div class="footer-right-contactos">
                        <div class="card-body">
                          <p class="card-text"></p>
                          <div class="contactos">
                            <Row>
                              <div class="col-1">
                                <i class="fas fa-map-marker-alt"></i>
                              </div>
                              <div class="col-11">San Fransisco, Ca</div>
                            </Row>
                          </div>
                          <Row>
                            <div class="col-1">
                              <i class="far fa-envelope"></i>
                            </div>
                            <div class="col-11">
                              hello@Tom.com tomsaulnier@gmail.com
                            </div>
                          </Row>
                          <Row>
                            <div class="col-1">
                              <i class="fas fa-phone"></i>
                            </div>
                            <div class="col-11">
                              + (00) 123 456 789 +(00) 123 344 789
                            </div>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="imagenes/mapa.png"
                    class="image-fluid col-12 pb-3"
                  />
                </Row>
              </div>
            </Row>
          </div>
        </section>
        <section>
          <div class="fondo-negro">
            <div class="col-auto mr-auto text-center">
              <div class="parte-final">
                <div class="icono-final">
                  <i class="fab fa-facebook"></i>

                  <i class="fab fa-twitter"></i>

                  <i class="fab fa-instagram"></i>

                  <i class="fab fa-linkedin-in"></i>

                  <i class="fab fa-google"></i>
                </div>
              </div>
              <div class="copyright">
                Copyright © 2018 UIdeck All Right Reserved
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Paginareact />, document.getElementById("root"));
