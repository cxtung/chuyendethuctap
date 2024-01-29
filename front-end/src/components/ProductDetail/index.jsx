import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ProductService from "../../service/ProductService";
import { urlImage } from "../../config";

import { useParams } from "react-router-dom";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import "./style.css";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      setProducts(result.data.products);
      console.log("dsds", result.data);
    })();
  }, [id, load]);
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/pd-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>Product Detail</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <span>Product Detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-detail-section pt_large">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="product-image">
                <img
                  className="product_img"
                  src={urlImage + "product/" + products.image}
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
                <h2 className="box-title">{products.name}</h2>
                <h3 className="box-price">
                  <del>$ {products.price}</del>$ {products.price}
                </h3>
                <p className="box-text">
                  {products.description}
                </p>
                <p className="stock">
                  Availability: <span>In Stock</span>
                </p>
                <div className="quantity-box">
                  <p>Quantity:</p>
                  <div className="input-group">
                    <input type="button" value="-" className="minus" />
                    <input
                      className="quantity-number qty"
                      type="text"
                      value="1"
                      min="1"
                      max="10"
                    />
                    <input type="button" value="+" className="plus" />
                  </div>
                  <div className="quickview-cart-btn">
                    <a href="#" className="btn btn-primary">
                      <img
                        src="../../../user/image/cart-icon-1.png"
                        alt="cart-icon-1"
                      />{" "}
                      Add To Cart
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
        </div>
      </section>

      <section className="products-detail-tabs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="products-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="discription-tab"
                      data-toggle="tab"
                      href="#discription"
                      role="tab"
                      aria-controls="discription"
                      aria-selected="true"
                    >
                      Discription
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="ai-tab"
                      data-toggle="tab"
                      href="#ai"
                      role="tab"
                      aria-controls="ai"
                      aria-selected="false"
                    >
                      ADDITIONAL INFORMATION
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      REVIEWS (2)
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade tab-1 show active"
                    id="discription"
                    role="tabpanel"
                    aria-labelledby="discription-tab"
                  >
                    <div className="tab-title">
                      <h6>Discription</h6>
                    </div>
                    <div className="tab-caption">
                      <p>
                      {products.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade tab-2"
                    id="ai"
                    role="tabpanel"
                    aria-labelledby="ai-tab"
                  >
                    <div className="tab-title">
                      <h6>Additional information</h6>
                    </div>
                    <div className="tab-caption">
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colspan="1">Brand</td>
                              <td>FairPlay</td>
                            </tr>
                            <tr>
                              <td colspan="1">Season</td>
                              <td>Spring / Summer</td>
                            </tr>
                            <tr>
                              <td colspan="1">Color</td>
                              <td>Black</td>
                            </tr>
                            <tr>
                              <td colspan="1">Fit</td>
                              <td>Comfort</td>
                            </tr>
                            <tr>
                              <td colspan="1">Size</td>
                              <td>S</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade tab-3"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <div className="tab-title">
                      <h6>Costomer Reviews</h6>
                    </div>
                    <div className="tab-caption">
                      <div className="costomer-reviews">
                        <div className="costomer-reviews-box">
                          <div className="reviews-img">
                            <img
                              src="image/costomer-img.jpg"
                              alt="costomer-img"
                            />
                          </div>
                          <div className="reviews-text">
                            <p className="reviewer-name">admin</p>
                            <span className="reviews-date">
                              September 13, 2017
                            </span>
                            <p className="reviewer-text">
                              24/7 helpdesk is also available. I Love it!
                            </p>
                          </div>
                        </div>
                        <div className="costomer-reviews-box">
                          <div className="reviews-img">
                            <img
                              src="image/costomer-img.jpg"
                              alt="costomer-img"
                            />
                          </div>
                          <div className="reviews-text">
                            <p className="reviewer-name">admin</p>
                            <span className="reviews-date">
                              September 13, 2017
                            </span>
                            <p className="reviewer-text">
                              24/7 helpdesk is also available. I Love it!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-caption">
                      <div className="add-review">
                        <div className="tab-title">
                          <h6>Add a review</h6>
                        </div>
                        <form className="add-review-form">
                          <div className="input-1">
                            <input
                              required
                              className="form-control"
                              placeholder="Enter Your Name"
                              value=""
                              type="text"
                            />
                          </div>
                          <div className="input-2">
                            <input
                              required
                              className="form-control"
                              placeholder="Enter Your Email"
                              value=""
                              type="email"
                            />
                          </div>
                          <div className="input-3">
                            <textarea
                              required
                              rows="6"
                              className="form-control"
                              placeholder="Enter Your Review"
                            ></textarea>
                          </div>
                          <div className="input-btn">
                            <button type="submit" className="btn btn-secondary">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product pb_large">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h4>RELATED PRODUCTS</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="products-slider4 same-nav owl-carousel owl-theme"
                data-margin="30"
                data-dots="false"
              >
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img
                        src="../../../user/image/product-img-1.jpg"
                        alt="product-img"
                      />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Variable product 001
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 78.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-2.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Ornare sed consequat
                      </a>
                      <p className="cart-price">
                        <del>$ 95.00</del>$ 81.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-3.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Pellentesque posuere
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 80.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-4.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Consequat posuere
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 80.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-1.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Variable product 001
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 78.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-2.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Ornare sed consequat
                      </a>
                      <p className="cart-price">
                        <del>$ 95.00</del>$ 81.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-3.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Pellentesque posuere
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 80.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-box common-cart-box">
                    <div className="product-img common-cart-img">
                      <img src="image/product-img-4.jpg" alt="product-img" />
                      <div className="hover-option">
                        <div className="add-cart-btn">
                          <a href="#" className="btn btn-primary">
                            Add To Cart
                          </a>
                        </div>
                        <ul className="hover-icon">
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
                      </div>
                    </div>
                    <div className="product-info common-cart-info text-center">
                      <a href="product-detail.html" className="cart-name">
                        Consequat posuere
                      </a>
                      <p className="cart-price">
                        <del>$ 90.00</del>$ 80.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
