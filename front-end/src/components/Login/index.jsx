import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Login() {
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/cart-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>My Account</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>
                    <span>My Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt_large pb_large">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-md-6 mb-4 mb-md-0">
              <div className="title">
                <h4>Login</h4>
              </div>
              <form method="post" className="login_form ">
                <div className="form-group">
                  <label>
                    Username or email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    required=""
                    className="form-control"
                    name="username"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <input
                    className="form-control"
                    required=""
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group form-check p-0">
                  <label>
                    Remember me
                    <input
                      className="defult-check"
                      type="checkbox"
                      checked="checked"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <a href="#" className="forgot-password float-right">
                    Forgot Password ?
                  </a>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="login"
                    defaultValue="Log in"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
