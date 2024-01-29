import { useEffect, useState } from "react";
import BrandService from "../../../service/brandService";
import { urlImage } from "../../../config";
const CreateBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await BrandService.getList();
      setBrands(result.data.brands);
    })();
  });

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thương hiệu</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label>
                <strong>Tên thương hiệu (*)</strong>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nhập tên danh mục"
                className="form-control"
                required=""
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Mô tả</strong>
              </label>
              <textarea
                name="description"
                rows="4"
                className="form-control"
                placeholder="Mô tả"
              ></textarea>
            </div>
            <div className="mb-3">
              <label>
                <strong>Hình đại diện</strong>
              </label>
              <input type="file" name="image" className="form-control" />
            </div>
            <div className="mb-3">
              <label>
                <strong>Trạng thái</strong>
              </label>
              <select name="status" className="form-control">
                <option value="1">Xuất bản</option>
                <option value="2">Chưa xuất bản</option>
              </select>
            </div>
            <div className="mb-3 text-end">
              <button type="submit" className="btn btn-success" name="THEM">
                <i className="fa fa-save"></i> Lưu[Thêm]
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <a href="brand_index.html">Tất cả (123)</a>
                  </li>
                  <li>
                    <a href="#">Xuất bản (12)</a>
                  </li>
                  <li>
                    <a href="brand_trash.html">Rác (12)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-6">
                <select name="" className="d-inline me-1">
                  <option value="">Hành động</option>
                  <option value="">Bỏ vào thùng rác</option>
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
                  <th className="text-center" style={{ width: "30px" }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: "90px" }}>
                    Hình ảnh
                  </th>
                  <th>Tên thương hiệu</th>
                  <th>Tên slug</th>
                  <th className="text-center" s style={{ width: "30px" }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands &&
                  brands.map((brand, index) => {
                    return (
                      <tr className="datarow">
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
                            <a href="brand_index.html">{brand.name}</a>
                          </div>
                          <div className="function_style">
                            <a href="#" className="px-1 text-success">
                              <i className="fa fa-toggle-on" />
                            </a>
                            <a
                              href="brand_edit.html"
                              className="px-1 text-primary"
                            >
                              <i className="fa fa-edit" />
                            </a>
                            <a
                              href="brand_show.html"
                              className="px-1 text-info"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#" className="px-1 text-danger">
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </td>
                        <td>{brand.slug}</td>
                        <td className="text-center">{brand.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBrand;
