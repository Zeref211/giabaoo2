import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <>
  <nav
    className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
    id="mainNav"
  >
    <div className="container px-5">
      <a className="navbar-brand fw-bold" href="index.html">
        Text react js
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="bi-list" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li className="nav-item">
            <a className="nav-link me-lg-3" href="tintuc.html">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-lg-3" href="tintuc.html">
              Tin chi tiết
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-lg-3" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          data-bs-toggle="modal"
          data-bs-target="#feedbackModal"
        >
          <span className="d-flex align-items-center">
            <i className="bi-chat-text-fill me-2" />
            <span className="small">Send Feedback</span>
          </span>
        </button>
      </div>
    </div>
  </nav>
  <header
    className="masthead"
    style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
  >
    <div className="container position-relative px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="page-heading">
            <h1>Contact Me</h1>
            <span className="subheading">Have questions? I have answers.</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content*/}
  <main className="mb-4">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>
          <div className="my-5">
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-floating">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label htmlFor="name">Name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  data-sb-validations="required,email"
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number..."
                  data-sb-validations="required"
                />
                <label htmlFor="phone">Phone Number</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message here..."
                  style={{ height: "12rem" }}
                  data-sb-validations="required"
                  defaultValue={""}
                />
                <label htmlFor="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              <br />
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* Submit Button*/}
              <button
                className="btn btn-primary text-uppercase disabled"
                id="submitButton"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

            </div>
        );
    }
}

export default Contact;