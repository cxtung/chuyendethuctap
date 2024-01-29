import { useEffect, useState } from "react";
import BannerService from "../../../service/BannerService";
import { urlImage } from "../../../config";
import { TbReload } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrashBanner = () => {
  const [banners, setBanners] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);

  useEffect(() => {
    (async () => {
      const result = await BannerService.getList();
      setBanners(result.data.banner);
    })();
  }, [load]);
  const handleStatus = (id) => {
    setStatus(1);
    console.log(status);
    var banner = new FormData();
    banner.append("status", status);
    (async () => {
      const result = await BannerService.Trash(banner, id);
      if (result.data.status === true) {
        toast.success('Khôi phục thành công', {
          position: toast.POSITION.TOP_RIGHT,
          })

        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác Banner</h1>
        <div className="text-end">
          <Link to={"/admin/banner"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
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
      <ToastContainer />
      <section className="content-body my-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 30 }}>
                <input type="checkbox" id="checkboxAll" />
              </th>
              <th className="text-center" style={{ width: 90 }}>
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
                banner.status === 0 ? (
                  <tr className="datarow">
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
                        <td>{banner.name}</td>
                      </div>
                      <div class="function_style">
                        
                          <Link href="#" onClick={()=> handleStatus(banner.id)} className="text-primary mx-1">
                            <TbReload />
                          </Link>
                        <i
                          onClick={() => {
                            try {
                              BannerService.Delete(banner.id);
                              toast.success("Xóa vĩnh viễn thành công!");
                              setLoad(Date.now());

                            } catch (err) {
                              toast.error("Xóa thất bại!");
                            }
                          }}
                          class="fa fa-trash text-danger mx-1"
                        ></i>
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
  );
};

export default TrashBanner;