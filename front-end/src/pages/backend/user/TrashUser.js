import { useEffect, useState } from "react";
import UserService from "../../../service/UserService";
import { urlImg } from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrashUser = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(Date.now());

  useEffect(() => {
    (async () => {
      const result = await UserService.getList();
      setUsers(result.data.user);
    })();
  }, [load]);

  const handleDelete = (id) => {
    try {
      UserService.Delete(id);
      setLoad(Date.now());
      toast.success("Xóa vĩnh viễn thành công!");
    } catch (err) {
      toast.error("Xóa thất bại!");
    }
  };
  const handleUndo = (id) => {
    try {
      var user = new FormData();
      user.append("status", 1);
      (async () => {
        const result = await UserService.Trash(user, id);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Khôi phục thành công!");
        }
      })();
    } catch (err) {
      toast.error("Khôi phục thất bại!");
    }
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác thành viên</h1>
        <div className="text-end">
          <Link to={"/admin/user"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <ul className="manager">
              <li>
                <a href="/admin/user">Tất cả (123)</a>
              </li>
              <li>
                <a href="/admin/user">Xuất bản (12)</a>
              </li>
              <li>
                <a href="/admin/user/trash">Rác (12)</a>
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
              <th>Họ và tên</th>
                  <th>Giới tính</th>
                  <th>Email</th>
                  <th>Tên Tài khoản</th>
                  <th>Quyền</th>
              <th className="text-center" style={{ width: 30 }}>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) =>
                user.status === 0  && user.roles != "customer"  ? (
                  <tr className="datarow" key={user.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td>
                      {user.name}
                      <div class="function_style">
                        <div
                          className="px-1 text-info"
                          style={{ display: "inline" }}
                        >
                          <FaUndo
                            onClick={() => {
                              handleUndo(user.id);
                            }}
                          />
                        </div>
                        <i
                          class="fa fa-trash text-danger mx-1"
                          onClick={() => {
                            handleDelete(user.id);
                          }}
                        ></i>
                      </div>
                    </td>
                    {user.gender !== 1 ? (
                          <td>Nam</td>
                        ) : (
                          <td>Nữ</td>
                        )}
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        {user.role === 1 ? (
                          <td>Thành viên</td>
                        ) : (
                          <td>Khách hàng</td>
                        )}
                    <td className="text-center">{user.id}</td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TrashUser;
