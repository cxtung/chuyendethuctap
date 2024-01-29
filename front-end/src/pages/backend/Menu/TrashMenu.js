import { useEffect, useState } from "react";
import MenuService from "../../../service/MenuService";
import { urlImage } from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {  FaToggleOn } from "react-icons/fa";
// import { FaToggleOff } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

import {  FaTrash} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUndo } from "react-icons/fa";



const TrashMenu = () => {
  const [menus, setMenus] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const funcitionn = async () => {
      const result = await MenuService.getList();
      setMenus(result.data.menu);
    };
    funcitionn();
  }, [load]);
  console.log("data", menus);
  const handleDelete = (id) => {
    (async () => {
        const result = await MenuService.Delete(id);
        if (result.data.status === true) {
          toast.success("Đã xóa thành công.", {
          position: toast.POSITION.TOP_RIGHT,
          });
          
          setLoad(Date.now());
      } else {
          toast.error("Error Notification !", {
          position: toast.POSITION.TOP_CENTER,
          });
      }
    })();
  };
  const handleStatus = (id) => {
    setStatus(1);
    console.log(status);
    var category = new FormData();
    category.append("status", status);
    (async () => {
      const result = await MenuService.Trash(category, id);
      if (result.data.status === true) {
        toast.success("Khôi phục thành công", { position: toast.POSITION.TOP_RIGHT,})
        // alert("khôi phục thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  return (
    <div className="content" style={{ padding: 20 }}>
            <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác Menu</h1>
        <ToastContainer/>
        <div className="text-end">
          <Link to={"/admin/menu"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
        
        <div className="row mt-1 align-items-center">
          <div className="col-md-8">
            <select name className="d-inline me-1">
              <option value>Hành động</option>
              <option value>Bỏ vào thùng rác</option>
            </select>
            <button className="btnapply">Áp dụng</button>
          </div>
          <div className="col-md-4 text-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item disabled">
                  <Link className="page-link">«</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    »
                  </Link>
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
                  <th>Tên menu</th>
                  <th>Link</th>
                  <th>Sort_order</th>
                  <th>Parent_id</th>
                  <th>Type</th>
                  <th>Table_id</th>
                  <th>Mô tả</th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
          </thead>
          <tbody>
            {menus &&
              menus.map((menu) =>
                menu.status === 0 ? (
                  <tr className="datarow" key={menu.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="name">
                        <a href="menu_index.html">{menu.name}</a>
                      </div>
                      <div className="function_style">
                          <Link href="#" onClick={()=> handleStatus(menu.id)} className="text-primary mx-1">
                            <TbReload />
                          </Link>
                          <Link href="#" onClick={()=> handleDelete(menu.id)} className="text-danger mx-1">
                          <FaTrash />
                          </Link>
                        </div>
                    </td>
                    <td>{menu.link}</td>
                          <td>{menu.sort_order}</td>
                          <td>{menu.parent_id}</td>
                          <td>{menu.type}</td>
                          <td>{menu.table_id}</td>
                          <td>{menu.description}</td>
                    <td className="text-center">{menu.id}</td>
                  </tr>
                ) : (
                  console.log("kh có item rác nào")
                )
              )}
            {/* <tr className="datarow">
              <td className="text-center">
                <input type="checkbox" id="checkId" />
              </td>
              <td>
                <img src={urlImage + } alt="menu.jpg" />
              </td>
              <td>
                <div className="name">
                  <a href="menu_index.html">Tên thương hiệu</a>
                </div>
                <div className="function_style">
                  <a href="#" className="text-primary mx-1">
                    <i className="fa fa-undo" />
                  </a>
                  <a href="#" className="text-danger mx-1">
                    <i className="fa fa-trash" />
                  </a>
                </div>
              </td>
              <td>Slug</td>
              <td className="text-center">1</td>
            </tr> */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TrashMenu;
