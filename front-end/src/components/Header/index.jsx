import React, { useEffect } from "react";
// import "./public/css/frontend.css";
// import "./public/bootstrap/css/bootstrap.min.css";
// import "./public/js/backend.js";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useCart } from "../../Context/CardContext";

const Header = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, cartTotal } =
    useCart();

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="header_list text-md-left text-center">
                  <li>
                    <a href="tel:+ 00 123 456 789">
                      <i className="fa fa-phone"></i>+ 00 123 456 789
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@gmail.com">
                      <i className="fa fa-envelope-o"></i>info@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="header_list text-md-right text-center">
                  <li>
                    <a href="/login" className="open-popup-link">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mdl">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hm-inner d-sm-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <a href="/">
                      <img src="../../../user/image/logo.png" alt="logo" />
                    </a>
                  </div>
                  <form className="header-form">
                    <input
                      className="search-box"
                      placeholder="Search Product..."
                      required
                      defaultValue=""
                      type="search"
                      onChange={() => {}}
                    />
                    <button type="submit">Search</button>
                  </form>
                  <div className="header-right">
                    <div className="header-cart">
                      <a href="">
                        <div className="cart-icon">
                          <img
                            src="../../../user/image/cart-icon.png"
                            alt="cart-icon"
                          />
                          <span>{cartItems.length}</span>
                        </div>
                        $237.00<i className="fa fa-angle-down"></i>
                      </a>
                      <div className="cart-box">
                        <div className="cart-info">
                          {cartItems.length > 0 &&
                            cartItems.map((item, index) => (
                              <div key={index} className="cart-prodect d-flex">
                                <div className="cart-img">
                                  <img
                                    src="../../../user/image/cart-img-1.png"
                                    alt="cart-img"
                                  />
                                </div>
                                <div className="cart-product">
                                  <a href="#">{item.name}</a>
                                  <p>$ 81.00</p>
                                </div>
                                <a
                                  href="#"
                                  className="close-icon d-flex align-items-center"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <i className="ion-close"></i>
                                </a>
                              </div>
                            ))}
                        </div>
                        <div className="price-prodect d-flex align-items-center justify-content-between">
                          <p className="total">total</p>
                          <p className="total-price">$ 161.00</p>
                        </div>
                        <div className="cart-btn">
                          <a href="/cart" className="btn btn-primary">
                            View Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-lg-none mm_icon">
                      <div className="form-captions" id="search">
                        <button type="submit" className="submit-btn-2">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <i className="fa fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-btm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="header-logo">
                    <a href="#">
                      <img src="image/logo.png" alt="logo" />
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggler"
                          href="/"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link dropdown-toggler"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Featured<i className="fa fa-angle-down"></i>
                          <i className="fa fa-angle-right"></i>
                        </a>
                        <div className="sub-menu mega-menu dropdown-menu">
                          <ul>
                            <li className="submenu-links nav-item dropdown">
                              <a
                                href="#"
                                className="menu-title dropdown-toggler"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Dresses<i className="fa fa-angle-down"></i>
                                <i className="fa fa-angle-right"></i>
                              </a>
                              <ul className="all-menu dropdown-menu">
                                <li>
                                  <a href="#">Cocktail</a>
                                </li>
                                <li>
                                  <a href="#">Day</a>
                                </li>
                                <li>
                                  <a href="#">Evening</a>
                                </li>
                                <li>
                                  <a href="#">Sundresses</a>
                                </li>
                                <li>
                                  <a href="#">Sweater</a>
                                </li>
                                <li>
                                  <a href="#">Belts</a>
                                </li>
                              </ul>
                            </li>
                            <li className="submenu-links dropdown">
                              <a
                                href="#"
                                className="menu-title dropdown-toggler"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Accessories<i className="fa fa-angle-down"></i>
                                <i className="fa fa-angle-right"></i>
                              </a>
                              <ul className="all-menu dropdown-menu">
                                <li>
                                  <a href="#">Evening</a>
                                </li>
                                <li>
                                  <a href="#">Long Sleeved</a>
                                </li>
                                <li>
                                  <a href="#">Sort Sleeved</a>
                                </li>
                                <li>
                                  <a href="#">Sleeveless</a>
                                </li>
                                <li>
                                  <a href="#">Tanks and Camis</a>
                                </li>
                                <li>
                                  <a href="#">T-shirts</a>
                                </li>
                              </ul>
                            </li>
                            <li className="submenu-links dropdown">
                              <a
                                href="#"
                                className="menu-title dropdown-toggler"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Tops<i className="fa fa-angle-down"></i>
                                <i className="fa fa-angle-right"></i>
                              </a>
                              <ul className="all-menu dropdown-menu">
                                <li>
                                  <a href="#">Cocktail</a>
                                </li>
                                <li>
                                  <a href="#">Day</a>
                                </li>
                                <li>
                                  <a href="#">Evening</a>
                                </li>
                                <li>
                                  <a href="#">Sundresses</a>
                                </li>
                                <li>
                                  <a href="#">Sweater</a>
                                </li>
                                <li>
                                  <a href="#">Belts</a>
                                </li>
                              </ul>
                            </li>
                            <li className="submenu-img">
                              <a href="#">
                                <img
                                  src="image/header-banner.jpg"
                                  alt="banner"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link dropdown-toggler"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Shop<i className="fa fa-angle-down"></i>
                          <i className="fa fa-angle-right"></i>
                        </a>
                        <div className="sub-menu dropdown-menu">
                          <ul className="all-menu">
                            <li className="active">
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="product-detail.html">Product Detail</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link dropdown-toggler" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/product">
                          Product
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
