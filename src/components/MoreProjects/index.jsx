import React from "react";
import weatherImage from "../../images/main.jpg";
import passwordImage from "../../images/mainpage.jpg";
import quizImage from "../../images/mainquiz.jpg";
import dayschedulerImage from "../../images/maindayscheduler.jpg";
import employeeImage from "../../images/employeetracker.jpg";
import notetakerImage from "../../images/notetaker.png";

function MoreProjects(props) {
  return (
    <section className="mt-5 mb-5 container">
      <div className="dark-grey-text text-center mb-4 py-5 mt-4">
        <h2 className="h1-responsive font-weight-bold text-center">
          More Work
        </h2>
        <p className="text-center text-muted w-responsive mx-auto mb-5">
          In the following list, you can find some of the small projects I have
          worked on during the journey to become a Full Stack Web Developer.
          Every one of them contains a link to the Live site and Repository,
          Enjoy them!.
        </p>

        <div className="row py-5">
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={weatherImage}
                className="img-fluid"
                alt="wheaterImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className="mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://chernanma.github.io/Weather_Dashboard/"
                >
                  Livesite
                </a>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Weather_Dashboard"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              The Weather Dashboard
            </p>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={passwordImage}
                className="img-fluid"
                alt="passwordImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className=" mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://chernanma.github.io/Password-Generator/"
                >
                  Livesite
                </a>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Password-Generator"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              Password Generator
            </p>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={quizImage}
                className="img-fluid"
                alt="quizImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className="mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://chernanma.github.io/Code-Quiz/"
                >
                  Livesite
                </a>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Code-Quiz"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              Code Quiz
            </p>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={dayschedulerImage}
                className="img-fluid"
                alt="dayschedulerImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className="mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://chernanma.github.io/Work-Day-Scheduler/"
                >
                  Livesite
                </a>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Work-Day-Scheduler"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              Work Day Scheduler
            </p>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={employeeImage}
                className="img-fluid"
                alt="employyeImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className=" mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Employee-Tracker"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              Employee Tracker
            </p>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <div className="view overlay z-depth-2" style={{ height: "100%" }}>
              <img
                src={notetakerImage}
                className="img-fluid"
                alt="notetakerImage"
                style={{ height: "100%", width: "100%" }}
              />
              <div className="mask flex-center blue-gradient-rgba">
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://still-sea-43312.herokuapp.com/"
                >
                  Livesite
                </a>
                <a
                  className="btn btn-outline-white btn-rounded"
                  href="https://github.com/chernanma/Note-Taker"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="text-uppercase text-center text-muted mt-4 mb-0">
              Note Taker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
