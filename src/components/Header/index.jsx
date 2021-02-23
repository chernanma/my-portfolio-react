import React from "react";
import { Row, Col } from "react-bootstrap";
import background from "../../images/coverimage.png";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top scrolling-navbar">
        <div className="container" style={{ height: "100%" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
      </nav>

      <div
        className="viewHeader"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="mask rgba-black-light align-items-center">
          <div className="container">
            <div className="row">
              <div></div>
              <div className="col-md-12 mb-4 white-text text-center mt-5">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown">
                  <strong>Cesar H Martinez</strong>
                </h1>
                <hr className="hr-light my-4 wow fadeInDown" />
                <h5 className="text-uppercase mb-4 white-text wow fadeInDown">
                  <strong>Full Stack Web Developer</strong>
                </h5>
                <a
                  className="btn btn-outline-white wow fadeInDown"
                  href="#portfolio"
                  data-wow-delay="0.8s"
                >
                  portfolio
                </a>
                <a
                  className="btn btn-outline-white wow fadeInDown"
                  href="#about"
                  data-wow-delay="0.8s"
                >
                  About me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    //     <div className="viewHeader">
    //   <div className="container">
    //     <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
    //       <div
    //         className="collapse navbar-collapse"
    //         id="navbarSupportedContent-7"
    //       >
    //         <ul className="navbar-nav mr-auto">
    //           <li className="nav-item active">
    //             <a className="nav-link" href="#">
    //               Home <span className="sr-only">(current)</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#about">
    //               About Me
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#skills">
    //               Skills
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#portfolio">
    //               Portfolio
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#contact">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //     <div>
    //       <Row>
    //         <Col md={12} className="mb-4 text-white text-center mt-5">
    //           <h1 className="mt-5">
    //             <strong>Cesar H Martinez</strong>
    //           </h1>
    //           <hr className="hr-light my-4 wow fadeInDown" />
    //           <h5 className="text-uppercase mb-4 text-white">
    //             <strong>Full Stack Web Developer</strong>
    //           </h5>
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Header;
