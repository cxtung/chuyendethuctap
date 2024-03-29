import { useEffect, useState } from "react";
import CategoryService from "../../../service/CategoryService";
import { urlImage } from "./../../../config";
import { TbReload } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TrashCategory = () => {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);
  //call API into brandservice
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getList();
      // result la variable ,brands is name table
      setCategories(result.data.categories);
    })();
  }, [load]);
  const handleDelete = (id) => {
    (async () => {
      const result = await CategoryService.destroyBrand(id);
      if (result.data.status === true) {
        toast.success("Success Notification !", {
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
      const result = await CategoryService.Delete(category, id);
    
     
        alert("khôi phục thành công");

        setLoad(Date.now());
     
    })();
  };
    return ( 
      <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác thương hiệu</h1>
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <ul className="manager">
              <li>
                <Link to="/admin/brand">Tất cả (123)</Link>
              </li>
              <li>
                <Link to="#">Xuất bản (12)</Link>
              </li>
              <li>
                <Link to="brand_trash.html">Rác (12)</Link>
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
              <th className="text-center" style={{ width: 130 }}>
                Hình ảnh
              </th>
              <th>Tên thương hiệu</th>
              <th>Tên slug</th>
              <th className="text-center" style={{ width: 30 }}>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category, index) => {
                if (category.status === 0) {
                  return (
                    <tr className="datarow">
                      <td className="text-center">
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "brand/" + category.image}
                          alt="brand.jpg"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link href="brand_index.html"> {category.name}</Link>
                        </div>
                        <div className="function_style">
                          <Link
                            href="#"
                            onClick={() => handleStatus(category.id)}
                            className="text-primary mx-1"
                          >
                            <TbReload />
                          </Link>
                          <Link
                            href="#"
                            onClick={() => handleDelete(category.id)}
                            className="text-danger mx-1"
                          >
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                      <td> {category.slug}</td>
                      <td className="text-center"> {category.id}</td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </section>
    </div>

     );
}
 
export default TrashCategory;