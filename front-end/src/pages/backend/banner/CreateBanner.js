import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import BannerService from "../../../service/BannerService";
import { Link } from "react-router-dom";


const CreateBanner = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {}, [load]);

  const handSubmit = (e) => {
    try {
      e.preventDefault();
      const image = document.getElementById("image");
      var banner = new FormData();
      banner.append("name", name);
      banner.append("link", link);
      banner.append("position", position);
      banner.append("description", description);
      banner.append("status", status);
      banner.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
        const result = await BannerService.Store(banner);
        if (result.data.status === true) {
          setLoad(Date.now());
          setName("");
          setDescription("");
          setPosition("");
          setLink("");
          setStatus(2);
          toast.success("Thêm banner mới thành công!");
        } else {
          toast.error("Thêm thất bại!");
        }
      })();
    } catch (err) {
      alert("loi");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thêm banner</h1>
        <div className="col-md-12 text-end">
            <Link to="/admin/banner" className="btn btn-primary btn-sm">
            <i className="fa fa-arrow-left" /> Về danh sách
            </Link>
          </div>
      </section>
      <section className="content-body my-2">
        <div className="row">
          <ToastContainer />
          <div className="col-md-9">
            <form>
              <div className="mb-3">
                <label>
                  <strong>Tên banner (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Nhập tên banner"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Vị trí(*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="form-control"
                  placeholder="Nhập vị trí"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Liên kết</strong>
                </label>
                <input
                  type="text"
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                  placeholder="Nhập liên kết"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  name="description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  placeholder="Nhập mô tả"
                />
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Đăng</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <p>Chọn trạng thái đăng</p>
                <select
                  name="status"
                  onChange={(value) => {
                    setStatus(value.target.value);
                  }}
                  className="form-select"
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="box-footer text-end px-2 py-3">
                <button
                  type="submit"
                  onClick={handSubmit}
                  className="btn btn-success btn-sm text-end"
                >
                  <i className="fa fa-save" aria-hidden="true" /> Đăng
                </button>
              </div>
            </div>
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Vị trí (*)</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <select
                  name="position"
                  onChange={(value) => {
                    setPosition(value.target.value);
                  }}
                  className="form-select"
                >
                  <option>Chọn vị trí</option>
                  <option value="slideshow">Slide Show</option>
                  <option value="ads">Quảng cáo</option>
                </select>
                <p className="pt-2">Vị trí hiển thị banner</p>
              </div>
            </div>
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Hình (*)</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <input type="file" name="image" id="image" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBanner;
