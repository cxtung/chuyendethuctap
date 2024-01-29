import { useEffect, useState } from "react";
import MenuService from "../../../service/MenuService";
import { urlImg } from "../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
// import CreateMenu from "./CreateMenu";
import { toast, ToastContainer } from 'react-toastify';

const ListMenu = () => {
  const [Menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSort_order] = useState("");
  const [parent_id, setParent_id] = useState("");
  const [type, setType] = useState("");
  const [table_id, setTable_id] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into Menuservice
  useEffect(() => {
    (async () => {
      const result = await MenuService.getList();
      // result la variable ,Menus is name table
      setMenus(result.data.menu);
    })();
  }, [load]);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    console.log(status);
    var menu = new FormData();
    menu.append("status", status);
    (async () => {
      // const result = await MenuService.Delete(menu, id);
      MenuService.Trash(menu, id);
      setLoad(Date.now());
    })();
  };

  const handTrash = (id) => {
    // setStatus(0);
    console.log(status);
    // console.log(`id:${id}`);
    var menu = new FormData();
    menu.append("status", 0);
    (async () => {
      const result = await MenuService.Trash(menu, id);
      if (result.data.status === true) {
        toast.success('Chuyển vào thùng rác thành công')
        // alert("Xóa thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thương hiệu</h1>
        <ToastContainer/>
        <hr style={{ border: "none" }} />
        <div className="text-end">
          <Link to={"/admin/menu/create"} className="btn btn-sm btn-success">
            <i className="fa fa-plus" /> Thêm Menu
          </Link>
          <Link to="/admin/menu/trash" className="btn btn-sm btn-danger">
            <i className="fa fa-trash" /> Thùng rác
            </Link>
        </div>
      </section>
      <section className="content-body my-2">
        <div className="row">
         
            
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
                <button className="btnsearch d-inline">Tìm kiếm</button>
              </div>
            </div>
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
                {Menus &&
                  Menus.map((menu, index) => {
                    if (menu.status !== 0) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <div className="name">
                              <Link to={"/admin/menu/edit/" + menu.id}>
                                {menu.name}
                              </Link>
                            </div>
                            <div className="function_style">
                      
                              <button
                                onClick={() => handleStatus(menu.id)}
                                className={
                                  menu.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {menu.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>
                              <Link
                                to={"/admin/menu/edit/" + menu.id}
                                className="px-1 text-primary"
                                key={menu.id}
                              >
                                <FaRegEdit />
                              </Link>
                              <Link
                                to={"/admin/menu/show/" + menu.id}
                                className="px-1 text-info"
                              >
                                <BiShow />
                              </Link>
                              <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handTrash(menu.id)}
                              >
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
                      );
                    }
                  })}
              </tbody>
            </table>
          
        </div>
        
      </section>
    </div>
  );
};

export default ListMenu;
