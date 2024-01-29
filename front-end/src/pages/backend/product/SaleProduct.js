import { Link } from "react-router-dom";
import ProductService from "../../../service/ProductService";
import { urlImage } from "./../../../config";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SaleProduct = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      // result la variable ,products is name table
      setProducts(result.data.products);
    })();
  }, [load]);
  const handleSale = (id) => {
    try {
      (async function () {
        const datebegin = document.querySelector("#datebegin" + id);
        const dateend = document.querySelector("#dateend" + id);
        const pricesale = document.querySelector("#pricesale" + id);
        const productsale = {
          product_id: id,
          pricesale: pricesale.value,
          date_begin: datebegin.value,
          date_end: dateend.value,
        };
        await ProductService.storeSale(productsale);
        toast.success("Thêm khuyến mãi mới thành công!");
      })();
      setLoad(Date.now());
    } catch (error) {
      toast.error("Thêm thất bại!");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Khuyến mãi</h1>

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
            <Link to={"create"} className="btn-add" o>
              Thêm mới
            </Link>

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
                    <a href="admin/product/trash">Rác (12)</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="d-inline btnsearch">Tìm kiếm</button>
              </div>
            </div>
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
        <table className="table table-bordered" id="mytable2">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 30 }}>
                <input type="checkbox" id="checkboxAll" />
              </th>
              <th className="text-center" style={{ width: 90 }}>
                Hình ảnh
              </th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Ngày BĐ</th>
              <th>Ngày kết thúc</th>
              <th>Giá sale</th>
              <th> chức năng</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => (
                <tr className="datarow">
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      className="img-fluid"
                      id="image"
                      src={urlImage + "product/" + product.image}
                      alt="product.jpg"
                    />
                  </td>

                  <td>{product.name}</td>
                  <td className="text-center">{product.price}</td>
                  <td className="text-center align-middle">
                    <input type="date" id={"datebegin" + product.id}></input>
                  </td>
                  <td className="text-center align-middle">
                    <input type="date" id={"dateend" + product.id}></input>
                  </td>
                  <td className="text-center align-middle">
                    <input type="text" id={"pricesale" + product.id}></input>
                  </td>

                  <td className="text-center align-middle">
                    <button
                      onClick={() => handleSale(product.id)}
                      className="btn btn-sm btn-success"
                      type="button"
                    >
                      Thêm khuyến mãi
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SaleProduct;
