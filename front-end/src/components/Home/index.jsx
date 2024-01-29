import React from "react";

function Home() {
  return (
    <>
      <section className="slider full-screen pt-0">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active slider-area background_bg"
              data-img-src="image/slider-img-13.jpg"
            >
              <div className="banner_slide_content slider_content">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="slider_text text-white">
                        <h2
                          className="animation slider_heading1"
                          data-animation="fadeInLeft"
                          data-animation-delay="0.2s"
                        >
                          Summer
                        </h2>
                        <h3
                          className="animation slider_heading2"
                          data-animation="fadeInRight"
                          data-animation-delay="0.4s"
                        >
                          Collection
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner_img">
                <img
                  src="../../../user/image/banner_img.png"
                  alt="banner_img"
                />
              </div>
            </div>
            <div
              className="carousel-item slider-area background_bg"
              data-img-src="image/slider-img-12.jpg"
            >
              <div className="banner_slide_content left-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-7 col-9">
                      <div className="slider_caption">
                        <h1
                          className="animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.2s"
                        >
                          SUMMER SALE
                        </h1>
                        <p
                          className="animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.4s"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In ut ullamcorper leo, eget euismod orci.
                        </p>
                        <a
                          href="shop.html"
                          className="btn btn-primary rounded-0 animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.6s"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item slider-area background_bg"
              data-img-src="image/slider-img-14.jpg"
            >
              <div className="banner_slide_content center-align">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-md-6 col-sm-7 col-9">
                      <div className="slide_content">
                        <div
                          className="slider_strip animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.2s"
                        >
                          Get up to{" "}
                          <span className="text_default">50% off</span> Today
                          Only!
                        </div>
                        <h3
                          className="animation slider_heading3"
                          data-animation="fadeInRight"
                          data-animation-delay="0.4s"
                        >
                          Woman Fashion New Collection!
                        </h3>
                        <p
                          className="animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.6s"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In ut ullamcorper leo, eget euismod orci.
                        </p>
                        <a
                          href="shop.html"
                          className="btn btn-primary rounded-0 animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.8s"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_nav">
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <i className="ion-chevron-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <i className="ion-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="facility-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="facility_box bg_light_yellow">
                <div className="fb-icon">
                  <i className="fa fa-truck"></i>
                </div>
                <div className="fb-text">
                  <h5>FREE DELIVERY</h5>
                  <span>Free Shipping all Order</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="facility_box bg_light_blue">
                <div className="fb-icon">
                  <i className="fa fa-headphones"></i>
                </div>
                <div className="fb-text">
                  <h5>24/ 7 SUPPORT</h5>
                  <span>Customer Support</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="facility_box bg_light_pink">
                <div className="fb-icon">
                  <i className="fa fa-cc-mastercard"></i>
                </div>
                <div className="fb-text">
                  <h5>Secure Payment</h5>
                  <span>100% Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-products">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h4>POPULAR PRODUCTS</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-wrap">
                <ul
                  className="nav nav-tabs tab-style-2 justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="arrivals-tab"
                      data-toggle="tab"
                      href="#arrivals"
                      role="tab"
                      aria-controls="arrivals"
                      aria-selected="true"
                    >
                      <i className="icon icon-home"></i>New Arrivals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="sallers-tab"
                      data-toggle="tab"
                      href="#sallers"
                      role="tab"
                      aria-controls="sallers"
                      aria-selected="false"
                    >
                      <i className="icon icon-profile"></i>Best Sallers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="offer-tab"
                      data-toggle="tab"
                      href="#offer"
                      role="tab"
                      aria-controls="offer"
                      aria-selected="false"
                    >
                      <i className="icon icon-file-text"></i>Special Offer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="featured-tab"
                      data-toggle="tab"
                      href="#featured"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="false"
                    >
                      <i className="icon icon-file-text"></i>Featured Items
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tab-content products-style-4">
                <div
                  className="tab-pane fade show active"
                  id="arrivals"
                  role="tabpanel"
                  aria-labelledby="arrivals-tab"
                >
                  <div className="row">
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../userimage/product-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sallers"
                  role="tabpanel"
                  aria-labelledby="sallers-tab"
                >
                  <div className="row">
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="offer"
                  role="tabpanel"
                  aria-labelledby="offer-tab"
                >
                  <div className="row">
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="featured"
                  role="tabpanel"
                  aria-labelledby="featured-tab"
                >
                  <div className="row">
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/product-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-1.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="blue-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Variable product 001
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 78.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-2.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="white-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="red-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Ornare sed consequat
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 95.00</del>$ 81.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-3.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="pink-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="orange-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Pellentesque posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 90.00</del>$ 80.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-4 pb-2">
                      <div className="product-box common-cart-box text-center">
                        <div className="product-img common-cart-img">
                          <img
                            src="../../../user/image/saller-img-4.jpg"
                            alt="product-img"
                          />
                          <div className="hover-option">
                            <ul className="hover-icon">
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#test-popup3"
                                  className="quickview-popup-link"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-refresh"></i>
                                </a>
                              </li>
                            </ul>
                            <ul className="product-color">
                              <li>
                                <a href="#" className="black-dot"></a>
                              </li>
                              <li>
                                <a href="#" className="yellow-dot"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info common-cart-info">
                          <a href="product-detail.html" className="cart-name">
                            Consequat posuere
                          </a>
                          <div className="product-rate">
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star-half"></i>
                          </div>
                          <p className="cart-price">
                            <del>$ 50.00</del>$ 45.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_light_pink pt_large pb_large">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-4">
              <div className="deal_img">
                <a href="#">
                  <img src="../../../user/image/deal_img.png" alt="deal_img" />
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="deal_section text-center">
                <h2 className="deal_title">Ornare sed consequat</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci.
                </p>
                <div className="countdown_time" data-time="2020/03/15"></div>
                <a href="#" className="btn btn-primary rounded-0">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-saller pt_large pb_large">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h4>Best Saller</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="products-slider4 products-style-4 same-nav owl-carousel owl-theme"
                data-margin="30"
                data-dots="false"
                data-nav="true"
              >
                <div className="item">
                  <div className="product-box common-cart-box text-center">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/saller-img-1.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <ul className="hover-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#test-popup3"
                              className="quickview-popup-link"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-refresh"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="product-color">
                          <li>
                            <a href="#" className="blue-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="black-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="pink-dot"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info common-cart-info">
                      <a href="product-detail.html" className="cart-name">
                        Variable product 001
                      </a>
                      <div className="product-rate">
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star-half"></i>
                      </div>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 78.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box text-center">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/saller-img-2.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <ul className="hover-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#test-popup3"
                              className="quickview-popup-link"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-refresh"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="product-color">
                          <li>
                            <a href="#" className="white-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="yellow-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="pink-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="red-dot"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info common-cart-info">
                      <a href="product-detail.html" className="cart-name">
                        Ornare sed consequat
                      </a>
                      <div className="product-rate">
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star-half"></i>
                      </div>
                      <p className="cart-price">
                        <del>$ 95.00</del>$ 81.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box text-center">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/saller-img-3.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <ul className="hover-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#test-popup3"
                              className="quickview-popup-link"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-refresh"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="product-color">
                          <li>
                            <a href="#" className="black-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="pink-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="orange-dot"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info common-cart-info">
                      <a href="product-detail.html" className="cart-name">
                        Pellentesque posuere
                      </a>
                      <div className="product-rate">
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star-half"></i>
                      </div>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 80.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box text-center">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/saller-img-4.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <ul className="hover-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#test-popup3"
                              className="quickview-popup-link"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-refresh"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="product-color">
                          <li>
                            <a href="#" className="black-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="yellow-dot"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info common-cart-info">
                      <a href="product-detail.html" className="cart-name">
                        Consequat posuere
                      </a>
                      <div className="product-rate">
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star-half"></i>
                      </div>
                      <p className="cart-price">
                        <del>$ 50.00</del>$ 45.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box text-center">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/product-img-1.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <ul className="hover-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#test-popup3"
                              className="quickview-popup-link"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-refresh"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="product-color">
                          <li>
                            <a href="#" className="blue-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="black-dot"></a>
                          </li>
                          <li>
                            <a href="#" className="pink-dot"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info common-cart-info">
                      <a href="product-detail.html" className="cart-name">
                        Variable product 001
                      </a>
                      <div className="product-rate">
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star"></i>
                        <i className="ion-android-star-half"></i>
                      </div>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 78.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review-section gray-bg pt_large pb_large">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h4>client's say</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="carousel_slide2 same-nav owl-carousel owl-theme"
                data-margin="30"
                data-nav="true"
              >
                <div className="item">
                  <div className="fancy-box">
                    <div className="fancy-img">
                      <img
                        src="../../../user/image/testimonial-img-1.jpg"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="fancy-wrap">
                      <h5 className="testimonial-title">
                        <a href="#">Williamson</a>
                        <small className="post">Web Developer</small>
                      </h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="fancy-box">
                    <div className="fancy-img">
                      <img
                        src="../../../user/image/testimonial-img-2.jpg"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="fancy-wrap">
                      <h5 className="testimonial-title">
                        <a href="#">Williamson</a>
                        <small className="post">Web Developer</small>
                      </h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="fancy-box">
                    <div className="fancy-img">
                      <img
                        src="../../../user/image/testimonial-img-3.jpg"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="fancy-wrap">
                      <h5 className="testimonial-title">
                        <a href="#">Williamson</a>
                        <small className="post">Web Developer</small>
                      </h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam amet animi blanditiis consequatur
                        debitis dicta distinctio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section pt_large pb_medium">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h4>LATEST NEWS</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="news-box">
                <div className="news-img">
                  <img
                    src="../../../user/image/news-img-1.jpg"
                    alt="news-img"
                  />
                  <div className="date-box text-center text-uppercase">
                    <h5>
                      03 <br />
                      Jan
                    </h5>
                  </div>
                </div>
                <div className="news-info text-center">
                  <h5>
                    <a href="blog-detail.html">Simply tips for beauty</a>
                  </h5>
                  <p className="comments">
                    Posted by{" "}
                    <a href="#">
                      <i>admin</i> - 2 Comments
                    </a>
                  </p>
                  <p className="news-text">
                    Mauris eu euismod tellus curabitur a neque in nulla
                    iaculis...
                  </p>
                  <a href="blog-detail.html" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="news-box">
                <div className="news-img">
                  <img
                    src="../../../user/image/news-img-2.jpg"
                    alt="news-img"
                  />
                  <div className="date-box text-center text-uppercase">
                    <h5>
                      03 <br />
                      Jan
                    </h5>
                  </div>
                </div>
                <div className="news-info text-center">
                  <h5>
                    <a href="blog-detail.html">Simply tips for beauty</a>
                  </h5>
                  <p className="comments">
                    Posted by{" "}
                    <a href="#">
                      <i>admin</i> - 5 Comments
                    </a>
                  </p>
                  <p className="news-text">
                    Mauris eu euismod tellus curabitur a neque in nulla
                    iaculis...
                  </p>
                  <a href="blog-detail.html" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="news-box">
                <div className="news-img">
                  <img
                    src="../../../user/image/news-img-3.jpg"
                    alt="news-img"
                  />
                  <div className="date-box text-center text-uppercase">
                    <h5>
                      03 <br />
                      Jan
                    </h5>
                  </div>
                </div>
                <div className="news-info text-center">
                  <h5>
                    <a href="blog-detail.html">Simply tips for beauty</a>
                  </h5>
                  <p className="comments">
                    Posted by{" "}
                    <a href="#">
                      <i>admin</i> - 3 Comments
                    </a>
                  </p>
                  <p className="news-text">
                    Mauris eu euismod tellus curabitur a neque in nulla
                    iaculis...
                  </p>
                  <a href="blog-detail.html" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section pt_large pb_large">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title white-title text-center">
                <h4>Follow Our Updates!</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 col-sm-12">
              <div className="subscribe-inner text-center">
                <p>
                  If you want to get an email from us every time we have a new
                  special offer, then sign up here!
                </p>
                <form className="subscribe-form">
                  <div className="subscribe-input">
                    <input
                      className="rounded-0"
                      name="your-email"
                      required=""
                      placeholder="Enter Your Email"
                      type="email"
                    />
                  </div>
                  <div className="send-btn">
                    <button type="submit" className="btn btn-primary rounded-0">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
