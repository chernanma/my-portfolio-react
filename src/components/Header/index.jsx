import React from "react";
import { Row, Col } from "react-bootstrap";

function Header(props) {
  return (
    <div className="viewHeader">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-7"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Row>
            <Col md={12} className="mb-4 text-white text-center mt-5">
              <h1 className="mt-5">
                <strong>Cesar H Martinez</strong>
              </h1>
              <hr className="hr-light my-4 wow fadeInDown" />
              <h5 className="text-uppercase mb-4 text-white">
                <strong>Full Stack Web Developer</strong>
              </h5>              
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Header;
