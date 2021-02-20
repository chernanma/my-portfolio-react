import React from "react";

function Contact(props) {
  console.log(props.status);
  return (
    <section className="dark-grey-text text-center full-height" id="contact">
      <h2 className="h1-responsive font-weight-bold text-center ">
        Contact Me
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact me
        directly.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={props.handleInputNameChange}
                  />
                  <label>
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={props.handleInputEmailChange}
                  />
                  <label>Your email</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    onChange={props.handleInputSubjectChange}
                  />
                  <label >Subject</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    onChange={props.handleInputMessageChange}
                  ></textarea>
                  <label >Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <a className="btn btn-info" onClick={props.validateForm}>
              Send
            </a>
          </div>
          {props.status !== "none" ? (
            <>
              {props.status === "Sending..." ? (
                <div class="alert alert-success">
                  <strong>{props.status}!</strong>
                </div>
              ) : (
                <div class="alert alert-warning">
                  <strong>Warning!</strong> {props.status}
                </div>
              )}
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>New Market, MD 21774, USA</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>
                <a href="tel: +13016932976">(301) 693-2976</a>
              </p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>
                <a href="mailto: chernanma@msn.com">chernanma@msn.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
