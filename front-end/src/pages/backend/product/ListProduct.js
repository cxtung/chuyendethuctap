import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import { urlImage, urlImg } from "./../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into productservice
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();

      // result la variable ,products is name table
      setProducts(result.data.products);
      console.log(result.data.products);
    })();
  }, [load]);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    var product = new FormData();
    product.append("status", status);
    (async () => {
      // const result = await ProductService.Delete(product, id);
      ProductService.Delete(product, id);
      setLoad(Date.now());
    })();
  };
  const handDelete = (id) => {
    // setStatus(0);
    console.log(status);
    var product = new FormData();
    product.append("status", 0);
    (async () => {
      const result = await ProductService.Delete(product, id);
      if (result.data.status === true) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoad(Date.now());
      } else {
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Sản phẩm</h1>
        {/* <a href="product_create.html" className="btn-add">Thêm mới</a> */}
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <ul className="manager">
              <li>
                <a href="product_index.html">Tất cả (123)</a>
              </li>
              <li>
                <a href="#">Xuất bản (12)</a>
              </li>
              <li>
                <Link to={"/admin/product/trash"}>Rác (12)</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 text-end">
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
            <Link to={"create"} className="btn-add">
              Thêm mới
            </Link>
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 30 }}>
                <input type="checkbox" id="checkboxAll" />
              </th>
              <th className="text-center" style={{ width: 130 }}>
                Hình ảnh
              </th>
              <th>Tên sản phẩm</th>
              <th>Tên danh mục</th>
              <th>Tên thương hiệu</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => {
                if (product.status !== 0) {
                  return (
                    <tr className="datarow">
                      <td>
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          id="image"
                          src={urlImage + "product/" + product.image}
                          alt="product.jpg"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <a href="product_edit.html">{product.name}</a>
                        </div>
                        <div className="function_style">
                          <button
                            onClick={() => handleStatus(product.id)}
                            className={
                              product.status === 1
                                ? "border-0 px-1 text-success"
                                : "border-0 px-1 text-danger"
                            }
                          >
                            {product.status === 1 ? (
                              <FaToggleOn />
                            ) : (
                              <FaToggleOff />
                            )}
                          </button>
                          {/* </Link> */}
                          <Link
                            to={"/admin/product/edit/" + product.id}
                            className="px-1 text-primary"
                            key={product.id}
                          >
                            <FaRegEdit />
                            {/* <i className="fa fa-edit" /> */}
                          </Link>
                          <Link
                            to={"/admin/product/show/" + product.id}
                            className="px-1 text-info"
                          >
                            <BiShow />
                          </Link>
                          <Link
                            href="#"
                            className="px-1 text-danger"
                            onClick={() => handDelete(product.id)}
                          >
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                      <td>{product.category_id}</td>
                      <td>{product.brand_id}</td>
                      <td className="text-center" style={{ width: 30 }}>
                        {product.id}
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ListProduct;
