import React, { useState } from "react";
import picProfile from "../../images/CesarH.jpg";
import Resume from "../../docs/resume.pdf";
import Iframe from "react-iframe";
import Modal from "react-bootstrap/Modal";

function About(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="about" className="full-height-about" >
    <div className="row py-5">
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        <section className="card mb-5 z-depth-2">
          <h2 className="card-header h1-responsive font-weight-bold">
            About Me
          </h2>
          <div className="card-body" >
            <div className="row p-1">
              <div className="col-md-12">
                <img
                  src={picProfile}
                  className="img-fluid w-25 p-2 float-left"
                  alt="ProfileImage"
                />
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify", fontSize: "100%" }}
                >
                  I am Cesar Martinez, I am 35 years old, I am from Ecuador and
                  currently living in the US. Full Stack Web Developer with a
                  certificate in Web Development from John Hopkins University
                  passionate about developing meaningful mobile and web apps,
                  using different technologies like CSS, JavaScript,JQuery,
                  Node.js, Apex, MySQL,etc. Known as an innovator, able to solve
                  complex problems, and team collaborator makes me able to drive
                  feasible outcomes under pressure and develop life-enhancing
                  user experiences as well as provide the best perspectives on
                  the user experiences with software platforms.
                </p>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-md-12">
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify", fontSize: "100%" }}
                >
                  A little more about me, I love sports, specially Skating, I'm
                  a former inline speed skater and I've participated as a member
                  of the Ecuadorian team in some very important races as
                  Panamerican Games, Southamerica Games and a bunch of national
                  games. I've won some national titles and international metals
                  as well. Love spend time with my family and also do outdoor
                  activities which include riding my bike, run or skate.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-info float-right"
              onClick={handleShow}
            >
              View Resume
            </button>
          </div>
        </section>
        <Modal show={show} onHide={handleClose} size="lg" style={{ height: "800px" }}>
          <Modal.Header closeButton style={{ height: "10%" }}>
            <h5>Resume</h5>
          </Modal.Header>
          <Modal.Body>
            <Iframe url={Resume} width="100%" height="100%" />
          </Modal.Body>
          <Modal.Footer style={{ height: "10%" }}>
            <button
              type="button"
              className="btn btn-info"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    </section>
  );
}
export default About;
