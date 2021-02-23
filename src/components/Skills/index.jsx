import React from "react";
import htmlImage from "../../images/skills/html5.png";
import javascriptImage from "../../images/skills/javascript.png";
import cssImage from "../../images/skills/css3.png";
import jqueryImage from "../../images/skills/jquery.png";
import nodejsImage from "../../images/skills/nodejs.png";
import reactImage from "../../images/skills/react.png";
import apexImage from "../../images/skills/apex.png";
import mongodbImage from "../../images/skills/mongodb.png";
import mysqlImage from "../../images/skills/mysql.png";
import githubImage from "../../images/skills/github.png";
import herokuImage from "../../images/skills/heroku.png";
import materializeImage from "../../images/skills/materialize.png";
import bootstrapImage from "../../images/skills/bootstrap.png";

function Skills(props) {
  return (
    <section id="skills" className="container full-height">
      <div className="card mb-5 z-depth-2">
        <h2 className="card-header h4-responsive font-weight-bold">
          FRONT-END
        </h2>
        <div className="card-body text-center">
          <div className="row features-small mt-3 fadeIn">
            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12 ">
                  <img
                    src={htmlImage}
                    className="img-fluid"
                    alt="Html"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={javascriptImage}
                    className="img-fluid"
                    alt="JavaScript"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={cssImage}
                    className="img-fluid"
                    alt="CSS"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={jqueryImage}
                    className="img-fluid"
                    alt="JQuery"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-5 z-depth-2">
        <h2 className="card-header h4-responsive font-weight-bold">
          BACK-END
        </h2>
        <div className="card-body text-center">
          <div className="row features-small mt-4 wow fadeIn">
            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={nodejsImage}
                    className="img-fluid"
                    alt="nodejs"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={reactImage}
                    className="img-fluid"
                    alt="react"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={apexImage}
                    className="img-fluid"
                    alt="apex"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  {/* <img src="" className="img-fluid" alt="JQuery"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-5 z-depth-2">
        <h2 className="card-header h4-responsive font-weight-bold">
         DATABASES
        </h2>
        <div className="card-body text-center">
          <div className="row features-small  wow fadeIn">            
              <div className="col-xl-3 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={mongodbImage}
                      className="img-fluid"
                      alt="mongodb"
                      style={{ width: "200px", height: "150px",padding:"4px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={mysqlImage}
                      className="img-fluid"
                      alt="mysql"
                      style={{ width: "200px", height: "150px"}}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <img src="#" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <img src="#" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

      <div className="card mb-5 z-depth-2">
        <h2 className="card-header h4-responsive font-weight-bold">
          OTHERS
        </h2>
        <div className="card-body text-center">
          <div className="row features-small mt-4 wow fadeIn">
            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={githubImage}
                    className="img-fluid"
                    alt="github"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={herokuImage}
                    className="img-fluid"
                    alt="heroku"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={materializeImage}
                    className="img-fluid"
                    alt="materialize"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={bootstrapImage}
                    className="img-fluid"
                    alt="bootstrap"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
