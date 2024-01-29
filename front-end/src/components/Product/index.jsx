import React, { useEffect, useState } from "react";
import ProductService from "../../service/ProductService";
import { urlImage, urlImg } from "../../config";
import { Form, Link } from "react-router-dom";
import CategoryService from "../../service/CategoryService";
import BrandServiece from "../../service/brandService";
import ReactPaginate from 'react-paginate';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [productsales, setProductsales] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [categories_id, setCategories_id] = useState(null);
  const [brand_id, setBrand_id] = useState(null);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState(1);
  const [findprice, setFindprice] = useState(null);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());

  //call API into productservice
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      // result la variable ,products is name table
      setProducts(result.data.products);

      //category
      const result_cate = await CategoryService.getList();
      // result la variable ,products is name table
      setCategories(result_cate.data.categories);

      //productsale
      const result_sale = await ProductService.getListSale();
      // result la variable ,products is name table
      setProductsales(result_sale.data.productsales);

      //brand
      const result_brand = await BrandServiece.getList();
      // result la variable ,products is name table
      setBrands(result_brand.data.brands);
    })();
  }, [load]);
  const findProduct = (price) => {
    return products.find((product) => (product.price = price));
  };
  const product = findProduct(findprice);
  // console.log(handleprice)
  const handleprice = (event) => {
    setFindprice(event.target.findprice);
  };
  const categoryCheckboxes = {};
  const handleCheckboxChange = (categoryId) => {
    const isChecked = categoryCheckboxes[categoryId].checked;
    // if (isChecked === true) {
    //   setCategories_id(categoryId);
    // } else setCategories_id(null);
    isChecked === true ? setCategories_id(categoryId) : setCategories_id(null);
    if (isChecked === false) {
      setLoad(Date.now());
    }
    console.log(categories_id);
  };
  const brandCheckboxes = {};
  const handleCheckboxChange_brand = (brand_id) => {
    const isChecked = brandCheckboxes[brand_id].checked;
    if (isChecked === true) {
      setBrand_id(brand_id);
    } else setBrand_id(null);
    // isChecked === true ? setBrand_id(brandId) : setBrand_id(null);
    if (isChecked === false) {
      setLoad(Date.now());
    }
    console.log(categories_id);
    console.log(brand_id);
  };

  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="../../../../user/image/shop-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>shop</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <span>shop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-inner-section pt_large pb_large">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-options d-sm-flex justify-content-between align-items-center">
                <div className="showing-items">
                  <p>Showing 1–9 of 15 results</p>
                </div>
                <div className="shop-list_grid">
                  <div className="list_grid-btns">
                    <a href="" className="list-view">
                      <i className="ion-navicon-round"></i>
                    </a>
                    <a href="" className="grid-view on">
                      <i className="ion-grid"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row list_grid_container grid justify-content-center">
                {products &&
                  products.map((product, index) => {
                    if (
                      categories_id !== null &&
                      brand_id === null &&
                      findProduct == null
                    ) {
                      if (product.category_id === categories_id) {
                        return (
                          <div className="col-md-3 col-5">
                            <div className="product-box common-cart-box box-1">
                              <div className="product-img common-cart-img">
                                <img
                                  src={urlImage + "product/" + product.image}
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
                                      <Link
                                        to={"/productDetail/" + product.id}
                                        className="quickview-popup-link"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </Link>
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
                                <a
                                  href="product-detail.html"
                                  className="cart-name"
                                >
                                  {product.name}
                                </a>
                                <p className="cart-price">
                                  <del>${product.price} $</del>
                                  {product.price}
                                </p>
                                <p className="product-list-text">
                                  {product.description}
                                </p>
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
                                      <Link
                                        href="#test-popup3"
                                        className="quickview-popup-link"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    }
                    //  else {
                    //   return (
                    //     <div className="col-md-4 col-6" style={{}}>
                    //       <div className="product-box common-cart-box box-1">
                    //         <div className="product-img common-cart-img">
                    //           <img
                    //             src={urlImage + "product/" + product.image}
                    //             alt="product-img"
                    //           />
                    //           <div className="hover-option">
                    //             <div className="add-cart-btn">
                    //               <a href="#" className="btn btn-primary">
                    //                 Add To Cart
                    //               </a>
                    //             </div>
                    //             <ul className="hover-icon">
                    //               <li>
                    //                 <a href="#">
                    //                   <i className="fa fa-heart"></i>
                    //                 </a>
                    //               </li>
                    //               <li>
                    //                 <Link
                    //                   to={"/productDetail/" + product.id}
                    //                   className="quickview-popup-link"
                    //                 >
                    //                   <i className="fa fa-eye"></i>
                    //                 </Link>
                    //               </li>
                    //               <li>
                    //                 <a href="#">
                    //                   <i className="fa fa-refresh"></i>
                    //                 </a>
                    //               </li>
                    //             </ul>
                    //           </div>
                    //         </div>
                    //         <div className="product-info common-cart-info text-center">
                    //           <a
                    //             href="product-detail.html"
                    //             className="cart-name"
                    //           >
                    //             {product.name}
                    //           </a>
                    //           <p className="cart-price">
                    //             <del>${product.price} $</del>
                    //             {product.price}
                    //           </p>
                    //           <p className="product-list-text">
                    //             {product.description}
                    //           </p>
                    //           <div className="hover-option">
                    //             <div className="add-cart-btn">
                    //               <a href="#" className="btn btn-primary">
                    //                 Add To Cart
                    //               </a>
                    //             </div>
                    //             <ul className="hover-icon">
                    //               <li>
                    //                 <a href="#">
                    //                   <i className="fa fa-heart"></i>
                    //                 </a>
                    //               </li>
                    //               <li>
                    //                 <Link
                    //                   href="#test-popup3"
                    //                   className="quickview-popup-link"
                    //                 >
                    //                   <i className="fa fa-eye"></i>
                    //                 </Link>
                    //               </li>
                    //               <li>
                    //                 <a href="#">
                    //                   <i className="fa fa-refresh"></i>
                    //                 </a>
                    //               </li>
                    //             </ul>
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </div>
                    //   );
                    // }
                    //---------------------
                    if (brand_id !== null && categories_id == null) {
                      if (product.brand_id === brand_id) {
                        return (
                          <div className="col-md-4 col-6">
                            <div className="product-box common-cart-box box-1">
                              <div className="product-img common-cart-img">
                                <img
                                  src={urlImage + "product/" + product.image}
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
                                      <Link
                                        to={"/productDetail/" + product.id}
                                        className="quickview-popup-link"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </Link>
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
                                <a
                                  href="product-detail.html"
                                  className="cart-name"
                                >
                                  {product.name}
                                </a>
                                <p className="cart-price">
                                  <del>${product.price} $</del>
                                  {product.price}
                                </p>
                                <p className="product-list-text">
                                  {product.description}
                                </p>
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
                                      <Link
                                        href="#test-popup3"
                                        className="quickview-popup-link"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    }
                    if (brand_id == null && categories_id == null) {
                      return (
                        <div className="col-md-4 col-6">
                          <div className="product-box common-cart-box box-1">
                            <div className="product-img common-cart-img">
                              <img
                                src={urlImage + "product/" + product.image}
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
                                    <Link
                                      to={"/productDetail/" + product.id}
                                      className="quickview-popup-link"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </Link>
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
                              <a
                                href="product-detail.html"
                                className="cart-name"
                              >
                                {product.name}
                              </a>
                              <p className="cart-price">
                                <del>${product.price} $</del>
                                {product.price}
                              </p>
                              <p className="product-list-text">
                                {product.description}
                              </p>
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
                                    <Link
                                      href="#test-popup3"
                                      className="quickview-popup-link"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-refresh"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    //--------------------
                    if (
                      brand_id == null &&
                      categories_id == null &&
                      findProduct !== 0
                    ) {
                      return (
                        <div className="col-md-4 col-6">
                          <div className="product-box common-cart-box box-1">
                            <div className="product-img common-cart-img">
                              <img
                                src={urlImage + "product/" + product.image}
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
                                    <Link
                                      to={"/productDetail/" + product.id}
                                      className="quickview-popup-link"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </Link>
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
                              <a
                                href="product-detail.html"
                                className="cart-name"
                              >
                                {product.name}
                              </a>
                              <p className="cart-price">
                                <del>${product.price} $</del>
                                {product.price}
                              </p>
                              <p className="product-list-text">
                                {product.description}
                              </p>
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
                                    <Link
                                      href="#test-popup3"
                                      className="quickview-popup-link"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-refresh"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    //--------------------
                  })}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12 order-lg-first">
              <div className="shop-sidebar">
                <div className="side-quantity-box side-box">
                  <div className="side-box-title">
                    <h6>Categories</h6>
                  </div>
                  <div className="quantity-box-detail">
                    <ul>
                      {categories &&
                        categories.map((category, index) => {
                          return (
                            <div className="checkbox-filter">
                              <div className="input-checkbox">
                                {/* <Link onClick={handleCheckboxChange(category.id)}> */}
                                <input
                                  type="checkbox"
                                  id={"category" + category.id}
                                  ref={(checkbox) => {
                                    categoryCheckboxes[category.id] = checkbox;
                                  }}
                                  onChange={() =>
                                    handleCheckboxChange(category.id)
                                  }
                                />
                                <label htmlFor={"category" + category.id}>
                                  <span />
                                  {category.name}
                                  {/* <small>(120)</small> */}
                                </label>
                                {/* </Link> */}
                              </div>
                            </div>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="side-filter-box side-box">
                  <div className="side-box-title">
                    <h6>Filter</h6>
                  </div>
                  <div className="filter-box-detail">
                    <div id="slider-range"></div>
                    <div className="price_slider_amount">
                      <div className="slider-values d-flex align-items-center">
                        <p>Price</p>
                        <input
                          value={findprice}
                          onChange={handleprice}
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-quantity-box side-box">
                  <div className="side-box-title">
                    <h6>Brand</h6>
                  </div>
                  <div className="quantity-box-detail">
                    <ul>
                      {brands &&
                        brands.map((brand, index) => {
                          return (
                            <div className="input-checkbox">
                              <input
                                type="checkbox"
                                id={"brand" + brand.id}
                                ref={(checkbox) => {
                                  brandCheckboxes[brand.id] = checkbox;
                                }}
                                onChange={() =>
                                  handleCheckboxChange_brand(brand.id)
                                }
                              />
                              <label htmlFor={"brand" + brand.id}>
                                <span />
                                {brand.name}
                              </label>
                            </div>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="side-quantity-box side-box">
                  <div className="side-box-title">
                    <h6>recent Product</h6>
                  </div>
                  <div className="side-recent-product">
                    <div className="cart-prodect d-flex">
                      <div className="cart-img">
                        <img
                          src="../../../../user/image/recent-product-1.png"
                          alt="recent-product"
                        />
                      </div>
                      <div className="cart-product">
                        <a href="product-detail.html">Ornare sed consequat</a>
                        <a href="product-detail.html" className="cp-comments">
                          <i className="fa fa-comments"></i> 5 Comments
                        </a>
                      </div>
                    </div>
                    <div className="cart-prodect d-flex">
                      <div className="cart-img">
                        <img
                          src="../../../../user/image/recent-product-2.png"
                          alt="recent-product"
                        />
                      </div>
                      <div className="cart-product">
                        <a href="product-detail.html">Pellentesque posuere</a>
                        <a href="product-detail.html" className="cp-comments">
                          <i className="fa fa-comments"></i> 5 Comments
                        </a>
                      </div>
                    </div>
                    <div className="cart-prodect d-flex">
                      <div className="cart-img">
                        <img
                          src="../../../../user/image/recent-product-3.png"
                          alt="recent-product"
                        />
                      </div>
                      <div className="cart-product">
                        <a href="product-detail.html">Pellentesque posuere</a>
                        <a href="product-detail.html" className="cp-comments">
                          <i className="fa fa-comments"></i> 5 Comments
                        </a>
                      </div>
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
