import React from "react";
import { Button,Row,Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';


function Header(props) {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="view" >
            <div className="container">
                <Row>                  
                    <Col md={12} className="mb-4 text-white text-center mt-5">
                        <h1 className="mt-5" >
                            <strong>Cesar H Martinez</strong>
                        </h1>
                        <hr className="hr-light my-4 wow fadeInDown"/>
                        <h5 className="text-uppercase mb-4 text-white">
                            <strong>Full Stack Web Developer</strong>
                        </h5>
                        
                        <Button variant="primary" href="#portfolio" className="mr-2">Portfolio</Button>

                        
                        <Button type="button" href="#about">About
                            me</Button>
                            
                    </Col>
                </Row>
            </div>
    </div>

  </div>
    
 
  );
}
export default Header;