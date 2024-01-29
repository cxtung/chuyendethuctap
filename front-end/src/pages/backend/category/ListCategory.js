import { useEffect, useState } from "react";
import { urlImage, urlImg } from "./../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import CategoryService from "../../../service/CategoryService";
const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //call API into brandservice
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getList();
      // result la variable ,brands is name table
      setCategories(result.data.categories);
    })();
  }, [load]);

  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    console.log(status);
    var category = new FormData();
    category.append("status", status);
    (async () => {
      // const result = await BrandService.Delete(brand, id);
      CategoryService.Delete(category, id);
      setLoad(Date.now());
    })();
  };

  const handDelete = (id) => {
    // setStatus(0);
    console.log(status);
    var category = new FormData();
    category.append("status", 2);
    (async () => {
      const result = await CategoryService.DeleteTrashCategory(category, id);
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
    var category = new FormData();
    category.append("name", name);
    category.append("status", status);
    category.append("description", description);

    category.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await CategoryService.postCategory(category);

      setLoad(Date.now());
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Danh mục</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên danh mục (*)</strong>
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
                  name="description"
                  placeholder="Mô tả"
                  rows={4}
                  className="form-control"
                  defaultValue={""}
                  onChange={(e) => setDescription(e.target.value)}
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
                  className="form-select"
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
            </form>
          </div>

          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <a href="category_index.html">Tất cả (123)</a>
                  </li>
                  <li>
                    <a href="#">Xuất bản (12)</a>
                  </li>
                  <li>
                    <a href="category_trash.html">Rác (12)</a>
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
                <button className="d-inline btnsearch">Tìm kiếm</button>
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
                  <th>Tên danh mục</th>
                  <th>Tên slug</th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category, index) => {
                    if (category.status !== 0) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <img
                              className="img-fluid"
                              src={urlImage + "category/" + category.image}
                              alt="category.jpg"
                            />
                          </td>
                          <td>
                            <div className="name">
                              <Link to={"/admin/category/edit/" + category.id}>
                                {category.name}
                              </Link>
                            </div>
                            <div className="function_style">
                              {/* <Link href="#" className="px-1 text-success"> */}
                              {/* <button className="px-1 text-success">
                                <FaToggleOn />
                                {brand.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button> */}
                              <button
                                onClick={() => handDelete(category.id)}
                                className={
                                  category.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {category.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>
                              {/* </Link> */}
                              <Link
                                to={"/admin/category/edit/" + category.id}
                                className="px-1 text-primary"
                                key={category.id}
                              >
                                <FaRegEdit />
                                {/* <i className="fa fa-edit" /> */}
                              </Link>
                              <Link
                                to={"/admin/category/show/" + category.id}
                                className="px-1 text-info"
                              >
                                <BiShow />
                              </Link>
                              <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handDelete(category.id)}
                              >
                                <FaTrash />
                              </Link>
                            </div>
                          </td>
                          <td>{category.slug}</td>
                          <td className="text-center">{category.id}</td>
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

export default ListCategory;
