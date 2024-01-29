import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";
import { FaTrash, FaEye, FaToggleOn } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BannerService from "../../../service/BannerService";
// import "../../../asset/";

const ListBanner = () => {
  const [banners, setBanners] = useState([]);
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    const funcitionn = async () => {
      const result = await BannerService.getList();
      setBanners(result.data.banner);
    };
    funcitionn();
  }, [load]);
  const handTrash = (id) => {
    // setStatus(0);
    console.log(status);
    // console.log(`id:${id}`);
    var banner = new FormData();
    banner.append("status", 0);
    (async () => {
      const result = await BannerService.Trash(banner, id);
      if (result.data.status === true) {
        toast.success('Chuyển vào thùng rác thành công', 'title')
        // alert("Xóa thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  const handleEdit = () => {
    alert(1);
  };

  return (
    <div className="content" style={{ padding: 20 }}>
      <section className="content-header my-2">
        <h1 className="d-inline">Banner</h1>
        <div className="text-end">
          <Link to={"/admin/banner/create"} className="btn btn-sm btn-success">
            <i className="fa fa-plus" /> Thêm banner
          </Link>
          <Link to="/admin/banner/trash" className="btn btn-sm btn-danger">
            <i className="fa fa-trash" /> Thùng rác
            </Link>
        </div>
        <hr style={{ border: "none" }} />
      </section>
      <ToastContainer />
      <section className="content-body my-2">
        <div>
          <section className="content-header my-2">
            <div className="row mt-3 align-items-center">
              <div className="col-6">
                <ul className="manager">
                  <li>
                    <a href="banner_index.html">Tất cả (123)</a>
                  </li>
                  <li>
                    <a href="#">Xuất bản (12)</a>
                  </li>
                  <li>
                    <a href="banner_trash.html">Rác (12)</a>
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
                  <option value>Tất cả vị trí</option>
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
                  <th>Tên banner</th>
                  <th>Vị trí</th>
                  <th>Liên kết</th>
                  <th>Mô tả</th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {banners &&
                  banners.map((banner) =>
                    banner.status != 0 ? (
                      <tr className="datarow" key={banner.id}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImage + "banner/" + banner.image}
                            alt={banner.image}
                          />
                        </td>
                        <td>
                          <div className="name">
                            <a href="/admin/banner">{banner.name}</a>
                          </div>
                          <div className="function_style">
                            {banner.status === 1 ? (
                              <div
                                className="px-1 text-success"
                                style={{ display: "inline" }}
                              >
                                <FaToggleOn
                                  onClick={(e) => {
                                    try {
                                      e.preventDefault();
                                      var bannerr = new FormData();
                                      bannerr.append("status", 2);
                                      (async () => {
                                        const result =
                                          await BannerService.Trash(
                                            banner.id,
                                            bannerr
                                          );
                                        console.log(result);
                                        if (result.data.status === true) {
                                          setLoad(Date.now());
                                          toast.success(
                                            "Thay đổi status thành công!"
                                          );
                                        } else {
                                          toast.error(
                                            "Thay đổi status thất bại!"
                                          );
                                        }
                                      })();
                                    } catch (err) {
                                      alert("loi");
                                    }
                                  }}
                                />
                              </div>
                            ) : (
                              <div
                                className="px-1 text-danger"
                                style={{ display: "inline" }}
                              >
                                <FaToggleOff
                                   onClick={(e) => {
                                    try {
                                      e.preventDefault();
                                      var bannerr = new FormData();
                                      bannerr.append("status", 1);
                                      (async () => {
                                        const result =
                                          await BannerService.updateStatus(
                                            banner.id,
                                            bannerr
                                          );
                                        console.log(result);
                                        if (result.data.status === true) {
                                          setLoad(Date.now());
                                          toast.success(
                                            "Thay đổi status thành công!"
                                          );
                                        } else {
                                          toast.error(
                                            "Thay đổi status thất bại!"
                                          );
                                        }
                                      })();
                                    } catch (err) {
                                      alert("loi");
                                    }
                                  }}
                                />
                              </div>
                            )}

                            <Link
                              to={"/admin/banner/edit/" + banner.id}
                              className="px-1 text-primary"
                            >
                              <MdEdit />
                            </Link>
                            <Link
                              to={"/admin/banner/show/" + banner.id}
                              className="px-1 text-success"
                            >
                              <FaEye />
                            </Link>
                            <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handTrash(banner.id)}
                              >
                                <FaTrash />
                              </Link>
                          </div>
                        </td>
                        <td>{banner.name}</td>
                        <td>{banner.position}</td>
                        <td>{banner.link}</td>
                        <td>{banner.description}</td>
                        <td className="text-center">{banner.id}</td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ListBanner;
