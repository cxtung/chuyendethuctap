import ProductService from "../../../service/ProductService";
import BrandService from "../../../service/brandService";
import CategoryService from "../../../service/CategoryService";
import { urlImage } from "./../../../config";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-router-dom";

const ImportProduct = () => {
  const [products, setProducts] = useState([]);
  // const [store, setStore] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [load, setLoad] = useState(Date.now());

  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      setProducts(result.data.products);

      const result_category = await CategoryService.getList();
      setCategory(result_category.data.categories);
      const result_brand = await BrandService.getList();
      setBrand(result_brand.data.brands);
    })();
  }, [load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var productstore = new FormData();
    // productstore.append("product_id", product_id);
    productstore.append("product_id", product_id);
    productstore.append("price", price);
    productstore.append("qty", qty);
    (async () => {
      const result = await ProductService.ImportProduct(productstore);
      if (result.data.status === true) {
        setLoad(Date.now());
      }
    })();
  };

  return (
    <form onSubmit={handSubmit}>
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Nhập sản phẩm</h1>
          <div className="row mt-3 align-items-center">
            <div className="col-12 text-end">
              <input type="text" className="search d-inline" />
              <button className="d-inline btnsearch">Tìm kiếm</button>
            </div>
          </div>
          <div className="row mt-1 align-items-center">
            <div className="col-md-8">
              <select name className="d-inline me-1">
                <option value>Hành động</option>
                <option value>Bỏ vào thùng rác</option>
              </select>
              <button className="btnapply">Áp dụng</button>
              <select name className="d-inline me-1">
                <option value>Tất cả danh mục</option>
              </select>
              <select name className="d-inline me-1">
                <option value>Tất cả thương hiệu</option>
              </select>
              <button className="btnfilter">Lọc</button>
            </div>
            <div className="col-md-4 text-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-sm justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link">«</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      »
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <ToastContainer />
        <section className="content-body my-2">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center" style={{ width: 90 }}>
                  Hình ảnh
                </th>
                <th>Tên sản phẩm</th>
                <th>Tên danh mục</th>
                <th>Tên thương hiệu</th>
                <th style={{ width: 90 }} className="text-center">
                  Số lượng
                </th>
                <th style={{ width: 180 }} className="text-center">
                  Giá nhập
                </th>
                <th style={{ width: 60 }} />
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product, index) => {
                  return (
                    <tr className="datarow" key={index}>
                      <td>
                        <img
                          className="img-fluid"
                          id="image"
                          src={urlImage + "product/" + product.image}
                          alt="product.jpg"
                        />
                      </td>
                      <td>{product.name}</td>
                      {category &&
                        category.map((category, index) => {
                          if (category.id === product.category_id) {
                            return <td>{category.name}</td>;
                          }
                        })}
                      {brand &&
                        brand.map((brand, index) => {
                          if (brand.id === product.brand_id) {
                            return <td>{brand.name}</td>;
                          }
                        })}
                      <td>
                        <input
                          type="number"
                          name="qty"
                          style={{ width: 90 }}
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="price"
                          value={price}
                          style={{ width: 180 }}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </td>
                      <td className="text-center">
                        <button
                          type="submit"
                          onclick="selectproduct(1)"
                          className="btn btn-sm btn-success"
                          onClick={() => setProduct_id(product.id)}
                        >
                          Lưu
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    </form>
  );
};

export default ImportProduct;
