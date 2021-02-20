import React from "react";

function Footer(props) {
  return (
    <footer className="page-footer font-small special-color-dark ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
              <a
                className="fb-ic"
                href="https://www.facebook.com/cesarhernan.martineza/"
                target="_blank"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a
                className="github-ic"
                href="https://github.com/chernanma"
                target="_blank"
              >
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a
                className="li-ic"
                href="https://www.linkedin.com/in/cesar-martinez-3986b3120/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a
                className="ins-ic"
                href="https://www.instagram.com/chernanma/"
                target="_blank"
              >
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
