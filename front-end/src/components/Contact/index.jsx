import React from "react";

function Contact() {
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/contact-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>Contact</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-inner-page pt_large">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="contact-inputs">
                <div className="title text-left">
                  <h4>Leave a Message</h4>
                </div>
                <form
                  method="post"
                  name="enq"
                  className="contact-form form-with-label"
                >
                  <div className="input-1">
                    <label>
                      Your Name<span>*</span>
                    </label>
                    <input
                      required=""
                      className="form-control"
                      id="first-name"
                      placeholder="Enter Your Name"
                      defaultValue=""
                      type="text"
                    />
                  </div>
                  <div className="input-2">
                    <label>
                      Your Email<span>*</span>
                    </label>
                    <input
                      required=""
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                      defaultValue=""
                      type="email"
                    />
                  </div>
                  <div className="input-3">
                    <label>
                      Your Phone<span>*</span>
                    </label>
                    <input
                      required=""
                      className="form-control"
                      id="phone"
                      placeholder="Enter Your Phone"
                      defaultValue=""
                      type="text"
                    />
                  </div>
                  <div className="input-4">
                    <label>
                      subject<span>*</span>
                    </label>
                    <input
                      required=""
                      className="form-control"
                      id="subject"
                      placeholder="Enter Your Subject"
                      defaultValue=""
                      type="text"
                    />
                  </div>
                  <div className="input-5">
                    <label>
                      Message<span>*</span>
                    </label>
                    <textarea
                      required=""
                      rows="3"
                      className="form-control"
                      id="description"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="submit-btn">
                    <button
                      type="submit"
                      id="submitButton"
                      className="btn btn-primary"
                    >
                      submit
                    </button>
                  </div>
                  <div className="col-md-12">
                    <div id="alert-msg" className="alert-msg text-center"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact-details">
                <div className="title text-left">
                  <h4>Let's be in touch</h4>
                </div>
                <div className="contact-inner">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                  </p>
                  <ul className="contact-locations">
                    <li>
                      <span className="fa fa-map-marker"></span>
                      <p>6036 Richmond hwy., Alexandria, VA 22303</p>
                    </li>
                    <li>
                      <span className="fa fa-phone"></span>
                      <p>+025 2155 3255</p>
                    </li>
                    <li>
                      <span className="fa fa-envelope-o"></span>
                      <a href="#">info@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
