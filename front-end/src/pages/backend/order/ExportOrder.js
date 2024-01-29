import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import CategoryService from "../../../service/CategoryService";
import BrandService from "../../../service/brandService";
import UserService from "./../../../service/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import OrderdetailService from "./../../../service/OrderdetailService";
import OrderService from "./../../../service/OrderService";
import { urlImage } from "./../../../config";

const ExportOrder = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [productSelects, setProductSelects] = useState([]);
  const [load, setLoad] = useState(Date.now());

  useEffect(() => {
    (async function () {
      const result_pro = await ProductService.getList();
      setProducts(result_pro.data.product);
    })();
    (async function () {
      const result_cate = await CategoryService.getList();
      setCategories(result_cate.data.category);
    })();
    (async function () {
      const result_brand = await BrandService.getList();
      setBrands(result_brand.data.brands);
    })();
    (async function () {
      const result_user = await UserService.getList();
      setUsers(result_user.data.users);
    })();
  }, [load]);
  const handleSelectProduct = (id) => {
    const ElImage = document.querySelector("#image" + id);
    const Elname = document.querySelector("#name" + id);
    const Elcategoryname = document.querySelector("#categoryname" + id);
    const Elbrandname = document.querySelector("#brandname" + id);
    const Elpricebuy = document.querySelector("#pricebuy" + id);
    const Elqty = document.querySelector("#qty" + id);
    const amount = Elqty.value * Elpricebuy.innerHTML;
    const productselect = {
      id: id,
      user_id: user.id,
      image: ElImage.alt,
      name: Elname.innerHTML,
      categoryname: Elcategoryname.innerHTML,
      brandname: Elbrandname.innerHTML,
      pricebuy: Elpricebuy.innerHTML,
      qty: Elqty.value,
      amount: amount,
    };
    var arrayNew = [...productSelects, productselect];
    setProductSelects(arrayNew);
    console.log(products);
  };
  const handleSelectUser = (id) => {
    try {
      (async function () {
        const result = await UserService.getId(id);
        setUser(result.data.users);
        console.log(user);
        toast.success("Thêm khách hàng thành công!");
        setLoad(Date.now());
      })();
    } catch (error) {
      toast.error("Thêm khách hàng thất bại!");
    }
  };
  const handleExport = () => {
    try {
      var orderr = new FormData();
      orderr.append("user_id", 1);
      (async () => {
        const result = await OrderService.store(user.id, productSelects);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Thêm đơn hàng mới thành công!");
        } else {
          toast.error("Thêm đơn hàng thất bại!");
        }
      })();
      // setTimeout(
      //   (() => {
      //     productSelects.map((productSelect) => {
      //       const product = {
      //         order_id: 19, // chưa lấy đươc order_id
      //         product_id: productSelect.id,
      //         price: productSelect.pricebuy,
      //         qty: productSelect.qty,
      //         amount: productSelect.amount,
      //       };
      //       OrderdetailService.store(product);
      //       console.log("data", product);
      //     });
      //   })(),
      //   1000
      // );
    } catch (err) {
      toast.error("Thêm thất bại!");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Xuất đơn hàng</h1>
        <a href="#" className="btn btn-secondary btn-sm">
          Thêm mới
        </a>
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <ul className="manager">
              <li>
                <a href="#">Tất cả (123)</a>
              </li>
              <li>
                <a href="#">Xuất bản (12)</a>
              </li>
              <li>
                <a href="#">Rác (12)</a>
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
            <select className="d-inline me-1">
              <option value>Hành động</option>
              <option value>Bỏ vào thùng rác</option>
            </select>
            <button className="btnapply">Áp dụng</button>
            <select className="d-inline me-1">
              <option value>Tất cả danh mục</option>
            </select>
            <select className="d-inline me-1">
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
        <div className="row">
          <div className="col-12 my-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropUser"
            >
              Chọn khách hàng
            </button>
            <div
              className="modal fade modal-xl"
              id="staticBackdropUser"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Danh sách khách hàng
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th></th>
                          <th>ID</th>
                          <th>Họ và tên</th>
                          <th>Giới tính</th>
                          <th>Điện thoại</th>
                          <th>Email</th>
                          {/* <th>Địa chỉ</th> */}
                          <th>Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users &&
                          users.map((user) =>
                            user.status != 0 ? (
                              <tr className="datarow" key={user.id}>
                                <th
                                  className="text-center"
                                  style={{ width: 30 }}
                                >
                                  <input type="checkbox" id="checkboxAll" />
                                </th>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td className="text-center align-middle">
                                  <button
                                    onClick={() => handleSelectUser(user.id)}
                                    className="btn btn-sm btn-success"
                                    type="button"
                                  >
                                    Thêm
                                  </button>
                                </td>
                              </tr>
                            ) : null
                          )}
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Xác nhận
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="rowshowcustome">
          <div className="col-md">
            <label>Họ tên (*)</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              readOnly
            />
          </div>
          <div className="col-md">
            <label>Email (*)</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              readOnly
            />
          </div>
          <div className="col-md">
            <label>Điện thoại (*)</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              readOnly
            />
          </div>
          <div className="col-md-5">
            <label>Địa chỉ (*)</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              readOnly
            />
          </div>
          <input type="hidden" name="user_id" />
        </div>
        <div className="row my-3">
          <div className="col-12 my-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropProduct"
            >
              Chọn sản phẩm
            </button>
            <div
              className="modal fade modal-xl"
              id="staticBackdropProduct"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Chọn sản phẩm
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
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
                          <th>Giá</th>
                          <th>ID</th>
                          <th>Qty</th>
                          <th className="text-center">Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products &&
                          products.map((product) =>
                            product.status != 0 ? (
                              <tr className="datarow" key={product.id}>
                                <td>
                                  <input type="checkbox" id="checkId" />
                                </td>
                                <td>
                                  <img
                                    className="img-fluid"
                                    src={urlImage + "product/" + product.image}
                                    alt={product.image}
                                    id={"image" + product.id}
                                  />
                                </td>
                                <td>
                                  <p id={"name" + product.id}>{product.name}</p>
                                </td>
                                {categories &&
                                  categories.map((category) => {
                                    return category.id ===
                                      product.category_id ? (
                                      <td
                                        key={category.id}
                                        id={"categoryname" + product.id}
                                        value={category.name}
                                      >
                                        {category.name}
                                      </td>
                                    ) : null;
                                  })}
                                {brands &&
                                  brands.map((brand) => {
                                    return brand.id === product.brand_id ? (
                                      <td
                                        key={brand.id}
                                        id={"brandname" + product.id}
                                      >
                                        {brand.name}
                                      </td>
                                    ) : null;
                                  })}
                                <td id={"pricebuy" + product.id}>
                                  {product.price}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ width: 30 }}
                                >
                                  {product.id}
                                </td>

                                <td>
                                  <input
                                    style={{ width: 60 }}
                                    name="qty"
                                    id={"qty" + product.id}
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="1"
                                  />
                                </td>
                                <td className="text-center">
                                  <button
                                    className="btn btn-success btn-xs px-2"
                                    type="button"
                                    onClick={() =>
                                      handleSelectProduct(product.id)
                                    }
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            ) : null
                          )}
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Xác nhận
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success float-end"
              onClick={() => handleExport()}
            >
              Xuất đơn
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 140 }}>
                    Hình ảnh
                  </th>
                  <th>Tên sản phẩm</th>
                  <th>Tên danh mục</th>
                  <th>Tên thương hiệu</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody id="bodyproduct">
                {productSelects &&
                  productSelects.map((product) =>
                    product.status != 0 ? (
                      <tr className="datarow" key={product.id}>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImage + "product/" + product.image}
                            alt={product.image}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.categoryname}</td>
                        <td>
                          {/* {product.brandname && product.brandname === "H&amp;M"
                            ? "H&M"
                            : null} */}
                          {product.brandname}
                        </td>
                        <td>{product.pricebuy}</td>
                        <td>{product.qty}</td>
                        <td>{product.amount}</td>
                      </tr>
                    ) : null
                  )}
                {/* <td>
                  <input
                    style={{ width: 60 }}
                    name="qty[]"
                    type="number"
                    min={0}
                  />
                </td>
                <td>ThanhTine</td>
                <td>
                  <button className="btn btn-danger btn-xs px-2">X</button>
                </td> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportOrder;
