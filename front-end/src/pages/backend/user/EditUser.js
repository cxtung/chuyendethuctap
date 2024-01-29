import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../../../service/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(2);
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [load, setLoad] = useState(Date.now());

  useEffect(() => {
    (async () => {
      const result = await UserService.getID(id);
      setName(result.data.user.name);
      setUsername(result.data.user.username);
      setPassword(result.data.user.password);
      setGender(result.data.user.gender);
      setPhone(result.data.user.phone);
      setEmail(result.data.user.email);
      setRoles(result.data.user.roles);
      setStatus(result.data.user.status);
    })();
  }, []);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      var user = new FormData();
      user.append("name", name);
      user.append("username", username);
      user.append("password", password);
      user.append("gender", gender);
      user.append("phone", phone);
      user.append("email", email);
      user.append("roles", roles);
      user.append("status", status);
      (async () => {
        const result = await UserService.Update(user, id);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Sửa thành công!");
        }
      })();
    } catch (err) {
      toast.error("Sửa thất bại!");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật thành viên</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <button
              className="btn btn-success btn-sm"
              name="CAPNHAT"
              onClick={handleSubmit}
            >
              <i className="fa fa-save" /> Lưu [Cập nhật]
            </button>
            <a href="/admin/user" className="btn btn-primary btn-sm">
              <i className="fa fa-arrow-left" /> Về danh sách
            </a>
          </div>
        </div>
      </section>
      <ToastContainer />
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label>
                <strong>Tên đăng nhập(*)</strong>
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Mật khẩu(*)</strong>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Xác nhận mật khẩu(*)</strong>
              </label>
              <input
                type="password"
                name="re_password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Email(*)</strong>
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Xác nhận email(*)</strong>
              </label>
              <input
                type="text"
                name="re_email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Xác nhận email"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Điện thoại(*)</strong>
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Điện thoại"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label>
                <strong>Họ tên (*)</strong>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Họ tên"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Giới tính</strong>
              </label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-select"
              >
                <option>Chọn giới tinh</option>
                <option value={1}>Nam</option>
                <option value={0}>Nữ</option>
              </select>
            </div>
            <div className="mb-3">
              <label>
                <strong>Quyền</strong>
              </label>
              <select
                name="gender"
                id="gender"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
                className="form-select"
              >
                {/* <option>Chọn quyền</option> */}
                <option value={1}>Thành viên</option>
                <option value={0}>Khách hàng</option>
              </select>
            </div>
            <div className="mb-3">
              <label>
                <strong>Trạng thái</strong>
              </label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select"
              >
                <option value={1}>Xuất bản</option>
                <option value={2}>Chưa xuất bản</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
