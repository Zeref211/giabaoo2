import React, { Component } from 'react';

class NewsDetail extends Component {
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
  {/* Mashead header*/}
  <header className="masthead">
    <div className="container px-5">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-6">
          {/* Mashead text and app badges*/}
          <div className="mb-5 mb-lg-0 text-center text-lg-center">
            <h1 className="display-1 lh-1 mb-3">Chi tiết tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <img src="http://placehold.it/800x400" className="img-fluid " alt="" />
      <p className="lead">Jumbo helper text</p>
      <hr className="my-2" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam,
        incidunt vel ullam iste molestias perspiciatis omnis tempora provident.
        Autem quis ipsa, accusantium laudantium optio consequuntur aliquam harum
        esse praesentium?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam,
        incidunt vel ullam iste molestias perspiciatis omnis tempora provident.
        Autem quis ipsa, accusantium laudantium optio consequuntur aliquam harum
        esse praesentium?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam,
        incidunt vel ullam iste molestias perspiciatis omnis tempora provident.
        Autem quis ipsa, accusantium laudantium optio consequuntur aliquam harum
        esse praesentium?
      </p>
    </div>
  </div>
  <div className="container">
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title">liên quna</h4>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <a href="chitiet.html">
                <img src="http://placehold.it/300x300" alt="" />
              </a>
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ducimus id praesentium soluta quae voluptatibus officiis ad
                  facilis, aliquam, sit doloribus cumque pariatur ipsum labore
                  beatae, commodi amet enim culpa?
                </p>
                <footer className="card-blockquote">
                  Footer<cite title="Source title">Source title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <a href="chitiet.html">
                <img src="http://placehold.it/300x300" alt="" />
              </a>
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ducimus id praesentium soluta quae voluptatibus officiis ad
                  facilis, aliquam, sit doloribus cumque pariatur ipsum labore
                  beatae, commodi amet enim culpa?
                </p>
                <footer className="card-blockquote">
                  Footer<cite title="Source title">Source title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <a href="chitiet.html">
                <img src="http://placehold.it/300x300" alt="" />
              </a>
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  ducimus id praesentium soluta quae voluptatibus officiis ad
                  facilis, aliquam, sit doloribus cumque pariatur ipsum labore
                  beatae, commodi amet enim culpa?
                </p>
                <footer className="card-blockquote">
                  Footer<cite title="Source title">Source title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

            </div>
        );
    }
}

export default NewsDetail;