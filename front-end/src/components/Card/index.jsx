import React from "react";
import { useCart } from "../../Context/CardContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, cartTotal } =
    useCart();
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
                <h1>my cart</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>
                    <span>cart</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-section pt_large">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr className="row-1">
                      <th className="row-title">
                        <p>Item</p>
                      </th>
                      <th className="row-title">
                        <p>Product Name</p>
                      </th>
                      <th className="row-title">
                        <p>Price</p>
                      </th>
                      <th className="row-title">
                        <p>Quantity</p>
                      </th>
                      <th className="row-title">
                        <p>Subtotal</p>
                      </th>
                      <th className="row-title">
                        <p></p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row-2">
                      <td
                        className="row-close close-1"
                        data-title="product-remove"
                      >
                        <a href="#">
                          <i className="ion-close-circled"></i>
                        </a>
                      </td>
                      <td className="row-img">
                        <img
                          src="../../../user/image/cart-inner-img-1.jpg"
                          alt="cart-img"
                        />
                      </td>
                      <td className="product-name" data-title="Product">
                        <a href="#">Variable product 001</a>
                      </td>
                      <td className="product-price" data-title="Price">
                        <p>$ 78.00</p>
                      </td>
                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity_filter">
                          <input type="button" value="-" className="minus" />
                          <input
                            className="quantity-number qty"
                            type="text"
                            value="2"
                            min="1"
                            max="10"
                          />
                          <input type="button" value="+" className="plus" />
                        </div>
                      </td>
                      <td className="product-total" data-title="Subprice">
                        <p>$ 156.00</p>
                      </td>
                      <td
                        className="row-close close-2"
                        data-title="product-remove"
                      >
                        <a href="#">
                          <i className="ion-close-circled"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="row-3">
                      <td
                        className="row-close close-1"
                        data-title="product-remove"
                      >
                        <a href="#">
                          <i className="ion-close-circled"></i>
                        </a>
                      </td>
                      <td className="row-img">
                        <img
                          src="../../../user/image/cart-inner-img-2.jpg"
                          alt="cart-img"
                        />
                      </td>
                      <td className="product-name" data-title="Product">
                        <a href="#">Ornare sed consequat</a>
                      </td>
                      <td className="product-price" data-title="Price">
                        <p>$ 81.00</p>
                      </td>
                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity_filter">
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
                      </td>
                      <td className="product-total" data-title="Subprice">
                        <p>$ 81.00</p>
                      </td>
                      <td
                        className="row-close close-2"
                        data-title="product-remove"
                      >
                        <a href="#">
                          <i className="ion-close-circled"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="12">
                        <ul className="table-btn">
                          <li>
                            <a href="/" className="btn btn-secondary">
                              <i className="fa fa-chevron-left"></i>Continue
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn btn-primary">
                              <i className="fa fa-refresh"></i>Update cart
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-box-section pb_large">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="cart-inner-box box-1 text-center">
                <div className="ci-title">
                  <h6>Promotional code</h6>
                </div>
                <div className="ci-caption">
                  <p>Enter Your Coupon Code If you have one</p>
                  <form>
                    <input
                      required=""
                      className="form-control"
                      type="text"
                      placeholder="Coupon Code"
                    />
                    <button className="btn btn-secondary" type="submit">
                      Apply Coupon Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cart-inner-box box-2 text-center">
                <div className="ci-title">
                  <h6>Cart Total</h6>
                </div>
                <div className="ci-caption">
                  <ul>
                    <li>
                      Subtotal <span>$237.00</span>
                    </li>
                    <li>
                      Total <span>$237.00</span>
                    </li>
                  </ul>
                </div>
                <div className="ci-btn">
                  <a
                    href="checkout.html"
                    className="btn btn-primary btn-block rounded-0"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
