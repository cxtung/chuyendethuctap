import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-box box-1">
                  <h6 className="fb-title">ABOUT US</h6>
                  <div className="fb-iner">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 order-md-last">
                <div className="footer-box box-4">
                  <h6 className="fb-title">CONTACT INFO</h6>
                  <div className="fb-iner">
                    <ul>
                      <li>
                        <i className="ion-ios-location-outline"></i>
                        <p>
                          c/o Giunti International Division Via G.B. Pirelli, 30
                          20124 Milan
                        </p>
                      </li>
                      <li>
                        <i className="ion-ios-telephone-outline"></i>
                        <p>+025 2155 3255</p>
                      </li>
                      <li>
                        <i className="ion-ios-email-outline"></i>
                        <a href="#">info@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <div className="footer-box box-2">
                  <h6 className="fb-title">CATEGORIES</h6>
                  <div className="fb-iner">
                    <ul className="footer-links">
                      <li>
                        <a href="#">Fashion Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                      <li>
                        <a href="#">Outdoor Shop</a>
                      </li>
                      <li>
                        <a href="#">Pants</a>
                      </li>
                      <li>
                        <a href="#">Shirts & Tops</a>
                      </li>
                      <li>
                        <a href="#">Swim Shop</a>
                      </li>
                      <li>
                        <a href="#">Swimwear</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <div className="footer-box box-3">
                  <h6 className="fb-title">MY ACCOUNT</h6>
                  <div className="fb-iner">
                    <ul className="footer-links">
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Compare</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Log In</a>
                      </li>
                      <li>
                        <a href="#">Register</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>Copyright © 2018. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social text-md-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <div
        className="modal fade bd-example-modal-lg main-popup"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="newsletter-pop-up d-flex">
                <div className="popup-img">
                  <img src="image/1_popup-img.jpg" alt="popup-img" />
                </div>
                <div className="popup-form text-center">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="ion-close-round"></i>
                    </span>
                  </button>
                  <div className="popup-logo">
                    <img src="image/logo.png" alt="logo" />
                  </div>
                  <div className="popup-text">
                    <p>Join us Now</p>
                    <h6>And get hot news about the theme</h6>
                  </div>
                  <form
                    className="subscribe-popup-form"
                    method="post"
                    action="#"
                  >
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button
                      className="btn btn-primary"
                      title="Subscribe"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="form-check">
                    <label>
                      Don't show this popup again!
                      <input
                        className="defult-check"
                        type="checkbox"
                        checked="checked"
                        onChange={(e) => {}}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="test-popup3" className="white-popup quickview-popup mfp-hide">
        <button
          type="button"
          className="mfp-close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i className="ion-close-round"></i>
          </span>
        </button>
        <div className="row">
          <div className="col-md-5">
            <div className="product-image">
              <img
                id="product_img"
                src="image/product1.png"
                data-zoom-image="image/product1.png"
              />
            </div>
            <div
              id="pr_item_gallery"
              className="product_gallery_item owl-thumbs-slider owl-carousel owl-theme"
            >
              <div className="item">
                <a
                  href="#"
                  className="active"
                  data-image="image/product1.png"
                  data-zoom-image="image/product1.png"
                >
                  <img src="image/product_small1.png" />
                </a>
              </div>
              <div className="item">
                <a
                  href="#"
                  data-image="image/product2.png"
                  data-zoom-image="image/product2.png"
                >
                  <img src="image/product_small2.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="quickview-product-detail">
              <h2 className="box-title">Ornare sed consequat</h2>
              <h3 className="box-price">
                <del>$ 95.00</del>$ 81.00
              </h3>
              <p className="box-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="stock">
                Availability: <span>In Stock</span>
              </p>
              <div className="quantity-box">
                <p>Quantity:</p>
                <div className="input-group">
                  <input type="button" defaultValue="-" className="minus" />
                  <input
                    className="quantity-number qty"
                    type="text"
                    defaultValue="1"
                    min="1"
                    max="10"
                  />
                  <input type="button" defaultValue="+" className="plus" />
                </div>
                <div className="quickview-cart-btn">
                  <a href="#" className="btn btn-primary">
                    <img src="image/cart-icon-1.png" alt="cart-icon-1" /> Add To
                    Cart
                  </a>
                </div>
              </div>
              <div className="box-social-like d-sm-flex justify-content-between">
                <ul className="hover-icon box-like">
                  <li>
                    <a href="#">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-refresh"></i>
                    </a>
                  </li>
                </ul>
                <ul className="hover-icon box-social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
