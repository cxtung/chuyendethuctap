import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import UserService from "../../../service/UserService";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {}, [load]);

  const handleSubmit = (e) => {
    try {
      if (password != re_password) {
        return;
      }
      e.preventDefault();
      var user = new FormData();
      user.append("name", name);
      user.append("username", username);
      user.append("password", password);
      user.append("email", email);
      user.append("phone", phone);
      user.append("gender", gender);
      user.append("status", status);
      user.append("roles", roles);
      console.log(user);
      (async () => {
        const result = await UserService.Store(user);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Thêm thành công!");
        }
      })();
    } catch (err) {
      toast.error("Thêm thất bại!");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thêm thành viên</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <button
              className="btn btn-success btn-sm"
              name="THEM"
              onClick={handleSubmit}
            >
              <i className="fa fa-save" /> Lưu [Thêm]
            </button>
            <a href="/admin/user" className="btn btn-primary btn-sm">
              <i className="fa fa-arrow-left" /> Về danh sách
            </a>
          </div>
        </div>
      </section>
      <ToastContainer />
      <section className="content-body my-2">
        <form action method="post" encType="multipart/form-data">
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
                  required
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
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Xác nhận mật khẩu(*)</strong>
                </label>
                <input
                  type="password"
                  name="re_password"
                  value={re_password}
                  onChange={(e) => setRePassword(e.target.value)}
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Giới tính</strong>
                </label>
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  id="gender"
                  className="form-control"
                  required
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
                  name="roles"
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-control"
                >
                  <option value={1}>Nhân viên</option>
                  <option value={0}>Khách hàng</option>
                  {/* <option value={"customer"}></option> */}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateUser;
