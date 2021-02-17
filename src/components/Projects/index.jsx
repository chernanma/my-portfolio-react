import React from "react";
import mainBikeShopImage from "../../images/mainbikeshop.png";
import mainCovidImage from "../../images/maincovid.png";
import mainMbdirect from "../../images/mainmbdirect.png";

function Projects(props) {
  return (
    <div className="dark-grey-text text-center mb-4 py-5">
      <h2 className="h1-responsive font-weight-bold text-center">
        Recent Projects
      </h2>
      <p className="text-center text-muted w-responsive mx-auto mb-5">
        {" "}
        Here you can see some of the most important and recent projects that I
        have worked on over my career and studies at Johns Hopkins University
        Bootcamp
      </p>

      <div className="row py-5" >
        <div className="col-lg-4 col-md-4 mb-4">
          <div className="view overlay z-depth-2" style={{ height: "100%" }}>
            <img
              src={mainMbdirect}
              className="img-fluid"
              alt="MbDirect"
              style={{ height: "100%", width:"100%" }}
            />
            <div className="mask flex-center blue-gradient-rgba">
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://mbdirect.herokuapp.com/" target="blank"
              >
                Livesite
              </a>
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://github.com/chernanma/MBDirect" target="blank"
              >
                Repository
              </a>
            </div>
          </div>
          <p className="text-uppercase text-center text-muted mt-4 mb-0">
            MB Direct is application that connects users to businesses that
            meets their criteria. This app allows customers to link up with
            businesses directly, in return businesses can contact, inform,
            negotiate and deliver customer satisfaction. This website is fully
            functional, easy to navigate, with build in authentication for
            users.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 mb-4">
          <div className="view overlay z-depth-2" style={{ height: "100%" }}>
            <img
              src={mainBikeShopImage}
              className="img-fluid"
              alt="Bikeshop"
              style={{ height: "100%", width:"100%" }}
            />
            <div className="mask flex-center blue-gradient-rgba">
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://vast-woodland-01889.herokuapp.com/" target="blank"
              >
                Livesite
              </a>
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://github.com/chernanma/BikeShopApp" target="blank"
              >
                Repository
              </a>
            </div>
          </div>
          <p className="text-uppercase text-center text-muted mt-4 mb-0">
            Bicycle App shop is an eCommerce app that allows bike shop owners to
            sell cycling related products online, to shoppers through a very
            friendly UI. This webpage also provides a management system, along
            with operational features that allow owners to offer new products.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 mb-4">
          <div className="view overlay z-depth-2" style={{ height: "100%" }}>
            <img
              src={mainCovidImage}
              className="img-fluid"
              alt="Covid"
              style={{ height: "100%", width:"100%" }}
            />
            <div className=" mask flex-center blue-gradient-rgba">
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://chernanma.github.io/Project_1/" target="blank"
              >
                Livesite
              </a>
              <a
                className="btn btn-outline-white btn-rounded"
                href="https://github.com/chernanma/Project_1" target="blank"
              >
                Repository
              </a>
            </div>
          </div>
          <p className="text-uppercase text-center text-muted mt-4 mb-0">
            This Covid tracker application delivers the current covid19 updates
            and statistics nationwide. The User can search for any city and view
            instantaneous status and trends pertaining to the Coronavirus
            disease.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Projects;
