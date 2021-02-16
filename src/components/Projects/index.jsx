import React from "react";
import mainBikeShopImage from "../../images/mainbikeshop.png";
import mainCovidImage from "../../images/maincovid.png";
function Projects(props){
    return (
        <div className="dark-grey-text text-center mb-4 py-5" id="portfolio">

            <h2 className="h1-responsive font-weight-bold text-center">Recent Projects</h2>
            <p className="text-center text-muted w-responsive mx-auto mb-5"> Here you can see some of the most important and recent projects that I have worked on over my career and studies at Johns Hopkins University Bootcamp</p>

            <div className="row py-5">

                <div className="col-lg-6 col-md-12 mb-4">

                    <div className="view overlay z-depth-2" style={{height: "75%"}}>
                        <img src={mainBikeShopImage} className="img-fluid" alt="Bikeshop"/>
                        <div className="mask flex-center blue-gradient-rgba">
                            <a className="btn btn-outline-white btn-rounded"
                                href="https://vast-woodland-01889.herokuapp.com/">Livesite</a>
                            <a className="btn btn-outline-white btn-rounded"
                                href="https://github.com/chernanma/BikeShopApp">Repository</a>
                        </div>
                    </div>
                    <p className="text-uppercase text-center text-muted mt-4 mb-0">Bicycle App shop is an eCommerce app
                        that allows bike shop owners to sell cycling related products online, to shoppers through a
                        very friendly UI. This webpage also provides a management system, along with operational
                        features that allow owners to offer new products.</p>

                </div>

                <div className="col-lg-6 col-md-6 mb-4">

                    <div className="view overlay z-depth-2" style={{height: "75%"}}>
                        <img src={mainCovidImage} className="img-fluid" alt="Sample image"/>
                        <div className=" mask flex-center blue-gradient-rgba">
                            <a className="btn btn-outline-white btn-rounded"
                                href="https://chernanma.github.io/Project_1/">Livesite</a>
                            <a className="btn btn-outline-white btn-rounded"
                                href="https://github.com/chernanma/Project_1">Repository</a>
                        </div>
                    </div>
                    <p className="text-uppercase text-center text-muted mt-4 mb-0">This Covid tracker application
                        delivers the current covid19 updates and statistics nationwide. The User can search for any
                        city and view instantaneous status and trends pertaining to the Coronavirus disease.</p>

                </div>

            </div>

               
        </div>

    );
}

export default Projects;