import { useEffect, useState } from "react";
import { urlImg } from "../../../config";
import { Link } from "react-router-dom";
import { FaTrash, FaEye, FaToggleOn } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../../service/UserService";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);
  useEffect(() => {
    (async () => {
      const result = await UserService.getList();
      setUsers(result.data.user);
    })();
  }, [load]);

  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    var user = new FormData();
    user.append("status", status);
    (async () => {
      // const result = await ProductService.Delete(product, id);
      UserService.Delete(user, id);
      setLoad(Date.now());
    })();
  };
  const handleDelete = (id) => {
    try {
      var user = new FormData();
      user.append("status", 0);
      (async () => {
        const result = await UserService.Trash(user,id);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Đưa vào thùng rác thành công!");
        }
      })();
    } catch (err) {
      toast.error("Đưa vào thùng rác thất bại!");
    }
  };

  return (
    <div className="content" style={{ padding: 20 }}>
      <ToastContainer />
      <section className="content-body my-2">
        <div>
          <section className="content-header my-2">
            <h1 className="d-inline">Khách hàng</h1>
            <div className="text-end">
          <Link to={"/admin/user/create"} className="btn btn-sm btn-success">
            <i className="fa fa-plus" /> Thêm
          </Link>
          <Link to="/admin/user/trash" className="btn btn-sm btn-danger">
            <i className="fa fa-trash" /> Thùng rác
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
                {/* <select name className="d-inline me-1">
                  <option value>Tất cả vị trí</option>
                </select>
                <button className="btnfilter">Lọc</button> */}
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
                    user.status !== 0 && user.role !== 1 ? (
                      <tr className="datarow" key={user.id}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          {user.name}
                          <div className="function_style">
                          <button
                                onClick={() => handleStatus(users.id)}
                                className={
                                  user.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {user.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>

                            <Link
                              to={"/admin/user/edit/" + user.id}
                              className="px-1 text-primary"
                            >
                              <MdEdit />
                            </Link>
                            <Link
                              to={"/admin/user/show/" + user.id}
                              className="px-1 text-success"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              className="text-danger mx-1"
                              onClick={() => {
                                handleDelete(user.id);
                              }}
                            >
                              <FaTrash/>
                            </Link>
                          </div>
                        </td>
                        {user.gender !== 1 ? (
                          <td>Nam</td>
                        ) : (
                          <td>Nữ</td>
                        )}
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        {user.roles == 1 ? (
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
      </section>
    </div>
  );
};

export default ListUser;
