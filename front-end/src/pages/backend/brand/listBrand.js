import BrandService from "../../../service/brandService";
import { useEffect, useState } from "react";
import { urlImage, urlImg } from "./../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
// import { Toast } from "react-toastify/dist/components";
// import CreateBrand from "./CreateBrand";
import { toast, ToastContainer } from 'react-toastify';

const ListBrand = () => {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into brandservice
  useEffect(() => {
    (async () => {
      const result = await BrandService.getList();
      // result la variable ,brands is name table
      setBrands(result.data.brands);
    })();
  }, [load]);
  
  const handDelete = (id) => {
    // setStatus(0);
    console.log(status);
    var brand = new FormData();
    brand.append("status", 2);
    (async () => {
      const result = await BrandService.delete(brand, id);
      if (result.data.status === true) {
       alert("đổi trạng thái thành công")
        setLoad(Date.now());
      } else {
        alert("đổi trạng thái thất bại")
      }
    })();
  };

 

  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var brand = new FormData();
    brand.append("name", name);
    brand.append("description", description);
    brand.append("status", status);
    brand.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await BrandService.postBrand(brand);
      if (result.data.status == true) {
        setLoad(Date.now());
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thương hiệu</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên thương hiệu (*)</strong>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập tên danh mục"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="form-control"
                  placeholder="Mô tả"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hình đại diện</strong>
                </label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  name="status"
                  className="form-control"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-success" name="THEM">
                  <i className="fa fa-save" /> Lưu[Thêm]
                </button>
              </div>
              {/* <CreateBrand/> */}
            </form>
          </div>
          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <Link href="brand_index.html">Tất cả (123)</Link>
                  </li>
                  <li>
                    <Link href="#">Xuất bản (12)</Link>
                  </li>
                  <li>
                    <Link to="/admin/brand/trash">Rác (12)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-6">
                <select name className="d-inline me-1">
                  <option value>Hành động</option>
                  <option value>Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="btnsearch d-inline">Tìm kiếm</button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 30 }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
                    Hình ảnh
                  </th>
                  <th>Tên thương hiệu</th>
                  <th>Tên slug</th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands &&
                  brands.map((brand, index) => {
                    if (brand.status !== 0) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <img
                              className="img-fluid"
                              src={urlImage + "brand/" + brand.image}
                              alt="category.jpg"
                            />
                          </td>
                          <td>
                            <div className="name">
                              <Link to={"/admin/brand/edit/" + brand.id}>
                                {brand.name}
                              </Link>
                            </div>
                            <div className="function_style">
                              <Link href="#" className="px-1 text-success">
                              {/* <button className="px-1 text-success"> */}
                                {/* <FaToggleOn />
                                {brand.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button> */}
                              <button
                                onClick={() => handDelete(brand.id)}
                                className={
                                  brand.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {brand.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>
                              </Link>
                              <Link
                                to={"/admin/brand/edit/" + brand.id}
                                className="px-1 text-primary"
                                key={brand.id}
                              >
                                <FaRegEdit />
                                {/* <i className="fa fa-edit" /> */}
                              </Link>
                              <Link
                                to={"/admin/brand/show/" + brand.id}
                                className="px-1 text-info"
                              >
                                <BiShow />
                              </Link>
                              
                              <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handDelete(brand.id)}
                              >
                                <FaTrash />
                              </Link>
                            </div>
                          </td>
                          <td>{brand.slug}</td>
                          <td className="text-center">{brand.id}</td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListBrand;
